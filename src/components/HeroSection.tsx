
import React from 'react';
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center section-padding pt-24"
    >
      {/* Background pattern */}
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-40 right-20 w-72 h-72 bg-teal-100 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        <div className="animate-fade-in">
          <span className="text-accent uppercase tracking-wider font-medium">Hello, I'm</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mt-2 mb-6">
            Rownak Yadav
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-lg">
            A passionate <span className="text-accent font-medium">Software Developer</span> crafting beautiful digital experiences for the modern web.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>
          
          <div className="flex items-center space-x-4 mt-12">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/rownak-yadav-91366131b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://x.com/RownakYadav80?t=IULDQTTfydUCLZhNLCHqQg&s=09" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 50 50" aria-hidden="true">
                <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="relative md:pl-8 animate-fade-in">
          <div className="relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
              loading='lazy'
              alt="Profile" 
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-teal-100 rounded-full filter blur-3xl opacity-30 z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
