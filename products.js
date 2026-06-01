const PRODUCTS = [
  // ===== Kitchen & Dining =====
  {
    id: 1, name: "Bamboo Water Bottle", price: 24.99, category: "Kitchen & Dining",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    badge: "Bestseller",
    description: "Stay hydrated sustainably with this elegant bamboo-shelled water bottle. Double-walled stainless steel interior keeps drinks cold for 24 hours or hot for 12.",
    ecoFacts: [
      "Made from sustainably harvested bamboo - grows back in 3-5 years vs 30+ years for hardwood",
      "Replaces 167 single-use plastic bottles per year",
      "Fully biodegradable outer shell decomposes in 2-3 years",
      "Zero plastic packaging - ships in recycled cardboard"
    ]
  },
  {
    id: 2, name: "Beeswax Food Wraps (Set of 3)", price: 18.99, category: "Kitchen & Dining",
    image: "https://images.unsplash.com/photo-1610141592643-0e4b tried-3?w=400&h=400&fit=crop",
    badge: "Popular",
    description: "Replace cling wrap forever with these reusable beeswax wraps. Available in small, medium, and large sizes to cover bowls, wrap sandwiches, and store produce.",
    ecoFacts: [
      "Each set replaces over 300 feet of plastic cling wrap per year",
      "Made from organic cotton, beeswax, jojoba oil, and tree resin",
      "Lasts up to one year with proper care - then composts in 90 days",
      "Antibacterial properties of beeswax naturally preserve food longer"
    ]
  },
  {
    id: 3, name: "Organic Cotton Produce Bags (5-Pack)", price: 14.99, category: "Kitchen & Dining",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=400&fit=crop",
    badge: "",
    description: "Ditch single-use plastic produce bags with these lightweight, washable organic cotton mesh bags. Perfect for fruits, vegetables, and bulk items.",
    ecoFacts: [
      "Saves approximately 500 plastic bags from landfills annually per household",
      "Made from GOTS-certified organic cotton - no pesticides used in farming",
      "Machine washable and reusable for 5+ years",
      "Breathable mesh keeps produce fresh longer than plastic"
    ]
  },
  {
    id: 4, name: "Bamboo Cutlery Travel Set", price: 12.99, category: "Kitchen & Dining",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&h=400&fit=crop",
    badge: "",
    description: "A compact set of bamboo fork, knife, spoon, chopsticks, and straw in a cotton roll-up pouch. Perfect for lunch at school, picnics, or travel.",
    ecoFacts: [
      "Bamboo is the fastest growing plant on Earth - up to 35 inches per day",
      "Prevents use of 500+ single-use plastic utensils per person annually",
      "Naturally antimicrobial - bamboo resists bacteria without chemicals",
      "100% compostable at end of life"
    ]
  },
  {
    id: 5, name: "Stainless Steel Lunch Box", price: 29.99, category: "Kitchen & Dining",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=400&fit=crop",
    badge: "",
    description: "Three-compartment stainless steel lunch box with leak-proof silicone seal. No plastic touches your food. Durable enough to last a lifetime.",
    ecoFacts: [
      "Stainless steel is 100% recyclable and infinitely reusable",
      "Eliminates need for disposable bags, foil, and plastic containers",
      "No BPA, phthalates, or microplastics leaching into food",
      "One lunch box replaces 1,000+ disposable containers over its lifetime"
    ]
  },
  {
    id: 6, name: "Coconut Bowl Set (2-Pack)", price: 16.99, category: "Kitchen & Dining",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=400&h=400&fit=crop",
    badge: "",
    description: "Handcrafted bowls made from reclaimed coconut shells, polished with organic coconut oil. Each bowl is unique. Perfect for smoothie bowls, snacks, and salads.",
    ecoFacts: [
      "Made from coconut shells that would otherwise be burned or discarded",
      "Supports fair-trade artisan communities in Vietnam",
      "No chemicals, dyes, or lacquers - just coconut oil finish",
      "Biodegradable and compostable at end of life"
    ]
  },
  {
    id: 7, name: "Compostable Coffee Pods (30-Pack)", price: 22.99, category: "Kitchen & Dining",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
    badge: "New",
    description: "Enjoy your morning coffee guilt-free. These pods are made from plant-based materials and filled with organic fair-trade coffee. Compatible with most single-serve machines.",
    ecoFacts: [
      "Traditional coffee pods take 500+ years to decompose - these compost in 90 days",
      "39 billion coffee pods end up in landfills each year worldwide",
      "Made from PLA (polylactic acid) derived from corn starch",
      "Organic coffee grown without synthetic pesticides or fertilizers"
    ]
  },
  {
    id: 8, name: "Reusable Silicone Food Bags (4-Pack)", price: 19.99, category: "Kitchen & Dining",
    image: "https://images.unsplash.com/photo-1526434426615-1abe81efcb0b?w=400&h=400&fit=crop",
    badge: "",
    description: "Platinum-grade silicone bags that replace zip-lock bags. Freezer, microwave, and dishwasher safe. Airtight seal keeps food fresh.",
    ecoFacts: [
      "Each bag replaces 1,000+ single-use plastic bags",
      "Made from sand-derived silicone - no petroleum products",
      "Temperature resistant from -40F to 450F",
      "Lasts 10+ years vs single-use alternatives"
    ]
  },
  {
    id: 9, name: "Glass Drinking Straws (6-Pack)", price: 11.99, category: "Kitchen & Dining",
    image: "https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?w=400&h=400&fit=crop",
    badge: "",
    description: "Handmade borosilicate glass straws with cleaning brush. Shatterproof, dishwasher safe, and crystal clear so you can see they're clean.",
    ecoFacts: [
      "500 million plastic straws are used daily in the US alone",
      "Borosilicate glass is infinitely recyclable",
      "No metallic taste like steel straws - pure drinking experience",
      "Includes natural fiber cleaning brush (no synthetic bristles)"
    ]
  },
  {
    id: 10, name: "Hemp Coffee Filter (Reusable)", price: 9.99, category: "Kitchen & Dining",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
    badge: "",
    description: "A natural hemp cone filter that replaces paper filters for pour-over coffee. Gets better with use as coffee oils season the fibers.",
    ecoFacts: [
      "Hemp grows without pesticides and enriches soil as it grows",
      "Replaces 700+ paper filters per year",
      "Hemp requires 50% less water to grow than cotton",
      "Lasts 2+ years - then composts in your garden"
    ]
  },

  // ===== Personal Care =====
  {
    id: 11, name: "Bamboo Toothbrush (4-Pack)", price: 9.99, category: "Personal Care",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=400&fit=crop",
    badge: "Bestseller",
    description: "Soft-bristle bamboo toothbrushes with ergonomic handles. Color-coded bases so the whole family can share a pack.",
    ecoFacts: [
      "4.7 billion plastic toothbrushes end up in oceans and landfills yearly",
      "Bamboo handle fully biodegrades in 6 months in compost",
      "BPA-free castor bean oil bristles (plant-based nylon alternative)",
      "Bamboo naturally resists mold and bacteria"
    ]
  },
  {
    id: 12, name: "Shampoo Bar - Lavender", price: 13.99, category: "Personal Care",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop",
    badge: "Popular",
    description: "A solid shampoo bar that lasts as long as 3 bottles of liquid shampoo. Made with organic lavender essential oil, coconut oil, and shea butter.",
    ecoFacts: [
      "Eliminates 3 plastic shampoo bottles per bar",
      "552 million shampoo bottles end up in landfills each year",
      "Concentrated formula means less water shipped (liquid shampoo is 80% water)",
      "Wrapped in compostable paper - zero plastic packaging"
    ]
  },
  {
    id: 13, name: "Natural Deodorant Stick", price: 11.99, category: "Personal Care",
    image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?w=400&h=400&fit=crop",
    badge: "",
    description: "Aluminum-free deodorant in a compostable cardboard tube. Made with baking soda, coconut oil, and essential oils. 24-hour protection, naturally.",
    ecoFacts: [
      "Cardboard packaging composts in 2-3 months vs 450 years for plastic",
      "No aluminum, parabens, or synthetic fragrances",
      "Cruelty-free and vegan certified",
      "Each tube saves one plastic deodorant container from landfill"
    ]
  },
  {
    id: 14, name: "Organic Cotton Face Rounds (16-Pack)", price: 15.99, category: "Personal Care",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop",
    badge: "",
    description: "Soft, reusable makeup remover pads with a mesh laundry bag. Two-sided design: velour for gentle cleansing, terry for exfoliation.",
    ecoFacts: [
      "The average person uses 1,500 disposable cotton rounds per year",
      "Each reusable round replaces 500+ single-use pads",
      "Organic cotton uses 91% less water than conventional cotton",
      "Includes organic cotton mesh wash bag"
    ]
  },
  {
    id: 15, name: "Safety Razor - Rose Gold", price: 34.99, category: "Personal Care",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=400&fit=crop",
    badge: "",
    description: "A beautifully weighted stainless steel safety razor with 10 replacement blades. Gives a closer shave than disposables at a fraction of the long-term cost.",
    ecoFacts: [
      "2 billion disposable razors are thrown away each year in the US",
      "Stainless steel razor lasts a lifetime - only replace tiny blades",
      "Blades are 100% recyclable steel - collect in a blade bank",
      "Saves $200+ per year compared to cartridge razor systems"
    ]
  },
  {
    id: 16, name: "Charcoal Dental Floss (Refillable)", price: 8.99, category: "Personal Care",
    image: "https://images.unsplash.com/photo-1571942676516-bcab84649e44?w=400&h=400&fit=crop",
    badge: "",
    description: "Activated charcoal-infused silk floss in a refillable glass dispenser. Comes with 2 refill spools of 30m each.",
    ecoFacts: [
      "Conventional floss is made from nylon (petroleum) and can't be recycled",
      "Silk is a natural fiber that biodegrades in 1-2 years",
      "Glass dispenser eliminates disposable plastic floss containers",
      "Charcoal naturally whitens teeth without chemicals"
    ]
  },
  {
    id: 17, name: "Loofah Sponge (3-Pack)", price: 7.99, category: "Personal Care",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    badge: "",
    description: "Natural loofah grown from the loofah gourd plant. A gentle exfoliating sponge for shower or kitchen use. Replaces synthetic plastic sponges.",
    ecoFacts: [
      "Synthetic sponges shed thousands of microplastic particles per wash",
      "Loofah is literally a vegetable - 100% plant-based",
      "Composts completely in 30 days after use",
      "Can be grown in your own garden from seed"
    ]
  },
  {
    id: 18, name: "Conditioner Bar - Coconut Mint", price: 12.99, category: "Personal Care",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop",
    badge: "",
    description: "Solid conditioner bar enriched with argan oil and coconut butter. Detangles, moisturizes, and leaves hair silky smooth without any plastic.",
    ecoFacts: [
      "Equivalent to 2-3 bottles of liquid conditioner",
      "TSA-friendly for travel - no liquid restrictions",
      "Palm oil free formula - protects rainforest habitats",
      "Packaged in plantable seed paper - grows wildflowers!"
    ]
  },
  {
    id: 19, name: "Menstrual Cup - Medical Grade", price: 27.99, category: "Personal Care",
    image: "https://images.unsplash.com/photo-1589828994379-7a8869c9e309?w=400&h=400&fit=crop",
    badge: "",
    description: "Medical-grade silicone menstrual cup available in two sizes. Up to 12 hours of protection. Comes with organic cotton storage pouch.",
    ecoFacts: [
      "The average person uses 11,000 disposable period products in a lifetime",
      "One cup replaces 10 years worth of tampons and pads",
      "Saves over $1,500 in period product costs over its lifetime",
      "Eliminates 300+ pounds of period waste per person"
    ]
  },
  {
    id: 20, name: "Solid Sunscreen Bar SPF 30", price: 16.99, category: "Personal Care",
    image: "https://images.unsplash.com/photo-1532947974-2e3a0cfcc362?w=400&h=400&fit=crop",
    badge: "New",
    description: "Reef-safe zinc oxide sunscreen in a convenient solid bar. Water resistant for 80 minutes. No white cast, no plastic tube.",
    ecoFacts: [
      "14,000 tons of sunscreen wash into coral reefs annually",
      "Zinc oxide is the only reef-safe UV filter approved by Hawaii's ban",
      "Solid format means zero water content - pure protection",
      "Compostable cardboard tube packaging"
    ]
  },

  // ===== Home & Living =====
  {
    id: 21, name: "Soy Wax Candle - Forest Pine", price: 19.99, category: "Home & Living",
    image: "https://images.unsplash.com/photo-1602607079793-8f1e1a505a7c?w=400&h=400&fit=crop",
    badge: "",
    description: "Hand-poured soy wax candle in a reusable amber glass jar. Scented with pure essential oils. Burns clean for 45+ hours.",
    ecoFacts: [
      "Paraffin candles release 11 known toxins including toluene and benzene",
      "Soy wax is made from renewable soybeans, not petroleum",
      "Burns 50% slower than paraffin - less waste, more enjoyment",
      "Cotton wick produces no soot - keeps your walls and ceiling clean"
    ]
  },
  {
    id: 22, name: "Organic Cotton Bed Sheets (Queen)", price: 89.99, category: "Home & Living",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop",
    badge: "",
    description: "300 thread count organic cotton percale sheets. Crisp, cool, and gets softer with every wash. GOTS certified organic.",
    ecoFacts: [
      "Conventional cotton uses 16% of world's insecticides on 2.4% of cropland",
      "Organic cotton farming uses 62% less energy than conventional",
      "No formaldehyde, heavy metals, or toxic dyes - safe to sleep on",
      "Fair Trade certified - farmers receive living wages"
    ]
  },
  {
    id: 23, name: "Recycled Glass Vase", price: 24.99, category: "Home & Living",
    image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=400&h=400&fit=crop",
    badge: "",
    description: "Each vase is handblown from 100% recycled glass bottles. Unique ocean blue-green color comes naturally from the mixed glass.",
    ecoFacts: [
      "Made from glass that would have taken 1 million years to decompose in landfill",
      "Recycling glass uses 40% less energy than making new glass",
      "Supports artisan glassblowers preserving traditional craftsmanship",
      "Every vase diverts approximately 6 glass bottles from waste streams"
    ]
  },
  {
    id: 24, name: "Wool Dryer Balls (6-Pack)", price: 16.99, category: "Home & Living",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop",
    badge: "Popular",
    description: "New Zealand wool dryer balls that naturally soften clothes and reduce drying time by 25%. Add a few drops of essential oil for natural fragrance.",
    ecoFacts: [
      "Replaces toxic dryer sheets that contain 15+ harmful chemicals",
      "Each ball lasts 1,000+ loads - saves $100+ in dryer sheets",
      "Reduces dryer energy use by 25% (shorter cycles)",
      "100% biodegradable New Zealand wool - ethically sourced"
    ]
  },
  {
    id: 25, name: "Recycled Plastic Outdoor Rug (4x6)", price: 49.99, category: "Home & Living",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=400&h=400&fit=crop",
    badge: "",
    description: "A colorful, durable outdoor rug woven from recycled plastic bottles. Reversible design, UV resistant, and easy to clean with a garden hose.",
    ecoFacts: [
      "Each rug is made from approximately 1,000 recycled plastic bottles",
      "Keeps non-biodegradable plastic out of oceans and landfills",
      "UV stabilized to last 5+ years outdoors without fading",
      "Fully recyclable again at end of life - true circular economy"
    ]
  },
  {
    id: 26, name: "Plant-Based Cleaning Kit (5 Tablets)", price: 14.99, category: "Home & Living",
    image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&h=400&fit=crop",
    badge: "New",
    description: "Dissolvable cleaning tablets - just drop in water in your own spray bottle. Includes all-purpose, glass, bathroom, kitchen, and floor formulas.",
    ecoFacts: [
      "Each tablet replaces one 32oz plastic spray bottle",
      "Conventional cleaners are 90% water - why ship water across the country?",
      "Plant-derived ingredients, no harsh chemicals safe for kids and pets",
      "Saves 5 plastic bottles per kit - 25+ per year for a household"
    ]
  },
  {
    id: 27, name: "Cork Yoga Mat", price: 59.99, category: "Home & Living",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    badge: "",
    description: "Premium yoga mat with natural cork top and recycled rubber base. Antimicrobial, non-slip (improves with moisture), and beautifully textured.",
    ecoFacts: [
      "Cork is harvested from bark without cutting trees - trees live 200+ years",
      "Cork forests absorb 5x more CO2 than other forests",
      "Natural rubber base from sustainable plantations - no PVC or TPE",
      "Antimicrobial surface never needs chemical sprays to stay fresh"
    ]
  },
  {
    id: 28, name: "Recycled Paper Notebook (3-Pack)", price: 11.99, category: "Home & Living",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=400&fit=crop",
    badge: "",
    description: "A5 notebooks made from 100% post-consumer recycled paper. Soy-based ink covers. 80 lined pages each. Perfect for school, journaling, or sketching.",
    ecoFacts: [
      "Recycling 1 ton of paper saves 17 trees and 7,000 gallons of water",
      "Post-consumer waste paper diverted from landfills",
      "Soy-based ink is biodegradable and easier to de-ink for future recycling",
      "Covers printed with vegetable dyes - no petroleum-based inks"
    ]
  },
  {
    id: 29, name: "Beeswax Pillar Candles (Set of 3)", price: 21.99, category: "Home & Living",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop",
    badge: "",
    description: "Pure beeswax pillar candles with a natural honey scent. Burns brighter and longer than any other wax. Hand-rolled with organic cotton wicks.",
    ecoFacts: [
      "Beeswax actually purifies air by releasing negative ions when burned",
      "Supports beekeepers and healthy bee populations critical for pollination",
      "Burns 3x longer than paraffin candles of the same size",
      "Hypoallergenic - ideal for people sensitive to synthetic fragrances"
    ]
  },
  {
    id: 30, name: "Bamboo Toilet Paper (24 Rolls)", price: 34.99, category: "Home & Living",
    image: "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=400&h=400&fit=crop",
    badge: "",
    description: "Ultra-soft 3-ply bamboo toilet paper. No inks, dyes, or fragrances. Plastic-free paper wrapping for each roll.",
    ecoFacts: [
      "27,000 trees are cut down DAILY for toilet paper production",
      "Bamboo grows to harvest size in 3 months vs 30 years for trees",
      "Bamboo requires no pesticides, fertilizers, or irrigation",
      "Plastic-free packaging - even the box tape is paper-based"
    ]
  },

  // ===== Fashion & Accessories =====
  {
    id: 31, name: "Organic Cotton Tote Bag", price: 14.99, category: "Fashion & Accessories",
    image: "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?w=400&h=400&fit=crop",
    badge: "Bestseller",
    description: "Heavy-duty organic cotton canvas tote with reinforced handles. Screen-printed with eco-positive designs using water-based inks.",
    ecoFacts: [
      "One reusable tote replaces 500+ plastic bags per year",
      "Organic cotton supports soil health and biodiversity",
      "Water-based inks contain no heavy metals or solvents",
      "Designed to carry 40+ pounds - built to last decades"
    ]
  },
  {
    id: 32, name: "Recycled Ocean Plastic Sunglasses", price: 39.99, category: "Fashion & Accessories",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    badge: "Popular",
    description: "Stylish polarized sunglasses with frames made from recovered ocean plastic. UV400 protection. Each pair removes 10 plastic bottles from the sea.",
    ecoFacts: [
      "8 million tons of plastic enter our oceans every year",
      "Each pair is made from 10 recovered ocean-bound plastic bottles",
      "Polarized lenses reduce glare without harmful chemical coatings",
      "Includes a case made from recycled paper pulp"
    ]
  },
  {
    id: 33, name: "Hemp Backpack", price: 54.99, category: "Fashion & Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    badge: "",
    description: "Rugged hemp canvas backpack with padded laptop sleeve. Water-resistant naturally. Features YKK recycled zipper pulls.",
    ecoFacts: [
      "Hemp produces 250% more fiber per acre than cotton",
      "Naturally UV and mold resistant without chemical treatments",
      "Gets softer with use but never loses strength",
      "Hemp cultivation improves soil health for future crops"
    ]
  },
  {
    id: 34, name: "Recycled Denim Wallet", price: 22.99, category: "Fashion & Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    badge: "",
    description: "Slim bi-fold wallet crafted from upcycled denim jeans. RFID blocking lining. Each wallet is slightly unique due to the reclaimed material.",
    ecoFacts: [
      "A single pair of jeans requires 1,800 gallons of water to produce",
      "Upcycling denim saves 20,000 liters of water per kilogram of fabric",
      "Denim is one of the most durable natural fabrics - perfect for daily use",
      "Metal hardware is recycled brass"
    ]
  },
  {
    id: 35, name: "Cork Phone Case", price: 19.99, category: "Fashion & Accessories",
    image: "https://images.unsplash.com/photo-1541877944-ac82a091518a?w=400&h=400&fit=crop",
    badge: "",
    description: "Slim, lightweight phone case made from natural Portuguese cork. Shock-absorbing, scratch-resistant, and uniquely patterned by nature.",
    ecoFacts: [
      "Cork oak forests are a critical habitat for endangered species",
      "Harvesting cork doesn't harm trees - bark regenerates every 9 years",
      "Cork is naturally waterproof, fire-resistant, and hypoallergenic",
      "At end of life, cork decomposes completely in natural environments"
    ]
  },
  {
    id: 36, name: "Bamboo Fiber Socks (3 Pairs)", price: 18.99, category: "Fashion & Accessories",
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400&h=400&fit=crop",
    badge: "",
    description: "Incredibly soft bamboo viscose socks with reinforced toe and heel. Moisture-wicking and temperature regulating. Available in earth tones.",
    ecoFacts: [
      "Bamboo viscose is 40% more absorbent than cotton",
      "Bamboo grows without irrigation using only rainfall",
      "Naturally thermoregulating - cool in summer, warm in winter",
      "Bamboo fibers are naturally antibacterial - stays fresh longer"
    ]
  },
  {
    id: 37, name: "Upcycled Tire Rubber Belt", price: 28.99, category: "Fashion & Accessories",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400&h=400&fit=crop",
    badge: "",
    description: "A stylish belt made from recycled inner tubes with a stainless steel buckle. Waterproof, flexible, and extremely durable.",
    ecoFacts: [
      "300 million tires are discarded annually in the US alone",
      "Rubber takes 50-80 years to decompose in landfills",
      "Each belt diverts one inner tube from the waste stream",
      "Waterproof and virtually indestructible - the ultimate durable accessory"
    ]
  },
  {
    id: 38, name: "Organic Linen Scarf", price: 32.99, category: "Fashion & Accessories",
    image: "https://images.unsplash.com/photo-1601244005535-a48d21d951ac?w=400&h=400&fit=crop",
    badge: "",
    description: "Lightweight organic linen scarf dyed with plant-based colors. Versatile enough for all seasons. Hand-finished edges.",
    ecoFacts: [
      "Linen comes from flax, which grows in poor soil without irrigation",
      "Flax plants absorb 3.7 tons of CO2 per hectare per season",
      "Plant dyes (indigo, turmeric, madder root) create zero toxic runoff",
      "Linen gets stronger and softer with each wash - lasts 30+ years"
    ]
  },
  {
    id: 39, name: "Seed Paper Greeting Cards (10-Pack)", price: 13.99, category: "Fashion & Accessories",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=400&h=400&fit=crop",
    badge: "",
    description: "Beautiful greeting cards embedded with wildflower seeds. After reading, plant the card and watch it bloom! Assorted designs for all occasions.",
    ecoFacts: [
      "7 billion greeting cards are sold in the US each year",
      "Seed paper is made from post-consumer waste embedded with seeds",
      "Each card grows into wildflowers that support pollinators",
      "Zero waste - the card becomes a garden instead of trash"
    ]
  },
  {
    id: 40, name: "Recycled Silver Leaf Earrings", price: 36.99, category: "Fashion & Accessories",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
    badge: "",
    description: "Delicate leaf-shaped earrings handcrafted from 100% recycled sterling silver. Hypoallergenic and nickel-free.",
    ecoFacts: [
      "Silver mining generates 7,500 tons of toxic waste per ounce of silver",
      "Recycled silver uses 90% less energy than newly mined silver",
      "Sterling silver can be recycled infinitely without quality loss",
      "Handcrafted by artisans earning fair trade wages"
    ]
  },

  // ===== Garden & Outdoor =====
  {
    id: 41, name: "Seed Bomb Kit (12 Bombs)", price: 15.99, category: "Garden & Outdoor",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop",
    badge: "Popular",
    description: "Hand-rolled seed bombs packed with native wildflower seeds, clay, and compost. Just throw them on bare soil and let nature do the rest.",
    ecoFacts: [
      "Native wildflowers require no watering, fertilizers, or pesticides once established",
      "Supports local pollinator populations - bees, butterflies, and hummingbirds",
      "Helps prevent soil erosion on bare land",
      "A single seed bomb can produce 50+ wildflower plants"
    ]
  },
  {
    id: 42, name: "Compost Bin - Kitchen Counter", price: 29.99, category: "Garden & Outdoor",
    image: "https://images.unsplash.com/photo-1591208333480-3bef838c10e2?w=400&h=400&fit=crop",
    badge: "",
    description: "Sleek 1.3-gallon stainless steel compost bin with charcoal filter lid (no smells!). Collects food scraps for your garden compost pile.",
    ecoFacts: [
      "Food waste is the #1 material in US landfills - 30% of all trash",
      "Composting reduces methane emissions from landfills by diverting organics",
      "Finished compost enriches soil, reducing need for chemical fertilizers",
      "A family of 4 can divert 400+ pounds of food waste annually"
    ]
  },
  {
    id: 43, name: "Solar-Powered Garden Lights (4-Pack)", price: 27.99, category: "Garden & Outdoor",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=400&fit=crop",
    badge: "",
    description: "Waterproof stainless steel path lights powered entirely by the sun. Auto on at dusk, off at dawn. 8+ hours of warm white light per charge.",
    ecoFacts: [
      "Solar energy is free and produces zero emissions during operation",
      "No wiring needed - reduces electrical waste and installation impact",
      "LED bulbs last 50,000 hours vs 1,000 for incandescent",
      "Rechargeable batteries are replaceable - extends product life indefinitely"
    ]
  },
  {
    id: 44, name: "Biodegradable Plant Pots (24-Pack)", price: 8.99, category: "Garden & Outdoor",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop",
    badge: "",
    description: "Coconut coir seedling pots that can be planted directly in soil. No transplant shock for seedlings. Decomposes within one growing season.",
    ecoFacts: [
      "Plastic nursery pots are rarely recycled - billions end up in landfills yearly",
      "Coconut coir is a waste byproduct of coconut processing",
      "Pots break down and add organic matter to the soil",
      "Eliminates transplant shock - roots grow right through the pot walls"
    ]
  },
  {
    id: 45, name: "Rain Barrel - 50 Gallon", price: 79.99, category: "Garden & Outdoor",
    image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=400&h=400&fit=crop",
    badge: "",
    description: "UV-resistant recycled plastic rain barrel with brass spigot and mosquito-proof mesh screen. Connects to any standard downspout.",
    ecoFacts: [
      "A 50-gallon barrel can save 1,300 gallons of water during peak summer months",
      "Rainwater is naturally soft and free of chlorine - plants love it",
      "Reduces stormwater runoff that carries pollutants to waterways",
      "Made from recycled HDPE plastic - diverts 30+ bottles from waste"
    ]
  },
  {
    id: 46, name: "Organic Herb Garden Kit", price: 23.99, category: "Garden & Outdoor",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop",
    badge: "New",
    description: "Everything you need to grow 6 culinary herbs: basil, cilantro, parsley, chives, mint, and rosemary. Includes organic seeds, coconut coir pellets, and bamboo markers.",
    ecoFacts: [
      "Store-bought herbs travel an average of 1,500 miles to reach your kitchen",
      "Growing your own herbs eliminates plastic clamshell packaging",
      "Herbs attract beneficial insects that naturally control garden pests",
      "Coconut coir growing medium is a renewable byproduct - not peat from bogs"
    ]
  },
  {
    id: 47, name: "Bee Hotel - Mason Bee House", price: 19.99, category: "Garden & Outdoor",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=400&fit=crop",
    badge: "",
    description: "Handcrafted wooden bee hotel providing nesting habitat for solitary mason bees. Hang in your garden to boost pollination by up to 300%.",
    ecoFacts: [
      "One mason bee pollinates as effectively as 100 honeybees",
      "35% of global food production depends on pollinators",
      "Mason bees are gentle, solitary, and virtually never sting",
      "Made from FSC-certified untreated wood - safe for bees"
    ]
  },
  {
    id: 48, name: "Recycled Rubber Garden Kneeler", price: 17.99, category: "Garden & Outdoor",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop",
    badge: "",
    description: "Thick, cushioned garden kneeling pad made from recycled tire rubber. Waterproof, durable, and easy to clean. Saves your knees while saving the planet.",
    ecoFacts: [
      "Made from tires that would otherwise sit in landfills for 80+ years",
      "Rubber is naturally waterproof - no chemical treatments needed",
      "Lasts 10+ years of heavy garden use",
      "Each pad diverts approximately 2 tires from the waste stream"
    ]
  },
  {
    id: 49, name: "Solar Insect Zapper Lantern", price: 24.99, category: "Garden & Outdoor",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=400&fit=crop",
    badge: "",
    description: "Dual-purpose solar lantern that provides warm ambient light and UV insect control. Chemical-free pest management for patios and gardens.",
    ecoFacts: [
      "Chemical insect sprays kill beneficial insects along with pests",
      "DEET and other repellents contaminate soil and water",
      "Solar powered - zero electricity costs and zero emissions",
      "UV light targets mosquitoes specifically - safe for butterflies and bees"
    ]
  },
  {
    id: 50, name: "Worm Composting Starter Kit", price: 44.99, category: "Garden & Outdoor",
    image: "https://images.unsplash.com/photo-1591208333480-3bef838c10e2?w=400&h=400&fit=crop",
    badge: "",
    description: "A complete vermicomposting system with stackable trays, coconut coir bedding, and a guide to get started. Worms sold separately (local sourcing recommended).",
    ecoFacts: [
      "Worm castings are 5x richer in nitrogen than regular compost",
      "Vermicomposting works indoors - perfect for apartments and schools",
      "Red wigglers can eat half their body weight in food scraps daily",
      "Worm tea (liquid runoff) is a powerful organic plant fertilizer"
    ]
  }
];

const CATEGORIES = ["All", "Kitchen & Dining", "Personal Care", "Home & Living", "Fashion & Accessories", "Garden & Outdoor"];

// ===== EDUCATIONAL CONTENT =====
const ECO_EDUCATION = {
  "Kitchen & Dining": {
    title: "Sustainable Kitchen",
    icon: "utensils",
    overview: "The kitchen is the heart of the home - and one of its biggest sources of waste. The average household generates over 500 pounds of plastic waste from the kitchen each year, from food packaging to disposable utensils.",
    keyStats: [
      { number: "500M", label: "Plastic straws used daily in the US alone" },
      { number: "100B", label: "Plastic bags used in the US per year" },
      { number: "8M", label: "Metric tons of plastic entering oceans yearly" },
      { number: "450", label: "Years for a plastic bottle to decompose" }
    ],
    deepDive: "Single-use kitchen items are among the top pollutants found in ocean cleanups. By switching to reusable alternatives - bamboo utensils, beeswax wraps, glass containers, and stainless steel bottles - a single household can eliminate over 1,000 pieces of single-use plastic per year. The impact multiplies: if every household in a school of 500 families made the switch, that's 500,000 fewer pieces of plastic waste annually.",
    whatYouCanDo: [
      "Replace plastic wrap with beeswax wraps or silicone lids",
      "Carry a reusable water bottle - saves 167 plastic bottles per year",
      "Use cloth produce bags instead of plastic ones at the grocery store",
      "Switch to bar soap for dish washing - eliminates plastic bottles",
      "Compost food scraps instead of sending them to landfill",
      "Buy in bulk with reusable containers to reduce packaging waste"
    ]
  },
  "Personal Care": {
    title: "Clean Beauty & Personal Care",
    icon: "heart",
    overview: "The beauty and personal care industry produces over 120 billion units of packaging every year, most of which is not recyclable. Many personal care products also contain microplastics and harmful chemicals that wash into our waterways.",
    keyStats: [
      { number: "120B", label: "Units of beauty packaging produced yearly" },
      { number: "552M", label: "Shampoo bottles going to landfills annually" },
      { number: "4.7B", label: "Plastic toothbrushes discarded each year" },
      { number: "8,000", label: "Chemicals in conventional beauty products" }
    ],
    deepDive: "Microplastics from face scrubs, toothpaste, and synthetic cosmetics enter waterways and eventually the ocean, where they are consumed by marine life and enter the food chain. Studies have found microplastics in 94% of tap water samples in the US. By choosing natural, plastic-free personal care products, you not only protect your body from harmful chemicals but also prevent microplastic pollution at its source.",
    whatYouCanDo: [
      "Switch to a bamboo toothbrush - saves 4 plastic toothbrushes per year",
      "Use shampoo and conditioner bars - each replaces 2-3 plastic bottles",
      "Choose natural deodorant in cardboard packaging",
      "Use a safety razor instead of disposable plastic razors",
      "Pick products with minimal, recyclable, or compostable packaging",
      "Read labels - avoid products containing microbeads (polyethylene, polypropylene)"
    ]
  },
  "Home & Living": {
    title: "Sustainable Home Living",
    icon: "home",
    overview: "The average home contains hundreds of products made from synthetic materials, petroleum-based chemicals, and non-renewable resources. From toxic candles to synthetic bedding, these products release harmful VOCs (volatile organic compounds) into your indoor air.",
    keyStats: [
      { number: "62%", label: "Less energy used by organic cotton vs conventional" },
      { number: "17", label: "Trees saved by recycling 1 ton of paper" },
      { number: "40%", label: "Less energy used in recycling glass vs new" },
      { number: "5x", label: "More CO2 absorbed by cork forests vs others" }
    ],
    deepDive: "Indoor air quality is often 2-5 times more polluted than outdoor air, largely due to synthetic household products. Paraffin candles release 11 known toxins when burned, synthetic rugs off-gas chemicals for years, and conventional cleaning products leave chemical residues on every surface. Switching to natural alternatives - soy candles, organic textiles, plant-based cleaners - dramatically improves indoor air quality while reducing your environmental footprint.",
    whatYouCanDo: [
      "Replace paraffin candles with soy or beeswax alternatives",
      "Choose organic cotton bedding - free from pesticides and formaldehyde",
      "Use wool dryer balls instead of chemical-laden dryer sheets",
      "Switch to plant-based cleaning products or make your own",
      "Buy recycled paper products - notebooks, toilet paper, tissues",
      "Choose furniture and decor made from reclaimed or sustainable materials"
    ]
  },
  "Fashion & Accessories": {
    title: "Sustainable Fashion",
    icon: "shirt",
    overview: "The fashion industry is the second-largest polluter in the world, right after oil. Fast fashion produces 92 million tons of textile waste annually, and a single pair of jeans requires 1,800 gallons of water to produce.",
    keyStats: [
      { number: "92M", label: "Tons of textile waste created each year" },
      { number: "1,800", label: "Gallons of water for one pair of jeans" },
      { number: "700K", label: "Microfibers released per wash cycle" },
      { number: "10%", label: "Of global carbon emissions from fashion" }
    ],
    deepDive: "Every time synthetic clothing is washed, it releases up to 700,000 microfibers into the water system. These tiny plastic fibers are too small to be filtered and end up in our oceans, where they are ingested by marine life. Choosing natural fabrics like organic cotton, hemp, linen, and bamboo not only reduces microfiber pollution but also supports sustainable farming practices. Additionally, buying fewer, higher-quality items that last longer dramatically reduces your fashion footprint.",
    whatYouCanDo: [
      "Choose natural fabrics - organic cotton, hemp, linen, bamboo",
      "Buy fewer, higher-quality pieces that last longer",
      "Support brands that use recycled or upcycled materials",
      "Repair and mend clothing instead of throwing it away",
      "Donate or swap clothes you no longer wear",
      "Wash synthetic clothing in a microfiber-catching bag"
    ]
  },
  "Garden & Outdoor": {
    title: "Green Gardening & Outdoors",
    icon: "leaf",
    overview: "Conventional gardening practices often rely heavily on synthetic fertilizers, pesticides, and plastic products. These chemicals contaminate soil, water, and harm beneficial insects like bees and butterflies that are critical for food production.",
    keyStats: [
      { number: "35%", label: "Of food production depends on pollinators" },
      { number: "1,300", label: "Gallons saved yearly with a rain barrel" },
      { number: "400+", label: "Pounds of food waste diverted by composting" },
      { number: "50K", label: "Hours LED solar lights last vs 1K for bulbs" }
    ],
    deepDive: "Pollinators are responsible for one in every three bites of food we eat. Yet bee populations have declined by 40% in the last decade due to pesticides, habitat loss, and climate change. By creating pollinator-friendly gardens with native plants, avoiding chemical pesticides, and providing bee habitats, we can help reverse this alarming trend. Composting diverts organic waste from landfills where it would produce methane (a greenhouse gas 28x more potent than CO2) and instead creates nutrient-rich soil amendment.",
    whatYouCanDo: [
      "Plant native wildflowers to support local pollinators",
      "Start composting - diverts 30% of household waste from landfills",
      "Use rain barrels to collect water for your garden",
      "Choose solar-powered outdoor lighting",
      "Avoid chemical pesticides - use natural pest control methods",
      "Install a bee hotel to support solitary bee populations"
    ]
  }
};

const ECO_LEARNING_TOPICS = [
  {
    id: "plastic-crisis",
    title: "The Plastic Crisis",
    icon: "alert-triangle",
    color: "#ef4444",
    summary: "Understanding how plastic pollution threatens our planet's ecosystems",
    content: [
      { heading: "The Scale of the Problem", text: "Since the 1950s, humans have produced over 8.3 billion metric tons of plastic. Of that, only 9% has been recycled. The rest sits in landfills, pollutes our oceans, or is scattered across the landscape. Every minute, the equivalent of one garbage truck of plastic is dumped into our oceans." },
      { heading: "Impact on Wildlife", text: "Over 1 million marine animals die each year due to plastic pollution. Sea turtles mistake plastic bags for jellyfish, seabirds feed plastic fragments to their chicks, and microplastics have been found in the stomachs of fish at the deepest point of the ocean - the Mariana Trench (36,000 feet deep)." },
      { heading: "Microplastics in Our Food", text: "Studies show that humans ingest approximately 5 grams of plastic per week - that's the equivalent of eating a credit card every 7 days. Microplastics have been found in drinking water, sea salt, honey, beer, and even the air we breathe." },
      { heading: "How Long Plastic Lasts", text: "A plastic bag takes 20 years to decompose. A plastic straw: 200 years. A plastic bottle: 450 years. A fishing line: 600+ years. But 'decompose' is misleading - plastic never truly disappears, it just breaks into smaller and smaller pieces called microplastics." },
      { heading: "What You Can Do", text: "Every single-use plastic item you avoid makes a difference. Start with the Big 4: refuse plastic bags, bottles, straws, and takeaway containers. Carry reusable alternatives. Support businesses that reduce plastic packaging. Together, these small changes create massive impact." }
    ]
  },
  {
    id: "climate-change",
    title: "Climate Change & Carbon Footprint",
    icon: "thermometer",
    color: "#f59e0b",
    summary: "How everyday consumer choices impact global warming",
    content: [
      { heading: "What is Carbon Footprint?", text: "Your carbon footprint is the total amount of greenhouse gases (including carbon dioxide and methane) generated by your actions. The average person's carbon footprint is about 4 tons per year globally, but in developed countries it can be 12-16 tons. To prevent the worst effects of climate change, we need to reduce it to under 2 tons per person by 2050." },
      { heading: "Consumer Products & Emissions", text: "Manufacturing, transporting, and disposing of consumer goods accounts for about 60% of global greenhouse gas emissions. Fast fashion alone produces 10% of global carbon emissions - more than all international flights and maritime shipping combined." },
      { heading: "The Power of Sustainable Choices", text: "Choosing products made from recycled materials uses 30-90% less energy than manufacturing from raw materials. Buying locally-made products reduces transportation emissions. Choosing durable goods over disposables means fewer resources extracted, processed, and shipped." },
      { heading: "Carbon-Neutral Shopping", text: "Many eco-friendly brands offset their carbon emissions through reforestation, renewable energy projects, and methane capture. When you see 'carbon-neutral' on a product, it means the company has calculated and offset the total emissions from production to delivery." },
      { heading: "Your Impact Adds Up", text: "If you reduce your personal carbon footprint by just 2 tons per year through sustainable shopping, that's the equivalent of taking a car off the road. If your school's 500 families each did the same, that's like removing 500 cars from the highway." }
    ]
  },
  {
    id: "ocean-health",
    title: "Ocean Conservation",
    icon: "waves",
    color: "#3b82f6",
    summary: "Why protecting our oceans matters for all life on Earth",
    content: [
      { heading: "Oceans: Earth's Life Support", text: "Oceans cover 71% of Earth's surface and produce over 50% of the world's oxygen through phytoplankton. They absorb 30% of CO2 produced by humans and 90% of the excess heat from global warming. Without healthy oceans, life on Earth as we know it cannot exist." },
      { heading: "Threats from Consumer Products", text: "Chemical sunscreens containing oxybenzone and octinoxate bleach coral reefs - 14,000 tons wash into reefs annually. Microplastics from synthetic clothing and personal care products enter the ocean through wastewater. Chemical fertilizers create 'dead zones' where no marine life can survive - there are now over 400 such zones worldwide." },
      { heading: "Coral Reef Crisis", text: "Coral reefs support 25% of all marine species despite covering less than 1% of the ocean floor. We've already lost 50% of the world's coral reefs, and if current trends continue, 90% will be gone by 2050. Reef-safe products and reduced chemical runoff are critical to their survival." },
      { heading: "The Great Pacific Garbage Patch", text: "The Great Pacific Garbage Patch is a collection of floating plastic debris in the Pacific Ocean spanning 1.6 million square kilometers - that's twice the size of Texas. It contains an estimated 80,000 tons of plastic. And it's just one of five ocean garbage patches." },
      { heading: "Making a Difference", text: "Choose reef-safe sunscreen with zinc oxide. Avoid products with microbeads. Reduce single-use plastic. Support ocean cleanup organizations. Every product choice is a vote for the kind of ocean you want future generations to inherit." }
    ]
  },
  {
    id: "biodiversity",
    title: "Biodiversity & Ecosystems",
    icon: "trees",
    color: "#22c55e",
    summary: "How sustainable products help protect wildlife and natural habitats",
    content: [
      { heading: "What is Biodiversity?", text: "Biodiversity refers to the variety of all living things on Earth - plants, animals, fungi, and microorganisms. Earth is home to an estimated 8.7 million species, but we're losing species 1,000 times faster than the natural rate. This is known as the Sixth Mass Extinction." },
      { heading: "Why It Matters", text: "Biodiversity provides everything humans need to survive: food, clean water, medicine, and shelter. 75% of food crops rely on animal pollination. Over 50% of modern medicines were derived from natural sources. Diverse ecosystems are also more resilient to climate change and natural disasters." },
      { heading: "Consumer Impact on Habitats", text: "Conventional cotton farming uses 16% of the world's insecticides, destroying soil ecosystems. Palm oil production drives deforestation in tropical rainforests, displacing orangutans, tigers, and elephants. Fast fashion's toxic dyes pollute rivers, killing aquatic life. Choosing organic, sustainably sourced products directly protects habitats." },
      { heading: "The Pollinator Crisis", text: "Bees, butterflies, and other pollinators are responsible for 35% of global food production. Yet pollinator populations have declined 40% in the last decade. Neonicotinoid pesticides, habitat loss, and climate change are the primary drivers. Planting native wildflowers and avoiding chemical pesticides can help reverse this decline." },
      { heading: "How Eco Products Help", text: "Products made from sustainably harvested materials (FSC-certified wood, organic cotton, bamboo) ensure forests and habitats are preserved. Choosing cruelty-free products reduces demand for animal testing. Supporting fair-trade artisans protects communities that are stewards of biodiverse landscapes." }
    ]
  },
  {
    id: "water-conservation",
    title: "Water Conservation",
    icon: "droplet",
    color: "#06b6d4",
    summary: "Understanding water footprint and how to reduce it through smart choices",
    content: [
      { heading: "The Hidden Water in Products", text: "Every product has a 'water footprint' - the total water used in its production. A cotton t-shirt requires 2,700 liters of water. A single pair of jeans: 7,500 liters. A smartphone: 12,760 liters. By choosing products made from low-water materials like hemp, bamboo, or recycled fabrics, you can dramatically reduce your water footprint." },
      { heading: "Global Water Crisis", text: "2.2 billion people lack access to safely managed drinking water. Agriculture accounts for 70% of global freshwater use, and much of it goes to growing fiber for fast fashion and feed for industrial farming. Climate change is making droughts more frequent and severe, putting even more pressure on water supplies." },
      { heading: "Water Pollution from Products", text: "Textile dyeing is the second-largest water polluter globally, responsible for 20% of industrial water pollution. A single textile factory can use 200 tons of water per ton of fabric. The chemicals in this wastewater - heavy metals, formaldehyde, and chlorine - contaminate rivers and groundwater." },
      { heading: "Bamboo: The Water-Smart Choice", text: "Bamboo requires no irrigation - it grows using only rainfall. It needs 1/3 the water of cotton to produce the same amount of fiber. It also grows in poor soil, enriches the ground rather than depleting it, and captures 35% more CO2 than equivalent trees. That's why so many eco-friendly products use bamboo." },
      { heading: "Save Water Every Day", text: "Choose bamboo and hemp products over conventional cotton. Support brands that use waterless dyeing technology. Collect rainwater for your garden. Fix leaky faucets (a drip per second wastes 3,000 gallons per year). Every liter saved counts." }
    ]
  },
  {
    id: "circular-economy",
    title: "The Circular Economy",
    icon: "recycle",
    color: "#8b5cf6",
    summary: "Moving from take-make-waste to a regenerative economic model",
    content: [
      { heading: "Linear vs Circular", text: "Our current economy is mostly linear: we take resources from the Earth, make products, use them briefly, and throw them away. A circular economy redesigns this system so that waste is eliminated, products and materials are kept in use for as long as possible, and natural systems are regenerated." },
      { heading: "The Three Principles", text: "1) Design out waste and pollution from the start. 2) Keep products and materials in use through durability, reuse, repair, remanufacturing, and recycling. 3) Regenerate natural systems by returning biological materials safely to the Earth through composting and biodegradation." },
      { heading: "Examples in Our Products", text: "A recycled ocean plastic sunglasses frame keeps plastic in use instead of polluting the sea. A coconut bowl repurposes coconut shells that would be waste. A compostable coffee pod returns nutrients to soil. These products close the loop and keep resources cycling." },
      { heading: "The Economic Opportunity", text: "The circular economy isn't just good for the planet - it's a $4.5 trillion economic opportunity by 2030. Companies that design for circularity reduce material costs, create new revenue streams from refurbishment and resale, and build stronger customer loyalty." },
      { heading: "Be Part of the Solution", text: "Choose products designed for longevity over disposability. Repair before replacing. Buy secondhand when possible. Compost organic waste. Recycle properly. Support companies that take back and recycle their products. Every circular choice breaks the linear cycle." }
    ]
  }
];

const GLOBAL_ECO_STATS = [
  { number: "8M", label: "Tons of plastic enter oceans yearly", icon: "waves" },
  { number: "1M+", label: "Marine animals killed by plastic annually", icon: "fish" },
  { number: "2050", label: "Year oceans may have more plastic than fish", icon: "alert" },
  { number: "91%", label: "Of plastic is never recycled", icon: "recycle" },
  { number: "100B", label: "Plastic bags used in the US per year", icon: "bag" },
  { number: "27K", label: "Trees cut daily just for toilet paper", icon: "tree" }
];
