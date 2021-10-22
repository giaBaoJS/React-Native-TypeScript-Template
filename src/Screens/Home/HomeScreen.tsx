import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../Hooks/Hooks';
import { fetchUsers } from '../../Redux/UserSlice';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Layout from '../../Themes/Layout';
import { UserData } from '../../Types/ResponseTypes';

const HomeScreen: React.FC = () => {
  const { users, loading } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  console.log(users);
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        users?.data.map((user: UserData) => (
          <Text key={user.id}>{user.first_name}</Text>
        ))
      )}
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
