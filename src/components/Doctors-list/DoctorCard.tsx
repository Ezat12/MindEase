import { BadgeCheck, CalendarDays, Heart, Star, Users } from "lucide-react";
import type { IDoctor } from "../../types/IDoctor";

type DoctorCardProps = {
  doctor: IDoctor;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onBook?: () => void;
  onViewProfile?: () => void;
};

function formatCompactNumber(value: number) {
  return value >= 1000 ? `${(value / 1000).toFixed(1)}k` : `${value}`;
}

function clampRating(value: number) {
  if (Number.isNaN(value)) return 0;
  return Math.max(0, Math.min(5, value));
}

function DoctorCard({
  doctor,
  isFavorite,
  onToggleFavorite,
  onBook,
  onViewProfile,
}: DoctorCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-blue-600/10 via-sky-500/10 to-emerald-500/10" />

      <div className="relative flex flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={doctor.profilePicture}
              alt={doctor.fullName}
              className="h-14 w-14 shrink-0 rounded-2xl object-cover ring-1 ring-slate-200"
              loading="lazy"
              decoding="async"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="truncate text-base font-bold text-slate-900">
                  {doctor.fullName}
                </h3>
                {doctor.verified ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200/70">
                    <BadgeCheck className="size-3.5" aria-hidden />
                    Verified
                  </span>
                ) : null}
              </div>
              <p className="truncate text-sm font-semibold text-blue-700/90">
                {doctor.specialization}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-xl bg-white/80 text-slate-700 ring-1 ring-slate-200/80 backdrop-blur transition hover:bg-slate-50"
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
            onClick={onToggleFavorite}
          >
            <Heart
              className={
                isFavorite ? "size-4 text-rose-600" : "size-4 text-slate-500"
              }
              fill={isFavorite ? "currentColor" : "none"}
              strokeWidth={2}
              aria-hidden
            />
          </button>
        </div>

        <p className="line-clamp-3 text-sm leading-relaxed text-slate-600 mt-4">
          {doctor.bio}
        </p>

        <div className="flex flex-wrap items-center gap-2">
          {doctor.tags.slice(0, 3).map((tag: string) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/80 transition hover:bg-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700 ring-1 ring-slate-200/80">
            <Star className="size-4 text-amber-500" aria-hidden />
            <span className="font-semibold text-slate-900">
              {clampRating(doctor.rating).toFixed(1)}
            </span>
            <span className="text-slate-500">
              ({formatCompactNumber(doctor.ratingCount)})
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700 ring-1 ring-slate-200/80">
            <Users className="size-4 text-slate-500" aria-hidden />
            <span className="truncate">{doctor.languages.join(", ")}</span>
          </div>
          {/* <div className="col-span-2 flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700 ring-1 ring-slate-200/80">
            <MapPin className="size-4 text-slate-500" aria-hidden />
            <span className="truncate">{doctor.location}</span>
          </div> */}
          <div className="col-span-2 flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700 ring-1 ring-slate-200/80">
            <div className="flex min-w-0 items-center gap-2">
              <CalendarDays className="size-4 text-slate-500" aria-hidden />
              <span className="truncate">Next: {doctor.nextAvailable}</span>
            </div>
            <span className="shrink-0 font-bold text-slate-900">
              {doctor.priceEGP} EGP
            </span>
          </div>
        </div>

        <div className="mt-1 flex flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            className="inline-flex flex-1 items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/25 transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2"
            onClick={onBook}
          >
            Book
          </button>
          <button
            type="button"
            className="inline-flex flex-1 items-center justify-center rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-800 ring-1 ring-slate-200 transition hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/35 focus-visible:ring-offset-2"
            onClick={onViewProfile}
          >
            View profile
          </button>
        </div>
      </div>
    </article>
  );
}

export default DoctorCard;
