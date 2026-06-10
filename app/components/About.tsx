export function About() {
  return (
    <section aria-labelledby="about-heading" className="w-full">
      <h2 id="about-heading" className="sr-only">
        About me
      </h2>
      <p className="m-0 max-w-[68ch] text-[clamp(1rem,2.5vw,1.0625rem)] leading-relaxed text-muted-foreground">
        Frontend-focused Software Engineer with 2.5+ years building
        production-grade React/Next.js apps, real-time UIs, and reusable
        component systems. Specialized in design-to-code, streaming UX, and
        developer tooling. Passionate about performance, DX, and delightful
        interaction design.
      </p>
    </section>
  );
}
