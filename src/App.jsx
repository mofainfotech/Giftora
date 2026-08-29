import React, { useState, useEffect } from 'react';
import './index.css';

const MediaItem = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  const isVideo = src.endsWith('.mp4');

  return (
    <div className="media-container">
      {!loaded && <div className="skeleton" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>}
      {isVideo ? (
        <video 
          className={`media-item ${loaded ? 'loaded' : ''}`}
          src={src} 
          autoPlay 
          loop 
          muted 
          playsInline 
          onLoadedData={() => setLoaded(true)}
        />
      ) : (
        <img 
          className={`media-item ${loaded ? 'loaded' : ''}`}
          src={src} 
          alt={alt} 
          loading="lazy" 
          onLoad={() => setLoaded(true)} 
        />
      )}
    </div>
  );
};

const useTypewriter = (text, delayStart = 0, typingSpeed = 50) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  useEffect(() => {
    let timeout;
    let i = 0;
    
    const startTyping = () => {
      setIsTyping(true);
      timeout = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i === text.length) {
          clearInterval(timeout);
          setIsTyping(false);
        }
      }, typingSpeed);
    };

    const initialDelay = setTimeout(startTyping, delayStart);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(timeout);
    };
  }, [text, delayStart, typingSpeed]);

  return { text: displayedText, isTyping };
};

function App() {
  const categories = [
    { title: "For Girlfriend", imgSrc: "images/gifts-by-rashi.image.Gifts_For_Girlfriend.Woblo.jpg" },
    { title: "For Boyfriend", imgSrc: "/images/gifts-by-rashi.image.Gifts_For_Boyfriend.Woblo.jpg" },
    { title: "For Wife", imgSrc: "/images/gifts-by-rashi.image.Gifts_For_Wife.Woblo.jpg" },
    { title: "For Husband", imgSrc: "/images/gifts-by-rashi.image.Gifts_For_Husband.Woblo.jpg" },
    { title: "For Female Friend", imgSrc: "/images/gifts-by-rashi.image.Gifts_For_Female_Friend.Woblo.jpg" },
    { title: "For Male Friend", imgSrc: "/images/gifts-by-rashi.image.Gifts_For_Male_Friend.Woblo.jpg" },
    { title: "For Sister", imgSrc: "/images/gifts-by-rashi.image.Gifts_For_Sister.Woblo.jpg" },
    { title: "For Brother", imgSrc: "/images/gifts-by-rashi.image.Gifts_For_Brother.Woblo.jpg" },
    { title: "For Mother", imgSrc: "/images/gifts-by-rashi.image.Gifts_For_Mother.Woblo.jpg" },
    { title: "For Father", imgSrc: "/images/gifts-by-rashi.image.Gifts_For_Father.Woblo.jpg" },
  ];

  const bestSelling = [
    { id: 1, name: "Midnight Black Corporate Hamper", price: "Rs. 2,500.00", image: "images/instagram.image.767872323_18064790960529722_1653398013730300455_n.Woblo.webp" },
    { id: 2, name: "Luxury Gourmet Assortment", price: "Rs. 3,200.00", image: "images/instagram.image.762867049_18063227810529722_2985481304257319070_n.Woblo.jpg" },
    { id: 3, name: "Kinder Joy Hamper", price: "Rs. 1,800.00", image: "images/instagram.image.736163384_18053597699529722_7037161406883786847_n.Woblo.webp" },
    { id: 4, name: "Classic Festive Hamper", price: "Rs. 1,500.00", image: "images/instagram.image.785146920_27237231352616663_358881370997915874_n.Woblo.jpg" }
  ];

  const curateHampers = [
    { id: 1, name: "Pink Blush Box", price: "Rs. 2,100.00", image: "images/instagram.image.732226673_18053344259529722_7726786804095027095_n.Woblo.webp" },
    { id: 2, name: "Golden Glow Curated Gift", price: "Rs. 3,500.00", image: "images/instagram.image.746021830_18056307140529722_2484552220031655342_n.Woblo.webp" },
    { id: 3, name: "Black Curative Gift Box", price: "Rs. 2,800.00", image: "images/instagram.image.773074442_18066219299529722_8250864026050466683_n.Woblo.webp" },
    { id: 4, name: "Minimalist Essentials Box", price: "Rs. 1,200.00", image: "images/instagram.image.778624911_18068579876529722_4921173448095081562_n.Woblo.webp" }
  ];

  const masonryImages = [
    "/images/works/Dolphin_Radar_20260827180656.mp4",
    "/images/works/Dolphin_Radar_20260827180700.mp4",
    "/images/works/Dolphin_Radar_20260827180703.png",
    "/images/works/Dolphin_Radar_20260827180706.mp4",
    "/images/works/Dolphin_Radar_20260827180709.mp4",
    "/images/works/Dolphin_Radar_20260827180712.mp4",
    "/images/works/Dolphin_Radar_20260827180739.mp4",
    "/images/works/Dolphin_Radar_20260827180755.mp4",
    "/images/works/Dolphin_Radar_20260827180809.mp4",
    "/images/works/Dolphin_Radar_20260827180812.mp4",
    "/images/works/Dolphin_Radar_20260827180822.mp4",
    "/images/works/Dolphin_Radar_20260827180825.mp4",
    "/images/works/Dolphin_Radar_20260827180835.mp4",
    "/images/works/Dolphin_Radar_20260827180837.mp4"
  ];

  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-show');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-hidden');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const t1 = useTypewriter("Thoughtful Gifts,", 500, 60);
  const t2 = useTypewriter("Beautiful Moments", 1700, 60);
  const t3 = useTypewriter("From handmade treasures to elegant gifts,", 2900, 40);
  const t4 = useTypewriter("we help you celebrate life's most special moments.", 4700, 40);
  
  const [showDivider, setShowDivider] = useState(false);
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    const timer1 = setTimeout(() => setShowDivider(true), 2900);
    const timer2 = setTimeout(() => setShowButton(true), 6900);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="top-banner">
        FREE SHIPPING ON ORDERS ABOVE RS. 2000 | USE CODE: GIFTORA10 FOR 10% OFF
      </div>

      <header className="header">
        <div className="header-inner">
          <div className="header-logo">
            <img src="/logo.png" alt="Giftora Logo" style={{  borderRadius: '10%', objectFit: 'cover' }} />
          </div>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`ph ${isMobileMenuOpen ? 'ph-x' : 'ph-list'}`}></i>
          </button>

          <nav className={`header-nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Birthday Hampers</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Curate Your Own</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Corporate</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
          </nav>
          <div className="header-icons">
            <i className="ph ph-magnifying-glass" style={{ fontSize: '1.5rem', cursor: 'pointer' }}></i>
            <i className="ph ph-user" style={{ fontSize: '1.5rem', cursor: 'pointer', margin: '0 1rem' }}></i>
            <i className="ph ph-shopping-cart" style={{ fontSize: '1.5rem', cursor: 'pointer' }}></i>
          </div>
        </div>
      </header>

      <div className="hero-master-wrapper">
        {/* Exact Match Hero Section */}
        <section className="image-hero">
          <div className="hero-content-left" style={{ minHeight: '350px' }}>
            <h1>{t1.text}{t1.isTyping && <span className="cursor-blink">|</span>}</h1>
            <h2 className="cursive-pink">{t2.text}{t2.isTyping && <span className="cursor-blink">|</span>}</h2>
            <div className={`hero-divider ${showDivider ? 'animate-show' : 'animate-hidden'}`} style={{ transition: 'opacity 0.8s ease' }}>
              <span className="line"></span>
              <i className="ph-fill ph-heart heart-icon"></i>
              <span className="line"></span>
            </div>
            <p>{t3.text}{t3.isTyping && <span className="cursor-blink">|</span>}<br />{t4.text}{t4.isTyping && <span className="cursor-blink">|</span>}</p>
            <button className={`btn-shop-now ${showButton ? 'animate-show' : 'animate-hidden'}`} style={{ transition: 'all 0.8s ease' }}>Shop Now <i className="ph-bold ph-arrow-right"></i></button>
          </div>
        </section>


        {/* Perks Row */}
        <section className="perks-row-section">
          <div className="container perks-row-inner">
            <div className="perk-row-item">
              <i className="ph-light ph-heart"></i>
              <div className="perk-row-text">
                <h4>Handmade with Love</h4>
                <p>Quality you can trust</p>
              </div>
            </div>
            <div className="perk-row-divider"></div>
            <div className="perk-row-item">
              <i className="ph-light ph-package"></i>
              <div className="perk-row-text">
                <h4>Secure Packaging</h4>
                <p>Delivered with care</p>
              </div>
            </div>
            <div className="perk-row-divider"></div>
            <div className="perk-row-item">
              <i className="ph-light ph-gift"></i>
              <div className="perk-row-text">
                <h4>Custom Orders</h4>
                <p>Made just for you</p>
              </div>
            </div>
            <div className="perk-row-divider"></div>
            <div className="perk-row-item">
              <i className="ph-light ph-truck"></i>
              <div className="perk-row-text">
                <h4>Fast Delivery</h4>
                <p>Across India</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* About Us Section */}
      <section className="about-section">
        <div className="about-inner">
          <div className="about-image-wrapper animate-hidden">
            <div className="about-arch-image">
              <img src="/images/WDBAVaQf19geEwAdktWBjVC4Y3Xb718Q1vjFBfAy.webp" alt="About Giftora" />
            </div>
            <div className="about-image-decoration"></div>
            <div className="about-badge">
              <span>Premium Quality</span>
            </div>
          </div>
          <div className="about-content animate-hidden delay-200">
            <div className="about-subtitle">
              <i className="ph ph-sparkle"></i>
              <span>Our Story</span>
            </div>
            <h2>Crafting Beautiful Moments</h2>
            <p className="lead-text">At Giftora, we believe that every gift should tell a beautiful story.</p>
            <p>We pour our hearts into crafting personalized, elegant hampers and bespoke gifts that turn ordinary moments into unforgettable memories.</p>
            <p>From luxurious corporate gifting to intimate anniversary surprises, we curate only the finest products to ensure your loved ones feel truly special.</p>
            <button className="btn-dark btn-with-icon">
              Read More <i className="ph ph-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      <section className="categories-section container animate-hidden">
        <h2 className="section-title">Birthday Collections</h2>
        <div className="categories-grid">
          {categories.map((cat, idx) => (
            <div key={idx} className="category-item">
              <img src={cat.imgSrc} alt={cat.title} className="category-img" style={{ padding: 0 }} />
              <span className="category-title">{cat.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="product-section container animate-hidden delay-100">
        <h2 className="section-title">Best Selling Hampers</h2>
        <div className="product-grid">
          {bestSelling.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-tag">Sale</div>
              <img src={product.image} alt={product.name} loading="lazy" />
              <h3 className="product-title">{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </div>
          ))}
        </div>
        <button className="btn-dark">View All</button>
      </section>

      <section className="product-section container animate-hidden delay-200">
        <h2 className="section-title">Latest Products</h2>
        <div className="product-grid">
          {curateHampers.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-tag">Sale</div>
              <img src={product.image} alt={product.name} loading="lazy" />
              <h3 className="product-title">{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </div>
          ))}
        </div>
        <button className="btn-dark">View All</button>
      </section>

      <section className="container text-center animate-hidden">
        <h2 className="section-title">Customer Reviews & Our Works</h2>
        <div className="masonry-gallery" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gridAutoRows: '250px' }}>
          {masonryImages.map((src, idx) => (
            <div key={idx} className={`masonry-item ${idx % 5 === 0 ? 'large' : ''}`} onClick={() => setSelectedMedia(src)}>
              <MediaItem src={src} alt="Gallery item" />
            </div>
          ))}
        </div>
      </section>

      <section className="feature-banner animate-hidden delay-100">
        <div className="feature-banner-content">
          <h2>Curate Your Own Hamper With Premium Products</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Choose from a wide array of premium and handcrafted items to build the perfect gift for your loved ones. Personalize every detail.
          </p>
          <button className="btn-dark">Curate Options</button>
        </div>
        <div className="feature-banner-img"></div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>GIFTORA</h4>
            <p style={{fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '1rem'}}>
              Crafting memories with every box. Curated personalized hampers for all occasions.
            </p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Birthday Hampers</a></li>
              <li><a href="#">Anniversary Gifts</a></li>
              <li><a href="#">Corporate Gifting</a></li>
              <li><a href="#">Track Order</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Customer Service</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://instagram.com/giftora_vnb">Instagram (@giftora_vnb)</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Pinterest</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2026 Giftora. All rights reserved. Designed by Mofa IT Solutions
        </div>
      </footer>

      {selectedMedia && (
        <div className="modal-overlay" onClick={() => setSelectedMedia(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedMedia(null)}>✕</button>
            {selectedMedia.endsWith('.mp4') ? (
              <video src={selectedMedia} autoPlay loop controls className="modal-media" />
            ) : (
              <img src={selectedMedia} alt="Expanded view" className="modal-media" />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
