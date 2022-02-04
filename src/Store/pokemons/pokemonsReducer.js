import axiosInstance from "../../HttpServices/axiosInstance";

export const getPokemonAction = (payload) => ({
    type: 'GET_POKEMONS',
    payload: payload,
})


export const getPokemonThunk = () => async (dispatch) => {
    try {
      const response = await axiosInstance.get('pokemon');
      const data = response.data.results
      dispatch(getPokemonAction(data));
    } catch (error) {
      console.log(error);
    }
  };

const initialState = {
    pokemons: [],
};

const pokemonsReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'GET_POKEMONS':
            return {
                ...state,
                pokemons: action.payload,
            };
        default:
            return state
    }
}
export default pokemonsReducer