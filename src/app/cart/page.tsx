// app/cart/page.tsx
'use client';

import { useCartStore } from '@/lib/store/cart';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart } = useCartStore();

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link href="/" className="underline">Go shopping</Link></p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.slug} className="flex items-center gap-6 p-4 bg-neutral-800 rounded-xl">
              <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-lg" />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-neutral-400">Rs. {item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.slug)}
                className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
