import {
  Container,
  InputArea,
  Input,
  SubmitButton,
  AppointmentText,
  SubmitText,
  AppointmentButton,
} from './styles';
import DatePicker from 'react-native-date-picker';
import {Image} from 'react-native';
import axios from 'axios';

import {useEffect} from 'react';
import {useApp} from '../../contexts/contextApi';

export default () => {
  const {date, setDate, open, setOpen, name, setName, cpf, setCpf} = useApp();

  const handleSubmit = async () => {
    if (!name || !cpf || !date) {
      alert('Preencha todos os campos!');
      return;
    }

    newDate = date.toISOString().slice(0, 10);
    newTime = date.toISOString().slice(11, 19);

    //  diminuir 3 horas do horário
    let time = newTime.split(':');
    let hour = time[0];
    let minutes = time[1];
    let seconds = time[2];

    // Horário correto sem o fuso horário
    let correctTime = hour - 3 + ':' + minutes + ':' + seconds;

    const data = {
      name,
      cpf,
      appointment: newDate + ' ' + correctTime,
    };

    const req = await axios
      .post('http://192.168.15.10:3000/insertAppointment', data)
      .then(res => console.log(res.status))
      .catch(err => console.log(err));

    return req;
  };

  return (
    <Container>
      <Image
        style={{width: 120, height: 120}}
        source={require('../../assets/tooth.png')}
      />
      <InputArea>
        <Input value={name} onChangeText={t => setName(t)} placeholder="Nome" />
        <Input value={cpf} onChangeText={t => setCpf(t)} placeholder="Cpf" />
      </InputArea>
      <AppointmentButton onPress={() => setOpen(true)}>
        <Image
          style={{width: 30, height: 30}}
          source={require('../../assets/calendar.png')}
        />
      </AppointmentButton>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <AppointmentText>Faça seu agendamento!</AppointmentText>
      <SubmitButton onPress={handleSubmit}>
        <SubmitText>Agendar</SubmitText>
      </SubmitButton>
    </Container>
  );
};
