import Link from "next/link";
import { Image } from "@/components/image";
import { HoverLift } from "@/components/hover-lift";
import { ScrollReveal } from "@/components/scroll-reveal";

function ExpertiseCard({
  src,
  alt,
  aspect,
  href,
}: {
  src: string;
  alt: string;
  aspect: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={`relative block w-full overflow-hidden rounded-[20px] bg-muted ${aspect}`}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </Link>
  );
}

export function ExpertiseSection() {
  return (
    <section className="px-3 py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <h2 className="text-4xl font-bold tracking-tight uppercase sm:text-5xl">
          Expertise
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[800fr_440fr]">
          <ScrollReveal className="w-full">
            <HoverLift>
              <ExpertiseCard
                src="/home/expertise-ui-ux.webp"
                alt="UI/UX"
                aspect="aspect-[800/500]"
                href="/work#product-ui-ux-design"
              />
            </HoverLift>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="w-full">
            <HoverLift>
              <ExpertiseCard
                src="/home/expertise-interaction-design.webp"
                alt="Interaction Design"
                aspect="aspect-[440/500]"
                href="/work/interaction"
              />
            </HoverLift>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[500fr_740fr]">
          <ScrollReveal className="w-full">
            <HoverLift>
              <ExpertiseCard
                src="/home/expertise-branding.webp"
                alt="Branding"
                aspect="aspect-[500/370]"
                href="/work#graphics-design-branding"
              />
            </HoverLift>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="w-full">
            <HoverLift>
              <ExpertiseCard
                src="/home/expertise-illustration.webp"
                alt="Illustrations"
                aspect="aspect-[740/370]"
                href="/work/illustration"
              />
            </HoverLift>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <ScrollReveal className="w-full">
            <HoverLift>
              <ExpertiseCard
                src="/home/expertise-product-design.webp"
                alt="Product Design"
                aspect="aspect-[620/500]"
                href="/work#product-ui-ux-design"
              />
            </HoverLift>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="w-full">
            <HoverLift>
              <ExpertiseCard
                src="/home/expertise-sketching.webp"
                alt="Sketching"
                aspect="aspect-[620/500]"
                href="/work/sketching"
              />
            </HoverLift>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
