import './Chat.css'
function Chat () {

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./iconBot.png"></img>
          <div className="name">
            <span>Detector de Mentirada</span>
            <p>Bot que irá detectar todas as falacias e hiperboles</p>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, velit quibusdam. Officia est a ad dolorum et. Totam distinctio laboriosam fugit molestiae voluptate, consequuntur enim non quis est fugiat commodi!</p>
            <span>1 minuto atrás</span>
          </div>
        </div>
        <div className="message">
          <img src="./iconBot.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, velit quibusdam. Officia est a ad dolorum et. Totam distinctio laboriosam fugit molestiae voluptate, consequuntur enim non quis est fugiat commodi!</p>
            <span>1 minuto atrás</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, velit quibusdam. Officia est a ad dolorum et. Totam distinctio laboriosam fugit molestiae voluptate, consequuntur enim non quis est fugiat commodi!</p>
            <span>1 minuto atrás</span>
          </div>
        </div>
        <div className="message">
          <img src="./iconBot.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, velit quibusdam. Officia est a ad dolorum et. Totam distinctio laboriosam fugit molestiae voluptate, consequuntur enim non quis est fugiat commodi!</p>
            <span>1 minuto atrás</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, velit quibusdam. Officia est a ad dolorum et. Totam distinctio laboriosam fugit molestiae voluptate, consequuntur enim non quis est fugiat commodi!</p>
            <span>1 minuto atrás</span>
          </div>
        </div>
        <div className="message">
          <img src="./iconBot.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, velit quibusdam. Officia est a ad dolorum et. Totam distinctio laboriosam fugit molestiae voluptate, consequuntur enim non quis est fugiat commodi!</p>
            <span>1 minuto atrás</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, velit quibusdam. Officia est a ad dolorum et. Totam distinctio laboriosam fugit molestiae voluptate, consequuntur enim non quis est fugiat commodi!</p>
            <span>1 minuto atrás</span>
          </div>
        </div>
        <div className="message">
          <img src="./iconBot.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, velit quibusdam. Officia est a ad dolorum et. Totam distinctio laboriosam fugit molestiae voluptate, consequuntur enim non quis est fugiat commodi!</p>
            <span>1 minuto atrás</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <input type="text" placeholder="Escreva sua mensagem" />
        <div className="icons">
          <img src="./upload.png" alt="" />
        </div>
        <button className='sendButton'>Enviar</button>
      </div>
    </div>
  )
}

export default Chat