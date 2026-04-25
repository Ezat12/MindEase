import { Lock, Mail, Share2, ShieldCheck } from "lucide-react";
import logoImage from "../../assets/logo/image.png";

const applicationLinks = [
  { label: "How it works", href: "#" },
  { label: "Recommended Doctors", href: "#/doctors" },
  { label: "Resource Library", href: "#" },
  { label: "Premium Plans", href: "#" },
] as const;

const supportLinks = [
  { label: "Help Center", href: "#" },
  { label: "Emergency Hotlines", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
] as const;

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#"
              className="inline-flex items-center gap-3"
              aria-label="MINDECHO — Home"
            >
              <span className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl  p-1 shadow-sm">
                <img
                  src={logoImage}
                  alt=""
                  width={44}
                  height={44}
                  className="size-full object-contain"
                  decoding="async"
                />
              </span>
              <span className="text-xl font-bold tracking-tight text-blue-600">
                MINDECHO
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              A personalized mental wellness space dedicated to your emotional journey.
              Providing support, one mood at a time.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href="#"
                className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-slate-800"
                aria-label="Share"
              >
                <Share2 className="size-4" strokeWidth={2} aria-hidden />
              </a>
              <a
                href="#"
                className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-slate-800"
                aria-label="Email"
              >
                <Mail className="size-4" strokeWidth={2} aria-hidden />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900">Application</h3>
            <ul className="mt-4 space-y-3">
              {applicationLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-500 transition hover:text-slate-800"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900">Support</h3>
            <ul className="mt-4 space-y-3">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-500 transition hover:text-slate-800"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900">Secure Space</h3>
            <div className="mt-4 flex flex-col gap-2">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">
                <ShieldCheck
                  className="size-4 shrink-0 text-emerald-600"
                  strokeWidth={2}
                  aria-hidden
                />
                HIPAA Compliant
              </span>
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">
                <Lock
                  className="size-4 shrink-0 text-blue-600"
                  strokeWidth={2}
                  aria-hidden
                />
                SSL Encrypted
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 px-5 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-3 text-sm text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {year} MINDECHO Mental Health. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <a href="#" className="transition hover:text-slate-800">
              User Agreement
            </a>
            <a href="#" className="transition hover:text-slate-800">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
