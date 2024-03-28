// Title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
    { title: "Dancing Queen", artist: "ABBA", genre: "Pop" },
    { title: "Sweet Child o' Mine", artist: "Guns N' Roses", genre: "Rock" },
    { title: "Billie Jean", artist: "Michael Jackson", genre: "Pop" },
    { title: "Respect", artist: "Aretha Franklin", genre: "R&B" }
    // Added more songs
];

// Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Rock",
    "Rocket": "Pop",
    "Groot": "Rock"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    for (const guardian in guardians) {
        const playlist = songs.filter(song => song.genre === guardians[guardian]);
        displayPlaylist(guardian, playlist);
    }
}

// Function to display playlists
function displayPlaylist(guardian, playlist) {
    const playlistsDiv = document.getElementById('playlists');
    const guardianHeading = document.createElement('h2');
    guardianHeading.textContent = guardian + "'s Playlist";
    const playlistUL = document.createElement('ul');

    playlist.forEach(song => {
        const songLI = document.createElement('li');
        songLI.textContent = `${song.title} - ${song.artist}`;
        playlistUL.appendChild(songLI);
    });

    playlistsDiv.appendChild(guardianHeading);
    playlistsDiv.appendChild(playlistUL);
}

//Displays the playlists for each Guardian
generatePlaylist(guardians, songs);





