'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import { products } from '@/lib/product'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function FeaturedProducts() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="md:flex md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="heading-2">Featured Collection</h2>
            <p className="mt-4 text-lg text-cream/80">
              Discover our most sought-after fragrances, crafted with the finest ingredients from around
              the world.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/products"
              className="text-sm font-semibold leading-6 text-gold hover:text-gold-light"
            >
              Shop collection <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={item} className="group relative ">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gray-900">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={600}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  <div>
                    {/* <p className="text-sm text-gold">{product.category}</p> */}
                    <h3 className="mt-1 text-lg font-semibold text-cream">
                      <Link href={`/products/${product.slug}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                  </div>
                  <p className="text-base font-medium text-cream">{product.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
