import axios from "axios";

export const llamadaPaisesAPI = async() => {
  let response = undefined;

  try {
    const paisesVar = await axios.get("https://restcountries.eu/rest/v2/all");
    if (paisesVar && paisesVar.data) {
      response = paisesVar.data;
    } else {
      response = undefined;
    }
  } catch (error) {
    console.error(error);
  }

  return response;
};
