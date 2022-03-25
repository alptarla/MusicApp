import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

interface IProps {
  music: IMusic;
}

const MusicCard: React.FC<IProps> = ({ music }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: music.imageUrl }}
        style={styles.image}
      />
      <View style={styles.card_content}>
        <Text style={styles.title}>{music.title}</Text>
        <Text style={styles.artist}>{music.artist}</Text>
      </View>
    </View>
  );
};

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
});
