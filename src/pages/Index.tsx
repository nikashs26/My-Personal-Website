
import { useState, useEffect } from 'react';
import { ArrowDown, ExternalLink, Github, Linkedin, Mail, MapPin, Calendar, Code, Palette, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    languages: ["Python", "Java", "C", "HTML", "CSS", "JavaScript", "TypeScript"],
    tools: ["Git", "GitHub", "Chrome DevTools", "VS Code", "PyCharm", "Figma", "Adobe Illustrator", "Photoshop"],
    interests: ["Graphic Design", "Full-stack Development", "AI", "Cartooning", "Music Composition", "Game Design"]
  };

  const projects = [
    {
      title: "Better Bulk",
      description: "Full-stack recipe-finder web application with user authentication, recipe creation/editing, search, and favorites functionality.",
      tech: ["TypeScript", "Python", "React", "TailwindCSS", "Flask", "Supabase"],
      github: "#",
      demo: "#"
    },
    {
      title: "Simba's Surveillance",
      description: "Lion King-themed wildlife trespasser detection system using AI to identify human figures in live-streamed video.",
      tech: ["HTML", "CSS", "React", "Python"],
      github: "#",
      demo: "#"
    },
    {
      title: "Peter Parks",
      description: "AWS/INRIX Hack 2024 Finalist - Real-time parking space detection web application with intuitive user interface.",
      tech: ["React", "CSS", "JavaScript", "AWS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Math 13 Course Page",
      description: "Modern, responsive recreation of SCU math professor's course webpage with improved functionality and design.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "#"
    }
  ];

  const experiences = [
    {
      title: "Summer Operations Intern",
      company: "Camp Galileo",
      period: "June 2024 - Aug 2024",
      description: "Managed office operations, supervised STEAM classes for children ages 5-13, and mentored counselors-in-training."
    },
    {
      title: "Assistant Instructor",
      company: "TechKnowHow",
      period: "May 2022 - Aug 2023",
      description: "Guided classes of 18-20 students in programming with Minecraft, Blockbench, LEGO robotics, Roblox, and Scratch."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl gradient-text">Nikash Shanbhag</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
              <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"></div>
        <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Nikash Shanbhag</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Web Design & Engineering Student
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating user-friendly websites and applications by blending technical proficiency with creative design and aesthetics.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="mailto:ngshanbhag@scu.edu" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  I'm an Honors Web Design & Engineering student at Santa Clara University with a strong background in front-end development, graphic design, and programming. I'm passionate about leveraging AI tools to accelerate full-stack development while maintaining focus on user experience and creative design.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Santa Clara, CA</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Graduating 2028</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-3">
                    <Code className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold">Languages</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill, index) => (
                      <Badge key={index} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-3">
                    <Palette className="w-5 h-5 text-purple-600 mr-2" />
                    <h3 className="font-semibold">Tools & Design</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill, index) => (
                      <Badge key={index} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-3">
                    <Brain className="w-5 h-5 text-green-600 mr-2" />
                    <h3 className="font-semibold">Interests</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.interests.map((skill, index) => (
                      <Badge key={index} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.github}>
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.demo}>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <span className="font-medium text-blue-600">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.period}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and design.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button size="lg" variant="secondary" asChild>
              <a href="mailto:ngshanbhag@scu.edu">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
              <a href="#">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
          <p className="text-blue-100">
            📍 Santa Clara University • 📱 (408)-656-8424 • 🇺🇸 U.S. Citizen
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <p>&copy; 2024 Nikash Shanbhag. Built with React, TypeScript, and Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Index;
