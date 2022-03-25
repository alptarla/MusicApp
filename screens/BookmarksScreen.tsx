import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import MusicList from "../components/MusicList";
import useMusic from "../hooks/useMusic";

const BookmarksScreen = () => {
  const { bookmarks } = useMusic();

  return (
    <View style={styles.screen}>
      <MusicList data={bookmarks} />
    </View>
  );
};

export default BookmarksScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
});
