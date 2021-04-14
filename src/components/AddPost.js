import React, {Component} from "react";

class AddPost extends Component {
    state = {
        name: '',
        tasks: ''
    }

    changeName = e => {
        this.setState({name: e.target.value});
        console.log(this.state.name);
    }
    changeTasks = e => {
        this.setState({tasks: e.target.value});
        console.log(this.state.tasks);
    }

    addPost = () => {
        const data = {
            name: this.state.name,
            tasks: this.state.tasks
        }

        if (this.state.name !== '' && this.state.tasks !== '') {
            this.props.addDataPosts(data);
            this.setState({name: '', tasks: ''}) //после отправки очищает инпут(меняет состояние (state))
        }

    }

    render() {

        return (
            <div className="add-post">
                <input type="text" value={this.state.name} onChange={this.changeName}/>
                <input type="text" value={this.state.tasks} onChange={this.changeTasks}/>
                <button className="add-post-button" onClick={this.addPost}>Add post</button>
            </div>
        )
    }
}

export default AddPost;
