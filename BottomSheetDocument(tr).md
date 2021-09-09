# BottomSheet

---

​    BottomSheet componenti, içerisine verilen component(ler)i kayma animasyonu ile ekranın alt kısmında göstermeyi ve aynı şekilde gizlemeyi sağlar.

​    => BottomSheet children içeriğinin o anki ekran yüksekliğinin %90'ını aşması durumunda BottomSheet yüksekliği %90'da sabit kalır ve içeriği ScrollView ile sarmalanır.

## Component Kapatma Senaryoları

​    Componentin kapanma olayı: show boolean propertiy'sinin setIsShowing state fonksiyonu ile false hale getirilmesi ile gerçekleştirilir. Kapanma animasyonu aşağı doğru kayarak kaybolma şeklindedir.

* BottomSheet açıldıktan sonra arka plan Transparent ismindeki bir component ile saydam gri bir hale gelir. Bu kısıma basılması halinde component kapanır.
* BottomSheet'in aşağı doğru kaydırılması halinde component kapanır. (Toplam yüksekliğinin min 1/4 oranında aşağı çekilmesi durumunda kapanır aksi halde component yukarıya doğru kayarak eski haline geri döner)
  * Kaydırma işlemi yapılırken componente basılı tutularak aşağı doğru çekilmesi gerekir, bu senaryodaki her iki durumun da (kapanması veya eski haline dönmesi) tetiklenmesi, kullanıcının componenti bırakmasıyla birlikte gerçekleşir.
* BottomSheet'in setIsShowing state function property'si kullanılarak show state property'sinin değerinin true'dan false değere çekilmesi halinde component kapanır.

## Properties

* **show:**  Componentin gösterilmesi veya gizlenmesi animasyonunu tetikler. (state value olarak atanmalıdır) *[boolean]*
* **setIsShowing:** show değerinin değişimini tetikleyen state fonksiyonudur. (state value) *[function]*
* **children:** Componentin tagleri arasına girilen değer (ui elements, components) *[object]*
* **topBarStyle:** BottomSheet yapısında içeriye girilen children elementlerinin en üstünde yer alan topBar componentinin sitilini değiştirmek için kullanılabilir. *[object]*
* **height:** Bottom Sheet boyunu belirtir. *[number]*
  * Bu değer girilmediği takdirde; BottomSheet Componentinin içerisine children olarak gönderilen componentlerin boyutları hesaplanır, bu sayede BottomSheet otomatik olarak bir boyut kazanır.
  * BottomSheet children olarak verilen componen/ler Text componenti içeriyor ise ve Text componentinin yüksekliği belirtilmemişse, bu component diger ui elementlerini (componentleri) itmektedir ve kendisine ayrılan alanın dışına çıkmaktadır. Bu durumda doğru bir yükseklik hasabı yapılamamaktadır. Böyle bir durumla karşılaşmamak için Text componenti içerisine yükseklik değerinin önceden tanımlanması gerekmektedir. Lakin Text componentinin içerisine girilecek olan metinsel ifadenin değişken bir yapıda olduğu bir senaryoda tanımlanan yükseklik değeri de değişmelidir. Bu duruma çözüm olarak **TextWithHeight** isminde bir component geliştirilmiştir.

# TextWithHeight

---

​    TextWithHeight componenti modifiye edilmiş bir Text componentidir. İçerisine girilen metinsel ifadenin yüksekliğini hesaplar, hesapladığı yükseklik değerini Text componentinin style property'si içerisinde yer alan height değerine set ederek döndürür.

## Properties

* **children:** Componentin tagleri arasına girilen değer (metinsel ifade) *[string]*
* **style:** Componentin style verisi *[object]*
* **height:** Yükseklik değeri (otomatik yükseklik için state value olarak verilmelidir) *[number]*
* **setHeight:**  Yükseklik değerinin set edilmesini sağlayan fonksiyon (otomatik yükseklik için state value olarak verilmelidir) *[function]*

# Kullanım Senaryosu

---

 * React Native projesinin kök dizinindeki Terminale `npm i @onimaskesi/bottomsheet` komutu girilerek paket yüklenir,

 * Ios tarafıda değişikliklerin yüklenmesi için `cd ios && pod install && cd ..` komutu çalıştırılır,

 * [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/docs/)  paketi kurulur 

   ### BottomSheet ve TextWithHeight Kullanım Örneği

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

## 
