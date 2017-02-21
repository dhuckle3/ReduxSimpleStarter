import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetch_post, delete_post } from '../actions/index';


class ShowPost extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    componentWillMount() {
        this.props.fetch_post(this.props.params.id);
    }

    onClick() {
        this.props.delete_post(this.props.params.id).then(() => {
            this.context.router.push('/posts');
        });
    }

    render() {
        if(!this.props.post) {
            return <div/>
        }
        return (
            <div>
                <button className="btn btn-danger pull-xs-right" onClick={this.onClick.bind(this)}>Delete</button>
                <h1>{this.props.post.title}</h1>
                <h3>Categories: {this.props.post.categories}</h3>
                <p>{this.props.post.content}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetch_post, delete_post })(ShowPost);

