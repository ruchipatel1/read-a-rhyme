import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },    
    reading: {
        height: 300,
        width: 200,
        borderRadius: 5,
        marginVertical: 40,
        backgroundColor: "#cccccc",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20

    },
    readingText: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#cccccc",

    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
      },
});