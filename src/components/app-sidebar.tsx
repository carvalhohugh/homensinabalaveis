import { Calendar, Home, Inbox, Search, Settings, Shield, BookOpen, Users, Video, Trophy, ShieldAlert } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Início",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Cursos",
    url: "/dashboard/cursos",
    icon: BookOpen,
  },
  {
    title: "Mentorias",
    url: "/dashboard/mentorias",
    icon: Users,
  },
  {
    title: "Comunidade",
    url: "/dashboard/comunidade",
    icon: Inbox,
  },
  {
    title: "Vídeo Chamadas",
    url: "/dashboard/video",
    icon: Video,
  },
  {
    title: "Central de Resgate",
    url: "/dashboard/admin/retencao",
    icon: ShieldAlert,
  },
  {
    title: "Ranking",
    url: "/dashboard/ranking",
    icon: Trophy,
  },
  {
    title: "Configurações",
    url: "/dashboard/config",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border/40 bg-zinc-950/80 backdrop-blur-xl">
      <SidebarContent>
        <SidebarGroup className="p-4">
          <SidebarGroupLabel className="text-primary font-bold text-xl mb-6 mt-2 flex items-center gap-2 font-serif tracking-widest uppercase border-b border-primary/20 pb-4">
            <Shield className="h-6 w-6 text-primary fill-primary/20" />
            INABALÁVEIS
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1.5">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <a href={item.url} className="block w-full outline-none">
                    <SidebarMenuButton 
                      className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_15px_rgba(234,179,8,0.1)] border border-transparent hover:border-primary/20"
                    >
                      <item.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                      <span className="tracking-wide">{item.title}</span>
                    </SidebarMenuButton>
                  </a>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
