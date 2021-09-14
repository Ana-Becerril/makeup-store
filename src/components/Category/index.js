
const Category = ({onClick, name}) => {
    return (
      <div>
        <li onClick={onClick} className="category">
            {name}
        </li>
       </div>
    );
  }
  
  export default Category;