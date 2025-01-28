import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#131016',
        flex: 1,
        padding: 24
    },
    eventName: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
    },
    eventDate: {
        color: 'gray',
        fontSize: 16
    },
    input: {
        backgroundColor: '#1F1E25',
        height: 56,
        borderRadius: 15,
        color: '#FFF',
        padding: 20,
        fontSize: 16,
        flex: 1,
        marginRight: 12
    },
    buttonText: {
        color: "#FFF",
        fontSize: 24
    },
    button: {
        height: 56,
        width: 56,
        borderRadius: 5,
        backgroundColor: "#31CF67",
        alignItems: "center",
        justifyContent: "center"
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    }
});