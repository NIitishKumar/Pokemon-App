import './App.css';
import React from 'react';
import { useEffect, useState } from 'react'
// import Pokemon from 'pokemon-images';
import Pokemon from './pokeCard';
import InfiniteScroll from "react-infinite-scroll-component";




function App() {

  

  const [pokemon, setpokemon] = useState([])
  const [onSearch, setonSearch] = useState(true)
  const [datalimit, setdatalimit] = useState(10)
  const [count, setcount] = useState(1)
  const [bookmarkArr, setbookmarkArr] = useState([])
  const [isBookmark, setisBookmark] = useState(false)

  useEffect( async () => {
    getPokemonData()
  }, [])
  // useEffect(() => {
  //   setcount(count + 1)
  // }, [count])


  const getPokemonData = async () => {
    setisBookmark(false)
    setdatalimit(datalimit + 10)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${datalimit}%27`)
    const data = await response.json()
    setpokemon(data.results)
  }

  const handleChange = async (e) => {
    if (!e.target.value) {
    }
    if (e.target.value.length > 3) {
      setonSearch(false)
      setpokemon('')
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${e.target.value}`)
      const data = await response.json()
      if (data) { setonSearch(false);setpokemon(data) }
      
    } else {

      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000%27')
      const data = await response.json()
      setpokemon(data.results)
      setonSearch(true)
      
    }
   
  }

  const handleBookmark = (e, id, name) => {
    // if ({ id, name } in bookmarkArr) {
    //   alert("Name exists")
    // }
    // console.log(bookmarkArr);
    // // bookmarkArr.push({'id':id,'name':name})
    // if (e.target.className == 'fa fa-bookmark-o' && id) {
    //   e.target.className = 'fa fa-bookmark'
    // } else {
    //   e.target.className = 'fa fa-bookmark-o'
    // }

    if (!bookmarkArr.includes(id)) {
      setbookmarkArr([...bookmarkArr, id])
    } else {
      setbookmarkArr(bookmarkArr.filter(ele => ele !== id))
    }
  }
  
  const getBookmark = () => {
    setisBookmark(true)
    if (bookmarkArr) {
        // bookmarkArr.map(ele => {
        //   const response
        // })
    }

  }


  return (
    <div class="container">
            <button type="button" class="btn btn-primary btn-sm" onClick={getPokemonData} >All Pokemon</button>
      <input className='mt-2' type='search' style={{ marginLeft: '40%' }} placeholder="Enter Full Name" onChange={handleChange} />
      <button type="button" class="btn btn-dark btn-sm" onClick={getBookmark} >Bookmark</button>

      <div class="row justify-content-start">
        {isBookmark ?
          bookmarkArr.map(id => {
            return <>
                  <div class="col-3 mt-2">
                      <div class="card" style={{ width: '15rem' }}>
                        <img class="card-img-top " src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="Card image cap" style={{height:'50%', width:'50%'}} />
                          <div class="card-body">
                                {/* <h5 class="card-title">{pokemon.name}</h5> */}
                                <h5 class="card-title">#{id}</h5>
                                
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            {/* <a href={'pokemon/' + id}class="btn btn-primary"></a> */}
                          </div>
                        </div>
                    </div>
              </>
          }) :
          (onSearch ?
          <InfiniteScroll
            dataLength={pokemon.length}
            next={getPokemonData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            className='row justify-content-start'
          >
            {pokemon.map(ele => {
              console.log(ele);
                return (
                  <Pokemon ele={ele} id={ele.id} handleBookmark={handleBookmark} bookmarkArr={bookmarkArr} />
                  )
          })}</InfiniteScroll> :
          pokemon ? (<div class="col-3 mt-2">
                          <div class="card" style={{ width: '15rem' }}>
                            <img class="card-img-top " src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="Card image cap" style={{height:'50%', width:'50%'}} />
                              <div class="card-body">
                                    <h5 class="card-title">{pokemon.name}</h5>
                                    <h5 class="card-title">#{pokemon.id}</h5>
                                    
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                <a href={'pokemon/' + pokemon.id + '/' + pokemon.name} className='btn btn-primary' >{pokemon.name}</a>
                              </div>
                            </div>
                  </div>) :
                    'Oops No Data Found ! Please Write Full Name ')}
                
        </div>
      </div>
  );
}

export default App;
