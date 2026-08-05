import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Video, Calendar, Clock, ExternalLink } from "lucide-react"

export default function VideoChamadasPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Vídeo Chamadas</h1>
        <p className="text-muted-foreground mt-1">Acesse suas mentorias ao vivo e veja as gravações passadas.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-primary/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Video className="h-5 w-5 text-primary" /> Sessão Alpha - Hoje</CardTitle>
            <CardDescription>Mentoria em grupo (Alpha)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>05 de Agosto de 2026</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>20:00 - 22:00</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full font-bold">
              <a href="/dashboard/video/sala">
                Entrar na Sala <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Video className="h-5 w-5 text-muted-foreground" /> Sessão Individual</CardTitle>
            <CardDescription>Acompanhamento 1a1 com Lucas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>12 de Agosto de 2026</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>15:00 - 16:00</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" disabled>
              Aguardando Data
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
