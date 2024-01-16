const Card =({term, definition})=>{

    return (
      <div className="card">
        <div className="card-title">
            {term}
        </div>

        <div className="card-definition">
            {definition}
        </div>
      </div>
    );
}
  
export default Card;