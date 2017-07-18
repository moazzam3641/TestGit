import React from 'react';
import ReactDom from 'react-dom';
class Hello extends React.Component {
 	constructor(){
 		super()
 		this.name = 'ALi'
 	}
 	getName(){
 		return this.name = 'Moazzam'
 	}
 	render(){
 		return(
 			<div>
 				<h1>hello</h1>
 				{this.name}
 				{this.getName()}
			</div> 				
 		)
 	}
}
 
class TodoList extends React.Component{
 	constructor(){
 		super()
 		this.changestatus = this.changestatus.bind(this);
 		this.state = {
 			firstName : 'Moazzam',
 			middleName : 'Ali',
 			lastName : 'shaikh',
 			names : ['Anisa','Aisha','Abdullah'],
 			task :[
	 			{ 
	 				name : 'Buy Milk',
	 				completed : false

	 			},
	 			{
	 				name : 'Buy Cheese',
	 				completed : false
	 			},
	 			{
	 				name : 'Buy Bread',
	 				completed : false
	 			}
 			]
 		}
	}

	changestatus(index)
	{
		console.log(this.state.task[index])
	}
	render(){
		return(
				<div>
					<TodoItem details={this.state}/>
					<ul>
						{
							this.state.names.map(function(name){
								return <TodoItem1 key={name} details={name} /> 								
							})
						}
						<TodoItem1 details={this.state.firstName} /> 						
					</ul>
					<ul>
						{
							this.state.task.map((task,index) => {
								return <Task key={task.name} index={index} clickHandler={this.changestatus} details={task} />
							})
						}
					</ul>	
				</div>
		)
	}
}
class TodoItem extends React.Component{
 	render(){
 		return(
 			<ul>
				<li>{this.props.details.firstName}</li>
				<li>{this.props.details.middleName}</li>
			    <li>{this.props.details.lastName}</li>	
			</ul>
 		)
 	}
}
class TodoItem1 extends React.Component{
 	render(){
 		return(
 			<li>{this.props.details}</li>		
 		)
 	}
}
class Task extends React.Component{
 	render(){
 		return(
 			<li onClick={()=>{
 				this.props.clickHandler(this.props.index)
 			}} className={this.props.details.completed ? "completed" : ""}>
 				{this.props.details.name}
 			</li>
 		)
 	}
}
ReactDom.render(<TodoList />,document.getElementById('root'))