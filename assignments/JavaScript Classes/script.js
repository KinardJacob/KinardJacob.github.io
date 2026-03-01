class Song {
	constructor(title, artist, album, year, genre, cover, youtubeCode, youtubeEmbedSrc) {
		this.title = title;
		this.artist = artist;
		this.album = album;
		this.year = year;
		this.genre = genre;
		this.cover = cover;
		this.youtubeCode = youtubeCode;
		this.youtubeEmbedSrc = youtubeEmbedSrc;
	}

	getCardElement = (onClickHandler) => {
		const card = document.createElement("article");
		card.className = "song-card";
		card.innerHTML = `
			<h3>${this.title}</h3>
			<p class="artist">by ${this.artist}</p>
			<img src="${this.cover}" alt="${this.title} album cover">
		`;

		card.addEventListener("click", () => onClickHandler(this));
		return card;
	};

	getModalMarkup = () => {
		return `
			<h3>${this.title}</h3>
			<p class="byline">by ${this.artist}</p>
			<p><strong>Album:</strong> ${this.album}</p>
			<p><strong>Year:</strong> ${this.year}</p>
			<p><strong>Genre:</strong> ${this.genre}</p>
		`;
	};
}

const songs = [
	new Song(
		"Bohemian Rhapsody",
		"Queen",
		"A Night at the Opera",
		1975,
		"Rock",
		"images/Bohemian_Rhapsody.png",
		"fJ9rUzIMcZQ",
		"https://www.youtube.com/embed/fJ9rUzIMcZQ?si=lytlnDM3WoSXZARM"
	),
	new Song(
		"Billie Jean",
		"Michael Jackson",
		"Thriller",
		1982,
		"Pop",
		"images/Michael_Jackson_1992.jpg",
		"Zi_XLOBDo_Y",
		"https://www.youtube.com/embed/Zi_XLOBDo_Y?si=ZJPqjs7J8ntJNdG-"
	),
	new Song(
		"Mr. Brightside",
		"The Killers",
		"Hot Fuss",
		2004,
		"Rock",
		"images/Riewoldt_with_Killers_GF17.jpg",
		"gGdGFtwCNBE",
		"https://www.youtube.com/embed/gGdGFtwCNBE?si=45IwqCeaIAKfLaRM"
	),
	new Song(
		"Rolling in the Deep",
		"Adele",
		"21",
		2010,
		"Pop",
		"images/Adele_-_Live_2009_(4).jpg",
		"rYEDA3JcQqw",
		"https://www.youtube.com/embed/rYEDA3JcQqw?si=zZPAXYhMro-yJsui"
	)
];

const songsContainer = document.getElementById("songs-container");
const modal = document.getElementById("song-modal");
const modalCloseButton = document.getElementById("modal-close");
const modalVideo = document.getElementById("modal-video");
const modalInfo = document.getElementById("modal-info");

const renderSongs = () => {
	songs.forEach((song) => {
		songsContainer.append(song.getCardElement(openModal));
	});
};

const openModal = (song) => {
	if (!modal || !modalVideo || !modalInfo) {
		return;
	}

	const videoUrl = song.youtubeEmbedSrc;
	const watchUrl = `https://www.youtube.com/watch?v=${song.youtubeCode}`;

	modalVideo.src = "";
	modalVideo.src = videoUrl;
	modalInfo.innerHTML = `${song.getModalMarkup()}<p><a href="${watchUrl}" target="_blank" rel="noopener noreferrer">Open on YouTube</a></p>`;
	modal.style.display = "block";
	modal.setAttribute("aria-hidden", "false");
};

const closeModal = () => {
	if (!modal || !modalVideo) {
		return;
	}

	modal.style.display = "none";
	modal.setAttribute("aria-hidden", "true");
	modalVideo.src = "";
};

if (modalCloseButton) {
	modalCloseButton.addEventListener("click", closeModal);
}

window.addEventListener("click", (event) => {
	if (event.target === modal) {
		closeModal();
	}
});

window.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && modal.style.display === "block") {
		closeModal();
	}
});

if (songsContainer) {
	renderSongs();
}
