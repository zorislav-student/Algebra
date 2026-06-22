// Request pomocu XMLHttpRequest
const requestWithXMLHttpRequest = () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://dummyjson.com/product', true) // treci param je async: boolean

    request.onload = (response) => {
        // response property returns the response's body content as an ArrayBuffer, a Blob, a Document, 
        // a JavaScript Object, or a string, depending on the value of the request's responseType property.
        console.log(response.target.response)
    }

    request.send();
}

const requestWithFetch = () => {
    fetch('https://dummyjson.com/product/100')
        .then(response => response.json()) // ili chaining
        .then(body => console.log(body))
        .catch(err => console.error(err)) // to test, use https://dummyjson.com/product/300

        // .then(response => response.json().then(body => console.log(body))).catch(err => console.error("Greska")) // all-in-one
}

const requestWithFetchAndAsync = async () => {
    try {
        const response = await fetch('https://dummyjson.com/product/110')
        const body = await response.json()
        console.log(body);
        // return body;
    } catch(err) {
        console.error(err)
        // return err
    }
    
} 

requestWithXMLHttpRequest();
requestWithFetch();

requestWithFetchAndAsync()
// requestWithFetchAndAsync().then(x => console.log(x)) // use in combination with return from requestWithFetchAndAsync()