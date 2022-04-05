import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='mt-3'>This is blogs section</h2>
            <br />
            <h3>What is Context Api?</h3>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.</p>

            <h3>What is Semantic tag</h3>
            <p>Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a p tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.

                On the flip side of this equation, tags such as  are not semantic. They define only how the text should look (bold or italic), and don't provide any additional meaning to  </p>



        </div>
    );
};

export default Blogs;