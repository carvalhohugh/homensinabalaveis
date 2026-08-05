"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft, FileText, Calendar, CheckCircle2, ShieldAlert, Sparkles, Loader2 } from "lucide-react"

export default function ProntuarioPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [biblicalAdvice, setBiblicalAdvice] = useState<any>(null)
  const [notes, setNotes] = useState("")

  const handleGenerateVerse = async () => {
    if (!notes) return
    setIsGenerating(true)
    
    try {
      const response = await fetch("/api/bible-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: notes }),
      })
      
      const result = await response.json()
      if (result.success) {
        setBiblicalAdvice(result.data)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center gap-4 border-b border-border pb-4">
        <Button variant="ghost" size="sm" asChild className="text-muted-foreground">
          <a href="/dashboard/mentorias">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Voltar
          </a>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Prontuário: João da Silva</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Coluna Esquerda: Perfil e Status */}
        <div className="space-y-6">
          <Card className="border-primary/20 bg-card/50">
            <CardHeader className="text-center">
              <div className="mx-auto h-20 w-20 bg-muted rounded-full flex items-center justify-center text-2xl font-bold text-muted-foreground mb-4">
                JD
              </div>
              <CardTitle>João da Silva</CardTitle>
              <CardDescription>joao@exemplo.com<br/>WhatsApp: (11) 99999-9999</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Turma</span>
                <span className="font-medium">Grupo Alpha</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Ingresso</span>
                <span className="font-medium">10/08/2026</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Nível Atual</span>
                <span className="font-bold text-primary flex items-center gap-1"><ShieldAlert className="h-3 w-3"/> Guerreiro</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tarefas (Homework)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Leitura: A Forja do Caráter</p>
                  <p className="text-xs text-muted-foreground">Entregue em 15/08</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full border-2 border-muted shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Jejum de Dopamina</p>
                  <p className="text-xs text-muted-foreground">Pendente</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Coluna Direita: Registro de Sessões */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle>Novo Registro de Sessão</CardTitle>
                <CardDescription>Anote os pontos chave discutidos no acompanhamento de hoje.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Anotações Confidenciais do Mentor (Descreva o problema para a IA)</Label>
                <Textarea 
                  placeholder="Ex: O João compartilhou que tem tido muitas brigas no casamento..." 
                  className="min-h-[120px]"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
              
              <div className="flex justify-end">
                <Button 
                  type="button" 
                  variant="secondary" 
                  size="sm"
                  onClick={handleGenerateVerse}
                  disabled={isGenerating || !notes}
                  className="bg-primary/10 text-primary hover:bg-primary/20 border-0"
                >
                  {isGenerating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                  Buscador Bíblico (IA)
                </Button>
              </div>

              {biblicalAdvice && (
                <div className="bg-primary/5 border border-primary/20 p-5 rounded-lg space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
                  <div>
                    <p className="text-sm font-bold text-primary flex items-center gap-2"><Sparkles className="h-4 w-4"/> Aconselhamento Estratégico</p>
                  </div>
                  
                  <div className="bg-black/20 p-3 rounded-md border-l-2 border-primary">
                    <p className="text-sm italic text-foreground/90">"{biblicalAdvice.verse}"</p>
                    <p className="text-xs text-primary mt-1 font-bold">— {biblicalAdvice.reference}</p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Aplicação Prática</p>
                    <p className="text-sm text-foreground/80 leading-relaxed">{biblicalAdvice.application}</p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Conselho para o Mentor</p>
                    <p className="text-sm text-foreground/80 leading-relaxed">{biblicalAdvice.counsel}</p>
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                <div className="flex-1 space-y-2">
                  <Label>Próximo Passo / Tarefa</Label>
                  <Input placeholder="Definir nova tarefa..." />
                </div>
                <div className="w-1/3 space-y-2">
                  <Label>Data Ref.</Label>
                  <Input type="date" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-end bg-muted/30 pt-4 border-t border-border">
              <Button className="font-bold">Salvar Prontuário</Button>
            </CardFooter>
          </Card>

          <h3 className="text-xl font-bold mt-8 mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" /> Histórico de Sessões
          </h3>
          
          <div className="space-y-4">
            <Card className="border-border">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-base font-medium">Sessão #2 - Quebra de Padrões</CardTitle>
                  <span className="text-xs text-muted-foreground">10 de Outubro de 2026</span>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Discutimos sobre a dependência tecnológica e como isso afeta a dopamina diária. O João relatou melhoras desde a primeira sessão, mas ainda precisa estruturar o horário da manhã. Tarefa passada: 3 dias de jejum de redes sociais.
              </CardContent>
            </Card>

            <Card className="border-border opacity-75">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-base font-medium">Sessão #1 - Alinhamento e Diagnóstico</CardTitle>
                  <span className="text-xs text-muted-foreground">25 de Setembro de 2026</span>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Primeiro contato individual. João está motivado, mas um pouco ansioso com as metas. Alinhamos as expectativas e revisamos o Pilar da Identidade.
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
