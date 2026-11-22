import React from 'react';
import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  BarChart3, 
  Layers, 
  AlertCircle 
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            <span>03.</span>
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Projects & Systems
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Practical AI applications combining modern NLP pipelines, local LLMs, explainability frameworks, and full-stack engineering.
          </p>
        </div>

        {/* Projects List / Grid */}
        <div className="space-y-8">
          {projectsData.map((project, idx) => {
            return (
              <div
                key={project.id}
                className={`group relative rounded-2xl p-6 sm:p-8 transition-all duration-300 border ${
                  project.featured
                    ? 'bg-gradient-to-b from-white via-white to-slate-50/50 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-slate-950/70 border-teal-500/30 dark:border-teal-500/30 shadow-md hover:shadow-xl hover:border-teal-500/60'
                    : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Header row: Category / Badge & GitHub button */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-50 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 border border-teal-300 dark:border-teal-800">
                        <Sparkles className="w-3 h-3 text-teal-500" />
                        <span>Featured Project</span>
                      </span>
                    )}
                    {project.isPlaceholder && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                        <AlertCircle className="w-3 h-3 text-amber-500" />
                        <span>Placeholder Details</span>
                      </span>
                    )}
                  </div>

                  {/* GitHub Action Button */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors focus:ring-2 focus:ring-teal-500"
                  >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1 mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-teal-700/80 dark:text-teal-300/80">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Key feature bullet points */}
                {project.details && project.details.length > 0 && (
                  <ul className="mb-5 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    {project.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Project Metrics Callout (e.g. for LexiPulse AI) */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="mb-5 p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80">
                    <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      <BarChart3 className="w-3.5 h-3.5 text-teal-500" />
                      <span>Benchmark & Key Results</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-800">
                          <div className="text-base sm:text-lg font-bold font-mono text-teal-600 dark:text-teal-400">
                            {m.value}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Tags */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/60">
                  <span className="text-xs font-medium text-slate-400 dark:text-slate-500 mr-1">
                    Tech Stack:
                  </span>
                  {project.tech.map((tech, tIdx) => {
                    const isPlaceholder = tech.startsWith('[');
                    return (
                      <span
                        key={tIdx}
                        className={`text-xs px-2.5 py-1 rounded-md font-mono ${
                          isPlaceholder
                            ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800/60 italic'
                            : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60'
                        }`}
                      >
                        {tech}
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
