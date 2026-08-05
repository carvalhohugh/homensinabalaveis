"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Medal, Star, TrendingUp, ShieldAlert, Target, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const rankingList = [
  { rank: 1, name: "Lucas Ferreira", points: 15420, level: "Espartano", badges: 12 },
  { rank: 2, name: "Você (Admin)", points: 14200, level: "Espartano", badges: 10 },
  { rank: 3, name: "João da Silva", points: 12100, level: "Guerreiro", badges: 8 },
  { rank: 4, name: "Marcos Paulo", points: 9500, level: "Guerreiro", badges: 5 },
  { rank: 5, name: "Pedro Santos", points: 4200, level: "Iniciante", badges: 2 },
]

export default function RankingPage() {
  const [challengeCompleted, setChallengeCompleted] = useState(false)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2 font-serif">
          <Trophy className="h-8 w-8 text-primary" />
          Ranking & Gamificação
        </h1>
        <p className="text-muted-foreground mt-2">
          Sua evolução comparada aos irmãos da sua turma.
        </p>
      </div>

      {/* Desafio Semanal */}
      <Card className="border-primary/50 bg-gradient-to-r from-zinc-950 to-primary/10 shadow-lg shadow-primary/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
        <CardContent className="p-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary/20 p-4 rounded-xl border border-primary/30 shrink-0">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Missão da Semana</span>
                <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-full border border-border">+500 XP</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Jejum de Dopamina Digital</h3>
              <p className="text-sm text-zinc-400 max-w-xl">
                Fique 48 horas seguidas (Sábado e Domingo) sem consumir redes sociais, vídeos curtos ou pornografia. Desconecte-se do mundo e conecte-se com sua família e propósito.
              </p>
            </div>
          </div>
          
          <div className="shrink-0 w-full md:w-auto">
            {challengeCompleted ? (
              <div className="bg-green-500/10 border border-green-500/20 text-green-500 px-6 py-4 rounded-xl flex flex-col items-center justify-center h-full gap-2">
                <CheckCircle2 className="h-6 w-6" />
                <span className="font-bold text-sm">Missão Cumprida!</span>
              </div>
            ) : (
              <Button 
                onClick={() => setChallengeCompleted(true)}
                className="w-full md:w-auto bg-primary hover:bg-primary/90 text-black font-bold h-14 px-8 shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all hover:scale-105"
              >
                Marcar como Concluído
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Sua Posição</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2º Lugar</div>
            <p className="text-xs text-primary flex items-center mt-1"><TrendingUp className="h-3 w-3 mr-1"/> Subiu 1 posição nesta semana</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pontuação (XP)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">14.200 <span className="text-sm font-normal text-muted-foreground">XP</span></div>
            <p className="text-xs text-muted-foreground mt-1">Faltam 1.220 XP para o 1º Lugar</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Nível Atual</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary flex items-center gap-2">
              <ShieldAlert className="h-6 w-6" /> Espartano
            </div>
            <p className="text-xs text-muted-foreground mt-1">Nível máximo atingido</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle>Classificação Geral</CardTitle>
          <CardDescription>Baseado em aulas assistidas, interações na comunidade e tarefas cumpridas.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {rankingList.map((user) => (
              <div 
                key={user.rank} 
                className={`flex items-center justify-between p-4 rounded-lg border ${
                  user.name.includes("Você") 
                    ? "bg-primary/10 border-primary/50" 
                    : "bg-card border-border hover:border-primary/30"
                } transition-colors`}
              >
                <div className="flex items-center gap-4">
                  <div className={`h-10 w-10 flex items-center justify-center rounded-full font-bold text-lg
                    ${user.rank === 1 ? 'bg-yellow-500/20 text-yellow-500' : 
                      user.rank === 2 ? 'bg-gray-300/20 text-gray-300' : 
                      user.rank === 3 ? 'bg-amber-700/20 text-amber-700' : 'bg-muted text-muted-foreground'}`}
                  >
                    {user.rank}
                  </div>
                  <div>
                    <p className="font-bold">{user.name}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Medal className="h-3 w-3" /> {user.level} • {user.badges} Medalhas
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{user.points.toLocaleString('pt-BR')} XP</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
