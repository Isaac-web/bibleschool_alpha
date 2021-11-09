import React from 'react';




import Admin from "./pages/Admin";
import Coordinator from "./pages/Coordiantor"
import Header from "./components/Header/Header";

const App = () => {
    return (
        <div>
            <Header/>
            <div style={{marginTop: 80}}>
                <Coordinator/>
            </div>
        </div>
    )
}

export default App
