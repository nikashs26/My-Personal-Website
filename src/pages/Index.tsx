
import { useState, useEffect } from 'react';
import { ArrowDown, ExternalLink, Github, Linkedin, Mail, MapPin, Calendar, Code, Palette, Brain, Download, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      fullDescription: "Designed a comprehensive full-stack recipe-finder web application featuring user authentication, recipe creation/editing capabilities, advanced search functionality, and the ability to mark recipes as favorites. The application seamlessly integrates a React-based frontend with a Flask backend, utilizing Supabase for secure data storage and retrieval for user sign-ups/sign-ins, user reviews, and manually written recipes. Implemented RESTful API endpoints for diverse recipe generation and leveraged Lovable AI Copilot for debugging, test generation, and code optimization.",
      tech: ["TypeScript", "Python", "React", "TailwindCSS", "Flask", "Supabase"],
      features: [
        "User authentication and authorization",
        "Recipe creation and editing interface",
        "Advanced search and filtering",
        "Favorites system for recipes",
        "User reviews and ratings",
        "RESTful API integration",
        "Secure data storage with Supabase"
      ],
      github: "https://github.com/nikashs26/full-stack-recipe",
      demo: "https://better-bulk.vercel.app/",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop"
    },
    {
      title: "Simba's Surveillance",
      description: "Lion King-themed wildlife trespasser detection system using AI to identify human figures in live-streamed video.",
      fullDescription: "Developed the frontend for a real-time, Lion King-themed wildlife trespasser detection system that uses AI to identify human figures in live-streamed video from protected territories. Created a responsive homepage and structured About page using React and CSS. Successfully connected the Python-based backend by retrieving and displaying JSON data in the React frontend, including timestamps and images of detected trespassers. Enhanced real-time data visualization to improve accessibility and responsiveness, supporting wildlife protection efforts.",
      tech: ["HTML", "CSS", "React", "Python", "AI/ML"],
      features: [
        "Real-time video stream processing",
        "AI-powered human detection",
        "Live data visualization",
        "Responsive web interface",
        "Wildlife protection focus",
        "Timestamp and image logging",
        "JSON data integration"
      ],
      github: "https://github.com/NickelR22/simbassurveillance",
      demo: "https://simbassurveillance.vercel.app/",
      devpost: "https://devpost.com/software/bobs-consulting?ref_content=my-projects-tab&ref_feature=my_projects",
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=500&h=300&fit=crop"
    },
    {
      title: "Peter Parks",
      description: "AWS/INRIX Hack 2024 Finalist - Real-time parking space detection web application with intuitive user interface.",
      fullDescription: "Led the team's frontend development for a cutting-edge web application that detects available parking spaces in real-time using AWS and INRIX services. Implemented an intuitive interface using JavaScript and CSS with a strong focus on user experience and accessibility. Coordinated closely with the backend team to seamlessly integrate frontend components with real-time data streams. The project achieved finalist status in the competitive AWS/INRIX Hack 2024, demonstrating innovation in smart city solutions.",
      tech: ["React", "CSS", "JavaScript", "AWS", "INRIX API"],
      features: [
        "Real-time parking detection",
        "AWS cloud integration",
        "INRIX traffic data services",
        "Interactive user interface",
        "Live data visualization",
        "Smart city solutions",
        "Team collaboration"
      ],
      github: "https://github.com/nikashs26/AI-Hack-2024",
      demo: "#",
      devpost: "https://devpost.com/software/parking-kjx41u",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=500&h=300&fit=crop",
      award: "AWS/INRIX Hack 2024 Finalist"
    },
    {
      title: "Math 13 Course Page",
      description: "Modern, responsive recreation of SCU math professor's course webpage with improved functionality and design.",
      fullDescription: "Conceptualized and led a team to completely recreate an SCU math professor's course webpage using modern web technologies including HTML, CSS, and JavaScript. Designed a contemporary, responsive interface with significantly improved functionality and user engagement features. Personally developed the Home and About Professor pages while contributing innovative ideas for mockups and implementation across all site sections. Focused extensively on enhancing accessibility, aesthetics, and interactivity to dramatically improve the student learning experience.",
      tech: ["HTML", "CSS", "JavaScript"],
      features: [
        "Modern responsive design",
        "Enhanced accessibility",
        "Improved user engagement",
        "Team collaboration",
        "Student-focused UX",
        "Academic content optimization",
        "Cross-browser compatibility"
      ],
      github: "https://github.com/nikashs26/Math-13-Smolarski-Page",
      demo: "https://math-13-smolarski-page.vercel.app/static/index.html",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop"
    }
  ];

  const experiences = [
    {
      title: "Summer Operations Intern",
      company: "Camp Galileo",
      period: "June 2024 - Aug 2024",
      description: "Managed office operations, supervised STEAM classes for children ages 5-13, and mentored counselors-in-training.",
      fullDescription: "Managed comprehensive hands-on office work including creative poster creation and systematic organization of camper shirts, name-tags, and lanyards. Supervised diverse groups of children aged 5-13 in engaging STEAM classes and morning extended care sessions, ensuring both educational value and safety. Assisted and oversaw counselors-in-training, helping them complete assigned tasks while teaching essential mentorship skills. Handled camper injuries through proper first-aid treatment, ensuring they remained safe while continuing to enjoy their camp experience.",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=200&fit=crop"
    },
    {
      title: "Assistant Instructor",
      company: "TechKnowHow",
      period: "May 2022 - Aug 2022, May 2023 - Aug 2023",
      description: "Guided classes of 18-20 students in programming with Minecraft, Blockbench, LEGO robotics, Roblox, and Scratch.",
      fullDescription: "Guided large classes of 18-20 elementary and middle school students in diverse technology programs including Minecraft programming, Blockbench 3D modeling, LEGO robot-building and programming, Roblox game development, and Scratch visual programming. Provided personalized assistance through their projects while answering technical questions and troubleshooting issues. Directed extended care groups in both indoor and outdoor activities including board games, educational videos, and playground activities on the site's play structure, ensuring consistent camper safety and enjoyment. Maintained clean and organized classrooms at the end of each day to ensure camp operations could start promptly the following day.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=200&fit=crop"
    }
  ];

  const education = {
    school: "Santa Clara University",
    degree: "B.S. in Web Design and Engineering",
    period: "Sept 2024 - Present",
    courses: [
      "Advanced Programming",
      "Introduction to Web Technologies", 
      "Abstract Data Types and Data Structures",
      "Computer Networks",
      "Probability and Statistics",
      "Calculus and Analytical Geometry III & IV"
    ],
    activities: ["Association for Computing Machinery (ACM)"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl gradient-text">Nikash Shanbhag</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#education" className="hover:text-blue-600 transition-colors">Education</a>
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
              <a href="https://www.linkedin.com/in/nikash-shanbhag-a05931250/" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/nikashs26" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110">
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
                    <span>Santa Clara University • U.S. Citizen</span>
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

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Code className="w-6 h-6 text-orange-600 mr-3" />
                  <h3 className="font-semibold text-lg">DevOps</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.devops.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-white">{skill}</Badge>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Brain className="w-6 h-6 text-pink-600 mr-3" />
                  <h3 className="font-semibold text-lg">Interests</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.interests.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-white">{skill}</Badge>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Palette className="w-6 h-6 text-teal-600 mr-3" />
                  <h3 className="font-semibold text-lg">Soft Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-white">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">Education</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">{education.school}</CardTitle>
                <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2 text-lg">
                  <span className="font-medium text-blue-600">{education.degree}</span>
                  <span className="hidden sm:block">•</span>
                  <span className="text-gray-600">{education.period}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Relevant Courses:</h4>
                  <div className="flex flex-wrap gap-2">
                    {education.courses.map((course, index) => (
                      <Badge key={index} variant="outline">{course}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Activities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {education.activities.map((activity, index) => (
                      <Badge key={index} variant="secondary">{activity}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {project.award && (
                        <div className="absolute top-4 left-4 bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                          🏆 Finalist
                        </div>
                      )}
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
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl mb-4">{project.title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    {project.award && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <div className="flex items-center">
                          <span className="text-2xl mr-2">🏆</span>
                          <span className="font-semibold text-yellow-800">{project.award}</span>
                        </div>
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold mb-2 text-lg">Project Overview</h4>
                      <p className="text-gray-700 leading-relaxed">{project.fullDescription}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-lg">Key Features</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-lg">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                      {project.demo !== "#" && (
                        <Button variant="outline" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.devpost && (
                        <Button variant="outline" asChild>
                          <a href={project.devpost} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            DevPost
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
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
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl mb-4">{exp.title} at {exp.company}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="text-gray-600 font-medium">{exp.period}</div>
                      <img 
                        src={exp.image} 
                        alt={exp.company}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <p className="text-gray-700 leading-relaxed text-lg">{exp.fullDescription}</p>
                    </div>
                  </DialogContent>
                </Dialog>
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
              <a href="https://www.linkedin.com/in/nikash-shanbhag-a05931250/">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
              <a href="https://github.com/nikashs26">
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
