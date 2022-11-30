import React, { useState } from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';

const SignHome = () => {

    const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false)

    return (
        <View style={{ alignItems: "center" }}>
            <View style={styles.InputPhoneContainer}>
                <Image source={require("../../assets/images/brazil-flag.png")} style={styles.flagImage} resizeMode="contain" />
                <Text style={styles.codeCountryFont}>+55</Text>
                <TextInput placeholder="11 3210 9878" style={styles.textInputPhone} keyboardType="numeric" />
            </View>
            <View style={styles.termsContainer}>
                <View style={[styles.checkBoxAcceptTerms, { backgroundColor: toggleCheckBox ? "#17C964" : "#fff" }]} onTouchStart={() => setToggleCheckBox(!toggleCheckBox)}>
                    <Icon name="check" color="#fff" size={18} />
                </View>
                <Text style={styles.fontAcceptTerms1}>
                    Aceito os <Text style={{ textDecorationLine: "underline" }}>Termos e condições, a Política de privacidade e a transferência de dados pessoais</Text>
                </Text>
            </View>
            <TouchableOpacity style={styles.buttonConfirmStyle}>
                <Text style={styles.fontButtonConfirm}>Começar</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    InputPhoneContainer: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        height: 48,
        width: "80%",
        borderRadius: 5,
        marginTop: 30
    },
    codeCountryFont: {
        color: "black",
        marginLeft: 4,
        fontFamily: "HammerBroInBowserIsBack-Regular"
    },
    fontAcceptTerms1: {
        color: "#fff",
        fontFamily: "HammerBroInBowserIsBack-Regular",
        marginLeft: 10
    },
    flagImage: {
        height: 35,
        width: 35,
        margin: 10
    },
    termsContainer: {
        width: "80%",
        margin: "5%",
        flexDirection: "row"
    },
    textInputPhone: {
        marginLeft: "10%",
        fontFamily: "HammerBroInBowserIsBack-Regular",
        width: "auto"
    },
    buttonConfirmStyle: {
        backgroundColor: "#FFFD38",
        width: "80%",
        height: 40,
        alignItems: "center",
        marginTop: "2%",
        justifyContent: "center",
        borderRadius: 5
    },
    checkBoxAcceptTerms: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        height: 25,
        width: 25,
        borderRadius: 5
    },
    fontButtonConfirm: {
        color: "#225AF4",
        fontWeight: "700",
        fontSize: 15,
        fontFamily: "HammerBroInBowserIsBack-Regular"
    }
})

export default SignHome