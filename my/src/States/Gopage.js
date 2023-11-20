import React from "react";

class Gopage extends React.Component{
    constructor(props){
        super(props)
        this.state = {items:"laptop"}
    }

    handleClick=()=>{
        this.setState({items: "Desktop"})
    }
    
    render(){
        return(
             <div>
                <p onClick={this.handleClick}>{this.state.items}</p>
             </div>
        )
    }
}

export default Gopage;