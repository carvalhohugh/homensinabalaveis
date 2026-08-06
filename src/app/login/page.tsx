"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Shield, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createClient } from "@/utils/supabase/client"
import Link from "next/link"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setSuccess("Login efetuado com sucesso! Redirecionando...")
      setTimeout(() => {
        router.push("/dashboard")
        router.refresh()
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <Card className="w-full max-w-md border-border bg-card">
        <form onSubmit={handleLogin}>
          <CardHeader className="space-y-1 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold tracking-tight">HOMENS INABALÁVEIS</CardTitle>
            <CardDescription>
              Insira suas credenciais para acessar a plataforma.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            {error && (
              <div className="p-3 text-sm text-destructive-foreground bg-destructive/90 rounded-md">
                {error === 'Invalid login credentials' ? 'E-mail ou senha incorretos.' : error}
              </div>
            )}
            
            {success && (
              <div className="p-3 text-sm text-green-900 bg-green-500/90 rounded-md font-medium">
                {success}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="nome@exemplo.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Senha</Label>
                <a href="#" className="text-sm font-medium text-primary hover:underline">
                  Esqueceu a senha?
                </a>
              </div>
              <Input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full font-bold" disabled={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
              {loading ? "Entrando..." : "Entrar"}
            </Button>
            
            <p className="text-sm text-muted-foreground text-center">
              Ainda não é mentoriado?{" "}
              <Link href="/cadastro" className="text-primary hover:underline font-medium">
                Cadastre-se aqui
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
