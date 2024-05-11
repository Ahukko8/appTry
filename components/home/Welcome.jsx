import { View, Text } from 'react-native'
import styles from './welcome.style'

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
      <Text style={styles.welcomeTxt}>السلام عليكم</Text>
    </View>
    
    </View>
  )
}

export default Welcome