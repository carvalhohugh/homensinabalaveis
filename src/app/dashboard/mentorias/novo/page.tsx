"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Send, CheckCircle2, Shield } from "lucide-react"

export default function NovoMentoradoPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    group: "alpha"
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simula a requisição para a API e o disparo do N8N / WhatsApp
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 2000)
  }

  if (success) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-green-500/10 text-green-500 p-4 rounded-lg flex items-center gap-3 border border-green-500/20">
          <CheckCircle2 className="h-6 w-6" />
          <div>
            <h3 className="font-bold">Mentorado Cadastrado com Sucesso!</h3>
            <p className="text-sm opacity-90">O convite oficial foi disparado para o WhatsApp e E-mail de {formData.name}.</p>
          </div>
        </div>

        {/* Simulação visual do Convite enviado */}
        <Card className="border-primary/50 overflow-hidden relative bg-[#0a0a0a]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          <CardHeader className="text-center pb-2">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-primary tracking-[0.2em] text-xs uppercase font-bold">Mentoria</h2>
            <CardTitle className="text-3xl md:text-4xl font-serif text-white tracking-tight uppercase mt-2">
              Homem Inabalável
            </CardTitle>
          </CardHeader>
          
          <CardContent className="pt-6 pb-12 flex flex-col items-center text-center space-y-6 relative">
            
            <div className="w-full flex items-center justify-center gap-4">
              <div className="h-px bg-primary/30 flex-1" />
              <div className="h-6 w-6 rounded-full border border-primary/50 flex items-center justify-center text-primary text-xs font-bold">✓</div>
              <div className="h-px bg-primary/30 flex-1" />
            </div>

            <h3 className="text-2xl font-bold uppercase text-white">
              Você foi Selecionado
            </h3>
            
            <div className="bg-[#e8e4d9] text-[#1a1a1a] p-8 rounded shadow-2xl relative max-w-md w-full rotate-1">
              <p className="font-serif italic text-lg mb-4 text-left">Parabéns {formData.name.split(' ')[0]}!</p>
              <p className="text-sm mb-4 text-left font-medium">
                Após um cuidadoso processo de avaliação, você foi escolhido para participar da <strong>Mentoria Homem Inabalável</strong>.
              </p>
              <p className="text-sm mb-4 text-left font-medium">
                Você está prestes a iniciar uma jornada que não é para qualquer um.
              </p>
              <div className="border-l-4 border-[#b5904d] pl-4 mb-6 text-left">
                <p className="font-bold text-sm">POUCAS VAGAS. ESCOLHA A DEDO.</p>
                <p className="font-bold text-sm">COMPROMISSO REAL. TRANSFORMAÇÃO REAL.</p>
              </div>
              <p className="font-serif italic text-xl text-left mb-6">O melhor ainda está por vir.</p>
              
              {/* Wax Seal Simulation */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-800 rounded-full flex items-center justify-center shadow-lg transform -rotate-12 border-4 border-red-900/50">
                <div className="w-20 h-20 border-2 border-red-900/40 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-red-900/60" />
                </div>
              </div>
            </div>

          </CardContent>
          <CardFooter className="bg-black/50 border-t border-white/5 py-4 flex justify-center">
             <Button variant="outline" onClick={() => setSuccess(false)}>
               Cadastrar Novo Mentorado
             </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Novo Mentorado</h1>
        <p className="text-muted-foreground mt-2">
          Cadastre um novo aluno e dispare automaticamente o convite oficial.
        </p>
      </div>

      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Dados do Participante</CardTitle>
            <CardDescription>
              As informações serão usadas para o envio do convite no WhatsApp e E-mail.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input 
                id="name" 
                placeholder="Ex: João da Silva" 
                required 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="joao@exemplo.com" 
                  required 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">WhatsApp</Label>
                <Input 
                  id="phone" 
                  placeholder="(11) 99999-9999" 
                  required 
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <Label htmlFor="group">Turma / Grupo</Label>
              <select 
                id="group" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={formData.group}
                onChange={e => setFormData({...formData, group: e.target.value})}
              >
                <option value="alpha">Grupo Alpha - Online (Segundas)</option>
                <option value="beta">Grupo Beta - Presencial (Terças)</option>
                <option value="individual">Mentoria Individual</option>
              </select>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t border-border pt-6">
            <Button variant="ghost" type="button">Cancelar</Button>
            <Button type="submit" disabled={loading} className="font-bold">
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
              {loading ? "Processando e Enviando..." : "Cadastrar e Enviar Convite"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
