import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI Image Classifier',
    description: 'A deep learning model for classifying images using CNNs built with TensorFlow and Keras.',
    tags: ['Python', 'TensorFlow', 'CNN'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Sentiment Analysis Tool',
    description: 'NLP-powered sentiment analysis for social media posts using transformer models.',
    tags: ['NLP', 'PyTorch', 'Transformers'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Stock Price Predictor',
    description: 'LSTM-based time series forecasting model for predicting stock market trends.',
    tags: ['LSTM', 'Pandas', 'Matplotlib'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Chatbot Assistant',
    description: 'An intelligent conversational AI built with Python and natural language processing.',
    tags: ['Python', 'NLP', 'Flask'],
    github: '#',
    demo: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A collection of my recent work in AI/ML and Python development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display font-semibold text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3">
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
