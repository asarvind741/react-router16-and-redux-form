import React from 'react';
import { connect} from 'react-redux';
import _ from 'lodash';
import { fetchPosts} from '../actions/index'
import { Link } from 'react-router-dom';


class PostIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.fetchPosts()
    }

    renderPosts(){
       return _.map(this.props.posts, post => {
            return (
            <li className = "list-group-item" key = {post.id}>{post.content}</li>
            )
        })
    }


    render(){
        if(!this.props.posts){
            return <div>Loading...</div>
        }
        else {
            return (
                <div>
                    <div className = "text-xs-right">
                    <Link className = "btn btn-primary" to = "/posts/new"> Add a Post</Link>
                    </div>
                   <h3>Posts</h3>
                    <ul className = "list-group">
                    { this.renderPosts()}
                    </ul>
                </div>
            )
        }
        
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps, { fetchPosts})(PostIndex);