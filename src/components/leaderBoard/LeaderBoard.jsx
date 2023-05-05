import React from "react";
import { View, Text, FlatList } from "react-native";
import PropTypes from "prop-types";

// Style
import styleLeaderBoard from "./leaderBoardStyle";

function LeaderBoard(props) {
  function mapUsersList(data) {
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

      <FlatList
        data={props.users.sort(({ score: a }, { score: b }) => b - a)}
        renderItem={mapUsersList}
        keyExtractor={extractKey}
      />
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
