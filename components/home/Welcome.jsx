import { View, Text } from 'react-native'
import styles from './welcome.style'

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
      <Text style={styles.introTxt}>
        ދިރިއުޅުން އެޕް! މިއީ އިސްލާމީ ދިތިއުޅުމަކަށް އަހުލުވެރި ކުރުވުމެގެ މަގްސަދުގައި އުފައްދާފައިވާ އެޕެކެވެ. މި އެޕްގެ ޒަރިއްޔާއިން ކުދިބޮޑު އެންމެނަށް ފަައިދާކުރާނެއެވެ.
      </Text>
    </View>
    </View>
  )
}

export default Welcome