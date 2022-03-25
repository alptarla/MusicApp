import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import MusicList from "../components/MusicList";
import useMusic from "../hooks/useMusic";
import theme from "../theme";

const BookmarksScreen = () => {
  const { bookmarks } = useMusic();

  if (!bookmarks.length) {
    return (
      <View style={styles.screen}>
        <View style={styles.warning}>
          <Text style={styles.warningText}>No bookmarks yet!</Text>
        </View>
      </View>
    );
  }

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
    backgroundColor: theme.colors.white,
    padding: 10,
  },
  warning: {
    backgroundColor: theme.colors.warning,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  warningText: {
    color: theme.colors.white,
    fontWeight: "bold",
  },
});
