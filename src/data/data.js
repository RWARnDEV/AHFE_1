export const marketplaceItems = [
  {
    id: 1,
    name: 'Vintage Leather Jacket',
    description: 'A stylish vintage leather jacket from the 80s. In great condition.',
    price: 75.00,
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Leather+Jacket',
    seller: 'John D.',
    postedDate: '2024-08-15',
  },
  {
    id: 2,
    name: 'Antique Wooden Chair',
    description: 'A beautifully crafted antique wooden chair. Perfect for collectors.',
    price: 120.00,
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Antique+Chair',
    seller: 'Jane S.',
    postedDate: '2024-08-14',
  },
  {
    id: 3,
    name: 'Set of Classic Novels',
    description: 'A collection of 10 classic novels, including works by Dickens and Austen.',
    price: 45.00,
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Classic+Novels',
    seller: 'Bookworm_123',
    postedDate: '2024-08-12',
  },
  {
    id: 4,
    name: 'Retro Bicycle',
    description: 'A charming retro-style bicycle with a basket. Rides smoothly.',
    price: 90.00,
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Retro+Bicycle',
    seller: 'CycleFan',
    postedDate: '2024-08-10',
  },
];

export const userAddableItems = [
    {
        id: 101,
        name: 'Handmade Pottery Vase',
        description: 'A unique, handmade pottery vase with a rustic glaze. Perfect for home decor.',
        price: 35.00,
        imageUrl: 'https://via.placeholder.com/300x200.png?text=Pottery+Vase',
        seller: 'CurrentUser',
        postedDate: new Date().toISOString().slice(0, 10),
    },
    {
        id: 102,
        name: 'Acoustic Guitar',
        description: 'A full-sized acoustic guitar, great for beginners. Comes with a case.',
        price: 80.00,
        imageUrl: 'https://via.placeholder.com/300x200.png?text=Acoustic+Guitar',
        seller: 'CurrentUser',
        postedDate: new Date().toISOString().slice(0, 10),
    },
];
