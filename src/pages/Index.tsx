
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  const [bannerText, setBannerText] = useState("Welcome to My Portfolio");
  
  // Simple animation effect for the banner text
  useEffect(() => {
    const texts = [
      "Welcome to My Portfolio",
      "Check Out My Projects",
      "Connect With Me",
      "Let's Build Something Amazing"
    ];
    
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      setBannerText(texts[currentIndex]);
    }, 4000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dynamic Banner */}
      <div className="w-full bg-gradient-to-r from-purple-500 to-blue-500 py-16 px-4 text-center transition-all duration-1000 ease-in-out">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 transition-opacity duration-500">
          {bannerText}
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
          A showcase of my work, skills, and experience
        </p>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Author Profile */}
          <div className="md:w-1/3">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <Avatar className="h-32 w-32 mb-4">
                    <AvatarImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=200&h=200" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <h2 className="text-2xl font-bold mb-2">John Doe</h2>
                  <p className="text-gray-500 mb-4">Full Stack Developer</p>
                  <div className="w-full border-t border-gray-200 my-4" />
                  <p className="text-sm text-gray-600 mb-6">
                    I build modern web applications with a focus on clean code, 
                    performance, and user experience. Passionate about open source
                    and continuous learning.
                  </p>
                  <div className="flex space-x-4 justify-center">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" 
                       className="text-gray-600 hover:text-gray-900">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" 
                       className="text-gray-600 hover:text-gray-900">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
                      </svg>
                    </a>
                    <a href="mailto:contact@example.com" className="text-gray-600 hover:text-gray-900">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column - Project Gallery */}
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 My Portfolio. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">
            Built with React and Tailwind CSS. Hosted on GitHub Pages.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <AspectRatio ratio={16 / 9}>
          <img 
            src={project.image} 
            alt={project.title} 
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <div className="flex space-x-2 mb-2">
              {project.tags.map((tag, index) => (
                <span key={index} className="text-xs bg-white/20 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-xl mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        <div className="flex justify-between items-center">
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            View Demo
          </a>
          <a 
            href={project.codeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-gray-800 font-medium"
          >
            Source Code
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

// Sample project data
const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product catalog, cart, and checkout functionality.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1600",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://demo.example.com",
    codeUrl: "https://github.com/example/ecommerce"
  },
  {
    title: "Task Management App",
    description: "A productivity app for managing tasks, projects, and team collaboration.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1600",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    demoUrl: "https://demo.example.com",
    codeUrl: "https://github.com/example/taskapp"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather information with forecast and historical data visualization.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600",
    tags: ["JavaScript", "Weather API", "Chart.js"],
    demoUrl: "https://demo.example.com",
    codeUrl: "https://github.com/example/weather"
  },
  {
    title: "Portfolio Template",
    description: "A customizable portfolio template for developers and designers.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://demo.example.com",
    codeUrl: "https://github.com/example/portfolio"
  }
];

export default Index;
