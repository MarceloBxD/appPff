import {Input} from './styles';

const CustomInput = ({placeholder, value, onChangeText, password}) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={password}
    />
  );
};

export default CustomInput;
