import { useState } from "react";

const SearchForm = ({ onHandleSubmit }) => {
  const [query, setQuery] = useState("");
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!query.trim()) {
      return alert("Cannot be empty");
    }
    onHandleSubmit(query);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input type="text" value={query} name="query" onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;

// const SearchForm = () => {
//   return (
//     <div>
//       <form action="">
//         <input type="text" name="query" />
//         <button type="submit">Search</button>
//       </form>
//     </div>
//   );
// };

// export default SearchForm;
