import React, {Component} from "react";

class Post extends Component {

    state = {
        counter: 0,
        isActive: false //приходит с сервера, состояние лайка у юзера, если false - то еще не лайкал, true если - лайкал
    }

    addLike = () => {
        if (!this.state.isActive) {
            this.setState({counter: this.state.counter + 1});
        }
        this.setState({isActive: true});
    }

    render() {
        return (
            <div className='post'>
                <h3>Name: {this.props.post.name}</h3>
                <p>Amount tasks: {this.props.post.tasks}</p>
                <span onClick={this.addLike}>&#10084; {this.state.counter}</span>
            </div>
        )
    }
}

export default Post;