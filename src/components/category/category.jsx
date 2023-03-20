// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Category = () => {
//   const [categories, setCategories] = useState([]);
  

//   useEffect(() => {
//     fetch("https://api.escuelajs.co/api/v1/categories")
//       .then((res) => res.json())
//       .then((json) => {
//         console.log(json);
//         setCategories(json);
//       });
//   }, []);

//   const categoryHandler = (category) => {
//     console.log(category);
//     fetch("https://api.escuelajs.co/api/v1/categories" + category)
//       .then((res) => res.json())
//       .then((json) => {
//         console.log(json);
//       });
//   };

//   return (
//     <div>
//       <ul className="flex  justify-between">
//         {categories.map((category, i) => (
//           <li
//             onClick={() => categoryHandler(category)}
//             className="cursor-pointer text-gray-600 hover:text-black"
//             key={i}
//           >
//             {category.name}
//           </li>
//         ))}
//       </ul>
      
//     </div>
//   );
// };

// export default Category;
