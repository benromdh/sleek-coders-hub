const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          What I Do
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a <span className="text-foreground font-semibold">machine learning engineer and researcher</span> who 
            specializes in taking messy, high-dimensional scientific data and building end-to-end systems that 
            produce <span className="text-foreground font-semibold">actionable results</span>.
          </p>
          <p>
            My work spans the full ML lifecycle: designing data pipelines that process thousands of measurements 
            per run, training and deploying computer vision models on custom hardware, and integrating predictive 
            models that replace weeks of manual analysis with seconds of automated insight.
          </p>
          <p>
            I've worked across <span className="text-foreground font-semibold">RWTH Aachen</span>, 
            <span className="text-foreground font-semibold"> Harvard</span>, 
            <span className="text-foreground font-semibold"> EPFL</span>, and 
            <span className="text-foreground font-semibold"> Nestlé R&D</span> — 
            each time delivering ML solutions that directly shaped what teams built or tested next.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {[
            { title: 'Data Pipelines', desc: 'Automated processing of 10,000+ data points per run with quality control and feature extraction' },
            { title: 'Model Deployment', desc: 'Computer vision models running on custom hardware, turning hours of analysis into seconds' },
            { title: 'Research Impact', desc: 'ML outputs directly determined which experiments teams ran, cutting validation cycles' },
          ].map((item, i) => (
            <div key={i} className="border border-border rounded-xl p-6 bg-background">
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
