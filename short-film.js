const shortFilmGallery = document.querySelector('.shortfilm-gallery');
const lightbox = document.getElementById('lightbox');

const videos = [
    { src: 'assets/ShortFilm/video1.mp4', type: 'shortfilm' },
    { src: 'assets/ShortFilm/video2.mp4', type: 'shortfilm' },

    // 🎬 YouTube short films
    { src: 'assets/ShortFilm/video3.mp4', type: 'shortfilm', youtubeId: 'quNx_aXvXdk' },
    { src: 'assets/ShortFilm/video4.mp4', type: 'shortfilm', youtubeId: '1FvH4AfJH2s' },
    { src: 'assets/ShortFilm/video5.mp4', type: 'shortfilm', youtubeId: 'KOa2P74WQZE' },
    { src: 'assets/ShortFilm/video6.mp4', type: 'shortfilm', youtubeId: 'VRIq7VdI6R4' },
];

videos.forEach(video => {

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

    vid.addEventListener('click', () => {
        if (video.youtubeId) {
            window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_blank');
        } else {
            openLocalVideo(video.src);
        }
    });

    shortFilmGallery.appendChild(vid);
});

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