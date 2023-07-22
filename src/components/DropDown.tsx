// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import SelectDropdown from 'react-native-select-dropdown';
// const DropDown = () => {
//   const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
//   return (
//     <View>
//       <Text>DropDown</Text>
//       <SelectDropdown
//         data={countries}
//         onSelect={(selectedItem, index) => {
//           console.log(selectedItem, index);
//         }}
//         buttonTextAfterSelection={(selectedItem, index) => {
//           // text represented after item is selected
//           // if data array is an array of objects then return selectedItem.property to render after item is selected
//           return selectedItem;
//         }}
//         rowTextForSelection={(item, index) => {
//           // text represented for each item in dropdown
//           // if data array is an array of objects then return item.property to represent item in dropdown
//           return item;
//         }}
//       />
//     </View>
//   );
// };

// export default DropDown;

// const styles = StyleSheet.create({});
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {useState} from 'react';
import {grey, white} from '../utils/color';

const data = [
  {label: 'Reguler', value: '1'},
  {label: 'Medium', value: '2'},
  {label: 'Premium', value: '3'},
  //   {label: 'Nanggroe Aceh Darussalam', value: '1'},
  //   {label: 'Sumatra utara', value: '2'},
  //   {label: 'Sumatra Selatan', value: '3'},
  //   {label: 'Sumatra Barat', value: '4'},
  //   {label: 'Bengkulu', value: '5'},
  //   {label: 'Riau', value: '6'},
  //   {label: 'Kepulauan Riau', value: '7'},
  //   {label: 'Jambi', value: '8'},
  //   {label: 'Lampung', value: '9'},
  //   {label: 'Bangka Belitung ', value: '10'},
  //   {label: 'Kalimantan Timur', value: '11'},
  //   {label: 'Kalimantan Selatan', value: '12'},
  //   {label: 'Kalimantan Barat', value: '13'},
  //   {label: 'Kalimantan Tengah', value: '14'},
  //   {label: 'Kalimantan Utara', value: '15'},
  //   {label: 'Banten', value: '16'},
  //   {label: 'DKI Jakarta', value: '17'},
  //   {label: 'Jawa Barat', value: '18'},
  //   {label: 'Jawa Tengah', value: '19'},
  //   {label: 'Daerah Istimewah yogyakarta', value: '20'},
  //   {label: 'Jawa timur', value: '21'},
  //   {label: 'Bali', value: '22'},
  //   {label: 'Nuasa Tenggara Timur', value: '23'},
  //   {label: 'Nuasa Tenggara Barat', value: '24'},
  //   {label: 'Gorontalo', value: '25'},
  //   {label: 'Sulawesi Barat', value: '26'},
  //   {label: 'Sulawesi Tengah', value: '27'},
  //   {label: 'Sulawesi Utara', value: '28'},
  //   {label: 'Sulawesi Tenggara', value: '29'},
  //   {label: 'Sulawesi Selatan', value: '30'},
  //   {label: 'Maluku Utara', value: '31'},
  //   {label: 'Maluku ', value: '32'},
  //   {label: 'Papua Barat', value: '33'},
  //   {label: 'Papua ', value: '34'},
  //   {label: 'Papua Tengah', value: '35'},
  //   {label: 'Papua Pegunungan', value: '36'},
  //   {label: 'Papua Selatan', value: '37'},
  //   {label: 'Papua Barat Daya', value: '38'},
];

const Dropdowncomponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  //   const renderLabel = () => {
  //     if (value || isFocus) {
  //       return (
  //         <Text style={[styles.label, isFocus && {color: '#000'}]}>
  //           Pilih paket
  //         </Text>
  //       );
  //     }
  //     return null;
  //   };
  return (
    <View
    // style={styles.container}
    >
      {/* {renderLabel()} */}
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'gray'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Pilih paket' : ''}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default Dropdowncomponent;

const styles = StyleSheet.create({
  //   container: {
  //     backgroundColor: 'grey',
  //     padding: 10,
  //     height: 63,
  //     borderRadius: 5,
  //   },
  dropdown: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    // backgroundColor: '#262626',
    backgroundColor: white,
  },
  label: {
    paddingVertical: 20,
    position: 'absolute',
    left: 10,
    top: 20,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 14,
    color: '#000',
    left: 10,
  },
  selectedTextStyle: {
    fontSize: 14,
    color: '#000',
    left: 7,
  },
});
