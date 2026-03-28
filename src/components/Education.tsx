import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'PhD — Machine Learning for Medical Diagnostics',
      school: 'RWTH Aachen University',
      location: 'Aachen, Germany',
      period: 'Aug 2023 – Present',
      current: true,
    },
    {
      degree: 'M.Sc. — Biomedical Engineering & Bioinformatics',
      subtitle: 'Minor in Data Science & AI',
      school: 'EPFL & Harvard School of Engineering',
      location: 'Lausanne, CH & Boston, MA',
      period: 'Sep 2019 – Oct 2022',
      current: false,
    },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Education
        </h2>
        <p className="text-muted-foreground mb-12">Academic background</p>

        <div className="space-y-6">
          {education.map((ed, i) => (
            <div key={i} className="flex gap-4 p-6 bg-card border border-border rounded-xl">
              <div className="shrink-0 mt-1">
                <GraduationCap className={`h-5 w-5 ${ed.current ? 'text-primary' : 'text-muted-foreground'}`} />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{ed.degree}</h3>
                {ed.subtitle && <p className="text-sm text-primary font-medium">{ed.subtitle}</p>}
                <p className="text-sm text-muted-foreground mt-1">{ed.school} · {ed.location}</p>
                <p className="text-xs text-muted-foreground font-mono mt-1">{ed.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
