// import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// const ListPage = () => {
//   return (
//     <div>
//       <h2>List Page</h2>
//       <ul>
//         <li>
//           <Link to="/items/1">Item 1</Link>
//         </li>
//         <li>
//           <Link to="/items/2">Item 2</Link>
//         </li>
//         <li>
//           <Link to="/items/3">Item 3</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// const ItemDetailsPage = ({ match }) => {
//   const itemId = match.params.itemId;

//   return (
//     <div>
//       <h2>Item Details Page</h2>
//       <p>Item ID: {itemId}</p>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Route exact path="/" component={ListPage} />
//         <Route path="/items/:itemId" component={ItemDetailsPage} />
//       </div>
//     </Router>
//   );
// };

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// // This is your ListPage component that displays a list of items.
// const ListPage = () => {
//   return (
//     <div>
//       <h2>List Page</h2>
//       <ul>
//         <li>
//           <Link to="/items/1">Item 1</Link>
//         </li>
//         <li>
//           <Link to="/items/2">Item 2</Link>
//         </li>
//         <li>
//           <Link to="/items/3">Item 3</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// // This is your ItemDetailsPage component that displays details for a specific item.
// // It receives the `match` prop from React Router, which includes the `params` object.
// // The `params` object contains all the parameters for the current route, in this case `itemId`.
// const ItemDetailsPage = ({ match }) => {
//   const itemId = match.params.itemId;

//   return (
//     <div>
//       <h2>Item Details Page</h2>
//       <p>Item ID: {itemId}</p>
//     </div>
//   );
// };

// // This is your main App component that sets up React Router.
// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Route exact path="/" component={ListPage} />
//         <Route path="/items/:itemId" component={ItemDetailsPage} />
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const ListPage = () => {
  return (
    <div>
      <h2>List Page</h2>
      <ul>
        <li>
          <Link to="/items/1">Item 1</Link>
        </li>
        <li>
          <Link to="/items/2">Item 2</Link>
        </li>
        <li>
          <Link to="/items/3">Item 3</Link>
        </li>
      </ul>
    </div>
  );
};

const ItemDetailsPage = ({ match }) => {
  const itemId = match.params.itemId;

  return (
    <div>
      <h2>Item Details Page</h2>
      <p>Item ID: {itemId}</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={ListPage} />
        <Route path="/items/:itemId" component={ItemDetailsPage} />
      </div>
    </Router>
  );
};

export default App;
