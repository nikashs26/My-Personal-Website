import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink, Github, Linkedin, Mail, Phone, MapPin, ChevronUp, Calendar, Users, Award, Star, Code, Briefcase } from 'lucide-react';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Better Bulk",
      description: "Full-stack recipe-finder web application with user authentication and recipe management",
      tech: ["TypeScript", "Python", "React", "TailwindCSS", "Flask", "Lovable", "Supabase"],
      github: "https://github.com/nikashs26/full-stack-recipe",
      live: "https://better-bulk.vercel.app/",
      icon: "/lovable-uploads/618148c4-936d-47a3-8c77-35a7bdcf0843.png",
      details: "Designed a comprehensive full-stack recipe-finder web application featuring robust user authentication, recipe creation/editing capabilities, advanced search functionality, and favorite marking system. Successfully integrated the React-based frontend with a Flask backend, utilizing Supabase for secure data storage and retrieval for user sign-ups/sign-ins, user reviews, and manually written recipes. Implemented RESTful API endpoints for diverse recipe generation and data management. Leveraged Lovable AI Copilot extensively for debugging, automated test generation, and code optimization, resulting in improved development efficiency and code quality.",
      features: [
        "User authentication and profile management",
        "Recipe creation with rich text editor",
        "Advanced search and filtering",
        "Favorite recipes system",
        "User reviews and ratings",
        "Responsive design for all devices"
      ]
    },
    {
      title: "Simba's Surveillance",
      description: "Real-time Lion King-themed wildlife trespasser detection system",
      tech: ["HTML", "CSS", "React", "Python", "AI/ML", "Computer Vision"],
      github: "https://github.com/NickelR22/simbassurveillance",
      devpost: "https://devpost.com/software/bobs-consulting?ref_content=my-projects-tab&ref_feature=my_projects",
      live: "https://simbassurveillance.vercel.app/",
      icon: "/lovable-uploads/1df91ec5-47e3-43bb-b6e9-77df008d698a.png",
      details: "Developed the complete frontend for a real-time, Lion King-themed wildlife trespasser detection system that uses advanced AI to identify human figures in live-streamed video from protected territories. Created a responsive homepage using React and CSS, structured the comprehensive About page, and implemented dynamic data visualization. Successfully connected the Python-based backend by retrieving and displaying JSON data in the React frontend, including precise timestamps and images of detected trespassers. Enhanced real-time data visualization to improve accessibility and responsiveness, directly supporting wildlife protection efforts.",
      features: [
        "Real-time video stream processing",
        "AI-powered human detection",
        "Live alerts and notifications",
        "Wildlife protection dashboard",
        "Historical data visualization",
        "Mobile-responsive interface"
      ]
    },
    {
      title: "Peter Parks",
      description: "AWS/INRIX Hack 2024 Finalist - Real-time parking detection system",
      tech: ["React", "CSS", "AWS", "INRIX API", "Real-time Data"],
      github: "https://github.com/nikashs26/AI-Hack-2024",
      devpost: "https://devpost.com/software/parking-kjx41u",
      award: "Finalist AWS/INRIX Hack 2024",
      icon: "/lovable-uploads/e0ea65b7-32bb-4430-a0d5-ffc1fd9eb25e.png",
      details: "Led the frontend development team for an innovative web application that detects available parking spaces in real-time using AWS cloud services and INRIX traffic data APIs. Implemented a sophisticated user interface using JavaScript and CSS, with a primary focus on optimal user experience and accessibility. Coordinated extensively with the backend development team to seamlessly integrate frontend components with real-time parking data streams. The project achieved finalist status in the competitive AWS/INRIX Hack 2024, demonstrating technical excellence and practical application.",
      features: [
        "Real-time parking availability",
        "Interactive city maps",
        "Predictive parking analytics",
        "Mobile-first design",
        "AWS cloud integration",
        "INRIX data visualization"
      ]
    },
    {
      title: "Math 13 Course Page",
      description: "Modern redesign of Santa Clara University math professor's course webpage",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/nikashs26/Math-13-Smolarski-Page",
      live: "https://math-13-smolarski-page.vercel.app/static/index.html",
      icon: "/lovable-uploads/9f95cbc2-ef86-4ca7-962d-81a3231913a2.png",
      details: "Conceptualized and led a collaborative team to completely recreate an SCU math professor's course webpage using modern HTML, CSS, and JavaScript technologies. Designed a contemporary, fully responsive interface with significantly improved functionality and enhanced user engagement features. Personally developed the Home and About Professor pages, while contributing innovative ideas for mockups and implementation strategies for all site sections. Focused extensively on enhancing accessibility standards, visual aesthetics, and interactive elements to dramatically improve the overall student learning experience.",
      features: [
        "Responsive course layout",
        "Interactive assignment calendar",
        "Student resource hub",
        "Modern UI/UX design",
        "Accessible navigation",
        "Mobile optimization"
      ]
    }
  ];

  const experiences = [
    {
      company: "Camp Galileo",
      role: "Summer Operations Intern",
      period: "June 2024 - Aug 2024",
      location: "Palo Alto, CA",
      responsibilities: [
        "Managed comprehensive hands-on office operations including creative poster design and systematic organization of camper shirts, name-tags, and lanyards for 200+ campers",
        "Supervised diverse groups of children ages 5-13 in engaging STEAM classes and structured morning extended care sessions, ensuring educational value and safety",
        "Assisted and directly oversaw counselors-in-training, helping them complete assigned tasks while teaching essential mentorship and leadership skills",
        "Handled camper injuries through certified first-aid treatment protocols, ensuring campers remained safe while continuing to enjoy their camp experience"
      ],
      skills: ["Leadership", "Child Safety", "Event Management", "Team Coordination", "First Aid"]
    },
    {
      company: "TechKnowHow",
      role: "Assistant Instructor",
      period: "May 2022 - Aug 2022, May 2023 - Aug 2023",
      location: "Los Gatos, CA",
      responsibilities: [
        "Guided classes of 18-20 elementary and middle school students in comprehensive technology programs including Minecraft modding, Blockbench 3D modeling, LEGO robot-building, Roblox game development, and Scratch programming",
        "Provided individualized assistance to students through their projects, answering technical questions and troubleshooting coding challenges",
        "Directed extended care groups in diverse indoor and outdoor activities including strategic board games, educational videos, and supervised play structure activities",
        "Maintained clean and organized classroom environments at the end of each day to ensure smooth camp operations and prompt daily startup"
      ],
      skills: ["Teaching", "Programming Instruction", "Classroom Management", "Technical Support", "Youth Development"]
    }
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C", "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Flask", "TailwindCSS", "Node.js", "Express.js", "Bootstrap", "jQuery"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub", "VS Code", "PyCharm", "Chrome DevTools", "Postman", "Figma", "Adobe Creative Suite"]
    },
    {
      title: "Databases & Cloud",
      skills: ["Supabase", "PostgreSQL", "MySQL", "AWS", "Vercel", "Firebase", "RESTful APIs"]
    },
    {
      title: "Design & Creative",
      skills: ["UI/UX Design", "Adobe Illustrator", "Adobe Photoshop", "Procreate", "Figma", "Responsive Design"]
    },
    {
      title: "AI & Development Tools",
      skills: ["Lovable AI", "Bolt.new", "Cursor", "GitHub Copilot", "Machine Learning Basics"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem-solving", "Creative Thinking", "Team Leadership", "Project Management", "Communication", "Mentoring"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section with Custom Backdrop */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Custom Image Backdrop */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/63ac8832-661a-4ccc-ae0a-847202e073e9.png" 
            alt="Beautiful cityscape backdrop"
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="mb-8 backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-4 drop-shadow-2xl">
              Nikash Shanbhag
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6 drop-shadow-lg">
              Web Design & Engineering Student
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 drop-shadow-md">
              Passionate about creating user-friendly websites and applications by blending technical proficiency with creative design and aesthetics. Experienced in full-stack development, AI integration, and modern web technologies.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="outline" className="gap-2 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm">
              <Phone className="w-4 h-4" />
              (408) 656-8424
            </Button>
            <Button variant="outline" className="gap-2 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm">
              <Mail className="w-4 h-4" />
              ngshanbhag@scu.edu
            </Button>
            <Button variant="outline" className="gap-2 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm">
              <MapPin className="w-4 h-4" />
              U.S. Citizen
            </Button>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button asChild className="gap-2 bg-blue-600/80 hover:bg-blue-700/80 backdrop-blur-sm border border-white/20">
              <a href="https://www.linkedin.com/in/nikash-shanbhag-a05931250/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm">
              <a href="https://github.com/nikashs26" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">
                  SCU
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">Santa Clara University</h3>
                  <p className="text-lg text-blue-600 mb-2">B.S. in Web Design and Engineering</p>
                  <div className="flex items-center gap-2 text-gray-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    Sept 2024 - Present
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Relevant Courses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Advanced Programming",
                          "Introduction to Web Technologies", 
                          "Abstract Data Types and Data Structures",
                          "Computer Networks",
                          "Probability and Statistics",
                          "Calculus and Analytical Geometry III & IV",
                          "Software Engineering",
                          "Database Systems"
                        ].map((course) => (
                          <Badge key={course} variant="secondary">{course}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Activities:</h4>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span>Association for Computing Machinery (ACM)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <Card key={category.title}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-600" />
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow relative overflow-hidden">
                <CardContent className="p-6 relative">
                  {/* Larger, clearer background icon */}
                  {project.icon && (
                    <div className="absolute top-4 right-4 w-32 h-32 opacity-40 group-hover:opacity-60 transition-opacity">
                      <img 
                        src={project.icon} 
                        alt={`${project.title} icon`}
                        className="w-full h-full object-contain rounded-lg filter drop-shadow-lg"
                      />
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      {project.award && (
                        <Badge variant="default" className="gap-1 ml-2">
                          <Award className="w-3 h-3" />
                          Finalist
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full mb-4">
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            {project.title}
                            {project.award && (
                              <Badge variant="default" className="gap-1">
                                <Award className="w-3 h-3" />
                                Finalist
                              </Badge>
                            )}
                          </DialogTitle>
                          <DialogDescription>
                            Detailed project information and features
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-medium mb-2">Project Description:</h4>
                            <p className="text-gray-600">{project.details}</p>
                          </div>
                          
                          {project.features && (
                            <div>
                              <h4 className="font-medium mb-2">Key Features:</h4>
                              <ul className="space-y-1">
                                {project.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          <div>
                            <h4 className="font-medium mb-2">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech) => (
                                <Badge key={tech} variant="secondary">{tech}</Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {project.github && (
                              <Button asChild variant="outline" size="sm" className="gap-2">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="w-4 h-4" />
                                  GitHub
                                </a>
                              </Button>
                            )}
                            {project.live && (
                              <Button asChild size="sm" className="gap-2">
                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4" />
                                  Live Demo
                                </a>
                              </Button>
                            )}
                            {project.devpost && (
                              <Button asChild variant="outline" size="sm" className="gap-2">
                                <a href={project.devpost} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4" />
                                  DevPost
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((job, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{job.company}</h3>
                      <p className="text-lg text-blue-600 mb-1">{job.role}</p>
                      <p className="text-sm text-gray-500 mb-2">{job.location}</p>
                      <div className="flex items-center gap-2 text-gray-500 mb-4">
                        <Calendar className="w-4 h-4" />
                        {job.period}
                      </div>
                      
                      <div className="space-y-4">
                        <ul className="space-y-2">
                          {job.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div>
                          <h4 className="font-medium mb-2">Skills Developed:</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill) => (
                              <Badge key={skill} variant="outline">{skill}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-lg text-gray-600 mb-8">
            I'm always interested in new opportunities, collaborations, and innovative projects!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <a href="mailto:ngshanbhag@scu.edu">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="https://www.linkedin.com/in/nikash-shanbhag-a05931250/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="https://github.com/nikashs26" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      {showScrollTop && (
        <Button
          className="fixed bottom-6 right-6 rounded-full w-12 h-12 shadow-lg z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};

export default Index;
