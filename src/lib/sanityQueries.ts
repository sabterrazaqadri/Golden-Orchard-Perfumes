import { sanityClient } from './sanityClient'

export async function getCategories() {
  return sanityClient.fetch(`*[_type == "category"] | order(title asc) { _id, title, slug, description, image }`)
}

export async function getProducts({ categorySlug }: { categorySlug?: string } = {}) {
  const filter = categorySlug ? `&& category->slug.current == "${categorySlug}"` : ''
  return sanityClient.fetch(`*[_type == "product" ${filter}] | order(_createdAt desc) {
    _id, title, slug, description, price, images, featured, stock, category->{_id, title, slug}
  }`)
}
