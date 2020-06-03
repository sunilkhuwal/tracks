import axios from "axios";

export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/http://71fc9977b76b.ngrok.io",
  headers: {
    "Content-Type": "application/json",
  },
});

//https://cors-anywhere.herokuapp.com/
