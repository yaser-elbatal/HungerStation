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

function Account({ navigation }) {
  const [name, setName] = useState("ياسمينا");
  const [phone, setPhone] = useState("+965111232211222");
  const [email, setEmail] = useState("jasmin@gmail.com");

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
              {i18n.t("Account")}
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
                {i18n.t("name")}
              </Text>

              <TextInput
                style={styles.textInput}
                value={name}
                onChangeText={(name) => setName(name)}
              />
            </View>
            <View style={styles.containerTableTextOverInput}>
              <Text
                style={[
                  styles.labelText,
                  styles.textRegular,
                  { color: COLORS.gray, top: -10 },
                ]}
              >
                {i18n.t("phone")}
              </Text>

              <TextInput
                style={styles.textInput}
                value={phone}
                onChangeText={(phone) => setPhone(phone)}
              />
            </View>
            <View style={styles.containerTableTextOverInput}>
              <Text
                style={[
                  styles.labelText,
                  styles.textRegular,
                  { color: COLORS.gray, top: -10 },
                ]}
              >
                {i18n.t("email")}
              </Text>

              <TextInput
                style={styles.textInput}
                value={email}
                onChangeText={(email) => setEmail(email)}
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
                {i18n.t("Update")}
              </Text>
            </TouchableOpacity>
            <Text
              style={[
                styles.textRegular,
                styles.text_black,
                styles.textSize_11,
                { textAlign: "center", marginTop: 20 },
              ]}
            >
              فك ارتباط هذا الجهاز
            </Text>
          </KeyboardAvoidingView>
        </View>
      </Content>
    </Container>
  );
}

export default Account;
