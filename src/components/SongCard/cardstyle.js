import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection:'row',
    },
    image: {
        width:100,
        height:100,
        borderRadius: 50,
    },
    title: {
        fontSize:23,
        color: 'black',
        fontWeight: 'bold',
    },
    inner_container:{
        padding: 10,
        flex:1,
        
    },
    info_container: {
        flex: 1,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems:'center',
    },
    artist: {
        marginBottom:3,
        fontSize:15,
        fontWeight: 'bold',
        color:'darkdimgrey',
    },
    year: {
        fontSize: 13,
        marginTop:2,
        marginLeft: 9,
        fontStyle:'italic',
        textAlign: 'right',
        color: 'gray', 
    },
    content_container: {
        flexDirection: 'row',
    },
    soldOutContainer: {
        borderColor: 'red',
        borderWidth:1,
        borderRadius:5,
padding: 5,

    },
    soldOutTitle: {
        color: 'red',
        fontSize:15,
        fontWeight: 'bold',
        textAlign: 'center',
    }

})