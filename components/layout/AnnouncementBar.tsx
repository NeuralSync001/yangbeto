import { siteConfig } from "@/config/site";

export function AnnouncementBar() {
  return (
    <div role="note" className="bg-brand-dark text-white">
      <div className="mx-auto flex min-h-8 max-w-[1320px] items-center justify-center px-4 py-1.5 text-center text-[0.62rem] font-medium uppercase tracking-[0.12em] sm:text-[0.68rem] sm:tracking-[0.16em]">
        {siteConfig.announcement.text}
      </div>
    </div>
  );
}
