
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, Linkedin, Mail, Phone, MapPin, ChevronUp, Calendar, Users, Award } from 'lucide-react';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Nikash Shanbhag
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Web Design & Engineering Student
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              Passionate about creating user-friendly websites and applications by blending technical proficiency with creative design and aesthetics.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="outline" className="gap-2">
              <Phone className="w-4 h-4" />
              (408) 656-8424
            </Button>
            <Button variant="outline" className="gap-2">
              <Mail className="w-4 h-4" />
              ngshanbhag@scu.edu
            </Button>
            <Button variant="outline" className="gap-2">
              <MapPin className="w-4 h-4" />
              U.S. Citizen
            </Button>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button asChild className="gap-2">
              <a href="https://www.linkedin.com/in/nikash-shanbhag-a05931250/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2">
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

      {/* Skills Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Languages",
                skills: ["Python", "Java", "C", "HTML", "CSS", "JavaScript", "TypeScript"]
              },
              {
                title: "DevOps & Tools",
                skills: ["Git", "GitHub", "Chrome DevTools", "VS Code", "PyCharm", "Pygame", "Google Suite", "Microsoft Office"]
              },
              {
                title: "Design Tools",
                skills: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Notability", "Procreate"]
              },
              {
                title: "AI Tools",
                skills: ["Lovable", "Bolt.new", "Cursor"]
              },
              {
                title: "Interests",
                skills: ["Graphic Design", "Full-stack Development", "AI", "Cartooning", "Music Composition", "Game Design"]
              },
              {
                title: "Soft Skills",
                skills: ["Problem-solving", "Creativity & Design Thinking", "Teamwork", "Leadership", "Communication", "Team-building"]
              }
            ].map((category) => (
              <Card key={category.title}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
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
            {[
              {
                title: "Better Bulk",
                description: "Full-stack recipe-finder web application with user authentication and recipe management",
                tech: ["TypeScript", "Python", "React", "TailwindCSS", "Flask", "Lovable"],
                github: "https://github.com/nikashs26/full-stack-recipe",
                live: "https://better-bulk.vercel.app/",
                details: "Designed a full-stack recipe-finder web application with features including user authentication, recipe creation/editing, search, and marking as favorite. Integrated the front-end with the Flask backend and used Supabase for secure data storage and retrieval for user sign-ups/sign-ins, user reviews, and manually written recipes. Used RESTful API endpoints for diverse recipe generation. Leveraged Lovable AI Copilot for debugging, test generation, and code optimization."
              },
              {
                title: "Simba's Surveillance",
                description: "Real-time Lion King-themed wildlife trespasser detection system",
                tech: ["HTML", "CSS", "React"],
                github: "https://github.com/NickelR22/simbassurveillance",
                devpost: "https://devpost.com/software/bobs-consulting?ref_content=my-projects-tab&ref_feature=my_projects",
                live: "https://simbassurveillance.vercel.app/",
                details: "Developed the frontend for a real-time, Lion King-themed wildlife trespasser detection system that uses AI to identify human figures in live-streamed video from protected territories. Used React and CSS to create a responsive homepage and structure the About page. Connected the Python-based backend by retrieving and displaying JSON data in the React frontend, including timestamps and images of detected trespassers. Enhanced real-time data visualization to improve accessibility and responsiveness, supporting wildlife protection efforts."
              },
              {
                title: "Peter Parks",
                description: "AWS/INRIX Hack 2024 Finalist - Real-time parking detection",
                tech: ["React", "CSS"],
                github: "https://github.com/nikashs26/AI-Hack-2024",
                devpost: "https://devpost.com/software/parking-kjx41u",
                award: "Finalist AWS/INRIX Hack 2024",
                details: "Led team's frontend development for a web application that detects available parking spaces in real-time using AWS and INRIX services. Implemented the interface using JavaScript and CSS, focusing on user experience. Coordinated with the backend team to integrate frontend components with real-time data. The project was a finalist in the hackathon."
              },
              {
                title: "Math 13 Course Page",
                description: "Modern redesign of SCU math professor's course webpage",
                tech: ["HTML", "CSS", "JavaScript"],
                github: "https://github.com/nikashs26/Math-13-Smolarski-Page",
                live: "https://math-13-smolarski-page.vercel.app/static/index.html",
                details: "Conceptualized and led a team to recreate an SCU math professor's course webpage using HTML, CSS, and JavaScript. Designed a modern, responsive interface with improved functionality and user engagement. Developed the Home and About Professor pages, and contributed ideas for mockups and implementation of all site sections. Focused on enhancing accessibility, aesthetics, and interactivity to improve student experience."
              }
            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    {project.award && (
                      <Badge variant="default" className="gap-1">
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
                    <DialogContent className="max-w-2xl">
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
                      </DialogHeader>
                      <div className="space-y-4">
                        <p className="text-gray-600">{project.details}</p>
                        
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8">
            {[
              {
                company: "Camp Galileo",
                role: "Summer Operations Intern",
                period: "June 2024 - Aug 2024",
                responsibilities: [
                  "Managed hands-on office work including poster creation and camper shirt, name-tag, and lanyard organization",
                  "Supervised groups of children of ages 5-13 in STEAM classes and morning extended care sessions", 
                  "Assisted and oversaw counselors-in-training, helping them complete tasks and teaching them mentorship skills",
                  "Handled camper injuries through first-aid treatment, ensuring they remained safe while enjoying camp"
                ]
              },
              {
                company: "TechKnowHow",
                role: "Assistant Instructor",
                period: "May 2022 - Aug 2022, May 2023 - Aug 2023",
                responsibilities: [
                  "Guided classes of 18-20 elementary/middle school kids in Minecraft, Blockbench, LEGO robot-building, Roblox, and Scratch programming, assisting them through their projects and answering questions",
                  "Directed extended care group in indoor and outdoor activities like board games, watching videos, and playing on the site's play structure, ensuring camper safety and enjoyment",
                  "Cleaned up classrooms at the end of each day to allow camp to start promptly the following day"
                ]
              }
            ].map((job, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                      {job.company.split(' ').map(word => word[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{job.company}</h3>
                      <p className="text-lg text-blue-600 mb-2">{job.role}</p>
                      <div className="flex items-center gap-2 text-gray-500 mb-4">
                        <Calendar className="w-4 h-4" />
                        {job.period}
                      </div>
                      <ul className="space-y-2">
                        {job.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
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
            I'm always interested in new opportunities and collaborations!
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
          className="fixed bottom-6 right-6 rounded-full w-12 h-12 shadow-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};

export default Index;
