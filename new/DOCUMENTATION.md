# ST. LAWRENCE NURSERY & PRIMARY SCHOOL
## Website — Full Project Documentation
### Version 1.0 | May 2025 | Built by Alimap Technologies

---

## TABLE OF CONTENTS

1. Project Overview
2. Folder Structure
3. Technology Stack
4. Design System
5. Page-by-Page Documentation
6. JavaScript Features
7. Data Files
8. Database Schema (MySQL — PHP-ready)
9. Customisation Guide
10. Deployment Instructions
11. Future Roadmap
12. Common Issues & Fixes

---

## 1. PROJECT OVERVIEW

**Client:** St. Lawrence Nursery and Primary School, Kyamunara, Masindi District, Uganda
**Built by:** Alimap Technologies
**Type:** Multi-page static website (HTML/CSS/JS) with PHP/MySQL integration layer ready

**Purpose:**
- Marketing & student acquisition
- Online admissions inquiry system
- News & gallery content management
- Digital school identity & trust building

**Key Goals:**
- Drive admissions inquiries via the "Apply Now" CTA
- Showcase academic results (PLE pass rates)
- Build trust through testimonials, gallery, news
- Mobile-first for Uganda's mobile-heavy audience

---

## 2. FOLDER STRUCTURE

```
st-lawrence/
│
├── index.html          ← Homepage
├── about.html          ← About the school
├── academics.html      ← Academic programmes & PLE results
├── admissions.html     ← Admissions form + steps
├── gallery.html        ← Masonry photo gallery with lightbox
├── blog.html           ← News & updates
├── contact.html        ← Contact form + map + FAQ
│
├── css/
│   └── styles.css      ← Single master stylesheet (all styles)
│
├── js/
│   └── main.js         ← All interactivity (nav, forms, gallery, scroll)
│
├── data/
│   ├── posts.json      ← Blog posts data (for future dynamic loading)
│   └── gallery.json    ← Gallery images data
│
└── DOCUMENTATION.md    ← This file
```

---

## 3. TECHNOLOGY STACK

| Layer        | Technology                | Notes                              |
|--------------|---------------------------|-------------------------------------|
| Markup       | HTML5                     | Semantic, accessible               |
| Styling      | CSS3 (Custom Properties)  | No framework — fully custom        |
| Fonts        | Google Fonts (DM Sans + Lora) | Loaded via @import              |
| Icons        | Inline SVG (Lucide-style) | No external icon library needed    |
| Interactivity| Vanilla JavaScript (ES6+) | No dependencies, no jQuery         |
| Data         | JSON files                | Ready to swap for PHP API calls    |
| Future Backend | PHP + MySQL             | API endpoints pre-architected      |
| Hosting      | Any static host or XAMPP  | Netlify / cPanel / XAMPP all work  |

---

## 4. DESIGN SYSTEM

### 4.1 Color Palette

```css
--brown-primary:  #7B4F2E   /* Main brand brown — buttons, navbar, accents */
--brown-dark:     #5C3317   /* Hover states, footer CTA */
--brown-deeper:   #3E2008   /* Deep overlay, footer background */
--brown-light:    #A0785A   /* Secondary accents, section labels */
--brown-pale:     #D4B896   /* Subtle text on dark backgrounds */
--brown-tint:     #F5EDE4   /* Light warm background on cards */

--white:          #FFFFFF
--grey-50:        #FAFAFA   /* Alternate section backgrounds */
--grey-100:       #F4F4F4
--grey-200:       #E8E8E8   /* Borders */
--grey-400:       #A8A8A8   /* Placeholder & meta text */
--grey-500:       #787878   /* Body text */
--grey-700:       #333333   /* Headings */
--grey-800:       #1A1A1A   /* Strong headings */

--gold:           #C8922A   /* Button hover & highlights */
--gold-light:     #E8B84B   /* Stars, testimonial accents */
--green-accent:   #2D6A4F   /* Success states */
```

### 4.2 Typography

| Usage        | Font          | Weight       | Size Range       |
|--------------|---------------|--------------|-----------------|
| Headings     | DM Sans       | 700, 800     | 1.5rem – 4.5rem |
| Body text    | Lora (serif)  | 400, 500     | 1rem – 1.125rem |
| Labels/UI    | DM Sans       | 500, 600     | 0.75rem – 1rem  |
| Quotes       | Lora Italic   | 400          | 1rem – 1.25rem  |

### 4.3 Font Size Scale

```css
--text-xs:   0.75rem   (12px)
--text-sm:   0.875rem  (14px)
--text-base: 1rem      (16px)
--text-lg:   1.125rem  (18px)
--text-xl:   1.25rem   (20px)
--text-2xl:  1.5rem    (24px)
--text-3xl:  1.875rem  (30px)
--text-4xl:  2.25rem   (36px)
--text-5xl:  3rem      (48px)
--text-6xl:  3.75rem   (60px)
--text-7xl:  4.5rem    (72px)
```

### 4.4 Spacing & Layout

- **Container max-width:** 1200px, centered, 1.5rem side padding
- **Section padding:** 5rem top/bottom (3.5rem on mobile)
- **Border radius scale:** 6px / 12px / 20px / 32px / 9999px (pill)
- **Grid gaps:** 1rem (small), 1.5rem (cards), 2rem (sections), 5rem (hero grids)

### 4.5 Button System

```
.btn              — Base styles (all buttons share this)
.btn-primary      — Brown fill + white text (main CTAs)
.btn-outline      — Transparent + white border (on dark backgrounds)
.btn-outline-brown — Transparent + brown border (on light backgrounds)
.btn-sm           — Smaller padding variant
.btn-lg           — Larger padding variant
```
All buttons have `border-radius: 9999px` (fully rounded) and gold hover transition.

---

## 5. PAGE-BY-PAGE DOCUMENTATION

### 5.1 Homepage (index.html)

**Purpose:** Primary marketing & conversion page

**Sections (in order):**
1. **Navbar** — Fixed, full-width brown, turns darker on scroll
2. **Hero** — Full-screen image overlay, headline, stats bar, dual CTAs
3. **About Preview** — Image + feature list + CTA link
4. **Academic Excellence** — 6 animated progress bars (PLE pass rates)
5. **Why Choose Us** — 3 alternating rows (image left/right with text)
6. **Gallery Preview** — 5-image grid with hover overlay
7. **Testimonials** — 3 text cards on brown background
8. **CTA Banner** — Dark gradient, centered headline + action buttons
9. **Footer** — 3 columns + motto + copyright

**Key CTAs:**
- "Enroll Your Child" → admissions.html
- "Learn About Us" → about.html
- "Apply Now" (navbar) → admissions.html
- "View All Photos" → gallery.html

---

### 5.2 About Page (about.html)

**Sections:**
1. Page Hero with breadcrumb
2. Our Story (image + text)
3. Mission, Vision & Core Values (3 cards)
4. Headteacher Message (text + image)
5. Stats Strip (4 key numbers on brown background)
6. CTA Banner

---

### 5.3 Academics Page (academics.html)

**Sections:**
1. Page Hero
2. Our Approach (intro text + image)
3. Three School Sections (Nursery, Lower Primary, Upper Primary — cards with subject tags)
4. Co-Curricular Activities (6 hover cards)
5. PLE Performance 2024 (3 progress bars)
6. CTA Banner

---

### 5.4 Admissions Page (admissions.html)

**Sections:**
1. Page Hero
2. Requirements Cards (Age, Documents, Intake Dates)
3. Steps + Form Layout (2-column):
   - Left: 5-step admission process + WhatsApp note
   - Right: Full inquiry form with validation + success state
4. CTA Banner (WhatsApp focused)

**Form Fields:**
- Parent/Guardian Name (required)
- Phone Number (required)
- Email Address (optional)
- Child's Full Name (required)
- Child's Age (required)
- Class Applying For (select, required)
- Preferred Entry Term (select)
- Additional Message (textarea, optional)

**Form Behavior:**
- Validates required fields on submit
- Highlights invalid fields in red
- Saves data to `localStorage` as `st_lawrence_inquiries` array
- Shows success state (form hides, confirmation appears)

---

### 5.5 Gallery Page (gallery.html)

**Features:**
- 5 category filter buttons (All, Classes, Events, Sports, Graduation)
- Masonry CSS grid (4 columns → 3 → 2 → 1 responsive)
- 12 photos with hover zoom and overlay icon
- Lightbox: click any image → full-screen viewer
- Lightbox closes on: X button, click outside, Escape key

---

### 5.6 Blog / News Page (blog.html)

**Features:**
- Category filter buttons (All, Academic, Events, Announcements)
- 6 hardcoded blog cards (reliable without server)
- Each card: category badge, title, excerpt, date, "Read More" link
- Inline category filter via JavaScript

**To add new posts:**
Update the HTML directly, or when PHP is added, switch to `data/posts.json` dynamic loading (JS is already written in `main.js` — `id="blogPosts"` container).

---

### 5.7 Contact Page (contact.html)

**Sections:**
1. Page Hero
2. Contact Info (location, phone, email, hours) + WhatsApp CTA button + Google Map embed
3. Contact Form (name, phone, email, subject, message)
4. Expandable FAQ (3 common questions using `<details>` HTML element)
5. CTA Banner

**Form Behavior:**
- Validates required fields
- On success: button turns green + shows "Message Sent!"
- Resets after 4 seconds

---

## 6. JAVASCRIPT FEATURES (js/main.js)

### Scroll Behavior
```javascript
// Navbar turns darker after 60px scroll
window.addEventListener('scroll', () => { ... })
```

### Mobile Navigation
```javascript
// Hamburger toggle with animated bars
// Closes automatically when a nav link is clicked
```

### Active Link Highlighting
```javascript
// Reads current URL, adds .active class to matching nav link
const currentPage = window.location.pathname.split('/').pop()
```

### Scroll Reveal Animation
```javascript
// IntersectionObserver watches .reveal elements
// Adds .visible class when element enters viewport (threshold: 12%)
// Delay classes: .reveal-delay-1 through .reveal-delay-4
```
**Usage in HTML:**
```html
<div class="reveal">Fades in when scrolled to</div>
<div class="reveal reveal-delay-2">Fades in 0.2s later</div>
```

### Progress Bar Animation
```javascript
// Triggered when .progress-cards enters viewport
// Sets width from data-width attribute
```
**Usage in HTML:**
```html
<div class="progress-bar-fill" data-width="89"></div>
```

### Gallery Filter
```javascript
// Filters .masonry-item elements by data-category attribute
filterBtns.forEach(btn => { ... })
```

### Lightbox
```javascript
// Opens on click of any .masonry-item or .gallery-item
// Closes on X, outside click, or Escape key
```

### Form Validation
```javascript
function validateForm(form) { ... }    // Returns true/false
function isValidEmail(email) { ... }   // Regex validation
```

### localStorage (Admissions)
```javascript
// Saves inquiry as JSON object to array
localStorage.getItem('st_lawrence_inquiries')
```

---

## 7. DATA FILES

### data/posts.json
Array of blog post objects:
```json
[
  {
    "id": 1,
    "title": "Post Title",
    "category": "Category",
    "excerpt": "Short description...",
    "image": "https://image-url.com/img.jpg",
    "date": "Month DD, YYYY"
  }
]
```

### data/gallery.json
Array of gallery image objects:
```json
[
  {
    "id": 1,
    "url": "https://image-url.com/img.jpg",
    "category": "classes|events|sports|graduation",
    "caption": "Image caption text"
  }
]
```

---

## 8. DATABASE SCHEMA (MySQL — PHP Ready)

When you add a PHP backend, create this database:

```sql
CREATE DATABASE st_lawrence_school;
USE st_lawrence_school;

-- Admissions inquiries from website form
CREATE TABLE inquiries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    parent_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(100),
    child_name VARCHAR(100) NOT NULL,
    child_age INT,
    class_applying VARCHAR(50) NOT NULL,
    preferred_term VARCHAR(30),
    message TEXT,
    status ENUM('new', 'contacted', 'enrolled', 'declined') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Blog / news posts
CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(80),
    content TEXT,
    excerpt VARCHAR(400),
    image VARCHAR(500),
    slug VARCHAR(255) UNIQUE,
    published TINYINT(1) DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Gallery images
CREATE TABLE gallery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(500) NOT NULL,
    category ENUM('classes','events','sports','graduation','general') DEFAULT 'general',
    caption VARCHAR(255),
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Admin users (for future admin panel)
CREATE TABLE admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('superadmin','admin','editor') DEFAULT 'editor',
    last_login TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact form messages
CREATE TABLE contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(100),
    subject VARCHAR(150),
    message TEXT NOT NULL,
    read_status TINYINT(1) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### PHP API Endpoints (Future)

| Method | Endpoint              | Action                           |
|--------|-----------------------|----------------------------------|
| POST   | /api/inquiries.php    | Save admissions form             |
| POST   | /api/contact.php      | Save contact form message        |
| GET    | /api/posts.php        | Return posts JSON                |
| GET    | /api/gallery.php      | Return gallery JSON              |
| POST   | /api/admin/login.php  | Admin login                      |
| GET    | /api/admin/inquiries.php | List all inquiries (protected) |

**To connect frontend to PHP:**
In `js/main.js`, update the form submit handlers to POST to these endpoints instead of saving to localStorage.

---

## 9. CUSTOMISATION GUIDE

### Change School Name
Search and replace `St. Lawrence` across all HTML files.

### Change Phone Number
Find all instances of `256700000000` and `+256 700 000 000` and replace.

### Change Email
Find all instances of `info@stlawrenceschool.ac.ug` and replace.

### Change Location/Map
In `contact.html`, update the Google Maps `<iframe src="...">` URL with the actual school coordinates. Use: https://maps.google.com → Share → Embed a map.

### Change Colors
All colors are CSS variables in `css/styles.css` at the top under `:root { }`. Change `--brown-primary` to rebrand instantly.

### Change Hero Image
In `index.html`, find `.hero-bg` and update the `background: url('...')` value.

### Add Real Photos
Replace the Unsplash placeholder URLs with actual school photos. Recommended sizes:
- Hero: 1600×900px minimum
- Gallery: 800×600px (any aspect ratio works in masonry)
- About/Why sections: 800×600px, 4:3 ratio

### Update PLE Results
In `index.html` and `academics.html`, find each `.progress-card` and update the `data-width` value and the displayed percentage text.

### Add/Remove Nav Links
Edit both `.navbar-links` and `.navbar-mobile` sections in every HTML file.

---

## 10. DEPLOYMENT INSTRUCTIONS

### Option A: XAMPP (Local / School Computer)

1. Install XAMPP
2. Place the `st-lawrence/` folder inside `C:/xampp/htdocs/`
3. Start Apache in XAMPP Control Panel
4. Open browser → `http://localhost/st-lawrence/`

### Option B: cPanel Shared Hosting (Recommended for live site)

1. Log into cPanel
2. Go to **File Manager** → `public_html`
3. Upload all files (maintain folder structure)
4. Access at `https://yourdomain.com`

### Option C: Netlify (Free, Fast)

1. Go to https://netlify.com → Create account
2. Drag and drop the `st-lawrence/` folder onto Netlify dashboard
3. Site goes live instantly with a free `.netlify.app` URL
4. Connect a custom domain later (e.g. `stlawrenceschool.ac.ug`)

### Option D: GitHub Pages

1. Create a GitHub repository
2. Push all files
3. Go to Settings → Pages → Source: main branch
4. Access at `https://username.github.io/repo-name/`

---

## 11. FUTURE ROADMAP

### Phase 2 — PHP Backend (1–2 months)
- [ ] PHP form handlers for inquiries & contact
- [ ] Admin login page
- [ ] Admin dashboard (view & manage inquiries)
- [ ] Blog post CRUD (create/edit/delete posts)
- [ ] Gallery manager (upload/delete images)

### Phase 3 — School Management Integration
- [ ] Parent portal (child performance, fee tracking)
- [ ] SMS/WhatsApp notifications via API
- [ ] Fee payment integration (MTN MoMo / Airtel Money)
- [ ] Teacher portal (upload results, manage classes)
- [ ] Attendance tracking

### Phase 4 — Full Digital Platform
- [ ] EduGrid CBC integration (if using EduGrid)
- [ ] Analytics dashboard
- [ ] School notice board (auto-push to WhatsApp)

---

## 12. COMMON ISSUES & FIXES

| Issue | Likely Cause | Fix |
|-------|-------------|-----|
| Fonts not loading | No internet / Google blocked | Download DM Sans + Lora and host locally |
| Images not showing | Wrong file path or no internet | Use local images in `/assets/images/` |
| Form not saving | localStorage blocked | Check browser privacy settings; use PHP backend |
| Map not showing | Google Maps blocked | Replace with OpenStreetMap embed |
| Nav not toggling | JS not loaded | Check `<script src="js/main.js">` path |
| Progress bars stuck at 0 | JS not running on scroll | Ensure `.progress-cards` class exists on container |
| Gallery filter broken | Wrong `data-category` value | Must match exactly: classes, events, sports, graduation |
| Mobile layout broken | Missing viewport meta | Ensure `<meta name="viewport" ...>` is in `<head>` |

---

## NOTES FOR DEVELOPERS

- All CSS is in one file (`css/styles.css`) for simplicity. Split into modules if the project grows.
- JS uses `IntersectionObserver` — supported in all modern browsers. For very old browsers, add a polyfill.
- Forms currently save to `localStorage`. When PHP is ready, replace the localStorage logic in form submit handlers with `fetch()` POST calls.
- JSON data files (`data/posts.json`, `data/gallery.json`) work only on a web server (not file:// protocol). For local testing, use XAMPP or VS Code Live Server extension.
- The WhatsApp number is hardcoded as `256700000000`. Do a global find-replace to update.

---

*Documentation prepared by Alimap Technologies*
*For support: Unity | Alimap Technologies*
