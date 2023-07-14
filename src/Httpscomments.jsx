import React from "react";
import axios from "axios";

import Profile from '../src/Images/profile1.png'
import User from '../src/Images/user.webp'
import Login from '../src/Images/login.jpg'

class Httpscomments extends React.Component{
    state = {
        commentslist: []
    }


    componentDidMount(){
            axios.get('https://jsonplaceholder.typicode.com/comments').then((result) => {
            
            let commentslist = result.data
            console.log('commentslist', commentslist)
            this.setState({commentslist})
        
        })
    }
    render(){
        return(
            <>
                <div className="data-ui">
                    <div className="login-img">
                        <img src={Login} alt="login" />
                    </div>
                    <div className="id">the_wxz-wankerz . <span>12h</span>
                        <p>Gurugram</p>
                    </div>
                <div className="user-img">
                    <img src={User} alt="user-img" />
                </div>
                    {
                        this.state.commentslist.map(comments =>
                            <div className="comments-list" key = {comments.id} >
                                <div className="user-comments">{comments.body}</div>
                                <div>
                                    <div className="lower-row">
                                        <div className="img-col">
                                            <img src={Profile} alt="personal-img"/>
                                        </div>
                                        <div className="email-id">{comments.email}</div>
                                        <div className="ratings">
                                            <p>Upvote <span><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></span> {comments.postId} </p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            
                            
                            
                            
                            
                            
                            
                            )
                    }
                </div>
            </>
        )
    }
}


export default Httpscomments