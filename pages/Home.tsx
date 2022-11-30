import React from "react"
import { View, StyleSheet } from "react-native"
import HeaderHome from "../components/Home/Header"
import IntroImage from "../components/Home/IntroImage"
import SignHome from "../components/Home/SignHome"

const Home = () => {
    return (
        <View style={styles.homeContainer}>
            <HeaderHome />
            <IntroImage />
            <SignHome />
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: "#0F57FB"
    }
})

export default Home