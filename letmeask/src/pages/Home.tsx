import { useNavigate } from 'react-router-dom'
import { useContext} from 'react';

import { AuthContext } from '../App'

import { auth, firebase } from '../services/firebase'

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.css';
import { AuthContext } from '../App';

export function Home() {
  const navigate = useNavigate();
  const {value, signInWithGoogle} = useContext(AuthContext)

  function handleCreateRoom() {
    if (!value) {
      signInWithGoogle()
    }
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then((result) => {
      console.log(result);

      // Navegar para /rooms/new
      navigate('/rooms/new');
    });
  }
  
  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala do Google
          </button>
          <div className="separator">ou entre na sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}