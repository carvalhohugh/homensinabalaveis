import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Heart, Image as ImageIcon, Send } from "lucide-react"

export default function ComunidadePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Comunidade Inabalável</h1>
        <p className="text-muted-foreground mt-1">Interaja com outros homens, tire dúvidas e compartilhe seu progresso.</p>
      </div>

      {/* Post creator */}
      <Card className="border-primary/20">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
              <span className="font-bold text-primary">VC</span>
            </div>
            <div className="flex-1 space-y-4">
              <Textarea placeholder="Compartilhe algo com a irmandade..." className="resize-none" />
              <div className="flex justify-between items-center">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <ImageIcon className="h-4 w-4 mr-2" /> Foto / Vídeo
                </Button>
                <Button size="sm" className="font-bold">
                  <Send className="h-4 w-4 mr-2" /> Publicar
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Feed */}
      <div className="space-y-4">
        {/* Post 1 */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-4 pb-4">
            <div className="h-10 w-10 bg-muted rounded-full flex items-center justify-center">
              <span className="font-bold text-muted-foreground">JD</span>
            </div>
            <div>
              <CardTitle className="text-base">João da Silva</CardTitle>
              <p className="text-xs text-muted-foreground">Há 2 horas • Turma Alpha</p>
            </div>
          </CardHeader>
          <CardContent>
            <p>Irmãos, a aula 03 sobre o domínio próprio foi um divisor de águas. Finalmente consegui entender onde eu estava errando e apliquei as técnicas ontem à noite. O resultado em casa foi imediato! Continuem firmes no propósito!</p>
          </CardContent>
          <CardFooter className="border-t border-border pt-4 flex gap-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <Heart className="h-4 w-4 mr-2" /> 12
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <MessageSquare className="h-4 w-4 mr-2" /> 4 Comentários
            </Button>
          </CardFooter>
        </Card>

        {/* Post 2 */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-4 pb-4">
            <div className="h-10 w-10 bg-muted rounded-full flex items-center justify-center">
              <span className="font-bold text-muted-foreground">PS</span>
            </div>
            <div>
              <CardTitle className="text-base">Pedro Santos</CardTitle>
              <p className="text-xs text-muted-foreground">Há 5 horas • Turma Beta</p>
            </div>
          </CardHeader>
          <CardContent>
            <p>Dúvida sobre a tarefa da semana: devemos entregar o resumo escrito ou apenas apresentar na nossa mentoria de terça?</p>
          </CardContent>
          <CardFooter className="border-t border-border pt-4 flex gap-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <Heart className="h-4 w-4 mr-2" /> 2
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <MessageSquare className="h-4 w-4 mr-2" /> 1 Comentário
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
