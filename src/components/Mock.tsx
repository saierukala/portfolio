import Image from "next/image";
import type { CaseStudy } from "@/data/profile";
import HrmsDash from "./dashboards/HrmsDash";
import ErpDash from "./dashboards/ErpDash";
import StoreDash from "./dashboards/StoreDash";
import NewsDash from "./dashboards/NewsDash";

const ALT = {
  hrms: "HRMS attendance dashboard: today's present, late and on-leave counts, employee attendance table, leave approvals and the HR Assistant chat",
  erp: "TG Agros ERP inventory screen: SKU table with stock bars and low-stock status, server-side pagination and AI reorder recommendations",
  store: "Sri Lakshmi Kalamkari storefront: product grid and a checkout summary with the order total",
  news: "Swechaa news CMS: article list with Draft, Scheduled and Published status, e-paper edition preview and media upload",
} as const;

const dashboards = { hrms: HrmsDash, erp: ErpDash, store: StoreDash, news: NewsDash };

/**
 * Project cover. Uses the screenshot in /public/work (rendered from /shots/[slug] in dev) or any
 * real screenshot set via `image` on the case study; falls back to the live drawn dashboard.
 */
export default function Mock({ study, priority = false }: { study: CaseStudy; priority?: boolean }) {
  const Dash = dashboards[study.mock];
  return (
    <div className="aspect-[16/10] w-full">
      {study.image ? (
        <div className="relative h-full w-full overflow-hidden rounded-xl border border-line bg-white">
          <Image
            src={study.image}
            alt={ALT[study.mock]}
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            priority={priority}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div role="img" aria-label={ALT[study.mock]} className="h-full w-full">
          <Dash />
        </div>
      )}
    </div>
  );
}
