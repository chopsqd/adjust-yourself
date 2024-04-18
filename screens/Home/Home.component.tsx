import React from "react"
import { View, Text, Button } from "react-native"

const HomeScreen = ({navigation}) => {
   return (
      <View>
         <Text>HomeScreen</Text>
         <Button
            title="Go to Jane's profile"
            onPress={() =>
               navigation.navigate('Profile', {name: 'Jane'})
            }
         />
      </View>
   )
}

HomeScreen.propTypes = {
   navigation: PropTypes.object.isRequired,
};

export default HomeScreen
