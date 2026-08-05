"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Shield, CreditCard, Lock, CheckCircle2, Loader2, ArrowRight } from "lucide-react"

export default function CheckoutPage() {
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const [success, setSuccess] = useState(false)

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing and user creation
    setTimeout(() => {
      setIsProcessing(false)
      setSuccess(true)
      
      // Redirect to onboarding after successful payment
      setTimeout(() => {
        router.push("/onboarding")
      }, 3000)
    }, 2500)
  }

  if (success) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md text-center space-y-6 animate-in zoom-in-95 duration-500">
          <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-12 w-12 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold font-serif text-white">Pagamento Aprovado!</h1>
          <p className="text-zinc-400 text-lg">Sua vaga na Mentoria Homens Inabaláveis está garantida.</p>
          <div className="bg-zinc-900 border border-border p-4 rounded-xl mt-8">
            <p className="text-sm text-zinc-500 mb-2">Redirecionando para a sua integração...</p>
            <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full animate-[progress_3s_ease-in-out]" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row">
      {/* Left Column: Product Info */}
      <div className="w-full md:w-1/2 bg-zinc-950 p-8 md:p-16 flex flex-col justify-between border-r border-border/40">
        <div>
          <div className="flex items-center gap-2 mb-12">
            <Shield className="h-8 w-8 text-primary" />
            <span className="font-serif font-bold text-xl tracking-widest text-white uppercase">Inabaláveis</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Assinatura Anual: Mentoria Inabalável</h1>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
            Acesso completo a todas as trilhas de conhecimento, comunidade exclusiva, desafios práticos e chamadas ao vivo.
          </p>

          <div className="space-y-4 mb-12">
            {[
              "LMS Completo (Modo Vídeo e Podcast)",
              "Comunidade e Networking de Alto Nível",
              "Acompanhamento Direto e Prontuário",
              "Gamificação e Desafios Semanais"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="text-zinc-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm text-zinc-600 flex items-center gap-2">
            <Lock className="h-4 w-4" /> Ambiente 100% seguro e criptografado.
          </p>
        </div>
      </div>

      {/* Right Column: Checkout Form */}
      <div className="w-full md:w-1/2 bg-black p-8 md:p-16 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="mb-8 flex justify-between items-end border-b border-border/50 pb-6">
            <div>
              <p className="text-zinc-500 text-sm mb-1">Total a pagar hoje</p>
              <p className="text-4xl font-bold text-white">R$ 997<span className="text-lg text-zinc-500">/ano</span></p>
            </div>
            <p className="text-primary text-sm font-bold">12x de R$ 99,70</p>
          </div>

          <form onSubmit={handlePayment} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Nome Completo</label>
              <input required type="text" placeholder="João da Silva" className="w-full bg-zinc-900 border border-border/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">E-mail (Será seu acesso)</label>
              <input required type="email" placeholder="joao@exemplo.com" className="w-full bg-zinc-900 border border-border/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Dados do Cartão</label>
              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                <input required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-zinc-900 border border-border/50 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Validade</label>
                <input required type="text" placeholder="MM/AA" className="w-full bg-zinc-900 border border-border/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">CVC</label>
                <input required type="text" placeholder="123" className="w-full bg-zinc-900 border border-border/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" />
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={isProcessing}
              className="w-full h-14 bg-primary hover:bg-primary/90 text-black font-bold text-lg mt-8"
            >
              {isProcessing ? (
                <>Processando... <Loader2 className="ml-2 h-5 w-5 animate-spin" /></>
              ) : (
                <>Finalizar Assinatura Segura <ArrowRight className="ml-2 h-5 w-5" /></>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
