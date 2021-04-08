import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About,Posts } from '../pages'
import Menu from "../components/Menu";

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>
                {/*Switch 구문을 사용하면, 가장 위에 있는것만 실행 한다.*/}
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
                <Route path="/posts" component={Posts}/>

                {/*옛날 방식*/}
                {/*<Route path="foo" component={Foo}>*/}
                {/*    <Route path=":id" component={Bar}/>*/}
                {/*</Route>*/}

            </div>
        );
    }
}

export default App;