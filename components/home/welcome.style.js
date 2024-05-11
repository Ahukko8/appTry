import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index";


const styles = StyleSheet.create({
    container: {
        width: "100%",
        
    },
    welcomeTxt: {
        fontFamily: "ReemKufi",
        fontSize: SIZES.xLarge,
        marginTop: SIZES.medium,
        paddingRight: SIZES.xLarge
    }
})

export default styles