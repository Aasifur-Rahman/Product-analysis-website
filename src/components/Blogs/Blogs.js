import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='mt-3'>Blogs</h2>
            <br />
            <h3>What is Context API?</h3>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                Context API is new to react or and easier version like data passes the same way as "prop drilling" but it has a container of it.</p>

            <h3>What is Semantic tag?</h3>
            <p>Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a p tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.There are lots of tags that are semantic tags like header which defines the place of header section inside it you can place nav. Another one is section which can create a different new part where you can saperate them. There are lot more than this here are some that is commonly used section, article, aside, footer etc.</p>

        </div>
    );
};

export default Blogs;