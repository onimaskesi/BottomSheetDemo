*[English](README.md), [Turkish](README.tr.md)*

# BottomSheet

---

 	BottomSheet hides and shows its children with slide animation. BottomSheet is on the bottom of the screen.

​    => If the content of BottomSheet children exceeds 90% of the current screen height, the height of BottomSheet remains fixed at 90% and its content is wrapped in the ScrollView.

## Senarios of Close The Component

​    The closing event of the component is performed by setting the show boolean property to false owing to the setIsShowing state function. The closing animation is in the form of sliding down.

* After the BottomSheet is opened, the background becomes transparent gray owing to the component called Transparent. If this part is pressed, BottomSheet will be closed. 
* If the BottomSheet is scrolled down, BottomSheet will be closed. (It closes if the total height is pulled down by at least 1/4, otherwise, the component will slide upwards and return to its original height) 
  * While scrolling, the component must be pressed and pulled down. Both situations (closing or returning to original height) occurs when the user release the component.
* If show property set false owing to setIsShowing function then BottomSheet will be closed.

## Properties

* **show:**  Trigger the animation of hiding or showing (it should be as a state value) *[boolean]*
* **setIsShowing:** The state function that can change the value of show property (state value) *[function]*
* **children:** Value of between BottomSheet tags (ui elements, components) *[object]*
* **topBarStyle:** It can be used to change the style of the topBar component at the top of the BottomSheet children. *[object]*
* **height:** Define BottomSheet height. *[number]*
  * If this property is not use, BottomSheet will calculate the children hight automatically. And it will set this height plus topBar height as a BottomSheet height.
  * If the component(s) given as BottomSheet children contains Text component and the height of the Text component is not specified, the Text component pushes the other ui elements (components) and goes out of the area allocated to it. In this case, an accurate height calculation cannot be made. In order to avoid such a situation, the height value must be defined in the Text component beforehand. However, in a scenario where the string of the Text component is unpredictable like in a structure that changes according to the situation, the height should also change for every situation. As a solution to this proplem, the component named **TextWithHeight** has been developed. 

# TextWithHeight

---

​    TextWithHeight component is a modified Text component. Calculates the height of the textual expression entered (include fontSize, margin, padding...) after that sets this height value to height of the style in Text component and returns Text component that has calculated height.

## Properties

* **children:** The value entered between the tags of the component *[string]*
* **style:** style of the Text *[object]*
* **height:** Height value (must be given as state value for auto height) *[number]*
* **setHeight:**  Function to set the height value (it should be given as state value for automatic height) *[function]*

# Usage Scenario

---

 * The package should be installed by entering the `npm i @onymaske/bottomsheet` command to the Terminal in the root directory of the React Native project,

 *  `cd ios && pod install && cd ..`  command should run for install the changes on the ios side,

 * [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/docs/)  package should be installed

   ### BottomSheet & TextWithHeight Usage Example

   ``` react native
   import React, {useState} from 'react';
   import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
   import {BottomSheet, TextWithHeight} from '@onimaskesi/bottomsheet';
   
   const App = () => {
     const [show, setShow] = useState(false);
     const [textHeight, setTextHeight] = useState();
   
     const openBottomSheet = () => {
       setShow(true);
     };
   
     const CustomButton = ({title, onPress}) => (
       <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
         <Text style={styles.buttonTitle}>{title}</Text>
       </TouchableOpacity>
     );
   
     return (
       <>
         <View style={styles.container}>
           <Text style={styles.welcomeText}>Hello From BottomSheet Example</Text>
           <CustomButton title="Open The Bottom Sheet" onPress={openBottomSheet} />
         </View>
         <BottomSheet
           show={show}
           setIsShowing={setShow}
           topBarStyle={styles.topBar}>
           <View style={styles.bottomSheetChildrenContainer}>
             <CustomButton title="Button Top" />
             <TextWithHeight
               height={textHeight}
               setHeight={setTextHeight}
               style={styles.bottomSheetChildrenText}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua.
             </TextWithHeight>
             <CustomButton title="Button Bottom" />
           </View>
         </BottomSheet>
       </>
     );
   };
   
   export default App;
   
   const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: 'skyblue',
       paddingTop: 70,
     },
     welcomeText: {
       color: 'white',
       fontSize: 20,
       fontWeight: 'bold',
       alignSelf: 'center',
       margin: 10,
     },
     buttonContainer: {
       height: 100,
       justifyContent: 'center',
       margin: 30,
       padding: 20,
       borderRadius: 10,
       backgroundColor: 'white',
     },
     buttonTitle: {
       alignSelf: 'center',
       color: 'skyblue',
       fontSize: 20,
       fontWeight: 'bold',
     },
     topBar: {
       backgroundColor: 'orange',
       borderWidth: 2,
       borderColor: 'white',
     },
     bottomSheetChildrenContainer: {
       flex: 1,
       backgroundColor: 'orange',
     },
     bottomSheetChildrenText: {
       fontSize: 20,
       marginHorizontal: 30,
       color: 'white',
       fontWeight: 'bold',
     },
   });
   ```
