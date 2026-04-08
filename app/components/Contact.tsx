import { Button } from "./ui/Button";
import AnalogClock from "@/app/components/shared/analog-clock";

export function Contact() {
  return (
    <footer aria-labelledby="contact-heading" className="w-full">
      <h2 id="contact-heading" className="m-0 mt-4 p-0 text-md font-medium">
        Contact
      </h2>
      <p className="m-0 mt-2 text-sm text-muted-foreground">
        Have a question or feedback? Feel free to reach out.
      </p>
      <div className="mt-3 flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-4 text-sm">
          <Button asChild className="p-0.5">
            <a href="mailto:deokarmahendra424@gmail.com">Email</a>
          </Button>
          <Button asChild className="px-0">
            <a
              href="https://x.com/msdeokar"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
          </Button>
        </div>
        <div className="shrink-0">
          <AnalogClock />
        </div>
      </div>
    </footer>
  );
}
