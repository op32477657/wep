import './App.css';
import login from './Components/Login';
import username from './Components/UserName';
import password from './Components/Password';
import button from './Components/Button';

function App() {
    return ( <
        div className = "App" >
        <
        div className = 'login' > { login() } < /div> <
        div className = 'input' > { username() } < /div> <
        div className = 'input' > { password() } < /div> <
        div className = 'button' > { button() } < /div> <
        /div>
    );
}

export default App;