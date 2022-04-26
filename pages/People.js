import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useQuery } from "react-query";
import axios from "axios";
import { Spacer, NativeBaseProvider, VStack } from "native-base";

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
    <NativeBaseProvider>
    <ScrollView>
      {!!data &&
        data.map((user,index) => (
          <View key={index} style={styles.container}>
            <VStack borderBottomWidth="1" _dark={{
      borderColor: "gray.600"
    }} borderColor="coolGray.200" pl="4" pr="5" py="2">
            <Text style={styles.nome}>Nome: {user.name}</Text>
            <Text style={styles.text}>Email: {user.email}</Text>
            <Spacer />
            </VStack>
            <View>
              <Text>{isFetching ? "Updating..." : ""}</Text>
            </View>
          </View>
        ))}
    </ScrollView>
    </NativeBaseProvider>
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


