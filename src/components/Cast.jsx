import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const CAST = [
  {
    role: "Main Character",
    title: "Jonnamae Bioco",
    description:
      "A student navigating expectations from school and family while questioning what success really means.",
  },
  {
    role: "Academic Achiever",
    title: "Jaira Bonayog",
    description: "Represents the pressure to maintain perfect scores and the fear of falling behind.",
  },
  {
    role: "Reflection Student",
    title: "Julliana Ygrubay",
    description: "Offers quiet moments of introspection about identity beyond report cards.",
  },
  {
    role: "Supportive Friend",
    title: "Eveson Labonite",
    description: "Shows how empathy and listening can ease the weight of comparison.",
  },
  {
    role: "Ranking Student",
    title: "James Vasquez",
    description: "Embodies competition and the culture of being measured against others.",
  },
  {
    role: "Narrator",
    title: "Kjanli Barette",
    description: "Guides the audience through the emotional landscape of academic pressure.",
  },
];

function CastCard({ member, index }) {
  return (
    <ScrollReveal delay={(index % 3) * 80}>
      <article className="flex h-full flex-col overflow-hidden rounded-xl border border-navy/8 bg-white shadow-sm transition-shadow hover:shadow-md">
        <div
          className="aspect-square bg-gradient-to-br from-soft-gray to-navy/10"
          role="img"
          aria-label={`${member.role} profile placeholder`}
        >
          <div className="flex h-full items-center justify-center">
            <div className="h-20 w-20 rounded-full bg-navy/10" />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="font-heading text-xs font-semibold uppercase tracking-widest text-accent">
            {member.role}
          </p>
          <h3 className="mt-2 font-heading text-lg font-semibold text-navy">{member.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/65">{member.description}</p>
        </div>
      </article>
    </ScrollReveal>
  );
}

export default function Cast() {
  return (
    <section id="cast" className="bg-soft-gray py-24 md:py-32" aria-labelledby="cast-heading">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading id="cast-heading" title="Cast" />
        </ScrollReveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CAST.map((member, index) => (
            <CastCard key={member.role} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
