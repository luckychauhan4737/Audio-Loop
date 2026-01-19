// SONG LIST (5 songs)
const songs = [
    { name: "GOAT(Diljit Dosanjh)", file: "songs/Diljit Dosanjh - GOAT.mp3" },
    { name: "ON TOP(Karan Aujla)", file: "songs/On Top Karan Aujla.mp3" },
    { name: "One Bottle Down  Honey Singh", file: "songs/One Bottle Down  Honey Singh.mp3" },
    { name: "Blender   Masoom Sharma", file: "songs/Blender   Masoom Sharma.mp3" },
    { name: "Raat Ke Shikari Masoom Sharma", file: "songs/Raat Ke Shikari Masoom Sharma.mp3" }
];

let currentSongIndex = 0;
const audio = new Audio();

// ===== ELEMENTS =====
const songList = document.querySelector(".songList");
const songInfo = document.querySelector(".songinfo");

const playBtn = document.querySelector(".songbuttons .playBtn");
const prevBtn = document.querySelector(".songbuttons .prevBtn");
const nextBtn = document.querySelector(".songbuttons .nextBtn");

// 🔴 SAFETY CHECK (DEBUG)
console.log(playBtn, prevBtn, nextBtn);

// ===== LOAD SONGS IN LIBRARY =====
songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.innerText = song.name;
    li.style.cursor = "pointer";

    li.addEventListener("click", () => {
        playSong(index);
    });

    songList.appendChild(li);
});

// ===== PLAY SONG =====
function playSong(index) {
    if (audio.src !== songs[index].file) {
        audio.src = songs[index].file;
    }
    currentSongIndex = index;
    audio.play();
    songInfo.innerText = songs[index].name;
    playBtn.src = "img/pause.svg";
}

// ===== PLAY / PAUSE =====
playBtn.addEventListener("click", () => {
    if (!audio.src) {
        playSong(currentSongIndex);
        return;
    }

    if (audio.paused) {
        audio.play();
        playBtn.src = "img/pause.svg";
    } else {
        audio.pause();
        playBtn.src = "img/play-circle-stroke-rounded.svg";
    }
});

// ===== NEXT =====
nextBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
});

// ===== PREVIOUS =====
prevBtn.addEventListener("click", () => {
    currentSongIndex =
        (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
});

// ===== AUTO NEXT =====
audio.addEventListener("ended", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
});


// Sidebar hamburger toggle
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".left");

hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("show");
});
