// State, this.setState= hold/access/change data of component
// props = read Only 


import React, { Component } from 'react';
import Book from './Book';
import booksData from './bookData';

class Booklist extends Component {
    constructor(props){
        super(props)
        this.state={
            
                books: booksData,
                // name:'john'
        }
    }
//  state={
//     books:[
//         {
//             id: 1,
//             book:"book number one",
//             author:"ahmed"
//         },
//         {
//             id:2,
//             book:"book number two",
//             author:"ali"
//         }
//     ]
//  };
 

    // state={
    //  books: booksData

    //  [
        //  {  
        //     //   id: 1,
        //      name: "hamza ali",
        //      job: "designer"
        //  },
        //    {
        //     //    id: 2,
        //        name:"ahmed",
        //        job:"developer"
        // }

    //  ]
    // }

    // handleDelete=()=>{
    //     console.log(`I 'm Parent`)
    // }
    // handleDelete=(id)=>{
    //     console.log(id)
    // }
    handleDelete=id=>{
       console.log(this.state.books)

    const sortedBooks=this.state.books.filter((item)=>item.id !== id)
    // console.log(sortedBooks);

    this.setState({
     books: sortedBooks        
    })
}
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
                {/* {this.state.books.map((item)=> (<Book key={item.id} info={item} />))} */}
                 {this.state.books.map((item,index)=>(<Book key={index} info={item} handleDelete={this.handleDelete} />))}
            </section>
        );
    }
}

export default Booklist;