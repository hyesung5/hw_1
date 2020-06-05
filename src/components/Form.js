import React, {Component} from 'react';

class Form extends Component {


state ={
    user_id:'',
    password:'',
};

handelChange= (e) =>{
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
};

handelSubmit= (e) =>{

    e.preventDefault();
    const {  user_id, password } = this.state;
    this.setState({
        user_id:'',
        password:'',
    });

    this.props.onInsert(user_id, password);

};

    render(){

        

        return(
            <div>
                <form onSubmit={this.handelSubmit} > 
                    <input name="user_id"
                        value={this.state.user_id}
                        onChange={this.handelChange}
                        

                    />
                    <br/>
                    <input name="password"
                        value={this.state.password}
                        onChange={this.handelChange}
                    />
                    <br/>
                    <button>제출</button>
                </form>
            </div>
        )
    }
}

export default Form;
