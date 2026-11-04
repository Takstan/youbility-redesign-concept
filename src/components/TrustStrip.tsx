import React, { useEffect, useState, useRef } from 'react';
import { ShieldCheck, Award, FileCheck2, Hammer, Building2, HeartHandshake } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [yearsCount, setYearsCount] = useState(1);
  const [projectsCount, setProjectsCount] = useState(10);
  const [insuranceAmount, setInsuranceAmount] = useState(1);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate years count (1 to 15)
          let currentYears = 1;
          const yearsInterval = setInterval(() => {
            currentYears += 1;
            if (currentYears >= 15) {
              setYearsCount(15);
              clearInterval(yearsInterval);
            } else {
              setYearsCount(currentYears);
            }
          }, 45);

          // Animate projects count (10 to 450)
          let currentProjects = 10;
          const projInterval = setInterval(() => {
            currentProjects += 22;
            if (currentProjects >= 450) {
              setProjectsCount(450);
              clearInterval(projInterval);
            } else {
              setProjectsCount(currentProjects);
            }
          }, 35);

          // Animate insurance amount (1 to 5)
          let currentIns = 1;
          const insInterval = setInterval(() => {
            currentIns += 1;
            if (currentIns >= 5) {
              setInsuranceAmount(5);
              clearInterval(insInterval);
            } else {
              setInsuranceAmount(currentIns);
            }
          }, 120);
        }
      },
      { threshold: 0.25 }
    );

    if (stripRef.current) {
      observer.observe(stripRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="trust" ref={stripRef} className="bg-[#12281D] text-[#FAF8F5] py-14 border-b border-[#26523C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title & subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-semibold tracking-widest text-[#DDA37D] uppercase mb-2">
            Verified Contracting Credentials
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Trusted Experience. Thoughtful Construction.
          </h2>
          <p className="text-sm text-[#E6DFC5]/80 mt-2">
            Fully certified, insured, and dedicated to elevating barrier-free standards across Ontario.
          </p>
        </div>

        {/* 4 Quantitative Credibility Pillars with count-up */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 pb-10 border-b border-white/10">
          
          <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white/[0.03] border border-white/5">
            <div className="flex items-baseline gap-0.5 text-3xl sm:text-4xl font-extrabold font-heading text-[#FAF8F5] tabular-nums">
              <span>{yearsCount}</span>
              <span className="text-[#C27D53]">+</span>
            </div>
            <div className="text-xs font-semibold text-white/90 mt-1 uppercase tracking-wide">
              Years in Construction
            </div>
            <div className="text-[11px] text-[#D8CEAF]/70 mt-1">
              Serving GTA homeowners since 2011
            </div>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white/[0.03] border border-white/5">
            <div className="flex items-baseline gap-0.5 text-3xl sm:text-4xl font-extrabold font-heading text-[#FAF8F5] tabular-nums">
              <span>{projectsCount}</span>
              <span className="text-[#C27D53]">+</span>
            </div>
            <div className="text-xs font-semibold text-white/90 mt-1 uppercase tracking-wide">
              Completed Renovations
            </div>
            <div className="text-[11px] text-[#D8CEAF]/70 mt-1">
              Roll-in showers, ramps & elevators
            </div>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white/[0.03] border border-white/5">
            <div className="flex items-baseline gap-0.5 text-3xl sm:text-4xl font-extrabold font-heading text-[#FAF8F5] tabular-nums">
              <span>${insuranceAmount}M</span>
            </div>
            <div className="text-xs font-semibold text-white/90 mt-1 uppercase tracking-wide">
              General Liability Coverage
            </div>
            <div className="text-[11px] text-[#D8CEAF]/70 mt-1">
              WSIB cleared with zero claims
            </div>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white/[0.03] border border-white/5">
            <div className="flex items-baseline gap-0.5 text-3xl sm:text-4xl font-extrabold font-heading text-[#FAF8F5] tabular-nums">
              <span>100%</span>
            </div>
            <div className="text-xs font-semibold text-white/90 mt-1 uppercase tracking-wide">
              AODA & OBC Compliant
            </div>
            <div className="text-[11px] text-[#D8CEAF]/70 mt-1">
              Strict adherence to building codes
            </div>
          </div>

        </div>

        {/* Credibility logos / badges strip */}
        <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#FAF8F5]/80">
          <div className="flex items-center gap-3 p-3 rounded-md bg-white/[0.02]">
            <ShieldCheck className="w-5 h-5 text-[#C27D53] shrink-0" />
            <div>
              <div className="font-semibold text-white">WSIB Covered</div>
              <div className="text-[11px] text-white/60">Good Standing Certificate</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-md bg-white/[0.02]">
            <Building2 className="w-5 h-5 text-[#C27D53] shrink-0" />
            <div>
              <div className="font-semibold text-white">City Licensed</div>
              <div className="text-[11px] text-white/60">Toronto Metro Contractor</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-md bg-white/[0.02]">
            <Award className="w-5 h-5 text-[#C27D53] shrink-0" />
            <div>
              <div className="font-semibold text-white">Tax Credit Approved</div>
              <div className="text-[11px] text-white/60">Ontario Senior Safety Grant</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-md bg-white/[0.02]">
            <HeartHandshake className="w-5 h-5 text-[#C27D53] shrink-0" />
            <div>
              <div className="font-semibold text-white">Family Centered</div>
              <div className="text-[11px] text-white/60">Respectful, clean job sites</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
