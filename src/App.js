import React from 'react';




import Admin from "./pages/Admin";
import Header from "./components/Header/Header";
import Loading from "./components/Loading"

const App = () => {
    return (
        <div>
            <Header/>
            <div style={{marginTop: 80}}>
                <Admin/>
            </div>
        </div>
    )
}

export default App