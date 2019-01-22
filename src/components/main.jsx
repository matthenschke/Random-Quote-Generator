import React from "react";
import axios from "axios";
import  "../styles/main.css"

// api endpoint to generate random quote 
const url = "https://quotes.rest/qod";

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            quote : []
    };
}
    onSubmit = () => {
    axios.get(url, {headers : {"Accept" : "application/json"}}).then(response => {
            const data = response.data.contents.quotes
            this.setState({quote : data })
            console.log(this.state.quote)
        })
        .catch(error => {
            console.log(error);
        })
    }
    render(){
        const quote =  this.state.quote[0];
        return (
            <div>
            <div className = "header">
                <h1>Random Quote Generator</h1>
            </div>
               <button className = "button" onClick = {this.onSubmit}>Quote of the Day</button>
            {quote && <div className = "quote-body"><p>{quote.quote}</p>
            <h1>{quote.author}</h1> </div> }
            </div>
        );
    }
    }



export default Main;