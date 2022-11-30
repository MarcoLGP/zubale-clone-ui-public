import React from "react"
import { Image, View, StyleSheet, Text } from "react-native"

const IntroImage = () => {

    return (
        <View style={styles.introImageContainer}>
            <Image source={require("../../assets/images/zubale-intro.png")} resizeMode="contain" style={styles.imgContainer} />
            <Text style={[styles.heeboFont, styles.principalFont]}>Faça parte da Zubale!</Text>
            <Text style={[styles.heeboFont, styles.subtitleFont]}>É grátis seguro e eficaz</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    introImageContainer: {
        width: "100%",
        alignItems: "center"
    },
    imgContainer: {
        height: 200,
        width: 250
    },
    heeboFont: {
        fontFamily: "Heebo-Bold",
        fontWeight: "bold"
    },
    principalFont: {
        fontSize: 25,
        color: "#FDFD3E"
    },
    subtitleFont: {
        fontSize: 20,
        color: "#fff"
    }
})

export default IntroImage