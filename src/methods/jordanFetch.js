export const jordanFetch = fetch (
      "https://webscraper-to-api.firebaseapp.com/jordans.json"
    ).then(result => {
      return result.json();
    });
