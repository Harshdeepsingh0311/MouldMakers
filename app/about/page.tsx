import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                MouldMakers is a leading company in the field of mould making and 3D printing. With over 20 years of
                experience, we have been at the forefront of innovation in manufacturing technology.
              </p>
              <p className="mb-4">
                Our team of expert engineers and designers work tirelessly to provide cutting-edge solutions for various
                industries, including automotive, aerospace, consumer goods, and medical devices.
              </p>
              <p>
                We pride ourselves on our commitment to quality, precision, and customer satisfaction. Our state-of-the-art
                facilities and advanced technologies allow us to tackle complex projects with ease and efficiency.
              </p>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src="/placeholder.svg"
                alt="MouldMakers facility"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

