import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useMusic from "../hooks/useMusic";
import MusicList from "../components/MusicList";
import theme from "../theme";

const MusicListScreen = () => {
  const [searchKeywords, setSearchKeywords] = useState("");
  const { musicList, filterMusicListByTitle } = useMusic();

  const handleSearch = (searchText: string) => {
    setSearchKeywords(searchText);
    filterMusicListByTitle(searchText);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.screenContainer}>
        <TextInput
          value={searchKeywords}
          onChangeText={handleSearch}
          placeholder="Search music..."
          style={styles.search}
          placeholderTextColor={theme.colors.text}
        />
        <MusicList data={musicList} />
      </View>
    </SafeAreaView>
  );
};

export default MusicListScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  screenContainer: {
    padding: 10,
  },
  search: {
    width: "100%",
    marginBottom: 20,
    padding: 10,
    backgroundColor: theme.colors.border,
    color: theme.colors.text,
    borderRadius: 5,
  },
});
