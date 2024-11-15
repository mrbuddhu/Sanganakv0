'use client'

import React, { useState, useCallback, useEffect, useRef } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Palette, Smartphone, Code, Cpu, Layout, LayoutGrid, Menu, Twitter, Linkedin, Instagram, Sun, Moon, Brain, ChevronLeft, ChevronRight, Github, Mouse, User, UserIcon as UserFemale, ArrowRight, PhoneIcon as WhatsApp } from 'lucide-react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const mailtoLink = `mailto:contact.sanganak@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="name"
        placeholder="Your Name"
        className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        name="email"
        type="email"
        placeholder="Your Email"
        className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Textarea
        name="message"
        placeholder="Your Message"
        className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">Send Message</Button>
    </form>
  )
}

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [showSanganak, setShowSanganak] = useState(true)
  const [currentTagline, setCurrentTagline] = useState(0)
  const [activePortfolioTab, setActivePortfolioTab] = useState("designs")
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
      videoRef.current.playbackRate = 0.75
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setShowSanganak(scrollPosition < 100)

      const sections = document.querySelectorAll("section[id]")
      let current = ""
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
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
      { title: "Brand Identity for Tech Startup", image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&h=200&fit=crop" },
      { title: "UI Design for E-commerce App", image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=300&h=200&fit=crop" },
      { title: "Infographic Design for Annual Report", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop" },
    ],
    web: [
      { title: "E-learning Platform", image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=300&h=200&fit=crop" },
      { title: "Real Estate Listing Website", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop" },
      { title: "Healthcare Management System", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=200&fit=crop" },
    ],
    mobile: [
      { title: "Fitness Tracking App", image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=300&h=200&fit=crop" },
      { title: "Food Delivery App", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=200&fit=crop" },
      { title: "Travel Planning App", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=200&fit=crop" },
    ],
    blockchain: [
      { title: "Decentralized Finance (DeFi) Platform", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=200&fit=crop" },
      { title: "NFT Marketplace", image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=300&h=200&fit=crop" },
      { title: "Supply Chain Tracking System", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=300&h=200&fit=crop" },
    ],
    ai: [
      { title: "AI-Powered Chatbot", image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=300&h=200&fit=crop" },
      { title: "Predictive Analytics Dashboard", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop" },
      { title: "Computer Vision for Quality Control", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=300&h=200&fit=crop" },
    ],
  }

  const founders = [
    {
      name: "mrbuddhu",
      role: "Dev Lead & Co-founder",
      icon: User,
      bio: "mrbuddhu is a passionate developer and tech enthusiast with years of experience in creating innovative solutions. As the Dev Lead of Sanganak, he drives the technical vision and ensures the delivery of high-quality products.",
      twitter: "https://twitter.com/_mrbuddhu_",
      linkedin: "https://linkedin.com/in/mrbuddhu"
    },
    {
      name: "msbuddhu",
      role: "Design Lead & Co-founder",
      icon: User,
      bio: "msbuddhu is a creative powerhouse with a keen eye for design and user experience. As the Design Lead of Sanganak, she ensures that all our products are not only functional but also aesthetically pleasing and user-friendly.",
      twitter: "https://twitter.com/msbuddhu",
      linkedin: "https://linkedin.com/in/msbuddhu"
    }
  ]

  const testimonials = [
    { name: "John Doe", role: "CEO, TechCorp", content: "Sanganak's expertise in blockchain technology helped us revolutionize our supply chain management. Their team's dedication and innovative solutions exceeded our expectations." },
    { name: "Jane Smith", role: "CTO, DesignHub", content: "The UI/UX design Sanganak created for our app was nothing short of brilliant. It significantly improved user engagement and satisfaction." },
    { name: "Alex Johnson", role: "Founder, EduTech", content: "Working with Sanganak on our e-learning platform was a game-changer. Their web development skills and attention to detail are unparalleled." },
    { name: "Emily Brown", role: "Marketing Director, GrowthCo", content: "Sanganak's AI solutions have transformed our marketing strategies. The insights we've gained have been invaluable for our business growth." },
    { name: "Michael Lee", role: "CIO, FinTech Innovations", content: "The mobile app Sanganak developed for us has received overwhelmingly positive feedback from our users. Their team's technical expertise and creativity are truly impressive." },
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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacts')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-gradient-to-b from-purple-100 to-indigo-100'}`}>
      <header>
        <nav className="sticky top-0 z-20 backdrop-blur-lg bg-white/10 dark:bg-gray-800/10 shadow-lg" aria-label="Main navigation">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center">
                <div 
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
      </header>

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
            <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <motion.div 
            className="absolute inset-0 bg-black"
            style={{ opacity }}
          ></motion.div>

          <motion.div
            className="absolute w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-50 blur-xl"
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

          <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {showSanganak && (
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 font-sans bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <span className="font-black tracking-tighter" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
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
                  transition={{ duration: 0.3 }}
                  className="text-lg sm:text-xl md:text-2xl mb-8 font-sans text-gray-300 font-bold"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {taglines[currentTagline]}
                </motion.p>
              </AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  onClick={scrollToContact}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 text-lg"
                >
                  Let's Start
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection id="about">
            <SplineCard>
              <Card className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md shadow-lg overflow-hidden mb-16">
                <CardContent className="p-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-800 dark:text-indigo-300 mb-8">About Sanganak</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div>
                      <p className="text-sm sm:text-base text-indigo-800 dark:text-indigo-300 mb-4">
                        Sanganak is a Bihar-based bootstrap startup established in July 2021. We are a passionate team of IT professionals dedicated to providing cutting-edge technology solutions to businesses of all sizes.
                      </p>
                      <p className="text-sm sm:text-base text-indigo-800 dark:text-indigo-300 mb-4">
                        Our mission is to help businesses thrive in the digital age by delivering innovative, scalable, and efficient IT solutions. Since our inception, we've been consistently delivering high-quality services across various domains including web and mobile app development, UI/UX design, blockchain technology, and AI solutions.
                      </p>
                      <p className="text-sm sm:text-base text-indigo-800 dark:text-indigo-300 mb-8">
                        At Sanganak, we believe in the power of technology to transform businesses and improve lives. Our team of skilled professionals is committed to staying at the forefront of technological advancements, ensuring that our clients always receive the most up-to-date and effective solutions for their needs.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {founders.map((founder) => (
                        <Card key={founder.name} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm shadow-md overflow-hidden">
                          <CardContent className="p-6">
                            <div className="flex flex-col items-center mb-4">
                              <founder.icon className="w-24 h-24 text-indigo-600 dark:text-indigo-400 mb-4" />
                              <h3 className="text-lg sm:text-xl font-semibold text-indigo-800 dark:text-indigo-300">{founder.name}</h3>
                              <p className="text-sm text-indigo-600 dark:text-indigo-400">{founder.role}</p>
                            </div>
                            <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300 mb-4">{founder.bio}</p>
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
                  <CardTitle className="text-2xl sm:text-3xl text-center text-indigo-800 dark:text-indigo-300">Our Services</CardTitle>
                  <CardDescription className="text-center text-sm sm:text-base">
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
                              <h3 className="text-base sm:text-lg font-semibold text-indigo-800 dark:text-indigo-300 text-center">{service.name}</h3>
                            </CardContent>
                          </Card>
                        </SplineCard>
                        <motion.div 
                          className="absolute inset-0 bg-purple-600/90 dark:bg-purple-800/90 backdrop-blur-sm flex items-center justify-center p-6"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-xs sm:text-sm text-white text-center">{service.description}</p>
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
                  <CardTitle className="text-2xl sm:text-3xl text-center text-indigo-800 dark:text-indigo-300">Our Portfolio</CardTitle>
                  <CardDescription className="text-center text-sm sm:text-base">
                    Explore our latest projects across various domains
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs value={activePortfolioTab} onValueChange={setActivePortfolioTab} className="w-full">
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
                  <CardTitle className="text-2xl sm:text-3xl text-center text-indigo-800 dark:text-indigo-300">Testimonials</CardTitle>
                  <CardDescription className="text-center text-sm sm:text-base">
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
                                <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300 mb-4 flex-grow">{testimonial.content}</p>
                                <div className="flex items-center justify-end">
                                  <div className="text-right">
                                    <p className="text-sm font-semibold text-indigo-800 dark:text-indigo-300">{testimonial.name}</p>
                                    <p className="text-xs text-indigo-600 dark:text-indigo-400">{testimonial.role}</p>
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
                </CardContent>
              </Card>
            </SplineCard>
          </AnimatedSection>

          <AnimatedSection id="contacts">
            <SplineCard>
              <Card className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md shadow-lg mb-16">
                <CardHeader>
                  <CardTitle className="text-2xl sm:text-3xl text-center text-indigo-800 dark:text-indigo-300">Contact Us</CardTitle>
                  <CardDescription className="text-center text-sm sm:text-base">
                    Get in touch with us for your IT needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                  <div className="mt-6 flex justify-center space-x-4">
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
                    <Button variant="outline" size="icon" className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm">
                      <WhatsApp className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </SplineCard>
          </AnimatedSection>
        </div>
      </main>

      <footer className="mt-12 text-center text-indigo-800 dark:text-indigo-300 pb-8 flex flex-col items-center space-y-2">
        <p className="text-sm">
          Built with love by{" "}
          <a href="https://mrbuddhu.com" className="text-purple-600 dark:text-purple-400 hover:underline">@mrbuddhu</a> &{" "}
          <a href="https://msbuddhu.com" className="text-purple-600 dark:text-purple-400 hover:underline">@msbuddhu</a>
        </p>
        <p className="text-xs text-indigo-600 dark:text-indigo-400">Est. 2021</p>
      </footer>
    </div>
  )
}