import { useContext } from "react";
import { MusicContext } from "../context/MusicProvider";

function useMusic() {
  return useContext(MusicContext);
}

export default useMusic;
