import Footer from '@/Components/Footer'
import Hero from '@/Components/Hero'
import MidSection from '@/Components/MidSection'
import PreFooter from '@/Components/PreFooter'
import Projects from '@/Components/Projects'

export default function Home() {
  return (
    <main className="">
      <div className='w-fluid-width-1280 mx-auto'>
        <Hero />
        <Projects />
      </div>
      <MidSection />
      <PreFooter />
      <Footer />
    </main>
  )
}