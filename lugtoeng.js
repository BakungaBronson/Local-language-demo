// Generate a random UUID (Universally Unique Identifier)
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

let key = "32ac668...4459c";
let endpoint = "https://api.cognitive.microsofttranslator.com";

// Create the request data
let requestData = [
    {
        text: "Oli otya",
    },
];

const headers = new Headers({
    "Ocp-Apim-Subscription-Key": key,
    "Ocp-Apim-Subscription-Region": "westus3",
    "Content-type": "application/json",
});

let queryParams = new URLSearchParams({
    "api-version": "3.0",
    from: "lug",
    to: ["en"],
});

fetch(`${endpoint}/translate?${queryParams}`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(requestData),
})
    .then((response) => {
        if (!response.ok) {
            console.error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(JSON.stringify(data, null, 4));
    })
    .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
    });

demo_llm_news = "He later on using the same fraudulent means got a Ugandan Passport. He was arrested from Busia Border Post trying to exit to Germany. He is currently detained at the Immigration Detention Center at the Headquarters"

queryParams = new URLSearchParams({
    "api-version": "3.0",
    from: "en",
    to: ["lug"],
});

requestData = [
    {
        text: demo_llm_news,
    },
];

fetch(`${endpoint}/translate?${queryParams}`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(requestData),
})
    .then((response) => {
        if (!response.ok) {
            console.error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(JSON.stringify(data, null, 4));
    })
    .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
    });
