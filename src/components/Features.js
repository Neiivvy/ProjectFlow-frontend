const features = [
  {
    icon: "📋",
    title: "Project Management",
    description:
      "Organize multiple initiatives in a unified dashboard with full visibility over every stage.",
  },
  {
    icon: "✅",
    title: "Task Assignment",
    description:
      "Assign tasks based on team workload so nothing falls through the cracks.",
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    description:
      "Real-time indicators help you spot bottlenecks before they impact delivery.",
  },
  {
    icon: "🔒",
    title: "Role-Based Access",
    description:
      "Granular permissions ensure the right people have exactly the access they need.",
  },
  {
    icon: "👥",
    title: "Team Collaboration",
    description:
      "Shared workspaces and notifications keep everyone synchronized.",
  },
  {
    icon: "📈",
    title: "Reports & Analytics",
    description:
      "Turn raw operational data into actionable business intelligence.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-[#ecefe9] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest uppercase text-[#0f5238]">
            Platform Capabilities
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-[#181d19]">
            Everything your team needs to stay aligned
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-8 bg-white rounded-xl border border-[#bfc9c1] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 flex items-center justify-center text-2xl bg-[#dce5df] rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#181d19] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#404943]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}