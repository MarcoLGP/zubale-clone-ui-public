import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"

const zubale_logo_img = require("../../assets/images/zubale-logo.png")

const HeaderHome = () => {

    return (
        <View style={styles.headerContainer}>
            <Image source={zubale_logo_img} style={styles.zubale_img} resizeMode="contain" />
            <Text style={styles.zubale_title_font}>zubale</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    headerContainer: {
        height: "10%",
        width: "95%",
        marginTop: "7%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    zubale_img: {
        height: 30,
        width: 30
    },
    zubale_title_font: {
        fontFamily: "OPTICivet-Medium",
        fontSize: 27,
        color: "#fff"
    }
})

export default HeaderHome