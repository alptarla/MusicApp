import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/MaterialIcons";
interface Props {
  music: IMusic;
  isBookmarked: boolean;
  onToggleBookmark: (music: IMusic) => void;
}

const MusicCard: React.FC<Props> = ({
  music,
  isBookmarked = false,
  onToggleBookmark,
}) => (
  <View style={styles.card}>
    <Image
      source={{ uri: music.imageUrl }}
      style={styles.image}
    />
    <View style={styles.card_content}>
      <Text style={styles.title}>{music.title}</Text>
      <Text style={styles.artist}>{music.artist}</Text>
    </View>
    <Pressable
      onPress={() => onToggleBookmark(music)}
      style={styles.bookmark}
    >
      <Icon
        name={isBookmarked ? "bookmark" : "bookmark-outline"}
        size={24}
      />
    </Pressable>
  </View>
);

export default MusicCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 5,
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: "contain",
    marginRight: 10,
  },
  card_content: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 21,
    marginBottom: 3,
  },
  artist: {
    fontWeight: "bold",
    color: "#707070",
  },
  bookmark: {
    alignSelf: "flex-start",
    margin: 5,
  },
});
