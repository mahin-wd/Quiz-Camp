import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='questions'>
        <h1>Some Questions</h1>
            <div>
                <h3> 1)What is the purpose of React Router?</h3>
                <p> ans: React Router is used in single page web application to access multiple pages without reloading the whole website.</p>
            </div>

            <div>
                <h3> 2)How does Content API wirk?</h3>
                <p> ans: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling"</p>
            </div>

            <div>
                <h3> 3) What is the useRef Hook in React?</h3>
                <p> ans: The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>
        </div>
    );
};

export default Blog;