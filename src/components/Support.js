import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { Container, Content, Card } from "native-base";
import styles from "../../assets/styles";
import i18n from "../../locale/i18n";

function Support({ navigation }) {
  return (
    <Container>
      <Content
        contentContainerStyle={[styles.bgFullWidth, styles.paddingTop_50]}
      >
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
            {i18n.t("support")}
          </Text>
        </View>

        <View
          style={[
            styles.paddingHorizontal_20,
            styles.bgFullWidth,
            styles.Width_100,
          ]}
        >
          <TouchableOpacity
            onPress={() => navigation.push("Remember")}
            style={[styles.directionRowSpace, styles.Width_100]}
          >
            <View style={[styles.directionRow]}>
              <Image
                source={require("../../assets/images/bills.png")}
                style={[styles.icon20, { marginRight: 10 }]}
                resizeMode={"contain"}
              />
              <Text
                style={[
                  styles.textRegular,
                  styles.textSize_16,
                  styles.text_black,
                ]}
              >
                {i18n.t("Remember")}
              </Text>
            </View>
            <Image
              source={require("../../assets/images/left.png")}
              style={[styles.icon20]}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
          <View
            style={[
              styles.marginVertical_20,
              styles.flexCenter,
              { borderWidth: 1, borderColor: "#ddd", width: "95%" },
            ]}
          />

          <TouchableOpacity
            onPress={() => navigation.push("GeneralQuestion")}
            style={[styles.directionRowSpace, styles.Width_100]}
          >
            <View style={[styles.directionRow]}>
              <Text
                style={[
                  styles.textRegular,
                  styles.textSize_16,
                  styles.text_black,
                ]}
              >
                {i18n.t("Generalquestions")}
              </Text>
            </View>
            <Image
              source={require("../../assets/images/left.png")}
              style={[styles.icon20]}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
          <View
            style={[
              styles.marginVertical_20,
              styles.flexCenter,
              { borderWidth: 1, borderColor: "#ddd", width: "95%" },
            ]}
          />

          <TouchableOpacity
            onPress={() => navigation.push("OrderQuestion")}
            style={[styles.directionRowSpace, styles.Width_100]}
          >
            <View style={[styles.directionRow]}>
              <Text
                style={[
                  styles.textRegular,
                  styles.textSize_16,
                  styles.text_black,
                ]}
              >
                {i18n.t("Applicationquestions")}
              </Text>
            </View>
            <Image
              source={require("../../assets/images/left.png")}
              style={[styles.icon20]}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
          <View
            style={[
              styles.marginVertical_20,
              styles.flexCenter,
              { borderWidth: 1, borderColor: "#ddd", width: "95%" },
            ]}
          />

          <TouchableOpacity
            style={[styles.directionRowSpace, styles.Width_100]}
            onPress={() => navigation.push("TechniqalQuestions")}
          >
            <View style={[styles.directionRow]}>
              <Text
                style={[
                  styles.textRegular,
                  styles.textSize_16,
                  styles.text_black,
                ]}
              >
                {i18n.t("Technicalquestions")}
              </Text>
            </View>
            <Image
              source={require("../../assets/images/left.png")}
              style={[styles.icon20]}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
          <View
            style={[
              styles.marginVertical_20,
              styles.flexCenter,
              { borderWidth: 1, borderColor: "#ddd", width: "95%" },
            ]}
          />

          <TouchableOpacity
            style={[styles.directionRowSpace, styles.Width_100]}
          >
            <View style={[styles.directionRow]}>
              <Text
                style={[
                  styles.textRegular,
                  styles.textSize_16,
                  styles.text_black,
                ]}
              >
                {i18n.t("aboutApp")}
              </Text>
            </View>
            <Image
              source={require("../../assets/images/left.png")}
              style={[styles.icon20]}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
          <View
            style={[
              styles.marginVertical_20,
              styles.flexCenter,
              { borderWidth: 1, borderColor: "#ddd", width: "95%" },
            ]}
          />

          <TouchableOpacity
            style={[styles.directionRowSpace, styles.Width_100]}
          >
            <View style={[styles.directionRow]}>
              <Text
                style={[
                  styles.textRegular,
                  styles.textSize_16,
                  styles.text_black,
                ]}
              >
                {i18n.t("Termsofservice")}
              </Text>
            </View>
            <Image
              source={require("../../assets/images/left.png")}
              style={[styles.icon20]}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
          <View
            style={[
              styles.marginVertical_20,
              styles.flexCenter,
              { borderWidth: 1, borderColor: "#ddd", width: "95%" },
            ]}
          />

          <TouchableOpacity
            style={[styles.directionRowSpace, styles.Width_100]}
          >
            <View style={[styles.directionRow]}>
              <Text
                style={[
                  styles.textRegular,
                  styles.textSize_16,
                  styles.text_black,
                ]}
              >
                {i18n.t("contactUs")}
              </Text>
            </View>
            <Image
              source={require("../../assets/images/left.png")}
              style={[styles.icon20]}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
          <View
            style={[
              styles.marginVertical_20,
              styles.flexCenter,
              { borderWidth: 1, borderColor: "#ddd", width: "95%" },
            ]}
          />
        </View>
      </Content>
    </Container>
  );
}

export default Support;
