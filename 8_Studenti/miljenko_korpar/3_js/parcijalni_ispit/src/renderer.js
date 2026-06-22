export function renderResults(songs) {
    const songTable = document.querySelector(".songs-table");
    const noSongInfo = document.querySelector(".no-songs-info");
        
    clearSongTable(songTable);

    if (songs.length === 0) {
        songTable.classList.add("hidden")
        noSongInfo.classList.remove("hidden")
    } else {
        noSongInfo.classList.add("hidden")
        populateSongTable(songTable, songs);
        songTable.classList.remove("hidden")
    }
}

function clearSongTable(songTable) {
    // while(songList.firstChild) {
    //     songList.removeChild(songList.firstChild)
    // }
    // alternativa 
    // while(tableBody?.rows.length > 0) {
    //     tableBody.deleteRow(0);
    // }
    // pogledaj komentar u populateSongList() funkciji
    const tableBody = songTable.tBodies[0];
    tableBody.replaceChildren();
    
    const resultCountCell = songTable.tFoot.rows[0].cells[1];
    resultCountCell.textContent = 0;
}

function populateSongTable(songTable, songs) {
    const tableBody = songTable.tBodies[0];
    const tableFooter = songTable.tFoot;
    const tableBodyContent = document.createDocumentFragment();

    songs.forEach(song => {
        const newRow = document.createElement("tr");
        const authorCell = document.createElement("td");
        const trackCell = document.createElement("td");

        authorCell.textContent = song.artistName;
        trackCell.textContent = song.trackName;

        newRow.appendChild(authorCell);
        newRow.appendChild(trackCell);

        tableBodyContent.appendChild(newRow);
    });

    // Na ovaj se nacin, kad se tableBody.appendChild izvršava samo jednom, 
    // browser reflow (DOM refresh) događa samo jednom.
    // Brže nego korištenjem insertRow(), insertCell() 
    // metoda iz HTMLTableElement sucelja.
    tableBody.appendChild(tableBodyContent); 

    const resultCountCell = songTable.tFoot.rows[0].cells[1];
    resultCountCell.textContent = songs.length;
}

export function renderSearchResultLoader(showLoader) {
    const loader = document.querySelector(".loader");
    const songTable = document.querySelector(".songs-table");
    const noSongInfo = document.querySelector(".no-songs-info");

    if (showLoader) {
        loader.classList.remove("hidden")
        songTable.classList.add("hidden")
        noSongInfo.classList.add("hidden")
    } else {
        loader.classList.add("hidden")
    }
}

export default {
    renderSearchResults: renderResults,
    renderSearchResultLoader: renderSearchResultLoader
}