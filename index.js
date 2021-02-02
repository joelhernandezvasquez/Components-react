import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';


const App = () =>{
    return(
     <div className="ui container comments">
       
        <CommentDetail image={faker.image.image()}  author="Sam" timeAgo = "Today at 5:00 PM" message = "Hello Joel" />
        <CommentDetail  image={faker.image.image()} author="Jane"  timeAgo = "Today at 3:00 PM"   message = "Hello Adrian"/>
        <CommentDetail  image={faker.image.image()} author="Bruce" timeAgo = "Today at 1:00 PM"  message = "Hello Aneiry" />
       
     </div>
    );
}

ReactDom.render(<App />,document.querySelector("#root"));