import { notFound } from "next/navigation";
import HrmsDash from "@/components/dashboards/HrmsDash";
import ErpDash from "@/components/dashboards/ErpDash";
import StoreDash from "@/components/dashboards/StoreDash";
import NewsDash from "@/components/dashboards/NewsDash";

const shots = { hrms: HrmsDash, erp: ErpDash, store: StoreDash, news: NewsDash } as const;

// Dev-only page used to render the project cover screenshots in /public/work (1400x875).
export const metadata = { robots: { index: false } };

export default function Shot({ params }: { params: { slug: string } }) {
  if (process.env.NODE_ENV === "production") notFound();
  const Dash = shots[params.slug as keyof typeof shots];
  if (!Dash) notFound();
  return (
    <div className="light shot-blue fixed left-0 top-0 z-[100] bg-bg" style={{ width: 1400, height: 875 }}>
      <Dash />
    </div>
  );
}
