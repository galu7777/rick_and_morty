import { useState } from "react";
import { connect,  useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../Redux/actions"; 
import Card from "../Card/Card";
import './Favorites.css'


const Favorites = ({myFavorites}) => {

    const dispatch = useDispatch();
    const [aux, setAux] = useState(false)

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(true)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }

    return (
        <div className="ctn-p">
            <div className="container-fav">
                <div className="container-select">
                    
                        <div className="select">
                            <select onChange={handleOrder} className="select-origin">
                                <option value="A">Ascendente</option>
                                <option value="D">Descendente</option>
                            </select>
                        </div>

                        <div className="select">
                            <select onChange={handleFilter} className="select-origin">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Genderless">Genderless</option>
                                <option value="unknown">unknown</option>
                                <option value="allCharacters">allCharacters</option>
                            </select>
                        </div>
                        
                </div>
            </div>
            <div className="container"> 

                {
                        myFavorites?.map(fav => {
                            return (
                                <Card
                                    key={fav.id}
                                    id={fav.id}
                                    name={fav.name}
                                    species={fav.species}
                                    gender={fav.gender}
                                    origin={fav.origin?.name}
                                    image={fav.image}
                                />
                            )
                        })
                }

            </div>                    
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);