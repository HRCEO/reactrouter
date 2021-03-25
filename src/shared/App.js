import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from '../pages'

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                {/*Switch 구문을 사용하면, 가장 위에 있는것만 실행 한다.*/}
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
        );
    }
}

export default App;