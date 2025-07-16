export const PRODUCT_IMAGES = {
  // Sarees
  silkBaranasiSaree: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg',
  cottonHandloomSaree: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
  georgetteSaree: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg',
  chiffonSaree: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
  kanjivaramSaree: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
  netSaree: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
  
  // Kurtis
  embroideredKurti: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg',
  silkKurti: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg',
  cottonKurti: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
  georgettKurti: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg',
  rayonKurti: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
  chiffonKurti: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
  
  // Casuals
  casualTop: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
  casualDress: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg',
  casualShirt: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg',
  casualTunic: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
  casualBlouse: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg',
  casualWear: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
  
  // Traditional Wear
  anarkaliSuit: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
  lehenga: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
  sharara: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg',
  palazzo: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg',
  
  // Kids Wear
  kidsPartyDress: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
  kidsCasualWear: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg',
  kidsTraditional: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
};


export const HERO_IMAGES = [
  PRODUCT_IMAGES.silkBaranasiSaree,
  PRODUCT_IMAGES.embroideredKurti,
  PRODUCT_IMAGES.casualDress,
];

export const CATEGORY_IMAGES = {
  sarees: PRODUCT_IMAGES.silkBaranasiSaree,
  kurtis: PRODUCT_IMAGES.embroideredKurti,
  casuals: PRODUCT_IMAGES.casualDress,
  accessories: PRODUCT_IMAGES.anarkaliSuit,
};

export const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: 'Silk Banarasi Saree',
    price: '₹12,999',
    originalPrice: '₹15,999',
    image: PRODUCT_IMAGES.silkBaranasiSaree,
    category: 'Sarees',
    badge: 'Featured',
    description: 'Exquisite silk Banarasi saree with intricate golden work. Perfect for weddings and special occasions. Made with premium quality silk and traditional craftsmanship.',
    features: ['Pure Silk Fabric', 'Golden Zari Work', 'Traditional Design', 'Premium Quality'],
    sizes: ['Free Size'],
    colors: ['Gold', 'Red', 'Green', 'Blue']
  },
  {
    id: 2,
    name: 'Embroidered Cotton Kurti',
    price: '₹2,999',
    originalPrice: '₹3,999',
    image: PRODUCT_IMAGES.embroideredKurti,
    category: 'Kurtis',
    badge: 'New',
    description: 'Beautiful embroidered cotton kurti with comfortable fit. Perfect for daily wear and casual occasions. Features intricate embroidery work.',
    features: ['Cotton Fabric', 'Hand Embroidery', 'Comfortable Fit', 'Easy Care'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Blue', 'Pink', 'White', 'Yellow']
  },
  {
    id: 3,
    name: 'Casual Summer Dress',
    price: '₹1,999',
    originalPrice: '₹2,999',
    image: PRODUCT_IMAGES.casualDress,
    category: 'Casuals',
    badge: 'Sale',
    description: 'Comfortable casual summer dress perfect for everyday wear. Made with breathable fabric and modern design. Ideal for casual outings.',
    features: ['Breathable Fabric', 'Modern Design', 'Comfortable Fit', 'Easy Wash'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Grey', 'White']
  },
  {
    id: 4,
    name: 'Designer Anarkali Suit',
    price: '₹8,999',
    originalPrice: '₹11,999',
    image: PRODUCT_IMAGES.anarkaliSuit,
    category: 'Traditional',
    badge: 'Featured',
    description: 'Elegant designer Anarkali suit with flowing silhouette. Perfect for festive occasions and parties. Comes with matching dupatta.',
    features: ['Designer Cut', 'Flowing Silhouette', 'Matching Dupatta', 'Premium Fabric'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Pink', 'Blue', 'Green', 'Purple']
  },
  {
    id: 5,
    name: 'Cotton Handloom Saree',
    price: '₹3,999',
    originalPrice: '₹4,999',
    image: PRODUCT_IMAGES.cottonHandloomSaree,
    category: 'Sarees',
    badge: 'New',
    description: 'Traditional cotton handloom saree with authentic weaving. Perfect for daily wear and office. Comfortable and elegant.',
    features: ['Handloom Cotton', 'Traditional Weaving', 'Comfortable Wear', 'Authentic Design'],
    sizes: ['Free Size'],
    colors: ['Blue', 'Green', 'Maroon', 'Orange']
  },
  {
    id: 6,
    name: 'Casual Cotton Top',
    price: '₹1,499',
    originalPrice: '₹1,999',
    image: PRODUCT_IMAGES.casualTop,
    category: 'Casuals',
    badge: 'Sale',
    description: 'Comfortable cotton casual top perfect for everyday wear. Features modern cut and soft fabric. Great for pairing with jeans or trousers.',
    features: ['Soft Cotton', 'Modern Cut', 'Versatile Style', 'Easy Care'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Grey', 'Navy']
  }
];

export const PRODUCT_DETAILS = FEATURED_PRODUCTS.reduce((acc, product) => {
  acc[product.id] = product;
  return acc;
}, {} as Record<number, typeof FEATURED_PRODUCTS[0]>);

// Additional product data for category pages
export const SAREES_DATA = [
  {
    id: 101,
    name: 'Silk Banarasi Saree',
    price: 12999,
    originalPrice: 15999,
    image: PRODUCT_IMAGES.silkBaranasiSaree,
    category: 'Silk',
    color: 'Gold',
    fabric: 'Pure Silk'
  },
  {
    id: 102,
    name: 'Cotton Handloom Saree',
    price: 3999,
    originalPrice: 4999,
    image: PRODUCT_IMAGES.cottonHandloomSaree,
    category: 'Cotton',
    color: 'Blue',
    fabric: 'Cotton'
  },
  {
    id: 103,
    name: 'Georgette Party Saree',
    price: 5999,
    originalPrice: 7999,
    image: PRODUCT_IMAGES.georgetteSaree,
    category: 'Georgette',
    color: 'Pink',
    fabric: 'Georgette'
  },
  {
    id: 104,
    name: 'Chiffon Designer Saree',
    price: 8999,
    originalPrice: 10999,
    image: PRODUCT_IMAGES.chiffonSaree,
    category: 'Chiffon',
    color: 'Red',
    fabric: 'Chiffon'
  },
  {
    id: 105,
    name: 'Kanjivaram Silk Saree',
    price: 18999,
    originalPrice: 22999,
    image: PRODUCT_IMAGES.kanjivaramSaree,
    category: 'Silk',
    color: 'Green',
    fabric: 'Pure Silk'
  },
  {
    id: 106,
    name: 'Net Embroidered Saree',
    price: 6999,
    originalPrice: 8999,
    image: PRODUCT_IMAGES.netSaree,
    category: 'Net',
    color: 'Purple',
    fabric: 'Net'
  }
];

export const KURTIS_DATA = [
  {
    id: 201,
    name: 'Embroidered Cotton Kurti',
    price: 2999,
    originalPrice: 3999,
    image: PRODUCT_IMAGES.embroideredKurti,
    category: 'Cotton',
    color: 'Blue',
    fabric: 'Cotton',
    sleeve: 'Full Sleeve'
  },
  {
    id: 202,
    name: 'Silk Printed Kurti',
    price: 4999,
    originalPrice: 6999,
    image: PRODUCT_IMAGES.silkKurti,
    category: 'Silk',
    color: 'Pink',
    fabric: 'Silk',
    sleeve: '3/4 Sleeve'
  },
  {
    id: 203,
    name: 'Georgette Designer Kurti',
    price: 3499,
    originalPrice: 4999,
    image: PRODUCT_IMAGES.georgettKurti,
    category: 'Georgette',
    color: 'Red',
    fabric: 'Georgette',
    sleeve: 'Short Sleeve'
  },
  {
    id: 204,
    name: 'Rayon Casual Kurti',
    price: 1999,
    originalPrice: 2999,
    image: PRODUCT_IMAGES.rayonKurti,
    category: 'Rayon',
    color: 'Green',
    fabric: 'Rayon',
    sleeve: 'Sleeveless'
  },
  {
    id: 205,
    name: 'Chiffon Party Kurti',
    price: 5999,
    originalPrice: 7999,
    image: PRODUCT_IMAGES.chiffonKurti,
    category: 'Chiffon',
    color: 'Purple',
    fabric: 'Chiffon',
    sleeve: 'Full Sleeve'
  },
  {
    id: 206,
    name: 'Cotton Comfort Kurti',
    price: 2499,
    originalPrice: 3499,
    image: PRODUCT_IMAGES.cottonKurti,
    category: 'Cotton',
    color: 'White',
    fabric: 'Cotton',
    sleeve: '3/4 Sleeve'
  }
];

export const CASUALS_DATA = [
  {
    id: 301,
    name: 'Casual Summer Dress',
    price: 1999,
    originalPrice: 2999,
    image: PRODUCT_IMAGES.casualDress,
    category: 'Dresses',
    color: 'Blue',
    fabric: 'Cotton',
    type: 'Dress'
  },
  {
    id: 302,
    name: 'Cotton Casual Top',
    price: 1499,
    originalPrice: 1999,
    image: PRODUCT_IMAGES.casualTop,
    category: 'Tops',
    color: 'White',
    fabric: 'Cotton',
    type: 'Top'
  },
  {
    id: 303,
    name: 'Casual Cotton Shirt',
    price: 1799,
    originalPrice: 2499,
    image: PRODUCT_IMAGES.casualShirt,
    category: 'Shirts',
    color: 'Pink',
    fabric: 'Cotton',
    type: 'Shirt'
  },
  {
    id: 304,
    name: 'Casual Tunic',
    price: 2199,
    originalPrice: 2999,
    image: PRODUCT_IMAGES.casualTunic,
    category: 'Tunics',
    color: 'Grey',
    fabric: 'Rayon',
    type: 'Tunic'
  },
  {
    id: 305,
    name: 'Casual Blouse',
    price: 1699,
    originalPrice: 2299,
    image: PRODUCT_IMAGES.casualBlouse,
    category: 'Blouses',
    color: 'Black',
    fabric: 'Polyester',
    type: 'Blouse'
  },
  {
    id: 306,
    name: 'Casual Wear Set',
    price: 2999,
    originalPrice: 3999,
    image: PRODUCT_IMAGES.casualWear,
    category: 'Sets',
    color: 'Navy',
    fabric: 'Cotton Blend',
    type: 'Set'
  }
];

export const ACCESSORIES_DATA = [
  {
    id: 401,
    name: 'Traditional Bangles Set',
    price: 1999,
    originalPrice: 2999,
    image: PRODUCT_IMAGES.anarkaliSuit,
    category: 'Bangles',
    color: 'Gold',
    material: 'Brass'
  },
  {
    id: 402,
    name: 'Pearl Hair Accessories',
    price: 899,
    originalPrice: 1299,
    image: PRODUCT_IMAGES.lehenga,
    category: 'Hair Accessories',
    color: 'White',
    material: 'Pearl'
  },
  {
    id: 403,
    name: 'Embroidered Clutch Bag',
    price: 2499,
    originalPrice: 3499,
    image: PRODUCT_IMAGES.sharara,
    category: 'Bags',
    color: 'Pink',
    material: 'Silk'
  },
  {
    id: 404,
    name: 'Traditional Dupatta',
    price: 1799,
    originalPrice: 2499,
    image: PRODUCT_IMAGES.palazzo,
    category: 'Dupatta',
    color: 'Blue',
    material: 'Silk'
  }
];

// Helper functions for product management
export const addProductToCategory = (product: any): boolean => {
  const categoryMap: { [key: string]: any[] } = {
    'Sarees': SAREES_DATA,
    'Kurtis': KURTIS_DATA,
    'Casuals': CASUALS_DATA,
    'Accessories': ACCESSORIES_DATA
  };

  const targetArray = categoryMap[product.category];
  if (targetArray) {
    targetArray.push({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      category: product.category,
      color: product.colors?.[0] || 'Multi',
      fabric: product.fabric || 'Mixed',
      sleeve: product.sleeve,
      type: product.type,
      material: product.material
    });
    console.log(`Product added to ${product.category} category:`, product);
    return true;
  }
  console.error(`Category ${product.category} not found`);
  return false;
};

export const updateProductInCategory = (product: any): boolean => {
  const categoryMap: { [key: string]: any[] } = {
    'Sarees': SAREES_DATA,
    'Kurtis': KURTIS_DATA,
    'Casuals': CASUALS_DATA,
    'Accessories': ACCESSORIES_DATA
  };

  const targetArray = categoryMap[product.category];
  if (targetArray) {
    const index = targetArray.findIndex(p => p.id === product.id);
    if (index !== -1) {
      targetArray[index] = {
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        category: product.category,
        color: product.colors?.[0] || 'Multi',
        fabric: product.fabric || 'Mixed',
        sleeve: product.sleeve,
        type: product.type,
        material: product.material
      };
      console.log(`Product updated in ${product.category} category:`, product);
      return true;
    }
  }
  console.error(`Product ${product.id} not found in ${product.category} category`);
  return false;
};

export const removeProductFromCategory = (product: any): boolean => {
  const categoryMap: { [key: string]: any[] } = {
    'Sarees': SAREES_DATA,
    'Kurtis': KURTIS_DATA,
    'Casuals': CASUALS_DATA,
    'Accessories': ACCESSORIES_DATA
  };

  const targetArray = categoryMap[product.category];
  if (targetArray) {
    const index = targetArray.findIndex(p => p.id === product.id);
    if (index !== -1) {
      targetArray.splice(index, 1);
      console.log(`Product removed from ${product.category} category:`, product);
      return true;
    }
  }
  console.error(`Product ${product.id} not found in ${product.category} category`);
  return false;
};

