import React from "react";

const App = () => {
    return (
        <div>
            <form className='flex p-10'>
                <input 
                    type="text" 
                    placeholder="Enter Notes Heading"
                    className="p-5 border-2"
                    id="head"

                    />
                <input 
                    type="text" 
                    placeholder="Write Details" 
                    className="p-5 border-2"
                    id="tail"

                    />
        
            </form>
        </div>
    );
};

export default App;
