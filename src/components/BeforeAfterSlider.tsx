import React, { useState, useRef, useCallback, useEffect } from 'react';
import { MoveHorizontal, Shield, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProjectTransformation {
  id: string;
  category: string;
  title: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  beforeDescription: string;
  afterDescription: string;
  improvements: string[];
}

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects: ProjectTransformation[] = [
    {
      id: 'bathroom',
      category: 'Accessible Bathroom',
      title: 'Curbless Roll-In Suite Transformation',
      location: 'North York, ON',
      beforeImage: '/src/assets/images/transform_bathroom_before_1793373402776.jpg',
      afterImage: '/src/assets/images/transform_bathroom_after_1793373402000.jpg',
      beforeDescription: 'Hazardous 18" bathtub step-over, narrow 28" door, zero grab support, slippery linoleum.',
      afterDescription: 'Zero-threshold roll-in curbless shower, 36" wide entry, concealed structural grab rails, anti-slip porcelain.',
      improvements: [
        'Zero-curb threshold with linear trench drainage',
        'Reinforced backing behind walls for 350+ lb grab bars',
        'Floating vanity with 29" knee clearance for wheelchair use',
        'DCOF > 0.42 textured non-slip heated tile floor'
      ]
    },
    {
      id: 'entrance',
      category: 'Exterior Entrance & Ramp',
      title: 'Architectural Garden Ramp & Level Entry',
      location: 'Etobicoke, ON',
      beforeImage: '/src/assets/images/transform_ramp_before_1793375077375.jpg',
      afterImage: '/src/assets/images/service_exterior_ramp_1793373402669.jpg',
      beforeDescription: 'Steep 4-step concrete porch stairs causing isolation and fall risk.',
      afterDescription: 'Gentle 1:12 slope cedar and stone ramp blended seamlessly with residential garden landscaping.',
      improvements: [
        'Gentle Ontario Building Code 1:12 slope gradient',
        'Dual blackened steel handrails at 34" and 38" height',
        'Zero-step flush door transition with weather seal',
        'Low-voltage integrated LED step and path lighting'
      ]
    },
    {
      id: 'living',
      category: 'Kitchen & Barrier-Free Living',
      title: 'Open-Concept Barrier-Free Main Floor',
      location: 'Markham, ON',
      beforeImage: '/src/assets/images/transform_kitchen_before_1793375078038.jpg',
      afterImage: '/src/assets/images/about_accessible_living_1793373401539.jpg',
      beforeDescription: 'Compartmentalized rooms, 30" pinch points, high upper cabinets unreachable from seated position.',
      afterDescription: 'Wide 42" circulation corridors, smooth hardwood level transitions, pull-down shelves, luxury finish.',
      improvements: [
        'Flush transitions between rooms with no reducer strips',
        '60" open turning diameter throughout main living area',
        'Contrasting visual tones for low-vision navigation',
        'Motorized pocket doors with touchless wave sensors'
      ]
    }
  ];

  const [activeProject, setActiveProject] = useState<ProjectTransformation>(projects[0]);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section id="transformations" className="py-20 lg:py-28 bg-[#F3EFE7] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#C27D53] mb-3">
            BEFORE & AFTER CASE STUDIES
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C201D] tracking-tight leading-[1.15] mb-5">
            Real Transformations. Lasting Independence.
          </h2>
          <p className="text-base sm:text-lg text-[#57645B] leading-relaxed">
            See how thoughtful renovation can turn everyday barriers into spaces designed for easier, more comfortable living.
          </p>

          {/* Project category tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {projects.map((proj) => (
              <button
                key={proj.id}
                onClick={() => {
                  setActiveProject(proj);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeProject.id === proj.id
                    ? 'bg-[#1B3B2B] text-white shadow-sm'
                    : 'bg-white/80 text-[#3C463F] hover:bg-white hover:text-[#1C201D] border border-[#E8E2D5]'
                }`}
              >
                {proj.category}
              </button>
            ))}
          </div>
        </div>

        {/* Drag to Explore Hint */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#1B3B2B] mb-4">
          <MoveHorizontal className="w-4 h-4 text-[#C27D53] animate-pulse" />
          <span>Drag divider left or right to compare</span>
        </div>

        {/* Draggable Slider Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-2 border-white select-none cursor-ew-resize bg-[#1C201D]"
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              handleMove(e.touches[0].clientX);
            }}
            role="slider"
            aria-label="Before and after transformation comparison slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(sliderPosition)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') setSliderPosition((prev) => Math.max(0, prev - 5));
              if (e.key === 'ArrowRight') setSliderPosition((prev) => Math.min(100, prev + 5));
            }}
          >
            {/* After Image (Background) */}
            <img
              src={activeProject.afterImage}
              alt={`After accessible renovation: ${activeProject.title}`}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

            {/* Before Image (Clipped Overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={activeProject.beforeImage}
                alt={`Before accessible renovation: ${activeProject.title}`}
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  height: '100%',
                }}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Badges on left/right for clarity */}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded pointer-events-none">
              Before Renovation
            </div>
            <div className="absolute top-4 right-4 bg-[#1B3B2B]/90 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded pointer-events-none">
              After Transformation
            </div>

            {/* Vertical Divider Line with handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize pointer-events-none shadow-[0_0_12px_rgba(0,0,0,0.5)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#1B3B2B] text-white border-2 border-white shadow-xl flex items-center justify-center">
                <MoveHorizontal className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Bottom floating details */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/10 pointer-events-none">
              <span className="font-semibold">{activeProject.title} · {activeProject.location}</span>
              <span className="hidden sm:inline text-white/70">Accessible Living Design</span>
            </div>
          </div>

          {/* Key Improvements Details Grid */}
          <div className="mt-8 bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E2D5] shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#C27D53] mb-1">
                  Scope of Work
                </div>
                <h3 className="font-heading text-xl font-bold text-[#1C201D] mb-2">
                  {activeProject.title}
                </h3>
                <p className="text-xs text-[#57645B] leading-relaxed mb-4">
                  {activeProject.afterDescription}
                </p>
                <div className="text-xs text-[#76867B] bg-[#FAF8F5] p-3 rounded-lg border border-[#E8E2D5]">
                  <strong className="text-[#1C201D]">Previous challenge: </strong>
                  {activeProject.beforeDescription}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#1B3B2B] mb-2">
                  Key Accessibility Features
                </div>
                <ul className="space-y-2 text-xs text-[#3C463F]">
                  {activeProject.improvements.map((imp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1B3B2B] shrink-0 mt-0.5" />
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
