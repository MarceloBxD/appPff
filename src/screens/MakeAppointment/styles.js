import styled from 'styled-components/native';
export const Container = styled.View`
  flex: 1;
  background-color: #00eaff;
  align-items: center;
  justify-content: center;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;

export const Input = styled.TextInput`
  background-color: #eee;
  font-size: 16px;
  color: #333;
  height: 50px;
  border-radius: 30px;
  padding-left: 20px;
  margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: #63c2d1;
  border-radius: 10px;
  padding: 8px;
  justify-content: center;
  align-items: center;
`;

export const SubmitText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const AppointmentText = styled.Text`
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 15px;
  color: #fff;
  font-weight: 600;
`;

export const AppointmentButton = styled.TouchableHighlight`
  background-color: #63c2d1;
  padding: 5px;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
