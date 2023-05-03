import React from "react";
import { View, Text, FlatList } from "react-native";

// Style
import styleLeaderBoard from "./leaderBoardStyle";

const users = [
  {
    name: "Luigi",
    id: Math.floor(Math.random() * 100000),
    score: 10,
  },
  {
    name: "Fra",
    id: Math.floor(Math.random() * 100000),
    score: 15,
  },
  {
    name: "Paolo",
    id: Math.floor(Math.random() * 100000),
    score: 20,
  },
];

function mapUsersList(data) {
  //   console.log("data", data.index);
  return (
    <View key={"00" + data.index} style={styleLeaderBoard.row}>
      <Text style={styleLeaderBoard.text}>
        Name:
        <Text style={styleLeaderBoard.name}>{data.item.name}</Text>
      </Text>
      <Text>
        Score:
        <Text style={styleLeaderBoard.score}>{data.item.score}</Text>
      </Text>
    </View>
  );
}

function LeaderBoard() {
  return (
    <View style={styleLeaderBoard.container}>
      <View style={styleLeaderBoard.containerTitle}>
        <Text style={styleLeaderBoard.title}>Rank</Text>
      </View>

      <FlatList
        data={users}
        renderItem={mapUsersList}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

export default LeaderBoard;
