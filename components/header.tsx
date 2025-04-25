import { Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-indigo-600">Paloma S Queiroz</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#sobre"
              className="transition-colors hover:text-indigo-600"
            >
              Sobre
            </Link>
            <Link
              href="#experiencia"
              className="transition-colors hover:text-indigo-600"
            >
              Experiência
            </Link>
            <Link
              href="#formacao"
              className="transition-colors hover:text-indigo-600"
            >
              Formação
            </Link>
            <Link
              href="#habilidades"
              className="transition-colors hover:text-indigo-600"
            >
              Habilidades
            </Link>
            <Link
              href="#projetos"
              className="transition-colors hover:text-indigo-600"
            >
              Projetos
            </Link>
            <Link
              href="#objetivos"
              className="transition-colors hover:text-indigo-600"
            >
              Objetivos
            </Link>
            <Link
              href="#contato"
              className="transition-colors hover:text-indigo-600"
            >
              Contato
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex border-indigo-600 text-indigo-600 hover:bg-indigo-50"
          >
            <Download className="mr-2 h-4 w-4" />
            Baixar Currículo
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="md:hidden border-indigo-600 text-indigo-600 hover:bg-indigo-50"
          >
            <Download className="h-4 w-4" />
            <span className="sr-only">Baixar Currículo</span>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <SheetHeader>
                <SheetTitle className="text-indigo-600">Navegação</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-6">
                <Link
                  href="#sobre"
                  className="flex py-2 text-base hover:text-indigo-600 transition-colors"
                >
                  Sobre
                </Link>
                <Link
                  href="#experiencia"
                  className="flex py-2 text-base hover:text-indigo-600 transition-colors"
                >
                  Experiência
                </Link>
                <Link
                  href="#formacao"
                  className="flex py-2 text-base hover:text-indigo-600 transition-colors"
                >
                  Formação
                </Link>
                <Link
                  href="#habilidades"
                  className="flex py-2 text-base hover:text-indigo-600 transition-colors"
                >
                  Habilidades
                </Link>
                <Link
                  href="#projetos"
                  className="flex py-2 text-base hover:text-indigo-600 transition-colors"
                >
                  Projetos
                </Link>
                <Link
                  href="#objetivos"
                  className="flex py-2 text-base hover:text-indigo-600 transition-colors"
                >
                  Objetivos
                </Link>
                <Link
                  href="#contato"
                  className="flex py-2 text-base hover:text-indigo-600 transition-colors"
                >
                  Contato
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
