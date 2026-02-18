import React from "react";
import { HometsLogo } from "./HometsLogo";
import { Phone, Mail, MapPin, Globe, Star, Home, Clock, TrendingUp, AlertTriangle, Shield, Zap, DollarSign, Users, Wrench } from "lucide-react";

const ORANGE = "hsl(15, 90%, 55%)";
const RED = "hsl(0, 78%, 50%)";
const WARM = "hsl(25, 100%, 60%)";
const GREEN = "hsl(142, 71%, 45%)";
const BG = "hsl(0, 0%, 5%)";
const SURFACE = "hsl(0, 0%, 10%)";
const SURFACE2 = "hsl(0, 0%, 14%)";
const TEXT = "hsl(0, 0%, 95%)";
const MUTED = "hsl(0, 0%, 60%)";
const BORDER = "hsl(0, 0%, 18%)";

const Section: React.FC<{ children: React.ReactNode; id?: string }> = ({ children, id }) => (
  <section id={id} className="px-5 py-8" style={{ borderBottom: `1px solid ${BORDER}` }}>
    {children}
  </section>
);

const SectionTitle: React.FC<{ children: React.ReactNode; accent?: string }> = ({ children, accent = ORANGE }) => (
  <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: TEXT }}>
    <span style={{ color: accent }}>— </span>{children}
  </h2>
);

const StatCard: React.FC<{ value: string; label: string; color?: string }> = ({ value, label, color = ORANGE }) => (
  <div className="rounded-xl p-4 text-center" style={{ background: SURFACE2 }}>
    <div className="text-2xl font-extrabold mb-1" style={{ color }}>{value}</div>
    <div className="text-xs" style={{ color: MUTED }}>{label}</div>
  </div>
);

const PainCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex gap-3 rounded-xl p-4" style={{ background: SURFACE2 }}>
    <div className="flex-shrink-0 mt-0.5" style={{ color: RED }}>{icon}</div>
    <div>
      <div className="font-semibold text-sm mb-1" style={{ color: TEXT }}>{title}</div>
      <div className="text-xs leading-relaxed" style={{ color: MUTED }}>{desc}</div>
    </div>
  </div>
);

const WhyNowCard: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <div className="flex gap-3 items-start rounded-xl p-4" style={{ background: SURFACE2 }}>
    <div className="flex-shrink-0" style={{ color: GREEN }}>{icon}</div>
    <div className="text-sm" style={{ color: TEXT }}>{text}</div>
  </div>
);

export const MobilePresentation: React.FC = () => {
  return (
    <div className="min-h-screen pb-20" style={{ background: BG }}>
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-5 pt-12 pb-10 text-center" style={{ borderBottom: `1px solid ${BORDER}` }}>
        <HometsLogo width={220} className="mb-6" />
        <p className="text-lg font-medium mb-4" style={{ color: MUTED }}>
          Long Island's Fastest-Growing HVAC Company
        </p>
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold"
          style={{ background: `linear-gradient(135deg, ${ORANGE}, ${RED})`, color: "white" }}>
          <DollarSign className="w-4 h-4" />
          $250K Pre-Seed · 2026
        </div>
        <p className="text-xs mt-4" style={{ color: MUTED }}>Scroll to explore ↓</p>
      </section>

      {/* Problem */}
      <Section>
        <SectionTitle accent={RED}>The Problem</SectionTitle>
        <div className="space-y-3">
          <PainCard
            icon={<Clock className="w-5 h-5" />}
            title="4-6 Hour Wait Times"
            desc="Homeowners wait half a day for a tech who may not even fix it on the first visit."
          />
          <PainCard
            icon={<AlertTriangle className="w-5 h-5" />}
            title="No Transparency"
            desc="Hidden fees, surprise charges, and no upfront pricing. Homeowners feel ripped off."
          />
          <PainCard
            icon={<Shield className="w-5 h-5" />}
            title="Unreliable Service"
            desc="Unlicensed techs, no-shows, and sloppy work. 1 in 3 HVAC jobs needs a callback."
          />
        </div>
      </Section>

      {/* Solution */}
      <Section>
        <SectionTitle>The Solution</SectionTitle>
        <div className="rounded-xl p-4 mb-4" style={{ background: `linear-gradient(135deg, ${ORANGE}22, ${RED}11)`, border: `1px solid ${ORANGE}44` }}>
          <div className="text-xl font-extrabold mb-1" style={{ color: ORANGE }}>90-Minute Guarantee</div>
          <div className="text-sm" style={{ color: TEXT }}>We arrive in 90 minutes or the service call is free.</div>
        </div>
        <ul className="space-y-2.5">
          {[
            "Upfront flat-rate pricing — no surprises",
            "Licensed, background-checked technicians",
            "Same-day repairs, 7 days a week",
            "Real-time tracking & appointment updates",
            "Lifetime workmanship warranty",
          ].map((item, i) => (
            <li key={i} className="flex gap-2 items-start text-sm" style={{ color: TEXT }}>
              <Zap className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: WARM }} />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* Traction */}
      <Section>
        <SectionTitle accent={GREEN}>Traction</SectionTitle>
        <div className="grid grid-cols-2 gap-3">
          <StatCard value="$54.5K" label="Month 1 Revenue" color={GREEN} />
          <StatCard value="~$650K" label="Annual Run Rate" color={GREEN} />
          <StatCard value="66" label="Five-Star Reviews" color={WARM} />
          <StatCard value="500+" label="Homes Served" color={ORANGE} />
        </div>
      </Section>

      {/* Market */}
      <Section>
        <SectionTitle>Market Opportunity</SectionTitle>
        <div className="flex gap-3 mb-4">
          <StatCard value="$76-80B" label="U.S. HVAC Market" />
          <StatCard value="6.9%" label="Annual Growth (CAGR)" />
        </div>
        <ul className="space-y-2">
          {[
            "Aging housing stock driving replacement demand",
            "Extreme weather increasing system failures",
            "Energy efficiency mandates creating upgrade cycles",
            "Fragmented market — no dominant brand on Long Island",
          ].map((item, i) => (
            <li key={i} className="flex gap-2 items-start text-sm" style={{ color: MUTED }}>
              <TrendingUp className="w-3.5 h-3.5 flex-shrink-0 mt-1" style={{ color: ORANGE }} />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* The Ask */}
      <Section>
        <SectionTitle accent={WARM}>The Ask</SectionTitle>
        <div className="rounded-xl p-5 mb-4 text-center" style={{ background: SURFACE2 }}>
          <div className="text-3xl font-extrabold mb-1" style={{ color: WARM }}>$250K</div>
          <div className="text-sm mb-3" style={{ color: MUTED }}>SAFE Note · $2M Valuation Cap</div>
          <div className="text-xs" style={{ color: MUTED }}>~12.5% equity at conversion</div>
        </div>

        <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: MUTED }}>Allocation</div>
        <div className="space-y-2 mb-5">
          {[
            { label: "Crew Hiring & Training", pct: "45%", color: ORANGE },
            { label: "Fleet & Equipment", pct: "25%", color: WARM },
            { label: "Demand Gen", pct: "15%", color: RED },
            { label: "Technology", pct: "10%", color: GREEN },
            { label: "Working Capital", pct: "5%", color: MUTED },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center text-sm" style={{ color: TEXT }}>
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }} />
                {item.label}
              </span>
              <span className="font-bold" style={{ color: item.color }}>{item.pct}</span>
            </div>
          ))}
        </div>

        <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: MUTED }}>Investor Returns</div>
        <div className="rounded-xl overflow-hidden" style={{ background: SURFACE2 }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                <th className="text-left p-3 font-semibold" style={{ color: MUTED }}>Exit</th>
                <th className="text-right p-3 font-semibold" style={{ color: MUTED }}>Return</th>
              </tr>
            </thead>
            <tbody>
              {[
                { exit: "$10M", ret: "5x", color: WARM },
                { exit: "$20M", ret: "10x", color: ORANGE },
                { exit: "$40M", ret: "20x", color: GREEN },
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: i < 2 ? `1px solid ${BORDER}` : undefined }}>
                  <td className="p-3" style={{ color: TEXT }}>{row.exit}</td>
                  <td className="p-3 text-right font-bold" style={{ color: row.color }}>{row.ret}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Why Now */}
      <Section>
        <SectionTitle accent={GREEN}>Why Now</SectionTitle>
        <div className="space-y-3">
          <WhyNowCard icon={<TrendingUp className="w-5 h-5" />} text="Revenue growing month-over-month with zero paid marketing — pure word-of-mouth" />
          <WhyNowCard icon={<Users className="w-5 h-5" />} text="First-mover advantage on Long Island — no tech-enabled HVAC competitor" />
          <WhyNowCard icon={<Wrench className="w-5 h-5" />} text="Peak HVAC season approaching — capital now means maximum crew deployment" />
          <WhyNowCard icon={<Home className="w-5 h-5" />} text="Proven model ready to scale — unit economics already profitable" />
        </div>
      </Section>

      {/* Contact */}
      <section className="px-5 py-8">
        <SectionTitle>Get In Touch</SectionTitle>
        <div className="space-y-3">
          <a href="tel:5162591191" className="flex items-center gap-3 rounded-xl p-4 no-underline" style={{ background: SURFACE2, color: TEXT }}>
            <Phone className="w-5 h-5" style={{ color: ORANGE }} />
            <div>
              <div className="font-semibold text-sm">Call Us</div>
              <div className="text-xs" style={{ color: MUTED }}>(516) 259-1191</div>
            </div>
          </a>
          <a href="mailto:info@hometsair.com" className="flex items-center gap-3 rounded-xl p-4 no-underline" style={{ background: SURFACE2, color: TEXT }}>
            <Mail className="w-5 h-5" style={{ color: ORANGE }} />
            <div>
              <div className="font-semibold text-sm">Email</div>
              <div className="text-xs" style={{ color: MUTED }}>info@hometsair.com</div>
            </div>
          </a>
          <a href="https://hometsair.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl p-4 no-underline" style={{ background: SURFACE2, color: TEXT }}>
            <Globe className="w-5 h-5" style={{ color: ORANGE }} />
            <div>
              <div className="font-semibold text-sm">Website</div>
              <div className="text-xs" style={{ color: MUTED }}>hometsair.com</div>
            </div>
          </a>
          <div className="flex items-center gap-3 rounded-xl p-4" style={{ background: SURFACE2 }}>
            <MapPin className="w-5 h-5" style={{ color: ORANGE }} />
            <div>
              <div className="font-semibold text-sm" style={{ color: TEXT }}>Long Island, NY</div>
              <div className="text-xs" style={{ color: MUTED }}>Serving Nassau & Suffolk Counties</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3" style={{ background: `linear-gradient(to top, ${BG}, ${BG}ee)` }}>
        <a
          href="tel:5162591191"
          className="flex items-center justify-center gap-2 w-full rounded-xl py-3.5 text-base font-bold no-underline"
          style={{ background: `linear-gradient(135deg, ${ORANGE}, ${RED})`, color: "white" }}
        >
          <Phone className="w-5 h-5" />
          Call Now — (516) 259-1191
        </a>
      </div>
    </div>
  );
};
