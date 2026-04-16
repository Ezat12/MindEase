import {
  ArrowRight,
  BetweenHorizontalEnd,
  BookOpen,
  Bot,
  Stethoscope,
  TrendingUp,
} from "lucide-react";

function Tools() {
  const tools = [
    {
      id: "recommendation",
      title: "Recommended Doctors",
      content: "Connect with specialists tailored to your needs.",
      button: "Book now",
      iconWrap: "bg-sky-100",
      iconColor: "text-sky-600",
      Icon: Stethoscope,
    },
    {
      id: "chatbot",
      title: "Echo Chatbot",
      content: "Talk to Echo, your AI support companion.",
      button: "start chat",
      iconWrap: "bg-emerald-100",
      iconColor: "text-emerald-600",
      Icon: Bot,
    },
    {
      id: "journal",
      title: "Daily Journal",
      content: "Log your thoughts and reflections for the day.",
      button: "Write now",
      iconWrap: "bg-amber-100",
      iconColor: "text-amber-600",
      Icon: BookOpen,
    },
    {
      id: "mood-tracker",
      title: "Mood Tracker",
      content: "View your emotional trends over time.",
      button: "view trends",
      iconWrap: "bg-rose-100",
      iconColor: "text-rose-600",
      Icon: TrendingUp,
    },
  ] as const;

  return (
    <div className="mt-3 p-5 sm:p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-lg font-bold text-slate-800 sm:text-xl">
          <span className="flex size-9 items-center justify-center rounded-full text-blue-600">
            <BetweenHorizontalEnd
              className="size-5"
              strokeWidth={2}
              aria-hidden
            />
          </span>
          Personalized Tools
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool) => {
          const Icon = tool.Icon;
          return (
            <article
              key={tool.id}
              className="group flex flex-col rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <span
                className={`mb-3 flex size-12 items-center justify-center rounded-full ${tool.iconWrap}`}
              >
                <Icon
                  className={`size-6 ${tool.iconColor}`}
                  strokeWidth={2}
                  aria-hidden
                />
              </span>
              <h3 className="font-semibold text-slate-800">{tool.title}</h3>
              <p className="mt-1 flex-1 text-sm text-slate-600">{tool.content}</p>
              <button
                type="button"
                className="mt-4 text-lg flex items-center gap-1.5 self-start border-0 bg-transparent p-0 font-semibold text-blue-600 outline-none transition-colors hover:text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500/45 focus-visible:ring-offset-2"
              >
                <span>{tool.button}</span>
                <ArrowRight
                  className="size-4 shrink-0  transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                  strokeWidth={2}
                  aria-hidden
                />
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Tools;
