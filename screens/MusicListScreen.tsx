import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import musicData from "../music-data.json";
import MusicCard from "../components/MusicCard";

const MusicListScreen = () => {
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
      <View style={styles.screen_container}>
        <TextInput
          value={searchKeywords}
          onChangeText={handleSearch}
          placeholder="Search music..."
          style={styles.search}
        />
        <FlatList
          data={musicList}
          renderItem={renderMusicCards}
        />
      </View>
    </SafeAreaView>
  );
};

export default MusicListScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  screen_container: {
    padding: 10,
  },
  search: {
    width: "100%",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#eeeeee",
    borderRadius: 5,
  },
});
