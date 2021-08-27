import React, {useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../Hooks/hooks';
import {createSelector, OutputSelector} from '@reduxjs/toolkit';
import {fetchUsers} from '../../Redux/UserSlice';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeScreen: React.FC = () => {
  const {users, loading} = useAppSelector(state => state.users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        users.map(user => <Text key={user.id}>{user?.first_name}</Text>)
      )}
      <FontAwesome name="trash-o" size={20} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
