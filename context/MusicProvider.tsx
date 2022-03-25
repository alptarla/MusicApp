import React, { createContext, useState } from "react";
import musicData from "../music-data.json";

interface MusicContext {
  musicList: IMusic[];
  bookmarks: IMusic[];
  addBookmark: (music: IMusic) => void;
  removeBookmark: (musicId: string) => void;
  filterMusicListByTitle: (title: string) => void;
}

const DEFAULT_VALUE = {
  musicList: [],
  bookmarks: [],
  addBookmark: (music: IMusic) => {},
  removeBookmark: (musicId: string) => {},
  filterMusicListByTitle: (title: string) => {},
};

export const MusicContext = createContext<MusicContext>(DEFAULT_VALUE);

const MusicProvider: React.FC = ({ children }) => {
  const [musicList, setMusicList] = useState<IMusic[]>(musicData);
  const [bookmarks, setBookmarks] = useState<IMusic[]>([]);

  const addBookmark = (music: IMusic) =>
    setBookmarks((prev) => [...prev, music]);

  const removeBookmark = (musicId: string) =>
    setBookmarks((prev) => prev.filter((bookmark) => bookmark.id !== musicId));

  const filterMusicListByTitle = (title: string) => {
    const musicTitleRegex = new RegExp(title, "i");
    const newMusicList = musicData.filter((music) =>
      music.title.match(musicTitleRegex)
    );
    setMusicList(newMusicList);
  };

  return (
    <MusicContext.Provider
      value={{
        musicList,
        bookmarks,
        addBookmark,
        removeBookmark,
        filterMusicListByTitle,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export default MusicProvider;
