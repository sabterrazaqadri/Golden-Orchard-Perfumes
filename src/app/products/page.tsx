'use client'


import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import Link from 'next/link'
import { products } from '@/lib/product'
import { useCartStore } from '@/lib/store/cart'
import { useRouter } from 'next/navigation'

export default function ProductsPage() {
  const addToCart = useCartStore(state => state.addToCart)
  const router = useRouter()

  const handleBuyNow = (product : any) => {
    addToCart(product, 1)
    router.push('/cart')
  }

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-primary to-primary-dark text-cream mt-6">
      <Container>
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gradient">Our Collection</h2>
          <p className="mt-4 text-lg text-cream/80">
            Explore our premium line of handcrafted perfumes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link key={product.id} href={`/products/${product.slug}`}>
                <div className="relative h-72 w-full cursor-pointer">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>

              <div className="p-6">
                <h3 className="heading-3 mb-2 line-clamp-1">{product.name}</h3>
                <p className="text-sm text-cream/70 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gold">{product.price}</span>
                  <Button size="sm" onClick={() => handleBuyNow(product)}>Buy Now</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
