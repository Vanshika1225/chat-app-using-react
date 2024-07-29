import "./App.css";

import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
function App() {
  // Take the produtct id from chat engine by creating the new project
  return (
    <ChatEngine
      height="100vh"
      projectID="0bf76983-2b97-464f-857c-60a264a61da1"
      userName="javascriptmastery"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
