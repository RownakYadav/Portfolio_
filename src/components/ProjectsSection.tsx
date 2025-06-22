
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

// Define project types
type ProjectCategory = 'all' | 'web' | 'mobile' | 'design' | 'working';
type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'web' | 'mobile' | 'design' | 'working';
  technologies: string[];
  link: string;
};

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A custom portfolio website for a digital artist to showcase their work",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      link: "#"
    },
    {
      id: 2,
      title: "AI Voice Assistant - Jarvis",
      description: "A program that uses Gemini API and Voice recognition to analyse user input voice to gennerate Response",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      category: "working",
      technologies: ["Python", "Gemini API"],
      link: "https://github.com/RownakYadav/AI-VOICE-ASSISTANT"
    },
    {
      id: 3,
      title: "Notebook Website",
      description: "A website to Add, Update, Delete and Search Notebook for students Anywhere",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
      category: "web",
      technologies: ["HTML", "Tailwind CSS", "Javascript", "MERN"],
      link: "https://github.com/RownakYadav/Notebook"
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-medium uppercase tracking-wider">My Work</span>
          <h2 className="heading text-3xl md:text-4xl mt-2">Recent Projects</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(['all', 'web', 'mobile', 'design', 'working'] as const).map(category => (
            <button 
              key={category}
              className={cn(
                "px-6 py-2 rounded-full transition duration-300",
                activeCategory === category 
                  ? "bg-accent text-white" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  className="inline-flex items-center text-accent hover:text-accent/80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <svg 
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
