import Image from "next/image";
import { ASSETS } from "@/lib/figma-assets";

type PlanetIconProps = { className?: string };

export function PlanetIcon({ className = "relative size-12 shrink-0 overflow-hidden" }: PlanetIconProps) {
  return (
    <div className={className} data-name="planet">
      <div className="absolute inset-[4.55%_4.55%_15.91%_4.55%]">
        <div className="relative size-full">
          <Image alt="" src={ASSETS.planetBg} fill className="object-cover" sizes="48px" unoptimized  loading="eager" />
        </div>
      </div>
      <div className="absolute inset-[11.36%]">
        <div className="relative size-full">
          <Image alt="" src={ASSETS.planetGlass} fill className="object-cover" sizes="48px" unoptimized  loading="eager" />
        </div>
      </div>
      <div className="absolute inset-[27.76%_5.35%_17.98%_5.36%]">
        <div className="relative size-full">
          <Image alt="" src={ASSETS.planetTop} fill className="object-cover" sizes="48px" unoptimized  loading="eager" />
        </div>
      </div>
    </div>
  );
}
