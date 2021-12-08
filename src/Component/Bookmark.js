import React from 'react'
import { useParams } from 'react-router';


const Bookmark = () => {

    const { id, name } = useParams()
    console.log(id,name);
    

    // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    // const data = response.json()

    // <div className='container'>
    //         <div class="row justify-content-start">
    //             <div class="col-3 mt-2">
    //                 <div class="card" style={{ width: '20rem' }}>
    //                     <img class="card-img-top " src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="Card image cap" style={{height:'50%', width:'50%'}} />
    //                     <div class="card-body">
    //                         <h5 class="card-title">{name}</h5>
    //                         <h5 class="card-title">#{id }</h5>
                        
    //                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //                         <a href="#" class="btn btn-primary">Go somewhere</a>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>

    return <>
        <div class="profile-card-6" style={{paddingTop : '80px', height:'400px'}} ><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} class="img img-responsive" style={{width : '150px', paddingBottom:'100px', paddingLeft:'20px'}} />
        
            <div class="profile-name text-dark">{name}

            </div>


        <div class="profile-overview">
            <div class="profile-overview">
                <div class="row text-center">
                    <div class="col-xs-4 text-dark">
                            <h3>#{id }</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    </>
}

export default Bookmark;