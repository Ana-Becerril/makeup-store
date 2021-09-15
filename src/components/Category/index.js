
const Category = ({onClick, category}) => {
    return (
      <div>
        <li onClick={onClick} className="category">
            {category}
        </li>
       </div>
    );
  }
  
  export default Category;