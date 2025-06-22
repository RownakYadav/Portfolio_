
import React from 'react';

const AboutSection = () => {
  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'Node.js', level: 65 },
    { name: 'Express.js', level: 55 },
    { name: 'UI/UX Design', level: 50 },
    { name: 'Python', level: 30 }
  ];

  return (
    <section id="about" className="py-24 section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-medium uppercase tracking-wider">About Me</span>
          <h2 className="heading text-3xl md:text-4xl mt-2">My Skills & Experience</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Who am I?</h3>
            <p className="text-muted-foreground mb-4">
              I am a passionate web developer with creating responsive, user-friendly web applications. My journey in web development began during my university years, and I've been in love with crafting digital experiences ever since.
            </p>
            <p className="text-muted-foreground mb-6">
              My approach combines clean code, modern design principles, and performance optimization to build websites that not only look great but also deliver exceptional user experiences.
            </p>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-accent">5+</span>
                <span className="text-sm text-muted-foreground">Years of Experience</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-accent">50+</span>
                <span className="text-sm text-muted-foreground">Projects Completed</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-accent">20+</span>
                <span className="text-sm text-muted-foreground">Happy Clients</span>
              </div>
            </div>

            <a 
              href="https://drive.google.com/file/d/1r4_plbx4Cz7HXNig8HuQTBCDHOgFDzsN/view?usp=drivesdk" 
              className="inline-flex items-center mt-8 btn-outline"
              download
            >
              Download CV
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                ></path>
              </svg>
            </a>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 text-primary">My Skills</h3>
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-primary">{skill.name}</span>
                  <span className="text-sm font-medium text-accent">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-accent rounded-full h-2" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
