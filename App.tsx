import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import musicData from "./music-data.json";
import MusicCard from "./components/MusicCard";

const App = () => {
  const [musicList, setMusicList] = useState<IMusic[]>(musicData);
  const [bookmarks, setBookmarks] = useState<IMusic[]>([]);
  const [searchKeywords, setSearchKeywords] = useState("");

  const checkIsBookmarked = (musicId: string) =>
    bookmarks.some((bookmark) => bookmark.id === musicId);

  const filterMusicListByTitle = (title: string): IMusic[] => {
    const musicTitleRegex = new RegExp(title, "i");
    return musicData.filter((music) => music.title.match(musicTitleRegex));
  };

  const handleToggleBookmark = (music: IMusic) => {
    if (checkIsBookmarked(music.id)) {
      setBookmarks((prev) =>
        prev.filter((bookmark) => bookmark.id !== music.id)
      );
      return;
    }

    setBookmarks((prev) => [...prev, music]);
  };

  const handleSearch = (searchText: string) => {
    setSearchKeywords(searchText);

    const newMusicList = filterMusicListByTitle(searchText);
    setMusicList(newMusicList);
  };

  const renderMusicCards: ListRenderItem<IMusic> = ({ item }) => (
    <MusicCard
      music={item}
      onToggleBookmark={handleToggleBookmark}
      isBookmarked={checkIsBookmarked(item.id)}
    />
  );

  return (
    <SafeAreaView style={styles.screen}>
      <TextInput
        value={searchKeywords}
        onChangeText={handleSearch}
        placeholder="Search music..."
        style={styles.search}
      />
      <FlatList
        data={musicList}
        renderItem={renderMusicCards}
        style={styles.list}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  list: {
    width: "100%",
  },
  search: {
    width: "100%",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#eeeeee",
    borderRadius: 5,
  },
});
