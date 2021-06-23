import React from 'react';
import {View, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import  * as calActions from "./../actions/cal.action";
const Box2 = props => {

  const calReducer = useSelector(({calReducer})=>calReducer)
  const dispatch = useDispatch()
  
  return (
    <View style={{...props.style, justifyContent: 'center'}}>
      <Text
        onPress={()=>dispatch(calActions.clear(10))}
        style={{color: 'black', fontSize: 30, alignSelf: 'center'}}>
        Box 2 : {calReducer.count}
      </Text>
    </View>
  );
};

export default Box2;
