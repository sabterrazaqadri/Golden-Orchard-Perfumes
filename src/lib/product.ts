// app/lib/products.ts

export const products = [
  {
    id: '1',
    name: 'Issey Miyake (Alpha)',
    slug: 'alpha',
    price: 'PKR 3,500',
    image: '/alpha.jpg',
    description: 'A fresh, modern scent with aquatic and woody notes.',
  },
  {
    id: '2',
    name: 'Burberry Body (Sandal Bloom)',
    slug: 'sandal-bloom',
    price: 'PKR 2,999',
    image: '/sandal.jpg',
    description: 'A soft, floral scent with creamy sandalwood and delicate blossoms.',
  },
  {
    id: '3',
    name: 'Bombshell (Nobel Lady)',
    slug: 'nobel-lady',
    price: 'PKR 3,999',
    image: '/noble.jpg',
    description: 'A bold, feminine fragrance with fruity freshness and a hint of floral allure.',
  },
  {
    id: '4',
    name: 'Gucci Flora (Florine)',
    slug: 'florine',
    price: 'PKR 4,999',
    image: '/florine.jpg',
    description: 'A delicate floral scent with soft, sweet notes that evoke elegance and charm.',
  },
  {
    id: '5',
    name: 'Aventus Fruity (Apex)',
    slug: 'apex',
    price: 'PKR 3,499',
    image: '/apex.jpg',
    description: 'A delicate floral scent with soft, sweet notes that evoke elegance and charm.',
  },
  {
    id: '6',
    name: 'Dunhil Desire (Titan)',
    slug: 'titan',
    price: 'PKR 1,999',
    image: '/titan.jpg',
    description: 'A bold, masculine fragrance with warm, woody notes that exude strength and confidence.',
  },
];


export function getProductBySlug(id: string) {
  return products.find((product) => product.id === id);
}
