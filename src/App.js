import { ChatEngine} from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const projectID='628ff44c-a9d1-4fdb-b1f7-e0feaeeb1f03'


const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        // <ChatEngine
        //     height='100vh'
        //     projectID='628ff44c-a9d1-4fdb-b1f7-e0feaeeb1f03'
        //     userName='iamtanmay'
        //     userSecret='1234'
        //     renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        // />
        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            renderIsTyping={(people) => <ChatFeed {...people} />}
            onDeleteChat={(chat) => console.log(chat)}
        />
    )
}

export default App;