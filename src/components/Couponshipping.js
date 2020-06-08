import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { Container, Content } from "native-base";
import styles from "../../assets/styles";
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";

function Couponshipping({ navigation }) {
  const [code, setCode] = useState("0000");

  return (
    <Container>
      <Content
        contentContainerStyle={[styles.bgFullWidth, styles.paddingTop_50]}
      >
        <View style={[styles.bgFullWidth, styles.Width_100]}>
          <View
            style={[
              styles.directionRowCenter,
              styles.Width_100,
              styles.marginBottom_35,
            ]}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[styles.directionRow, { position: "absolute", left: 20 }]}
            >
              <Image
                source={require("../../assets/images/yellow_back.png")}
                style={[styles.icon20, { marginRight: 5 }]}
                resizeMode={"contain"}
              />
            </TouchableOpacity>
            <Text
              style={[
                styles.textRegular,
                styles.text_black,
                styles.textSize_18,
                { textAlign: "center" },
              ]}
            >
              {i18n.t("Couponshipping")}
            </Text>
          </View>

          <KeyboardAvoidingView
            behavior={"padding"}
            style={[styles.keyboardAvoid]}
          >
            <View style={styles.containerTableTextOverInput}>
              <Text
                style={[
                  styles.labelText,
                  styles.textRegular,
                  { color: COLORS.gray, top: -10 },
                ]}
              >
                {i18n.t("Couponcodee")}
              </Text>

              <TextInput
                style={styles.textInput}
                value={code}
                onChangeText={(code) => setCode(code)}
              />
            </View>

            <TouchableOpacity
              onPress={() => {}}
              style={[
                styles.yellowBtn,
                styles.Width_70,
                { marginHorizontal: 50 },
              ]}
            >
              <Text
                style={[
                  styles.textRegular,
                  styles.text_black,
                  styles.textSize_16,
                ]}
              >
                {i18n.t("Shipping")}
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </Content>
    </Container>
  );
}

export default Couponshipping;
