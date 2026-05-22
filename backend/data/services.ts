import type { ServiceItem } from "../types/services.ts";

export const services: ServiceItem[] = [
  {
    id: 1,
    name: 'Signature Haircut & Style',
    category: 'Hair Care',
    price: '\u20B11,200',
    priceNum: 1200,
    badge: 'Most Popular',
    desc: 'A bespoke cut tailored to your face shape, finished with a luxury blowout.',
    imgs: [
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&auto=format&fit=crop'
    ],
    info: ['Style Consultation', 'Luxury Scalp Wash', 'Precision Cut', 'Blowout & Finish'],
    reviewCount: 1024,
    reviews: [
      { name: 'Sofia R.', stars: 5, date: 'Mar 2025', text: 'Absolutely stunning result. My hair has never felt this healthy and the cut is perfection.' },
      { name: 'Andrea M.', stars: 5, date: 'Feb 2025', text: 'The stylist truly listened to what I wanted. I left feeling like a completely new person.' },
      { name: 'Camille D.', stars: 4, date: 'Jan 2025', text: 'Gorgeous blowout. The salon atmosphere is so calming, I nearly fell asleep in the chair.' }
    ]
  },
  {
    id: 2,
    name: 'Deep Hydration Facial',
    category: 'Skin Care',
    price: '\u20B12,500',
    priceNum: 2500,
    badge: 'Staff Pick',
    desc: 'A 60-minute ritual restoring luminosity with marine actives and oxygen infusion.',
    imgs: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop'
    ],
    info: ['Skin Analysis', 'Enzyme Exfoliation', 'Seaweed Mask', 'Oxygen Infusion', 'SPF Finish'],
    reviewCount: 708,
    reviews: [
      { name: 'Elena V.', stars: 5, date: 'Mar 2025', text: 'The most relaxing hour of my week. My skin was literally glowing for days after.' },
      { name: 'Jasmine L.', stars: 5, date: 'Feb 2025', text: "I've tried facials at many places but this one is truly world-class. Worth every peso." }
    ]
  },
  {
    id: 3,
    name: 'Luxury Gel Manicure',
    category: 'Nail Care',
    price: '\u20B1850',
    priceNum: 850,
    badge: "Popular",
    desc: 'Flawless nails that last up to three weeks, with premium gel polish and hand massage.',
    imgs: [
      'https://plus.unsplash.com/premium_photo-1661432806304-6d6cb7bfa4c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmFpbCUyMHBvbGlzaHxlbnwwfHwwfHx8MA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1677434519189-c37c1bb6b848?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEx1eHVyeSUyMEdlbCUyME1hbmljdXJlfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1659391542239-9648f307c0b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8THV4dXJ5JTIwR2VsJTIwTWFuaWN1cmV8ZW58MHx8MHx8fDA%3D',
      'https://plus.unsplash.com/premium_photo-1682092544868-6e57d9867744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmFpbCUyMHBvbGlzaHxlbnwwfHwwfHx8MA%3D%3D'
    ],
    info: ['Nail Shaping & File', 'Cuticle Care', 'Hydrating Hand Soak', 'Long-Wear Gel Polish', 'Hand Massage'],
    reviewCount: 1018,
    reviews: [
      { name: 'Marie T.', stars: 5, date: 'Mar 2025', text: 'Perfect application, no chips after two weeks! The hand massage alone is worth it.' },
      { name: 'Trisha A.', stars: 5, date: 'Mar 2025', text: 'Lovely technicians, so gentle and precise. My nails look absolutely immaculate.' },
      { name: 'Reese O.', stars: 4, date: 'Feb 2025', text: 'Great experience overall. The color selection is amazing and the gel lasts forever.' }
    ]
  },
  {
    id: 4,
    name: 'Bridal Make Up',
    category: 'Make Up',
    price: '\u20B15,500',
    priceNum: 5500,
    badge: 'Premium',
    desc: 'All-day glamour crafted for your most important day, with airbrush finish and lash application.',
    imgs: [
      'https://images.pexels.com/photos/16799888/pexels-photo-16799888.jpeg',
      'https://images.pexels.com/photos/16799889/pexels-photo-16799889.jpeg',
      'https://images.pexels.com/photos/12891485/pexels-photo-12891485.jpeg',
      'https://plus.unsplash.com/premium_photo-1661326352695-6cbe1ff74ee9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnJpZGFsJTIwTWFrZSUyMFVwfGVufDB8fDB8fHww'
    ],
    info: ['Pre-Bridal Consultation', 'Skin Prep & Primer', 'Airbrush Foundation', 'Lash Application', 'Setting Spray', 'Touch-Up Kit'],
    reviewCount: 708,
    reviews: [
      { name: 'Hannah G.', stars: 5, date: 'Feb 2025', text: 'I cried happy tears when I saw myself. The team understood my vision perfectly.' },
      { name: 'Nicole B.', stars: 5, date: 'Jan 2025', text: 'Flawless, long-lasting, and absolutely stunning. My photos are breathtaking.' }
    ]
  },
  {
    id: 5,
    name: 'Balayage & Toning',
    category: 'Hair Care',
    price: '\u20B13,800',
    priceNum: 3800,
    badge: 'Trending',
    desc: 'Sun-kissed dimension with hand-painted highlights and a custom gloss toning treatment.',
    imgs: [
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&auto=format&fit=crop'
    ],
    info: ['Hair Consultation', 'Balayage Painting', 'Toning Gloss', 'Deep Conditioning', 'Style Finish'],
    reviewCount: 708,
    reviews: [
      { name: 'Luna P.', stars: 5, date: 'Mar 2025', text: "Best balayage I've ever had. The color looks so natural and the toning is spot on." },
      { name: 'Claire S.', stars: 5, date: 'Feb 2025', text: "I've been getting balayage for years and this is by far the best result." }
    ]
  },
  {
    id: 6,
    name: 'Pedicure & Foot Ritual',
    category: 'Nail Care',
    price: '\u20B1950',
    priceNum: 950,
    badge: null,
    desc: 'A restorative foot treatment with exfoliation, mask, and reflexology-inspired massage.',
    imgs: [
      'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1765100478114-8c0141ffaf42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFBlZGljdXJlJTIwJTI2JTIwRm9vdCUyMFJpdHVhbHxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1638859471856-c6793be39109?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFBlZGljdXJlJTIwJTI2JTIwRm9vdCUyMFJpdHVhbHxlbnwwfHwwfHx8MA%3D%3D'
    ],
    info: ['Aromatic Foot Soak', 'Callus Removal', 'Sugar Scrub', 'Hydrating Mask', 'Foot Massage', 'Polish Finish'],
    reviewCount: 708,
    reviews: [
      { name: 'Bianca R.', stars: 5, date: 'Mar 2025', text: 'My feet have never felt softer. The massage at the end is absolutely divine.' },
      { name: 'Katrina M.', stars: 5, date: 'Feb 2025', text: 'A true ritual, not just a pedicure. I leave feeling completely renewed every time.' }
    ]
  },
  {
    id: 7,
    name: 'Evening Gala Makeup',
    category: 'Make Up',
    price: '₱2,800',
    priceNum: 2800,
    badge: null,
    desc: 'Sophisticated, high-definition artistry tailored for formal events and evening photography.',
    imgs: [
      'https://tinyurl.com/mvs8dsk2',
      'https://tinyurl.com/2j6tbnc2',
      'https://tinyurl.com/4t8j74aw',
      'https://tinyurl.com/5f6hszme'
    ],
    info: [
      'High-definition contouring techniques',
      'Photogenic, long-wear finish',
      'Custom lash application included',
      'Elegant, sophisticated aesthetic'
    ],
    reviewCount: 92,
    reviews: [
      { name: 'Mia V.', stars: 5, date: 'Oct 14, 2025', text: 'I felt like a celebrity at my company gala.' },
      { name: 'Chloe B.', stars: 5, date: 'Feb 03, 2025', text: 'The makeup looked flawless even after six hours of dancing.' },
      { name: 'Grace E.', stars: 5, date: 'Aug 22, 2025', text: 'Stunning attention to detail on the eye makeup.' }
    ]
  },
  {
    id: 8,
    name: 'Builder Gel (BIAB) Overlay',
    category: 'Nail Care',
    price: '₱1,100',
    priceNum: 1100,
    badge: 'Trending',
    desc: 'A durable reinforcement for natural nails that promotes growth and provides exceptional strength.',
    imgs: [
      'https://images.pexels.com/photos/6830805/pexels-photo-6830805.jpeg',
      'https://images.pexels.com/photos/4963818/pexels-photo-4963818.jpeg',
      'https://images.pexels.com/photos/939835/pexels-photo-939835.jpeg',
      'https://images.pexels.com/photos/939834/pexels-photo-939834.jpeg'
    ],
    info: [
      'Reinforces natural nail structure',
      'Promotes healthy nail growth',
      'Durable, chip-resistant finish',
      'Ideal for weak or brittle nails'
    ],
    reviewCount: 156,
    reviews: [
      { name: 'Isabella M.', stars: 5, date: 'Sep 29, 2025', text: 'My natural nails have never been this long or strong.' },
      { name: 'Sophia R.', stars: 5, date: 'Jan 12, 2025', text: 'The perfect alternative to acrylics with a much lighter feel.' },
      { name: 'Elena G.', stars: 4, date: 'Jul 18, 2025', text: 'Beautiful application and very professional service.' }
    ]
  },
  {
    id: 9,
    name: 'Signature Blowout',
    category: 'Hair Care',
    price: '₱1,500',
    priceNum: 1500,
    badge: 'Popular',
    desc: 'A luxurious wash and style that provides incredible volume and a glossy, salon-perfect finish.',
    imgs: [
      'https://images.pexels.com/photos/7755521/pexels-photo-7755521.jpeg',
      'https://images.pexels.com/photos/7755534/pexels-photo-7755534.jpeg',
      'https://images.pexels.com/photos/7755518/pexels-photo-7755518.jpeg',
      'https://images.pexels.com/photos/7755223/pexels-photo-7755223.jpeg'
    ],
    info: [
      'Volume-enhancing round brush technique',
      'Silky, frizz-free texture',
      'Long-lasting professional hold',
      'Includes premium hair mask'
    ],
    reviewCount: 210,
    reviews: [
      { name: 'Isabella M.', stars: 5, date: 'Nov 05, 2025', text: 'The bounce in my hair lasted for three whole days!' },
      { name: 'Lily J.', stars: 5, date: 'Mar 17, 2025', text: 'The best blowout in the city, hands down.' },
      { name: 'Janine K.', stars: 4, date: 'Jun 24, 2025', text: 'Very relaxing experience and my hair looked so shiny.' }
    ]
  },
  {
    id: 11,
    name: 'Luxury Spa Pedicure',
    category: 'Nail Care',
    price: '₱950',
    priceNum: 950,
    badge: null,
    desc: 'An indulgent foot treatment featuring a rejuvenating soak, exfoliation, and a hydrating mask.',
    imgs: [
      'https://tinyurl.com/ydue6sec',
      'https://images.pexels.com/photos/19695950/pexels-photo-19695950.jpeg',
      'https://images.pexels.com/photos/19695978/pexels-photo-19695978.jpeg',
      'https://images.pexels.com/photos/19695966/pexels-photo-19695966.jpeg'
    ],
    info: [
      'Aromatic mineral foot soak',
      'Sugar scrub exfoliation',
      'Deeply hydrating foot mask',
      'Includes extended foot massage'
    ],
    reviewCount: 128,
    reviews: [
      { name: 'Sofia L.', stars: 5, date: 'May 11, 2025', text: 'Pure bliss from start to finish.' },
      { name: 'Mia V.', stars: 5, date: 'Aug 04, 2025', text: 'My feet feel like silk. The massage was heavenly.' },
      { name: 'Elena G.', stars: 5, date: 'Jan 27, 2025', text: 'Highly recommend if you need a moment of total relaxation.' }
    ]
  },
  {
    id: 12,
    name: 'Bridal Glam Experience',
    category: 'Makeup',
    price: '₱5,500',
    priceNum: 5500,
    badge: 'Premium',
    desc: 'Comprehensive bridal artistry including a pre-wedding consultation and waterproof finish.',
    imgs: [
      'https://images.pexels.com/photos/6530713/pexels-photo-6530713.jpeg',
      'https://images.pexels.com/photos/6530715/pexels-photo-6530715.jpeg',
      'https://images.pexels.com/photos/6530714/pexels-photo-6530714.jpeg',
      'https://images.pexels.com/photos/457703/pexels-photo-457703.jpeg'
    ],
    info: [
      'Personalized style consultation',
      'Crying-proof, waterproof formula',
      'Camera-ready bridal finish',
      'Includes luxury skin prep'
    ],
    reviewCount: 340,
    reviews: [
      { name: 'Patricia L.', stars: 5, date: 'Mar 10, 2025', text: 'I felt like the most beautiful version of myself on my wedding day.' },
      { name: 'Diana M.', stars: 5, date: 'Jun 19, 2025', text: 'The makeup didn’t budge through all the tears and dancing.' },
      { name: 'Lea V.', stars: 5, date: 'Nov 02, 2025', text: 'Incredible service. They truly listened to what I wanted.' }
    ]
  },
  {
    id: 13,
    name: 'Microdermabrasion',
    category: 'Skin Care',
    price: '₱2,500',
    priceNum: 2500,
    badge: null,
    desc: 'A non-invasive procedure that gently exfoliates the skin to improve texture and clarity.',
    imgs: [
      'https://tinyurl.com/5n6z6xfs',
      'https://images.pexels.com/photos/14438367/pexels-photo-14438367.jpeg',
      'https://images.pexels.com/photos/34930097/pexels-photo-34930097.jpeg',
      'https://images.pexels.com/photos/7446690/pexels-photo-7446690.jpeg'
    ],
    info: [
      'Removes dead skin cells effectively',
      'Improves fine lines and pores',
      'Stimulates collagen production',
      'Safe for most skin types'
    ],
    reviewCount: 110,
    reviews: [
      { name: 'Elena G.', stars: 5, date: 'Jul 21, 2025', text: 'My skin feels so much smoother after just one treatment.' },
      { name: 'Brie T.', stars: 4, date: 'Sep 05, 2025', text: 'Great results, my pores look significantly smaller.' },
      { name: 'Lily J.', stars: 5, date: 'Feb 14, 2025', text: 'A must-have for maintaining a healthy complexion.' }
    ]
  },
  {
    id: 14,
    name: 'Signature Gel Manicure',
    category: 'Nail Care',
    price: '₱800',
    priceNum: 800,
    badge: 'Best Seller',
    desc: 'Expert cuticle care paired with high-performance gel polish for long-lasting brilliance.',
    imgs: [
      'https://images.pexels.com/photos/6135696/pexels-photo-6135696.jpeg',
      'https://images.pexels.com/photos/6135686/pexels-photo-6135686.jpeg',
      'https://images.pexels.com/photos/332046/pexels-photo-332046.jpeg',
      'https://images.pexels.com/photos/361754/pexels-photo-361754.jpeg'
    ],
    info: [
      'Precisely detailed cuticle work',
      'High-shine, mirror-like finish',
      'Chip-free for up to 3 weeks',
      'Safe and gentle removal process'
    ],
    reviewCount: 450,
    reviews: [
      { name: 'Sofia R.', stars: 5, date: 'Dec 08, 2025', text: 'Perfect application every single time.' },
      { name: 'Beatrice T.', stars: 5, date: 'Aug 30, 2025', text: 'The color selection is amazing and the staff is so careful.' },
      { name: 'Tina M.', stars: 5, date: 'May 05, 2025', text: 'I won’t go anywhere else for my gel manicures.' }
    ]
  },
  {
    id: 15,
    name: 'Custom Balayage & Toning',
    category: 'Hair Care',
    price: '₱6,000',
    priceNum: 6000,
    badge: null,
    desc: 'Artistic, hand-painted highlights designed to create a seamless, sun-kissed dimension.',
    imgs: [
      'https://tinyurl.com/bdf69zcc',
      'https://tinyurl.com/h6tszvnr',
      'https://tinyurl.com/45m4aczd',
      'https://tinyurl.com/59j3amy7'
    ],
    info: [
      'Bespoke hand-painting technique',
      'Natural-looking color graduation',
      'Customized toning for perfect hues',
      'Low-maintenance grow-out'
    ],
    reviewCount: 180,
    reviews: [
      { name: 'Sienna W.', stars: 5, date: 'Jan 22, 2025', text: 'The blend is so natural, I get compliments everywhere I go.' },
      { name: 'Claire S.', stars: 5, date: 'Oct 04, 2025', text: 'Worth every peso. The color is exactly what I wanted.' },
      { name: 'Luna P.', stars: 5, date: 'Apr 26, 2025', text: 'Expertly done and my hair still feels healthy.' }
    ]
  },
  {
    id: 16,
    name: 'Deep Cleansing Facial',
    category: 'Skin Care',
    price: '₱1,800',
    priceNum: 1800,
    badge: null,
    desc: 'A clarifying treatment that removes impurities and balances the skin’s natural oils.',
    imgs: [
      'https://images.pexels.com/photos/3985331/pexels-photo-3985331.jpeg',
      'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg',
      'https://images.pexels.com/photos/3985330/pexels-photo-3985330.jpeg',
      'https://images.pexels.com/photos/6663374/pexels-photo-6663374.jpeg'
    ],
    info: [
      'Professional-grade extractions',
      'Detoxifying steam treatment',
      'Customized botanical mask',
      'Reduces congestion and breakouts'
    ],
    reviewCount: 142,
    reviews: [
      { name: 'Heidi B.', stars: 5, date: 'Mar 12, 2025', text: 'My skin feels so clean and light after this.' },
      { name: 'Jules F.', stars: 5, date: 'Sep 21, 2025', text: 'The extractions were gentle but very thorough.' },
      { name: 'Aria S.', stars: 4, date: 'Nov 09, 2025', text: 'A great basic facial for keeping skin clear.' }
    ]
  },
  {
    id: 17,
    name: 'Personal Makeup Lesson',
    category: 'Make Up',
    price: '₱3,200',
    priceNum: 3200,
    badge: null,
    desc: 'A private session to master techniques tailored to your unique facial features and style.',
    imgs: [
      'https://images.pexels.com/photos/8092582/pexels-photo-8092582.jpeg',
      'https://images.pexels.com/photos/8031803/pexels-photo-8031803.jpeg',
      'https://images.pexels.com/photos/8031807/pexels-photo-8031807.jpeg',
      'https://images.pexels.com/photos/6954931/pexels-photo-6954931.jpeg'
    ],
    info: [
      'Step-by-step application guidance',
      'Product and tool recommendations',
      'Master the perfect daytime look',
      'Hands-on technique practice'
    ],
    reviewCount: 55,
    reviews: [
      { name: 'Ruby W.', stars: 5, date: 'Feb 19, 2025', text: 'I finally learned how to do a winged liner that fits my eyes!' },
      { name: 'Gwen P.', stars: 5, date: 'Aug 07, 2025', text: 'So informative. I feel much more confident with my routine now.' },
      { name: 'Anne C.', stars: 5, date: 'May 31, 2025', text: 'The tips on foundation application were worth the price alone.' }
    ]
  },
  {
    id: 18,
    name: 'Keratin Smoothing Treatment',
    category: 'Hair Care',
    price: '₱4,500',
    priceNum: 4500,
    badge: null,
    desc: 'An intensive protein-infused treatment that eliminates frizz and enhances shine.',
    imgs: [
      'https://images.pexels.com/photos/23349912/pexels-photo-23349912.jpeg',
      'https://images.pexels.com/photos/23349904/pexels-photo-23349904.jpeg',
      'https://images.pexels.com/photos/23349891/pexels-photo-23349891.jpeg',
      'https://images.pexels.com/photos/6144281/pexels-photo-6144281.jpeg'
    ],
    info: [
      'Reduces styling time significantly',
      'Intense frizz control for months',
      'Restores hair protein and health',
      'Provides a smooth, glossy finish'
    ],
    reviewCount: 168,
    reviews: [
      { name: 'Grace E.', stars: 5, date: 'Dec 01, 2025', text: 'My hair is so much more manageable in the humidity.' },
      { name: 'Mila S.', stars: 5, date: 'Mar 28, 2025', text: 'Total game changer for my morning routine.' },
      { name: 'Renee T.', stars: 4, date: 'Jul 15, 2025', text: 'Lovely results, my hair is silky and shiny.' }
    ]
  },

];
