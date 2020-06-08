import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Container, Content } from "native-base";
import styles from "../../assets/styles";
import i18n from "../../locale/i18n";
import moment from "moment";
import { Table, Row, Rows } from "react-native-table-component";

function Pocket({ navigation }) {
  const [tableHead, SetTableHead] = useState([
    "تاريخ الاضافه",
    "تاريخ الانتهاء",
    "القيمه",
  ]);
  const [tableData, setTableData] = useState([
    [moment().format("l"), moment().format("l"), "20ريال"],
    [moment().format("l"), moment().format("l"), "20ريال"],
    [moment().format("l"), moment().format("l"), "20ريال"],
    [moment().format("l"), moment().format("l"), "20ريال"],
    [moment().format("l"), moment().format("l"), "20ريال"],
    [moment().format("l"), moment().format("l"), "20ريال"],
    [moment().format("l"), moment().format("l"), "20ريال"],
    [moment().format("l"), moment().format("l"), "20ريال"],
    [moment().format("l"), moment().format("l"), "20ريال"],
    [moment().format("l"), moment().format("l"), "20ريال"],
    [moment().format("l"), moment().format("l"), "20ريال"],
  ]);
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
            <View style={{ flexDirection: "column" }}>
              <Text
                style={[
                  styles.textRegular,
                  styles.text_black,
                  styles.textSize_18,
                  { textAlign: "center" },
                ]}
              >
                {i18n.t("Pocket")}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={[
                styles.textRegular,
                styles.text_black,
                styles.textSize_18,
                { textAlign: "center" },
              ]}
            >
              رصيدك في المحفظه
            </Text>
            <Text
              style={[
                styles.textRegular,
                styles.text_black,
                styles.textSize_18,
                { textAlign: "center", marginTop: 10 },
              ]}
            >
              100 ريال
            </Text>
          </View>
        </View>
        <View style={styles.containerTabl}>
          <Table borderStyle={{ borderWidth: 2, borderColor: "#ECECEC" }}>
            <Row
              data={tableHead}
              style={styles.head}
              textStyle={[
                styles.textRegular,
                styles.text_black,
                styles.textSize_18,
                { textAlign: "center", margin: 6 },
              ]}
            />

            <Rows
              data={tableData}
              textStyle={[
                styles.textRegular,
                styles.text_black,
                styles.textSize_18,
                { textAlign: "center", margin: 6 },
              ]}
            />
          </Table>
        </View>
      </Content>
    </Container>
  );
}

export default Pocket;
