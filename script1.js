/* =====================================================
   NAVBAR ACTIVE LINK LOGIC
   ===================================================== */

const navLinks = document.querySelectorAll('nav ul li a');

function setActiveByHash() {
    const currentHash = location.hash || '#home';
    navLinks.forEach(link => {
        link.classList.toggle(
            'active',
            link.getAttribute('href') === currentHash
        );
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

window.addEventListener('hashchange', setActiveByHash);
window.addEventListener('DOMContentLoaded', setActiveByHash);



/* =====================================================
   GALLERY IMAGE SORTING (LANDSCAPE / PORTRAIT)
   - Handles cached images
   - No image will be skipped
   ===================================================== */

const sourceImages = document.querySelectorAll('.source-gallery img');
const landscapeGallery = document.querySelector('.landscape-gallery');
const portraitGallery = document.querySelector('.portrait-gallery');

function sortImage(img) {
    if (img.naturalWidth > img.naturalHeight) {
        landscapeGallery.appendChild(img);
    } else {
        portraitGallery.appendChild(img);
    }
}

sourceImages.forEach(img => {
    if (img.complete && img.naturalWidth !== 0) {
        // Image already loaded (cached)
        sortImage(img);
    } else {
        img.onload = () => sortImage(img);
    }
});



/* =====================================================
   LIGHTBOX (FULLSCREEN IMAGE VIEW)
   - Event delegation
   - Works with dynamically moved images
   ===================================================== */

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');

/* Open lightbox */
document.addEventListener('click', e => {
    if (e.target.tagName === 'IMG' && e.target.closest('.gallery')) {
        lightbox.style.display = 'flex';
        lightboxImg.src = e.target.src;
    }
});

/* Close button */
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
});

/* Click outside image to close */
lightbox.addEventListener('click', e => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    }
});

/* ESC key to close */
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    }
});
