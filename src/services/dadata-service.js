class DaDataService {
  apiKey = "d8ca241e23d98a10b97f35d105486188db4bab15";
  url = " https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party";

  auth = () => {
    fetch(this.url, {}).then();
  };

  request = () => {
    return fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: " application/json",
        Authorization: `Token ${this.apiKey}`
      },
      body: JSON.stringify({ query: "сбербанк" })
    }).then(res => res.json());
  };

  getOrganizations = async () => {
    const data = await this.request();

    return data;
  };
}

export default DaDataService;
