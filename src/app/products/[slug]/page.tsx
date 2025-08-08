'use client'

import { products } from '@/lib/product'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useCartStore } from '@/lib/store/cart'
import { toast } from 'sonner'
import * as React from 'react'

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  // ✅ unwrap params Promise
  const { slug } = React.use(params)

  const product = products.find((p) => p.slug === slug)

  if (!product) return notFound()

  const addToCart = useCartStore((state: any) => state.addToCart)

  const handleAddToCart = () => {
    addToCart(product)
    toast.success(`${product.name} added to cart!`)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#111827] to-[#0f172a] text-cream px-4 py-12">
      <div className="container-custom">
        <Link
          href="/products"
          className="inline-flex items-center text-cream/70 hover:text-gold transition mb-10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-800">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="heading-1 mb-4">{product.name}</h1>
              <p className="text-lg text-cream/80 leading-relaxed mb-6">
                {product.description}
              </p>
              <div className="text-2xl font-semibold text-gold mb-4">
                {product.price}
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn-primary self-start">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
