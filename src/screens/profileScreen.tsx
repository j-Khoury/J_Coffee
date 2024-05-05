// import React from 'react';
// import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// interface ProfileScreenProps {
//   // Define any props you need here
// }

// const ProfileScreen: React.FC<ProfileScreenProps> = (props) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.avatarContainer}>
//         <Image source={require('../assets/app_images/avatar.png')} style={styles.avatar} />
//         <Text style={styles.changeAvatarText}>Change Avatar</Text>
//       </View>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value="Jane Doe"
//         // Add any necessary props or event handlers
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value="jane.doe@example.com"
//         // Add any necessary props or event handlers
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Bio"
//         value="Software engineer and cat lover"
//         // Add any necessary props or event handlers
//       />
//       <TouchableOpacity style={styles.submitButton}>
//         <Text style={styles.submitButtonText}>Submit</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   avatarContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   avatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//   },
//   changeAvatarText: {
//     marginTop: 10,
//     fontSize: 16,
//     color: 'blue',
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//   },
//   submitButton: {
//     backgroundColor: 'blue',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default ProfileScreen;
import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { COLORS } from '../theme/theme';
import { Orange } from '../components/constants';

const ProfileScreen = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.net');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleSave = () => {
    // Handle save logic here
    console.log('Profile saved!');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarContainer}>
    <Image source={require('../assets/app_images/avatar.png')} style={styles.avatar} />
      <Text style={styles.changePhoto}>Change Avatar</Text> 
      <View style={styles.formContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
        <Text style={styles.label}>Phone:</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />
        <Text style={styles.label}>Shipping Address:</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
          placeholder="Enter your address"
        />
        <TextInput
          style={styles.input}
          value={city}
          onChangeText={setCity}
          placeholder="Enter your city"
        />
        <Text style={styles.label}>Country</Text>
        <Picker
          style={styles.input}
          selectedValue={country}
          onValueChange={(value: React.SetStateAction<string>) => setCountry(value)}
        >
          <Picker.Item label="Select Country" value="" />
          <Picker.Item label="United States" value="US" />
          <Picker.Item label="Canada" value="CA" />
          <Picker.Item label="United Kingdom" value="UK" />
          {/* Add more countries as needed */}
        </Picker>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex ,
    paddingTop: 20,
  },
  profilePicture: {
    alignItems: 'center',
    marginVertical: 20,
  },
  changePhoto: {
    fontSize: 16,
    color: Orange,
    paddingTop: 10,
  },
  formContainer: {
    paddingHorizontal: 20,
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 8,
    marginTop: 8,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: Orange,
    paddingVertical: 12,
    borderRadius: 4,
    marginTop: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default ProfileScreen;