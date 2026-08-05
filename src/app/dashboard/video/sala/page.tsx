"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MicOff, Mic, VideoOff, Video as VideoIcon, PhoneMissed, MonitorUp, Users, MessageSquare } from "lucide-react"

export default function SalaVideoPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [screenStream, setScreenStream] = useState<MediaStream | null>(null)
  const [isAudioMuted, setIsAudioMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const [isSharingScreen, setIsSharingScreen] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    async function setupCamera() {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        setStream(mediaStream)
        if (videoRef.current && !isSharingScreen) {
          videoRef.current.srcObject = mediaStream
        }
      } catch (err) {
        console.error("Erro ao acessar câmera:", err)
        setError("Não foi possível acessar a câmera e o microfone. Verifique as permissões.")
      }
    }
    setupCamera()

    return () => {
      if (stream) stream.getTracks().forEach(track => track.stop())
      if (screenStream) screenStream.getTracks().forEach(track => track.stop())
    }
  }, [])

  const toggleAudio = () => {
    if (stream) {
      const audioTrack = stream.getAudioTracks()[0]
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled
        setIsAudioMuted(!audioTrack.enabled)
      }
    }
  }

  const toggleVideo = () => {
    if (stream) {
      const videoTrack = stream.getVideoTracks()[0]
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled
        setIsVideoOff(!videoTrack.enabled)
      }
    }
  }

  const toggleScreenShare = async () => {
    if (!isSharingScreen) {
      try {
        const displayStream = await navigator.mediaDevices.getDisplayMedia({ video: true })
        setScreenStream(displayStream)
        setIsSharingScreen(true)
        if (videoRef.current) {
          videoRef.current.srcObject = displayStream
        }
        
        // Listen for when user clicks "Stop sharing" on the browser bar
        displayStream.getVideoTracks()[0].onended = () => {
          setIsSharingScreen(false)
          setScreenStream(null)
          if (videoRef.current) {
            videoRef.current.srcObject = stream
          }
        }
      } catch (err) {
        console.error("Erro ao compartilhar tela:", err)
      }
    } else {
      if (screenStream) {
        screenStream.getTracks().forEach(track => track.stop())
        setScreenStream(null)
      }
      setIsSharingScreen(false)
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
    }
  }

  // --- Chat State ---
  const [messages, setMessages] = useState([
    { id: 1, user: "João", text: "Boa noite, mestres! Chegando agora.", isMe: false },
    { id: 2, user: "Pedro", text: "Estou com o áudio meio ruim, mas ouvindo bem.", isMe: false },
    { id: 3, user: "Lucas", text: "Essa aula vai ficar gravada na plataforma?", isMe: false },
  ])
  const [newMessage, setNewMessage] = useState("")
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!newMessage.trim()) return
    
    setMessages([...messages, { id: Date.now(), user: "Você", text: newMessage.trim(), isMe: true }])
    setNewMessage("")
    
    // Scroll to bottom after message
    setTimeout(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
      }
    }, 100)
  }

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Sessão Alpha</h1>
          <p className="text-sm text-muted-foreground">Reunião em andamento - 12 Participantes</p>
        </div>
        <Button variant="destructive" className="font-bold asChild">
          <a href="/dashboard/video">
            <PhoneMissed className="mr-2 h-4 w-4" /> Sair da Sala
          </a>
        </Button>
      </div>

      <div className="flex-1 flex gap-4 overflow-hidden">
        {/* Main Video Area */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex-1 bg-zinc-900 rounded-xl border border-border relative overflow-hidden flex items-center justify-center">
            
            {error ? (
              <div className="text-red-500 font-medium px-4 text-center">{error}</div>
            ) : (
              <video 
                ref={videoRef}
                autoPlay 
                playsInline 
                muted // always mute local playback to avoid echo
                className={`w-full h-full object-cover ${isVideoOff ? 'hidden' : 'block'}`}
              />
            )}

            {isVideoOff && !error && (
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                <div className="h-24 w-24 bg-zinc-800 rounded-full flex items-center justify-center text-4xl text-zinc-500 font-bold uppercase">
                  VC
                </div>
              </div>
            )}
            
            {/* Controls Overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-2xl">
              <Button 
                variant="secondary" 
                size="icon" 
                onClick={toggleAudio}
                className={`rounded-full border-0 ${isAudioMuted ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
              >
                {isAudioMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
              </Button>
              <Button 
                variant="secondary" 
                size="icon" 
                onClick={toggleVideo}
                className={`rounded-full border-0 ${isVideoOff ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
              >
                {isVideoOff ? <VideoOff className="h-5 w-5" /> : <VideoIcon className="h-5 w-5" />}
              </Button>
              <Button 
                variant="secondary" 
                size="icon" 
                onClick={toggleScreenShare}
                className={`rounded-full border-0 hidden sm:flex ${isSharingScreen ? 'bg-primary hover:bg-primary/90 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
              >
                <MonitorUp className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Participants Gallery Grid */}
          <div className="h-32 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 shrink-0">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-zinc-800 rounded-lg border border-border flex items-center justify-center relative overflow-hidden">
                 <span className="text-zinc-600 font-bold">P{i}</span>
                 <div className="absolute bottom-1 right-1">
                   <MicOff className="h-3 w-3 text-red-500" />
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat / Sidebar */}
        <Card className="w-80 hidden lg:flex flex-col border-border rounded-xl">
          <CardHeader className="pb-3 border-b border-border">
            <CardTitle className="text-sm flex items-center justify-between">
              <span className="flex items-center gap-2"><MessageSquare className="h-4 w-4" /> Chat da Sala</span>
              <span className="flex items-center gap-1 text-muted-foreground"><Users className="h-4 w-4" /> 12</span>
            </CardTitle>
          </CardHeader>
          <CardContent ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
            {messages.map(msg => (
              <div key={msg.id} className="space-y-1">
                <span className={`font-bold ${msg.isMe ? 'text-primary' : 'text-foreground'}`}>{msg.user}:</span>
                <p className="text-muted-foreground">{msg.text}</p>
              </div>
            ))}
          </CardContent>
          <div className="p-4 border-t border-border mt-auto">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
              <input 
                type="text" 
                placeholder="Digite uma mensagem..." 
                className="flex-1 bg-muted rounded-md px-3 py-2 text-sm border-0 focus:ring-1 focus:ring-primary outline-none" 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <Button type="submit" size="sm">Enviar</Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  )
}
