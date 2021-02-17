import Colors from "../../constants/Colors";


export const styles = {
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    flex: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#eee",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    minHeight: 600,
  },
  openButton: {
    backgroundColor: Colors.accent,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    position: "absolute",
    bottom: 30,
    right: 150,
  },
  textStyle: {
    color: Colors.primary,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  imageStyle: {
    height: "100%",
    width: "100%"
  },
  touchableHighlight: {
    backgroundColor: Colors.accent,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    position: "absolute",
    bottom: 30,
    right: 150,
    backgroundColor: Colors.accent
  }
}