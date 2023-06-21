import { View, Text, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';
import { useRoute } from '@react-navigation/native';

export default function Product() {
  const { id } = useRoute().params as { id: string };

  if (id) {
    return (
      <View style={styles.container}>
        <Text> Product Screen </Text>
        <Text> ID Curso = {id} </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text> Product Screen </Text>
      <Text> Sem ID </Text>
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
