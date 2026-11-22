import React from 'react';
import { Calendar, Users, Trophy, Award, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            <span>04.</span>
            <span>Experience & Leadership</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Hackathons & Leadership
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Hands-on technical coordination, agile sprint execution, and leading high-performing teams under intensive hackathon timelines.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-teal-500/30 dark:border-teal-500/30 space-y-12">
          {experienceData.map((exp) => {
            return (
              <div key={exp.id} className="relative group">
                
                {/* Timeline node icon */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white dark:bg-slate-950 border-2 border-teal-500 flex items-center justify-center text-teal-500 shadow-sm group-hover:scale-110 transition-transform">
                  <Trophy className="w-3.5 h-3.5" />
                </div>

                {/* Card Container */}
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-teal-500/40 shadow-sm transition-all duration-300">
                  
                  {/* Header Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                      <Award className="w-3.5 h-3.5 text-teal-500" />
                      <span>{exp.highlight}</span>
                    </span>

                    <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-teal-500" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Role & Org */}
                  <div className="space-y-1 mb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                      {exp.organization}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Placeholder hint if applicable */}
                  {exp.isPlaceholder && (
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>Note: Startup name and exact date placeholders can be updated in <code>portfolioData.js</code>.</span>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
