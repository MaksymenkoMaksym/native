import {
  Button, // work as submit button
  StyleSheet, // create object with styles & can be outside of file APP.js
  View, // same as <div></div> in htmlVG
  TouchableOpacity,
  TextInput, // same as <input></input> in html
  Text, // same as <p></p> in html
} from 'react-native'

export const BigButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={button.box} onPress={onPress} activeOpacity={0.8}>
      <Text style={button.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const button = StyleSheet.create({
  box: {
    backgroundColor: '#FF6C00',
    overflow: 'hidden',
    borderRadius: 100,
    color: '#FF6C00',
    padding: 16,
    marginBottom: 16,
  },
  text: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#FFFFFF',
  },
})

/*

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;

text-align: center;



color: "#FFFFFF;"

*/
