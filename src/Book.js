import React, { Component } from 'react';

// import React from 'react';

class Book extends Component {
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
            </div>
            </article>
        );
    }
}

export default Book;