import { useState } from 'react';
import Accueil from './components/Accueil/accueil';
import { AuthContext } from './context/authContext';
import Register from './components/Connexion_User/register';
import Login from './components/Connexion_User/login';
import Navbar from './components/Navbar/Navbar';
import { TUser } from './Types/TUser';
import { CompteUser } from './components/CompteUser/compteUser';
import UpdateUsers from './components/CompteUser/updateUser';

export default function App() {

  const [user, setUser] = useState<TUser | null>(null);
  const [page, setPage] = useState(`accueil`)
  
  return (

    
    <AuthContext.Provider value={{
      user: user,
      setUser: setUser
      }}>

      <Navbar/>
      {page === `accueil` && <Accueil setPage={setPage} page={page}/>}
      {page === `register` && <Register setPage={setPage} page={page}/>}
      {page === `login` && <Login setPage={setPage} page={page}/>}
      {page === `compteUser` && <CompteUser setPage={setPage}/>}
      {page === `updateUsers` && <UpdateUsers setPage={setPage}/>}

    </AuthContext.Provider>

  );
}

