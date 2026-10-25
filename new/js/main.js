// ============================================
// ST. LAWRENCE SCHOOL — Main JS
// ============================================

// ---- Navbar scroll behavior ----
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
});

// ---- Mobile nav toggle ----
const navToggle = document.querySelector('.navbar-toggle');
const navMobile = document.querySelector('.navbar-mobile');

function closeNav() {
  navMobile?.classList.remove('open');
  navToggle?.classList.remove('active');
  document.body.classList.remove('nav-open');
  if (navToggle) {
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
}

navToggle?.addEventListener('click', () => {
  const isOpen = navMobile?.classList.contains('open');
  if (isOpen) {
    closeNav();
  } else {
    navMobile?.classList.add('open');
    navToggle?.classList.add('active');
    document.body.classList.add('nav-open');
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  }
});

// Close mobile nav on link click
document.querySelectorAll('.navbar-mobile a').forEach(link => {
  link.addEventListener('click', () => {
    closeNav();
  });
});

// ---- Active nav link ----
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar-links a, .navbar-mobile a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ---- Scroll Reveal ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

// ---- Progress Bar Animation ----
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bars = entry.target.querySelectorAll('.progress-bar-fill');
      bars.forEach(bar => {
        const target = bar.getAttribute('data-width');
        setTimeout(() => {
          bar.style.width = target + '%';
        }, 200);
      });
      progressObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.progress-cards').forEach(el => {
  progressObserver.observe(el);
});

// ---- Gallery Filter (gallery.html) ----
const filterBtns = document.querySelectorAll('.gallery-filter-btn');
const masonryItems = document.querySelectorAll('.masonry-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');

    masonryItems.forEach(item => {
      const category = item.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        item.style.display = 'block';
        item.style.animation = 'fadeIn 0.4s ease';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// ---- Lightbox ----
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

document.querySelectorAll('.masonry-item, .gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    if (img && lightbox && lightboxImg) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  });
});

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

function closeLightbox() {
  lightbox?.classList.remove('open');
  document.body.style.overflow = '';
}

// ---- Admission Form ----
const admissionForm = document.getElementById('admissionForm');
const formSuccess = document.querySelector('.form-success');

admissionForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateForm(admissionForm)) {
    const data = new FormData(admissionForm);
    const inquiry = {};
    data.forEach((val, key) => inquiry[key] = val);

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('st_lawrence_inquiries') || '[]');
    existing.push({ ...inquiry, created_at: new Date().toISOString() });
    localStorage.setItem('st_lawrence_inquiries', JSON.stringify(existing));

    admissionForm.style.display = 'none';
    if (formSuccess) formSuccess.style.display = 'block';
  }
});

// ---- Contact Form ----
const contactForm = document.getElementById('contactForm');

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateForm(contactForm)) {
    const btn = contactForm.querySelector('[type="submit"]');
    btn.textContent = '✓ Message Sent!';
    btn.style.background = '#2D6A4F';
    btn.disabled = true;
    setTimeout(() => {
      contactForm.reset();
      btn.textContent = 'Send Message';
      btn.style.background = '';
      btn.disabled = false;
    }, 3500);
  }
});

// ---- Form Validation ----
function validateForm(form) {
  let valid = true;
  form.querySelectorAll('[required]').forEach(input => {
    input.style.borderColor = '';
    if (!input.value.trim()) {
      input.style.borderColor = '#e53e3e';
      valid = false;
    }
    if (input.type === 'email' && input.value && !isValidEmail(input.value)) {
      input.style.borderColor = '#e53e3e';
      valid = false;
    }
  });
  return valid;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ---- Blog Posts (load from JSON) ----
const blogContainer = document.getElementById('blogPosts');
if (blogContainer) {
  fetch('data/posts.json')
    .then(res => res.json())
    .then(posts => {
      blogContainer.innerHTML = posts.map(post => `
        <article class="blog-card reveal">
          <div class="blog-card-image">
            <img src="${post.image}" alt="${post.title}" loading="lazy">
          </div>
          <div class="blog-card-body">
            <span class="blog-card-category">${post.category}</span>
            <h3 class="blog-card-title">${post.title}</h3>
            <p class="blog-card-excerpt">${post.excerpt}</p>
            <div class="blog-card-meta">
              <span>${post.date}</span>
              <a href="#" class="blog-card-read-more">Read More →</a>
            </div>
          </div>
        </article>
      `).join('');
      // Re-observe new elements
      blogContainer.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    })
    .catch(() => {
      blogContainer.innerHTML = `<p style="color:var(--grey-400);text-align:center;grid-column:1/-1;">No posts yet. Check back soon!</p>`;
    });
}

// ---- Smooth scroll for anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
