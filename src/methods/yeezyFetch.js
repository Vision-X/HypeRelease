export const yeezyFetch = fetch(
      "https://webscraper-to-api.firebaseapp.com/output.json"
    ).then(result => {
      return result.json();
    });
