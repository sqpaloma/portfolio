"use client";

import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      {/* Se a sidebar não estiver aberta, mostra a navbar */}
      {!isOpen && (
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            {/* Botão Menu antes do título */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>

              {/* Sidebar */}
              <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                <SheetHeader>
                  <SheetTitle className="text-indigo-600 text-2xl font-bold">
                    Portfólio
                  </SheetTitle>
                </SheetHeader>

                {/* Botão de Baixar Currículo */}
                <div className="mt-6 mb-4">
                  <a
                    href="/curriculo.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-md border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50"
                  >
                    <Download className="h-4 w-4" />
                    Baixar Currículo
                  </a>
                </div>

                {/* Navegação com linha separadora */}
                <nav className="flex flex-col mt-6">
                  {menuItems.map(({ href, label }, index) => (
                    <Link
                      key={href}
                      href={href}
                      className={`py-3 text-base hover:text-indigo-600 transition-colors ${
                        index !== menuItems.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            {/* Título Portfólio */}
            <Link href="/" className="font-bold text-indigo-600 text-2xl">
              Portfólio
            </Link>
          </div>

          {/* Botão de Baixar Currículo */}
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
          </div>
        </div>
      )}

      {/* Se o menu lateral estiver aberto, mostra só a sidebar */}
      {isOpen && (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent side="left" className="w-[240px] sm:w-[300px]">
            <SheetHeader>
              <SheetTitle className="text-indigo-600 text-2xl font-bold">
                Portfólio
              </SheetTitle>
            </SheetHeader>

            {/* Botão de Baixar Currículo */}
            <div className="mt-6 mb-4">
              <a
                href="/curriculo.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50"
              >
                <Download className="h-4 w-4" />
                Baixar Currículo
              </a>
            </div>

            {/* Navegação com linha separadora */}
            <nav className="flex flex-col mt-6">
              {menuItems.map(({ href, label }, index) => (
                <Link
                  key={href}
                  href={href}
                  className={`py-3 text-base hover:text-indigo-600 transition-colors ${
                    index !== menuItems.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      )}
    </header>
  );
}
