import Colors from "../../constants/Colors";

export const styles = {
  container: {
    paddingBottom: 0,
    marginHorizontal: 3,
  },
  closeIcon: {
    position: "absolute",
    top: 60,
    right: 16,
  },

  exerciseList: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 6,
    margin: 10,
    padding: 10,
    flexDirection: "row",
    height: 150,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor:'#eee'

  },
  cardBody: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'space-between',
  },
  cardTitle: {
    borderWidth: 1,
    borderColor: Colors.primary, 
    borderRadius: 6,
    padding: 5,
    color:Colors.primary
  },
  textButton: {
    color: Colors.primary,
    alignSelf: "flex-start",
    marginHorizontal: 8,
  },
  editIcon: {
    width: "10%",
    marginVertical: 10,

  },
  exerciseDisplay: {
    marginVertical: 10,
    color:Colors.primary

  },
  image: {
    height: 100,
    borderRadius: 6
  },
  cover: {
    height: 100,
    width: '100%',
    margin: 0,
    paddingTop: 0
  },
  heading: {
    height: 100,
    width: '100%',
    margin: 0,
    paddingTop: 0, 
    backgroundColor:'white'
  },
  zoomInIcon: {
    position: "absolute",
    top: 10, right: 5
  }
}