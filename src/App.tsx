import React from "react";

const App: React.FC = () => {
  return (
    <>
      <div className="m-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:bg-red-500 xl:grid-cols-4 gap-4">
        <div className="bg-red-500 p-4">Item 2</div>
        <div className="bg-indigo-500 p-4">Item 5</div>
        <div className="bg-blue-500 p-4">Item 1</div>
        <div className="bg-green-500 p-4">Item 3</div>
        <div className="bg-yellow-500 p-4">Item 4</div>
        <div className="bg-purple-500 p-4">Item 6</div>
      </div>
      <div className="m-10 grid grid-cols-3 grid-rows-2 gap-4">
        <div className="col-span-2 bg-blue-500">Spans 2 columns</div>
        <div className="bg-red-500">Normal 1 column span</div>
        <div className="col-span-3 bg-green-500">Spans all 3 columns</div>
        <div className="row-span-2 bg-yellow-500">Spans 2 rows</div>
      </div>
    </>
  );
};

export default App;
