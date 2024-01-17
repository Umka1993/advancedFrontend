import App from "./App";
import {render} from "react-dom";
import * as React from 'react'
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";


render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
