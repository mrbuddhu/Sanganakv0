"use client"

import React, { useState, useCallback, useEffect, useRef } from 'react';
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Palette, Smartphone, Code, Cpu, Layout, LayoutGrid, Menu, Twitter, Linkedin, Instagram, Sun, Moon, Brain, ChevronLeft, ChevronRight, Github, Mouse } from "lucide-react"
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [showSanganak, setShowSanganak] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  const taglines = [
    "Bring your ideas to life",
    "Where digital dreams become reality",
    "Transforming visions into digital success",
    "Your imagination, our innovation",
    "Crafting digital experiences that inspire",
  ]

  const [currentTagline, setCurrentTagline] = useState(0)

  useEffect(() => {
    const taglineInterval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }, 3000)

    return () => clearInterval(taglineInterval)
  }, [])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev)
  }, [])

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode)
  }, [isDarkMode])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }

    const sections = document.querySelectorAll("section[id]")
    const navLi = document.querySelectorAll("nav ul li")

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setShowSanganak(scrollPosition < 100)

      let current = ""
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id") || ""
        }
      })
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    { name: "Graphic Design", icon: Palette, description: "We create eye-catching visuals that capture your brand's essence and leave a lasting impression." },
    { name: "UI/UX Design", icon: Layout, description: "Our designs focus on creating intuitive, user-friendly interfaces that enhance user experiences and drive engagement." },
    { name: "Web App Development", icon: LayoutGrid, description: "We build robust, scalable web applications that meet your business needs and exceed user expectations." },
    { name: "Mobile App Development", icon: Smartphone, description: "Our mobile apps are designed for performance, usability, and cross-platform compatibility." },
    { name: "Blockchain", icon: Cpu, description: "We leverage blockchain technology to create secure, transparent, and decentralized solutions for your business." },
    { name: "AI Solutions", icon: Brain, description: "We implement cutting-edge AI technologies to automate processes and provide intelligent insights for your business." },
  ]

  const menuItems = ["About", "Services", "Portfolio", "Testimonials", "Contacts"]

  const portfolioItems = {
    designs: [
      { title: "Brand Identity for Tech Startup", image: "/placeholder.svg?height=200&width=300" },
      { title: "UI Design for E-commerce App", image: "/placeholder.svg?height=200&width=300" },
      { title: "Infographic Design for Annual Report", image: "/placeholder.svg?height=200&width=300" },
    ],
    web: [
      { title: "E-learning Platform", image: "/placeholder.svg?height=200&width=300" },
      { title: "Real Estate Listing Website", image: "/placeholder.svg?height=200&width=300" },
      { title: "Healthcare Management System", image: "/placeholder.svg?height=200&width=300" },
    ],
    mobile: [
      { title: "Fitness Tracking App", image: "/placeholder.svg?height=200&width=300" },
      { title: "Food Delivery App", image: "/placeholder.svg?height=200&width=300" },
      { title: "Travel Planning App", image: "/placeholder.svg?height=200&width=300" },
    ],
    blockchain: [
      { title: "Decentralized Finance (DeFi) Platform", image: "/placeholder.svg?height=200&width=300" },
      { title: "NFT Marketplace", image: "/placeholder.svg?height=200&width=300" },
      { title: "Supply Chain Tracking System", image: "/placeholder.svg?height=200&width=300" },
    ],
    ai: [
      { title: "AI-Powered Chatbot", image: "/placeholder.svg?height=200&width=300" },
      { title: "Predictive Analytics Dashboard", image: "/placeholder.svg?height=200&width=300" },
      { title: "Computer Vision for Quality Control", image: "/placeholder.svg?height=200&width=300" },
    ],
  }

  const testimonials = [
    { name: "John Doe", role: "CEO, TechCorp", content: "Sanganak's expertise in blockchain technology helped us revolutionize our supply chain management. Their team's dedication and innovative solutions exceeded our expectations." },
    { name: "Jane Smith", role: "CTO, DesignHub", content: "The UI/UX design Sanganak created for our app was nothing short of brilliant. It significantly improved user engagement and satisfaction." },
    { name: "Alex Johnson", role: "Founder, EduTech", content: "Working with Sanganak on our e-learning platform was a game-changer. Their web development skills and attention to detail are unparalleled." },
    { name: "Emily Brown", role: "Marketing Director, GrowthCo", content: "Sanganak's AI solutions have transformed our marketing strategies. The insights we've gained have been invaluable for our business growth." },
    { name: "Michael Lee", role: "CIO, FinTech Innovations", content: "The mobile app Sanganak developed for us has received overwhelmingly positive feedback from our users. Their team's technical expertise and creativity are truly impressive." },
  ]

  const founders = [
    {
      name: "mrbuddhu",
      role: "Dev Lead & Co-founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "mrbuddhu is a passionate developer and tech enthusiast with years of experience in creating innovative solutions. As the Dev Lead of Sanganak, he drives the technical vision and ensures the delivery of high-quality products.",
      twitter: "https://twitter.com/mrbuddhu",
      linkedin: "https://linkedin.com/in/mrbuddhu"
    },
    {
      name: "msbuddhu",
      role: "Design Lead & Co-founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "msbuddhu is a creative powerhouse with a keen eye for design and user experience. As the Design Lead of Sanganak, she ensures that all our products are not only functional but also aesthetically pleasing and user-friendly.",
      twitter: "https://twitter.com/msbuddhu",
      linkedin: "https://linkedin.com/in/msbuddhu"
    }
  ]

  const AnimatedSection = ({ children, id }: { children: React.ReactNode; id: string }) => {
    const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.1,
    })

    return (
      <motion.section
        id={id}
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.section>
    )
  }

  const SplineCard = ({ children }: { children: React.ReactNode }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <motion.div
          animate={{
            rotateX: isHovered ? 5 : 0,
            rotateY: isHovered ? 5 : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-lg shadow-lg"
        >
          {children}
        </motion.div>
      </motion.div>
    )
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleTestimonialChange = (direction: 'prev' | 'next') => {
    setActiveTestimonial(prev => {
      if (direction === 'prev') {
        return prev === 0 ? testimonials.length - 1 : prev - 1
      } else {
        return prev === testimonials.length - 1 ? 0 : prev + 1
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    console.log("Form submitted with data:", data)
  }

  const scrollToHero = () => {
    const heroSection = document.getElementById('hero')
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-gradient-to-b from-purple-100 to-indigo-100'}`}>
      <nav className="sticky top-0 z-20 backdrop-blur-lg bg-white/10 dark:bg-gray-800/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <div 
                onClick={scrollToHero}
                className="bg-purple-600 text-white px-3 py-1 rounded cursor-pointer"
              >
                <span className="text-lg font-semibold">SANGANAK</span>
              </div>
            </Link>
            <div className="hidden md:flex space-x-4">
              {menuItems.map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-indigo-800 dark:text-indigo-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'font-bold' : ''
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
            <div className="flex items-center">
              <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="mr-2">
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
                <Menu />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full px-4 py-2 text-left text-indigo-800 dark:text-indigo-300 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
                >
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple-500 z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      <main className="relative">
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="/placeholder.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <motion.div 
            className="absolute inset-0 bg-black"
            style={{ opacity }}
          ></motion.div>

          <motion.div
            className="absolute w-64  h-64 bg-gradient-to-r from-purple-500  to-pink-500 rounded-full opacity-50 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              x: [0, 100, -100, 0],
              y: [0, -100, 100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          <div className="relative z-10 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {showSanganak && (
                <motion.h1 
                  className="text-7xl font-extrabold mb-4 font-sans bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <span className="font-black text-8xl tracking-tighter" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    SANGANAK
                  </span>
                </motion.h1>
              )}
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTagline}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration:  0.3 }}
                  className="text-2xl mb-6 font-sans text-gray-300 font-bold"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {taglines[currentTagline]}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </div>
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          >
            <Mouse className="w-8 h-8 text-white" />
          </motion.div>
        </section>

        <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
          <AnimatedSection id="about">
            <SplineCard>
              <Card className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md shadow-lg overflow-hidden mb-16">
                <CardContent className="p-6">
                  <h2 className="text-3xl font-bold text-center text-indigo-800 dark:text-indigo-300 mb-8">About Sanganak</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div>
                      <p className="text-indigo-800 dark:text-indigo-300 mb-4">
                        Sanganak is a Bihar-based bootstrap startup established in July 2021. We are a passionate team of IT professionals dedicated to providing cutting-edge technology solutions to businesses of all sizes.
                      </p>
                      <p className="text-indigo-800 dark:text-indigo-300 mb-4">
                        Our mission is to help businesses thrive in the digital age by delivering innovative, scalable, and efficient IT solutions. Since our inception, we've been consistently delivering high-quality services across various domains including web and mobile app development, UI/UX design, blockchain technology, and AI solutions.
                      </p>
                      <p className="text-indigo-800 dark:text-indigo-300 mb-8">
                        At Sanganak, we believe in the power of technology to transform businesses and improve lives. Our team of skilled professionals is committed to staying at the forefront of technological advancements, ensuring that our clients always receive the most up-to-date and effective solutions for their needs.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {founders.map((founder) => (
                        <Card key={founder.name} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm shadow-md overflow-hidden">
                          <CardContent className="p-6">
                            <div className="flex flex-col items-center mb-4">
                              <Image
                                src={founder.image}
                                alt={founder.name}
                                width={150}
                                height={150}
                                className="rounded-full mb-4"
                              />
                              <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300">{founder.name}</h3>
                              <p className="text-sm text-indigo-600 dark:text-indigo-400">{founder.role}</p>
                            </div>
                            <p className="text-sm text-indigo-800 dark:text-indigo-300 mb-4">{founder.bio}</p>
                            <div className="flex justify-center space-x-4">
                              <Button variant="outline" size="icon" className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm" asChild>
                                <a href={founder.twitter} target="_blank" rel="noopener noreferrer">
                                  <Twitter className="h-4 w-4" />
                                  <span className="sr-only">Twitter</span>
                                </a>
                              </Button>
                              <Button variant="outline" size="icon" className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm" asChild>
                                <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                                  <Linkedin className="h-4 w-4" />
                                  <span className="sr-only">LinkedIn</span>
                                </a>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SplineCard>
          </AnimatedSection>

          <AnimatedSection id="services">
            <SplineCard>
              <Card className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md shadow-lg mb-16">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-indigo-800 dark:text-indigo-300">Our Services</CardTitle>
                  <CardDescription className="text-center">
                    Comprehensive IT solutions for your business needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                      <motion.div
                        key={service.name}
                        className="relative overflow-hidden rounded-lg"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <SplineCard>
                          <Card className="h-full bg-gradient-to-br from-purple-50/80 to-indigo-50/80 dark:from-purple-900/80 dark:to-indigo-900/80 backdrop-blur-sm hover:shadow-md transition-shadow">
                            <CardContent className="flex flex-col items-center justify-center h-full p-6">
                              <service.icon className="w-12 h-12 text-purple-500 dark:text-purple-400 mb-4" />
                              <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300 text-center">{service.name}</h3>
                            </CardContent>
                          </Card>
                        </SplineCard>
                        <motion.div 
                          className="absolute inset-0 bg-purple-600/90 dark:bg-purple-800/90 backdrop-blur-sm flex items-center justify-center p-6"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-sm text-white text-center">{service.description}</p>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </SplineCard>
          </AnimatedSection>

          <AnimatedSection id="portfolio">
            <SplineCard>
              <Card className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md shadow-lg mb-16">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-indigo-800 dark:text-indigo-300">Our Portfolio</CardTitle>
                  <CardDescription className="text-center">
                    Explore our latest projects across various domains
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="designs" className="w-full">
                    <TabsList className="grid w-full grid-cols-5">
                      <TabsTrigger value="designs">Designs</TabsTrigger>
                      <TabsTrigger value="web">Web</TabsTrigger>
                      <TabsTrigger value="mobile">Mobile</TabsTrigger>
                      <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
                      <TabsTrigger value="ai">AI</TabsTrigger>
                    </TabsList>
                    {Object.entries(portfolioItems).map(([category, items]) => (
                      <TabsContent key={category} value={category}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {items.map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <SplineCard>
                                <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
                                  <CardContent className="p-4">
                                    <Image
                                      src={item.image}
                                      alt={item.title}
                                      width={300}
                                      height={200}
                                      className="w-full h-40 object-cover rounded-md mb-2"
                                    />
                                    <h3 className="text-sm font-semibold text-indigo-800 dark:text-indigo-300">{item.title}</h3>
                                  </CardContent>
                                </Card>
                              </SplineCard>
                            </motion.div>
                          ))}
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>
            </SplineCard>
          </AnimatedSection>

          <AnimatedSection id="testimonials">
            <SplineCard>
              <Card className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md shadow-lg mb-16">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-indigo-800 dark:text-indigo-300">Testimonials</CardTitle>
                  <CardDescription className="text-center">
                    Hear from our satisfied clients about their experiences working with us
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
                      onClick={() => handleTestimonialChange('prev')}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <div className="overflow-hidden">
                      <motion.div
                        className="flex"
                        initial={false}
                        animate={{ x: `-${activeTestimonial * 100}%` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        {testimonials.map((testimonial, index) => (
                          <div key={index} className="w-full flex-shrink-0 px-4">
                            <Card className="h-full bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-indigo-900/80 dark:to-purple-900/80 backdrop-blur-sm">
                              <CardContent className="p-6 flex flex-col h-full">
                                <p className="text-indigo-800 dark:text-indigo-300 mb-4">{testimonial.content}</p>
                                <div className="flex items-center mt-auto">
                                  <div className="w-10 h-10 rounded-full bg-purple-200 dark:bg-purple-700 flex items-center justify-center mr-3">
                                    <span className="text-purple-700 dark:text-purple-200 font-bold">{testimonial.name[0]}</span>
                                  </div>
                                  <div>
                                    <p className="font-semibold text-purple-600 dark:text-purple-400">{testimonial.name}</p>
                                    <p className="text-sm text-indigo-600 dark:text-indigo-400">{testimonial.role}</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        ))}
                      </motion.div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
                      onClick={() => handleTestimonialChange('next')}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </div>
                  <div className="flex justify-center mt-4">
                    {testimonials.map((_, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="sm"
                        className={`w-2 h-2 rounded-full mx-1 ${
                          index === activeTestimonial ? 'bg-purple-500' : 'bg-gray-300'
                        }`}
                        onClick={() => setActiveTestimonial(index)}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </SplineCard>
          </AnimatedSection>

          <AnimatedSection id="contacts">
            <SplineCard>
              <Card className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md shadow-lg mb-16">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-indigo-800 dark:text-indigo-300">Contact Us</CardTitle>
                  <CardDescription className="text-center">
                    Get in touch with us for your IT needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <Input name="name" placeholder="Your Name" className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm" required />
                    <Input name="email" type="email" placeholder="Your Email" className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm" required />
                    <Textarea name="message" placeholder="Your Message" className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm" required />
                    <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </SplineCard>
          </AnimatedSection>
        </div>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-indigo-800 dark:text-indigo-300">Sanganak</h3>
              <p className="text-sm text-indigo-600 dark:text-indigo-400">Innovating the future</p>
                        </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-indigo-800 dark:text-indigo-300">Contact Us</h3>
              <p className="text-sm text-indigo-600 dark:text-indigo-400">Bihar, India 800001</p>
              <p className="text-sm text-indigo-600 dark:text-indigo-400">Phone: +91 123 456 7890</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-indigo-800 dark:text-indigo-300">Follow Us</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm">
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
            <p className="text-sm text-indigo-600 dark:text-indigo-400">
              Built with ❤️ by{" "}
              <a href="https://mrbuddhu.com" className="text-purple-600 dark:text-purple-400 hover:underline">@mrbuddhu</a> &{" "}
              <a href="https://msbuddhu.com" className="text-purple-600 dark:text-purple-400 hover:underline">@msbuddhu {" "}©️2021.</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}