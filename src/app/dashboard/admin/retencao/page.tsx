import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShieldAlert, AlertTriangle, MessageCircle, Clock, ShieldCheck, Phone } from "lucide-react"

// Mock data for students at risk of churn
const atRiskStudents = [
  {
    id: 1,
    name: "Marcos Oliveira",
    lastLogin: "Há 14 dias",
    courseProgress: 35,
    riskLevel: "Crítico",
    phone: "5511999999999",
  },
  {
    id: 2,
    name: "Tiago Silva",
    lastLogin: "Há 8 dias",
    courseProgress: 12,
    riskLevel: "Alto",
    phone: "5511999999999",
  },
  {
    id: 3,
    name: "Rafael Costa",
    lastLogin: "Há 5 dias",
    courseProgress: 88,
    riskLevel: "Médio",
    phone: "5511999999999",
  }
]

export default function AdminRetencaoPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2 font-serif">
            <ShieldAlert className="h-8 w-8 text-destructive" />
            Central de Resgate
          </h1>
          <p className="text-muted-foreground mt-2">
            Monitoramento de engajamento e prevenção de evasão (Churn).
          </p>
        </div>
        <div className="flex gap-3">
          <Card className="bg-destructive/10 border-destructive/20 border-0 flex-1">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="bg-destructive/20 p-3 rounded-full">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <p className="text-sm font-medium text-destructive">Risco Crítico</p>
                <p className="text-2xl font-bold">12 Alunos</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="border-border bg-card shadow-lg">
        <CardHeader>
          <CardTitle>Alunos em Risco de Abandono</CardTitle>
          <CardDescription>
            Homens que não fazem login há mais de 5 dias ou pararam um curso pela metade.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {atRiskStudents.map((student) => (
              <div key={student.id} className="flex flex-col md:flex-row items-center justify-between p-4 border border-border/50 rounded-lg hover:border-primary/30 transition-colors bg-zinc-950/50">
                <div className="flex items-center gap-4 mb-4 md:mb-0 w-full md:w-auto">
                  <div className={`h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg
                    ${student.riskLevel === 'Crítico' ? 'bg-destructive/20 text-destructive' : 
                      student.riskLevel === 'Alto' ? 'bg-orange-500/20 text-orange-500' : 'bg-yellow-500/20 text-yellow-500'}`}
                  >
                    {student.name.substring(0,2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-bold">{student.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {student.lastLogin}</span>
                      <span className="flex items-center gap-1"><ShieldCheck className="h-3 w-3" /> Progresso: {student.courseProgress}%</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                  <Badge variant="outline" className={
                    student.riskLevel === 'Crítico' ? 'border-destructive text-destructive' : 
                    student.riskLevel === 'Alto' ? 'border-orange-500 text-orange-500' : 'border-yellow-500 text-yellow-500'
                  }>
                    {student.riskLevel}
                  </Badge>
                  <Button 
                    size="sm" 
                    className="bg-green-600 hover:bg-green-700 text-white font-bold"
                    asChild
                  >
                    <a href={`https://wa.me/${student.phone}?text=Fala%20${student.name.split(' ')[0]},%20tudo%20bem?%20Notei%20sua%20ausência%20na%20plataforma.%20Caiu?%20Levanta!%20Como%20posso%20te%20ajudar%20hoje?`} target="_blank" rel="noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Resgatar
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
