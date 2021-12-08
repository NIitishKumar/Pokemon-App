import React from 'react'

const Pokemon = ({ ele, handleBookmark, bookmarkArr}) => {
  
  const id = ele.url.split('/')[6]

  return <>
        <div class="col-3 mt-2">
            <div class="card" style={{ width: '20rem' }}>
                <i class={`fa fa-bookmark${bookmarkArr.includes(id) ? "" : "-o"}`} id={{'id' : id, 'name' : ele.name}} onClick={(e) => handleBookmark(e,id, ele.name)} name={ele.name} aria-hidden="true"></i>
                <img class="card-img-top " src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="Card image cap" style={{height:'50%', width:'50%'}} />
            <div class="card-body">
                <h5 class="card-title">{ele.name}</h5>
                <h5 class="card-title">#{id ? id : ele.id}</h5>
          <a href={'pokemon/' + id + '/' + ele.name} class="btn btn-primary">{ ele.name}</a>
            </div>
          </div>
        </div>
    </>
}

export default Pokemon;