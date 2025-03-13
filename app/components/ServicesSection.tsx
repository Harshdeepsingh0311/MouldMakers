import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Printer, Shapes, CuboidIcon as Cube } from "lucide-react"

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text inline-block">Our Services</h2>
          <div className="mt-4 mx-auto max-w-[700px]">
            <p className="text-muted-foreground">
              We offer a comprehensive range of moulding and 3D printing services to meet your manufacturing needs.
            </p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Printer className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>3D Printing</CardTitle>
              <CardDescription>Rapid prototyping and small-scale production</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our state-of-the-art 3D printing technology allows for quick turnaround times and precision
                manufacturing of complex parts. We offer a wide range of materials and finishes to suit your specific
                needs.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Shapes className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle>Injection Moulding</CardTitle>
              <CardDescription>High-volume production of plastic parts</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                We specialize in creating high-quality injection moulds for mass production of plastic components across
                various industries. Our expert team ensures optimal design for manufacturability and efficiency.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Cube className="w-6 h-6 text-accent" />
              </div>
              <CardTitle>Custom Mould Design</CardTitle>
              <CardDescription>Tailored solutions for unique projects</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our expert team can design and manufacture custom moulds to meet your specific requirements, ensuring
                optimal performance and efficiency. We work closely with you to bring your ideas to life.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

