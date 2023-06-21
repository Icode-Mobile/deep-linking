import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as Linking from 'expo-linking';

export default function Home() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text> Home Screen </Text>
      <Button
        title='Produto A'
        onPress={() => {
          navigate('product', {
            id: null,
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
