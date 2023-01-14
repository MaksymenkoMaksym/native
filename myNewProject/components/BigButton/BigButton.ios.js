import {
  Button, // work as submit button
  StyleSheet, // create object with styles & can be outside of file APP.js
  View, // same as <div></div> in htmlVG
  TouchableOpacity,
  TextInput, // same as <input></input> in html
  Text, // same as <p></p> in html
} from 'react-native'

export const BigButton = ({ title, style, onPress }) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.text} onPress={onPress}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#FF6C00',
    overflow: 'hidden',
    borderRadius: 100,

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#FF6C00',
  },
  text: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
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
