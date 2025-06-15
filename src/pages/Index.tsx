
import { useState, useEffect } from 'react';
import { ArrowDown, ExternalLink, Github, Linkedin, Mail, MapPin, Calendar, Code, Palette, Brain, Download } from 'lucide-react';
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
    devops: ["Git", "GitHub", "Chrome DevTools", "VS Code", "PyCharm", "Pygame", "Google Suite", "Microsoft Office"],
    design: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Notability", "Procreate"],
    ai: ["Lovable", "Bolt.new", "Cursor"],
    interests: ["Graphic Design", "Full-stack Development", "AI", "Cartooning", "Music Composition", "Game Design"],
    soft: ["Problem-solving", "Creativity & Design Thinking", "Teamwork", "Leadership", "Communication", "Team-building"]
  };

  const projects = [
    {
      title: "Better Bulk",
      description: "Full-stack recipe-finder web application with user authentication, recipe creation/editing, search, and favorites functionality.",
      tech: ["TypeScript", "Python", "React", "TailwindCSS", "Flask", "Supabase"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop"
    },
    {
      title: "Simba's Surveillance",
      description: "Lion King-themed wildlife trespasser detection system using AI to identify human figures in live-streamed video.",
      tech: ["HTML", "CSS", "React", "Python"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=500&h=300&fit=crop"
    },
    {
      title: "Peter Parks",
      description: "AWS/INRIX Hack 2024 Finalist - Real-time parking space detection web application with intuitive user interface.",
      tech: ["React", "CSS", "JavaScript", "AWS"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=500&h=300&fit=crop"
    },
    {
      title: "Math 13 Course Page",
      description: "Modern, responsive recreation of SCU math professor's course webpage with improved functionality and design.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop"
    }
  ];

  const experiences = [
    {
      title: "Summer Operations Intern",
      company: "Camp Galileo",
      period: "June 2024 - Aug 2024",
      description: "Managed office operations, supervised STEAM classes for children ages 5-13, and mentored counselors-in-training.",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=200&fit=crop"
    },
    {
      title: "Assistant Instructor",
      company: "TechKnowHow",
      period: "May 2022 - Aug 2023",
      description: "Guided classes of 18-20 students in programming with Minecraft, Blockbench, LEGO robotics, Roblox, and Scratch.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
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
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 animate-pulse"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-300/30 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-300/30 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-indigo-300/30 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                  NS
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-ping opacity-20"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Nikash Shanbhag</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Honors Web Design & Engineering Student
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating user-friendly websites and applications by blending technical proficiency with creative design and aesthetics. Proficient in AI tools to accelerate full-stack development.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" asChild className="border-2 hover:bg-blue-50">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" asChild className="border-2 hover:bg-gray-50">
                <a href="#" className="flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="mailto:ngshanbhag@scu.edu" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110">
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
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  I'm an Honors Web Design & Engineering student at Santa Clara University with a strong background in front-end development, graphic design, and programming.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I'm passionate about leveraging AI tools to accelerate full-stack development while maintaining focus on user experience and creative design.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Santa Clara University</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                    <span>B.S. Web Design & Engineering • Graduating 2028</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <Code className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="font-semibold text-2xl">7+</div>
                      <div className="text-sm text-gray-600">Languages</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <Palette className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <div className="font-semibold text-2xl">5+</div>
                      <div className="text-sm text-gray-600">Design Tools</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <Brain className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="font-semibold text-2xl">4</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <Mail className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                      <div className="font-semibold text-2xl">2</div>
                      <div className="text-sm text-gray-600">Work Experiences</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Code className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="font-semibold text-lg">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-white">{skill}</Badge>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Palette className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="font-semibold text-lg">Design Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.design.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-white">{skill}</Badge>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Brain className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="font-semibold text-lg">AI Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.ai.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-white">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" asChild className="bg-white/90 hover:bg-white">
                      <a href={project.github}>
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild className="bg-white/90 hover:bg-white">
                      <a href={project.demo}>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={exp.image} 
                        alt={exp.company}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="font-medium text-blue-600 text-lg">{exp.company}</span>
                          <span className="hidden sm:block">•</span>
                          <span className="text-gray-600">{exp.period}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and design.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button size="lg" variant="secondary" asChild className="bg-white text-blue-600 hover:bg-gray-100">
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
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
              <a href="#">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
          <div className="text-blue-100 space-y-2">
            <p>📍 Santa Clara University, CA • 📱 (408)-656-8424</p>
            <p>🇺🇸 U.S. Citizen • 🎓 Graduating 2028</p>
          </div>
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
