import React from "react";
import { View, Text, FlatList, Platform } from "react-native";
import PropTypes from "prop-types";

// Style
import styleLeaderBoard from "./leaderBoardStyle";

function LeaderBoard(props) {
  function mapUsersList(data) {
    //   console.log("data", data.index);
    return (
      <View key={"00" + data.index} style={styleLeaderBoard.row}>
        <Text style={styleLeaderBoard.text}>Name:</Text>
        <Text style={styleLeaderBoard.name}>{data.item.name}</Text>
        <Text style={styleLeaderBoard.scoreContainer}>Score:</Text>
        <Text style={styleLeaderBoard.score}>{data.item.score}</Text>
      </View>
    );
  }

  function extractKey(item, index) {
    return "00" + index;
  }
  return (
    <View style={styleLeaderBoard.container}>
      <View style={styleLeaderBoard.containerTitle}>
        <Text style={styleLeaderBoard.title}>Rank</Text>
      </View>

      {/* {Platform.OS !== "web" && (
        <FlatList
          data={props.users.sort(({ score: a }, { score: b }) => b - a)}
          renderItem={mapUsersList}
          keyExtractor={extractKey}
        />
      )}
      {Platform.OS === "web" && (
        <View style={styleLeaderBoard.flatListWrapper}>
          <FlatList
            data={props.users.sort(({ score: a }, { score: b }) => b - a)}
            renderItem={mapUsersList}
            keyExtractor={extractKey}
          />
        </View>
      )} */}
      <View style={styleLeaderBoard.flatListWrapper}>
        <FlatList
          data={props.users.sort(({ score: a }, { score: b }) => b - a)}
          renderItem={mapUsersList}
          keyExtractor={extractKey}
        />
      </View>
    </View>
  );
}

LeaderBoard.defaultProps = {
  users: [],
};

LeaderBoard.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};

export default LeaderBoard;
