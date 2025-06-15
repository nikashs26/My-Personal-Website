
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink, Github, Linkedin, Mail, Phone, MapPin, ChevronUp, Calendar, Users, Award, Star, Code, Briefcase, User, Heart, Gamepad2, Dumbbell, Palette, Music, Lightbulb } from 'lucide-react';
import Typed from 'typed.js';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const nameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 400);
      setNavbarScrolled(scrollY > 50);

      // Detect current section
      const sections = ['about', 'education', 'skills', 'projects', 'experience', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (nameRef.current) {
      const typed = new Typed(nameRef.current, {
        strings: ['Nikash Shanbhag'],
        typeSpeed: 100,
        showCursor: false,
        onComplete: () => {
          // Optional: add any completion logic here
        }
      });

      return () => {
        typed.destroy();
      };
    }
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
      location: "Saratoga, CA",
      logo: "/lovable-uploads/97a1a8f8-7f4e-45b3-b7f5-2c3d1e9f4a6b.png",
      responsibilities: [
        "Managed comprehensive hands-on office operations including creative poster design and systematic organization of camper shirts, name-tags, and lanyards for 200+ campers",
        "Supervised diverse groups of children ages 5-13 in engaging STEAM classes and structured morning extended care sessions, ensuring educational value and safety",
        "Assisted and directly oversaw counselors-in-training, helping them complete assigned tasks while teaching essential mentorship and leadership skills",
        "Handled camper injuries through certified first-aid treatment protocols, ensuring campers remained safe while continuing to enjoy their camp experience"
      ],
      skills: ["Leadership", "Child Safety", "Event Management", "Team Coordination", "First Aid", "Creative Design", "Organization", "Communication", "Problem Solving", "Mentoring"]
    },
    {
      company: "TechKnowHow",
      role: "Assistant Instructor",
      period: "May 2022 - Aug 2022, May 2023 - Aug 2023",
      location: "Campbell/Saratoga, CA",
      logo: "/lovable-uploads/8c2d4e1f-9a3b-4c5d-8e7f-1a2b3c4d5e6f.png",
      responsibilities: [
        "Guided classes of 18-20 elementary and middle school students in comprehensive technology programs including Minecraft modding, Blockbench 3D modeling, LEGO robot-building, Roblox game development, and Scratch programming",
        "Provided individualized assistance to students through their projects, answering technical questions and troubleshooting coding challenges",
        "Directed extended care groups in diverse indoor and outdoor activities including strategic board games, educational videos, and supervised play structure activities",
        "Maintained clean and organized classroom environments at the end of each day to ensure smooth camp operations and prompt daily startup"
      ],
      skills: ["Teaching", "Programming Instruction", "Classroom Management", "Technical Support", "Youth Development", "Scratch Programming", "Minecraft Modding", "3D Modeling", "Game Development", "Patience", "Adaptability"]
    }
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C", "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "SQL"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Flask", "TailwindCSS", "Node.js", "Express.js", "Bootstrap", "jQuery"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub", "VS Code", "PyCharm", "Chrome DevTools", "Postman", "Figma", "Adobe Creative Suite"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Databases & Cloud",
      skills: ["Supabase", "PostgreSQL", "MySQL", "AWS", "Vercel", "Firebase", "RESTful APIs"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Design & Creative",
      skills: ["UI/UX Design", "Adobe Illustrator", "Adobe Photoshop", "Procreate", "Figma", "Responsive Design"],
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "AI & Development Tools",
      skills: ["Lovable AI", "Bolt.new", "Cursor", "GitHub Copilot", "Machine Learning Basics"],
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: "Soft Skills",
      skills: ["Problem-solving", "Creative Thinking", "Team Leadership", "Project Management", "Communication", "Mentoring"],
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  const aboutMeData = {
    hobbies: [
      { name: "Drawing", icon: Palette },
      { name: "Gaming", icon: Gamepad2 },
      { name: "Working Out", icon: Dumbbell },
      { name: "Web Design", icon: Code }
    ],
    interests: [
      "Full-stack Development",
      "Web Design", 
      "Animation",
      "Music",
      "Video Game Design",
      "Entrepreneurship"
    ],
    favoriteSongs: [
      "Down by Jay Sean",
      "Down (w/o rap edit) by Jay Sean",
      "Down Chasing Pluto Remix by Jay Sean"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Sticky Navigation Bar with scroll effect */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        navbarScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-white/20 shadow-sm' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className={`font-semibold transition-colors duration-300 ${
              navbarScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              Nikash Shanbhag
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className={`transition-colors duration-300 ${
                activeSection === 'about' 
                  ? (navbarScrolled ? 'text-blue-600' : 'text-white') 
                  : (navbarScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/80 hover:text-white')
              }`}>About</a>
              <a href="#education" className={`transition-colors duration-300 ${
                activeSection === 'education' 
                  ? (navbarScrolled ? 'text-blue-600' : 'text-white') 
                  : (navbarScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/80 hover:text-white')
              }`}>Education</a>
              <a href="#skills" className={`transition-colors duration-300 ${
                activeSection === 'skills' 
                  ? (navbarScrolled ? 'text-blue-600' : 'text-white') 
                  : (navbarScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/80 hover:text-white')
              }`}>Skills</a>
              <a href="#projects" className={`transition-colors duration-300 ${
                activeSection === 'projects' 
                  ? (navbarScrolled ? 'text-blue-600' : 'text-white') 
                  : (navbarScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/80 hover:text-white')
              }`}>Projects</a>
              <a href="#experience" className={`transition-colors duration-300 ${
                activeSection === 'experience' 
                  ? (navbarScrolled ? 'text-blue-600' : 'text-white') 
                  : (navbarScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/80 hover:text-white')
              }`}>Experience</a>
              <a href="#contact" className={`transition-colors duration-300 ${
                activeSection === 'contact' 
                  ? (navbarScrolled ? 'text-blue-600' : 'text-white') 
                  : (navbarScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/80 hover:text-white')
              }`}>Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Custom Backdrop */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-16">
        {/* Custom Image Backdrop */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/63ac8832-661a-4ccc-ae0a-847202e073e9.png" 
            alt="Beautiful cityscape backdrop"
            className="w-full h-full object-cover"
          />
          {/* Reduced overlay opacity for less dimness */}
          <div className="absolute inset-0 bg-black/15"></div>
        </div>

        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="mb-8 backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-4 drop-shadow-2xl leading-tight py-4">
              <span ref={nameRef}></span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6 drop-shadow-lg">
              Web Design & Engineering Student
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 drop-shadow-md">
              Passionate about creating user-friendly websites and applications by blending technical proficiency with creative design and aesthetics. Experienced in full-stack development, AI integration, and modern web technologies.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="outline" className="gap-3 bg-white/30 border-white/40 text-white hover:bg-white/40 backdrop-blur-sm shadow-lg text-base px-6 py-3">
              <Phone className="w-5 h-5" />
              (408) 656-8424
            </Button>
            <Button variant="outline" className="gap-3 bg-white/30 border-white/40 text-white hover:bg-white/40 backdrop-blur-sm shadow-lg text-base px-6 py-3">
              <Mail className="w-5 h-5" />
              ngshanbhag@scu.edu
            </Button>
            <Button variant="outline" className="gap-3 bg-white/30 border-white/40 text-white hover:bg-white/40 backdrop-blur-sm shadow-lg text-base px-6 py-3">
              <MapPin className="w-5 h-5" />
              U.S. Citizen
            </Button>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button asChild className="gap-3 bg-blue-600/90 hover:bg-blue-700/90 backdrop-blur-sm border border-white/20 shadow-lg text-base px-6 py-3">
              <a href="https://www.linkedin.com/in/nikash-shanbhag-a05931250/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button asChild className="gap-3 bg-black/90 hover:bg-gray-800/90 backdrop-blur-sm border border-white/20 shadow-lg text-base px-6 py-3 text-white">
              <a href="https://github.com/nikashs26" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Hobbies */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-6 text-gray-800">Hobbies</h3>
                <div className="space-y-4">
                  {aboutMeData.hobbies.map((hobby, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                      <hobby.icon className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700 font-medium">{hobby.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-6 text-gray-800">Interests</h3>
                <div className="space-y-3">
                  {aboutMeData.interests.map((interest, index) => (
                    <div key={index} className="p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
                      <span className="text-purple-700 font-medium">{interest}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Favorite Songs */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Music className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-6 text-gray-800">Favorite Songs</h3>
                <div className="space-y-3">
                  {aboutMeData.favoriteSongs.map((song, index) => (
                    <div key={index} className="p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                      <span className="text-green-700 font-medium">{song}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-transparent rounded-lg flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/97a30479-ded2-4573-a26c-0a29d4c523ea.png" 
                    alt="Santa Clara University Logo"
                    className="w-full h-full object-contain"
                  />
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
                          "Calculus and Analytical Geometry III & IV"
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

      {/* Skills Section - Simplified */}
      <section id="skills" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Skills
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A comprehensive toolkit of technologies and skills I use to build modern, scalable applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={category.title} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skill}
                        variant="secondary" 
                        className="text-sm hover:bg-gray-200 transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=2000&q=80" 
            alt="Programming code background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow relative overflow-hidden h-full bg-white/95 backdrop-blur-sm">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Project Icon */}
                  {project.icon && (
                    <div className="flex justify-center mb-6">
                      <div className="w-28 h-28 group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={project.icon} 
                          alt={`${project.title} icon`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors text-center">
                        {project.title}
                      </h3>
                      {project.award && (
                        <Badge variant="default" className="gap-1">
                          <Award className="w-3 h-3" />
                          Finalist
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-center">{project.description}</p>
                    
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                    
                    {/* Spacer to push button to bottom */}
                    <div className="flex-1"></div>
                    
                    <div className="mt-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full">
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
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((job, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden bg-white border border-gray-200">
                      <img 
                        src={job.logo} 
                        alt={`${job.company} logo`}
                        className="w-full h-full object-contain p-2"
                      />
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
          
          {/* Profile Image Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <User className="w-16 h-16 text-gray-400" />
            </div>
          </div>
          
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
            <Button asChild size="lg" className="gap-2 bg-black text-white hover:bg-gray-800">
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
