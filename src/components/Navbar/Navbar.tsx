import { Home, Library, Settings, Siren, Stethoscope } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../../assets/logo/image.png";

const links = [
  { id: "home", label: "Home", to: "/", Icon: Home },
  { id: "doctors", label: "Doctors", to: "/doctors", Icon: Stethoscope },
  { id: "library", label: "Library", to: "/library", Icon: Library },
  { id: "settings", label: "Settings", to: "/settings", Icon: Settings },
] as const;

function Navbar() {
  return (
    <header className="border-b border-slate-200/90 bg-white shadow-sm/5">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 p-5">
        <Link
          to="/"
          aria-label="MINDECHO — Home"
          className="group flex shrink-0 items-center gap-3.5 rounded-xl outline-none transition-transform duration-200 focus-visible:ring-2 focus-visible:ring-blue-500/45 focus-visible:ring-offset-2 active:scale-[0.99]"
        >
          <span className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 via-white to-slate-100 p-1 shadow-md shadow-slate-900/10 ring-1 ring-slate-200/90 transition-[box-shadow,transform] duration-300 group-hover:shadow-lg group-hover:shadow-blue-600/12 group-hover:ring-blue-200/70 sm:size-14 sm:rounded-[1.05rem]">
            <img
              src={logoImage}
              alt=""
              width={112}
              height={112}
              decoding="async"
              className="h-full w-full object-contain object-center"
            />
          </span>
          <span className="text-xl font-bold tracking-tight text-blue-600 sm:text-2xl">
            MINDECHO
          </span>
        </Link>

        <nav
          className="order-last flex w-full min-w-0 justify-center md:order-none md:flex-1 md:justify-center"
          aria-label="Main navigation"
        >
          <div className="inline-flex max-w-full items-center gap-1 overflow-x-auto rounded-2xl bg-slate-100/90 p-1.5 ring-1 ring-slate-200/80 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {links.map((link) => {
              const Icon = link.Icon;
              return (
                <NavLink
                  key={link.id}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    isActive
                      ? "flex shrink-0 items-center gap-2 rounded-xl bg-blue-600/10 px-4 py-2.5 text-sm font-semibold text-blue-700 shadow-sm ring-1 ring-blue-600/15 backdrop-blur-sm transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-500/45 focus-visible:ring-offset-2"
                      : "flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 transition-all duration-200 outline-none hover:bg-white/80 hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-blue-500/35 focus-visible:ring-offset-2"
                  }
                >
                  <Icon
                    className="size-4 shrink-0"
                    strokeWidth={2}
                    aria-hidden
                  />
                  {link.label}
                </NavLink>
              );
            })}
          </div>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/25 outline-none transition-all duration-200 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/35 focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 active:scale-[0.98]"
          >
            <Siren className="size-4 shrink-0" strokeWidth={2.25} aria-hidden />
            Emergency
          </button>
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow-sm ring-white ring-offset-0 transition hover:border-blue-200 hover:shadow-md">
            <img
              src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-High-Quality-Image.png"
              alt="Profile"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
