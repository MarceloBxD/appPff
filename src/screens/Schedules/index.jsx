import {Container, CustomText} from './styles';
import {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, Image} from 'react-native';

export default () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Agendamentos',
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('MakeAppointment')}>
          <Image
            style={{width: 30, height: 30, marginRight: 10}}
            source={require('../../assets/mais.png')}
          />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <Container>
      <CustomText>Nenhum agendamento</CustomText>
    </Container>
  );
};
