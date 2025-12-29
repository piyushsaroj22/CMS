// Select all nav links
const navLinks = document.querySelectorAll('nav ul li a');

// Function: mark active based on location.hash (if any)
function setActiveByHash() {
    const currentHash = location.hash || '#home'; // default to #home if no hash
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === currentHash);
    });
}

// On click: add active to clicked link (helps when not using hash navigation)
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // If you're using smooth scroll and don't want to change URL, comment out next line.
        // e.preventDefault();

        // Remove active from all, add to clicked one
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        // If links use hash, let the browser update location.hash -> hashchange event will run setActiveByHash.
        // If you prevented default and are doing manual scroll, the above class toggle keeps the active state.
    });
});

// When hash changes (e.g., user navigates or refreshes), update active
window.addEventListener('hashchange', setActiveByHash);

// On page load, set active according to current hash
window.addEventListener('DOMContentLoaded', setActiveByHash);



// <!-- ===== SCRIPT ===== -->

/* =====================================================
   FINAL GALLERY SCRIPT
   - Auto sort images by aspect ratio (Landscape / Portrait)
   - Fullscreen lightbox (event delegation)
   ===================================================== */


/* ---------- IMAGE SORTING LOGIC ---------- */
/*
   Source gallery ke images check kiye jaate hain.
   naturalWidth > naturalHeight  → Landscape (16:9 type)
   naturalHeight > naturalWidth → Portrait (9:16 type)
*/

const sourceImages = document.querySelectorAll('.source-gallery img');
const landscapeGallery = document.querySelector('.landscape-gallery');
const portraitGallery = document.querySelector('.portrait-gallery');

sourceImages.forEach(img => {
    function sortImage() {
        if (img.naturalWidth > img.naturalHeight) {
            landscapeGallery.appendChild(img);
        } else {
            portraitGallery.appendChild(img);
        }
    }

    if (img.complete && img.naturalWidth !== 0) {
        sortImage();
    } else {
        img.onload = sortImage;
    }
});


/* ---------- LIGHTBOX LOGIC ---------- */
/*
   Event delegation use kiya gaya hai
   taaki dynamically moved images pe bhi kaam kare
*/

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');

/* Gallery image click → open fullscreen */
document.addEventListener('click', e => {
    if (e.target.tagName === 'IMG' && e.target.closest('.gallery')) {
        lightbox.style.display = 'flex';
        lightboxImg.src = e.target.src;
    }
});

/* Close button click */
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

/* Background click → close */
lightbox.addEventListener('click', e => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});

// ==========================================================================

