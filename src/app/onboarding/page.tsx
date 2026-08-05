"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Shield, ArrowRight, CheckCircle2, ShieldCheck, Flame, HeartHandshake, Zap, Target } from "lucide-react"

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [agreed, setAgreed] = useState(false)
  const [selectedStruggle, setSelectedStruggle] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const struggles = [
    { id: "pureza", icon: Flame, title: "Batalha pela Pureza", desc: "Vencer vícios e construir uma mente limpa." },
    { id: "casamento", icon: HeartHandshake, title: "Restauração Familiar", desc: "Liderar a esposa e os filhos com sabedoria." },
    { id: "financas", icon: Target, title: "Domínio Financeiro", desc: "Sair das dívidas e prosperar com propósito." },
    { id: "proposito", icon: Zap, title: "Falta de Propósito", desc: "Encontrar clareza, força e direção de vida." },
  ]

  const handleNext = () => {
    if (step === 1 && !agreed) return
    if (step === 2 && !selectedStruggle) return

    if (step < 3) {
      setStep(step + 1)
      if (step + 1 === 3) {
        setIsProcessing(true)
        // Simulate personalized setup based on struggle
        setTimeout(() => {
          setIsProcessing(false)
        }, 2500)
      }
    }
  }

  const handleComplete = () => {
    // Here we would normally save the onboarding state to Supabase user metadata
    router.push("/dashboard/cursos")
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-2xl px-6 relative z-10">
        
        {/* Header / Progress */}
        <div className="flex flex-col items-center mb-12">
          <Shield className="h-12 w-12 text-primary mb-6" />
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className={`h-1.5 w-12 rounded-full transition-all duration-500 ${step >= i ? 'bg-primary' : 'bg-primary/20'}`}
              />
            ))}
          </div>
        </div>

        {/* STEP 1: JURAMENTO */}
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold font-serif uppercase tracking-widest text-white">O Juramento</h1>
              <p className="text-lg text-muted-foreground">Antes de cruzar esta porta, você precisa decidir se está disposto a pagar o preço da transformação.</p>
            </div>

            <div className="bg-zinc-950 border border-border/40 p-8 rounded-xl shadow-2xl relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
              <div className="space-y-6 text-zinc-300 leading-relaxed text-lg">
                <p>Eu reconheço que a mediocridade não é o meu destino.</p>
                <p>Eu me comprometo a assumir a responsabilidade total pela minha vida, minha família e minhas escolhas, sem culpar os outros pelas minhas falhas.</p>
                <p>Eu prometo buscar a verdade, andar em integridade e lutar diariamente para forjar um caráter à prova de balas.</p>
              </div>

              <div className="mt-8 pt-6 border-t border-border/40">
                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-1">
                    <input 
                      type="checkbox" 
                      className="peer sr-only"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                    />
                    <div className="w-6 h-6 border-2 border-muted-foreground rounded bg-transparent peer-checked:bg-primary peer-checked:border-primary transition-all flex items-center justify-center">
                      <CheckCircle2 className={`w-4 h-4 text-black opacity-0 peer-checked:opacity-100 transition-opacity`} />
                    </div>
                  </div>
                  <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    Sim, eu assumo este compromisso com Deus, comigo mesmo e com meus irmãos de jornada.
                  </span>
                </label>
              </div>
            </div>

            <div className="flex justify-end">
              <Button 
                size="lg" 
                onClick={handleNext} 
                disabled={!agreed}
                className="bg-primary hover:bg-primary/90 text-black font-bold px-8"
              >
                Prosseguir <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        )}

        {/* STEP 2: DIAGNÓSTICO */}
        {step === 2 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold font-serif uppercase tracking-widest text-white">Identifique o Alvo</h1>
              <p className="text-lg text-muted-foreground">Qual é a área da sua vida que está sangrando agora e precisa de intervenção imediata?</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {struggles.map((s) => {
                const Icon = s.icon;
                const isSelected = selectedStruggle === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedStruggle(s.id)}
                    className={`text-left p-6 rounded-xl border transition-all duration-300 relative overflow-hidden group
                      ${isSelected 
                        ? 'bg-primary/10 border-primary shadow-[0_0_20px_rgba(234,179,8,0.15)]' 
                        : 'bg-zinc-950 border-border/40 hover:border-primary/50'
                      }`}
                  >
                    {isSelected && <div className="absolute top-0 right-0 p-3"><CheckCircle2 className="h-5 w-5 text-primary" /></div>}
                    <Icon className={`h-8 w-8 mb-4 ${isSelected ? 'text-primary' : 'text-muted-foreground group-hover:text-primary/70'}`} />
                    <h3 className={`font-bold text-lg mb-2 ${isSelected ? 'text-primary' : 'text-zinc-200'}`}>{s.title}</h3>
                    <p className="text-sm text-zinc-500">{s.desc}</p>
                  </button>
                )
              })}
            </div>

            <div className="flex justify-end pt-4">
              <Button 
                size="lg" 
                onClick={handleNext} 
                disabled={!selectedStruggle}
                className="bg-primary hover:bg-primary/90 text-black font-bold px-8"
              >
                Gerar Meu Plano <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        )}

        {/* STEP 3: RESULTADO */}
        {step === 3 && (
          <div className="space-y-8 animate-in zoom-in-95 duration-700 text-center py-12">
            
            {isProcessing ? (
              <div className="space-y-6 flex flex-col items-center">
                <div className="relative">
                  <div className="w-24 h-24 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                  <Shield className="h-10 w-10 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <h2 className="text-2xl font-bold font-serif tracking-widest text-white">Forjando sua Trilha...</h2>
                <p className="text-muted-foreground">Adaptando a plataforma para os seus desafios.</p>
              </div>
            ) : (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-primary/40 ring-offset-4 ring-offset-black">
                  <ShieldCheck className="h-12 w-12 text-primary" />
                </div>
                <h1 className="text-4xl font-bold font-serif uppercase tracking-widest text-white">Você está pronto.</h1>
                <p className="text-xl text-zinc-400 max-w-md mx-auto">
                  A plataforma foi configurada. Sua primeira trilha de treinamento já está liberada no painel.
                </p>
                
                <div className="pt-8">
                  <Button 
                    size="lg" 
                    onClick={handleComplete} 
                    className="bg-primary hover:bg-primary/90 text-black font-bold px-12 h-14 text-lg w-full sm:w-auto"
                  >
                    Entrar na Plataforma
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  )
}
