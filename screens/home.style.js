import {
    StyleSheet
} from "react-native";
import {
    COLORS,
    SIZES
} from "../constants/index";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary, 
        overflow: 'hidden', 
        // borderBottomLeftRadius: 50, 
        // borderBottomRightRadius: 50, 
        height: 100,
    },

    titleStyle: {
        fontFamily: "MvIzyanreethi",
        fontSize: SIZES.xxLarge,
        color: COLORS.lightWhite

    },
    
    appBarWrapper: {
        marginHorizontal: 22,
        marginTop: SIZES.small,

    },
    // appBar: {
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     alignItems: "left"
    // }
})


export default styles