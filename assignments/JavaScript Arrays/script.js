// Arrays - Mood Music Selector
// AI-Generated Code
// Citation: Creating and appending DOM elements with JavaScript
// Reference: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

const moodSelect = document.getElementById("mood-select");
const songsList = document.getElementById("songs-list");
const videoSection = document.getElementById("video-section");

// Data Loading - Happy songs
const happySongs = {
	"Happy by Pharrell Williams": {
		displayText: "Happy by Pharrell Williams",
		embedCode: `
			<!-- PASTE EMBED CODE FOR HAPPY HERE -->
			<!-- Example format:
			<iframe src="https://www.youtube.com/embed/ZbZSe6N_BXs" title="Happy by Pharrell Williams" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
			-->
		`
	},
	"Don't Stop Me Now by Queen": {
		displayText: "Don't Stop Me Now by Queen",
		embedCode: `<!-- PASTE EMBED CODE FOR DON'T STOP ME NOW HERE -->`
	},
	"Can't Stop the Feeling by Justin Timberlake": {
		displayText: "Can't Stop the Feeling by Justin Timberlake",
		embedCode: `<!-- PASTE EMBED CODE FOR CAN'T STOP THE FEELING HERE -->`
	},
	"Don't Worry Be Happy by Bobby McFerrin": {
		displayText: "Don't Worry Be Happy by Bobby McFerrin",
		embedCode: `<!-- PASTE EMBED CODE FOR DON'T WORRY BE HAPPY HERE -->`
	},
	"I'm Walking on Sunshine by Katrina & the Waves": {
		displayText: "I'm Walking on Sunshine by Katrina & the Waves",
		embedCode: `<!-- PASTE EMBED CODE FOR I'M WALKING ON SUNSHINE HERE -->`
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
