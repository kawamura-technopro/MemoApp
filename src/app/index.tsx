import { View, StyleSheet } from 'react-native'

import Header from '../components/Header'
import MemoListItem from '../components/MemoLIstItem'
import CircleButton from '../components/CircleButton'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />

      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>

      <CircleButton>＋</CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 親コンポーネントの範囲とする
    backgroundColor: '#ffffff'
  }

})

/*
const styles = StyleSheet.create({
  container: {
    flex: 1, // 親コンポーネントの範囲とする
    justifyContent: 'center', // 縦方向の中央揃え
    alignItems: 'center' // 横方向の中央揃え
  }
})
*/

export default Index
