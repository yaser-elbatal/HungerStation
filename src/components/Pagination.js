import React from "react";
import PropTypes from "prop-types";
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  paginationContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    top: -5,
    backgroundColor: "#F6F6F6",
    width: "100%",
    height: 50,
  },
  pagination: {
    top: 20,
    width: width * 0.03,
    height: width * 0.03,
    borderRadius: 10,
    marginHorizontal: width * 0.025,
  },
});

const Pagination = ({
  size,
  paginationIndex,
  scrollToIndex,
  paginationDefaultColor,
  paginationActiveColor,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.paginationContainer}>
      {Array.from({ length: size }).map((_, index) => (
        <TouchableOpacity
          style={[
            styles.pagination,
            paginationIndex === index
              ? { backgroundColor: paginationActiveColor }
              : { backgroundColor: paginationDefaultColor },
          ]}
          key={index}
          onPress={() => scrollToIndex({ index })}
        />
      ))}
    </View>
  );
};

Pagination.propTypes = {
  scrollToIndex: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  paginationIndex: PropTypes.number,
  paginationActiveColor: PropTypes.string,
  paginationDefaultColor: PropTypes.string,
};

Pagination.defaultProps = {
  data: [],
  paginationIndex: 0,
  paginationActiveColor: "black",
  paginationDefaultColor: "#B9B9B9",
};

export default Pagination;
