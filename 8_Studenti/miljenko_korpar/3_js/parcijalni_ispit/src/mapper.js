function mapToArtistSongPairs(responseJson) {
    if (!responseJson || !responseJson.results) {
        return []
    } 
    return responseJson.results.map(song => ({
            artistName: song.artistName,
            trackName: song.trackName
    }));
}

export default {
    mapToSongs: mapToArtistSongPairs
}