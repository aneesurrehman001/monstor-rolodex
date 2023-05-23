import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input
    // In the line below what we just did is called the string interpolation in javascript.
    // Also what we did is we have given a hard coded class name to the component which is "search-box" which applies to the search box element by default.
    // Following the "search-box" in the interpolation we are passing the class name for the current instance of the component in our application.
    // So it means if we don't pass the second one the default ("search-box") will be used as class name.
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
