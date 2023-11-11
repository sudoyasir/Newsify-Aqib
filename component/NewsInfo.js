import React from "react";
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AppButton from "./AppButton";
import Icon from "./Icon";
const ListingDetails = ({ route }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={{ uri: route.params.urlToImage }} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{route.params.title}</Text>
          <Text style={styles.subtitle}>{route.params.content}</Text>
          <View style={styles.shareContainer}>
            <View style={styles.iconContainer}>
              <Icon
                onPress={() =>
                  Linking.openURL(`whatsapp://send?text=${route.params.url}`)
                }
                name={"whatsapp"}
                size={40}
                backgroundColor="#00cc00"
              />
              <Text style={styles.logoText}>Whats App</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon
                onPress={() => Linking.openURL(`sms:?body=${route.params.url}`)}
                name={"message"}
                size={40}
                backgroundColor="gold"
              />
              <Text style={styles.logoText}>Message</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon
                onPress={() =>
                  Linking.openURL(`mailto:?&body=${route.params.url}`)
                }
                name={"email"}
                size={40}
                backgroundColor="#3399ff"
              />
              <Text style={styles.logoText}>Email</Text>
            </View>
          </View>
          <AppButton
            onPress={() => Linking.openURL(route.params.url)}
            title={"Click here to read full news"}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  container: {
    flex: 1,
    paddingBottom: 50,
  },
  detailsContainer: { padding: 20 },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    color: "#FF595A",
    fontWeight: "bold",
  },
  shareContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 17,
  },
  logoText: {
    marginVertical: 5,
    fontSize: 10,
  },
});
export default ListingDetails;
