import Image from "next/image";
import { ASSETS } from "@/lib/figma-assets";

type CloudIconProps = { className?: string };

export function CloudIcon({ className = "relative size-12 shrink-0 overflow-hidden" }: CloudIconProps) {
  return (
    <div className={className} data-name="cloud">
      <div className="absolute bottom-1/2 left-1/2 right-[4.55%] top-[15.91%]">
        <div className="relative size-full">
          <Image alt="" src={ASSETS.cloudBg} fill className="object-cover" sizes="48px" unoptimized  loading="eager" />
        </div>
      </div>
      <div className="absolute inset-[15.91%_4.55%]">
        <div className="relative size-full">
          <Image alt="" src={ASSETS.cloudGlass} fill className="object-cover" sizes="48px" unoptimized  loading="eager" />
        </div>
      </div>
    </div>
  );
}
