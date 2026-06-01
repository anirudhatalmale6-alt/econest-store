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
