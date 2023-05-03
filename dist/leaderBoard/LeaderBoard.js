import React from 'react';
import { View, Text, FlatList } from 'react-native';

// Style
import styleLeaderBoard from './leaderBoardStyle';
const users = [{
  name: "Luigi",
  id: Math.floor(Math.random() * 100000),
  score: 10
}, {
  name: "Fra",
  id: Math.floor(Math.random() * 100000),
  score: 15
}, {
  name: "Paolo",
  id: Math.floor(Math.random() * 100000),
  score: 20
}];
function mapUsersList(data) {
  // console.log("data", data)
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(View, {
    key: data.item.id,
    style: styleLeaderBoard.row
  }, /*#__PURE__*/React.createElement(Text, {
    style: styleLeaderBoard.text
  }, "Name:", /*#__PURE__*/React.createElement(Text, {
    style: styleLeaderBoard.name
  }, data.item.name)), /*#__PURE__*/React.createElement(Text, null, "Score:", /*#__PURE__*/React.createElement(Text, {
    style: styleLeaderBoard.score
  }, data.item.score))));
}
function LeaderBoard() {
  return /*#__PURE__*/React.createElement(View, {
    style: styleLeaderBoard.container
  }, /*#__PURE__*/React.createElement(View, {
    style: styleLeaderBoard.containerTitle
  }, /*#__PURE__*/React.createElement(Text, {
    style: styleLeaderBoard.title
  }, "Rank")), /*#__PURE__*/React.createElement(FlatList, {
    data: users,
    renderItem: mapUsersList,
    keyExtractor: item => item.id
  }));
}
export default LeaderBoard;