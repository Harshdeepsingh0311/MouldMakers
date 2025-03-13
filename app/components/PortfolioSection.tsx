"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function PortfolioSection() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    { name: "Automotive Part", image: "/placeholder.svg", description: "Custom moulded automotive component" },
    { name: "Medical Device", image: "/placeholder.svg", description: "3D printed prototype for a medical device" },
    { name: "Consumer Product", image: "/placeholder.svg", description: "Mass-produced consumer product mould" },
  ]

  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text inline-block">Our Portfolio</h2>
          <div className="mt-4 mx-auto max-w-[700px]">
            <p className="text-muted-foreground">
              Explore our recent projects and see how we've helped our clients bring their ideas to life.
            </p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <Card className="overflow-hidden border-none shadow-lg">
            <CardContent className="p-0">
              <div className="relative aspect-video">
                <Image
                  src={projects[activeProject].image || "/placeholder.svg"}
                  alt={projects[activeProject].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{projects[activeProject].name}</h3>
                <p className="text-muted-foreground">{projects[activeProject].description}</p>
              </div>
            </CardContent>
          </Card>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <Button
                key={index}
                onClick={() => setActiveProject(index)}
                variant={activeProject === index ? "default" : "outline"}
                className={`w-full justify-start ${
                  activeProject === index ? "" : "hover:border-primary hover:text-primary"
                }`}
              >
                {project.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

