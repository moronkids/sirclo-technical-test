import http from "helpers/ConnectionManager";
const key = process.env.REACT_APP_KEY;

export const getTopTrack = async (artist, page) => {
  const artists = artist === "default" ? "Sheila On 7" : artist;
  const page_ = page || 1;
  const baseUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artists}&api_key=${key}&page=${page_}&format=json`;
  const connect = await http.get(baseUrl);
  return connect.data;
};
export const getTopArtist = async (page) => {
  // alert(page);
  const baseUrl = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=indonesia&api_key=${key}&page=${page}&format=json`;
  const connect = await http.get(baseUrl);
  return connect.data;
};
export const searchArtist = async (artist) => {
  //   alert("cekin");
  const baseUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artist}&api_key=${key}&format=json`;
  const connect = await http.get(baseUrl);
  console.log(connect, "artist");
  return connect.data;
};
export const searchTrack = async (track) => {
  //   alert("cekin");
  const baseUrl = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${track}&api_key=${key}&format=json`;
  const connect = await http.get(baseUrl);
  console.log(connect, "track");
  //   alert("tes");
  return connect.data;
};
