import React, { useState } from "react";
import { View, StyleSheet, StatusBar, FlatList, Text } from "react-native";
import AppInput from "./AppInput";
import news from "../api/getNews";
import Card from "./Card";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import NoItemFound from "./NoItemFound";

const SearchNews = ({ navigation }) => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [refreshing, onRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dataLength, setDataLength] = useState(1);
  const getNews = async () => {
    setLoading(true);
    const { data } = await news.searchedNews(text);
    setData(data.articles);
    setDataLength(data.articles.length);
    setLoading(false);
  };
  const handleFetch = () => {
    getNews();
  };
  const displayNews = () => {
    if (dataLength === 0) return <NoItemFound />;
    else
      return (
        <FlatList
          data={data}
          refreshing={refreshing}
          onRefreshing={() => getNews()}
          keyExtractor={(news) => news.publishedAt}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subtitle={item.description}
              image={item.urlToImage}
              onPress={() => navigation.navigate("Info", item)}
            />
          )}
        />
      );
  };
  return (
    <View style={styles.container}>
      {loading ? (
        <LottieView
          loop
          autoPlay
          source={require("../animations/96231-loading-orange-animation.json")}
        />
      ) : (
        <>
          <AppInput
            icon={"magnify"}
            search={"magnify"}
            onChangeText={(text) => setText(text)}
            placeholder="Search"
            onSearch={handleFetch}
            inputMode="text"
          />
          {displayNews()}
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ffcccc",
    padding: 10,
    flex: 1,
  },
});
export default SearchNews;
