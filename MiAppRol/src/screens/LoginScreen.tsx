import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function LoginScreen() {
  const { login } = useAuth();
  const [selectedRole, setSelectedRole] = useState<'admin' | 'common'>('common');

  const handleIngresar = () => {
    login(selectedRole);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccione su Rol</Text>
      
      <View style={styles.roleContainer}>
        <TouchableOpacity 
          style={[styles.roleButton, selectedRole === 'admin' && styles.activeButton]} 
          onPress={() => setSelectedRole('admin')}
        >
          <Text style={[styles.roleText, selectedRole === 'admin' && styles.activeText]}>Admin</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.roleButton, selectedRole === 'common' && styles.activeButton]} 
          onPress={() => setSelectedRole('common')}
        >
          <Text style={[styles.roleText, selectedRole === 'common' && styles.activeText]}>Common</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleIngresar}>
        <Text style={styles.submitButtonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  roleContainer: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  roleButton: {
    flex: 1,
    paddingVertical: 15,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  activeButton: {
    borderColor: '#007bff',
    backgroundColor: '#e6f2ff',
  },
  roleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  activeText: {
    color: '#007bff',
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});