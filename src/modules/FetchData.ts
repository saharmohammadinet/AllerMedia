import axios from "axios";

// Fetch data from API
export async function fetchData(url: string) {
  try {
    let response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.log(e);
    return e;
  }
}
