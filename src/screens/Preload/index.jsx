import {useState, useEffect} from 'react';
import {useApp} from '../../contexts/contextApi';
import {Container, ToothImage, LoadingIcon} from './styles';

export default ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const {user} = useApp();

  const handleChange = () => {
    if (!user) {
      navigation.reset({
        routes: [{name: 'Main'}],
      });
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      handleChange();
      // setLoading(false);
    }, 3000);
  }, []);

  return (
    <Container>
      <ToothImage source={require('../../assets/tooth.png')} />
      {loading && <LoadingIcon size="large" color="#FFFFFF" />}
    </Container>
  );
};
