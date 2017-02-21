import axios from 'axios';

export const FETCH_POST = 'FETCH_POST';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

export const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=f6o8r7t5u3n0a9to';

export function fetch_post(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    return {
       type: FETCH_POST,
       payload: request
    };
}

export function fetch_posts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
       type: FETCH_POSTS,
       payload: request
    };
}

export function create_post(props) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
    return {
       type: CREATE_POST,
       payload: request
    };
}

export function delete_post(id) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
    return {
        type: DELETE_POST,
        payload: request
    };
}
