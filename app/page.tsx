"use client"

import type React from "react"

import Image from "next/image";

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  Cloud,
  Monitor,
  Smartphone,
  Database,
  Brain,
  CreditCard,
  Award,
  Gift,
  CheckCircle,
  Briefcase,
  Book,
  Users,
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Github,
  Gitlab,
} from "lucide-react"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("All")

  // Smooth scroll implementation
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "achievements", "contact"]
      const currentPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (currentPosition >= offsetTop && currentPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Filter projects based on category
  const filterProjects = (category: string) => {
    setActiveCategory(category)
  }

  return (
    <main className="min-h-screen bg-[#111827] text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#111827] border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" onClick={() => scrollToSection("home")} className="text-2xl font-bold">
            <span className="text-[#4B91CD]">&lt; Developer </span>
            <span className="text-[#F0DB4F]">
              <span className="blinking-cursor">/</span>&gt;
            </span>
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#about" isActive={activeSection === "about"} onClick={() => scrollToSection("about")}>
              About
            </NavLink>
            <NavLink href="#skills" isActive={activeSection === "skills"} onClick={() => scrollToSection("skills")}>
              Skills
            </NavLink>
            <NavLink
              href="#projects"
              isActive={activeSection === "projects"}
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </NavLink>
            <NavLink
              href="#experience"
              isActive={activeSection === "experience"}
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </NavLink>
            <NavLink
              href="#achievements"
              isActive={activeSection === "achievements"}
              onClick={() => scrollToSection("achievements")}
            >
              Achievements
            </NavLink>
            <NavLink href="#contact" isActive={activeSection === "contact"} onClick={() => scrollToSection("contact")}>
              Contact
            </NavLink>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0F1623] py-4 px-4 absolute w-full border-b border-gray-800">
            <div className="flex flex-col space-y-4">
              <NavLink href="#about" isActive={activeSection === "about"} onClick={() => scrollToSection("about")}>
                About
              </NavLink>
              <NavLink href="#skills" isActive={activeSection === "skills"} onClick={() => scrollToSection("skills")}>
                Skills
              </NavLink>
              <NavLink
                href="#projects"
                isActive={activeSection === "projects"}
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </NavLink>
              <NavLink
                href="#experience"
                isActive={activeSection === "experience"}
                onClick={() => scrollToSection("experience")}
              >
                Experience
              </NavLink>
              <NavLink
                href="#achievements"
                isActive={activeSection === "achievements"}
                onClick={() => scrollToSection("achievements")}
              >
                Achievements
              </NavLink>
              <NavLink
                href="#contact"
                isActive={activeSection === "contact"}
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-16 md:py-24 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Hello, I'm <br />
              <span className="text-[#4B91CD] text-3xl md:text-4xl">MD Ashraful Hossain Alif</span>
            </h1>
            <span className="text-[#F0DB4F] text-4xl md:text-5xl">&gt;</span>
            <p className="text-gray-300 text-lg">
              I build and architect complex, AI-driven systems with Python, specializing in machine learning, full-stack development (MERN/Django) 
              and cloud-native automation. My work focuses on creating scalable solutions, optimizing databases and deploying efficient applications to the 
              cloud.
            </p>
            <div className="flex space-x-4 pt-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[#4B91CD] hover:bg-[#194161] text-white px-6 py-3 rounded-md transition-colors"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="border border-[#4B91CD] text-[#4B91CD] hover:bg-[#4B91CD] hover:text-white px-6 py-3 rounded-md transition-colors"
              >
                View My Work
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-[#4B91CD]">
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <Image
                  src="/IMG_3876.jpg" // Path from public folder
                  alt="Alif"
                  width={320}  // Match container's max width (md:w-80)
                  height={320} // Match container's max height
                  className="w-full h-full object-cover"
                  priority    // Important for above-the-fold images
                />
              </div>
              <div className="absolute bottom-4 right-4 w-4 h-4 rounded-full bg-[#F0DB4F]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-[#0F1623]">
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              About <span className="text-[#4B91CD]">Me</span>
              <div className="w-12 h-1 bg-[#F0DB4F] mt-2"></div>
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                I develop AI-powered applications and scalable web platforms using Python, with a focus on architectural efficiency and performance.
              </p>
              <p>
                My solutions are built on a foundation of optimized database management and strategic cloud computing, aimed at addressing tangible challenges. 
                I actively explore emerging technologies to ensure my work delivers cutting-edge results.
              </p>
              <div className="pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#4B91CD] font-semibold">Name:</span>
                  <span>MD Ashraful Hossain Alif</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#4B91CD] font-semibold">Email:</span>
                  <span>alifkhan6475@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#4B91CD] font-semibold">Location:</span>
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#4B91CD] font-semibold">Availability:</span>
                  <span>Full-time</span>
                </div>
                <button className="inline-block bg-[#4B91CD] hover:bg-[#13344d] text-white px-6 py-3 rounded-md transition-colors">
                  <a 
                    href="/Ashraful_Hossain_Alif_Resume.pdf" 
                    download="Ashraful Hossain Alif.pdf"
                  >
                    Download Resume
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-[#4B91CD]">Mission & Vision</span>
            </h2>
            <div className="bg-[#1A2234] p-6 rounded-lg mb-8">
              <h3 className="text-2xl text-[#F0DB4F] mb-4">Mission</h3>
              <p className="text-gray-300">
                To apply deep expertise in Python, Machine Learning and Artificial Intelligence toward crafting innovative solutions that automate critical 
                processes, solve intricate problems and empower organizations with data-driven decision-making.
              </p>
            </div>
            <div className="bg-[#1A2234] p-6 rounded-lg">
              <h3 className="text-2xl text-[#F0DB4F] mb-4">Vision</h3>
              <p className="text-gray-300">
                To establish myself as an authority in the design of AI systems, recognized for advancing ethical technology and contributing to foundational 
                open-source projects, while cultivating talent within the data science community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical <span className="text-[#4B91CD]">Skills</span>
            <div className="w-24 h-1 bg-[#F0DB4F] mx-auto mt-2"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#1A2234] p-6 rounded-lg">
              <h3 className="text-2xl text-[#4B91CD] mb-6">Programming Languages</h3>
              <div className="space-y-6">
                <SkillBar name="Python" percentage={95} />
                <SkillBar name="JavaScript" percentage={90} />
                <SkillBar name="Node.js" percentage={82} />
                <SkillBar name="React" percentage={83} />
                <SkillBar name="TypeScript" percentage={75} />
              </div>
            </div>
            <div className="bg-[#1A2234] p-6 rounded-lg">
              <h3 className="text-2xl text-[#4B91CD] mb-6">Frameworks & Libraries</h3>
              <div className="space-y-6">
                <SkillBar name="Django & RESTful APIs" percentage={92} />
                <SkillBar name="Flask & FastAPI" percentage={88} />
                <SkillBar name="PyQt & Kivy" percentage={85} />
                <SkillBar name="TensorFlow & PyTorch" percentage={75} />
                <SkillBar name="Pandas & NumPy" percentage={90} />
              </div>
            </div>
            <div className="bg-[#1A2234] p-6 rounded-lg">
              <h3 className="text-2xl text-[#4B91CD] mb-6">Database & Cloud</h3>
              <div className="space-y-6">
                <SkillBar name="MySQL" percentage={95} />
                <SkillBar name="MongoDB" percentage={80} />
                <SkillBar name="Clustering & Replication" percentage={78} />
                <SkillBar name="HA Proxy & Load Balancing" percentage={82} />
                <SkillBar name="Docker & Kubernetes" percentage={70} />
              </div>
            </div>
            <div className="bg-[#1A2234] p-6 rounded-lg">
              <h3 className="text-2xl text-[#4B91CD] mb-6">System Architecture</h3>
              <div className="space-y-6">
                <SkillBar name="Microservices" percentage={85} />
                <SkillBar name="API Design" percentage={90} />
                <SkillBar name="CI/CD" percentage={82} />
                <SkillBar name="Distrubuted Systems" percentage={80} />
                <SkillBar name="System Optimization" percentage={88} />
              </div>
            </div>
<div className="bg-[#1A2234] p-6 rounded-lg col-span-2">
  <h3 className="text-2xl text-[#4B91CD] mb-6">Other Skills</h3>
  <div className="flex flex-wrap gap-3">
    {[
      'Git & GitHub', 'GitLab', 'Next.js', 'React-Native', 'PostgreSQL', 'Redis', 'SciPy', 'Matplotlib', 'SQL', 'Ajax & Bootstrap', 'HTML & CSS',
      'Linux', 'Data Analysis', 'Machine Learning', 'Web Scraping', 'AWS', 'Azure', 'GCP', 'Terraform', 'ORMs', 'GraphQL',
      'Automation', 'Powershell', 'Saas Application', 'Project Management'
    ].map((skill) => (
      <div
        key={skill}
        className="bg-[#2A3A5A] hover:bg-[#3A4B6A] rounded-full px-4 py-2 text-sm text-blue-300"
      >
        {skill}
      </div>
    ))}
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-[#0F1623]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            My <span className="text-[#4B91CD]">Projects</span>
            <div className="w-24 h-1 bg-[#F0DB4F] mx-auto mt-2"></div>
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in Python Development, System
            Architecture, Database Management, and Cloud Computing.
          </p>

          {/* Project Categories */}
          <div className="flex justify-center mb-12 overflow-x-auto">
            <div className="flex space-x-8 border-b border-gray-700">
              <CategoryButton
                category="All"
                isActive={activeCategory === "All"}
                onClick={() => filterProjects("All")}
              />
              <CategoryButton
                category="Web"
                isActive={activeCategory === "Web"}
                onClick={() => filterProjects("Web")}
              />
              <CategoryButton
                category="Desktop"
                isActive={activeCategory === "Desktop"}
                onClick={() => filterProjects("Desktop")}
              />
              <CategoryButton
                category="Mobile"
                isActive={activeCategory === "Mobile"}
                onClick={() => filterProjects("Mobile")}
              />
              <CategoryButton
                category="AI/ML"
                isActive={activeCategory === "AI/ML"}
                onClick={() => filterProjects("AI/ML")}
              />
              <CategoryButton
                category="Cloud"
                isActive={activeCategory === "Cloud"}
                onClick={() => filterProjects("Cloud")}
              />
            </div>
          </div>

          {/* Project Grid - First Row */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="h-full max-h-[420px] w-full">
              <ProjectCard
              category="Web"
              icon={<Cloud className="w-12 h-12 text-[#4B91CD]" />}
              title="Cloud File Manager"
              description="A Django-based secure file storage system with advanced permission controls and real-time collaboration features."
              technologies={["Python", "Django", "PostgreSQL", "AWS S3"]}
              links={[
                { label: "View Details", url: "https://github.com/Alif15608/Cloud-File-Manager" },
                { label: "Working...", url: "#" },
              ]}
              />
            </div>
            
            <div className="h-full max-h-[420px] w-full">
              <ProjectCard
              category="Desktop"
              icon={<Monitor className="w-12 h-12 text-[#4B91CD]" />}
              title="BTL Performance System"
              description="A Software application for advanced data analysis and report generation. Best for domestic and international call analysis."
              technologies={["Python", "Linux", "Pandas", "Django"]}
              links={[
                { label: "View Details", url: "https://github.com/Alif15608/BTL-Performance-System" },  
                { label: "Web", url: "http://103.134.89.68:8000/home/" },
              ]}
              />
            </div>

            <div className="h-full max-h-[420px] w-full">
              <ProjectCard
              category="Mobile"
              icon={<Smartphone className="w-12 h-12 text-[#4B91CD]" />}
              title="Fit Aura"
              description="A cross-platform mobile app built with Kivy that tracks workouts, nutrition, and provides personalized recommendations."
              technologies={["Python", "Kivy", "SQLite", "Firebase"]}
              links={[
                { label: "View Details", url: "https://github.com/Alif15608/Fitness-Tracker" },
                
              ]}
              />
            </div>
          </div>

          {/* Project Grid - Second Row */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="h-full max-h-[420px] w-full">
              <ProjectCard
              category="AI/ML"
              icon={<Brain className="w-12 h-12 text-[#4B91CD]" />}
              title="Sentiment Analysis API"
              description="A machine learning API that analyzes text sentiment with high accuracy, supporting multiple languages and contexts."
              technologies={["Python", "TensorFlow", "Flask", "Docker"]}
              links={[
                
                { label: "Working...", url: "#" },
              ]}
              />
            </div>

            <div className="h-full max-h-[420px] w-full">
              <ProjectCard
              category="Web"
              icon={<Database className="w-12 h-12 text-[#4B91CD]" />}
              title="Mir Cloud"
              description="A scalable data processing website using Python and Javascripts for efficient Cloud platform."
              technologies={["Python", "AWS", "Javascripts"]}
              links={[
                { label: "View Details", url: "https://github.com/Alif15608/Mir-Cloud" },
                { label: "Live Demo", url: "https://mircloudbd.com/" },
              ]}
              />
            </div>

            <div className="h-full max-h-[420px] w-full">
              <ProjectCard
              category="Web"
              icon={<CreditCard className="w-12 h-12 text-[#4B91CD]" />}
              title="Zan Footwear"
              description="A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard."
              technologies={["Python", "Django", "MySQL", "Fast API"]}
              links={[
                { label: "View Details", url: "https://github.com/Alif15608/ZanFootwear"},
                { label: "Live Demo", url: "https://www.zanfootwear.com/" },
              ]}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-[#4B91CD] hover:bg-[#3A7CAD] text-white px-6 py-3 rounded-md transition-colors">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Work <span className="text-[#4B91CD]">Experience</span>
            <div className="w-24 h-1 bg-[#F0DB4F] mx-auto mt-2"></div>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Professional Journey */}
            <div>
              <h3 className="text-2xl text-[#4B91CD] mb-8">Professional Journey</h3>

              <div className="relative border-l-2 border-gray-700 pl-8 pb-12">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-[#4B91CD]"></div>
                <div className="bg-[#1A2234] p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-semibold">System Engineer</h4>
                    <span className="text-sm bg-[#1E3A5F] text-[#4B91CD] px-3 py-1 rounded-full">2024 - Present</span>
                  </div>
                  <p className="text-[#F0DB4F] mb-3">Mir Telecom Ltd</p>
                  <p className="text-gray-300 mb-4">
                    Junior developer for enterprise-level applications, focusing on system architecture and cloud
                    solutions.
                  </p>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>
                      Designed and implemented microservices architecture that improved system scalability by 200%
                    </li>
                    <li>Single handly creating a cloud-based Call Details Record platform System for ICX</li>
                    <li>Optimized database queries resulting in 40% faster application performance</li>
                    <li>Currently working Mir & AIOB (All ICX Of Bangladesh) SMS Project</li>
                  </ul>
                </div>
              </div>

              <div className="relative border-l-2 border-gray-700 pl-8 pb-12">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-[#4B91CD]"></div>
                <div className="bg-[#1A2234] p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-semibold">Python Developer</h4>
                    <span className="text-sm bg-[#1E3A5F] text-[#4B91CD] px-3 py-1 rounded-full">2022 - Present</span>
                  </div>
                  <p className="text-[#F0DB4F] mb-3">Data Analytics & Research</p>
                  <p className="text-gray-300 mb-4">
                    Developed data analysis tools and web applications for business intelligence solutions.
                  </p>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Built a Django-based analytics dashboard used by over 500 clients</li>
                    <li>Created ETL pipelines that processed over 1TB of data daily</li>
                    <li>Developed RESTful APIs consumed by mobile and web applications</li>
                    <li>Implemented machine learning models for predictive analytics features for thesis research</li>
                  </ul>
                </div>
              </div>

              <div className="relative border-l-2 border-gray-700 pl-8">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-[#4B91CD]"></div>
                <div className="bg-[#1A2234] p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-semibold">Developer & Applied AI Engineer</h4>
                    <span className="text-sm bg-[#1E3A5F] text-[#4B91CD] px-3 py-1 rounded-full">2024 - Present</span>
                  </div>
                  <p className="text-[#F0DB4F] mb-3">Mir Cloud</p>
                  <p className="text-gray-300 mb-4">
                    Worked on cloud testing and deploying server using Linux and related technologies.
                  </p>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Worked on database clustering on multiple data center</li>
                    <li>Took participate on multiple cloud service testing</li>
                    <li>Implemented database solutions using PostgreSQL and MySQL</li>
                    <li>Designed HA Proxy & Load Balancing for cloud service</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Academic Background */}
            <div>
              <h3 className="text-2xl text-[#4B91CD] mb-8">Academic Background</h3>

              <div className="relative border-l-2 border-gray-700 pl-8 pb-12">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-[#4B91CD]"></div>
                <div className="bg-[#1A2234] p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-semibold">BSc in Computer Science & Engineering</h4>
                    <span className="text-sm bg-[#1E3A5F] text-[#4B91CD] px-3 py-1 rounded-full">2020 - 2023</span>
                  </div>
                  <p className="text-[#F0DB4F] mb-3">American International University-Bangladesh</p>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>GPA: 3.84/4.0</li>
                    <li>Thesis: "Stand up Against Bad Intended News: An Approach to Detect Fake News using Machine Learning."</li>
                    <li>Major: Software Engineering</li>
                    <li>Published 1 paper in international conference & Executive of Computer Club</li>
                  </ul>
                </div>
              </div>

              <div className="relative border-l-2 border-gray-700 pl-8 pb-12">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-[#4B91CD]"></div>
                <div className="bg-[#1A2234] p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-semibold">Higher Secondary School Certificate</h4>
                    <span className="text-sm bg-[#1E3A5F] text-[#4B91CD] px-3 py-1 rounded-full">2017 - 2019</span>
                  </div>
                  <p className="text-[#F0DB4F] mb-3">Dhaka Residential Model College</p>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>GPA: 4.83/5.0</li>
                    <li>Science Background & Member of the Science Club</li>
                  </ul>
                </div>
              </div>

              <div className="relative border-l-2 border-gray-700 pl-8 pb-12">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-[#4B91CD]"></div>
                <div className="bg-[#1A2234] p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-semibold">Secondary School Certificate</h4>
                    <span className="text-sm bg-[#1E3A5F] text-[#4B91CD] px-3 py-1 rounded-full">2015 - 2017</span>
                  </div>
                  <p className="text-[#F0DB4F] mb-3">Jugnidah Hazi Mahtab Ali High School</p>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>GPA: 5.0/5.0</li>
                    <li>Science Background</li>
                  </ul>
                </div>
              </div>

              {/* Certifications */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
                <div className="bg-[#1A2234] p-6 rounded-lg">
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <span className="text-[#4B91CD]">
                        <CheckCircle size={20} />
                      </span>
                      <div>
                        <p className="font-medium">IT Essential & CyberOps</p>
                        <p className="text-sm text-gray-400">Cisco Networking Academy, 2021</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#4B91CD]">
                        <CheckCircle size={20} />
                      </span>
                      <div>
                        <p className="font-medium">IBM Docker for Beginners</p>
                        <p className="text-sm text-gray-400">Coursera, 2025</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#4B91CD]">
                        <CheckCircle size={20} />
                      </span>
                      <div>
                        <p className="font-medium">IBM DevOPS, Cloud and Agile Foundations</p>
                        <p className="text-sm text-gray-400">Coursera, 2025</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#4B91CD]">
                        <CheckCircle size={20} />
                      </span>
                      <div>
                        <p className="font-medium">Get the most out of Rovo</p>
                        <p className="text-sm text-gray-400">Atlassian, 2025</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#4B91CD]">
                        <CheckCircle size={20} />
                      </span>
                      <div>
                        <p className="font-medium">OCI Generative AI</p>
                        <p className="text-sm text-gray-400"> Oracle, 2025</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-4 bg-[#0F1623]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Achievements & <span className="text-[#4B91CD]">Publications</span>
            <div className="w-24 h-1 bg-[#F0DB4F] mx-auto mt-2"></div>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Awards & Recognition */}
            <div>
              <h3 className="text-2xl text-[#4B91CD] mb-8">Awards & Recognition</h3>

              <div className="space-y-8">
                <div className="bg-[#1A2234] p-6 rounded-lg hover:shadow-md hover:shadow-[#4B91CD]/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1E3A5F] p-3 rounded-full">
                      <Award className="w-6 h-6 text-[#4B91CD]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1">Dean's Award</h4>
                      <p className="text-[#F0DB4F] mb-3">American International University Bangladesh, 2020-2024</p>
                      <p className="text-gray-300">
                        Listed 5 times for Dean’s Award for Academic Excellence. 
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1A2234] p-6 rounded-lg hover:shadow-md hover:shadow-[#4B91CD]/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1E3A5F] p-3 rounded-full">
                      <Gift className="w-6 h-6 text-[#4B91CD]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1">Event Organizer</h4>
                      <p className="text-[#F0DB4F] mb-3">AIUB Computer Club, 2021-2024</p>
                      <p className="text-gray-300">
                        Organize National Event CS fest, Cyber Gaming fest, Jarvis.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1A2234] p-6 rounded-lg hover:shadow-md hover:shadow-[#4B91CD]/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1E3A5F] p-3 rounded-full">
                      <Briefcase className="w-6 h-6 text-[#4B91CD]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1">Co-Convener</h4>
                      <p className="text-[#F0DB4F] mb-3">Basis Student Forum AIUB, 2022-2024</p>
                      <p className="text-gray-300">
                        campus activation for Soft Expo , NASA Space App Challenge , Manage & Lead the programs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1A2234] p-6 rounded-lg hover:shadow-md hover:shadow-[#4B91CD]/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1E3A5F] p-3 rounded-full">
                      <CheckCircle className="w-6 h-6 text-[#4B91CD]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1">Hackathon</h4>
                      <p className="text-[#F0DB4F] mb-3">Python Developer Challenge, 2023</p>
                      <p className="text-gray-300">
                        Took participate in a programming content organize by BASIS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Publications & Research */}
            <div>
              <h3 className="text-2xl text-[#4B91CD] mb-8">Publications & Research</h3>

              <div className="space-y-8">

                <div className="bg-[#1A2234] p-6 rounded-lg hover:shadow-md hover:shadow-[#4B91CD]/20 transition-all duration-300">
                  <div>
                    <h4 className="text-xl font-semibold mb-1">
                      "Stand up Against Bad Intended News: An Approach to Detect Fake News using Machine Learning."
                    </h4>
                    <p className="text-[#F0DB4F] mb-3">Emerging Science Journal, Vol 7, No 4, 1247-1259, 2023</p>
                    <p className="text-gray-300 mb-4">
                      Research on using Machine Learning algorithms to predict news false rate based on previous data stored in database.
                    </p>
                    <button className="text-[#4B91CD] hover:text-white transition-colors">
                      <a href="https://www.ijournalse.org/index.php/ESJ/article/view/1651" target="_blank">Read Paper</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Activities Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-[#4B91CD]">Extra Activities</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1A2234] p-6 rounded-lg hover:shadow-md hover:shadow-[#4B91CD]/20 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-[#1E3A5F] p-3 rounded-full">
                  <Briefcase className="w-6 h-6 text-[#4B91CD]" />
                </div>
                <h3 className="text-xl font-semibold">Community Mentor</h3>
              </div>
              <p className="text-gray-300">
                Volunteer mentor for coding bootcamps, helping new developers learn Python and web development skills.
              </p>
            </div>

            <div className="bg-[#1A2234] p-6 rounded-lg hover:shadow-md hover:shadow-[#4B91CD]/20 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-[#1E3A5F] p-3 rounded-full">
                  <Book className="w-6 h-6 text-[#4B91CD]" />
                </div>
                <h3 className="text-xl font-semibold">Technical Writer</h3>
              </div>
              <p className="text-gray-300">
                Regular contributor to tech blogs and publications, sharing insights on Python development and system
                architecture.
              </p>
            </div>

            <div className="bg-[#1A2234] p-6 rounded-lg hover:shadow-md hover:shadow-[#4B91CD]/20 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-[#1E3A5F] p-3 rounded-full">
                  <Users className="w-6 h-6 text-[#4B91CD]" />
                </div>
                <h3 className="text-xl font-semibold">Community Leader</h3>
              </div>
              <p className="text-gray-300">
                Organizer of local Python meetups and workshops, fostering knowledge sharing and networking in the
                developer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-[#0F1623]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Get In <span className="text-[#4B91CD]">Touch</span>
            <div className="w-24 h-1 bg-[#F0DB4F] mx-auto mt-2"></div>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#1A2234] p-6 rounded-lg">
              <h3 className="text-2xl text-[#4B91CD] mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 mb-1">Name</p>
                  <p className="text-white">MD Ashraful Hossain Alif</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Email</p>
                  <p className="text-white">alifkhan6475@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Location</p>
                  <p className="text-white">Dhaka, Bangladesh</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Availability</p>
                  <p className="text-white">Full-time</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Phone No.</p>
                  <p className="text-white">+8801738-377494</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A2234] p-6 rounded-lg">
              <h3 className="text-2xl text-[#4B91CD] mb-6">Send Me a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-[#0F1623] border border-gray-700 rounded-md px-4 py-2 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-[#0F1623] border border-gray-700 rounded-md px-4 py-2 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-[#0F1623] border border-gray-700 rounded-md px-4 py-2 text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#4B91CD] hover:bg-[#3A7CAD] text-white px-6 py-3 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#0A0F1A] text-center text-white">
        <div className="container mx-auto">
          <div className="text-2xl font-bold inline-block mb-4">
            <span className="text-[#4B91CD]">&lt; Developer </span>
            <span className="text-[#F0DB4F]">
              <span className="blinking-cursor">/</span>&gt;
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://www.facebook.com/share/1DhYpnMFPY/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 hover:text-[#4B91CD]" />
            </a>
            <a href="https://www.instagram.com/alif.______khan?igsh=dnl1OHkzNnJxOTRm&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 hover:text-[#C13584]" />
            </a>
            <a href="https://www.linkedin.com/in/alif6475/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-[#0077B5]" />
            </a>
            <a href="https://x.com/alif15608" target="_blank" rel="noopener noreferrer">
              <X className="w-6 h-6 hover:text-[#0077B5]" />
            </a>
            <a href="https://github.com/Alif15608" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-gray-300" />
            </a>
            <a href="https://gitlab.com/alif15608" target="_blank" rel="noopener noreferrer">
              <Gitlab className="w-6 h-6 hover:text-gray-300" />
            </a>
            <a href="https://leetcode.com/u/alif3443/" target="_blank" rel="noopener noreferrer">
              <span className="text-lg font-bold hover:text-gray-300">LC</span>
            </a>
          </div>

          <p className="text-gray-400">
            © {new Date().getFullYear()} Alif. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  )
}

// Skill Bar Component
function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-[#4B91CD] h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}

// Project Card Component
function ProjectCard({
  category,
  icon,
  title,
  description,
  technologies,
  links,
}: {
  category: string
  icon: React.ReactNode
  title: string
  description: string
  technologies: string[]
  links: { label: string; url: string }[]
}) {
  return (
    <div className="bg-[#1A2234] rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-[#4B91CD]/20 transition-all duration-300">
      <div className="bg-[#1E3A5F] text-[#4B91CD] px-3 py-1 text-sm inline-block m-2 rounded-md">{category}</div>
      <div className="p-8 flex flex-col h-full">
        <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-[#4B91CD] transition-colors">{title}</h3>
        <p className="text-gray-300 mb-6 flex-grow">{description}</p>
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-[#0F1623] text-[#4B91CD] px-3 py-1 text-sm rounded-md">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4B91CD] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

// Navigation Link Component
function NavLink({
  href,
  isActive,
  onClick,
  children,
}: {
  href: string
  isActive: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={`transition-colors ${isActive ? "text-[#4B91CD]" : "text-white hover:text-[#4B91CD]"}`}
    >
      {children}
    </button>
  )
}

// Category Button Component
function CategoryButton({
  category,
  isActive,
  onClick,
}: {
  category: string
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 transition-colors ${
        isActive ? "text-[#4B91CD] border-b-2 border-[#4B91CD]" : "text-gray-400 hover:text-white"
      }`}
    >
      {category}
    </button>
  )
}
