import React from 'react';

const Courses = () => {
    return (
        <div>
            <h1>Our Courses</h1>
            <p>Here are some courses we offer.</p>
            <ul>
                <li>Web-dev</li>
                <ol>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                </ol><br></br>
                <li>App-dev</li>
                <ol>
                    <li>Flutter</li>
                    <li>Dart</li>
                    <li>React</li>
                </ol>

            </ul>
        </div>
    );
};

export default Courses;