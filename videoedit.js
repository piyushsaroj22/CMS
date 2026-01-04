const landscapeGallery = document.querySelector('.landscape-gallery');
const portraitGallery = document.querySelector('.portrait-gallery');
const shortFilmGallery = document.querySelector('.shortfilm-gallery');
const lightbox = document.getElementById('lightbox');


const videos = [
    { src: 'assets/reels&videoediting/video1.mp4', type: 'landscape' },
    { src: 'assets/reels&videoediting/video2.mp4', type: 'landscape' },
    { src: 'assets/reels&videoediting/video3.mp4', type: 'landscape' },
    { src: 'assets/reels&videoediting/video4.mp4', type: 'landscape' },
    { src: 'assets/reels&videoediting/video5.mp4', type: 'landscape' },
    { src: 'assets/reels&videoediting/video6.mp4', type: 'landscape' },

    { src: 'assets/ShortFilm/video1.mp4', type: 'shortfilm' },
    { src: 'assets/ShortFilm/video2.mp4', type: 'shortfilm' },

    { src: 'assets/reels&videoediting/video9.mp4', type: 'portrait' },

    // 🎬 SHORT FILM (YouTube)
    { src: 'assets/ShortFilm/video3.mp4', type: 'shortfilm', youtubeId: 'quNx_aXvXdk' },
    { src: 'assets/ShortFilm/video4.mp4', type: 'shortfilm', youtubeId: '1FvH4AfJH2s' },
    { src: 'assets/ShortFilm/video5.mp4', type: 'shortfilm', youtubeId: 'KOa2P74WQZE' },
    { src: 'assets/ShortFilm/video6.mp4', type: 'shortfilm', youtubeId: 'VRIq7VdI6R4' },
];


// { src: 'assets/reels&videoediting/ShortFilm/video.mp4', type: 'shortfilm' },
// { src: 'assets/reels&videoediting/video.mp4', type: 'portrait' },
// { src: 'assets/reels&videoediting/video.mp4', type: 'landscape' },

// { src: 'assets/reels&videoediting/video.mp4', type: 'landscape', youtubeId: 'quNx_aXvXdk' },
// { src: 'assets/reels&videoediting/ShortFilm/video.mp4', type: 'shortfilm', youtubeId: 'quNx_aXvXdk' },
// { src: 'assets/reels&videoediting/video.mp4', type: 'portrait', youtubeId: 'quNx_aXvXdk' },


videos.forEach(video => {

    // 👉 NORMAL MP4 VIDEO HANDLE (PREVIEW ONLY)
    const vid = document.createElement('video');
    vid.src = video.src;

    vid.muted = true;
    vid.loop = true;
    vid.autoplay = true;
    vid.playsInline = true;

    vid.setAttribute('muted', '');
    vid.setAttribute('autoplay', '');
    vid.setAttribute('playsinline', '');

    vid.addEventListener('loadeddata', () => {
        vid.play().catch(() => {});
    });

    // 👉 CLICK BEHAVIOR FIX
    vid.addEventListener('click', () => {

        // 🔗 JIS VIDEO ME YOUTUBE LINK HAI → YOUTUBE
        if (video.youtubeId) {
            window.open(
                `https://www.youtube.com/watch?v=${video.youtubeId}`,
                '_blank'
            );
            return;
        }

        // ▶️ JIS VIDEO ME YOUTUBE LINK NAHI HAI → FULLSCREEN (OLD STYLE)
        openLocalVideo(video.src);
    });

    if (video.type === 'landscape') {
        landscapeGallery.appendChild(vid);
    } else if (video.type === 'portrait') {
        portraitGallery.appendChild(vid);
    } else if (video.type === 'shortfilm') {
        shortFilmGallery.appendChild(vid);
    }
});


// 👉 LOCAL VIDEO LIGHTBOX (OLD BEHAVIOR)
function openLocalVideo(src) {
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
