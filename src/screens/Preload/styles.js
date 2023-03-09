import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  gap: 20px;
  background-color: #00eaff;
  justify-content: center;
  align-items: center;
`;

export const ToothImage = styled.Image`
  width: 120px;
  height: 120px;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;
