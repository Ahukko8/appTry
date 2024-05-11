import {
    StyleSheet
} from "react-native";
import {
    COLORS,
    SIZES
} from "../../constants/index";


const styles = StyleSheet.create({
    container: {
        width: "100%",

    },
    introTxt: {
        fontFamily: "MvTypeBold",
        marginHorizontal: SIZES.xLarge,
        fontSize: SIZES.large,
        // lineHeight: 24,
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: "center",
        writingDirection: 'rtl',
    }
})

export default styles