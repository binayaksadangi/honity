import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  Button,
} from "react-native";
import { global } from "../styles/global";
import Card from "../shared/Card";
import { Ionicons } from "@expo/vector-icons";
export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Review 1",
      body: "This is the first review",
      rating: 5,
      key: "1",
    },
    {
      title: "Review 2",
      body: "This is the second review",
      rating: 4,
      key: "2",
    },
    {
      title: "Review 3",
      body: "This is the third review",
      rating: 3,
      key: "3",
    },
    {
      title: "Review 4",
      body: "This is the fourth review",
      rating: 2,
      key: "4",
    },
    {
      title: "Review 5",
      body: "This is the fifth review",
      rating: 1,
      key: "5",
    },
  ]);
  
  return (
    <View>
      <View style={global.container}>
        <FlatList
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Review", item);
              }}
            >
              <Card>
                <Text style={global.titleText}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
        <Modal visible={modalOpen} animationType="slide"
           
        >
          <View style={styles.modalContent}>
            <Text>Hello from modal</Text>
            <Ionicons
        name="close-circle-outline"
        style={{ ...styles.modalIcon,...styles.modalClose}}
        size={36}
        color="black"
        onPress={() => {setModalOpen(false)}}
      />
          </View>
        </Modal>
      </View>
      <Ionicons
        name="add-circle-outline"
        style={styles.icon}
        size={36}
        color="black"
        onPress={() => {setModalOpen(true)}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    
  },
  icon: {
    display: "flex",
    alignSelf: "center",
    marginTop: 15,
    color: "green",
    
  },
  modalIcon:{
    position:'absolute',
    right:10,
    marginTop:10,
    color:'red'
  },
  modalClose:{
    
  }
});
