"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { BrainCircuit, Upload, Video, Plus, Loader2, BookOpen, Settings, LayoutGrid } from "lucide-react"

export default function CriadorCursosPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [aiResult, setAiResult] = useState<any>(null)

  const handleGenerateAI = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
      setAiResult({
        questions: [
          { q: "Qual o pilar central discutido no vídeo sobre domínio próprio?", a: "A capacidade de governar as próprias emoções antes de liderar os outros." },
          { q: "Segundo o autor, qual a diferença entre força bruta e força de caráter?", a: "Força bruta destrói barreiras físicas, força de caráter constrói legados duradouros." }
        ]
      })
    }, 2500)
  }

  return (
    <div className="max-w-6xl mx-auto flex flex-col space-y-8">
      {/* Header Premium */}
      <div className="flex items-center justify-between border-b border-border pb-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight uppercase font-serif">Nova Aula / Módulo</h1>
          <p className="text-muted-foreground mt-2 text-lg">Crie um novo conteúdo e deixe a IA extrair materiais didáticos automaticamente.</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="font-bold border-border"><Settings className="mr-2 h-4 w-4" /> Configurações Gerais</Button>
          <Button className="font-bold"><BookOpen className="mr-2 h-4 w-4" /> Salvar Rascunho</Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* Formulário Principal - Esquerda (Ocupa 8 colunas) */}
        <div className="lg:col-span-8 space-y-8">
          
          <Card className="border-border shadow-lg">
            <CardHeader className="bg-muted/30 border-b border-border pb-4">
              <CardTitle className="text-xl flex items-center gap-2"><LayoutGrid className="h-5 w-5 text-primary"/> Informações Básicas</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="space-y-3">
                <Label className="text-sm font-semibold">Título da Aula</Label>
                <Input placeholder="Ex: O Poder da Decisão" className="h-12 text-lg" />
              </div>
              <div className="space-y-3">
                <Label className="text-sm font-semibold">Resumo / Descrição para os Alunos</Label>
                <Textarea placeholder="Descreva os objetivos principais desta aula..." className="min-h-[150px] resize-none" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-lg">
            <CardHeader className="bg-muted/30 border-b border-border pb-4">
              <CardTitle className="text-xl flex items-center gap-2"><Video className="h-5 w-5 text-red-500"/> Mídia e Materiais</CardTitle>
              <CardDescription>O coração da sua aula. Anexe o vídeo principal e os arquivos de apoio.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-8">
              <div className="space-y-3">
                <Label className="text-sm font-semibold">URL do Vídeo (YouTube, Vimeo, Bunny)</Label>
                <Input placeholder="https://youtube.com/watch?v=..." className="h-12" />
              </div>
              
              <div className="space-y-3">
                <Label className="text-sm font-semibold block">Anexar PDF / Word</Label>
                <div className="border-2 border-dashed border-border/80 rounded-xl p-10 flex flex-col items-center justify-center text-center hover:bg-muted/30 hover:border-primary/50 transition-all cursor-pointer group">
                  <div className="h-14 w-14 bg-muted rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Upload className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
                  </div>
                  <p className="font-semibold text-lg">Arraste os arquivos para cá</p>
                  <p className="text-sm text-muted-foreground mt-2">Suporta documentos PDF e Word até 20MB.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar IA - Direita (Ocupa 4 colunas) */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="border-primary/40 bg-card shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary font-bold">Assistente IA</CardTitle>
              </div>
              <CardDescription className="text-sm">
                Nossa inteligência artificial pode analisar o vídeo e os PDFs para criar o material didático automaticamente.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-2">
              <div className="p-4 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground space-y-2">
                <div className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /> Transcrição do vídeo</div>
                <div className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /> Leitura do PDF</div>
                <div className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /> Criação de Quiz</div>
              </div>
              <Button 
                onClick={handleGenerateAI} 
                disabled={isGenerating} 
                className="w-full h-12 font-bold text-md group"
              >
                {isGenerating ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <BrainCircuit className="mr-2 h-5 w-5 group-hover:animate-pulse" />}
                {isGenerating ? "Processando e Analisando..." : "Gerar Quiz Mágico"}
              </Button>
            </CardContent>
          </Card>

          {aiResult && (
            <Card className="border-green-500/30 bg-green-950/20 shadow-xl animate-in slide-in-from-bottom-4 fade-in duration-500">
              <CardHeader className="pb-3 border-b border-green-500/20">
                <CardTitle className="text-green-500 text-lg flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center">✓</div> 
                  Quiz Gerado
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-5">
                {aiResult.questions.map((q: any, i: number) => (
                  <div key={i} className="space-y-2">
                    <p className="font-semibold text-sm text-foreground/90">Pergunta {i+1}: {q.q}</p>
                    <div className="bg-black/40 border border-green-500/20 p-3 rounded-md">
                      <p className="text-sm text-green-400/90 font-medium">{q.a}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="pt-2 border-t border-green-500/20 mt-4">
                 <Button className="w-full font-bold bg-green-600 hover:bg-green-700 text-white h-10"><Plus className="h-4 w-4 mr-2"/> Adicionar à Aula</Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
