import React, { useState } from "react";
import { View, Image, TouchableOpacity, Dimensions } from "react-native";
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Body,
  Left,
  Right,
} from "native-base";
import styles from "../../assets/styles";
import i18n from "../../locale/i18n";
import moment from "moment";

function Bill({ navigation }) {
  const width = Dimensions.get("window").width;

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
              {i18n.t("bill")}
            </Text>
          </View>

          <List>
            <ListItem thumbnail>
              <Body>
                <Text
                  style={[
                    styles.textRegular,
                    styles.textSize_16,
                    styles.text_black,
                  ]}
                >
                  الطازج
                </Text>

                <Left style={{ right: width * 0.27 }}>
                  <Text
                    note
                    numberOfLines={1}
                    style={[
                      styles.textRegular,
                      styles.textSize_11,
                      styles.text_black,
                      { marginTop: 10 },
                    ]}
                  >
                    #635214789555
                  </Text>
                </Left>
              </Body>
              <Right>
                <Text
                  style={[
                    styles.textRegular,
                    styles.textSize_11,
                    styles.text_black,
                  ]}
                >
                  {moment().format("l")}
                </Text>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Body>
                <Text
                  style={[
                    styles.textRegular,
                    styles.textSize_16,
                    styles.text_black,
                  ]}
                >
                  الطازج
                </Text>

                <Left style={{ right: width * 0.27 }}>
                  <Text
                    note
                    numberOfLines={1}
                    style={[
                      styles.textRegular,
                      styles.textSize_11,
                      styles.text_black,
                      { marginTop: 10 },
                    ]}
                  >
                    #635214789555
                  </Text>
                </Left>
              </Body>
              <Right>
                <Text
                  style={[
                    styles.textRegular,
                    styles.textSize_11,
                    styles.text_black,
                  ]}
                >
                  {moment().format("l")}
                </Text>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Body>
                <Text
                  style={[
                    styles.textRegular,
                    styles.textSize_16,
                    styles.text_black,
                  ]}
                >
                  الطازج
                </Text>

                <Left style={{ right: width * 0.27 }}>
                  <Text
                    note
                    numberOfLines={1}
                    style={[
                      styles.textRegular,
                      styles.textSize_11,
                      styles.text_black,
                      { marginTop: 10 },
                    ]}
                  >
                    #635214789555
                  </Text>
                </Left>
              </Body>
              <Right>
                <Text
                  style={[
                    styles.textRegular,
                    styles.textSize_11,
                    styles.text_black,
                  ]}
                >
                  {moment().format("l")}
                </Text>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Body>
                <Text
                  style={[
                    styles.textRegular,
                    styles.textSize_16,
                    styles.text_black,
                  ]}
                >
                  الطازج
                </Text>

                <Left style={{ right: width * 0.27 }}>
                  <Text
                    note
                    numberOfLines={1}
                    style={[
                      styles.textRegular,
                      styles.textSize_11,
                      styles.text_black,
                      { marginTop: 10 },
                    ]}
                  >
                    #635214789555
                  </Text>
                </Left>
              </Body>
              <Right>
                <Text
                  style={[
                    styles.textRegular,
                    styles.textSize_11,
                    styles.text_black,
                  ]}
                >
                  {moment().format("l")}
                </Text>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Body>
                <Text
                  style={[
                    styles.textRegular,
                    styles.textSize_16,
                    styles.text_black,
                  ]}
                >
                  الطازج
                </Text>

                <Left style={{ right: width * 0.27 }}>
                  <Text
                    note
                    numberOfLines={1}
                    style={[
                      styles.textRegular,
                      styles.textSize_11,
                      styles.text_black,
                      { marginTop: 10 },
                    ]}
                  >
                    #635214789555
                  </Text>
                </Left>
              </Body>
              <Right>
                <Text
                  style={[
                    styles.textRegular,
                    styles.textSize_11,
                    styles.text_black,
                  ]}
                >
                  {moment().format("l")}
                </Text>
              </Right>
            </ListItem>
          </List>
        </View>
      </Content>
    </Container>
  );
}

export default Bill;
