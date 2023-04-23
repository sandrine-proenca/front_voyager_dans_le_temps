import { useState } from 'react';
import Accueil from './components/Accueil/accueil';
import { AuthContext, Tuser } from './context/authContext';

export default function App() {

  const [user, setUser] = useState<Tuser | null>(null);
  
  return (

    <AuthContext.Provider value={{
      user: user,
      setUser: setUser
      }}>

      {user === null && <Accueil></Accueil>}

    </AuthContext.Provider>

  );
}

