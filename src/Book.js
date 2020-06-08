import React, { Component } from 'react';

// import React from 'react';

class Book extends Component {
    constructor(props){
        super(props)
        this.state={
            count: 1 
        }
        // this.handleClick = this.handleClick.bind(this);
    }



//    handleClick(){
//        console.log(this.state.count)
//    }

handleClick=()=> {
    console.log("You clicked me");
    console.log(this.state.count)
}

    render() {
        // console.log(this.props)
        // const {book,author}=this.props.book;
        // const {book,author}=this.props.info;

        const {img,title,author}=this.props.info;

        return (
            <article className="book">
            <img src={img} width="150px" height="150" alt=""/>
            <div>

                <h3>Author: {author}</h3>
                <h5>Title :{title}</h5>
                <button type="button" onClick={this.handleClick}>Add Count</button>
            </div>
            </article>
        );
    }
}

export default Book;