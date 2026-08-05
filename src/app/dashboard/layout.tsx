import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-screen overflow-y-auto bg-background flex flex-col">
        <header className="h-14 border-b border-border flex items-center px-4 bg-card shrink-0">
          <SidebarTrigger />
          <div className="ml-4 flex-1">
            {/* Header Content, Breadcrumbs, User Profile */}
          </div>
        </header>
        <div className="flex-1 p-6">
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}
