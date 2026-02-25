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
		"Two-Headed Boy",
		"Neutral Milk Hotel",
		"In the Aeroplane Over the Sea",
		1998,
		"Indie Folk",
		"https://upload.wikimedia.org/wikipedia/en/0/01/Neutral_Milk_Hotel_-_In_the_Aeroplane_Over_the_Sea.jpg",
		"11LJ1XfEw8c"
	),
	new Song(
		"Jailhouse Rock",
		"Elvis Presley",
		"Jailhouse Rock",
		1957,
		"Rock and Roll",
		"https://upload.wikimedia.org/wikipedia/en/7/72/Jailhouse_Rock_EP.jpg",
		"gj0Rz-uP4Mk"
	),
	new Song(
		"So What",
		"Miles Davis",
		"Kind of Blue",
		1959,
		"Jazz",
		"https://upload.wikimedia.org/wikipedia/en/9/9c/MilesDavisKindofBlue.jpg",
		"ylXk1LBvIqU"
	),
	new Song(
		"Jolene",
		"Dolly Parton",
		"Jolene",
		1974,
		"Country",
		"https://upload.wikimedia.org/wikipedia/en/c/c4/Dolly_Parton_-_Jolene.jpg",
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
