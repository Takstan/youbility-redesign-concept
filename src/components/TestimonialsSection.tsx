import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, MapPin, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "After my father suffered a stroke, coming home felt impossible with our standard high bathtub. Youbility transformed our bathroom into a gorgeous curbless roll-in shower in under two weeks. It looks like a high-end spa, but gave him his total dignity and safety back.",
      author: "David & Margaret M.",
      location: "North York, Toronto",
      project: "Curbless Roll-In Shower & Widened Doorways",
      timeframe: "Completed July 2024",
      highlight: "Completed in 11 days with zero mess"
    },
    {
      id: 2,
      quote: "The exterior ramp Youbility designed looks like an architectural landscape feature rather than a hospital addition. Our neighbors constantly compliment the cedar and steel woodwork. The slope is gentle enough that my husband can operate his power chair effortlessly.",
      author: "Elena & Marcus R.",
      location: "Etobicoke, ON",
      project: "Integrated Cedar Garden Ramp & Porch Lift",
      timeframe: "Completed October 2024",
      highlight: "Blends seamlessly with our home exterior"
    },
    {
      id: 3,
      quote: "Widened doorways and lowered kitchen prep surfaces completely changed how my wife navigates our main floor. We were able to claim the Ontario Senior Home Safety tax credit with Youbility's detailed itemized receipt package without a single issue.",
      author: "Robert & Sandra K.",
      location: "Markham, ON",
      project: "Barrier-Free Kitchen & Main Floor Expansion",
      timeframe: "Completed March 2025",
      highlight: "Received $5,500 back in combined tax credits"
    },
    {
      id: 4,
      quote: "As the manager of an established medical practice on University Avenue, finding a contractor who understands AODA commercial compliance was crucial. Youbility handled our washrooms and automatic doors flawlessly and on schedule.",
      author: "Dr. Arthur G.",
      location: "Downtown Toronto",
      project: "Commercial Clinic AODA Washroom Retrofit",
      timeframe: "Completed September 2024",
      highlight: "Passed City building inspection on first review"
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#C27D53] mb-3">
            VERIFIED GTA CLIENT EXPERIENCES
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C201D] tracking-tight leading-[1.15] mb-5">
            Real People. Meaningful Transformations.
          </h2>
          <p className="text-base sm:text-lg text-[#57645B] leading-relaxed">
            Discover what our clients say about creating more comfortable and accessible homes across the Greater Toronto Area.
          </p>
        </div>

        {/* Testimonial Carousel Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#E8E2D5] shadow-xl">
            
            {/* Top row: stars & quote icon */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-1 text-[#C27D53]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-[#E8E2D5]" />
            </div>

            {/* Testimonial Quote */}
            <blockquote className="font-heading text-xl sm:text-2xl text-[#1C201D] leading-relaxed mb-8 font-medium">
              "{current.quote}"
            </blockquote>

            {/* Author info & project metadata */}
            <div className="pt-8 border-t border-[#F3EFE7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-heading text-lg font-bold text-[#1C201D]">
                  {current.author}
                </div>
                <div className="flex items-center gap-2 text-xs text-[#57645B] mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C27D53]" />
                  <span>{current.location}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-medium text-[#1B3B2B]">{current.project}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#1B3B2B] bg-[#F3EFE7] px-3 py-1.5 rounded-md self-start sm:self-auto">
                <CheckCircle className="w-3.5 h-3.5 text-[#C27D53]" />
                <span>{current.highlight}</span>
              </div>
            </div>

            {/* Carousel navigation controls */}
            <div className="mt-8 flex items-center justify-between pt-6 border-t border-[#F3EFE7]">
              
              {/* Pagination Indicators */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentIndex === i ? 'w-8 bg-[#1B3B2B]' : 'w-2 bg-[#D8CEAF] hover:bg-[#A8643C]'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-[#D8CEAF] hover:border-[#1B3B2B] hover:bg-[#F3EFE7] flex items-center justify-center text-[#1C201D] transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-[#1B3B2B] hover:bg-[#12281D] text-white flex items-center justify-center transition-colors cursor-pointer shadow-sm"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
