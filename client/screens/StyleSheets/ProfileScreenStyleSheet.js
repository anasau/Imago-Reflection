import Colors from "../../constants/Colors";

export const styles = {
  container: {
    paddingBottom: 0,
    marginHorizontal: 8,
  },
  closeIcon: {
    position: "absolute",
    top: 60,
    right: 16,
  },

  exerciseList: {
    borderRadius: 6,
    backgroundColor: "#ddd",
    margin: 5,
    padding: 3,
    flexDirection: "row",
    height:60
  },
  textButton: {
    color: Colors.primary,
    alignSelf: "flex-start",
    marginHorizontal: 8,
  },
  editIcon: {
    width: "10%",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  exerciseDisplay: {
    marginVertical: 10,
  },
  image: {
    height: 100,
    borderRadius: 6
  },
  cover: {
    height: 100,
    margin: 0,
    paddingTop: 0
  },
  zoomInIcon: {
    position: "absolute",
    top: 10, right: 5
  }
}