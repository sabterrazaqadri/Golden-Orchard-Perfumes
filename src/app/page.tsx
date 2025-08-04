import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import Hero from '@/app/components/sections/Hero'
import FeaturedProducts from '@/app/components/sections/FeaturedProducts'
import Testimonials from '@/app/components/sections/Testimonials'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <FeaturedProducts />
        <Testimonials />
      </main>
    </>
  )
} 