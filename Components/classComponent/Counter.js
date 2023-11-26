import React,{Component} from 'react';
import { ReactDOM } from 'react-dom';

export default class Counter extends Component {
    render(){
        return (
            <div>
                <h2>
                    My name is Rakib Hasan
                    {new Date().toLocaleTimeString(this.props.local)}
                    <span>Hello {new Date().toLocaleTimeString(this.props.local)}</span>

                </h2>
            </div>
        )
    }
}