import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const Box2 = props => {
  const {username, password} = useSelector(({loginReducer}) => loginReducer);

  return (
    <View style={{...props.style, justifyContent: 'center'}}>
      <Text
        
        style={{color: 'black', fontSize: 30, alignSelf: 'center'}}>
        Box 3 : {username}, {password}
      </Text>
    </View>
  );
};

export default Box2;
