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
      <div className="body"></div>
      <div className="bottom"></div>
    </div>
  )
}

export default Chat