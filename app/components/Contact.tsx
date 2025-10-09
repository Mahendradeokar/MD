import { Button } from "./ui/Button";

export function Contact() {
  return (
    <section aria-labelledby="contact-heading" className="w-full">
      <h2 id="contact-heading" className="m-0 mt-4 p-0 text-md font-medium">
        Contact
      </h2>
      <p className="m-0 mt-2 text-sm text-muted-foreground">
        Have a question or feedback? Feel free to reach out.
      </p>
      <div className="mt-3 flex flex-wrap gap-4 text-sm">
        <Button asChild className="p-0.5">
          <a href="mailto:deokarmahendra424@gmail.com">Email</a>
        </Button>
        <Button asChild className="px-0">
          <a
            href="https://x.com/mahendra__devkar"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </Button>
      </div>
    </section>
  );
}
