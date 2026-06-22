import apiClient from './api-client.js'
import mapper from './mapper.js'
import renderer from './renderer.js';

export default () => {
    const input = document.querySelector("input");
    let timeout;

    input.value = ""
    input.addEventListener("input", () => {
        clearTimeout(timeout);

        timeout = setTimeout(async () => {
            let searchResult = []
            if (input.value) {
                renderer.renderSearchResultLoader(true);
                searchResult = await apiClient.getSearchResult(input.value);
                renderer.renderSearchResultLoader(false);
            }

            const songs = mapper.mapToSongs(searchResult);
            renderer.renderSearchResults(songs);
        }, 500)
    })
}