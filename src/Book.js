import React, { Component } from 'react';
// import Button from './Buttons'
// import React from 'react';

//STATE IMMUTABLE !!!!
//shallow merge
//this.setState({})
class Book extends Component {
    constructor(props){
        super(props)
        this.state={
            count: 1,
            name: "john" 
        };
        // this.handleClick = this.handleClick.bind(this);
        // this.addCount=this.addCount.bind(this);
        // this.lowerCount=this.lowerCount.bind(this);
        // this.resetCount=this.resetCount.bind(this);
    }



//    handleClick(){
//        console.log(this.state.count)
//    }

// handleClick=()=> {
//     console.log("You clicked me");
//     console.log(this.state.count)
// }

// addCount = () => {
// this.setState({
// //    count:this.state.count + 1
// count: this.state.count + 1,name: "peter" });
// }


// lowerCount=()=>{
//     this.setState({
//         //    count:this.state.count + 1
//         count: this.state.count - 1,name: "peter" });
// }
// resetCount=()=>{
//     this.setState({
//         //    count:this.state.count + 1
//         count: 0,name: "peter" });
// }



    render() {

        // console.log(this.props)
        // const {book,author}=this.props.book;
        // const {book,author}=this.props.info;

        const {img,title,author,id}=this.props.info;
        const {handleDelete}=this.props;
        // console.log(this.props)
            console.log(id)
        return (
            <article className="book">
            <img src={img} width="150px" height="150" alt=""/>
            <div>

                 <h3>Author: {author}</h3>
                <h6>Title :{title}</h6>
                {/* <button onClick={}></button> */}
              {/* <Button handleDelete={handleDelete}/> */}
                 {/* <h3>count :{this.state.count}</h3>
                 <h4>name :{this.state.name}</h4> */}
                {/* <button type="button" onClick={this.addCount}>Add Count</button>
                <button type="button" onClick={this.lowerCount}>Lower Count</button>
                <button type="button" onClick={this.resetCount}>Reset Count</button> */}
                  {/* <Button /> */}
                  {/* <button type="button" onClick={handleDelete(id)}>delete me</button> */}
                  <button type="button" onClick={()=>handleDelete(id)}>delete me</button>

            </div>
            </article>
        );
    }
}

export default Book;