import axios from 'axios';

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers: {
    Authorization:
      "Client-ID 658c0bb59476912edef358fdaa3ed0dd03e159cdcc7f667bcc8ccf8b33487115"
  }
})