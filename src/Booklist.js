import React, { Component } from 'react';
import Book from './Book';

class Booklist extends Component {
 state={
    books:[
        {
            id: 1,
            book:"book number one",
            author:"ahmed"
        },
        {
            id:2,
            book:"book number two",
            author:"ali"
        }
    ]
 };
    render() {
        //this.setState({})
        // const books=this.state.books.map((item)=>item.book);
        // console.log(books);
       
        //filter
        //forEach
        //map
        //reduce
        return (
            <section>
                <h3>This is our Booklist</h3>
                {/* <Book book={this.books[0]}/> */}
                {/* {this.state.books.map((item,index)=> (<Book key={index} info={item} />))} */}
                {this.state.books.map((item)=> (<Book key={item.id} info={item} />))}

            </section>
        );
    }
}

export default Booklist;