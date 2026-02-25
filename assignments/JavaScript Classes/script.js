class Song {
	constructor(title, artist, album, year, genre, cover, youtubeCode) {
		this.title = title;
		this.artist = artist;
		this.album = album;
		this.year = year;
		this.genre = genre;
		this.cover = cover;
		this.youtubeCode = youtubeCode;
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
		"https://upload.wikimedia.org/wikipedia/en/9/9f/Bohemian_Rhapsody.png",
		"11LJ1XfEw8c"
	),
	new Song(
		"Billie Jean",
		"Michael Jackson",
		"Thriller",
		1982,
		"Pop",
		"https://upload.wikimedia.org/wikipedia/commons/d/dd/Michael_Jackson_1992.jpg",
		"gj0Rz-uP4Mk"
	),
	new Song(
		"Mr. Brightside",
		"The Killers",
		"Hot Fuss",
		2004,
		"Rock",
		"https://upload.wikimedia.org/wikipedia/commons/e/ea/Riewoldt_with_Killers_GF17.jpg",
		"ylXk1LBvIqU"
	),
	new Song(
		"Rolling in the Deep",
		"Adele",
		"21",
		2010,
		"Pop",
		"https://upload.wikimedia.org/wikipedia/commons/e/e4/Adele_-_Live_2009_%284%29.jpg",
		"Ixrje2rXLMA"
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
	modalVideo.src = `https://www.youtube.com/embed/${song.youtubeCode}?autoplay=1`;
	modalInfo.innerHTML = song.getModalMarkup();
	modal.style.display = "block";
	modal.setAttribute("aria-hidden", "false");
};

const closeModal = () => {
	modal.style.display = "none";
	modal.setAttribute("aria-hidden", "true");
	modalVideo.src = "";
};

modalCloseButton.addEventListener("click", closeModal);

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

renderSongs();
