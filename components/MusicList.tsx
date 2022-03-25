import { FlatList, ListRenderItem } from "react-native";
import React from "react";
import MusicCard from "./MusicCard";
import useMusic from "../hooks/useMusic";

interface Props {
  data: IMusic[];
}

const MusicList: React.FC<Props> = ({ data }) => {
  const { bookmarks, addBookmark, removeBookmark } = useMusic();

  const checkIsBookmarked = (musicId: string) =>
    bookmarks.some((bookmark) => bookmark.id === musicId);

  const handleToggleBookmark = (music: IMusic) => {
    if (checkIsBookmarked(music.id)) {
      return removeBookmark(music.id);
    }

    addBookmark(music);
  };

  const renderMusicCards: ListRenderItem<IMusic> = ({ item }) => (
    <MusicCard
      music={item}
      onToggleBookmark={handleToggleBookmark}
      isBookmarked={checkIsBookmarked(item.id)}
    />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderMusicCards}
    />
  );
};

export default MusicList;
