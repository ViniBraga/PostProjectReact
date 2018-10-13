import React from 'react';

import Post from './Post.js';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <Post title="Post 1"/>
                <Post title="Post 2"/>
                <Post title="Post 3"/>
            </div>
        )
    }
}