"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Link from 'next/dist/client/link'

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden ">
      {/* Background gradient effects */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gold to-accent opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-2xl lg:mx-0"
            >
              <h1 className="heading-1">
                Experience the{' '}
                <span className="text-gradient">Divine Essence</span>
                {' '}of Luxury
              </h1>
              <p className="mt-6 text-lg leading-8 text-cream/80">
                Discover our exclusive collection of handcrafted perfumes, where timeless elegance meets
                modern sophistication. Each fragrance tells a unique story of passion, artistry, and
                unparalleled craftsmanship.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link href="/products"><Button size="lg">
                  Explore Collection
                </Button></Link>
                <Link href="#about"><Button variant="secondary" size="lg">
                  Learn More
                </Button></Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto w-full max-w-xl lg:mx-0"
            >
              {/* Placeholder for perfume bottle image - replace src with actual image */}
              <div className="aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-b from-gold/20 to-transparent">
                <div className="relative h-full w-full">
                  <Image
                    src="/noble.jpg"
                    alt="Luxury perfume bottle"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-gold/20 blur-2xl" />
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Bottom gradient effect */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-gold to-accent opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
} 