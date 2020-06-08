import React, { useState } from "react";
import { View, Image, TouchableOpacity, Switch } from "react-native";
import styles from "../../assets/styles";
import i18n from "../../locale/i18n";
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

function Setings({ navigation }) {
  const [switchValue, setswitchValue] = useState(false);

  const toggleSwitch = (value) => {
    setswitchValue(value);
  };

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
              {i18n.t("settings")}
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
                  اللغه
                </Text>
              </Body>
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
                  اشعارات العروض
                </Text>
              </Body>
              <Right>
                <Switch
                  trackColor={{ false: "#767577", true: "#f5dd4b" }}
                  thumbColor={switchValue ? "#f5dd4b" : "#f4f3f4"}
                  onValueChange={toggleSwitch}
                  value={switchValue}
                />
              </Right>
            </ListItem>
          </List>
        </View>
      </Content>
    </Container>
  );
}

export default Setings;
