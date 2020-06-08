import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import { Container, Content, DatePicker } from "native-base";
import styles from "../../assets/styles";
import i18n from "../../locale/i18n";
import SwiperFlatList from "react-native-swiper-flatlist";
import Pagination from "./Pagination";
import DateTimePickerModal from "react-native-modal-datetime-picker";

function UpdateData({ navigation }) {
  const [select, setSelected] = useState(1);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [Birthdate, SetBirthDateDate] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const getDate = (isoDate) => {
    let date = new Date(isoDate).toLocaleString();
    date = date
      .split(",")[0]
      .split("/")
      .map((dat) => (dat < 10 && "0" + dat) || dat);
    date = date[0];

    return date;
  };
  const handleConfirm = (date) => {
    let UpdatedDate = getDate(date);
    hideDatePicker();

    SetBirthDateDate(UpdatedDate);
  };

  const SelectType = (selectedType) => {
    setSelected(selectedType);
  };

  return (
    <Container style={{ backgroundColor: "#CCCCCC" }}>
      <Content
        contentContainerStyle={
          ([styles.bgFullWidth, styles.paddingTop_50],
          { backgroundColor: "#CCCCCC" })
        }
      >
        <View style={[styles.bgFullWidth, styles.Width_100]}>
          <View
            style={
              ([styles.directionRowCenter, styles.Width_100],
              { marginVertical: 50 })
            }
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[styles.directionRow, { position: "absolute", left: 20 }]}
            >
              <Image
                source={require("../../assets/images/yellow_back.png")}
                style={[styles.icon20, styles.transform, { marginRight: 5 }]}
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
              {i18n.t("updateData")}
            </Text>
          </View>

          <View style={stylest.container}>
            <SwiperFlatList
              showPagination
              PaginationComponent={Pagination}
              nextButton={
                <Text style={[styles.textBold, { color: "black" }]}>next</Text>
              }
            >
              <View style={[stylest.child, { backgroundColor: "white" }]}>
                <Text
                  style={[
                    styles.textBold,
                    styles.text_black,
                    styles.textSize_18,
                    {
                      textAlign: "center",
                      marginBottom: 50,
                    },

                    ,
                  ]}
                >
                  وش تسوي بيومك؟
                </Text>

                <View style={{ flexDirection: "column" }}>
                  <TouchableOpacity onPress={() => setSelected(1)}>
                    <Text
                      style={[
                        styles.textBold,
                        select === 1
                          ? styles.text_black
                          : styles.text_light_gray,
                        styles.textCenter,

                        styles.textSize_16,
                      ]}
                    >
                      موظف
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={[
                      styles.marginVertical_10,
                      styles.flexCenter,
                      { borderWidth: 0.5, borderColor: "#ddd", width },
                    ]}
                  />

                  <TouchableOpacity onPress={() => setSelected(2)}>
                    <Text
                      style={[
                        styles.textBold,
                        select === 2
                          ? styles.text_black
                          : styles.text_light_gray,
                        styles.textCenter,

                        styles.textSize_16,
                      ]}
                    >
                      غير موظف
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={[
                      styles.marginVertical_10,
                      styles.flexCenter,
                      { borderWidth: 0.5, borderColor: "#ddd", width },
                    ]}
                  />

                  <TouchableOpacity onPress={() => setSelected(3)}>
                    <Text
                      style={[
                        styles.textBold,
                        select === 3
                          ? styles.text_black
                          : styles.text_light_gray,
                        styles.textCenter,

                        styles.textSize_16,
                      ]}
                    >
                      طالب
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[stylest.child, { backgroundColor: "white" }]}>
                <TouchableOpacity
                  onPress={showDatePicker}
                  style={[styles.directionColumn]}
                >
                  <Text
                    style={[
                      styles.textBold,
                      styles.text_black,
                      styles.textSize_14,
                      styles.textCenter,
                    ]}
                  >
                    تاريخ الميلاد
                  </Text>
                  <Text
                    style={[
                      styles.textBold,
                      styles.text_light_gray,
                      styles.textSize_14,
                      styles.textCenter,
                    ]}
                  >
                    {Birthdate}
                  </Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </View>
              <View style={[stylest.child, { backgroundColor: "white" }]}>
                <Text
                  style={[
                    styles.textBold,
                    styles.text_black,
                    styles.textSize_18,
                    {
                      textAlign: "center",
                      marginBottom: 50,
                    },

                    ,
                  ]}
                >
                  وش نسميك
                </Text>

                <View style={{ flexDirection: "column" }}>
                  <TouchableOpacity onPress={() => setSelected(1)}>
                    <Text
                      style={[
                        styles.textBold,
                        select === 1
                          ? styles.text_black
                          : styles.text_light_gray,
                        styles.textCenter,

                        styles.textSize_16,
                      ]}
                    >
                      طويل العمر
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={[
                      styles.marginVertical_10,
                      styles.flexCenter,
                      { borderWidth: 0.5, borderColor: "#ddd", width },
                    ]}
                  />

                  <TouchableOpacity onPress={() => setSelected(2)}>
                    <Text
                      style={[
                        styles.textBold,
                        select === 2
                          ? styles.text_black
                          : styles.text_light_gray,
                        styles.textCenter,

                        styles.textSize_16,
                      ]}
                    >
                      طويله العمر
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[stylest.child, { backgroundColor: "white" }]}>
                <Text
                  style={[
                    styles.textBold,
                    styles.text_black,
                    styles.textSize_18,
                    {
                      textAlign: "center",
                      marginBottom: 50,
                    },

                    ,
                  ]}
                >
                  كيف عرفت التطبيق{" "}
                </Text>

                <View style={{ flexDirection: "column" }}>
                  <TouchableOpacity onPress={() => setSelected(1)}>
                    <Text
                      style={[
                        styles.textBold,
                        select === 1
                          ? styles.text_black
                          : styles.text_light_gray,
                        styles.textCenter,

                        styles.textSize_16,
                      ]}
                    >
                      لااذكر
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={[
                      styles.marginVertical_10,
                      styles.flexCenter,
                      { borderWidth: 0.5, borderColor: "#ddd", width },
                    ]}
                  />

                  <TouchableOpacity onPress={() => setSelected(2)}>
                    <Text
                      style={[
                        styles.textBold,
                        select === 2
                          ? styles.text_black
                          : styles.text_light_gray,
                        styles.textCenter,

                        styles.textSize_16,
                      ]}
                    >
                      اعلانات الانترنت والفيديو{" "}
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={[
                      styles.marginVertical_10,
                      styles.flexCenter,
                      { borderWidth: 0.5, borderColor: "#ddd", width },
                    ]}
                  />

                  <TouchableOpacity onPress={() => setSelected(3)}>
                    <Text
                      style={[
                        styles.textBold,
                        select === 3
                          ? styles.text_black
                          : styles.text_light_gray,
                        styles.textCenter,

                        styles.textSize_16,
                      ]}
                    >
                      برامج التواصل الاجتماعي والمؤثرين
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </SwiperFlatList>
          </View>
        </View>
      </Content>
    </Container>
  );
}
export const { width, height } = Dimensions.get("window");

const stylest = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginVertical: 50,
    width,
  },
  containert: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  child: {
    height: height * 0.5,
    width,
    justifyContent: "center",
  },
  text: {
    fontSize: width * 0.2,
    textAlign: "center",
  },
});
export default UpdateData;
