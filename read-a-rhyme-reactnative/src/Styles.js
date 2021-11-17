import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFDF2',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    page: {
        backgroundColor: "#FFFDF2"
    },
    book: {
        height: 225,
        width: 150,
        borderRadius: 10,
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
    centerText: {
        textAlign: "center",
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
        borderRadius: 35,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: "#99DAFF",
    },
    buttonCloseY: {
        backgroundColor: "#ECE1A3",
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
        // alignSelf: 'stretch',
        width: "30%",
        borderRadius: 45,
        padding: 10,
        backgroundColor: "#99DAFF",
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
    },
    incorrectView: {
        margin: 20,
        backgroundColor: "#FF9999",
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
    correctView: {
        margin: 20,
        backgroundColor: "#8AEF9F",
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
    quizImage: {
        padding: 15,
        alignContent: "center",
    }
});