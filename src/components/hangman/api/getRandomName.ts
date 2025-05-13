import axios from "axios";

export const getRandomName= async () => {
  const url = 'https://api.randomdatatools.ru/?typeName=true&typeName=all&params=FirstName';
  const { data } = await axios<{FirstName: string}>(url);
  return data.FirstName.toLowerCase() || '';
}
