import { FcHome, FcSearch, FcLibrary } from "react-icons/fc";
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-64 bg-zinc-950 p-6">
          <nav className="space-y-4">
            <a
              href="#"
              className="flex items-center gap-2 text-xs font-semibold "
            >
              <FcHome />
              Home
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-xs font-semibold"
            >
              <FcSearch />
              Search
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-xs font-semibold"
            >
              <FcLibrary />
              Your Library
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">main</main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-600 p-6">
        footer
      </footer>
    </div>
  );
}
