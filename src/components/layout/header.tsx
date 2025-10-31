import { BookOpen } from "lucide-react";
import { CtaButton } from "@/components/cta-button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="ml-2 font-bold">BookVault</span>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <CtaButton size="sm">
            Adquirir Pacote por R$9,90
          </CtaButton>
        </div>
      </div>
    </header>
  );
}
