/* ==========================================================================
   Swastik Cards - Interactive Web Application Logic
   ========================================================================== */

// Configuration Constants
const OWNER_WHATSAPP_NUMBER = "917032523049"; // Replace with owner's actual WhatsApp number (with country code, without +)
const INSTAGRAM_HANDLE = "swastikcardsofficial";

// Product Database (All 10 products now fully populated with high-quality custom assets)
const products = [
  {
    id: "SC-001",
    name: "Royal Velvet Box Invitation",
    category: "luxury",
    tag: "Royal Collection",
    excerpt: "A masterpiece of elegance featuring a padded velvet box with intricate gold foil embroidery and custom metal latches.",
    description: "A gorgeous creation designed for grand heritage weddings. This luxurious box is lined with fine velvet and detailed with exquisite gold-embossed filigree. Inside, cards are nestled in premium brocade divisions, making your wedding inserts feel like a royal decree. Ideal for couples seeking grand Indian wedding aesthetics.",
    price: "₹250 - ₹600 / Unit",
    images: [
      "assets/images/velvet_box.png"
    ],
    specs: {
      dimensions: "8.5\" x 10.5\" x 1.5\"",
      material: "Royal Velvet Fabric, Heavy Imported Board",
      printing: "Gold Hot Foil Stamping & Multi-pass Screen Printing",
      inserts: "3 Padded Inserts with Hand-Gilded Gold Edges"
    },
    specialties: [
      "Custom-crafted metal locking latch",
      "Sandalwood-spritzed papers for an aromatic opening",
      "Separate padded compartmentalization for sweet boxes"
    ]
  },
  {
    id: "SC-002",
    name: "Laser-Cut Wooden Keepsake",
    category: "traditional",
    tag: "Heritage Craft",
    excerpt: "Polished cherry wood with laser-cut lace design doors that open to reveal screen-printed golden scrolls.",
    description: "Perfect blend of rustic warmth and royal craft. The outer box is carved from high-quality cherry wood veneer with laser-etched door hinges. Opening the panels reveals shimmering metallic gold screen prints. The box is reusable as a beautiful keepsake jewelry box, making it a lasting memory for your guests.",
    price: "₹180 - ₹400 / Unit",
    images: [
      "assets/images/laser_wood.png"
    ],
    specs: {
      dimensions: "7.5\" x 7.5\" x 0.8\"",
      material: "Polished Cherry Wood Veneer, Shimmer Cardstock",
      printing: "Laser Etching & High-Gloss Screen Print",
      inserts: "2 Gold Foil Screen Printed Inserts"
    },
    specialties: [
      "Intricate traditional temple-gate laser cut-outs",
      "Re-usable souvenir box structure",
      "Rich natural wood grain texture"
    ]
  },
  {
    id: "SC-003",
    name: "Musical Floral Silk Scroll",
    category: "innovative",
    tag: "Musical Special",
    excerpt: "Plays a beautiful classical Sitar & Shehnai tune automatically upon opening the velvet scroll box.",
    description: "A multisensory masterpiece. This traditional scroll (Farman) invite is printed on rich silk fabric with wooden handles. As guests open the velvet box, a light-activated sensor triggers a clear, high-quality audio clip of traditional wedding melodies (Sitar & Shehnai). Perfect for signaling a grand celebration.",
    price: "₹450 - ₹900 / Unit",
    images: [
      "assets/images/music_scroll.png"
    ],
    specs: {
      dimensions: "Scroll: 12\" x 8\" | Box: 14\" x 3.5\" x 2.2\"",
      material: "Pure Silk Fabric, Teakwood Rods, Velvet Box Container",
      printing: "Metallic Embroidery Borders & Gold Screen Printing",
      electronics: "30-Second Light-Sensitive Micro Audio Module"
    },
    specialties: [
      "Light-activated audio play (Shehnai/Sitar or Custom Hymn)",
      "Traditional golden thread tassel ties",
      "Padded royal scroll-tube case"
    ]
  },
  {
    id: "SC-004",
    name: "Luxury Frosted Acrylic Card",
    category: "modern",
    tag: "Sleek & Contemporary",
    excerpt: "Frosted clear acrylic plate with metallic gold lettering, housed in a velvet-lined blue envelope.",
    description: "A highly sophisticated modern design. Crafted from heavy-duty frosted acrylic with polished smooth edges. Text is crisp and metallic, glowing beautifully when held against light. Complete with a dark royal navy envelope, closed using a hand-stamped gold wax seal to blend modern chic with ancient seals.",
    price: "₹200 - ₹350 / Unit",
    images: [
      "assets/images/acrylic_card.png"
    ],
    specs: {
      dimensions: "5.5\" x 7.5\" x 0.1\"",
      material: "2mm Cast Frosted Acrylic, 350 GSM Import Card Envelope",
      printing: "High-Definition UV Raised Printing & Foil Stamp",
      inserts: "1 Acrylic Plate & 1 RSVP Card"
    },
    specialties: [
      "Scratch-resistant satin-finish frosted coating",
      "Custom wax seal with client initials",
      "Clean minimalist layout with high contrast lettering"
    ]
  },
  {
    id: "SC-005",
    name: "Eco-Friendly Botanical Seed Card",
    category: "traditional",
    tag: "Eco-Conscious",
    excerpt: "Handmade seed paper infused with wildflower seeds, featuring pressed real flora and deckled edges.",
    description: "A unique card that literally grows into flowers! Hand-pulled from cotton fabric waste and infused with organic wildflower and herb seeds. Beautifully printed using non-toxic inks with delicate pressed marigold and rose petals visible on the paper texture. Guests plant the invite post-wedding to grow beautiful blooms.",
    price: "₹80 - ₹150 / Unit",
    images: [
      "assets/images/seed_paper.png"
    ],
    specs: {
      dimensions: "6.0\" x 8.0\"",
      material: "100% Cotton Recycled Seed Paper, Hemp Envelope",
      printing: "Eco Letterpress with Organic Soy-Based Inks",
      inserts: "2 Plantable Seed-embedded Sheets"
    },
    specialties: [
      "Infused with live marigold, basil, and daisy seeds",
      "Organic rough deckled edges for handmade luxury feel",
      "Biodegradable hemp cord wrapper"
    ]
  },
  {
    id: "SC-006",
    name: "Destination Passport Invite",
    category: "modern",
    tag: "Travel Special",
    excerpt: "Styled like a premium passport with vintage maps, complete with matching boarding pass RSVPs.",
    description: "Perfect for couples planning destination weddings in beach cities or grand palaces. This detailed passport booklet is printed on navy blue shimmer paper with high-density gold foil crests. Inside, multi-page travel itineraries, hotel bookings, and dress code charts are laid out like flight documents. Includes an RSVP card cut like a boarding pass.",
    price: "₹100 - ₹180 / Unit",
    images: [
      "assets/images/passport_card.png"
    ],
    specs: {
      dimensions: "4.8\" x 6.8\" Booklet",
      material: "300 GSM Shimmer Cover, 150 GSM Textured Inner Sheets",
      printing: "Foil Stamping & High-Quality Double-Sided Digital Print",
      inserts: "8-Page Passport Booklet & Boarding Pass with Perforated Edge"
    },
    specialties: [
      "Real-looking passport gold crest and rounded corners",
      "Perforated tear-off RSVP boarding ticket",
      "Includes miniature golden metallic plane charm tie"
    ]
  },
  {
    id: "SC-007",
    name: "Royal Gold Foil Gatefold",
    category: "traditional",
    tag: "Timeless Classic",
    excerpt: "Double-door opening gatefold card displaying a magnificent gold-foiled mandala medallion.",
    description: "A design rich in Indian heritage. This heavy-gauge card opens from the center like the doors of a royal palace. The front features an intricate laser-die mandala, embossed in high-density gold leaf foil. A silk-tassel ribbon holds the gate shut. Perfect for traditional Hindu, Sikh, and Muslim wedding invites.",
    price: "₹150 - ₹280 / Unit",
    images: [
      "assets/images/gold_gatefold.png"
    ],
    specs: {
      dimensions: "8.0\" x 8.0\"",
      material: "350 GSM Premium Imported Shimmer Card",
      printing: "Multi-layered Hot Foil Debossing & Raised Screen Printing",
      inserts: "3 High-Gloss Shimmer Inserts"
    },
    specialties: [
      "Traditional center-opening gate fold design",
      "High density raised 3D metallic print ink",
      "Gold-leaf lined luxury mailing envelope"
    ]
  },
  {
    id: "SC-008",
    name: "Minimalist Pastel Pocket",
    category: "modern",
    tag: "Elegant Chic",
    excerpt: "Staggered cards sitting in a tri-fold pastel pocket sleeve, highlighted with copper foil lettering.",
    description: "Ideal for contemporary tastes and spring/summer weddings. Features a gorgeous tri-fold pocket structure in coordinating dusty rose, lavender, or sage green tones. Inside, various event details (Mehndi, Reception, Wedding) are printed on cards of graduating heights, creating a beautiful layered cascade effect.",
    price: "₹90 - ₹170 / Unit",
    images: [
      "assets/images/pastel_pocket.png"
    ],
    specs: {
      dimensions: "6.0\" x 6.0\" Pocket",
      material: "300 GSM Matte Fine-Art Cardstock",
      printing: "Foil Press Lettering & Blind Embossing",
      inserts: "3 Graduated-Size Staggered Inserts"
    },
    specialties: [
      "Staggered tab inserts for layout navigation",
      "Elegant warm copper foil accents",
      "Matte coating offering premium tactile feel"
    ]
  },
  {
    id: "SC-009",
    name: "3D Royal Palace Pop-Up",
    category: "innovative",
    tag: "Architectural Marvel",
    excerpt: "Opens to reveal an astonishing 3D architectural model of an Indian heritage palace.",
    description: "This card is a magnificent engineering marvel. The card opens flat to lift up a grand 3D pop-up of an ancient Rajasthani palace, complete with miniature arches, windows, and domes. Masterfully cut using lasers and assembled by hand. A show-stopper that guarantees a wow-factor reaction from every recipient.",
    price: "₹350 - ₹750 / Unit",
    images: [
      "assets/images/popup_palace.png"
    ],
    specs: {
      dimensions: "7.0\" x 9.2\" Closed",
      material: "Premium Italian Colored Cards, Gold Thread Ties",
      printing: "Laser Precision Die-cutting & Gold Silk-Screen Paint",
      inserts: "2 Slider Cards hidden in side panels"
    },
    specialties: [
      "Intricately detailed 3D palace sculpture built inside",
      "Hand-finished satin ribbon bow closure",
      "Hidden slide-out compartments for function schedules"
    ]
  },
  {
    id: "SC-010",
    name: "Silk Brocade Heritage Booklet",
    category: "luxury",
    tag: "Banarasi Zari",
    excerpt: "Padded booklet styled in rich emerald Banarasi silk brocade, presenting royal manuscript pages.",
    description: "Inspired by ancient royal scrolls and manuscript books. The cover is fully padded and wrapped in premium emerald-green Banarasi brocade silk fabric woven with pure zari threads. Inside, pages are made of thick handmade gold-dust paper displaying traditional hand-painted Mughal miniature-style scenes.",
    price: "₹300 - ₹550 / Unit",
    images: [
      "assets/images/silk_booklet.png"
    ],
    specs: {
      dimensions: "6.5\" x 10.0\" Booklet",
      material: "Pure Banarasi Silk Zari Fabric, Handmade Gold-Flake Paper",
      printing: "Multi-color Screen Printing & Thermographic Raised Ink",
      inserts: "4 Page bound booklet format"
    },
    specialties: [
      "Bound spine with hand-embroidered gold threads",
      "Thermographic raised printing for satisfying touch",
      "Zari bordered velvet presentation envelope"
    ]
  }
];

// App State
let activeModalProduct = null;
let currentSlideIndex = 0;

// DOM Elements
const header = document.querySelector(".header");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const productsGrid = document.getElementById("productsGrid");
const filterBtns = document.querySelectorAll(".filter-btn");

// Modal DOM Elements
const productModal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalTag = document.getElementById("modalTag");
const modalPriceVal = document.getElementById("modalPriceVal");
const modalSlides = document.getElementById("modalSlides");
const modalThumbs = document.getElementById("modalThumbs");
const prevSlideBtn = document.getElementById("prevSlide");
const nextSlideBtn = document.getElementById("nextSlide");
const modalTabBtns = document.querySelectorAll(".modal-tab-btn");
const modalTabContents = document.querySelectorAll(".modal-tab-content");
const whatsappBtn = document.getElementById("modalWhatsappBtn");

// 1. Initial Render and Navigation scroll listener
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
  updateActiveNavLink();
});

// Active Link Highlight on Scroll
function updateActiveNavLink() {
  const scrollPos = window.scrollY + 100;
  navLinks.forEach(link => {
    const targetId = link.getAttribute("href");
    if (targetId && targetId.startsWith("#")) {
      const section = document.querySelector(targetId);
      if (section) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(l => l.classList.remove("active"));
          link.classList.add("active");
        }
      }
    }
  });
}

// 2. Render Product Cards (Supports clean empty image slots and places tags below images)
function renderProductGrid(filter = "all") {
  productsGrid.innerHTML = "";
  
  const filteredProducts = filter === "all" 
    ? products 
    : products.filter(p => p.category === filter);
    
  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card animate-on-scroll";
    card.setAttribute("data-id", product.id);
    
    // Check if the product has any images. If not, show our styled CSS placeholder card.
    const imageHtml = (product.images && product.images.length > 0 && product.images[0])
      ? `<img src="${product.images[0]}" alt="${product.name}" loading="lazy">`
      : `<div class="product-img-placeholder">
           <i class="ri-palette-line placeholder-icon"></i>
           <span>Design Preview Pending</span>
         </div>`;
    
    // Moved product.tag inside product-meta block to avoid absolute image overlaps
    card.innerHTML = `
      <div class="product-img-wrapper">
        ${imageHtml}
      </div>
      <div class="product-info">
        <div class="product-meta">
          <span class="product-tag">${product.tag}</span>
          <span class="product-id">ID: ${product.id}</span>
        </div>
        <h4 class="product-title">${product.name}</h4>
        <p class="product-excerpt">${product.excerpt}</p>
        <div class="product-footer">
          <div class="product-price-range">
            <span>Range:</span>
            <span class="product-price-val">${product.price.split("/")[0]}</span>
          </div>
          <button class="product-view-btn">Details</button>
        </div>
      </div>
    `;
    
    // Add Click listener
    card.addEventListener("click", () => openModal(product));
    
    productsGrid.appendChild(card);
  });
  
  // Rerun Intersection Observer for new cards
  observeAnimations();
}

// Product Filtering
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filterValue = btn.getAttribute("data-filter");
    renderProductGrid(filterValue);
  });
});

// 3. Modal Functionality
function openModal(product) {
  activeModalProduct = product;
  currentSlideIndex = 0;
  
  modalTitle.textContent = product.name;
  modalTag.textContent = `${product.tag} | ID: ${product.id}`;
  modalPriceVal.textContent = product.price;
  
  // Render Slides and Thumbnails
  renderModalGallery(product.images);
  
  // Populate Tabs Content
  populateModalTabs(product);
  
  // Reset Tab Selection to 'details'
  switchModalTab("details");
  
  // Update WhatsApp Link
  setupWhatsAppLink(product);
  
  // Show Modal
  productModal.classList.add("active");
  document.body.style.overflow = "hidden"; // Disable background scrolling
}

function closeModal() {
  productModal.classList.remove("active");
  document.body.style.overflow = ""; // Enable background scrolling
  activeModalProduct = null;
}

modalClose.addEventListener("click", closeModal);
productModal.querySelector(".modal-backdrop").addEventListener("click", closeModal);

// Escape Key to Close Modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && productModal.classList.contains("active")) {
    closeModal();
  }
});

// 4. Modal Gallery Slider (Handles empty image slots gracefully)
function renderModalGallery(images) {
  modalSlides.innerHTML = "";
  modalThumbs.innerHTML = "";
  
  if (images && images.length > 0 && images[0]) {
    // Show Images
    images.forEach((imgUrl, index) => {
      // Add slide
      const slide = document.createElement("div");
      slide.className = `modal-slide ${index === 0 ? 'active' : ''}`;
      slide.innerHTML = `<img src="${imgUrl}" alt="${activeModalProduct.name} - View ${index + 1}" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop'">`;
      modalSlides.appendChild(slide);
      
      // Add thumb
      const thumb = document.createElement("img");
      thumb.src = imgUrl;
      thumb.alt = `Thumb ${index + 1}`;
      thumb.className = `thumb-img ${index === 0 ? 'active' : ''}`;
      thumb.onerror = function() { this.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop'; };
      thumb.addEventListener("click", () => goToSlide(index));
      modalThumbs.appendChild(thumb);
    });

    // Control slider navigation arrows
    prevSlideBtn.style.display = images.length > 1 ? "flex" : "none";
    nextSlideBtn.style.display = images.length > 1 ? "flex" : "none";
    modalThumbs.style.display = "flex";
  } else {
    // Render Styled Empty Placeholder inside the modal gallery slider
    const slide = document.createElement("div");
    slide.className = "modal-slide active";
    slide.innerHTML = `
      <div class="product-img-placeholder" style="height: 100%; border: none;">
        <i class="ri-palette-line placeholder-icon" style="font-size: 3rem; margin-bottom: 0.5rem;"></i>
        <span style="font-size: 0.9rem; font-weight: 700; color: var(--text-muted);">Design Preview Pending</span>
      </div>`;
    modalSlides.appendChild(slide);
    
    // Hide sliders and thumbs for empty product slots
    prevSlideBtn.style.display = "none";
    nextSlideBtn.style.display = "none";
    modalThumbs.style.display = "none";
  }
}

function goToSlide(index) {
  const slides = modalSlides.querySelectorAll(".modal-slide");
  const thumbs = modalThumbs.querySelectorAll(".thumb-img");
  
  if (slides.length <= 1) return; // No cycling for single or empty images
  
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  
  currentSlideIndex = index;
  
  slides.forEach((slide, idx) => {
    if (idx === index) slide.classList.add("active");
    else slide.classList.remove("active");
  });
  
  thumbs.forEach((thumb, idx) => {
    if (idx === index) thumb.classList.add("active");
    else thumb.classList.remove("active");
  });
}

prevSlideBtn.addEventListener("click", () => goToSlide(currentSlideIndex - 1));
nextSlideBtn.addEventListener("click", () => goToSlide(currentSlideIndex + 1));

// Keyboard Slider Control
document.addEventListener("keydown", (e) => {
  if (productModal.classList.contains("active")) {
    if (e.key === "ArrowLeft") goToSlide(currentSlideIndex - 1);
    if (e.key === "ArrowRight") goToSlide(currentSlideIndex + 1);
  }
});

// 5. Modal Tab Switching
function populateModalTabs(product) {
  // Details Tab
  const detailsTab = document.getElementById("tab-details");
  detailsTab.innerHTML = `
    <p>${product.description}</p>
    <p>Every invite we craft is customized specifically to your preferences. Swastik Cards brings 20 years of printing excellence to ensure every detail shines with luxury.</p>
  `;
  
  // Specs Tab
  const specsTab = document.getElementById("tab-specs");
  let specsHtml = '<div class="specs-grid">';
  for (const [key, value] of Object.entries(product.specs)) {
    const label = key.charAt(0).toUpperCase() + key.slice(1);
    specsHtml += `
      <div class="spec-item">
        <span class="spec-label">${label}</span>
        <span class="spec-val">${value}</span>
      </div>
    `;
  }
  specsHtml += "</div>";
  specsTab.innerHTML = specsHtml;
  
  // Specialties Tab
  const specialTab = document.getElementById("tab-specialties");
  let specialtiesHtml = '<ul class="specialty-list">';
  product.specialties.forEach(spec => {
    specialtiesHtml += `<li>${spec}</li>`;
  });
  specialtiesHtml += "</ul>";
  specialTab.innerHTML = specialtiesHtml;
}

function switchModalTab(tabId) {
  modalTabBtns.forEach(btn => {
    if (btn.getAttribute("data-tab") === tabId) btn.classList.add("active");
    else btn.classList.remove("active");
  });
  
  modalTabContents.forEach(content => {
    if (content.id === `tab-${tabId}`) content.classList.add("active");
    else content.classList.remove("active");
  });
}

modalTabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    switchModalTab(btn.getAttribute("data-tab"));
  });
});

// 6. WhatsApp Inquiry Link Configuration
function setupWhatsAppLink(product) {
  const message = `Hello Swastik Cards! 🌸

I am visiting your website and would like to enquire about ordering this design:

✨ *Product Name:* ${product.name}
🆔 *Product ID:* ${product.id}
📂 *Category:* ${product.category.toUpperCase()}
💰 *Estimated Budget:* ${product.price}

*Key Specialties:*
${product.specialties.map(s => `- ${s}`).join("\n")}

Please share customization options, printing timelines, and bulk pricing. Thank you!`;

  const encodedMsg = encodeURIComponent(message);
  const waUrl = `https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodedMsg}`;
  
  whatsappBtn.setAttribute("href", waUrl);
  whatsappBtn.setAttribute("target", "_blank");
}

// 7. Configure Floating WhatsApp Widget
function setupFloatingWhatsApp() {
  const floatingWa = document.getElementById("floatingWa");
  if (floatingWa) {
    const generalMsg = `Hello Swastik Cards! 🌸 I am browsing your premium website and would like to enquire about wedding/invitation cards custom printing. Please guide me through your catalog and consultation process.`;
    floatingWa.setAttribute("href", `https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodeURIComponent(generalMsg)}`);
    floatingWa.setAttribute("target", "_blank");
  }
}

// 8. Scroll Animation Observer
function observeAnimations() {
  const animElements = document.querySelectorAll(".animate-on-scroll, .product-card");
  
  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  animElements.forEach(el => {
    observer.observe(el);
  });
}

// Add CSS keyframes injected via JS for quick load fades
const animationStyles = document.createElement("style");
animationStyles.textContent = `
  .animate-on-scroll, .product-card {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .animate-on-scroll.visible, .product-card.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Stagger cards grid items */
  .products-grid .product-card:nth-child(1) { transition-delay: 0.05s; }
  .products-grid .product-card:nth-child(2) { transition-delay: 0.1s; }
  .products-grid .product-card:nth-child(3) { transition-delay: 0.15s; }
`;
document.head.appendChild(animationStyles);

// 9. Document Boot
document.addEventListener("DOMContentLoaded", () => {
  renderProductGrid("all");
  setupFloatingWhatsApp();
  observeAnimations();
});
