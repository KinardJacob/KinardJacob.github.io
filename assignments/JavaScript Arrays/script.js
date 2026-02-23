// Arrays - Mood Music Selector
// AI-Generated Code
// Citation: Creating and appending DOM elements with JavaScript
// Reference: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

const moodSelect = document.getElementById("mood-select");
const songsList = document.getElementById("songs-list");
const videoSection = document.getElementById("video-section");

// Data Loading - Happy songs
const happySongs = {
	"Pharrell Williams - Happy": {
		displayText: "Pharrell Williams - Happy",
		embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZbZSe6N_BXs?si=Y2VG--tGzIF49RDq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	"Katrina & The Waves - Walking On Sunshine": {
		displayText: "Katrina & The Waves - Walking On Sunshine",
		embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/iPUmE-tne5U?si=RWviYvQ_UezQh8cu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	"Justin Timberlake - Can't Stop the Feeling": {
		displayText: "Justin Timberlake - Can't Stop the Feeling",
		embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ru0K8uYEZWw?si=cA2tzflXzzGIPYpW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	"Dua Lipa - Levitating Featuring DaBaby": {
		displayText: "Dua Lipa - Levitating Featuring DaBaby",
		embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/TUVcZfQe-Kw?si=CkOywaGs2nKn_hvq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	"Taylor Swift - Shake It Off": {
		displayText: "Taylor Swift - Shake It Off",
		embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/nfWlot6h_JM?si=eCsAs6rEo3s9U32Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	}
};

// Data Loading - Sad songs
const sadSongs = {
	"Lewis Capaldi - Someone You Loved": {
		displayText: "Lewis Capaldi - Someone You Loved",
		embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/zABLecsR5UE?si=mibDWyy-Vg0YPoYW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	"Billie Eilish - when the party's over": {
		displayText: "Billie Eilish - when the party's over",
		embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/pbMwTqkKSps?si=ZXKMki1LvIqbErdp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	"Adele - Easy On Me": {
		displayText: "Adele - Easy On Me",
		embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/U3ASj1L6_sY?si=ZN5u-o1C536B-llp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	"Olivia Rodrigo - drivers license": {
		displayText: "Olivia Rodrigo - drivers license",
		embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZmDBbnmKpqQ?si=pfw5e1WcvadrEhDe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	"Sam Smith - Too Good At Goodbyes": {
		displayText: "Sam Smith - Too Good At Goodbyes",
		embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/J_ub7Etch2U?si=psqdLNd4DonHiIr_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	}
};

const moodLibrary = {
	happy: happySongs,
	sad: sadSongs
};

function clearVideoSection() {
	videoSection.innerHTML = "";
}

function showVideo(songData) {
	const embedMarkup = songData.embedCode.trim();

	if (!embedMarkup || embedMarkup.startsWith("<!--")) {
		videoSection.innerHTML = "<p>Add this song's iframe embed code in script.js first.</p>";
		return;
	}

	videoSection.innerHTML = embedMarkup;
}

// Selecting a Mood - Build song links for that mood
function renderSongs(moodKey) {
	songsList.innerHTML = "";
	clearVideoSection();

	if (!moodKey) {
		return;
	}

	const selectedSongs = moodLibrary[moodKey];

	Object.keys(selectedSongs).forEach((songTitle) => {
		const listItem = document.createElement("li");
		const songLink = document.createElement("a");

		songLink.href = "#";
		songLink.className = "song-link";
		songLink.textContent = selectedSongs[songTitle].displayText;

		// Clicking a Song - Show the selected embedded video
		songLink.addEventListener("click", (event) => {
			event.preventDefault();
			showVideo(selectedSongs[songTitle]);
		});

		listItem.appendChild(songLink);
		songsList.appendChild(listItem);
	});
}

moodSelect.addEventListener("change", (event) => {
	renderSongs(event.target.value);
});
