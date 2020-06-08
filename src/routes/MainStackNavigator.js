import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Settings } from "react-native";
import COLORS from "../consts/colors";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "../../assets/styles";
import i18n from "../../locale/i18n";

import Login from "../components/Login";
import ActivationCode from "../components/ActivationCode";
import Home from "../components/Home";
import Orders from "../components/Orders";
import Offers from "../components/Offers";
import More from "../components/More";
import GetLocation from "../components/GetLocation";
import LocationProduct from "../components/LocationProducts";
import Category from "../components/Category";
import Product from "../components/Product";
import Basket from "../components/Basket";
import PayMethods from "../components/PayMethods";
import AddNewCard from "../components/AddNewCard";
import ConfirmPayment from "../components/ConfirmPayment";
import PromoCode from "../components/PromoCode";
import PaymentMethods from "../components/PaymentMethods";
import Account from "../components/Account";
import Couponshipping from "../components/Couponshipping";
import Pocket from "../components/Pocket";
import Bill from "../components/Bill";
import Support from "../components/Support";
import Setings from "../components/Settings";
import GeneralQuestion from "../components/GeneralQuestion";
import OrderQuestion from "../components/OrderQuestion";
import TechniqalQuestions from "../components/TechniqalQuestions";
import Remember from "../components/Remember";
import UpdateData from "../components/UpdateData";

const MainStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function TabsScreen() {
  return (
    <Tabs.Navigator
      initialRouteName="home"
      tabBarOptions={{
        activeTintColor: COLORS.black,
        style: styles.footerStyle,
        tabStyle: { alignSelf: "center" },
      }}
    >
      <Tabs.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <View
              style={[
                styles.directionRowCenter,
                focused ? styles.activeTab : styles.unActiveTab,
                styles.Width_100,
              ]}
            >
              <Image
                source={
                  color === COLORS.black
                    ? require("../../assets/images/black_home.png")
                    : require("../../assets/images/gary_home.png")
                }
                style={[styles.icon20]}
                resizeMode={"contain"}
              />
              {focused ? (
                <Text
                  style={[
                    styles.textRegular,
                    styles.textSize_13,
                    { marginLeft: 5, color },
                  ]}
                >
                  {i18n.t("home")}
                </Text>
              ) : null}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        component={Orders}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <View
              style={[
                styles.directionRowCenter,
                focused ? styles.activeTab : styles.unActiveTab,
                styles.Width_100,
              ]}
            >
              <Image
                source={
                  color === COLORS.black
                    ? require("../../assets/images/bills.png")
                    : require("../../assets/images/gray_order.png")
                }
                style={[styles.icon20]}
                resizeMode={"contain"}
              />
              {focused ? (
                <Text
                  style={[
                    styles.textRegular,
                    styles.textSize_13,
                    { marginLeft: 5, color },
                  ]}
                >
                  {i18n.t("myOrders")}
                </Text>
              ) : null}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="offers"
        component={Offers}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <View
              style={[
                styles.directionRowCenter,
                focused ? styles.activeTab : styles.unActiveTab,
                styles.Width_100,
              ]}
            >
              <Image
                source={
                  color === COLORS.black
                    ? require("../../assets/images/black_discount.png")
                    : require("../../assets/images/gray_discounts.png")
                }
                style={[styles.icon20]}
                resizeMode={"contain"}
              />
              {focused ? (
                <Text
                  style={[
                    styles.textRegular,
                    styles.textSize_13,
                    { marginLeft: 5, color },
                  ]}
                >
                  {i18n.t("offers")}
                </Text>
              ) : null}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        component={More}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <View
              style={[
                styles.directionRowCenter,
                focused ? styles.activeTab : styles.unActiveTab,
                styles.Width_100,
              ]}
            >
              <Image
                source={
                  color === COLORS.black
                    ? require("../../assets/images/black_more.png")
                    : require("../../assets/images/gray_more.png")
                }
                style={[styles.icon20]}
                resizeMode={"contain"}
              />
              {focused ? (
                <Text
                  style={[
                    styles.textRegular,
                    styles.textSize_13,
                    { marginLeft: 5, color },
                  ]}
                >
                  {i18n.t("more")}
                </Text>
              ) : null}
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

export function MainStackNavigator() {
  return (
    <MainStack.Navigator mode={"card"} screenOptions={{ headerShown: false }}>
      <MainStack.Screen
        name="tabs"
        options={{ headerShown: false }}
        component={TabsScreen}
      />
      <MainStack.Screen name="login" component={Login} />
      <MainStack.Screen name="activationCode" component={ActivationCode} />
      <MainStack.Screen name="getLocation" component={GetLocation} />
      <MainStack.Screen name="locationProduct" component={LocationProduct} />
      <MainStack.Screen name="category" component={Category} />
      <MainStack.Screen name="product" component={Product} />
      <MainStack.Screen name="basket" component={Basket} />
      <MainStack.Screen name="payMethods" component={PayMethods} />
      <MainStack.Screen name="addNewCard" component={AddNewCard} />
      <MainStack.Screen name="confirmPayment" component={ConfirmPayment} />
      <MainStack.Screen name="promoCode" component={PromoCode} />
      <MainStack.Screen name="paymentMethods" component={PaymentMethods} />
      <MainStack.Screen name="Account" component={Account} />
      <MainStack.Screen name="Couponshipping" component={Couponshipping} />
      <MainStack.Screen name="Pocket" component={Pocket} />
      <MainStack.Screen name="Bill" component={Bill} />
      <MainStack.Screen name="Support" component={Support} />
      <MainStack.Screen name="Settings" component={Setings} />
      <MainStack.Screen name="GeneralQuestion" component={GeneralQuestion} />
      <MainStack.Screen name="OrderQuestion" component={OrderQuestion} />
      <MainStack.Screen name="Remember" component={Remember} />
      <MainStack.Screen name="UpdateData" component={UpdateData} />
      <MainStack.Screen
        name="TechniqalQuestions"
        component={TechniqalQuestions}
      />
    </MainStack.Navigator>
  );
}
