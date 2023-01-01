import React from 'react'

function Card() {
  return (
    <div className="card" style={{width: "18rem"}} >
  <img style={{height:"200px"}}src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg" className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">Thor</h5>
    <p className="card-text">He is the hero in marvel.He tends to be usings his hammer as a superpower.</p>
    <a href="#" className="btn btn-primary">love</a>
  </div>
</div>
  )
}

export default Card