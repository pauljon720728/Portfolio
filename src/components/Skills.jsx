import React from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Server, 
  Layout, 
  Wrench, 
  BarChart3,
  Sparkles,
  Layers
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Dynamic icon mapper
const iconMap = {
  Code2: Code2,
  BrainCircuit: BrainCircuit,
  Server: Server,
  Layout: Layout,
  Wrench: Wrench,
  BarChart3: BarChart3,
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            <span>02.</span>
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Technologies & Domain Expertise
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A breakdown of programming languages, deep learning architectures, full-stack frameworks, and MLOps tooling.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category) => {
            const Icon = iconMap[category.icon] || Layers;
            return (
              <div
                key={category.category}
                className="group relative p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-teal-500/50 dark:hover:border-teal-500/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 border border-teal-200/50 dark:border-teal-800/50 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-base text-slate-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 min-h-[32px]">
                  {category.description}
                </p>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => {
                    const isPlaceholder = skill.startsWith('[');
                    return (
                      <span
                        key={sIdx}
                        className={`text-xs px-2.5 py-1 rounded-md font-medium transition-colors ${
                          isPlaceholder
                            ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800/60 italic'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-300 dark:hover:bg-teal-950/60 dark:hover:text-teal-300 dark:hover:border-teal-800'
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
