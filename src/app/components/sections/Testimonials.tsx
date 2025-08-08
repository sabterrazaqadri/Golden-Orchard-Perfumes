"use client"

import { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import Container from '../ui/Container'

import 'swiper/css'
import 'swiper/css/navigation'

const testimonials = [
  {
    content:
      'The attention to detail in crafting these fragrances is remarkable. Each perfume tells a unique story, and the Royal Musk Attar has become my signature scent.',
    author: {
      name: 'Sara Iqbal',
      role: 'Fashion Designer',
    },
  },
  {
    content:
      'Golden Orchard represents the pinnacle of luxury fragrance. The Midnight Rose is an absolute masterpiece that garners compliments wherever I go.',
    author: {
      name: 'Kareem Ahmed',
      role: 'Art Director',
    },
  },
  {
    content:
      'The Divine Collection Set was the perfect gift for my wife. The presentation is exquisite, and the fragrances are truly divine. Outstanding quality!',
    author: {
      name: 'Jawwad Khan',
      role: 'Executive',
    },
  },
  {
    content:
      'As a perfume enthusiast, I\'m impressed by the complexity and longevity of these fragrances. The Oud & Amber is particularly exceptional.',
    author: {
      name: 'Saima Malik',
      role: 'Beauty Influencer',
    },
  },
]

export default function Testimonials() {
  const swiperRef = useRef(null)

  return (
    <section className="relative overflow-hidden py-24 sm:py-32" id='about'>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-2">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-cream/80">
              Discover why discerning fragrance enthusiasts choose OWAIS TURABI PERFUMES for their
              signature scents.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-16"
        >
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-slider !overflow-visible"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full rounded-2xl bg-primary-light p-8">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <svg
                        className="h-8 w-8 text-gold"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="mt-4 text-base text-cream/90">{testimonial.content}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-x-4">
                      {/* <Image
                        className="h-10 w-10 rounded-full object-cover"
                        src={testimonial.author.image}
                        alt={testimonial.author.name}
                        width={40}
                        height={40}
                      /> */}
                      <div>
                        <div className="font-semibold text-cream">{testimonial.author.name}</div>
                        <div className="text-sm text-cream/80">{testimonial.author.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Container>
    </section>
  )
} 