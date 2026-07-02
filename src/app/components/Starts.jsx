import { BookOpen, GraduationCap, Users } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: <Users className="size-8" />,
    value: "15K+",
    title: "Active Students",
    description:
      "Join thousands of learners building successful careers through our platform.",
  },
  {
    id: 2,
    icon: <GraduationCap className="size-8" />,
    value: "250+",
    title: "Expert Instructors",
    description:
      "Learn directly from experienced professionals and industry experts.",
  },
  {
    id: 3,
    icon: <BookOpen className="size-8" />,
    value: "80+",
    title: "Premium Courses",
    description:
      "Explore high-quality courses designed for beginners and professionals.",
  },
];

const Starts = () => {
  return (
    <section className="relative mt-20 overflow-hidden rounded-3xl bg-[#08184d] py-20 max-w-7xl mx-auto">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "220px 220px",
        }}
      />

      {/* Glow Effect */}
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative z-10 px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            WHY CHOOSE US
          </span>

          <h2 className="mt-5 text-3xl font-bold text-white md:text-5xl">
            Why Choose Our Platform?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            We provide everything you need to achieve your learning goals with
            expert guidance, practical projects, and a supportive community.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="mt-6 text-4xl font-bold text-white">
                {item.value}
              </h3>

              <h4 className="mt-2 text-xl font-semibold text-white">
                {item.title}
              </h4>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Starts;