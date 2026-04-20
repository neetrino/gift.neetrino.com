import Image from "next/image";
import { ASSETS } from "@/lib/figma-assets";

type ChatBotIconProps = { className?: string };

export function ChatBotIcon({ className = "relative size-12 shrink-0 overflow-hidden" }: ChatBotIconProps) {
  const a = ASSETS;

  return (
    <div className={className} data-name="chat-bot">
      <div className="absolute inset-[60.64%_2.13%_18.09%_76.6%]">
        <div className="relative size-full">
          <Image alt="" src={a.chatAccent1} fill className="object-cover" sizes="48px" unoptimized  loading="eager" />
        </div>
      </div>
      <div className="absolute inset-[60.64%_78.72%_18.09%_0]">
        <div className="relative size-full">
          <Image alt="" src={a.chatAccent2} fill className="object-cover" sizes="48px" unoptimized  loading="eager" />
        </div>
      </div>
      <div className="absolute inset-[11.53%_59.57%_56.38%_27.66%]">
        <div className="relative size-full">
          <Image alt="" src={a.chatAccent3} fill className="object-cover" sizes="48px" unoptimized  loading="eager" />
        </div>
      </div>
      <div className="absolute inset-[58.51%_63.83%_32.98%_27.66%]">
        <div className="relative size-full">
          <Image alt="" src={a.chatAccent4} fill className="object-cover" sizes="48px" unoptimized  loading="eager" />
        </div>
      </div>
      <div className="absolute inset-[77.66%_38.3%_13.83%_36.17%]">
        <div className="relative size-full">
          <Image alt="" src={a.chatAccent4} fill className="object-cover" sizes="48px" unoptimized  loading="eager" />
        </div>
      </div>
      <div className="absolute inset-[58.51%_29.79%_32.98%_61.7%]">
        <div className="relative size-full">
          <Image alt="" src={a.chatAccent4} fill className="object-cover" sizes="48px" unoptimized  loading="eager" />
        </div>
      </div>
      <div className="absolute inset-[43.62%_12.77%_1.06%_10.64%]">
        <div className="relative size-full">
          <Image alt="" src={a.chatGlass} fill className="object-cover" sizes="48px" unoptimized  loading="eager" />
        </div>
      </div>
      <div className="absolute inset-[58.51%_63.83%_32.98%_27.66%]">
        <div className="relative size-full">
          <Image alt="" src={a.chatAccent5} fill className="object-cover" sizes="48px" unoptimized  loading="eager" />
        </div>
      </div>
      <div className="absolute inset-[77.66%_38.3%_13.83%_36.17%]">
        <div className="relative size-full">
          <Image alt="" src={a.chatAccent6} fill className="object-cover" sizes="48px" unoptimized  loading="eager" />
        </div>
      </div>
      <div className="absolute inset-[58.51%_29.79%_32.98%_61.7%]">
        <div className="relative size-full">
          <Image alt="" src={a.chatAccent5} fill className="object-cover" sizes="48px" unoptimized  loading="eager" />
        </div>
      </div>
    </div>
  );
}
