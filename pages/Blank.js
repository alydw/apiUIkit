import React from "react";
import { StyleSheet, View, SafeAreaView, TextInput, } from "react-native";
import { useMutation } from "react-query";
import axios from "axios";
import { NativeBaseProvider, Box, Heading, Button, ScrollView } from 'native-base';

export const Blank = () => {
  const [text, setText] = React.useState({
    name:"",
    email:"",
    gender:"",
    status:""
  });

  const config = {
    headers: {
      'Authorization' : 'Bearer 4852a22b69b8706a49ea608ae44f37b4f3ec7535fdd4fb84e76a5e59b4005733 ',
          'Content-Type' : 'application/json',
          'Accept' : 'application/json' 
    }
  }

  const postItem = async (data) =>{
    const resultAxios = await axios.post("https://gorest.co.in/public/v2/users",data,config).then(result => result);
    return resultAxios; 
  }

  const {mutate} = useMutation(postItem,{})

  const Botao = () => {
    return <ScrollView showsVerticalScrollIndicator={false} px="3">
            <Button onPress={() => mutate(text)} size="sm" variant="subtle">
              ADICIONAR
            </Button> 
      </ScrollView>;
  };

  function Head() {
    return <Heading>Novo usuário</Heading>;
  }

  return ( 
    <NativeBaseProvider>
      <Box flex={1} bg="#F0FFF0" alignItems="center" justifyContent="center">
    <SafeAreaView style={styles.tela}>
    <View style={styles.container}>
     <Head></Head>
    
    <TextInput
        style={styles.input}
        onChangeText={value => setText({...text,name:value})}
        value={text.name}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        onChangeText={value => setText({...text,email:value})}
        value={text.email}
        placeholder="E-mail"
      />
      <TextInput
        style={styles.input}
        onChangeText={value => setText({...text,gender:value})}
        value={text.gender}
        placeholder="Gênero"
      />
      <TextInput
        style={styles.input}
        onChangeText={value => setText({...text,status:value})}
        value={text.status}
        placeholder="Status"
      />
      <Botao></Botao>
    </View>
    </SafeAreaView>
    </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});