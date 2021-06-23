import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Box1 from './src/components/Box1';
import Box2 from './src/components/Box2';
import Box3 from './src/components/Box3';
import {useSelector, useDispatch} from 'react-redux';
import * as calActions from './src/actions/cal.action';

const App = () => {
  const calReducer = useSelector(({calReducer}) => calReducer);
  const loginReducer = useSelector(({loginReducer}) => loginReducer);
  const dispatch = useDispatch();

  return (
    <View style={styles.root}>
      <Text style={styles.header}>ReactNative Redux Hook</Text>
      <Text style={{fontSize: 30}}>{calReducer.count}</Text>
      <Text style={{fontSize: 30}}>
        {loginReducer.username}, {loginReducer.password}
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Button title="ADD" onPress={() => dispatch(calActions.add())} />
        <Button title="REM" onPress={() => dispatch(calActions.remove())} />
        <Button title="CLR" onPress={() => dispatch(calActions.clear(0))} />
      </View>

      <Box1 style={{...styles.box, backgroundColor: 'yellow'}} />
      <Box2 style={{...styles.box, backgroundColor: 'red'}} />
      <Box3 style={{...styles.box, backgroundColor: 'green'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, flexDirection: 'column'},
  header: {fontSize: 30},
  box: {flex: 1},
});

export default App;
