import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alunos Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">1,245</div>
            <p className="text-xs text-muted-foreground">+20% desde o último mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mentorias Hoje</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">12</div>
            <p className="text-xs text-muted-foreground">3 pendentes de análise</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pontos XP</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">+45.2k</div>
            <p className="text-xs text-muted-foreground">Média da comunidade</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aulas Concluídas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">3,456</div>
            <p className="text-xs text-muted-foreground">+8% essa semana</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Evolução de Engajamento</CardTitle>
            <CardDescription>Atividade dos mentorados ao longo dos meses.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2 flex justify-center items-center h-64 text-muted-foreground">
            [Gráfico de Barras]
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Próximas Reuniões</CardTitle>
            <CardDescription>Você tem 3 mentorias agendadas para hoje.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Mentoria Grupo Alpha</p>
                  <p className="text-sm text-muted-foreground">14:00 - Online</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Acompanhamento João</p>
                  <p className="text-sm text-muted-foreground">16:30 - Presencial</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
