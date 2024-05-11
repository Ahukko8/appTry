import { StyleSheet, Text, View } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants'

const Carousel = () => {
    const images = [
        require('../../assets/images/1.jpg'),
        require('../../assets/images/2.jpg'),
        require('../../assets/images/3.jpg'),
        require('../../assets/images/4.jpg'),
        require('../../assets/images/5.jpg'),
        require('../../assets/images/6.jpg'),
        
      ];

  return (
    <View style={styles.container}>
    <SliderBox
      images={images}
      sliderBoxHeight={200} 
      dotColor={COLORS.primary} 
      inactiveDotColor={COLORS.gray} 
      autoplay 
      circleLoop 
      
    />
  </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
})