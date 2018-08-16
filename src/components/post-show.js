import React from 'react';
import { connect} from 'react-redux';
import { fetchPost} from '../actions/index';


class PostShow extends React.Component {
    
    componentWillMount(){
        const id  = this.props.match.params.id;
        this.props.fetchPost(id);
    }
    render(){
        const { post } = this.props;

        if(!post){
            return <div>Loading...</div>
        }
        
        return(
            <div>
                <h3>{ post.title}</h3>
                <h6>{ post.categories}</h6>
                <p>{ post.title}</p>
            </div>
        )
    }
}

function mapStateToProps({ posts}, ownProps){
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchPost})(PostShow);