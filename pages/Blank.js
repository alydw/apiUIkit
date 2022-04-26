import React from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import { useMutation } from "react-query";
import axios from "axios";
import { NativeBaseProvider, Box, Heading, Button, ScrollView, Input, } from 'native-base';

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
    return <Heading style={styles.head}>Novo usuário</Heading>;
    
  }

  return ( 
    <NativeBaseProvider>
      <Box flex={1} bg="#F0FFF0" alignItems="center" justifyContent="center"
      width="260px">
    <SafeAreaView style={styles.tela}>
    <View style={styles.container}>
     <Head></Head>
    
    <Input mx="3" w="85%" maxWidth="300px"
        style={styles.input}
        onChangeText={value => setText({...text,name:value})}
        value={text.name}
        placeholder="Nome"
      />
      <Input mx="3" w="85%" maxWidth="300px"
        onChangeText={value => setText({...text,email:value})}
        value={text.email}
        placeholder="E-mail"
      />
      <Input mx="3" w="85%" maxWidth="300px"
        onChangeText={value => setText({...text,gender:value})}
        value={text.gender}
        placeholder="Gênero"
      />
      <Input mx="3" w="85%" maxWidth="300px"
        onChangeText={value => setText({...text,status:value})}
        value={text.status}
        placeholder="Status"
      />
      <Text>            </Text>
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
  head: {
    margin: "15px",
},
});