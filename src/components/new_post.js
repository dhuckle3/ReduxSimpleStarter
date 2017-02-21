import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { create_post } from '../actions/index';

class NewPost extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	onSubmit(props) {
		this.props.create_post(props)
		.then((post) => {
			this.context.router.push('/');
		});
	}

    render() {
        const { fields: { title, categories, content}, handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <h3>Create a new Post</h3>
                    <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                        <label>Title</label>
                        <input type="text" className="form-control" {...title } />
                        <div className="text-help">
							{title.touched ? title.error : ''}
						</div>
                    </div>
                    <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                        <label>Categories</label>
                        <input type="text" className="form-control" { ...categories } />
                        <div className="text-help">
							{categories.touched ? categories.error : ''}
						</div>
                    </div>
                    <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                        <label>Content</label>
                        <textarea className="form-control" { ...content } />
                        <div className="text-help">
							{content.touched ? content.error : ''}
						</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
					<Link to="/" className="btn btn-danger">Cancel</Link>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) { errors.title = 'Enter a title'; };
    if (!values.title) { errors.categories = 'Enter one or more categories'; };
    if (!values.content) { errors.content = 'Enter content'; };

    return errors;
}

export default reduxForm({
    form: 'new_post',
    fields: ['title', 'categories', 'content'],
    validate
}, null, { create_post })(NewPost);
