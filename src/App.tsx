import React from 'react';

const App: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-500">Block 1</div>
            <div className="bg-red-500">Block 2</div>
            <div className="bg-green-500">Block 3</div>
            <div className="bg-yellow-500">Block 4</div>
        </div>

    );
};

export default App;
