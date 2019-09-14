import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Admin from './admin/overview';
import Page from './page/page.js';
import Homepage from './homepage/homePage';
import * as serviceWorker from './serviceWorker';

export default class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            menuId: 0,
            isAdmin: false
        }
    }

    componentDidMount(){
        const url = window.location.href;
        const urls = url.split('?');
        const paramStr = urls[1];
        if(paramStr){
            const params = paramStr.split('=');
            if(params[1] === 'root'){
                this.setState( { isAdmin: true } );
            }
        }
    }

    onMenuClick = (menuId) => {
        this.setState({
            menuId: menuId
        });
    }

    render(){
        const { menuId, isAdmin } = this.state;

        if(isAdmin){
            return <Admin />
        }else{
            if(menuId <= 0){
                return <Homepage onMenuClick={this.onMenuClick} />
            }else{
                return <Page menuId={menuId} />
            }
        }
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
