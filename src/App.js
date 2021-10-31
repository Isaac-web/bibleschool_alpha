import React from 'react';
import {AppBar} from "@mui/material";

import Admin from "./pages/Admin";
import Header from "./components/Header/Header";

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
