'use client'
import { useCartStore } from '@/lib/store/cart'
import Image from 'next/image'
import Link from 'next/link'

export default function CartPage() {
  const { items, removeFromCart, clearCart, getTotal } = useCartStore()

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#111827] to-[#0f172a] text-cream pt-24 pb-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gold">Your Cart</h1>
        {items.length === 0 ? (
          <div>
            <p className="mb-6">Your cart is empty.</p>
            <Link href="/products" className="text-gold underline">Continue Shopping</Link>
          </div>
        ) : (
          <>
            <ul className="divide-y divide-cream/10 mb-8">
              {items.map(item => (
                <li key={item.id} className="flex items-center py-4 gap-4">
                  <Image src={item.image} alt={item.name} width={64} height={64} className="rounded-lg" />
                  <div className="flex-1">
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-cream/70">Qty: {item.quantity}</div>
                    <div className="text-sm text-cream/70">Price: Rs. {item.price}</div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-600"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mb-6">
              <div className="text-xl font-bold">Total: Rs. {getTotal()}</div>
              <button
                onClick={clearCart}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Clear Cart
              </button>
            </div>
            <button className="bg-gold text-black px-6 py-3 rounded font-semibold hover:bg-gold/90 transition">
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </main>
  )
}