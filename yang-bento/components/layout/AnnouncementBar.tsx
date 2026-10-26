import Link from "next/link";
import { siteConfig } from "@/config/site";

export function AnnouncementBar() {
  const { enabled, text, href } = siteConfig.announcement;
  if (!enabled) return null;
  return (
    <div className="bg-brand text-white">
      <div className="mx-auto flex min-h-9 max-w-[1320px] items-center justify-center px-5 py-2 text-center text-[0.72rem] uppercase tracking-[0.16em]">
        <Link href={href} className="underline-offset-4 hover:underline">
          {text}
        </Link>
      </div>
    </div>
  );
}
