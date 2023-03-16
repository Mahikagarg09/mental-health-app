import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>({
  container: {
    maxWidth: "lg",
    backgroundColor: "#f7f0e6",
    marginTop: "100px",
    marginBottom: "100px",
    padding: "100px",
  },
  overviewHeading: {
    letterSpacing: "-0.02em",
    WebkitFontSmoothing: "antialiased",
    color: "#252625",
    fontFamily: "Overpass,sans-serif",
    fontSize: "3rem",
    fontStyle: "normal",
    fontWeight: "lighter",
    lineHeight: "3.5rem",
  },
  overviewContent: {
    fontFamily: "Overpass,sans-serif",
    color: "#252625",
    opacity: "0.8",
    marginTop: "1rem",
    marginBottom: "2rem",
    fontSize: "20px",
    lineHeight: "32px",
  },
  overviewButton: {
    height : "56px",
    minWidth : "160px",
    borderWidth : "1px",
    padding : "15px 36px",
    fontSize : "20px",
    lineHeight : "26px",
    color: "#325343",
    backgroundColor: "#9bd58b",
    borderColor: "transparent",
    borderRadius: "6.25rem",
    cursor: "pointer",
  },
  overviewImage: {
    width: "100%",
    height: "100%",
  }
}));

export default useStyles;