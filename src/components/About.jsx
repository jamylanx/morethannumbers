import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const POINTS = [
  {
    title: "The problem",
    text: "Students face relentless pressure to perform—from report cards and rankings to expectations at home.",
  },
  {
    title: "Our message",
    text: "Grades can matter, but they never measure your full worth, potential, or humanity.",
  },
  {
    title: "What we offer",
    text: "A short film, trailer, and podcast that open honest conversations about stress, comparison, and support.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            id="about-heading"
            title="Campaign Description"
            subtitle="More Than Numbers is an advocacy multimedia campaign about academic pressure experienced by students both in school and at home."
          />
        </ScrollReveal>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <ScrollReveal delay={80}>
              <p className="text-lg leading-relaxed text-navy/80 md:text-xl">
                More Than Numbers highlights the emotional impact of academic pressure and reminds students
                that their worth extends beyond grades, rankings, and expectations.
              </p>
              <p className="mt-6 text-base leading-relaxed text-navy/65">
                Through documentary-style storytelling, we explore how performance culture shapes identity—and
                how empathy, rest, and honest dialogue can help young people find balance again.
              </p>
            </ScrollReveal>

            <ul className="space-y-6">
              {POINTS.map((point, i) => (
                <ScrollReveal key={point.title} delay={120 + i * 60}>
                  <li className="border-l-2 border-accent pl-5">
                    <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-navy">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-navy/65">{point.text}</p>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>

          <ScrollReveal delay={200}>
            <div className="lg:sticky lg:top-28">
              <img
                src="/asset.jpg"
                alt="Campaign poster"
                className="aspect-[3/4] w-full rounded-xl object-cover shadow-inner"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
