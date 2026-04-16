import { useState } from "react";
import {
  Annoyed,
  CloudRain,
  Frown,
  Heart,
  HelpCircle,
  Laugh,
  Meh,
  Smile,
} from "lucide-react";

const moods = [
  {
    id: "anger",
    label: "Anger",
    Icon: Annoyed,
    iconWrap: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    id: "disgust",
    label: "Disgust",
    Icon: Frown,
    iconWrap: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    id: "fear",
    label: "Fear",
    Icon: HelpCircle,
    iconWrap: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    id: "joy",
    label: "Joy",
    Icon: Laugh,
    iconWrap: "bg-amber-100",
    iconColor: "text-amber-500",
  },
  {
    id: "neutral",
    label: "Neutral",
    Icon: Meh,
    iconWrap: "bg-slate-200",
    iconColor: "text-slate-600",
  },
  {
    id: "sadness",
    label: "Sadness",
    Icon: CloudRain,
    iconWrap: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    id: "surprise",
    label: "Surprise",
    Icon: Heart,
    iconWrap: "bg-orange-100",
    iconColor: "text-orange-600",
  },
] as const;

function MoodSelection() {
  const [selectedId, setSelectedId] =
    useState<(typeof moods)[number]["id"]>();

  const dateLabel = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  }).format(new Date());

  return (
    <section className="mt-3 rounded-2xl bg-slate-50/90 p-5 sm:p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-lg font-bold text-slate-800 sm:text-xl">
          <span className="flex size-9 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <Smile className="size-5" strokeWidth={2} aria-hidden />
          </span>
          Mood Selection
        </h2>
        <p className="text-sm font-normal text-slate-400">{dateLabel}</p>
      </div>

      <div className="grid grid-cols-7 gap-3 overflow-x-auto pb-1 [scrollbar-width:thin]">
        {moods.map((mood) => {
          const Icon = mood.Icon;
          const isSelected = selectedId === mood.id;
          return (
            <button
              key={mood.id}
              type="button"
              onClick={() => setSelectedId(mood.id)}
              className={
                isSelected
                  ? "flex min-w-[5.25rem] shrink-0 flex-col items-center gap-2.5 rounded-3xl border border-blue-500 bg-blue-50/80 px-4 py-4 shadow-sm outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2"
                  : "flex min-w-[5.25rem] shrink-0 flex-col items-center gap-2.5 rounded-3xl border border-transparent bg-white px-4 py-4 shadow-sm outline-none transition-all duration-200 hover:border-slate-200 hover:shadow-md focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2"
              }
            >
              <span
                className={`flex size-12 items-center justify-center rounded-full ${mood.iconWrap}`}
              >
                <Icon
                  className={`size-6 ${mood.iconColor}`}
                  strokeWidth={2}
                  aria-hidden
                />
              </span>
              <span
                className={
                  isSelected
                    ? "text-sm font-semibold text-blue-600"
                    : "text-sm font-semibold text-slate-800"
                }
              >
                {mood.label}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default MoodSelection;
