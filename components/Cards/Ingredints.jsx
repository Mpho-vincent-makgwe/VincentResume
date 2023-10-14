const Ingredints = ({ingredientsList}) => {
    return (
      <div>
        <h3 className="mt-2 text-lg font-semibold">Ingredients:</h3>
        <ul className="list-disc list-inside">
          {ingredientsList.map(([ingredient, amount], index) => (
            <li key={index} className="text-gray-600">
              {ingredient}: {amount}
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Ingredints
