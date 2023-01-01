import React from 'react'

function CardUseEffect({details}) {
  return (
    <div className="card" style={{width: "18rem"}} >
        {/* optional chaining */}
    <img style={{height:"200px"}}src={details.picture?.large} className="card-img-top" alt=""/> 
    <div className="card-body">
      <h5 className="card-title">{details.name?.first}</h5>
      <p className="card-text">{details.cell}</p>
      <a href="#" className="btn btn-primary">love</a>
    </div>
  </div>
  )
}

export default CardUseEffect