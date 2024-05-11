import { StyleSheet, Text, View } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants'

const Carousel = () => {
    const images = [
        require('../../assets/images/1.svg'),
        require('../../assets/images/2.svg'),
        require('../../assets/images/3.svg'),
        require('../../assets/images/4.svg'),

        
      ];

  return (
    <View style={styles.container}>
    <SliderBox
      images={images}
      // sliderBoxHeight={200} 
      dotColor={COLORS.primary} 
      inactiveDotColor={COLORS.gray} 
      autoplay 
      circleLoop 
      ImageComponentStyle = {{borderRadius: 15, width: "80%", marginTop: 15,}}
      resizeMode="center"
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