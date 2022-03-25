import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import musicData from "./music-data.json";
import MusicCard from "./components/MusicCard";

const App = () => {
  const [musicList, setMusicList] = useState<IMusic[]>(musicData);

  const renderMusicCards: ListRenderItem<IMusic> = ({ item }) => (
    <MusicCard music={item} />
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
