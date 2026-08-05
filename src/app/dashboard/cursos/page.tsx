import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, PlayCircle, ShieldCheck } from "lucide-react"

// Mock data
const courses = [
  {
    id: "fundacao-inabalavel",
    title: "Fundação Inabalável",
    description: "Os princípios bíblicos e práticos para forjar um caráter à prova de balas.",
    progress: 100,
    totalModules: 12,
    image: "/placeholder-course.jpg", // We'll add images later
    completed: true,
  },
  {
    id: "lideranca-extrema",
    title: "Liderança Extrema",
    description: "Como liderar sua casa, seus negócios e sua vida com excelência e propósito.",
    progress: 35,
    totalModules: 8,
    image: "/placeholder-course.jpg",
    completed: false,
  },
  {
    id: "pureza-e-santidade",
    title: "Batalha pela Pureza",
    description: "Estratégias reais e sem filtros para vencer a pornografia e viver em santidade.",
    progress: 0,
    totalModules: 5,
    image: "/placeholder-course.jpg",
    completed: false,
  }
]

export default function CursosCatalogPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-primary" />
          Meus Treinamentos
        </h1>
        <p className="text-muted-foreground mt-2">
          Acesse todo o conteúdo exclusivo da Mentoria Homens Inabaláveis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="overflow-hidden border-border bg-card flex flex-col hover:border-primary/50 transition-colors">
            {/* Image Placeholder */}
            <div className="h-48 bg-muted relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10" />
              <ShieldCheck className="h-16 w-16 text-primary/40 z-0" />
            </div>
            
            <CardHeader className="relative z-20 -mt-8 pt-0 flex-1">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl leading-tight">{course.title}</CardTitle>
              </div>
              <CardDescription className="line-clamp-2 mt-2">
                {course.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Progresso</span>
                  <span>{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2 bg-muted">
                  <div 
                    className="h-full bg-primary transition-all" 
                    style={{ width: `${course.progress}%` }} 
                  />
                </Progress>
              </div>
            </CardContent>
            
            <CardFooter>
              <Button className="w-full font-bold group" asChild>
                <a href={`/dashboard/cursos/${course.id}`} className="flex items-center justify-center">
                  <span>{course.progress > 0 ? (course.progress === 100 ? "Revisar Treinamento" : "Continuar Treinamento") : "Iniciar Treinamento"}</span>
                  <PlayCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
