const axios = require("axios");

const util = {
  pinJSONToIPFS: (JSONBody) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    return axios
      .post(url, JSONBody, {
        headers: {
          pinata_api_key: "f713925394e00840af3b",
          pinata_secret_api_key:
            "818a3f339b8c1a42cb2950e2682b66a64648566a2c6283edf957d64438638172",
        },
      })
      .then((resp) => {
        return `https://gateway.pinata.cloud/ipfs/${resp.data.IpfsHash}`;
      })
      .catch((err) => {
        console.log(err);
        return "";
      });
  },
  pinFileToIPFS: (file) => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    const data = new FormData();
    data.append("file", file);

    return axios
      .post(url, data, {
        headers: {
          pinata_api_key: "f713925394e00840af3b",
          pinata_secret_api_key:
            "818a3f339b8c1a42cb2950e2682b66a64648566a2c6283edf957d64438638172",
        },
      })
      .then((resp) => {
        return `https://gateway.pinata.cloud/ipfs/${resp.data.IpfsHash}`;
      })
      .catch((err) => {
        console.log(err);
        return "";
      });
  },
  getData: (url) => {
    return axios
      .get(url)
      .then((resp) => {
        return resp.data;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  },
};

export default util;
