import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.css';

export function Home() {
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiencia em tempo-real</p>
      </aside>
      <main>
        <img src={logoImg} alt="Letmeask" />
        <button>
          <img src={googleIconImg} alt="Logo do Google" />
          Crie sua sala do Google
        </button>
        <div>ou entre na sala</div>
        <form>
          <input 
            type="text" 
            placeholder="Digite o código da sala"
          />
          <button type="submit">
            Entrar na sala
          </button>
        </form>
      </main>
    </div>
  )
}