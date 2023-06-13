// const urlRender = "https://api-santana.onrender.com";

const URL = import.meta.env.DEV
  ? import.meta.env.VITE_API_URL_ENDPOINT
  : import.meta.env.VITE_API_URL_ENDPOINT;

export { URL };
