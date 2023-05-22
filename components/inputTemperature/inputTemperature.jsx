import { TextInput, Text, View } from 'react-native';
import { s } from './inputTemperature.style';

export function InputTemperature({ defaultValue, onChangeText, unit }) {
  return (
    <View style={s.container}>
      <TextInput
        style={s.input}
        keyboardType="default"
        placeholder="tappe un température"
        maxLength={4}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        returnKeyType="done"
      />
      <Text style={s.unit}>{unit}</Text>
    </View>
  );
}
