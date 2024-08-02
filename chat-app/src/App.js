import "./App.css";

import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import ChatTop from "./components/ChatTop";
import LoginForm from "./components/LoginForm";
function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;
  // Take the produtct id from chat engine by creating the new project
  return (
    <ChatEngine
      height="100vh"
      projectID="0bf76983-2b97-464f-857c-60a264a61da1"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      renderChatSettingsTop={(creds, chat) => <ChatTop creds={creds} chat={chat}/>}
    />
  );
}

export default App;