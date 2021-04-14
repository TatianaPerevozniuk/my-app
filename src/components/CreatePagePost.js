import React, { Component } from 'react';
import TopPanel from "./TopPanel";
import AddPost from "./AddPost";
import Post from "./Post";

class CreatePagePost extends Component {

    state = {
        posts: [

        ]
    }

    addDataPosts = data => {
        this.setState({posts: this.state.posts.concat(data)})
    }

    render() {

        return (
            <div>
                <TopPanel/>
                <AddPost addDataPosts = {this.addDataPosts}/>
                <div className='post-block'>
                    { this.state.posts.map((post, i) => <Post post = {post} key = {i}/>)}
                </div>
            </div>
        )
    }
}

export default CreatePagePost;