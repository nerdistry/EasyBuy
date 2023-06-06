import React, { useState } from "react";
import { SceneMap, TabView, TabBar } from "react-native-tab-view";
import { StyleSheet, useWindowDimensions } from "react-native";
import Profile from "./Profile";
import Orders from "./Orders";
import Colors from "../../color";
import { Text } from "native-base";

const renderScene = SceneMap({
  first: Profile,
  second: Orders,
});

export default function Tabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "first",
      title: "PROFILE",
    },
    {
      key: "second",
      title: "ORDERS",
    },
  ]);

  const renderTabsBar = (props) => (
    <TabBar
      {...props}
      tabStyle={styles.tabStyle}
      indicatorStyle={{ backgroundColor: "black"}}
      activeColor="#fff"
      inactiveColor="#ADADAD"
      renderLabel={({ route, color }) => (
        <Text style={{ color, ...styles.text }}>{route.title}</Text>
      )}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabsBar}
    />
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: Colors.submain,
  },
  text: {
    fontSize: 15,
    fontWeight: "900",
  },
});
