const express = require('express');

const router = express.Router();

const Appointments = require('../models/appointments.js');
const validateCpf = require('../middlewares/validateCpf.js');

router.post('/insertAppointment', async (req, res) => {
  const {name, cpf, appointment} = req.body;

  if (!name || !cpf || !appointment) {
    return res.status(400).json({error: 'Todo os campos são obrigatórios'});
  }

  if (!validateCpf(cpf)) {
    return res.status(400).json({error: 'CPF inválido'});
  }

  // Verificando se já existe um paciente marcado para o horário informado
  const appointmentExists = await Appointments.findOne({
    where: {
      appointment,
    },
  });

  if (appointmentExists) {
    return res
      .status(400)
      .json({error: 'Já temos um paciente marcado para este horário'});
  }

  let response = await Appointments.create({
    name,
    cpf,
    appointment,
  });

  res.json(JSON.stringify(response));
});

router.get('/getAppointments', async (req, res) => {
  let response = await Appointments.findAll();
  res.send(JSON.stringify(response));
});

module.exports = router;
