import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink, Github, Linkedin, Mail, Phone, ChevronUp, Calendar, Users, Award, Star, Code, Heart, Gamepad2, Dumbbell, Palette, Music, Lightbulb, Sparkles, ArrowDown } from 'lucide-react';
import Typed from 'typed.js';

// Animated section wrapper
const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800) 
          }}
          animate={{ 
            y: [null, Math.random() * -200 - 100],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  );
};

// 3D Tilt Card
const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setRotateX((y - centerY) / 20);
    setRotateY((centerX - x) / 20);
  };
  
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };
  
  return (
    <motion.div
      className={`${className}`}
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const nameRef = useRef<HTMLSpanElement>(null);
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 400);
      setNavbarScrolled(scrollY > 50);

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
        typeSpeed: 80,
        showCursor: true,
        cursorChar: '|',
        onComplete: (self) => {
          setTimeout(() => {
            if (self.cursor) self.cursor.style.display = 'none';
          }, 1000);
        }
      });

      return () => typed.destroy();
    }
  }, []);

  const projects = [
    {
      title: "CrashCast",
      description: "Winner ACM AWS/INRIX Hack 2025 - Web app identifying high-risk areas and nearby emergency services",
      tech: ["React", "CSS", "AWS Lambda", "FastAPI", "INRIX API"],
      github: "https://github.com/nikashs26/crashcast",
      devpost: "https://devpost.com/software/crashcast",
      award: "Winner ACM AWS/INRIX Hack 2025",
      gradient: "from-emerald-500 to-teal-600",
      details: "Guided a team of four in a hackathon to develop a web application that identifies high-risk areas worldwide and displays nearby hospitals and ambulances, aiding hospitals to optimize dispatcher deployment, using AWS Lambda and INRIX data.",
      features: ["Interactive map with location search", "Real-time ambulance tracking", "Accident urgency updates", "AWS Lambda integration", "INRIX data visualization", "Help and About pages"]
    },
    {
      title: "Last Shot",
      description: "Winner ACM Roblox Game Jam 2025 - Top-down zombie apocalypse adventure game",
      tech: ["Roblox Studio", "Lua"],
      devpost: "https://devpost.com/software/last-shot",
      live: "https://www.roblox.com/games/last-shot",
      award: "Winner ACM Roblox Game Jam 2025",
      gradient: "from-red-500 to-orange-600",
      details: "Led team of five to develop a top-down zombie apocalypse adventure game, featuring strategic airship combat, narrative-driven gameplay, and a unique plot twist, all in just 3 days.",
      features: ["Strategic airship combat", "Narrative-driven gameplay", "Zombie AI with randomized pathing", "Cinematic cutscenes", "Interactive camera controls", "Optimized event triggers"]
    },
    {
      title: "Better Bulk",
      description: "Full-stack recipe management app with 1,000+ recipes and AI-powered meal planning",
      tech: ["TypeScript", "Python", "React", "TailwindCSS", "Flask", "ChromaDB"],
      github: "https://github.com/nikashs26/full-stack-recipe",
      live: "https://better-bulk.vercel.app/",
      icon: "/lovable-uploads/618148c4-936d-47a3-8c77-35a7bdcf0843.png",
      gradient: "from-violet-500 to-purple-600",
      details: "Leveraged AI copilots to build a full-stack recipe management application featuring 1,000+ recipes, personalized recommendations, and AI-powered meal planning.",
      features: ["1,000+ recipe database", "AI-powered meal planning agent", "Shopping list generation", "User reviews and ratings", "Recipe management folders", "Personalized recommendations"]
    },
    {
      title: "Simba's Surveillance",
      description: "Real-time Lion King-themed AI system to identify human trespassers",
      tech: ["HTML", "CSS", "React", "Python", "AI/ML"],
      github: "https://github.com/NickelR22/simbassurveillance",
      devpost: "https://devpost.com/software/bobs-consulting",
      live: "https://simbassurveillance.vercel.app/",
      icon: "/lovable-uploads/1df91ec5-47e3-43bb-b6e9-77df008d698a.png",
      gradient: "from-amber-500 to-yellow-600",
      details: "Designed a real-time Lion King-themed AI system to identify human trespassers in live-streamed footage.",
      features: ["Real-time video stream processing", "AI-powered human detection", "Live alerts and notifications", "Wildlife protection dashboard", "Historical data visualization", "Mobile-responsive interface"]
    },
    {
      title: "MintMarket",
      description: "End-to-end e-commerce platform for NFT buying and selling with simulated blockchain",
      tech: ["JavaScript", "HTML", "CSS", "Blockchain"],
      github: "https://github.com/nikashs26/mintmarket",
      gradient: "from-cyan-500 to-blue-600",
      details: "Built a fully functional e-commerce platform for NFT buying and selling utilizing a simulated blockchain.",
      features: ["NFT marketplace functionality", "Simulated blockchain with hashing", "User authentication system", "Q&A section", "Strategic page design", "No framework dependency"]
    },
    {
      title: "Peter Parks",
      description: "AWS/INRIX Hack 2024 Finalist - Real-time parking detection system",
      tech: ["React", "CSS", "AWS", "INRIX API"],
      github: "https://github.com/nikashs26/AI-Hack-2024",
      devpost: "https://devpost.com/software/parking-kjx41u",
      award: "Finalist AWS/INRIX Hack 2024",
      icon: "/lovable-uploads/e0ea65b7-32bb-4430-a0d5-ffc1fd9eb25e.png",
      gradient: "from-pink-500 to-rose-600",
      details: "Led frontend development for a web application that detects available parking spaces in real-time using AWS cloud services and INRIX traffic data APIs.",
      features: ["Real-time parking availability", "Interactive city maps", "Predictive parking analytics", "Mobile-first design", "AWS cloud integration", "INRIX data visualization"]
    },
    {
      title: "Math 13 Course Page",
      description: "Modern redesign of Santa Clara University math professor's course webpage",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/nikashs26/Math-13-Smolarski-Page",
      live: "https://math-13-smolarski-page.vercel.app/static/index.html",
      icon: "/lovable-uploads/9f95cbc2-ef86-4ca7-962d-81a3231913a2.png",
      gradient: "from-indigo-500 to-blue-600",
      details: "Led a collaborative team to completely recreate an SCU math professor's course webpage using modern technologies.",
      features: ["Responsive course layout", "Interactive assignment calendar", "Student resource hub", "Modern UI/UX design", "Accessible navigation", "Mobile optimization"]
    }
  ];

  const experiences = [
    {
      company: "Inspired Earth",
      role: "Undergraduate Researcher",
      period: "December 2025 - Present",
      location: "Santa Clara University",
      logo: "/lovable-uploads/0f4639f8-d264-4e57-a94e-208683190214.png",
      gradient: "from-green-500 to-emerald-600",
      responsibilities: [
        "Designing and implementing blockchain-backed prototypes exploring decentralized identity, content ownership, and incentive alignment for NFT's",
        "Developing smart contract logic and integrated on-chain components with Chainlink functions",
        "Researching Web3 protocols to inform system design decisions"
      ],
      skills: ["Blockchain", "Smart Contracts", "Web3", "Chainlink", "NFTs", "Research"]
    },
    {
      company: "Wave",
      role: "Founding Engineer",
      period: "November 2025 - Present",
      location: "Remote",
      logo: "/lovable-uploads/19205251-517b-45a4-ab4c-22599ea5b362.png",
      gradient: "from-blue-500 to-cyan-600",
      responsibilities: [
        "Leading frontend development for an early-stage social media startup",
        "Building production-ready user interfaces using React Native, TypeScript, and Tailwind CSS"
      ],
      skills: ["React Native", "TypeScript", "Tailwind CSS", "Mobile Development", "UI/UX"]
    },
    {
      company: "Camp Galileo",
      role: "Summer Operations Intern",
      period: "June 2024 - Aug 2024",
      location: "Saratoga, CA",
      logo: "/lovable-uploads/0f4639f8-d264-4e57-a94e-208683190214.png",
      gradient: "from-orange-500 to-red-600",
      responsibilities: [
        "Managed operations for 200+ campers including poster design and organization",
        "Supervised children ages 5-13 in STEAM classes",
        "Mentored counselors-in-training"
      ],
      skills: ["Leadership", "Event Management", "Team Coordination", "First Aid", "Mentoring"]
    },
    {
      company: "TechKnowHow",
      role: "Assistant Instructor",
      period: "May 2022 - Aug 2023",
      location: "Campbell/Saratoga, CA",
      logo: "/lovable-uploads/19205251-517b-45a4-ab4c-22599ea5b362.png",
      gradient: "from-purple-500 to-pink-600",
      responsibilities: [
        "Guided classes of 18-20 students in technology programs including Minecraft modding and Roblox development",
        "Provided individualized technical assistance"
      ],
      skills: ["Teaching", "Programming Instruction", "Game Development", "Youth Development"]
    }
  ];

  const skillCategories = [
    { title: "Languages & Frameworks", skills: ["Python", "Java", "C", "HTML", "CSS", "JavaScript", "TypeScript", "React", "Flask", "SQL"], gradient: "from-blue-500 to-cyan-500", icon: Code },
    { title: "Tools & Productivity", skills: ["GitHub", "Chrome DevTools", "VS Code", "PyCharm", "Figma", "Netlify", "Railway"], gradient: "from-purple-500 to-pink-500", icon: Sparkles },
    { title: "AI Tools", skills: ["Lovable", "Bolt.new", "Cursor", "Claude", "WindSurf"], gradient: "from-green-500 to-emerald-500", icon: Lightbulb },
    { title: "Interests", skills: ["Full-stack Dev", "Robotics", "Agentic Apps", "Game Design", "HCI"], gradient: "from-orange-500 to-red-500", icon: Heart }
  ];

  const aboutMeData = {
    hobbies: [
      { name: "Drawing", icon: Palette, color: "from-pink-500 to-rose-500" },
      { name: "Gaming", icon: Gamepad2, color: "from-purple-500 to-indigo-500" },
      { name: "Working Out", icon: Dumbbell, color: "from-green-500 to-emerald-500" },
      { name: "Web Design", icon: Code, color: "from-blue-500 to-cyan-500" }
    ],
    interests: ["Full-stack Development", "Robotics", "Agentic Applications", "Game Design", "Human-Computer Interaction"],
    favoriteSongs: ["Down by Jay Sean", "Down (w/o rap edit) by Jay Sean", "Down Chasing Pluto Remix by Jay Sean"]
  };

  const navLinks = ['about', 'education', 'skills', 'projects', 'experience', 'contact'];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Sticky Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navbarScrolled 
            ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              NS
            </motion.div>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a 
                  key={link}
                  href={`#${link}`} 
                  className={`relative text-sm font-medium transition-colors capitalize ${
                    activeSection === link ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {link}
                  {activeSection === link && (
                    <motion.div 
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                      layoutId="activeSection"
                    />
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 animated-gradient opacity-30" />
        
        {/* Floating particles */}
        <FloatingParticles />
        
        {/* Custom backdrop with overlay */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/63ac8832-661a-4ccc-ae0a-847202e073e9.png" 
            alt="Cityscape backdrop"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/70 to-slate-950" />
        </div>

        <div className="text-center max-w-5xl mx-auto relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Glowing badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-gray-300">Available for opportunities</span>
            </motion.div>

            {/* Main heading */}
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                <span ref={nameRef}></span>
              </span>
            </h1>
            
            <motion.p 
              className="text-2xl md:text-3xl font-light text-slate-200 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Web Design & Engineering Student
            </motion.p>
            
            <motion.p 
              className="text-lg text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Crafting elegant digital experiences through full-stack development, 
              AI integration, and creative design. Currently studying at Santa Clara University.
            </motion.p>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-lg shadow-blue-500/25 text-lg px-8 py-6">
                <a href="https://www.linkedin.com/in/nikash-shanbhag-a05931250/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" variant="outline" className="gap-3 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-lg px-8 py-6">
                <a href="https://github.com/nikashs26" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  View GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact pills */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">
              <Mail className="w-4 h-4" />
              ngshanbhag@scu.edu
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">
              <Phone className="w-4 h-4" />
              (408) 656-8424
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-gray-500" />
        </motion.div>
      </motion.section>

      {/* About Me Section */}
      <section id="about" className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Passionate about building things that live on the internet
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Hobbies */}
            <AnimatedSection delay={0.1}>
              <TiltCard>
                <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-white/10 backdrop-blur-xl overflow-hidden group">
                  <CardContent className="p-8">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-pink-500/25"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Heart className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-6 text-white">Hobbies</h3>
                    <div className="space-y-3">
                      {aboutMeData.hobbies.map((hobby, index) => (
                        <motion.div 
                          key={index} 
                          className={`flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r ${hobby.color} bg-opacity-10 border border-white/5`}
                          whileHover={{ x: 10, scale: 1.02 }}
                        >
                          <hobby.icon className="w-5 h-5 text-white" />
                          <span className="text-white font-medium">{hobby.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            </AnimatedSection>

            {/* Interests */}
            <AnimatedSection delay={0.2}>
              <TiltCard>
                <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-white/10 backdrop-blur-xl overflow-hidden">
                  <CardContent className="p-8">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Lightbulb className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-6 text-white">Interests</h3>
                    <div className="space-y-3">
                      {aboutMeData.interests.map((interest, index) => (
                        <motion.div 
                          key={index} 
                          className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20"
                          whileHover={{ x: 10, scale: 1.02 }}
                        >
                          <span className="text-purple-100 font-medium">{interest}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            </AnimatedSection>

            {/* Favorite Songs */}
            <AnimatedSection delay={0.3}>
              <TiltCard>
                <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-white/10 backdrop-blur-xl overflow-hidden">
                  <CardContent className="p-8">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/25"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Music className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-6 text-white">Favorite Songs</h3>
                    <div className="space-y-3">
                      {aboutMeData.favoriteSongs.map((song, index) => (
                        <motion.div 
                          key={index} 
                          className="p-4 rounded-xl bg-green-500/10 border border-green-500/20"
                          whileHover={{ x: 10, scale: 1.02 }}
                        >
                          <span className="text-green-100 font-medium">{song}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Education
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <TiltCard>
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-white/10 backdrop-blur-xl overflow-hidden">
                <CardContent className="p-10">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <motion.div 
                      className="w-20 h-20 rounded-2xl overflow-hidden bg-white/10 p-2 flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <img 
                        src="/lovable-uploads/97a30479-ded2-4573-a26c-0a29d4c523ea.png" 
                        alt="Santa Clara University Logo"
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">Santa Clara University</h3>
                      <p className="text-xl text-blue-400 mb-3">B.S. in Web Design and Engineering, Responsible AI</p>
                      <div className="flex items-center gap-2 text-slate-300 mb-6">
                        <Calendar className="w-4 h-4" />
                        Sept 2024 - Dec 2027
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-slate-200 mb-3">Relevant Courses</h4>
                          <div className="flex flex-wrap gap-2">
                            {["Web Development", "Web Usability", "Advanced Programming", "Data Structures", "Computer Networks", "Probability & Statistics", "Web Information Management", "Digital Imaging", "Ethics in Technology"].map((course) => (
                              <motion.div key={course} whileHover={{ scale: 1.05 }}>
                                <Badge variant="secondary" className="bg-white/10 border-white/20 text-slate-200 hover:bg-white/20">
                                  {course}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                          <Users className="w-5 h-5 text-blue-400" />
                          <span className="text-slate-200">Association for Computing Machinery (ACM)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TiltCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  Skills
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <AnimatedSection key={category.title} delay={index * 0.1}>
                <TiltCard className="h-full">
                  <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-white/10 backdrop-blur-xl overflow-hidden group hover:border-white/20 transition-colors">
                    <CardContent className="p-6">
                      <motion.div 
                        className={`w-14 h-14 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center mb-5 shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        <category.icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <h3 className="text-lg font-bold text-white mb-4">{category.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <motion.div key={skill} whileHover={{ scale: 1.1 }}>
                            <Badge className="bg-white/10 border-white/10 text-slate-200 hover:bg-white/20 cursor-default">
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                A collection of my recent work and hackathon wins
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <TiltCard className="h-full">
                  <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-white/10 backdrop-blur-xl overflow-hidden group hover:border-white/20 transition-all duration-300">
                    {/* Award badge */}
                    {project.award && (
                      <div className="absolute top-4 right-4 z-10">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                        >
                          <Badge className={`gap-1 font-semibold shadow-lg ${
                            project.award.includes("Winner") 
                              ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0" 
                              : "bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0"
                          }`}>
                            <Award className="w-3 h-3" />
                            {project.award.includes("Winner") ? "Winner" : "Finalist"}
                          </Badge>
                        </motion.div>
                      </div>
                    )}
                    
                    <CardContent className="p-6 h-full flex flex-col">
                      {/* Gradient header bar */}
                      <div className={`h-1 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-6`} />
                      
                      {/* Icon */}
                      {project.icon && (
                        <motion.div 
                          className="flex justify-center mb-6"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <img 
                            src={project.icon} 
                            alt={`${project.title} icon`}
                            className="w-20 h-20 object-contain"
                          />
                        </motion.div>
                      )}
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 mb-4 text-sm flex-grow">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-white/5 border-white/10 text-slate-300 text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 4 && (
                          <Badge variant="secondary" className="bg-white/5 border-white/10 text-slate-300 text-xs">
                            +{project.tech.length - 4}
                          </Badge>
                        )}
                      </div>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full border-white/20 bg-white/5 hover:bg-white/10 text-white">
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-slate-900 border-white/10">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-3 text-2xl text-white">
                              {project.title}
                              {project.award && (
                                <Badge className={`gap-1 ${project.award.includes("Winner") ? "bg-green-500" : "bg-yellow-500"}`}>
                                  <Award className="w-3 h-3" />
                                  {project.award.includes("Winner") ? "Winner" : "Finalist"}
                                </Badge>
                              )}
                            </DialogTitle>
                            <DialogDescription className="text-slate-300">
                              Project details and features
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6 mt-4">
                            <div>
                              <h4 className="font-semibold text-white mb-2">Description</h4>
                              <p className="text-slate-300">{project.details}</p>
                            </div>
                            
                            {project.features && (
                              <div>
                                <h4 className="font-semibold text-white mb-2">Key Features</h4>
                                <ul className="grid md:grid-cols-2 gap-2">
                                  {project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                      <span className="text-slate-300">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            <div>
                              <h4 className="font-semibold text-white mb-2">Technologies</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                  <Badge key={tech} variant="secondary" className="bg-white/10 text-slate-200">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-3 pt-4">
                              {project.github && (
                                <Button asChild variant="outline" size="sm" className="gap-2 border-white/20 bg-white/5 hover:bg-white/10">
                                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="w-4 h-4" /> GitHub
                                  </a>
                                </Button>
                              )}
                              {project.live && (
                                <Button asChild size="sm" className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600">
                                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4" /> Live Demo
                                  </a>
                                </Button>
                              )}
                              {project.devpost && (
                                <Button asChild variant="outline" size="sm" className="gap-2 border-white/20 bg-white/5 hover:bg-white/10">
                                  <a href={project.devpost} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4" /> DevPost
                                  </a>
                                </Button>
                              )}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="max-w-5xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Experience
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {experiences.map((job, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <TiltCard>
                  <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-white/10 backdrop-blur-xl overflow-hidden hover:border-white/20 transition-colors">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-start gap-6">
                        <motion.div 
                          className={`w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br ${job.gradient} p-0.5 flex-shrink-0`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <div className="w-full h-full bg-slate-900 rounded-lg overflow-hidden p-2">
                            <img 
                              src={job.logo} 
                              alt={`${job.company} logo`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-white">{job.company}</h3>
                            <Badge className={`bg-gradient-to-r ${job.gradient} text-white border-0`}>
                              {job.role}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-slate-300 text-sm mb-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {job.period}
                            </span>
                            <span>{job.location}</span>
                          </div>
                          
                          <ul className="space-y-3 mb-6">
                            {job.responsibilities.map((responsibility, idx) => (
                              <motion.li 
                                key={idx} 
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <div className={`w-2 h-2 bg-gradient-to-r ${job.gradient} rounded-full mt-2 flex-shrink-0`} />
                                <span className="text-slate-300">{responsibility}</span>
                              </motion.li>
                            ))}
                          </ul>
                          
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill) => (
                              <motion.div key={skill} whileHover={{ scale: 1.05 }}>
                                <Badge variant="outline" className="border-white/20 text-slate-300 hover:bg-white/10">
                                  {skill}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-20" />
        <div className="absolute inset-0 bg-slate-950/80" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-lg shadow-blue-500/25 text-lg px-8 py-6">
                  <a href="mailto:ngshanbhag@scu.edu">
                    <Mail className="w-5 h-5" />
                    Email Me
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="gap-3 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-lg px-8 py-6">
                  <a href="https://www.linkedin.com/in/nikash-shanbhag-a05931250/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="gap-3 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-lg px-8 py-6">
                  <a href="https://github.com/nikashs26" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-slate-400 text-sm">
          <p>© 2025 Nikash Shanbhag. Built with passion and ☕</p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            className="rounded-full w-14 h-14 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 border-0"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ChevronUp className="w-6 h-6" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
