import { Fragment } from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View style={{
      backgroundColor: '#131016',
      flex: 1,
      padding: 24
    }}>
      <Text style={{
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
      }}>
        Hello
      </Text>
      <Text style={{
        color: 'gray',
        fontSize: 16
      }}>
        World!
      </Text>
    </View>
  );
}