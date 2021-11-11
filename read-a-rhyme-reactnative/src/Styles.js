import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },    
    book: {
        height: 225,
        width: 150,
        borderRadius: 5,
        marginVertical: 40,
        backgroundColor: "#cccccc",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20

    },
    bookTitle: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#cccccc",

    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modeSelectionView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: "#F194FF",
    },
    libraryView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 100,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    quizAnswer: {
        alignSelf: 'stretch',
        borderRadius: 20,
        padding: 10,
        backgroundColor: "#F194FF",
        margin: 5
    },
    quizView: {
        width: "100%",
        justifyContent: 'center',
        padding: 20
    },
    backButton: {
        flex: 1,
        width: 50,
        height: 50,
        resizeMode: 'contain'
    }
});