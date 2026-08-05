import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, FileText, Plus } from "lucide-react"

// Mock data
const mentorados = [
  { id: 1, name: "João da Silva", email: "joao@exemplo.com", group: "Alpha", lastSession: "10/10/2026" },
  { id: 2, name: "Pedro Santos", email: "pedro@exemplo.com", group: "Beta", lastSession: "05/10/2026" },
  { id: 3, name: "Lucas Ferreira", email: "lucas@exemplo.com", group: "Individual", lastSession: "12/10/2026" },
]

export default function MentoriasPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Prontuário de Mentorias</h1>
          <p className="text-muted-foreground mt-1">Gerencie o acompanhamento pastoral dos seus mentorados.</p>
        </div>
        <Button asChild className="font-bold">
          <a href="/dashboard/mentorias/novo">
            <Plus className="mr-2 h-4 w-4" /> Cadastrar Mentorado
          </a>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-primary" /> Meus Mentorados</CardTitle>
          <CardDescription>Selecione um aluno para visualizar ou atualizar o seu prontuário.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-border">
            {mentorados.map((aluno, idx) => (
              <div 
                key={aluno.id} 
                className={`flex items-center justify-between p-4 ${idx !== mentorados.length - 1 ? 'border-b border-border' : ''} hover:bg-muted/50 transition-colors cursor-pointer group`}
              >
                <div>
                  <p className="font-medium">{aluno.name}</p>
                  <p className="text-sm text-muted-foreground">{aluno.email} • Turma: {aluno.group}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-medium">Última Sessão</p>
                    <p className="text-xs text-muted-foreground">{aluno.lastSession}</p>
                  </div>
                  <Button asChild variant="outline" size="sm" className="group-hover:border-primary group-hover:text-primary">
                    <a href={`/dashboard/mentorias/${aluno.id}`}>
                      <FileText className="h-4 w-4 mr-2" />
                      Abrir Prontuário
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
