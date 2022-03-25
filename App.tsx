import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import musicData from "./music-data.json";
import MusicCard from "./components/MusicCard";

const App = () => {
  const [musicList, setMusicList] = useState<IMusic[]>(musicData);
  const [bookmarks, setBookmarks] = useState<IMusic[]>([]);

  const checkIsBookmarked = (musicId: string) =>
    bookmarks.some((bookmark) => bookmark.id === musicId);

  const handleToggleBookmark = (music: IMusic) => {
    if (checkIsBookmarked(music.id)) {
      setBookmarks((prev) =>
        prev.filter((bookmark) => bookmark.id !== music.id)
      );
      return;
    }

    setBookmarks((prev) => [...prev, music]);
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
});
