import React from 'react';
import { GraduationCap, BookOpen, Award, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            <span>01.</span>
            <span>About Me</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineering Practical Intelligence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative Column */}
          <div className="md:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            {personalInfo.aboutText.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <div className="pt-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">
                Core Focus Areas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                  <span><strong>Generative AI & LLMs:</strong> Local Ollama pipelines, prompt engineering & RAG.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                  <span><strong>NLP & Classification:</strong> Multilingual NER, emotion, and sentiment routing.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                  <span><strong>MLOps Pipelines:</strong> Containerized microservices, APIs, and model tracking.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                  <span><strong>Full-Stack Prototyping:</strong> React dashboards, FastAPI, and database design.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education Card Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-2.5 mb-5">
                <div className="p-2 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 border border-teal-200/60 dark:border-teal-800/60">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-base">Education</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Academic Background</p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                {personalInfo.education.map((edu, idx) => (
                  <div key={idx} className="pb-3 border-b border-slate-100 dark:border-slate-800/60 last:border-b-0 last:pb-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">{edu.degree}</h4>
                      <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 border border-teal-200/50 dark:border-teal-800/50 shrink-0">
                        {edu.cgpa || edu.score}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{edu.institution}</p>
                    
                    {edu.status && (
                      <div className="mt-1.5 flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400">
                        {edu.isPlaceholderDate && <AlertCircle className="w-3.5 h-3.5 shrink-0" />}
                        <span>{edu.status}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
