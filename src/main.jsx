import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { PictureProvider } from "./contexts/pictures.context";
import { SearchProvider } from "./contexts/search.context";
import { FilterProvider } from "./contexts/filter.context";
import { SearchQueriesProvider } from "./contexts/search-queries.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PictureProvider>
      <SearchProvider>
        <FilterProvider>
          <SearchQueriesProvider>
            <App />
          </SearchQueriesProvider>
        </FilterProvider>
      </SearchProvider>
    </PictureProvider>
  </BrowserRouter>
);
// ReactDOM.render(
//   <BrowserRouter>
//     <PictureProvider>
//       <SearchProvider>
//         <FilterProvider>
//           <SearchQueriesProvider>
//             <App />
//           </SearchQueriesProvider>
//         </FilterProvider>
//       </SearchProvider>
//     </PictureProvider>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
