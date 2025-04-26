import { Download, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const menuItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#formacao", label: "Formação" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#objetivos", label: "Objetivos" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-bold text-indigo-600">
          Portfólio
        </Link>

        <div className="flex items-center space-x-2">
          <a
            href="/curriculo.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 rounded-md border border-indigo-600 px-3 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50"
          >
            <Download className="h-4 w-4" />
            Baixar Currículo
          </a>

          <a
            href="/curriculo.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden flex items-center gap-2 rounded-md border border-indigo-600 px-3 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50"
          >
            <Download className="h-4 w-4" />
            <span className="sr-only">Baixar Currículo</span>
          </a>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <SheetHeader>
                <SheetTitle className="text-indigo-600">Navegação</SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col space-y-4 mt-6">
                {menuItems.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="py-2 text-base hover:text-indigo-600 transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
