
function FoodCart({item}) {
    const {name,image,price,recipe}=item;
  return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
     <figure><img src={image} alt="image" /></figure>
     <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">${price}</p>
    <div className="card-body flex flex-col items-center">
        <h2 className="card-title ">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
        <button className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-4 border-orange-400 ">Add To Cart</button>
        </div>
    </div>
    </div>
        </div>
  )
}

export default FoodCart;