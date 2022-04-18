import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useQuery } from "react-query";
import axios from "axios";

export const People = () => {
  const config = {
    headers: {
      'Authorization' : 'Bearer 4852a22b69b8706a49ea608ae44f37b4f3ec7535fdd4fb84e76a5e59b4005733 ',
          'Content-Type' : 'application/json',
          'Accept' : 'application/json' 
    }
  }
  const { isLoading, error, data, isFetching } = useQuery("people-2", () =>
    axios.get("https://gorest.co.in/public/v2/users", config).then((res) => res.data)
  );

  if (isLoading) return <Text>Loading...</Text>;

  if (error) return <Text>An error has occurred: {error.message}</Text>;

  return (
    <ScrollView>
      {!!data &&
        data.map((user,index) => (
          <View key={index} style={styles.container}>
            <Text style={styles.nome}>Nome: {user.name}</Text>
            <Text style={styles.text}>Email: {user.email}</Text>
            <Text>-----------------------------------------------</Text>
            <View>
              <Text>{isFetching ? "Updating..." : ""}</Text>
            </View>
          </View>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
  nome: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  container: {
    paddingLeft: 5,
    backgroundColor: '#E9967A'
  }

});


