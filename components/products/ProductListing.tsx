import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Platform, PermissionsAndroid, Linking, Alert } from 'react-native';
import axios from 'axios';
import { launchImageLibrary, ImageLibraryOptions } from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

interface Product {
  id?: number;
  title: string;
  description: string;
  quantity: string;
  price: string;
  location: string;
  availability_date: string;
  unit: string;
  status?: string;
  photos?: string[];
}

const units = ['kg', 'bunch', 'crate', 'dozen', 'litre', 'piece'];

const ProductListing: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    title: '',
    description: '',
    quantity: '',
    price: '',
    location: '',
    availability_date: '',
    unit: units[0],
  });
  const [photo, setPhoto] = useState<any>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleInputChange = (field: keyof Product, value: string) => {
    setProduct({ ...product, [field]: value });
  };

  const openAppSettings = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    } else {
      Linking.openSettings();
    }
  };

  const requestGalleryPermission = async () => {
    // On iOS, permissions are handled by the image picker itself
    if (Platform.OS !== 'android') {
      return true;
    }
    
    try {
      // For Android 13+ (API level 33+), use the new READ_MEDIA_IMAGES permission
      // For older versions, use READ_EXTERNAL_STORAGE
      const androidVersion = Platform.OS === 'android' ? Platform.Version : 0;
      const permission = 
        (typeof androidVersion === 'number' && androidVersion >= 33) || 
        (typeof androidVersion === 'string' && parseInt(androidVersion, 10) >= 33)
          ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES 
          : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
      
      const granted = await PermissionsAndroid.request(permission, {
        title: "Gallery Access Permission",
        message: "Farm Connect needs access to your gallery to upload product images",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      });
      
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const pickImage = async () => {
    // For iOS, we don't need to check permissions beforehand
    // For Android, we need to request permissions
    if (Platform.OS === 'android') {
      const hasPermission = await requestGalleryPermission();
      
      if (!hasPermission) {
        Alert.alert(
          "Permission Required",
          "To add photos, you need to grant gallery access permission. Would you like to open settings to enable this permission?",
          [
            { text: "Not Now", style: "cancel" },
            { text: "Open Settings", onPress: openAppSettings }
          ]
        );
        return;
      }
    }
    
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 800,
      maxWidth: 800,
    };

    try {
      const response = await launchImageLibrary(options);
      
      console.log('Image picker response:', response);
      
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
        alert('Error selecting image: ' + (response.errorMessage || 'Unknown error'));
      } else if (response.assets && response.assets.length > 0) {
        console.log('Image selected:', response.assets[0]);
        setPhoto(response.assets[0]);
      }
    } catch (error) {
      console.error('Error picking image:', error);
      alert('Failed to select image. Please try again.');
    }
  };

  const submitProduct = async () => {
    const formData = new FormData();
    Object.entries(product).forEach(([key, value]) => {
      formData.append(key, value);
    });
    if (photo) {
      // Create a proper form data entry for the image
      // @ts-ignore - This is a workaround for React Native FormData
      formData.append('image', {
        uri: photo.uri,
        type: photo.type || 'image/jpeg',
        name: photo.fileName || 'photo.jpg',
      });
    }
    try {
      await axios.post('http://127.0.0.1:8000/admin/api/productlisting/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Product created!');
      setProduct({
        title: '',
        description: '',
        quantity: '',
        price: '',
        location: '',
        availability_date: '',
        unit: units[0],
      });
      setPhoto(null);
    } catch (error) {
      alert('Error creating product');
    }
  };

  const onDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const today = new Date();
      // Remove time part for comparison
      today.setHours(0, 0, 0, 0);
      selectedDate.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        alert('You cannot select a past date.');
        return;
      }
      const formattedDate = selectedDate.toISOString().split('T')[0];
      handleInputChange('availability_date', formattedDate);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Product Listing</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={product.title}
        onChangeText={(text) => handleInputChange('title', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={product.description}
        onChangeText={(text) => handleInputChange('description', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        value={product.quantity}
        onChangeText={(text) => handleInputChange('quantity', text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={product.price}
        onChangeText={(text) => handleInputChange('price', text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={product.location}
        onChangeText={(text) => handleInputChange('location', text)}
      />
      <TouchableOpacity
        style={styles.datePickerButton}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={{ color: product.availability_date ? 'black' : '#888' }}>
          {product.availability_date ? product.availability_date : 'Select Availability Date'}
        </Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={product.availability_date ? new Date(product.availability_date) : new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          minimumDate={new Date()}
          onChange={onDateChange}
        />
      )}
      <View style={styles.unitContainer}>
        {units.map((unit) => (
          <TouchableOpacity
            key={unit}
            style={[
              styles.unitButton,
              product.unit === unit && styles.unitButtonSelected,
            ]}
            onPress={() => handleInputChange('unit', unit)}
          >
            <Text>{unit}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          alignItems: 'center',
          padding: 10,
          borderRadius: 5,
          margin: 2,
        }}
        onPress={pickImage}
      >
        <Text style={{ color: 'white' }}>Add photo</Text>
      </TouchableOpacity>

      {photo && (
        <Image
          source={{ uri: photo.uri }}
          style={{ width: 100, height: 100, marginVertical: 10 }}
        />
      )}
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          alignItems: 'center',
          padding: 10,
          borderRadius: 5,
          margin: 2,
        }}
        onPress={submitProduct}
      >
        <Text style={{ color: 'white' }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 8, borderRadius: 5 },
  unitContainer: { flexDirection: 'row', marginBottom: 10 },
  unitButton: { padding: 8, borderWidth: 1, borderColor: '#ccc', marginRight: 5, borderRadius: 5 },
  unitButtonSelected: { backgroundColor: '#cce5ff' },
  datePickerButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
  },
});

export default ProductListing;