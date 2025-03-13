import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 gradient-bg text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Precision Moulding & 3D Printing Solutions
              </h1>
              <p className="max-w-[600px] text-zinc-100 md:text-xl">
                Transforming ideas into reality with cutting-edge technology and expert craftsmanship.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-white text-primary hover:bg-zinc-100" asChild>
                <a href="#services">Explore Our Services</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="#portfolio">View Portfolio</a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-white rounded-full opacity-10 blur-xl"></div>
              <Image
                src="/placeholder.svg"
                alt="3D printed mould showcase"
                fill
                className="object-cover rounded-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

