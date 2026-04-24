import { BadgeCheck, CalendarDays, Mail, Star, Users } from "lucide-react";
import type { IDoctor } from "../../types/IDoctor";

type DoctorProfileDetailsProps = {
  doctor: IDoctor;
};

function DoctorProfileDetails({ doctor }: DoctorProfileDetailsProps) {
  return (
    <div className="flex gap-5">
      <section className="details rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 flex-1">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <img
            src={doctor.profilePicture}
            alt={doctor.fullName}
            className="h-24 w-24 rounded-2xl object-cover ring-1 ring-slate-200"
          />

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-bold text-slate-900">
                {doctor.fullName}
              </h1>
              {doctor.verified ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200/70">
                  <BadgeCheck className="size-3.5" aria-hidden />
                  Verified
                </span>
              ) : null}
            </div>
            <p className="mt-1 text-base font-semibold text-blue-700">
              {doctor.specialization}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {doctor.bio}
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700 ring-1 ring-slate-200/80">
            <Star className="size-4 text-amber-500" aria-hidden />
            <span className="font-semibold text-slate-900">
              {doctor.rating.toFixed(1)}
            </span>
            <span className="text-slate-500">
              ({doctor.ratingCount} reviews)
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700 ring-1 ring-slate-200/80">
            <Users className="size-4 text-slate-500" aria-hidden />
            <span>{doctor.languages.join(", ")}</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700 ring-1 ring-slate-200/80">
            <CalendarDays className="size-4 text-slate-500" aria-hidden />
            <span>Next available: {doctor.nextAvailable}</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700 ring-1 ring-slate-200/80">
            <Mail className="size-4 text-slate-500" aria-hidden />
            <span className="truncate">{doctor.email}</span>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {doctor.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
      <section className="schedule rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 w-80">
        <h2 className="text-lg font-bold text-slate-900 mb-4">Schedule</h2>
        <p className="text-sm text-slate-600">
          This is a placeholder for the doctor's schedule. You can integrate a
          calendar or booking system here.
        </p>
      </section>
    </div>
  );
}

export default DoctorProfileDetails;
