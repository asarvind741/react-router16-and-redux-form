import React from 'react';
import { connect} from 'react-redux';
import { fetchPost, deletePost} from '../actions/index';


class PostShow extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        }

        this.deletePostNow = this.deletePostNow.bind(this)
    }
    
    componentWillMount(){
        const id  = this.props.match.params.id;
        this.props.fetchPost(id);
    }

    deletePostNow(id){
        console.log('delete post',id)
        this.props.deletePost((id), () => {
            this.props.history.push("/")
        })
    }
    render(){
        const { post } = this.props;

        if(!post){
            return <div>Loading...</div>
        }
        
        return(
            <div>
                <div className = "text-xs-right">
                    <button className = "btn btn-danger" onClick =  {()=> this.deletePostNow(post.id)}>Delete</button>
                    </div>
                <h3>{ post.title}</h3>
                <h6>{ post.categories}</h6>
                <p>{ post.content}</p>
            </div>
        )
    }
}

function mapStateToProps({ posts}, ownProps){
    console.log("ownprops", ownProps)
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostShow);