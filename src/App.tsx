import * as React from 'react';
import {Counter} from "./components/Counter";
import './index.scss';

const App = () => {
    return (
        <div className='app'>
            My App component
            <Counter/>
        </div>
    );
};

export default App;
