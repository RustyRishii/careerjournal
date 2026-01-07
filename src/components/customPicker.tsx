import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

type CustomPicker = {
  value: any;
  onValueChange: any;
  items: any;
  placeholder: any;
};

const CustomPicker = ({
  value,
  onValueChange,
  items,
  placeholder,
}: {
  value: any;
  onValueChange: any;
  items: any;
  placeholder: any;
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const selectedItem = items.find(
    (item: { value: any }) => item.value === value,
  );

  return (
    <View>
      {/* Trigger Button */}
      <Pressable
        onPress={() => setModalVisible(true)}
        style={styles.pickerButton}
      >
        <Text
          style={selectedItem ? styles.selectedText : styles.placeholderText}
        >
          {selectedItem ? selectedItem.label : placeholder}
        </Text>
        <Text style={styles.arrow}>▼</Text>
      </Pressable>

      {/* Custom Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            {/* Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Status</Text>
              <Pressable onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButton}>✕</Text>
              </Pressable>
            </View>

            {/* Options */}
            {items.map(
              (item: {
                value: React.Key | null | undefined;
                label:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                      unknown,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<
                      | string
                      | number
                      | bigint
                      | boolean
                      | React.ReactPortal
                      | React.ReactElement<
                          unknown,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }) => (
                <Pressable
                  key={item.value}
                  style={[
                    styles.option,
                    value === item.value && styles.selectedOption,
                  ]}
                  onPress={() => {
                    onValueChange(item.value);
                    setModalVisible(false);
                  }}
                >
                  <Text
                    style={[
                      styles.optionText,
                      value === item.value && styles.selectedOptionText,
                    ]}
                  >
                    {item.label}
                  </Text>
                  {value === item.value && (
                    <Text style={styles.checkmark}>✓</Text>
                  )}
                </Pressable>
              ),
            )}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerButton: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    // borderColor: '#00ffff',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedText: {
    fontSize: 16,
    color: '#000',
  },
  placeholderText: {
    fontSize: 16,
    color: '#999',
  },
  arrow: {
    fontSize: 12,
    color: '#666',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 34,
    maxHeight: '60%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  closeButton: {
    fontSize: 24,
    color: '#666',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  selectedOption: {
    backgroundColor: '#e6ffff',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  selectedOptionText: {
    color: '#00ffff',
    fontWeight: '600',
  },
  checkmark: {
    fontSize: 20,
    color: '#00ffff',
    fontWeight: 'bold',
  },
});

export default CustomPicker;
