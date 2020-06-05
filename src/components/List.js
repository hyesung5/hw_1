import React, {Component} from 'react';
import Item from './Item';

class List extends Component {

    render(){
        const{todos, onUpdate} =this.props;
        return(
            <div >{
                todos.map((todo) =>{
                    return <Item key={todo.id} todo={todo} onUpdate={onUpdate} /> 
                })}
            </div>
        )
    }
}

export default List;