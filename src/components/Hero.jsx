import React from 'react';
import { ArrowDown, FileText, Mail, MapPin, GraduationCap, Github, Linkedin, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Decorative gradient glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 sm:w-[540px] sm:h-[540px] bg-gradient-to-tr from-teal-500/15 via-cyan-500/10 to-indigo-500/15 blur-3xl -z-10 rounded-full"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="flex flex-col items-center sm:items-start space-y-6">
          
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span>Final-Year B.Tech Data Science Student</span>
          </div>

          {/* Headline & Name */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 dark:from-teal-400 dark:via-cyan-300 dark:to-teal-200">
                {personalInfo.name}
              </span>
            </h1>
            <p className="text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-300 max-w-2xl">
              {personalInfo.role}
            </p>
          </div>

          {/* Hero Tagline */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            {personalInfo.heroTagline}
          </p>

          {/* Quick Info Badges */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 pt-1">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>{personalInfo.location}</span>
            </div>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
            <div className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>Malla Reddy University (CGPA 8.1)</span>
            </div>
          </div>

          {/* Action Buttons: "View Projects", "Download Resume", "Contact Me" */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3.5 pt-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 shadow-md shadow-teal-700/20 hover:shadow-lg hover:shadow-teal-600/30 transition-all hover:-translate-y-0.5"
            >
              <ArrowDown className="w-4 h-4" />
              <span>View Projects</span>
            </a>

            <a
              href={personalInfo.resumePath}
              download="Paul_Jonathan_Sambathini_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 shadow-sm transition-all hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/60 hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-all hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Quick social links */}
          <div className="flex items-center gap-4 pt-2 text-slate-500 dark:text-slate-400">
            <a
              href={personalInfo.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
