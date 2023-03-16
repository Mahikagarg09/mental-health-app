import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    overall: {
        backrgroundColor:"#325343",
        color:"white",
        fontFamily:"Overpass,sans-serif",
        paddingRight:"100px",        
    },
    heading: {
        fontFamily:"Overpass,sans-serif",
        fontWeight: 700,
        fontSize: "3rem",
        paddingTop:"200px",
    },

    subheading: {
        fontFamily:"Overpass,sans-serif",
        fontWeight: 400,
        fontSize: "1.5rem",
    },
}));

export default useStyles;
