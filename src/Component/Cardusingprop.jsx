import React from 'react'

function Cardusingprop({name,imgUrl,width,para,height,button}) {
  return (
    <div className="card" style={{width,height}}>
  <img style={{height}} src={imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{para}</p>
    <a href="#" className="btn btn-primary">{button}</a>
  </div>
</div>
  )
}

export default Cardusingprop