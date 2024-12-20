import { Text, StyleSheet, SafeAreaView } from 'react-native';
import { BentoGrid, GridItem } from 'react-native-bento-box'; // Replace with your package import.

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BentoGrid columns={4} gap={5} width={0.9} style={styles.grid}>
        <GridItem widthSpan={4} heightSpan={1}>
          <Text style={styles.text}>ITEM 4 X 1</Text>
        </GridItem>
        <GridItem widthSpan={1} heightSpan={2}>
          <Text style={styles.text}>ITEM 1 X 2</Text>
        </GridItem>
        <GridItem widthSpan={2} heightSpan={1}>
          <Text style={styles.text}>ITEM 2 X 1</Text>
        </GridItem>
        <GridItem widthSpan={1} heightSpan={1}>
          <Text style={styles.text}>ITEM 1 X 1</Text>
        </GridItem>
        <GridItem widthSpan={2} heightSpan={1}>
          <Text style={styles.text}>ITEM 2 X 1</Text>
        </GridItem>
        <GridItem widthSpan={1} heightSpan={1}>
          <Text style={styles.text}>ITEM 1 X 1</Text>
        </GridItem>

        <GridItem widthSpan={3} heightSpan={4}>
          <Text style={styles.text}>ITEM 3 X 4</Text>
        </GridItem>
        <GridItem widthSpan={1} heightSpan={4}>
          <Text style={styles.text}>ITEM 1 X 4</Text>
        </GridItem>
      </BentoGrid>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#f5f5f5',
  },
  grid: {
    padding: 10,
    backgroundColor: '#e0e0e0',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    padding: 10,
  },
});

export default App;
