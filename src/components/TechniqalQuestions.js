import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Container, Content } from "native-base";
import styles from "../../assets/styles";
import i18n from "../../locale/i18n";

function TechniqalQuestions({ navigation }) {
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
                styles.textBold,
                styles.text_black,
                styles.textSize_18,
                { textAlign: "center" },
              ]}
            >
              {i18n.t("TechnicalQuestion")}
            </Text>
          </View>

          <View
            style={[
              styles.paddingHorizontal_20,
              styles.bgFullWidth,
              styles.Width_100,
              styles.marginTop_15,
            ]}
          >
            <View style={[styles.marginBottom_10]}>
              <Text
                style={[
                  styles.textBold,
                  styles.text_black,
                  styles.textSize_15,
                  { lineHeight: 22 },
                ]}
              >
                الموقع لا يعمل علي جهازي الشخصي ماهي الاسباب
              </Text>
              <Text
                style={[
                  styles.textRegular,
                  styles.text_gray,
                  styles.textSize_15,
                  { lineHeight: 24 },
                ]}
              >
                هذا النص هو مثال لنص يمكن ان يستبدل في نفس المساحه هذا النص هو
                مثال هذا النص هو مثال يمكن ان يستبدل في نفس المساحه
              </Text>
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
}

export default TechniqalQuestions;
