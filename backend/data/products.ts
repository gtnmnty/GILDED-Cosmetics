import type { ProductItem } from "../types/products.ts";

export const products: ProductItem[] = [
  {
    id: 1,
    name: "Repair & Restore Shampoo",
    category: "Hair Care",
    price: "₱680",
    priceNum: 679.99,
    badge: "Best Seller",
    desc: "Protein-rich formula that rebuilds broken bonds and restores silky softness to damaged hair.",
    imgs: [
      "https://images.pexels.com/photos/13573921/pexels-photo-13573921.jpeg",
      "https://images.pexels.com/photos/13573923/pexels-photo-13573923.jpeg",
      "https://images.pexels.com/photos/13573918/pexels-photo-13573918.jpeg",
      "https://images.pexels.com/photos/13573920/pexels-photo-13573920.jpeg"
    ],
    info: [
      'This formula deeply cleanses while repairing damaged hair fibers.',
      'It is infused with keratin to strengthen every strand from root to tip.',
      'The sulfate-free blend prevents color fading and maintains natural moisture.',
      'Regular use leaves your hair feeling resilient and incredibly soft.'
    ],
    reviewCount: 1024,
    reviews: [
      { name: "Anika R.", stars: 5, date: "Mar 2025", text: "My hair is noticeably softer after just one wash. This is now a staple in my routine." },
      { name: "Diane L.", stars: 5, date: "Feb 2025", text: "Finally a shampoo that actually delivers on its promises. My split ends are much better." },
      { name: "Ysa M.", stars: 4, date: "Jan 2025", text: "Lovely scent and very gentle. My color-treated hair loves it." }
    ]
  },
  {
    id: 2,
    name: "Rose Gold Serum",
    category: "Skin Care",
    price: "₱1,450",
    priceNum: 1450,
    badge: "New Arrival",
    desc: "A featherlight serum with 24k gold micro-particles and rose hip oil for a luminous, plumped complexion.",
    imgs: [
      "https://images.pexels.com/photos/10825668/pexels-photo-10825668.jpeg",
      "https://images.pexels.com/photos/10825674/pexels-photo-10825674.jpeg",
      "https://images.pexels.com/photos/10825667/pexels-photo-10825667.jpeg",
      "https://images.pexels.com/photos/10825666/pexels-photo-10825666.jpeg"
    ],
    info: [
      'This lightweight oil provides an instant luminous glow to dull hair.',
      'It effectively tames frizz and flyaways even in high humidity.',
      'TThe non-greasy texture absorbs quickly without weighing hair down.',
      'Apply a small amount to damp or dry ends for a polished finish.'
    ],
    reviewCount: 1024,
    reviews: [
      { name: "Trisha V.", stars: 5, date: "Mar 2025", text: "My skin literally glows after using this. The texture is so luxurious and non-greasy." },
      { name: "Sophie A.", stars: 5, date: "Feb 2025", text: "Worth every peso. I've received so many compliments on my skin since I started using it." }
    ]
  },
  {
    id: 3,
    name: "Velvet Matte Lipstick",
    category: "Make Up",
    price: "₱520",
    priceNum: 519.99,
    badge: "Top Choice",
    desc: "Richly pigmented matte lip color that wears for 10 hours without drying or fading.",
    imgs: [
      "https://images.pexels.com/photos/36789212/pexels-photo-36789212.jpeg",
      "https://images.pexels.com/photos/34321279/pexels-photo-34321279.jpeg",
      "https://images.pexels.com/photos/7667674/pexels-photo-7667674.jpeg",
      "https://images.pexels.com/photos/31154612/pexels-photo-31154612.jpeg"
    ],
    info: [
      'This lipstick delivers high-pigment color with a single smooth swipe.',
      'The creamy formula dries down to a comfortable, non-drying matte finish.',
      'It is designed for long-lasting wear that stays vibrant all day.',
      'Available in a sophisticated range of shades to suit every skin tone.'
    ],
    reviewCount: 1024,
    reviews: [
      { name: "Lia S.", stars: 5, date: "Mar 2025", text: "The pigmentation is incredible and it doesn't dry out my lips at all. My go-to!" },
      { name: "Kim P.", stars: 5, date: "Feb 2025", text: "So many beautiful shades. This stays put all day without any touch-ups needed." },
      { name: "Mika T.", stars: 5, date: "Jan 2025", text: "Best matte lipstick I've ever tried. Comfortable to wear for a whole day." }
    ]
  },
  {
    id: 4,
    name: "Cuticle Restore Oil",
    category: "Nail Care",
    price: "₱380",
    priceNum: 379.99,
    badge: null,
    desc: "A blend of jojoba, vitamin E, and lavender oil that instantly heals dry, cracked cuticles.",
    imgs: [
      "https://images.pexels.com/photos/7321649/pexels-photo-7321649.jpeg",
      "https://images.pexels.com/photos/7321646/pexels-photo-7321646.jpeg",
      "https://images.pexels.com/photos/7321720/pexels-photo-7321720.jpeg",
      "https://images.pexels.com/photos/7321658/pexels-photo-7321658.jpeg"
    ],
    reviewCount: 1024,
    info: [
      'This nourishing oil penetrates deeply to heal dry and cracked skin.',
      'It is rich in essential vitamins to promote stronger nail growth.',
      'The convenient applicator allows for precise and mess-free daily use.',
      'Massaging this into your cuticles instantly revitalizes your entire manicure.'
    ],
    reviews: [
      { name: "Rosa G.", stars: 5, date: "Mar 2025", text: "My cuticles have never looked better. The lavender scent is so calming." },
      { name: "Abby C.", stars: 4, date: "Feb 2025", text: "Convenient pen applicator. Absorbs quickly and doesn't feel greasy at all." }
    ]
  },
  {
    id: 5,
    name: "Overnight Hair Mask",
    category: "Hair Care",
    price: "₱890",
    priceNum: 889.99,
    badge: "Staff Pick",
    desc: "Wake up to transformed, glossy hair with this rich overnight treatment packed with argan and shea.",
    imgs: [
      "https://images.pexels.com/photos/6767775/pexels-photo-6767775.jpeg",
      "https://images.pexels.com/photos/4841526/pexels-photo-4841526.jpeg",
      "https://images.pexels.com/photos/4841515/pexels-photo-4841515.jpeg",
      "https://images.pexels.com/photos/4841513/pexels-photo-4841513.jpeg"
    ],
    info: [
      'This formula deeply cleanses while repairing damaged hair fibers.',
      'It is infused with keratin to strengthen every strand from root to tip.',
      'The sulfate-free blend prevents color fading and maintains natural moisture.',
      'Regular use leaves your hair feeling resilient and incredibly soft.'
    ],
    reviewCount: 1024,
    reviews: [
      { name: "Carla N.", stars: 5, date: "Mar 2025", text: "I woke up with the softest, most manageable hair I've ever had. Absolutely magical." },
      { name: "Frances B.", stars: 5, date: "Feb 2025", text: "This is my holy grail. My frizzy hair is completely tamed after one night of use." }
    ]
  },
  {
    id: 6,
    name: "Brightening Eye Cream",
    category: "Skin Care",
    price: "₱1,100",
    priceNum: 1099.99,
    badge: "Top Rated",
    desc: "Clinically formulated to reduce dark circles and puffiness with caffeine and peptide complex.",
    imgs: [
      "https://images.pexels.com/photos/11935634/pexels-photo-11935634.jpeg",
      "https://images.pexels.com/photos/11935647/pexels-photo-11935647.jpeg",
      "https://images.pexels.com/photos/11935630/pexels-photo-11935630.jpeg",
      "https://images.pexels.com/photos/11935644/pexels-photo-11935644.jpeg"
    ],
    info: [
      'This targeted treatment visibly reduces the appearance of dark circles.',
      'It features caffeine to depuff tired eyes for a refreshed look.',
      'The hydrating formula smooths out fine lines and delicate skin texture.',
      'Gentle enough for daily use under makeup or as a night treatment.'
    ],
    reviewCount: 1024,
    reviews: [
      { name: "Ingrid V.", stars: 5, date: "Mar 2025", text: "My under-eye circles are visibly lighter after two weeks. I'm absolutely amazed." },
      { name: "Bea S.", stars: 5, date: "Feb 2025", text: "The cooling applicator tip feels amazing in the morning. My eyes look so much more awake." },
      { name: "Nica L.", stars: 4, date: "Jan 2025", text: "Gentle enough for sensitive skin and it actually works. A rare combination." }
    ]
  },
  {
    id: 7,
    name: 'Broad-Spectrum SPF 50',
    category: 'Skin Care',
    price: '₱980',
    priceNum: 980,
    badge: 'Essential',
    desc: 'A high-performance daily sunscreen that provides invisible protection against harmful UV rays.',
    imgs: [
      'https://images.pexels.com/photos/13534782/pexels-photo-13534782.jpeg',
      'https://images.pexels.com/photos/13534819/pexels-photo-13534819.jpeg',
      'https://images.pexels.com/photos/13534508/pexels-photo-13534508.jpeg',
      'https://images.pexels.com/photos/13534642/pexels-photo-13534642.jpeg'
    ],
    info: [
      'Offers advanced UVA and UVB protection.',
      'The formula is completely fragrance-free and non-comedogenic.',
      'It leaves no white cast on any skin tone.',
      'Sweat-resistant technology makes it perfect for outdoor use.'
    ],
    reviewCount: 210,
    reviews: [
      { name: 'Bianca V.', stars: 5, date: 'Feb 26, 2026', text: 'No white cast on my tan skin!' },
      { name: 'Cora P.', stars: 5, date: 'Mar 14, 2026', text: 'The only sunscreen I enjoy wearing.' },
      { name: 'Hana M.', stars: 5, date: 'Apr 30, 2026', text: 'Very lightweight and breathable.' }
    ]
  },
  {
    id: 8,
    name: 'Versatile Pro Eye Palette',
    category: 'Makeup',
    price: '₱2,500',
    priceNum: 2500,
    badge: 'Pro Choice',
    desc: 'A luxury palette featuring highly pigmented matte and shimmer shades for professional results.',
    imgs: [
      'https://images.pexels.com/photos/6662437/pexels-photo-6662437.jpeg',
      'https://images.pexels.com/photos/13019072/pexels-photo-13019072.jpeg',
      'https://images.pexels.com/photos/6662825/pexels-photo-6662825.jpeg',
      'https://images.pexels.com/photos/7712432/pexels-photo-7712432.jpeg'
    ],
    info: [
      'Features twelve high-impact, blendable shades.',
      'Includes a built-in professional-grade vanity mirror.',
      'Designed for long-lasting wear without creasing.',
      'Suitable for all skin types and professional makeup kits.'
    ],
    reviewCount: 89,
    reviews: [
      { name: 'Sarah J.', stars: 5, date: 'Jan 11, 2026', text: 'The colors are so buttery and rich.' },
      { name: 'Dina S.', stars: 4, date: 'Feb 19, 2026', text: 'Love the shimmer shades for evening.' },
      { name: 'Lea K.', stars: 5, date: 'Mar 02, 2026', text: 'Perfect palette for every occasion.' }
    ]
  },
  {
    id: 9,
    name: 'Professional Glass Nail File',
    category: 'Nail Care',
    price: '₱350',
    priceNum: 350,
    badge: 'Durable',
    desc: 'An expertly etched glass tool that provides the smoothest possible edge for your nails.',
    imgs: [
      'https://images.pexels.com/photos/5238134/pexels-photo-5238134.jpeg',
      'https://images.pexels.com/photos/5238083/pexels-photo-5238083.jpeg',
      'https://images.pexels.com/photos/5238084/pexels-photo-5238084.jpeg',
      'https://images.pexels.com/photos/8481629/pexels-photo-8481629.jpeg'
    ],
    info: [
      'The etched surface never wears down over time.',
      'Helps prevent nail splitting and painful snags.',
      'It is incredibly easy to clean and sanitize between uses.',
      'Gentle enough for both natural and acrylic nails.'
    ],
    reviewCount: 150,
    reviews: [
      { name: 'Claire B.', stars: 5, date: 'Feb 25, 2026', text: 'I will never use emery boards again.' },
      { name: 'Tina L.', stars: 5, date: 'Mar 10, 2026', text: 'Makes filing so much faster.' },
      { name: 'Ami R.', stars: 5, date: 'May 17, 2026', text: 'Very high quality glass file.' }
    ]
  },
  {
    id: 10,
    name: 'Vitamin C Brightening Serum',
    category: 'Skin Care',
    price: '₱1,850',
    priceNum: 1850,
    badge: 'Glow',
    desc: 'A powerful daily treatment that revitalizes dull skin and evens out your complexion.',
    imgs: [
      'https://images.pexels.com/photos/34939706/pexels-photo-34939706.jpeg',
      'https://images.pexels.com/photos/34939749/pexels-photo-34939749.jpeg',
      'https://images.pexels.com/photos/34939755/pexels-photo-34939755.jpeg',
      'https://images.pexels.com/photos/34939732/pexels-photo-34939732.jpeg'
    ],
    info: [
      'Packed with a high concentration of active Vitamin C.',
      'Effectively brightens dark spots and post-acne marks.',
      'Provides a protective layer against urban pollution.',
      'Absorbs quickly into the skin without feeling sticky.'
    ],
    reviewCount: 130,
    reviews: [
      { name: 'Elena W.', stars: 5, date: 'Jan 18, 2026', text: 'My dark spots are finally fading.' },
      { name: 'Nina Q.', stars: 5, date: 'Feb 04, 2026', text: 'I use it every single morning.' },
      { name: 'Mila R.', stars: 4, date: 'May 15, 2026', text: 'Noticeable glow after two weeks.' }
    ]
  },
  {
    id: 11,
    name: 'Pore-Blurring Silk Primer',
    category: 'Makeup',
    price: '₱1,200',
    priceNum: 1200,
    badge: 'Bestseller',
    desc: 'An ultra-smooth primer that hides imperfections for a flawless, airbrushed finish.',
    imgs: [
      'https://images.pexels.com/photos/12955707/pexels-photo-12955707.jpeg',
      'https://images.pexels.com/photos/12969358/pexels-photo-12969358.jpeg',
      'https://images.pexels.com/photos/12969381/pexels-photo-12969381.jpeg',
      'https://images.pexels.com/photos/12323034/pexels-photo-12323034.jpeg',
    ],
    info: [
      'Visibly blurs pores and fine lines instantly.',
      'Significantly improves the longevity of your foundation.',
      'Helps control excess oil throughout the entire day.',
      'Leaves the skin feeling silky and weightless.'
    ],
    reviewCount: 112,
    reviews: [
      { name: 'Ana P.', stars: 5, date: 'Mar 15, 2026', text: 'Literally makes my pores disappear.' },
      { name: 'Kyla M.', stars: 5, date: 'Apr 22, 2026', text: 'The texture is so soft and light.' },
      { name: 'Bella G.', stars: 5, date: 'May 09, 2026', text: 'Best primer I have ever tried.' }
    ]
  },
  {
    id: 12,
    name: 'Cuticle Revitalizing Oil',
    category: 'Nail Care',
    price: '₱450',
    priceNum: 450,
    badge: 'Essential',
    desc: 'A soothing oil blend that instantly recovers and softens stressed cuticles.',
    imgs: [
      'images/cutex5/cuticle-1.png',
      'images/cutex5/cuticle-2.png',
      'images/cutex5/cuticle-3.png',
      'images/cutex5/cuticle-4.png'
    ],
    info: [
      'Deeply hydrates and conditions the cuticle area.',
      'Rich in natural Vitamin E and jojoba oils.',
      'Features a convenient dropper for hygienic application.',
      'Perfect for post-manicure care or daily maintenance.'
    ],
    reviewCount: 45,
    reviews: [
      { name: 'Maria L.', stars: 5, date: 'Jan 12, 2026', text: 'My cuticles look healthy for the first time.' },
      { name: 'Joy C.', stars: 5, date: 'Feb 03, 2026', text: 'Small bottle but it lasts a long time.' },
      { name: 'Rina T.', stars: 4, date: 'May 28, 2026', text: 'Smells amazing and works instantly.' }
    ]
  }
];
