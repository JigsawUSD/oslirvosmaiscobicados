import { BookOpen } from "lucide-react";
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <BookOpen className="h-6 w-6 text-primary" />
          <Link href="/" className="ml-2 font-bold">BookVault</Link>
        </div>
      </div>
    </header>
  );
}
