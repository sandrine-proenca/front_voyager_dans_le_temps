import { useState } from 'react';
import Accueil from './components/Accueil/accueil';
import { AuthContext } from './context/authContext';
import Register from './components/Connexion_User/register';
import Login from './components/Connexion_User/login';
import Navbar from './components/Navbar/Navbar';
import { TUser } from './Types/TUser';
import { CompteUser } from './components/CompteUser/compteUser';
import UpdateUsers from './components/CompteUser/updateUser';
import DeleteUser from './components/CompteUser/deleteUser';
import CreateAlbum from './components/Album/createAlbum';
import SelectAlbums from './components/Album/selectAlbums';
import { AlbumContextProvider } from './context/albumContext';
import GetPhotos from './components/Photo/GetPhotos';
/* import { AlbumsSelect } from './components/Album/selectAlbums'; */

export default function App() {

  const [user, setUser] = useState<TUser | null>(null);
  const [page, setPage] = useState(`accueil`)
  
  return (

    
    <AuthContext.Provider value={{
      user: user,
      setUser: setUser
      }}>
      <AlbumContextProvider>
      <Navbar/>
      {page === `accueil` && <Accueil setPage={setPage} page={page}/>}
      {page === `register` && <Register setPage={setPage} page={page}/>}
      {page === `login` && <Login setPage={setPage} page={page}/>}
      {page === `compteUser` && <CompteUser setPage={setPage}/>}
      {page === `updateUsers` && <UpdateUsers setPage={setPage}/>}
      {page === `deleteUser` && <DeleteUser setPage={setPage}/>}
      {page === `selectAlbums` && <SelectAlbums setPage={setPage}/>}
      {page === `createAlbum` && <CreateAlbum setPage={setPage}/>}
      {page === `getPhoto` && <GetPhotos setPage={setPage}/>}
      
      </AlbumContextProvider>
    </AuthContext.Provider>

  );
}

