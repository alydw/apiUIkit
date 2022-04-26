import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Switch, View} from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { Blank } from "./pages/Blank";
import { People } from "./pages/People";
import  {  RFPercentage ,  RFValue  }  from  "react-native-responsive-fontsize" ;

const queryClient = new QueryClient();

export default function App() {
  
  const [showBlank, setShowBlank] = useState(true);
  return (   
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
      
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={showBlank ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setShowBlank(!showBlank)}
          value={showBlank}
        />
        {showBlank ? <Blank /> : <People />}
        <StatusBar style="auto" />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontSize: RFValue(24, 580),
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
    fontSize: RFPercentage(5),
  },
});
