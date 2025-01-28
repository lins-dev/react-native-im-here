import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { styles } from "./style";

const handleParticipantAdd = (i: number) => {
    i++;
    console.log(`Button has clicked: ${i} times!`);
    return i;
}
export function Home() {
    var i = 0;
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Hello World!
            </Text>
            <Text style={styles.eventDate}>
                Segunda-feira, 27/01/20025
            </Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    placeholderTextColor="#FFF"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => i = handleParticipantAdd(i)}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}