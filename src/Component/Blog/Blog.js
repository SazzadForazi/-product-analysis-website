import React from 'react';

const Blog = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h3>React Context API</h3>
                    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
                <div className="col-md-4">
                    <h3>What is a semantic tag?</h3>
                    <p>Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. Elements such as header, footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.</p>
                </div>
                <div className="col-md-4">
                    <h3>What's the defference between inliine vs inline-block vs block?</h3>
                    <p><b>inline</b>The element doesn’t start on a new line and only occupy just the width it requires. You can’t set the width or height.</p>
                    <p><b>inline-block</b>It’s formatted just like the inline element, where it doesn’t start on a new line. BUT, you can set width and height values.</p>
                    <p><b>block</b>The element will start on a new line and occupy the full width available. And you can set width and height values.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;