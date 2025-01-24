import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

const projectsData = {
  'qualtspire': {
    title: 'QualtSpire',
    description: 'A cutting-edge software development platform revolutionizing the way teams collaborate and build products.',
    fullDescription: `
      QualtSpire is an innovative software development platform that combines the power of AI with modern collaboration tools to streamline the development process. Built with scalability and efficiency in mind, it helps teams deliver high-quality software faster.

      Key Features:
      - AI-powered code suggestions and reviews
      - Real-time collaboration tools
      - Automated testing and deployment
      - Advanced project analytics
      - Integration with popular development tools
    `,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'Kubernetes'],
    challenges: [
      'Implementing real-time collaboration features at scale',
      'Developing accurate AI models for code analysis',
      'Ensuring security and data privacy',
    ],
    outcomes: [
      '50% reduction in development time',
      'Improved code quality metrics',
      'Successful adoption by multiple enterprise clients',
      
    ],
  },
  'oracle-cloud-optimizer': {
    title: 'Oracle Cloud Optimizer',
    description: 'Advanced cloud resource optimization tool that helps enterprises reduce costs and improve performance.',
    fullDescription: `
      The Oracle Cloud Optimizer is a sophisticated tool that analyzes cloud resource usage patterns and provides actionable recommendations for optimization. It helps enterprises maximize their cloud investment while maintaining optimal performance.

      Key Features:
      - Real-time resource monitoring
      - Cost optimization recommendations
      - Performance analysis
      - Automated scaling solutions
      - Comprehensive reporting
    `,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    technologies: ['Python', 'Machine Learning', 'Cloud Computing', 'Terraform', 'Prometheus'],
    challenges: [
      'Processing large volumes of monitoring data',
      'Developing accurate prediction models',
      'Implementing real-time optimization strategies',
    ],
    outcomes: [
      'Average 30% reduction in cloud costs',
      'Improved resource utilization',
      'Enhanced performance monitoring',
    ],
  },
  'ai-code-reviewer': {
    title: 'AI Code Reviewer',
    description: 'An AI-powered code review assistant that helps developers write better code faster.',
    fullDescription: `
      The AI Code Reviewer is an intelligent assistant that analyzes code changes and provides detailed feedback on code quality, potential bugs, and performance improvements. It helps development teams maintain high code standards while saving time on manual reviews.

      Key Features:
      - Automated code analysis
      - Security vulnerability detection
      - Performance optimization suggestions
      - Best practices enforcement
      - Integration with CI/CD pipelines
    `,
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop',
    technologies: ['AI/ML', 'Python', 'TypeScript', 'TensorFlow', 'Natural Language Processing'],
    challenges: [
      'Training AI models on diverse codebases',
      'Reducing false positives in suggestions',
      'Maintaining up-to-date programming knowledge',
    ],
    outcomes: [
      'Reduced code review time by 40%',
      'Improved code quality metrics',
      'Faster onboarding of new developers',
    ],
  },
};

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Project not found</h1>
          <Link to="/projects" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-24">
      <div className="container mx-auto px-4">
        <Link
          to="/projects"
          className="text-blue-400 hover:text-blue-300 flex items-center gap-2 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />

          <div className="space-y-6">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300">{project.description}</p>
              <div className="mt-8 whitespace-pre-line">{project.fullDescription}</div>

              <h2 className="text-2xl font-bold mt-8 mb-4">Challenges</h2>
              <ul className="list-disc pl-6 space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="text-gray-300">{challenge}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Outcomes</h2>
              <ul className="list-disc pl-6 space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="text-gray-300">{outcome}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 pt-8">
              <a
              target='_blank'
                href="https://qualtspire.vercel.app/"
                className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
              >
                <ExternalLink size={20} />
                Visit Project
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
              >
                <Github size={20} />
                View Source
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}