const Category = ({category}) => {
    return (
      <div>
        <p className=" transform translate-x-0 hover:translate-x-2 transition-transform duration-300 ease-in-out">
          <b>Category:</b> {category}
        </p>
      </div>
    );
}

export default Category
