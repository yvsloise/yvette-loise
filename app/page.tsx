'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Award, ChevronDown, FolderOpen, ExternalLink } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function HomePage() {
  const experiences = [
    {
      title: "Quality Analyst",
      company: "Turo",
      period: "2022 - 2025",
      points: [
        "Monitored customer service interactions for quality and compliance",
        "Delivered feedback and coaching to improve negotiation and communication strategies",
        "Prepared quality reports and maintained data accuracy in tracking systems"
      ]
    },
    {
      title: "Sales Representative",
      company: "Verizon",
      period: "2021 - 2022",
      points: [
        "Promoted and sold Verizon's mobile and internet products to new and existing customers",
        "Negotiated contracts, handled objections, and secured repeat business",
        "Ensured accurate processing of sales orders and account information"
      ]
    },
    {
      title: "Customer Support",
      company: "DirecTV",
      period: "2020 - 2021",
      points: [
        "Handled inbound/outbound communication, focusing on sales negotiation and upselling",
        "Resolved billing and technical concerns while maintaining high customer satisfaction",
        "Executed accurate data entry in CRM systems for all service requests"
      ]
    }
  ];

  const skills = [
    { name: "CRM Tools", category: "tools" },
    { name: "Google Suite", category: "tools" },
    { name: "Adobe InDesign", category: "creative" },
    { name: "Adobe Photoshop", category: "creative" },
    { name: "Adobe Lightroom", category: "creative" },
    { name: "Trello", category: "tools" },
    { name: "Canva", category: "creative" },
    { name: "Figma", category: "creative" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F8F6] to-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#AAC4F5] rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#AAC4F5] rounded-full blur-3xl opacity-30" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center relative z-10 max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="text-[#8CA9FF] font-medium tracking-widest text-sm uppercase">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight"
          >
            Yvette Loise Lastica
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-slate-500 font-light mb-8"
          >
            Quality Analyst • Graphic Designer
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 text-sm text-slate-600"
          >
            <a href="mailto:yvettelastica@gmail.com" className="flex items-center gap-2 hover:text-[#8CA9FF] transition-colors">
              <Mail className="w-4 h-4" />
              yvettelastica@gmail.com
            </a>
            <a href="tel:+639955054098" className="flex items-center gap-2 hover:text-[#8CA9FF] transition-colors">
              <Phone className="w-4 h-4" />
              +639955054098
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Quezon City, Philippines
            </span>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-900 text-white rounded-full px-8"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discover More
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="text-[#8CA9FF] font-medium tracking-widest text-sm uppercase">
            About Me
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-black mt-3 mb-8">
            Professional Summary
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
            Results-driven professional with <span className="text-[#8CA9FF] font-semibold">5+ years of experience</span> supporting
            global accounts in customer service, sales negotiation, and quality analysis. Adept at managing data entry with precision,
            conducting effective email outreach, and negotiating client solutions that drive retention. Recognized for
            <span className="text-black font-medium"> accuracy, professionalism,</span> and the ability to exceed performance
            targets in high-pressure environments.
          </motion.p>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F9F8F6]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-3">
              <Briefcase className="w-5 h-5 text-[#8CA9FF]" />
              <span className="text-[#8CA9FF] font-medium tracking-widest text-sm uppercase">Career</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-black mb-12">
              Work Experience
            </motion.h2>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-black text-white p-6 md:p-8 md:w-64 flex-shrink-0">
                        <p className="text-[#AAC4F5] text-sm font-medium mb-2">{exp.period}</p>
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-gray-300">{exp.company}</p>
                      </div>
                      <div className="p-6 md:p-8 flex-1">
                        <ul className="space-y-3">
                          {exp.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-700">
                              <div className="w-1.5 h-1.5 bg-[#8CA9FF] rounded-full mt-2.5 flex-shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-3">
              <Award className="w-5 h-5 text-[#8CA9FF]" />
              <span className="text-[#8CA9FF] font-medium tracking-widest text-sm uppercase">Expertise</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-black mb-12">
              Core Skills
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-white border border-gray-200 text-gray-700 hover:bg-[#AAC4F5]/20 hover:border-[#AAC4F5] hover:text-[#8CA9FF] transition-colors cursor-default"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F9F8F6]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-3">
              <FolderOpen className="w-5 h-5 text-[#8CA9FF]" />
              <span className="text-[#8CA9FF] font-medium tracking-widest text-sm uppercase">Work Samples</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-black mb-6">
              Public Portfolio
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-8 max-w-2xl">
              Explore my collection of work showcasing my design skills, projects, and creative accomplishments.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-lg max-w-2xl overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <a
                    href="https://drive.google.com/file/d/1OP7jENROOrzjjRgEvdoIW3Y8YrSwIJYX/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-6 md:p-8"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#AAC4F5] to-[#8CA9FF] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <FolderOpen className="w-8 h-8 text-white" />
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-xl font-bold text-black group-hover:text-[#8CA9FF] transition-colors">
                        View My Portfolio
                      </h3>
                      <p className="text-slate-500 mt-1">
                        Design work, graphics, and creative projects
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-[#8CA9FF] transition-colors" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Carousel Section */}
      <section className="py-24 px-6 overflow-hidden bg-gradient-to-b from-white to-[#F9F8F6]">
        <div className="max-w-6xl mx-auto mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-3">
              <FolderOpen className="w-5 h-5 text-[#8CA9FF]" />
              <span className="text-[#8CA9FF] font-medium tracking-widest text-sm uppercase">Showcase</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-black mb-4">
              Featured Projects
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 max-w-2xl">
              A collection of my creative work spanning graphic design, videography, and digital media.
            </motion.p>
          </motion.div>
        </div>

        {/* Infinite Carousel */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F9F8F6] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -2000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {/* First set of images */}
            {[
              { name: 'ABOUT.svg', title: 'About Me' },
              { name: 'COVERS.svg', title: 'Cover Designs' },
              { name: 'EXPERIENCE.svg', title: 'Experience' },
              { name: 'GRAPHIC SKILLS.svg', title: 'Graphic Skills' },
              { name: 'LATEST ENDEAVOUR.svg', title: 'Latest Projects' },
              { name: 'LIGHTROOM AND PS SAMPLES.svg', title: 'Photo Editing' },
              { name: 'MORE SAMPLES.svg', title: 'More Samples' },
              { name: 'OWN SAMPLES.svg', title: 'Personal Work' },
              { name: 'PNA SAMPLES - VIDEOGRAMS.svg', title: 'Videograms' },
              { name: 'PNA SAMPLES 2.svg', title: 'PNA Samples Vol. 2' },
              { name: 'PNA SAMPLES.svg', title: 'PNA Samples' },
              { name: 'SIDE HUSTLES.svg', title: 'Side Projects' },
            ].map((project, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-[400px] h-[300px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group relative bg-white"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={`/assets/${project.name}`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-xl">{project.title}</h3>
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless infinite scroll */}
            {[
              { name: 'ABOUT.svg', title: 'About Me' },
              { name: 'COVERS.svg', title: 'Cover Designs' },
              { name: 'EXPERIENCE.svg', title: 'Experience' },
              { name: 'GRAPHIC SKILLS.svg', title: 'Graphic Skills' },
              { name: 'LATEST ENDEAVOUR.svg', title: 'Latest Projects' },
              { name: 'LIGHTROOM AND PS SAMPLES.svg', title: 'Photo Editing' },
              { name: 'MORE SAMPLES.svg', title: 'More Samples' },
              { name: 'OWN SAMPLES.svg', title: 'Personal Work' },
              { name: 'PNA SAMPLES - VIDEOGRAMS.svg', title: 'Videograms' },
              { name: 'PNA SAMPLES 2.svg', title: 'PNA Samples Vol. 2' },
              { name: 'PNA SAMPLES.svg', title: 'PNA Samples' },
              { name: 'SIDE HUSTLES.svg', title: 'Side Projects' },
            ].map((project, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-[400px] h-[300px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group relative bg-white"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={`/assets/${project.name}`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-xl">{project.title}</h3>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-3">
              <GraduationCap className="w-5 h-5 text-[#8CA9FF]" />
              <span className="text-[#8CA9FF] font-medium tracking-widest text-sm uppercase">Education</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-black mb-8">
              Academic Background
            </motion.h2>

            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-lg max-w-2xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#AAC4F5]/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-[#8CA9FF]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black">National University</h3>
                      <p className="text-[#8CA9FF] font-medium">Bachelor&apos;s Degree • 2019</p>
                      <p className="text-slate-600 mt-2">
                        AB Linguistics — Emphasized language analysis, communication strategies, and persuasive writing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-black mb-6">
            Let&apos;s Work Together
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities and how I can contribute to your team&apos;s success.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#8CA9FF] hover:bg-[#8CA9FF]/90 text-white rounded-full px-8"
              asChild
            >
              <a href="mailto:yvettelastica@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-[#F9F8F6] rounded-full px-8"
              asChild
            >
              <a href="tel:+639955054098">
                <Phone className="w-4 h-4 mr-2" />
                Call Me
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-200">
        <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm">
          <p>© 2025 Yvette Loise Lastica. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}