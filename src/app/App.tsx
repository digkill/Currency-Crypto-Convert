import * as React from "react";

import {HelloWorld} from "./components/HelloWorld";
import {Component} from "react";

class App extends Component {
    render() {
        return (
            <HelloWorld firstName='Vitaliy' lastName='Edifanov' />
        );
    }
}

export default App;