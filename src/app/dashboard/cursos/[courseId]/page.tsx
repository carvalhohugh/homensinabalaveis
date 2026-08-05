"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PlayCircle, CheckCircle, Lock, ChevronLeft, ChevronDown, Headphones, Video as VideoIcon, ShieldCheck } from "lucide-react"
import dynamic from "next/dynamic"

// Dynamically import ReactPlayer to avoid SSR hydration issues
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false })

export default function CoursePlayerPage() {
  const [isPodcastMode, setIsPodcastMode] = useState(false)

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] -m-6">
      {/* Top Navigation Bar */}
      <div className="h-14 border-b border-border bg-card flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild className="text-muted-foreground">
            <a href="/dashboard/cursos">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Voltar aos Cursos
            </a>
          </Button>
          <div className="h-4 w-px bg-border" />
          <span className="font-semibold text-sm">Fundação Inabalável</span>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            className={`font-medium border-primary/20 ${isPodcastMode ? 'bg-primary/20 text-primary' : 'hover:bg-primary/10 hover:text-primary'}`}
            onClick={() => setIsPodcastMode(!isPodcastMode)}
          >
            {isPodcastMode ? <VideoIcon className="h-4 w-4 mr-2" /> : <Headphones className="h-4 w-4 mr-2" />}
            {isPodcastMode ? 'Voltar para Vídeo' : 'Modo Treino (Áudio)'}
          </Button>
          <Button size="sm" className="font-medium bg-primary/10 text-primary hover:bg-primary/20 border-0">
            <CheckCircle className="h-4 w-4 mr-2" />
            Marcar como Concluída
          </Button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Content Area (Video/Podcast) */}
        <div className="flex-1 flex flex-col overflow-y-auto bg-black">
          {/* Player Container */}
          <div className="w-full bg-black aspect-video relative flex items-center justify-center border-b border-border/20">
            
            {/* The Actual Video Player (Hidden in Podcast Mode but still rendering/playing) */}
            <div className={`absolute inset-0 ${isPodcastMode ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="100%"
                height="100%"
                controls={!isPodcastMode}
                playing={true}
              />
            </div>

            {/* Podcast Mode Overlay */}
            {isPodcastMode && (
              <div className="absolute inset-0 bg-zinc-950 flex flex-col items-center justify-center z-10 animate-in fade-in duration-500">
                <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
                
                <div className="w-48 h-48 rounded-2xl bg-zinc-900 border border-border/50 shadow-2xl mb-8 flex items-center justify-center relative overflow-hidden ring-4 ring-primary/20">
                  <ShieldCheck className="h-20 w-20 text-primary/40 absolute" />
                  <Headphones className="h-12 w-12 text-primary z-10" />
                </div>
                
                <h2 className="text-2xl font-bold font-serif tracking-wide text-white mb-2">01. A Forja do Homem</h2>
                <p className="text-primary font-medium tracking-widest uppercase text-xs mb-8">Modo Treino Ativado</p>

                <div className="flex items-center gap-1 h-8">
                  {[1,2,3,4,5,4,3,2,1,2,3,4,3,2,1].map((bar, i) => (
                    <div 
                      key={i} 
                      className="w-1.5 bg-primary/80 rounded-full animate-pulse" 
                      style={{ 
                        height: `${Math.max(20, bar * 20)}%`,
                        animationDelay: `${i * 0.1}s` 
                      }} 
                    />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">O áudio continua tocando com a tela bloqueada.</p>
              </div>
            )}
          </div>
          
          {/* Lesson Details */}
          <div className="p-8 bg-background flex-1 overflow-y-auto">
            <h1 className="text-2xl font-bold mb-2">Aula 01 - A Forja do Caráter</h1>
            <p className="text-muted-foreground mb-8">Nesta aula, abordamos os fundamentos para a construção de um caráter forte e inabalável em meio às pressões do dia a dia.</p>
            
            {/* Tabs for Content/Comments/Materials could go here */}
            <div className="border-b border-border pb-4 mb-4">
              <h3 className="font-semibold mb-2">Materiais Complementares</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-primary hover:underline flex items-center gap-2">
                    📄 Resumo_A_Forja.pdf
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Course Modules Sidebar */}
        <div className="w-80 border-l border-border bg-card flex flex-col">
          <div className="p-4 font-bold border-b border-border bg-muted/30">
            Conteúdo do Treinamento
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-2">
            
            {/* Module 1 */}
            <div className="border border-border rounded-md overflow-hidden">
              <div className="bg-muted/50 p-3 flex justify-between items-center cursor-pointer hover:bg-muted">
                <span className="font-semibold text-sm">Módulo 1: A Base</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="bg-background">
                <div className="p-3 text-sm border-l-2 border-primary bg-primary/5 flex items-center gap-3 cursor-pointer">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  <span className="font-medium">Aula 01 - A Forja do Caráter</span>
                </div>
                <div className="p-3 text-sm border-l-2 border-transparent hover:bg-muted flex items-center gap-3 cursor-pointer">
                  <PlayCircle className="h-4 w-4 text-muted-foreground shrink-0" />
                  <span className="text-muted-foreground">Aula 02 - Assumindo Responsabilidade</span>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="border border-border rounded-md overflow-hidden opacity-75">
              <div className="bg-muted/50 p-3 flex justify-between items-center cursor-not-allowed">
                <span className="font-semibold text-sm">Módulo 2: Domínio Próprio</span>
                <Lock className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
