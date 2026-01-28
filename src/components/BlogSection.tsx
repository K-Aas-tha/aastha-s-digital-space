import { ArrowRight, Calendar } from 'lucide-react';

const blogPosts = [
  {
    title: 'Getting Started with Neural Networks',
    excerpt: 'A comprehensive guide to understanding the fundamentals of neural networks and deep learning.',
    date: 'Jan 15, 2025',
    readTime: '8 min read',
  },
  {
    title: 'Python Best Practices for ML Projects',
    excerpt: 'Essential coding practices and project structure tips for machine learning development.',
    date: 'Jan 10, 2025',
    readTime: '6 min read',
  },
  {
    title: 'Understanding Transformers in NLP',
    excerpt: 'Deep dive into transformer architecture and its applications in natural language processing.',
    date: 'Jan 5, 2025',
    readTime: '10 min read',
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Latest <span className="text-gradient">Blog</span> Posts
          </h2>
          <p className="section-subtitle mx-auto">
            Thoughts, tutorials, and insights on AI/ML and programming
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {post.date}
                </span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                Read More <ArrowRight size={16} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
