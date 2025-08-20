import Link from "next/link";

const nav = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/pesquisas", label: "Pesquisas" },
  { href: "/pessoas", label: "Pessoas" },
  { href: "/publicacoes", label: "Publicações" },
  { href: "/noticias", label: "Notícias" },
  { href: "/eventos", label: "Eventos" },
  { href: "/contato", label: "Contato" }
];

export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold">Labjis</Link>
        <nav className="flex gap-4 text-sm">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="hover:underline">{i.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
