const landscapeGallery = document.querySelector('.landscape-gallery');
const portraitGallery = document.querySelector('.portrait-gallery');
const lightbox = document.getElementById('lightbox');

const videos = [
    { src: 'assets/reels&videoediting/video1.mp4', type: 'landscape' },
    { src: 'assets/reels&videoediting/video2.mp4', type: 'landscape' },
    { src: 'assets/reels&videoediting/video3.mp4', type: 'landscape' },
    { src: 'assets/reels&videoediting/video4.mp4', type: 'landscape' },
    { src: 'assets/reels&videoediting/video5.mp4', type: 'landscape' },
    { src: 'assets/reels&videoediting/video6.mp4', type: 'landscape' },
    { src: 'assets/reels&videoediting/video7.mp4', type: 'landscape' },
    { src: 'assets/reels&videoediting/video8.mp4', type: 'landscape' },
    { src: 'assets/reels&videoediting/video9.mp4', type: 'portrait' },
    

];

// { src: 'assets/reels&videoediting/video.mp4', type: 'portrait' },
// { src: 'assets/reels&videoediting/video.mp4', type: 'landscape' },

videos.forEach(video => {
    const vid = document.createElement('video');
    vid.src = video.src;

    // 🔥 autoplay requirements
    vid.muted = true;
    vid.loop = true;
    vid.autoplay = true;
    vid.playsInline = true;

    vid.setAttribute('muted', '');
    vid.setAttribute('autoplay', '');
    vid.setAttribute('playsinline', '');

    // force play
    vid.addEventListener('loadeddata', () => {
        vid.play().catch(() => { });
    });

    // lightbox open
    vid.addEventListener('click', () => openLightbox(video.src));

    if (video.type === 'landscape') {
        landscapeGallery.appendChild(vid);
    } else {
        portraitGallery.appendChild(vid);
    }
});

function openLightbox(src) {
    lightbox.innerHTML = `
        <span id="close">&times;</span>
        <video src="${src}" controls autoplay></video>
    `;
    lightbox.style.display = 'flex';

    document.getElementById('close').onclick = () => {
        lightbox.style.display = 'none';
        lightbox.innerHTML = '';
    };
}
