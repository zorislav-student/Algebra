import { config } from '../config/config-provider.js'

export async function getSearchResult(searchTerm) {
    try {
        const response = await fetch(`${config.itunesApi.baseUrl}${config.itunesApi.searchEndpoint}?term=${searchTerm}&media=music`)
        if (!response.ok) {
            console.warn(`Fetching search result failed. Status code: ${response.status}`)
            return []
        }
        
        const responseJson = await response.json();
        config.debugEnabled && console.debug(`Response body`, JSON.stringify(responseJson, null, 2));

        return responseJson;
    } catch(error) {
        console.warn(`Fetching search result failed. ${error}`)
    }
    
}

export default {
    getSearchResult: getSearchResult
}
