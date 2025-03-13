import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PortfolioSection from '../components/PortfolioSection'

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">Our Portfolio</h1>
          <PortfolioSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

