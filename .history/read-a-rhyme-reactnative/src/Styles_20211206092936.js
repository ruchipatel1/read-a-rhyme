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
        paddingTop: 20,
        paddingBottom: 30,
        marginTop: 50,
        marginBottom: 50,
        marginVertical: 40,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20

    },
    bookTitle: {
        alignItems: "center",
        justifyContent: "center",
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

    textStyle: {
        paddingLeft: 10,
        paddingRight: 10

    },
    textStyle1: {
        paddingBottom: 15,
        fontWeight: "bold"

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
        elevation: 2,
        margin: 3
    },
    buttonClose: {
        backgroundColor: "#99DAFF",
    },
    buttonCloseY: {
        backgroundColor: "#FFF4B6",
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
        width: "33%",
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
        width: 192.5,
        height: 250,
        resizeMode: 'cover',
        borderRadius: 10
    },
    playImage: {
        alignContent: "center",
        width: 125,
        height: 125,
        resizeMode: 'cover'
    },
    listenCoverImage: {
        padding: 15,
        alignContent: "center",
        width: 192.5,
        height: 250,
        resizeMode: 'cover',
        borderRadius: 10,
        position:'absolute'
    },
    listenPlayImage: {
        alignContent: "center",
        width: 125,
        height: 125,
        resizeMode: 'cover'
    },
    playImageSmall: {
        alignContent: "center",
        width: 40,
        height: 40,
        resizeMode: 'cover'
    },
    xButton: {
        alignContent: "center",
        width: 50,
        height: 50,
        resizeMode: 'cover'
    },
    title: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 25,
        paddingVertical: 15,            
    },
    bodyText: {
        textAlign: "center",
        fontSize: 20,
        paddingVertical: 15,
        lineHeight: 40
    },
    backToLibrary: {
        paddingTop: 40,
    }
});