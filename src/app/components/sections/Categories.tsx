"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from '../ui/Container'

const categories = [
  {
    name: 'Attars',
    href: '/shop/attars',
    description: 'Traditional concentrated perfume oils crafted with precious ingredients.',
    imageSrc: '/images/categories/attars.png',
  },
  {
    name: 'French Perfumes',
    href: '/shop/french-perfumes',
    description: 'Elegant fragrances inspired by classic French perfumery.',
    imageSrc: '/images/categories/french.png',
  },
  {
    name: 'Gift Sets',
    href: '/shop/gift-sets',
    description: 'Curated collections perfect for special occasions.',
    imageSrc: '/images/categories/gift-sets.png',
  },
  {
    name: 'Exclusive Editions',
    href: '/shop/exclusive',
    description: 'Limited release fragrances for the distinguished collector.',
    imageSrc: '/images/categories/exclusive.png',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
}

export default function Categories() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl">
          <h2 className="heading-2">Explore Our Collections</h2>
          <p className="mt-4 text-lg text-cream/80">
            Discover our diverse range of fragrances, each crafted to perfection and designed to evoke
            unique emotions and memories.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category) => (
            <motion.div
              key={category.name}
              variants={item}
              className="group relative overflow-hidden rounded-2xl bg-primary-light"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  src={category.imageSrc}
                  alt={category.name}
                  width={500}
                  height={600}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div>
                  <h3 className="font-display text-xl text-gold">
                    <Link href={category.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {category.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-cream/80">{category.description}</p>
                </div>
                <div className="mt-4">
                  <Link
                    href={category.href}
                    className="text-sm font-semibold text-gold hover:text-gold-light"
                  >
                    Shop now <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
} 