require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const Listing = require("../models/listing"); // Agar same folder me ho toh "./models/listing" karein

main()
  .then(() => console.log("Connected to DB successfully"))
  .catch((err) => console.log("DB Connection Error:", err));

async function main() {
  await mongoose.connect(process.env.ATLASDB_URL);
}

const sampleListings = [
  // ==========================================
  // 1. ROOMS (5 India / 5 Out of India)
  // ==========================================
  {
    title: "Heritage Niwas near Golden Temple",
    description: "Peaceful traditional room within 3 minutes walking distance to Sri Harmandir Sahib.",
    image: { url: "https://www.poojn.in/wp-content/uploads/2025/05/Amritsar-Accommodation-Guru-Hargobind-Niwas-Your-2025-Stay-Guide.jpeg.jpg", filename: "Heritage Niwas near Golden Temple" },
    price: 1600,
    location: "Amritsar, Punjab",
    country: "India",
    geometry: { type: "Point", coordinates: [74.8765, 31.6200] },
    category: "rooms"
  },
  {
    title: "Siddhivinayak Cozy Pilgrim Suite",
    description: "Clean modern room close to the divine Siddhivinayak Temple in central Mumbai.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGF2Ww08egD4QiBa-PzfZoWxQ5imXj3exyLKiucSrG4M78JWb661fA6Dc&s=10", filename: "Siddhivinayak Cozy Pilgrim Suit" },
    price: 2500,
    location: "Prabhadevi, Mumbai",
    country: "India",
    geometry: { type: "Point", coordinates: [72.8311, 19.0166] },
    category: "rooms"
  },
  {
    title: "Meenakshi Amman Heritage Room",
    description: "Traditional Chettinad styled private room nestled in the ancient temple town streets.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE0adzMICJNAgaCwt2xHhaP89HoWQxRFtqE4F5yHntsg&s", filename: "Meenakshi Amman Heritage Room" },
    price: 1900,
    location: "Madurai, Tamil Nadu",
    country: "India",
    geometry: { type: "Point", coordinates: [78.1198, 9.9195] },
    category: "rooms"
  },
  {
    title: "Jagannath Puri Ashram Guest Room",
    description: "Serene, simple accommodation ideal for pilgrims visiting the holy Jagannath temple and beach.",
    image: { url: "https://cdn.yatradham.org/media/catalog/product/cache/1/small_image/420x400/040ec09b1e35df139433887a97daa66f/u/n/unnamed_2__79.jpg", filename: "Jagannath Puri Ashram Guest Room" },
    price: 1200,
    location: "Puri, Odisha",
    country: "India",
    geometry: { type: "Point", coordinates: [85.8179, 19.8049] },
    category: "rooms"
  },
  {
    title: "Tirupati Balaji Hillfoot Stay",
    description: "Convenient and clean room for families visiting Sri Venkateswara Swamy Temple.",
    image: { url: "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/raj-park-hotel---tirupati/hill-view-room-tirupati?1787443200244", filename: "Tirupati Balaji Hillfoot Stay" },
    price: 1800,
    location: "Tirupati, Andhra Pradesh",
    country: "India",
    geometry: { type: "Point", coordinates: [79.4192, 13.6288] },
    category: "rooms"
  },
  {
    title: "Montmartre Artist Studio Room",
    description: "Charming sunlit room located right near the Sacré-Cœur basilica with Parisian skyline views.",
    image: { url: "https://a0.muscache.com/im/pictures/miso/Hosting-43829123/original/c03c7750-a6d1-48cd-88d5-311405a5c2b6.jpeg?im_w=720", filename: "Montmartre Artist Studio Room" },
    price: 9500,
    location: "Paris",
    country: "France",
    geometry: { type: "Point", coordinates: [2.3431, 48.8867] },
    category: "rooms"
  },
  {
    title: "Traditional Tatami Room in Asakusa",
    description: "Authentic Japanese tatami room steps away from the iconic Senso-ji Temple.",
    image: { url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/498839589.jpg?k=fcfb3e212a9ff8676fd0fe6ac2bd447b58fca3af52f46261fb42e40caee7989c&o=", filename: "Traditional Tatami Room in Asakusa" },
    price: 8200,
    location: "Tokyo",
    country: "Japan",
    geometry: { type: "Point", coordinates: [139.7967, 35.7148] },
    category: "rooms"
  },
  {
    title: "SoHo Loft Private Bedroom",
    description: "Trendy brick-walled room in the bustling arts and fashion district of downtown Manhattan.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXXFOmuPumbDTL7FL2zkXelflhl7-NXi0hdnd1AAqmnDM6DolK6eUu6of_&s=10", filename: "SoHo Loft Private Bedroom" },
    price: 14000,
    location: "New York",
    country: "United States",
    geometry: { type: "Point", coordinates: [-74.0048, 40.7233] },
    category: "rooms"
  },
  {
    title: "Historic Trastevere Guest Room",
    description: "Quaint rustic room situated along cobblestone streets filled with classic Roman trattorias.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9FanFRoYb5LRxvcVsG7UrtKMIprsF-HLgFQ9fEh2jI7Idb5tSkhGm6tE&s=10", filename: "Historic Trastevere Guest Room" },
    price: 7800,
    location: "Rome",
    country: "Italy",
    geometry: { type: "Point", coordinates: [12.4697, 41.8887] },
    category: "rooms"
  },
  {
    title: "Old Havana Balcony Suite",
    description: "Vibrant high-ceiling private colonial room overlooking the colorful music-filled streets.",
    image: { url: "https://img.cruisecritic.net/img-cc-r/features/2016/10/vista-havana-patio.jpg?auto=format%2Cenhance&fit=crop&crop=entropy&q=50&w=2048&ixlib=react-9.10.0", filename: "Old Havana Balcony Suite" },
    price: 5200,
    location: "Havana",
    country: "Cuba",
    geometry: { type: "Point", coordinates: [-82.3522, 23.1368] },
    category: "rooms"
  },

  // ==========================================
  // 2. ICONIC CITIES (5 India / 5 Out of India)
  // ==========================================
  {
    title: "Ganga Ghats View Haveli",
    description: "Immerse in the eternal city with morning aarti views directly from your private balcony.",
    image: { url: "https://example.com/ganga-ghats-haveli.jpg", filename: "Ganga Ghats View Haveli" },
    price: 4200,
    location: "Varanasi, Uttar Pradesh",
    country: "India",
    geometry: { type: "Point", coordinates: [83.0104, 25.3109] },
    category: "iconic cities"
  },
  {
    title: "Old Delhi Heritage Mansion",
    description: "Classic architecture close to Jama Masjid, Chandni Chowk, and Red Fort.",
    image: { url: "https://cdn.sanity.io/images/ocl5w36p/ihcl_prod/b03d518d1670d7eceb68c338ec7783dddd179656-1840x1320.jpg?w=480&auto=format&dpr=2", filename: "Old Delhi Heritage Mansion" },
    price: 3600,
    location: "New Delhi",
    country: "India",
    geometry: { type: "Point", coordinates: [77.2315, 28.6562] },
    category: "iconic cities"
  },
  {
    title: "Pink City Royal Courtyard",
    description: "Splendid heritage mansion situated within the walled historic city of Jaipur.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiX2EEfmxncNuigfNNVHeKqE20wj44_ounuo71guJ75d2Z-t4jGU1fdcg&s=10", filename: "Pink City Royal Courtyard" },
    price: 5500,
    location: "Jaipur, Rajasthan",
    country: "India",
    geometry: { type: "Point", coordinates: [75.8267, 26.9221] },
    category: "iconic cities"
  },
  {
    title: "Colonial Quarter Apartment",
    description: "Stately residence near Victoria Memorial showcasing Kolkata's rich cultural heritage.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNc4UNZqDbe8prYhU75hkfnzxMQKnd6wq7W-fzCVHP0rLemdQPOjI_hlT0&s=10", filename: "Colonial Quarter Apartment" },
    price: 3100,
    location: "Kolkata, West Bengal",
    country: "India",
    geometry: { type: "Point", coordinates: [88.3426, 22.5448] },
    category: "iconic cities"
  },
  {
    title: "Charminar Cultural Residence",
    description: "Charming stay right in the heart of the historic Nizami city, close to Mecca Masjid.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9wRNh1k-5jeqygFgPpIEMatYqpiEXTZedpbd9P5AKYESedEonB-b4M0M&s=10", filename: "Charminar Cultural Residence" },
    price: 2800,
    location: "Hyderabad, Telangana",
    country: "India",
    geometry: { type: "Point", coordinates: [78.4747, 17.3616] },
    category: "iconic cities"
  },
  {
    title: "Central London Penthouse",
    description: "Luxurious apartment overlooking Big Ben, Westminster Abbey, and the River Thames.",
    image: { url: "https://images.trvl-media.com/lodging/100000000/99440000/99431900/99431837/4041275c.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill", filename: "Central London Penthouse" },
    price: 24000,
    location: "London",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-0.1276, 51.5074] },
    category: "iconic cities"
  },
  {
    title: "Marina Bay Skyline Loft",
    description: "Contemporary skyscraper residence offering floor-to-ceiling panoramic views of Singapore.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_7SB-F0SlpZr0NrM-LMlqQHtn5ct1A1LI_2EVYSke9eLpr8BQyF3cOSY&s=10", filename: "Marina Bay Skyline Loft" },
    price: 21000,
    location: "Singapore",
    country: "Singapore",
    geometry: { type: "Point", coordinates: [103.8519, 1.2902] },
    category: "iconic cities"
  },
  {
    title: "Downtown Dubai Burj Luxury Suite",
    description: "Ultra-luxurious flat with frontline views of the Dubai Fountains and Burj Khalifa.",
    image: { url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/676967092.jpg?k=52c49d007051f71c79d850ecc3bef29250b0546a8c819bbd04cfb5948bd4e32d&o=", filename: "Downtown Dubai Burj Luxury Suite" },
    price: 27000,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] },
    category: "iconic cities"
  },
  {
    title: "Grand Canal Palazzetto",
    description: "Historic Venetian residence positioned directly on the world's most romantic waterway.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-g-d7BzcJVnOkLwHF9cM-Pe54aG4cXvNHKF-d09DNWzVaiTQCjp_CG7WR&s=10", filename: "Grand Canal Palazzetto" },
    price: 19500,
    location: "Venice",
    country: "Italy",
    geometry: { type: "Point", coordinates: [12.3358, 45.4371] },
    category: "iconic cities"
  },
  {
    title: "Shibuya Crossing Designer Studio",
    description: "Modern minimalist flat right in the energetic neon center of Shibuya.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSasUTMrw0TgXZ5xfx6l3xhE4QfwbuTZMS9CdzpTpWM2VNn62KVlk3Q9MXV&s=10", filename: "Shibuya Crossing Designer Studio" },
    price: 11500,
    location: "Tokyo",
    country: "Japan",
    geometry: { type: "Point", coordinates: [139.7016, 35.6580] },
    category: "iconic cities"
  },

  // ==========================================
  // 3. MOUNTAINS (5 India / 5 Out of India)
  // ==========================================
  {
    title: "Badrinath Dham Mountain Haven",
    description: "High altitude alpine stay facing the majestic Nar and Narayana mountain ranges.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-1kXEM7aNF19zTQmluOoHkZ7B8MXSHxl_indmir5mvXsZdgxGpHXMFFHZ&s=10", filename: "Badrinath Dham Mountain Haven" },
    price: 3400,
    location: "Badrinath, Uttarakhand",
    country: "India",
    geometry: { type: "Point", coordinates: [79.4938, 30.7433] },
    category: "mountains"
  },
  {
    title: "Kedarnath Valley Base Camp",
    description: "Spiritual lodge tucked in the Kedarnath range for pilgrims and mountain trekkers.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhwG4TxwVxZrlaJUAerUwtGiFZ5FRuOQYFQDc4bTCuw&s", filename: "Kedarnath Valley Base Camp" },
    price: 2900,
    location: "Kedarnath, Uttarakhand",
    country: "India",
    geometry: { type: "Point", coordinates: [79.0669, 30.7346] },
    category: "mountains"
  },
  {
    title: "Vaishno Devi Foothills Villa",
    description: "Peaceful retreat resting at the base of the divine Trikuta mountains.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEl5UEhq0y49qe0U8AXS7xpMSRT72MgzCb8sv8v45Oc7iwzjjVdlJbo43C&s=10", filename: "Vaishno Devi Foothills Villa" },
    price: 2600,
    location: "Katra, Jammu and Kashmir",
    country: "India",
    geometry: { type: "Point", coordinates: [74.9529, 32.9928] },
    category: "mountains"
  },
  {
    title: "Kanchenjunga Vista Cottage",
    description: "Wake up to breathtaking golden sunrise views over Mount Kanchenjunga.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEl5UEhq0y49qe0U8AXS7xpMSRT72MgzCb8sv8v45Oc7iwzjjVdlJbo43C&s=10", filename: "Kanchenjunga Vista Cottage" },
    price: 4100,
    location: "Darjeeling, West Bengal",
    country: "India",
    geometry: { type: "Point", coordinates: [88.2627, 27.0410] },
    category: "mountains"
  },
  {
    title: "Spiti Valley Cliffside Home",
    description: "Traditional mud-brick homestay perched dramatically above the Spiti river canyon.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYRPXNdySvDD4EdiFjTvfZXumkT5FFV90ajk7y1mROxolSzQbtEEPlwLw&s=10", filename: "Spiti Valley Cliffside Home" },
    price: 2200,
    location: "Kaza, Himachal Pradesh",
    country: "India",
    geometry: { type: "Point", coordinates: [78.0322, 32.2276] },
    category: "mountains"
  },
  {
    title: "Matterhorn Alpine Chalet",
    description: "Ski-in ski-out luxury wooden chalet with direct views of the Matterhorn peak.",
    image: { url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/95477145.jpg?k=e1aff07bc35ff3cf8fde2ae8c39affda913788d41fe57b8f883a6f32885c5c79&o=", filename: "Matterhorn Alpine Chalet" },
    price: 32000,
    location: "Zermatt",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.7491, 45.9765] },
    category: "mountains"
  },
  {
    title: "Banff National Ridge Cabin",
    description: "Cozy cedar log cabin surrounded by dramatic Canadian Rocky Mountain vistas.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJjN1uolbPH_ZWLILegdo9rQnDkOhnDCogjPnr7sQlnsc0kbQCpqHZmP_8&s=10", filename: "Banff National Ridge Cabin" },
    price: 18500,
    location: "Banff, Alberta",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-115.5708, 51.1784] },
    category: "mountains"
  },
  {
    title: "Patagonia Andean Refuge",
    description: "Rugged yet modern lodge nestled beneath the granite towers of Torres del Paine.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPL3WwE60HxA7YXX0KkREIhgTSVyRjuz4974xtpMfaEuZ2SYP0YcDs6vZE&s=10", filename: "Patagonia Andean Refuge" },
    price: 22000,
    location: "Torres del Paine",
    country: "Chile",
    geometry: { type: "Point", coordinates: [-72.9989, -51.2532] },
    category: "mountains"
  },
  {
    title: "Dolomites Mountain Panorama Suite",
    description: "Modern architectural gem with frameless glass windows framing the jagged Italian peaks.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrtwV7tbslKpjR87Ie51nDmc43-UWVAVtHevim4tdmi6W3nkoWNfQT3UJ3&s=10", filename: "Dolomites Mountain Panorama Suite" },
    price: 26000,
    location: "Cortina d'Ampezzo",
    country: "Italy",
    geometry: { type: "Point", coordinates: [12.1357, 46.5405] },
    category: "mountains"
  },
  {
    title: "Queenstown Southern Alps Lodge",
    description: "Stunning mountain-view retreat overlooking Lake Wakatipu and the Remarkables range.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfnNp0Qea3vP3TuhxDtVNa96a8uatQQCsDxLS5wKRERdbj1xo20Jxj8gU&s=10", filename: "Queenstown Southern Alps Lodge" },
    price: 17500,
    location: "Queenstown",
    country: "New Zealand",
    geometry: { type: "Point", coordinates: [168.6626, -45.0312] },
    category: "mountains"
  },

  // ==========================================
  // 4. CASTLES (5 India / 5 Out of India)
  // ==========================================
  {
    title: "Golden Fort Living Quarters",
    description: "Live inside the UNESCO living heritage fort of Jaisalmer surrounded by golden sandstone.",
    image: { url: "https://www.savaari.com/blog/wp-content/uploads/2024/02/Jaisalmer_fort1.webp", filename: "Golden Fort Living Quarters" },
    price: 7500,
    location: "Jaisalmer, Rajasthan",
    country: "India",
    geometry: { type: "Point", coordinates: [70.9160, 26.9157] },
    category: "castles"
  },
  {
    title: "Neemrana Historic Fortress",
    description: "Centuries-old tiered hill fortress offering regal court architecture and sunset vistas.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdemShh3pwh_RdVuJX0q75dMVw3UD4an16R8u0_UefibuaFxeY1cpXBcU&s=10", filename: "Neemrana Historic Fortress" },
    price: 13500,
    location: "Alwar, Rajasthan",
    country: "India",
    geometry: { type: "Point", coordinates: [76.3883, 27.9889] },
    category: "castles"
  },
  {
    title: "Chittorgarh Royal Citadel Suite",
    description: "Regal accommodation standing proud beside the greatest historic fortress of Mewar.",
    image: { url: "https://pix10.agoda.net/hotelImages/50036/0/79d70041f0a9fafa5265b54df8cc57d0.png?ce=3&s=414x232", filename: "Chittorgarh Royal Citadel Suite" },
    price: 6800,
    location: "Chittorgarh, Rajasthan",
    country: "India",
    geometry: { type: "Point", coordinates: [74.6399, 24.8887] },
    category: "castles"
  },
  {
    title: "Gwalior Fort Heritage Mahal",
    description: "Palatial rooms near the blue-tiled Man Singh Palace atop Gopachal hill.",
    image: { url: "https://www.poojn.in/wp-content/uploads/2025/04/Beyond-the-Caves-Gwaliors-Hidden-Heritage-Forts-Palaces-More.jpeg.jpg", filename: "Gwalior Fort Heritage Mahal" },
    price: 5900,
    location: "Gwalior, Madhya Pradesh",
    country: "India",
    geometry: { type: "Point", coordinates: [78.1691, 26.2307] },
    category: "castles"
  },
  {
    title: "Mehrangarh Ramparts Haveli",
    description: "Aristocratic haveli tucked directly underneath the towering ramparts of Mehrangarh.",
    image: { url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/33/99/f3/d2/caption.jpg?w=700&h=400&s=1", filename: "Mehrangarh Ramparts Haveli" },
    price: 8900,
    location: "Jodhpur, Rajasthan",
    country: "India",
    geometry: { type: "Point", coordinates: [73.0189, 26.2980] },
    category: "castles"
  },
  {
    title: "Scottish Highlands Stone Castle",
    description: "Authentic 16th-century Baronial castle complete with turrets, grand hall, and private loch.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrRVYxhLWY9QcRVO401PBk2ix6dB8Ir38HKmyQ7YF_CQBLjkx63esntY&s=10", filename: "Scottish Highlands Stone Castle" },
    price: 36000,
    location: "Inverness",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-4.2247, 57.4778] },
    category: "castles"
  },
  {
    title: "Château de la Loire",
    description: "Fairytale French renaissance castle set within manicured gardens and vineyards.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGdokdP_B-0LWSIJGiaRed9B0n7Q3vr5cs82_C7Q3K9llcTCsjtB9KNVQ&s=10", filename: "Château de la Loire" },
    price: 31000,
    location: "Amboise",
    country: "France",
    geometry: { type: "Point", coordinates: [0.9858, 47.4132] },
    category: "castles"
  },
  {
    title: "Rhine Gorge Medieval Castle",
    description: "Ancient stone fortress perched high above the twisting Rhine river valley.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLh9P6HgUeYtRsEFCbcmo9DktAC3kBEr6nACCC96ppnIX0mTIu0gyCb6E&s=10", filename: "Rhine Gorge Medieval Castle" },
    price: 23000,
    location: "Koblenz",
    country: "Germany",
    geometry: { type: "Point", coordinates: [7.5978, 50.3569] },
    category: "castles"
  },
  {
    title: "Castello Medievale in Umbria",
    description: "Restored fortified Italian fortress boasting private battlements and olive hills.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvjbQ25cKcwAEEF-mhar10WA9JbdwM4pFCHmq2sFf5zcEAr80ww8Gm_njn&s=10", filename: "Castello Medievale in Umbria" },
    price: 29000,
    location: "Perugia",
    country: "Italy",
    geometry: { type: "Point", coordinates: [12.3908, 43.1107] },
    category: "castles"
  },
  {
    title: "Castelo Medieval de Sintra",
    description: "Romantic castle estate surrounded by mist-covered granite hills and lush forests.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLBLA97w2msnKBPOfmZf3RDywDWIanTIjtrub4-etLiw&s=10", filename: "Castelo Medieval de Sintra" },
    price: 27500,
    location: "Sintra",
    country: "Portugal",
    geometry: { type: "Point", coordinates: [-9.3882, 38.7992] },
    category: "castles"
  },
// ==========================================
  // 5. AMAZING POOLS (5 India / 5 Out of India)
  // ==========================================
  {
    title: "Rishikesh Ganges Infinity Pool Villa",
    description: "Private cliffside infinity pool looking directly down at the holy emerald Ganga waters.",
    image: { url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSocGATIqfhMpCfvSduDPocHkcY8_jFx2zYdXG9i-DPwRnn6ZjpNPpHY&s=10", filename: "Rishikesh Ganges Infinity Pool Villa" },
    price: 11000,
    location: "Rishikesh, Uttarakhand",
    country: "India",
    geometry: { type: "Point", coordinates: [78.3248, 30.1319] },
    category: "amazing pools"
  },
  {
    title: "Udaipur Pichola Marble Pool Estate",
    description: "Heritage palace pool surrounded by intricately carved white marble jharokhas.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqVUwL-ZYbT4l9NGCZBtgmpipYiE0TGQ9gqbvlxXkHZQ&s", filename: "Udaipur Pichola Marble Pool Estate" },
    price: 16500,
    location: "Udaipur, Rajasthan",
    country: "India",
    geometry: { type: "Point", coordinates: [73.6800, 24.5764] },
    category: "amazing pools"
  },
  {
    title: "Kumarakom Backwaters Lagoon Pool",
    description: "Meandering freshwater lagoon pool wrapping around tropical palm cottages.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoNvcUYCeXPDLG5okCeMjn3GXVzSOZUGjAbWML9y0X9ui_-K3w3VA2-nYl&s=10", filename: "Kumarakom Backwaters Lagoon Pool" },
    price: 9500,
    location: "Kumarakom, Kerala",
    country: "India",
    geometry: { type: "Point", coordinates: [76.4300, 9.6175] },
    category: "amazing pools"
  },
  {
    title: "Goan Cliffside Horizon Pool",
    description: "Stunning private pool perched high above the Arabian Sea for unforgettable sunsets.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmN45O4JEAvGlyF79YrgQ1Izuqz4uNbro4qRV3y4VaI7XYm2_RlM91E7fR&s=10", filename: "Goan Cliffside Horizon Pool" },
    price: 12500,
    location: "Vagator, Goa",
    country: "India",
    geometry: { type: "Point", coordinates: [73.7336, 15.5997] },
    category: "amazing pools"
  },
  {
    title: "Wayanad Rainforest Plunge Villa",
    description: "Secluded forest villa featuring an infinity pool merging seamlessly with mist-covered woods.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVOfMstDZ0YzrUYHx7tD26FjCVai1uky5e8ri1Hj8KHn14REx8m0YRh5g&s=10", filename: "Wayanad Rainforest Plunge Villa" },
    price: 8800,
    location: "Wayanad, Kerala",
    country: "India",
    geometry: { type: "Point", coordinates: [76.1320, 11.6854] },
    category: "amazing pools"
  },
  {
    title: "Santorini Caldera Cave Pool",
    description: "Sculpted whitewashed cave pool looking straight out across the Aegean volcano caldera.",
    image: { url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/301062720.jpg?k=26b4fcb91dfab639ef16d6a367446f40524748e18248a2dc7ef24bd61d07322e&o=", filename: "Santorini Caldera Cave Pool" },
    price: 34000,
    location: "Oia, Santorini",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.3753, 36.4618] },
    category: "amazing pools"
  },
  {
    title: "Ubud Hanging Jungle Infinity Pool",
    description: "Two-tiered cascading swimming pool suspended high above the sacred Ayung river valley.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe9afFLyVrSBciOpTIXjlmOOqDphrPDY56sitbm7tpNiACKQy88DZnkb52&s=10", filename: "Ubud Hanging Jungle Infinity Pool" },
    price: 28000,
    location: "Bali",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.2426, -8.4326] },
    category: "amazing pools"
  },
  {
    title: "Palm Jumeirah Private Pool Villa",
    description: "Direct beachfront villa with a temperature-controlled swimming pool facing the Dubai skyline.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMWXgnj_u5iheiOwVl8MX6OqUvs5kRGq9Kj3su_HpwsXBs67DG9Of3IyX1&s=10", filename: "Palm Jumeirah Private Pool Villa" },
    price: 38000,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: { type: "Point", coordinates: [55.1378, 25.1124] },
    category: "amazing pools"
  },
  {
    title: "Swiss Alpine Heated Sky Pool",
    description: "Steaming heated outdoor pool surrounded by heavy snowfall and rugged alpine peaks.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5-Ggl2gziZKRqFnxklo_p73wYUYxm-cUc8cbRCZmkhtIUfVlb94BiBdY&s=10", filename: "Swiss Alpine Heated Sky Pool" },
    price: 33000,
    location: "Adelboden",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.5606, 46.4919] },
    category: "amazing pools"
  },
  {
    title: "Phuket Oceanfront Glass Pool Villa",
    description: "Cantilevered glass-bottomed infinity pool overlooking the turquoise Andaman Sea.",
    image: { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-876704494942669908/original/fa20d3ee-596b-4267-8ea2-e6ae824a2299.jpeg?im_w=720", filename: "Phuket Oceanfront Glass Pool Villa" },
    price: 24500,
    location: "Phuket",
    country: "Thailand",
    geometry: { type: "Point", coordinates: [98.2798, 7.9365] },
    category: "amazing pools"
  },
// ==========================================
  // 6. CAMPING (5 India / 5 Out of India)
  // ==========================================
  {
    title: "Pangong Tso Lakeside Stargazing Camp",
    description: "High-altitude luxury tents set up on the shores of crystal blue Pangong Lake.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReQZT2ClWheEs_JPdD5GHr3oI5oEDPfCYUDBRP5wg-9gEyFt9b2BLn7YMt&s=10", filename: "Pangong Tso Lakeside Stargazing Camp" },
    price: 3200,
    location: "Leh Ladakh",
    country: "India",
    geometry: { type: "Point", coordinates: [78.4419, 33.7595] },
    category: "camping"
  },
  {
    title: "Thar Desert Royal Swiss Tents",
    description: "Camp beneath millions of stars among the shifting sand dunes with Rajasthani folk music.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ1Tl1M8JK3PbG85jeJFiiKU-Emv2xecxlZDeU2p9pMg&s=10", filename: "Thar Desert Royal Swiss Tents" },
    price: 2500,
    location: "Sam Sand Dunes, Jaisalmer",
    country: "India",
    geometry: { type: "Point", coordinates: [70.5284, 26.8335] },
    category: "camping"
  },
  {
    title: "Tirthan Valley Riverbed Camp",
    description: "Eco-camping right beside the crystal clear trout streams of the Great Himalayan region.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurRSeSLlum2CYOvAZ7A7ZE6kTbq7gq_dgRkhLhH4FNQ&s=10", filename: "Tirthan Valley Riverbed Camp" },
    price: 2100,
    location: "Tirthan Valley, Himachal Pradesh",
    country: "India",
    geometry: { type: "Point", coordinates: [77.4042, 31.6369] },
    category: "camping"
  },
  {
    title: "Kumbh Divine Riverside Tents",
    description: "Spiritual tented enclave set along the serene banks of the sacred Sangam.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJ1PiVNSGdh3QeiSF7xer3AUfJYClMuANTsRW4FIHrDspE9LFDHKauXE&s=10", filename: "Kumbh Divine Riverside Tents" },
    price: 2800,
    location: "Prayagraj, Uttar Pradesh",
    country: "India",
    geometry: { type: "Point", coordinates: [81.8883, 25.4267] },
    category: "camping"
  },
  {
    title: "Rann of Kutch White Desert Camp",
    description: "Luxury tented township set on the shimmering white salt desert under the full moon.",
    image: { url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/92/32/25/kutch-classic-rider-camp.jpg", filename: "Rann of Kutch White Desert Camp" },
    price: 4500,
    location: "Dhordo, Gujarat",
    country: "India",
    geometry: { type: "Point", coordinates: [69.5100, 23.7850] },
    category: "camping"
  },
  {
    title: "Yosemite Valley Wilderness Camp",
    description: "Canvas tent cabins pitched beneath the colossal granite monolith of El Capitan.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTidgVGmkyedeQzJqfvAW_wf1NXdfp0DtVU1pu2sKoCCW_QxRxP2qsh0Q1&s=10", filename: "Yosemite Valley Wilderness Camp" },
    price: 8500,
    location: "California",
    country: "United States",
    geometry: { type: "Point", coordinates: [-119.5383, 37.8651] },
    category: "camping"
  },
  {
    title: "Wadi Rum Martian Dome Camp",
    description: "Futuristic geodesic domes set inside the majestic red sandstone desert of Jordan.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjOVQtXvta_-ZK-kMspmpL48lle1tPH1BuzsiNfjv-BWto1vXaT8Gz1Esl&s=10", filename: "Wadi Rum Martian Dome Camp" },
    price: 15500,
    location: "Wadi Rum",
    country: "Jordan",
    geometry: { type: "Point", coordinates: [35.4337, 29.5744] },
    category: "camping"
  },
  {
    title: "Sahara Luxury Bedouin Bivouac",
    description: "Handcrafted berber tents tucked deep within the golden ergonomics of Erg Chebbi.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPYo79W-zkWU8yrWq19AoHZMsN29vHkkmnJVJ3S4OSodSbaEhy6d_lYAc&s=10", filename: "Sahara Luxury Bedouin Bivouac" },
    price: 13000,
    location: "Merzouga",
    country: "Morocco",
    geometry: { type: "Point", coordinates: [-4.0125, 31.0802] },
    category: "camping"
  },
  {
    title: "Outback Under Canvas Glamping",
    description: "Eco-luxury tented pavilions boasting unobstructed morning views of sacred Uluru.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnvURvE_R3nodiqApQGvlYN8pHiNyZO71vVl5rN7RIJTOlIzeFPiDWzUE&s=10", filename: "Outback Under Canvas Glamping" },
    price: 21000,
    location: "Yulara",
    country: "Australia",
    geometry: { type: "Point", coordinates: [130.9889, -25.2406] },
    category: "camping"
  },
  {
    title: "Maasai Mara Luxury Safari Camp",
    description: "Canvas safari pavilions pitched along the riverbanks frequented by wildlife herds.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwVDF6Yc2TOjs5mLkSvdVetDT7P8QPLhVoubzEr9A6hcQm49XnzxsUoo&s=10", filename: "Maasai Mara Luxury Safari Camp" },
    price: 26000,
    location: "Maasai Mara",
    country: "Kenya",
    geometry: { type: "Point", coordinates: [35.1439, -1.4061] },
    category: "camping"
  },

  // ==========================================
  // 7. FARMS (5 India / 5 Out of India)
  // ==========================================
  {
    title: "Dwaraka Gaushala & Organic Farm",
    description: "Peaceful pastoral farm stay focused on organic living and cow shelter near Lord Krishna's shrine.",
    image: { url: "", filename: "Dwaraka Gaushala & Organic Farm" },
    price: 2100,
    location: "Dwarka, Gujarat",
    country: "India",
    geometry: { type: "Point", coordinates: [68.9685, 22.2442] },
    category: "farms"
  },
  {
    title: "Punjab Mustard Fields Farmstay",
    description: "Authentic Punjabi farm experience with tractor rides, fresh makki-roti, and lush fields.",
    image: { url: "https://content.jdmagicbox.com/v2/comp/delhi/c6/011pxx11.xx11.101011173657.m4c6/catalogue/shri-krishna-gaushala-bawana-delhi-cow-care-centres-lezv1p.jpg", filename: "Punjab Mustard Fields Farmstay" },
    price: 2400,
    location: "Hoshiarpur, Punjab",
    country: "India",
    geometry: { type: "Point", coordinates: [75.9115, 31.5273] },
    category: "farms"
  },
  {
    title: "Coorg Spice Plantation Homestay",
    description: "Colonial-style farmhouse surrounded by aroma-rich coffee plants and black pepper vines.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfllkgpZBQfyae6FTCxYSzBwCVAMPoBeqp5CuFKGHKzfpNDLfCYnLv7Q&s=10", filename: "Coorg Spice Plantation Homestay" },
    price: 3600,
    location: "Madikeri, Karnataka",
    country: "India",
    geometry: { type: "Point", coordinates: [75.7382, 12.4244] },
    category: "farms"
  },
  {
    title: "Munnar Cardamom Plantation Farm",
    description: "Peaceful misty farmhouse estate tucked inside organic tea and cardamom valleys.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw_Kk9fSm42Th5XK3rnKQyO8vATVzx1lRtIPT3UkifC1WUe6nbldMG9kU&s=10", filename: "Munnar Cardamom Plantation Farm" },
    price: 3200,
    location: "Munnar, Kerala",
    country: "India",
    geometry: { type: "Point", coordinates: [77.0595, 10.0889] },
    category: "farms"
  },
  {
    title: "Konkan Alphonso Mango Orchards",
    description: "Rustic coastal farmstay surrounded by hundreds of sweet Alphonso mango trees.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUSXqgcKKIzYf8KQvXzBCr4g9YKiz3OYXaZQ_IbaNi3WawiYHV88w1Mg&s=10", filename: "Konkan Alphonso Mango Orchards" },
    price: 2700,
    location: "Ratnagiri, Maharashtra",
    country: "India",
    geometry: { type: "Point", coordinates: [73.3120, 16.9902] },
    category: "farms"
  },
  {
    title: "Tuscany Chianti Wine Estate",
    description: "Restored 17th-century stone farmhouse encircled by olive groves and rolling vineyards.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3qNzBUnlom-idu_CC9D9SgFrOvkbGdHdEDREzaQMyjA&s=10", filename: "Tuscany Chianti Wine Estate" },
    price: 15500,
    location: "Siena, Tuscany",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.3308, 43.3188] },
    category: "farms"
  },
  {
    title: "Provence Lavender Farmhouse",
    description: "Charming stone bastide nestled directly amidst purple summer lavender fields.",
    image: { url: "https://i.pinimg.com/474x/a2/7a/a1/a27aa138a754acfcad5c5d0a238e9ac2.jpg", filename: "Provence Lavender Farmhouse" },
    price: 17200,
    location: "Valensole",
    country: "France",
    geometry: { type: "Point", coordinates: [5.9839, 43.8365] },
    category: "farms"
  },
  {
    title: "Bavarian Alpine Dairy Farm",
    description: "Traditional wooden timber farmhouse with grazing cows and mountain meadows.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZXIqgtgF9LBksoJHAuy_EYFy21_UVYzFvU5ArqJp_eHNxMmeMG6-6hnDP&s=10", filename: "Bavarian Alpine Dairy Farm" },
    price: 11000,
    location: "Garmisch-Partenkirchen",
    country: "Germany",
    geometry: { type: "Point", coordinates: [11.0955, 47.4917] },
    category: "farms"
  },
  {
    title: "Mendoza Malbec Vineyard Ranch",
    description: "Sprawling wine estate nestled directly in the foothills of the high Andes.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmn4_Iul5V5yxZ0h7c4Xcg_LELIPE4FcOmjCddfpXXTw&s=10", filename: "Mendoza Malbec Vineyard Ranch" },
    price: 14000,
    location: "Mendoza",
    country: "Argentina",
    geometry: { type: "Point", coordinates: [-68.8458, -32.8895] },
    category: "farms"
  },
  {
    title: "Kyoto Organic Green Tea Estate",
    description: "Tranquil farmhouse offering hands-on matcha harvesting in rural Uji hills.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKcdUC-5oXOuTiqcy7TXYe3kKXLKF9QPBv1kDjnRshxzKGhaEZEuTvhKs&s=10", filename: "Kyoto Organic Green Tea Estate" },
    price: 13200,
    location: "Uji, Kyoto",
    country: "Japan",
    geometry: { type: "Point", coordinates: [135.8050, 34.8900] },
    category: "farms"
  },

  // ==========================================
  // 8. ARCTIC (5 India / 5 Out of India)
  // ==========================================
  {
    title: "Amarnath Holy Cave Snow Camp",
    description: "Sub-zero frozen mountain base camp set amidst pristine Himalayan glaciers.",
    image: { url: "https://blog.amarnathjiyatra.com/wp-content/uploads/2026/01/amarnath-cave.webp", filename: "Amarnath Holy Cave Snow Camp" },
    price: 2700,
    location: "Baltal, Jammu and Kashmir",
    country: "India",
    geometry: { type: "Point", coordinates: [75.2500, 34.2156] },
    category: "arctic"
  },
  {
    title: "Chadar Frozen River Trek Shelter",
    description: "Extreme winter stone shelter along the world-famous frozen Zanskar river route.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSsVHtdF1M4T4EeH73gUNq8Lr4yEMtMXDz6Xqn-gHVN8HgcpeB2J0v_8n6&s=10", filename: "Chadar Frozen River Trek Shelter" },
    price: 3100,
    location: "Zanskar, Ladakh",
    country: "India",
    geometry: { type: "Point", coordinates: [76.9192, 33.4500] },
    category: "arctic"
  },
  {
    title: "Drass Winter Haven",
    description: "Cozy wood-heated stay in Drass, renowned as the second coldest inhabited place on earth.",
    image: { url: "https://cdn.shopify.com/s/files/1/0867/4417/0787/files/Rangdum_valley_480x480.webp?v=1726136843", filename: "Drass Winter Haven" },
    price: 2400,
    location: "Drass, Ladakh",
    country: "India",
    geometry: { type: "Point", coordinates: [75.7600, 34.4290] },
    category: "arctic"
  },
  {
    title: "Sylvan Gulmarg Igloo Cabin",
    description: "Snow-bound winter pod surrounded by pine forests and high-altitude powder slopes.",
    image: { url: "https://assets.cntraveller.in/photos/60ba25637f89ba538d139a7f/16:9/w_2560%2Cc_limit/Gulmarg-igloo-cafe-1.jpg", filename: "Sylvan Gulmarg Igloo Cabin" },
    price: 6500,
    location: "Gulmarg, Jammu and Kashmir",
    country: "India",
    geometry: { type: "Point", coordinates: [74.3805, 34.0484] },
    category: "arctic"
  },
  {
    title: "Sissu Glacial Snow Cottage",
    description: "Chilled valley stay near the Atal Tunnel framed by frozen waterfalls and white peaks.",
    image: { url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/856874016.jpg?k=7aa58a1711180a3a9db3cbbf250bb6f0172d4bf44381573a75222dbe12bd89ea&o=", filename: "Sissu Glacial Snow Cottage" },
    price: 3400,
    location: "Lahaul Valley, Himachal Pradesh",
    country: "India",
    geometry: { type: "Point", coordinates: [77.1235, 32.4837] },
    category: "arctic"
  },
  {
    title: "Rovaniemi Aurora Glass Igloo",
    description: "Heated thermal glass igloo built for viewing the Northern Lights right from your bed.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQESrqWH_p_y1dOWNTTLW46CqhNV5_YRoQGs0wyfXhI39ThLhhicllXGXk&s=10", filename: "Rovaniemi Aurora Glass Igloo" },
    price: 29000,
    location: "Lapland",
    country: "Finland",
    geometry: { type: "Point", coordinates: [25.7294, 66.5039] },
    category: "arctic"
  },
  {
    title: "Tromso Fjord Arctic Cabin",
    description: "Traditional waterfront red rorbu lodge situated right inside the Arctic Circle.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6mklTKDQ16dDn5oC3Rfg56HGoe8YrXyFEP2VrMMfkg&s=10", filename: "Tromso Fjord Arctic Cabin" },
    price: 22000,
    location: "Tromso",
    country: "Norway",
    geometry: { type: "Point", coordinates: [18.9553, 69.6492] },
    category: "arctic"
  },
  {
    title: "Svalbard Glacier Outpost",
    description: "High-arctic polar lodge designed for spotting walruses and watching polar expeditions.",
    image: { url: "https://wremertravels.com/wp-content/uploads/2020/07/img_5702.jpg?w=750", filename: "Svalbard Glacier Outpost" },
    price: 31000,
    location: "Longyearbyen",
    country: "Norway",
    geometry: { type: "Point", coordinates: [15.6353, 78.2232] },
    category: "arctic"
  },
  {
    title: "Ilulissat Icefjord Eco-Lodge",
    description: "Rugged eco-luxury shelter overlooking giant icebergs drifting through Disko Bay.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYK29JgQijXDFD40w_iLv5qhzC0KzF8GH8z2F6LGf3VQ2WF6h5ZzUVj1Q7&s=10", filename: "Ilulissat Icefjord Eco-Lodge" },
    price: 27500,
    location: "Ilulissat",
    country: "Greenland",
    geometry: { type: "Point", coordinates: [-51.0986, 69.2198] },
    category: "arctic"
  },
  {
    title: "Jukkasjärvi Icehotel Suite",
    description: "Individually sculpted ice room rebuilt each winter out of natural river Torne ice.",
    image: { url: "https://www.icehotel.com/sites/cb_icehotelweb/files/styles/3_2_1200x800/public/icce851.jpg.webp?itok=qkmEA-dV", filename: "Jukkasjärvi Icehotel Suite" },
    price: 35000,
    location: "Kiruna",
    country: "Sweden",
    geometry: { type: "Point", coordinates: [20.5956, 67.8524] },
    category: "arctic"
  },

  // ==========================================
  // 9. BEACH (5 India / 5 Out of India)
  // ==========================================
  {
    title: "Rameshwaram Coastal Retreat",
    description: "Serene beachside rooms situated near the sacred Agni Theertham and Ramanathaswamy Temple.",
    image: { url: "https://pix10.agoda.net/hotelImages/31125258/-1/cc07af7f85bb0860faf48f6cecec8fa3.jpg?va=1&ca=28&ce=0&s=414x232", filename: "Rameshwaram Coastal Retreat" },
    price: 2200,
    location: "Rameshwaram, Tamil Nadu",
    country: "India",
    geometry: { type: "Point", coordinates: [79.3129, 9.2876] },
    category: "beach"
  },
  {
    title: "Radhanagar White Sand Cottage",
    description: "Eco-thatched villa mere footsteps away from Asia's cleanest and most iconic beach.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN4Ard8pKgOwyC_amXxsWJBVAmqiyK2IkMjr_tF0kF7K9kZXQN-UqfqWmC&s=10", filename: "Radhanagar White Sand Cottage" },
    price: 6800,
    location: "Havelock Island, Andaman",
    country: "India",
    geometry: { type: "Point", coordinates: [92.9554, 11.9840] },
    category: "beach"
  },
  {
    title: "Somnath Sea-Facing Cottage",
    description: "Wake up to Arabian sea waves crashing gently beside the majestic Somnath Jyotirlinga.",
    image: { url: "https://media-cdn.tripadvisor.com/media/photo-s/0a/f9/70/8a/view-somnath-mandir-from.jpg", filename: "Somnath Sea-Facing Cottage" },
    price: 2600,
    location: "Prabhas Patan, Gujarat",
    country: "India",
    geometry: { type: "Point", coordinates: [70.4012, 20.8880] },
    category: "beach"
  },
  {
    title: "Varkala Cliffside Ocean Villa",
    description: "Dramatic red cliff cottage with steps leading directly down to Papanasam beach.",
    image: { url: "https://res.cloudinary.com/voyehomes/image/upload/w_1280,f_auto,c_scale/v1687159355/property/73/image/2ec9a022-0e7d-4b37-a85b-ff2706bf9c8a.jpg", filename: "Varkala Cliffside Ocean Villa" },
    price: 3500,
    location: "Varkala, Kerala",
    country: "India",
    geometry: { type: "Point", coordinates: [76.7163, 8.7379] },
    category: "beach"
  },
  {
    title: "Gokarna Om Beach Chalet",
    description: "Laidback coconut-shaded beachfront hut close to the ancient Mahabaleshwar Temple.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwjXyLL2lKzCetQ2QYJ1m469wqxxNolA9N9XDNnkxqxGO7fAgwUt2u1Nj&s=10", filename: "Gokarna Om Beach Chalet" },
    price: 2900,
    location: "Gokarna, Karnataka",
    country: "India",
    geometry: { type: "Point", coordinates: [74.3188, 14.5186] },
    category: "beach"
  },
  {
    title: "Bora Bora Overwater Bungalow",
    description: "Luxury thatched bungalow standing directly atop turquoise lagoon waters with glass floor panels.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH8WzczT4onlDqdzN82yp1E10Eyh_x55SdgzzWnjBHBctxc0gtNCweJLUV&s=10", filename: "Bora Bora Overwater Bungalow" },
    price: 42000,
    location: "Bora Bora",
    country: "French Polynesia",
    geometry: { type: "Point", coordinates: [-151.7415, -16.5004] },
    category: "beach"
  },
  {
    title: "Uluwatu Sunset Surf Villa",
    description: "Oceanfront villa perched above world-renowned surf breaks on the southern tip of Bali.",
    image: { url: "https://i0.wp.com/uluwatusurfvillas.com/wp-content/uploads/2024/02/uluwatusurfvillas-mana.jpg?fit=1024%2C682&ssl=1", filename: "Uluwatu Sunset Surf Villa" },
    price: 13500,
    location: "Bali",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.0847, -8.8149] },
    category: "beach"
  },
  {
    title: "Copacabana Seafront Flat",
    description: "Vibrant oceanview apartment looking out directly over Rio's world-famous beachfront.",
    image: { url: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/307452928.jpg?k=8e1eb3475d9bb69d419cd1c1c70afc577cd5d9af03ca1201bbe02d38afa99db3&o=", filename: "Copacabana Seafront Flat" },
    price: 11000,
    location: "Rio de Janeiro",
    country: "Brazil",
    geometry: { type: "Point", coordinates: [-43.1822, -22.9711] },
    category: "beach"
  },
  {
    title: "Tulum Bohemian Beachfront Cabana",
    description: "Eco-chic wooden cabana set right on powder-soft white Caribbean sand.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk5Tq1ZjD-aRHmbp-ycYkipf-AoKSsmkXNREkm5TfFmoPEemQxlWSXJho&s=10", filename: "Tulum Bohemian Beachfront Cabana" },
    price: 18000,
    location: "Tulum, Quintana Roo",
    country: "Mexico",
    geometry: { type: "Point", coordinates: [-87.4294, 20.2114] },
    category: "beach"
  },
  {
    title: "Bondi Beach Coastal Studio",
    description: "Chic modern apartment located steps from the world-famous Bondi beach boardwalk.",
    image: { url: "https://q-xx.bstatic.com/xdata/images/hotel/840x460/410476110.jpg?k=32822e66485c97b4322c3bf38f8ebe72c9d6b4d706256d00526859809411db4b&o=", filename: "Bondi Beach Coastal Studio" },
    price: 14500,
    location: "Sydney",
    country: "Australia",
    geometry: { type: "Point", coordinates: [151.2743, -33.8915] },
    category: "beach"
  },

  // ==========================================
  // 10. BOATS (5 India / 5 Out of India)
  // ==========================================
  {
    title: "Alleppey Heritage Kettuvallam Houseboat",
    description: "Traditional thatched houseboat cruising through lush paddy fields and peaceful canals.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCVbdgGEIeD71SBMC0zUqZqn8La91WSWxxiVbqzSlbhgbHM9LEZm0h1vY&s=10", filename: "Alleppey Heritage Kettuvallam Houseboat" },
    price: 7500,
    location: "Alappuzha, Kerala",
    country: "India",
    geometry: { type: "Point", coordinates: [76.3388, 9.4981] },
    category: "boats"
  },
  {
    title: "Dal Lake Royal Carved Cedar Houseboat",
    description: "Intricately carved Kashmiri wooden houseboat with Shikara rides on the tranquil Dal Lake.",
    image: { url: "https://www.wildfrontierstravel.com/media/cache/page_image_large/upload/mirror/www-wildfrontierstravel-com/470f1b1e_e83f5a6f7ef6516c1f1083ecdfc29717.jpeg", filename: "Dal Lake Royal Carved Cedar Houseboat" },
    price: 5500,
    location: "Srinagar, Jammu and Kashmir",
    country: "India",
    geometry: { type: "Point", coordinates: [74.8723, 34.0837] },
    category: "boats"
  },
  {
    title: "Varanasi Ganga Heritage Bajra Boat",
    description: "Traditional wooden river barge fitted with suites to experience sunrise and evening Ganga aarti.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT14qOBr4R_6xUVa9jfGB7lprQUJ-RrkXVP4UyXu2xi535RxHeJ5gvyxN_X&s=10", filename: "Varanasi Ganga Heritage Bajra Boat" },
    price: 4800,
    location: "Varanasi, Uttar Pradesh",
    country: "India",
    geometry: { type: "Point", coordinates: [83.0076, 25.3096] },
    category: "boats"
  },
  {
    title: "Sunderbans Mangrove Safari Cruiser",
    description: "River safari vessel anchored deep within the tidal mangrove territory of the Royal Bengal Tiger.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbwdfQcCF4dippU6W1MskpMeWUUfQ09s179rlYx7aqBh_v8hsbawQSTpE&s=10", filename: "Sunderbans Mangrove Safari Cruiser" },
    price: 6200,
    location: "Sundarbans, West Bengal",
    country: "India",
    geometry: { type: "Point", coordinates: [88.8530, 21.9497] },
    category: "boats"
  },
  {
    title: "Brahmaputra River Luxury Vessel",
    description: "River cruiser sailing through tea country and along the borders of Kaziranga.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuZ3-sfo7jewhtpE7koFLbvxe6clU5t8j1Bc3j_IsIoHaa74N6IabCIKP&s=10", filename: "Brahmaputra River Luxury Vessel" },
    price: 8900,
    location: "Guwahati, Assam",
    country: "India",
    geometry: { type: "Point", coordinates: [91.7362, 26.1445] },
    category: "boats"
  },
  {
    title: "Amsterdam Prinsengracht Canal Houseboat",
    description: "Charming historic vessel moored permanently in the heart of Amsterdam's canal ring.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_JuxzKW-Uvl6-UBjufzWDMeKVhbiZmA-koezKAaFW-wZyVW-POULVRwA&s=10", filename: "Amsterdam Prinsengracht Canal Houseboat" },
    price: 13500,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: { type: "Point", coordinates: [4.8879, 52.3676] },
    category: "boats"
  },
  {
    title: "Nile River Traditional Dahabiya",
    description: "Authentic two-masted wooden sailing boat gliding past ancient pharaonic temples.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxzp9FU5lH2hvi_hoIos87QSsKbkOI1AsYeU3tL05WDw&s=10", filename: "Nile River Traditional Dahabiya" },
    price: 21000,
    location: "Luxor to Aswan",
    country: "Egypt",
    geometry: { type: "Point", coordinates: [32.6396, 25.6872] },
    category: "boats"
  },
  {
    title: "Ha Long Bay Traditional Junk Boat",
    description: "Handcrafted wooden cruise ship sailing between dramatic limestone karst pillars.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX3hqDaCzvDUOAUad0k7XOE6xesKbgDF-FrOtlQVfLU1uDP3KoHdDMy0c&s=10", filename: "Ha Long Bay Traditional Junk Boat" },
    price: 16500,
    location: "Ha Long Bay",
    country: "Vietnam",
    geometry: { type: "Point", coordinates: [107.1839, 20.9101] },
    category: "boats"
  },
  {
    title: "Norwegian Geirangerfjord Yacht",
    description: "Private cruising catamaran navigating steep emerald waterfalls and deep glacial fjords.",
    image: { url: "https://image.yachtcharterfleet.com/w456/h456/qh/ca/od-1/k5c0bb246/cms/gallery/2184609.jpg", filename: "Norwegian Geirangerfjord Yacht" },
    price: 28000,
    location: "Geiranger",
    country: "Norway",
    geometry: { type: "Point", coordinates: [7.2059, 62.1008] },
    category: "boats"
  },
  {
    title: "Santorini Sunset Catamaran Cabin",
    description: "Private ensuite cabin on a luxury catamaran moored in the sheltered Aegean bay.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDkjS1wtKuAooN92OVufkrZGKPqQbeLxS0XFYxbVCyrw&s=10", filename: "Santorini Sunset Catamaran Cabin" },
    price: 23000,
    location: "Santorini",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.4315, 36.3932] },
    category: "boats"
  },

  // ==========================================
  // 11. NATIONAL PARKS (5 India / 5 Out of India)
  // ==========================================
  {
    title: "Jim Corbett Jungle Reserve Lodge",
    description: "Eco-lodge set along the Ramganga river boundary inside India's oldest national park.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bxZeZ0ISeYXwG7Hghlb-1qC7dHe3b5Ab1mw-damvM7WJ_3K4WFkfKJc&s=10", filename: "Jim Corbett Jungle Reserve Lodge" },
    price: 4800,
    location: "Corbett, Uttarakhand",
    country: "India",
    geometry: { type: "Point", coordinates: [78.9629, 29.5300] },
    category: "national parks"
  },
  {
    title: "Ranthambore Tiger Sanctuary Haven",
    description: "Colonial safari camp sitting right next to the historic tiger territory and fortress ruins.",
    image: { url: "https://ranthamborenationalpark.net/postImage/1749646262.jpg", filename: "Ranthambore Tiger Sanctuary Haven" },
    price: 6500,
    location: "Sawai Madhopur, Rajasthan",
    country: "India",
    geometry: { type: "Point", coordinates: [76.5026, 26.0173] },
    category: "national parks"
  },
  {
    title: "Kaziranga Rhino Wildlife Stay",
    description: "Stilt wooden huts overlooking the wetlands home to the great one-horned rhinoceros.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1pRIB7aZZY3MIJNloFUBrJ29PjlQeEWA9NPs5xMAfqfNx2-RlVpSdJc4&s=10", filename: "Kaziranga Rhino Wildlife Stay" },
    price: 4200,
    location: "Kaziranga, Assam",
    country: "India",
    geometry: { type: "Point", coordinates: [93.1711, 26.5775] },
    category: "national parks"
  },
  {
    title: "Gir Asiatic Lion Forest Camp",
    description: "Rustic cottage situated inside the only natural sanctuary of the Asiatic Lion.",
    image: { url: "https://www.girnationalpark.in/uploads/gir1234.jpg", filename: "Gir Asiatic Lion Forest Camp" },
    price: 5100,
    location: "Sasan Gir, Gujarat",
    country: "India",
    geometry: { type: "Point", coordinates: [70.5975, 21.1241] },
    category: "national parks"
  },
  {
    title: "Kanha Kipling Forest Bungalow",
    description: "Enchanting Sal forest bungalow that inspired Rudyard Kipling's famous Jungle Book.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGWWrKImRuFGTfdHkxiou8P1Npv85018kAAALtFoqF9tcvE8CFeX94C3w&s=10", filename: "Kanha Kipling Forest Bungalow" },
    price: 4900,
    location: "Kanha, Madhya Pradesh",
    country: "India",
    geometry: { type: "Point", coordinates: [80.6115, 22.3345] },
    category: "national parks"
  },
  {
    title: "Yellowstone Geyser Basin Lodge",
    description: "Historic lodge located within walking distance of famous hot springs and geysers.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJH-SOGxKfJH_WJJVnJdUh2Bh9On3ydb0ekk0Jrx4m_shJrvatzam0sT1k&s=10", filename: "Yellowstone Geyser Basin Lodge" },
    price: 18000,
    location: "Wyoming",
    country: "United States",
    geometry: { type: "Point", coordinates: [-110.5885, 44.4280] },
    category: "national parks"
  },
  {
    title: "Serengeti Migration Plains Lodge",
    description: "Frontline safari lodge providing views of the world's greatest wildlife migrations.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI3yfy5xnQgFYI0qbErAsNZ5bv14JTVltUZXtkGbp9xMgPTVV5YVFT36g&s=10", filename: "Serengeti Migration Plains Lodge" },
    price: 29000,
    location: "Serengeti",
    country: "Tanzania",
    geometry: { type: "Point", coordinates: [34.8333, -2.3333] },
    category: "national parks"
  },
  {
    title: "Kruger Greater Bushveld Chalet",
    description: "Open-plan chalet looking directly into an unfenced watering hole visited by Big Five herds.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxCzppMdbBKmpxQKiWidjYIRUkUtNK6mh7j-NLm3XWfPq9p3LPrhxIIU&s=10", filename: "Kruger Greater Bushveld Chalet" },
    price: 21500,
    location: "Kruger National Park",
    country: "South Africa",
    geometry: { type: "Point", coordinates: [31.5547, -24.0116] },
    category: "national parks"
  },
  {
    title: "Fiordland Milford Track Sanctuary",
    description: "Secluded wilderness haven surrounded by towering cliffs and primeval beech rainforest.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_JjSrcsrsp3Rk2dMc1GqRINdrbuCozmTeEhzxehyQY8DG-EXn_9FJknN&s=10", filename: "Fiordland Milford Track Sanctuary" },
    price: 19500,
    location: "South Island",
    country: "New Zealand",
    geometry: { type: "Point", coordinates: [167.9256, -44.6414] },
    category: "national parks"
  },
  {
    title: "Costa Rica Manuel Antonio Treehouse",
    description: "Bio-diverse forest treehouse visited by monkeys and sloths right beside the Pacific beach.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDREQP0x5XJoSdx4vdaLy8Qln6mI6cmBk8p9yn4HjztmDf5w6sfvZp1w&s=10", filename: "Costa Rica Manuel Antonio Treehouse" },
    price: 16000,
    location: "Manuel Antonio",
    country: "Costa Rica",
    geometry: { type: "Point", coordinates: [-84.1378, 9.3900] },
    category: "national parks"
  },

  // ==========================================
  // 12. LAKEFRONT (5 India / 5 Out of India)
  // ==========================================
  {
    title: "Nainital Naini Lake View Home",
    description: "Cozy hillside home overlooking the emerald, crescent-shaped sacred Naini lake.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0qnj8N0PtFkwzqhWQoyhOo77H1nuyTU6snPYKG1Ucvg&s", filename: "Nainital Naini Lake View Home" },
    price: 3300,
    location: "Nainital, Uttarakhand",
    country: "India",
    geometry: { type: "Point", coordinates: [79.4636, 29.3919] },
    category: "lakefront"
  },
  {
    title: "Pushkar Holy Sarovar Heritage Stay",
    description: "Spiritual haveli with direct access to the sacred ghats of the divine Brahma lake.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHXLtCSLYVUuceBIBv4xxFdBDKutcCUofX81zIHG7jq6kar33rPP7yahLo&s=10", filename: "Pushkar Holy Sarovar Heritage Stay" },
    price: 2400,
    location: "Pushkar, Rajasthan",
    country: "India",
    geometry: { type: "Point", coordinates: [74.5554, 26.4897] },
    category: "lakefront"
  },
  {
    title: "Udaipur Fateh Sagar Sunset Suites",
    description: "Romantic waterfront suites looking across the tranquil islands of Fateh Sagar Lake.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrnl9AQ7Sbg4PItKXJGns5V5cVFtmQFRDyw-GrhmS4Qeimp1Zgux5LVFY&s=10", filename: "Udaipur Fateh Sagar Sunset Suites" },
    price: 5200,
    location: "Udaipur, Rajasthan",
    country: "India",
    geometry: { type: "Point", coordinates: [73.6739, 24.6022] },
    category: "lakefront"
  },
  {
    title: "Vembanad Lakeside Bamboo Cottage",
    description: "Serene waterfront cottage set along the banks of India's longest freshwater lake.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKD4S7Zm3K4QWUmgWqneZrf_KTOwQKJOLK33kj3qU4OpGJfI9chmwgS9Q&s=10", filename: "Vembanad Lakeside Bamboo Cottage" },
    price: 3900,
    location: "Muhamma, Kerala",
    country: "India",
    geometry: { type: "Point", coordinates: [76.3571, 9.6000] },
    category: "lakefront"
  },
  {
    title: "Bhimtal Serene Lakefront Chalet",
    description: "Peaceful pine-clad cottage situated directly beside the picturesque Bhimtal island.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRENSq3eo4eu6JisVBNBaTXnIAK7HcfUmaaUWKfQ_9pZDpelPaG1TxYpGWe&s=10", filename: "Bhimtal Serene Lakefront Chalet" },
    price: 3600,
    location: "Bhimtal, Uttarakhand",
    country: "India",
    geometry: { type: "Point", coordinates: [79.5539, 29.3496] },
    category: "lakefront"
  },
  {
    title: "Lake Como Grand View Villa",
    description: "Elegant Italian lakeside villa with private stone boat dock and cypress gardens.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-dN6jRcwfJvq-2wZaAxwgx0J49609R-GANOcm9fZE-pAcHYWpvpF878&s=10", filename: "Lake Como Grand View Villa" },
    price: 27000,
    location: "Bellagio, Lake Como",
    country: "Italy",
    geometry: { type: "Point", coordinates: [9.2572, 45.9904] },
    category: "lakefront"
  },
  {
    title: "Lake Bled Fairytale Island Lodge",
    description: "Panoramic lakefront chalet viewing the iconic church island and clifftop medieval castle.",
    image: { url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/35/66/8b/lake-bled-in-autumn-photo.jpg?w=900&h=500&s=1", filename: "Lake Bled Fairytale Island Lodge" },
    price: 16500,
    location: "Bled",
    country: "Slovenia",
    geometry: { type: "Point", coordinates: [14.0938, 46.3636] },
    category: "lakefront"
  },
  {
    title: "Lake Tahoe Mountain Shores Cabin",
    description: "Classic cedar log cabin with direct sandy beach access to the pristine alpine waters.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHGgf4KGmzmlXQmY7pd5Rf4HkuKgq0m6lUm9HZa5FG93vAF5kNKsbRYZs&s=10", filename: "Lake Tahoe Mountain Shores Cabin" },
    price: 21000,
    location: "California",
    country: "United States",
    geometry: { type: "Point", coordinates: [-120.0324, 39.0968] },
    category: "lakefront"
  },
  {
    title: "Lake Geneva Luxury Waterfront Suite",
    description: "Prestigious apartment set directly on the promenade overlooking the French Alps and Jet d'Eau.",
    image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTr56rVpPGsYUFJpDZ1B8gSOAGoR9bPJXr5kQ1WNc8MrgVIlQQPMoYE1eW&s=10", filename: "Lake Geneva Luxury Waterfront Suite" },
    price: 26500,
    location: "Montreux",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [6.9106, 46.4312] },
    category: "lakefront"
  },
  {
    title: "Lake Kawaguchiko Fuji View Villa",
    description: "Serene waterside villa offering reflections of Mount Fuji across the calm lake surface.",
    image: { url: "https://pix10.agoda.net/hotelImages/666218/-1/eecdcecc6ffcc389b467721409aa50eb.jpg?ca=10&ce=1&s=414x232", filename: "Lake Kawaguchiko Fuji View Villa" },
    price: 22500,
    location: "Yamanashi",
    country: "Japan",
    geometry: { type: "Point", coordinates: [138.7554, 35.5171] },
    category: "lakefront"
  }
];
const initDB = async () => {
  try {
    await Listing.deleteMany({});

    // Sirf owner ID set karna (reviews ko modify nahi kiya)
    const preparedData = sampleListings.map((item) => ({
      ...item,
      owner: new mongoose.Types.ObjectId("6aa1428784f75fc4b10f19cf"),
    }));

    await Listing.insertMany(preparedData);
    console.log(`Success! Total ${preparedData.length} listings initialized.`);
  } catch (err) {
    console.error("Initialization error:", err);
  } finally {
    mongoose.connection.close();
  }
};

initDB();