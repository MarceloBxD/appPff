import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from 'react';

const AppContext = createContext();

export function AppProvider({children}) {
  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState(null);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');

  const value = {
    user,
    setUser,
    date,
    setDate,
    open,
    setOpen,
    name,
    setName,
    cpf,
    setCpf,
    appointments,
    setAppointments,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
