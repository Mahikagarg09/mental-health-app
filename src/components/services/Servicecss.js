import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    section: {
        margin: '20px',
        backgroundColor: '#fffcf6',
        padding: '20px',
        paddingBottom: '100px',
    },
    content:{
        marginLeft: '20px',
        padding:"0px",
        fontWeight: '700',
        fontSize: '25px',
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "left",
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: "100px",
    },

    heading: {
        textAlign: 'center',
        fontFamily: 'Overpass, sans-serif',
        paddingBottom: '20px',
        paddingTop: '50px',
    },
}));

export default useStyles;