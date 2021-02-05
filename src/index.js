import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () =>{
    return(
     <div className="ui container comments">
        
        <ApprovalCard>
            <div>
                <h4>Warning</h4>
                <p> Are you sure you want to do this?</p>
            </div>
        </ApprovalCard>
        
        <ApprovalCard>
            <CommentDetail image={faker.image.image()}  author="Sam" timeAgo = "Today at 5:00 PM" message = "Hello Joel" />
        </ApprovalCard>


        <ApprovalCard>
            <CommentDetail  image={faker.image.image()} author="Jane"  timeAgo = "Today at 3:00 PM"   message = "Hello Adrian"/>
        </ApprovalCard>
       
       <ApprovalCard>
         <CommentDetail  image={faker.image.image()} author="Bruce" timeAgo = "Today at 1:00 PM"  message = "Hello Aneiry" />
       </ApprovalCard>
        
       
     </div>
    );
}

ReactDom.render(<App />,document.querySelector("#root"));