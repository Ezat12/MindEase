import "react";

function WelcomeSection({ name }: { name: string }) {
  return (
    <div className="w-full px-6 py-8">
      <h1 className="text-4xl md:text-4xl font-bold text-gray-800">
        Welcome back, <span className="text-blue-600">{name || "User"}</span> 👋
      </h1>

      <p className="mt-2 text-gray-500 text-sm md:text-base">
        How are you feeling right now? Your state matters to us.
      </p>
    </div>
  );
}

export default WelcomeSection;
