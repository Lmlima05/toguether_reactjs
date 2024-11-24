import { useContext, UseContext } from 'react';
import { useHistory } from 'react-router-dom'

import { auth, firebase } from '../services/firebase'

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import {  TestContext } from '../App';

import '../styles/auth.css';

export function Home() {
  const history = useHistory();
  const value = useContext(TestContext)

  function handleCreateRoom() {
    const provider = new firebase.auth.GoogleAuthProvider(); 

    auth.signInWithPopup(provider).then(result => {
      console.log(result)

      history.push('/rooms/new')
    })
    
    
  }

  return (
    <div id="page-auth">
      <aside>
        <h1>{value}</h1>
        <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiencia em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button onClick={navigateToNewRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala do Google
          </button>
          <div className="separator">ou entre na sala</div>
          <form>
            <input 
              type="text" 
              placeholder="Digite o código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>  
      </main>
    </div>
  )
}