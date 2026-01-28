import { Brain, Code, Database, Sparkles } from 'lucide-react';

const skills = [
  { icon: Brain, label: 'Machine Learning', description: 'TensorFlow, PyTorch, Scikit-learn' },
  { icon: Code, label: 'Python', description: 'Data Science, Automation, APIs' },
  { icon: Database, label: 'Data Analysis', description: 'Pandas, NumPy, SQL' },
  { icon: Sparkles, label: 'Deep Learning', description: 'Neural Networks, NLP, Computer Vision' },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="section-subtitle mb-6">
              I'm a passionate AI/ML enthusiast dedicated to building intelligent solutions 
              that make a difference. With a strong foundation in Python programming and 
              machine learning, I love exploring the frontiers of artificial intelligence.
            </p>
            <p className="text-muted-foreground">
              Currently focused on developing innovative ML models and contributing to 
              open-source projects. I believe in continuous learning and sharing knowledge 
              with the community.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.label}
                className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-semibold mb-2">{skill.label}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
