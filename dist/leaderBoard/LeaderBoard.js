import React from "react";
import { View, Text, FlatList, Platform } from "react-native";
import PropTypes from "prop-types";

// Style
import styleLeaderBoard from "./leaderBoardStyle";
function LeaderBoard(props) {
  function mapUsersList(data) {
    //   console.log("data", data.index);
    return /*#__PURE__*/React.createElement(View, {
      key: "00" + data.index,
      style: styleLeaderBoard.row
    }, /*#__PURE__*/React.createElement(Text, {
      style: styleLeaderBoard.text
    }, "Name:"), /*#__PURE__*/React.createElement(Text, {
      style: styleLeaderBoard.name
    }, data.item.name), /*#__PURE__*/React.createElement(Text, {
      style: styleLeaderBoard.scoreContainer
    }, "Score:"), /*#__PURE__*/React.createElement(Text, {
      style: styleLeaderBoard.score
    }, data.item.score));
  }
  function extractKey(item, index) {
    return "00" + index;
  }
  return /*#__PURE__*/React.createElement(View, {
    style: styleLeaderBoard.container
  }, /*#__PURE__*/React.createElement(View, {
    style: styleLeaderBoard.containerTitle
  }, /*#__PURE__*/React.createElement(Text, {
    style: styleLeaderBoard.title
  }, "Rank")), /*#__PURE__*/React.createElement(View, {
    style: styleLeaderBoard.flatListWrapper
  }, /*#__PURE__*/React.createElement(FlatList, {
    data: props.users.sort(({
      score: a
    }, {
      score: b
    }) => b - a),
    renderItem: mapUsersList,
    keyExtractor: extractKey
  })));
}
LeaderBoard.defaultProps = {
  users: []
};
LeaderBoard.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object)
};
export default LeaderBoard;