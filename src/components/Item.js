import React, {Component} from 'react';
import './Item.css';

class Item extends Component{
	shouldComponentUpdate(nextProps, nextState){

		if(this.props.todo !== nextProps.todo){
			return true;
        }else{
            return false;
        }
        
    }

    state={
        user_id:'',
        password:'',
    }

    handelChange= (e) =>{
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
};

    render(){
        const {todo, onUpdate } = this.props;
        return(
            <div>
                <div>{todo.user_id}와 {todo.password}입니다.</div>
                <div className={`update_from ${!todo.done && 'hide'}`}>
                    <input value={todo.user_id} onChange={this.handelChange}/>
                    <br/>
                    <input value={todo.password} onChange={this.handelChange}/>
                </div>
                <button onClick={ ()=> onUpdate(todo.id)}>수정하기</button>
                <br/>
            </div>
      
        )
    }
}

export default Item;