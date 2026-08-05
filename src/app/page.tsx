import { Button } from "@/components/ui/button"
import { Shield, Target, Crosshair, Crown } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="h-20 border-b border-border bg-card/50 backdrop-blur-md flex items-center justify-between px-6 md:px-12 fixed w-full z-50">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl tracking-wider">HOMENS INABALÁVEIS</span>
        </div>
        <div>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold">
            <a href="/login">Área Restrita</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 pt-20">
        <section className="relative py-24 md:py-32 flex flex-col items-center justify-center text-center px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
          <div className="relative z-10 max-w-3xl space-y-8">
            <Shield className="h-24 w-24 text-primary mx-auto mb-8 opacity-80" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-tight">
              Não é sobre ser um homem melhor. <br/>
              <span className="text-primary">É sobre ser Inabalável.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Um programa de crescimento espiritual, pessoal, sentimental e profissional. Forjando homens fortes, íntegros e preparados para deixar um grande legado.
            </p>
            <div className="pt-8">
              <Button asChild size="lg" className="text-lg px-8 py-6 font-bold uppercase tracking-wider">
                <a href="/login">Acessar a Mentoria</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Missão, Visão e Propósito */}
        <section className="py-24 bg-card px-6 md:px-12 border-t border-b border-border">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/50 transition-colors">
              <div className="h-16 w-16 bg-primary/10 flex items-center justify-center rounded-full mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Nossa Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Despertar e treinar homens para assumirem sua identidade, viverem em santidade e exercerem o seu papel de liderança extrema em suas casas e negócios.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/50 transition-colors">
              <div className="h-16 w-16 bg-primary/10 flex items-center justify-center rounded-full mb-4">
                <Crosshair className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Nossa Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser o maior e mais profundo ecossistema de desenvolvimento masculino, forjando uma geração de homens que não negociam seus princípios e transformam a sociedade.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/50 transition-colors">
              <div className="h-16 w-16 bg-primary/10 flex items-center justify-center rounded-full mb-4">
                <Crown className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Nosso Propósito</h3>
              <p className="text-muted-foreground leading-relaxed">
                Restaurar o design original da masculinidade. Entregar as ferramentas e o acompanhamento (CRM pastoral) para que cada homem deixe um legado que ecoe pela eternidade.
              </p>
            </div>

          </div>
        </section>

        {/* CTA Footer */}
        <section className="py-24 text-center px-6">
          <h2 className="text-3xl font-bold mb-6">Pronto para a Transformação Real?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            A Mentoria Homens Inabaláveis é uma jornada contínua. Você não caminhará sozinho.
          </p>
          <Button asChild size="lg" className="font-bold">
            <a href="/login">Entrar na Plataforma</a>
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="h-24 bg-card border-t border-border flex items-center justify-center text-sm text-muted-foreground text-center px-6">
        <p>© 2026 Homens Inabaláveis. Todos os direitos reservados. <br/> Santidade | Propósito | Caráter | Legado</p>
      </footer>
    </div>
  )
}
