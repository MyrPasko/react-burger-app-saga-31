import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../shared/utility";

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
};


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const addIngredient = (state, action) => {
    const addUpdatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
    const addUpdatedIngredients = updateObject(state.ingredients, addUpdatedIngredient);
    const addUpdatedState = {
        ingredients: addUpdatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    };
    return updateObject(state, addUpdatedState);
};

const removeIngredient = (state, action) => {
    const addUpdatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1};
    const addUpdatedIngredients = updateObject(state.ingredients, addUpdatedIngredient);
    const addUpdatedState = {
        ingredients: addUpdatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    };
    return updateObject(state, addUpdatedState);
};

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: action.ingredients,
        totalPrice: 4,
        error: false,
        building: false
    });
};

const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, {error: true});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        /** The old way without helper function */
        // return {
        //     ...state,
        //     ingredients: {
        //         ...state.ingredients,
        //         [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        //     },
        //     totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
        // };

        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        /** The old way without helper function */
        // return {
        //     ...state,
        //     ingredients: {
        //         ...state.ingredients,
        //         [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        //     },
        //     totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
        // };

        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
        /** The old way without helper function */
        // return {
        //     ...state,
        //     ingredients: action.ingredients,
        //     totalPrice: 4,
        //     error: false
        // };

        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
        /** The old way without helper function */
        // return {
        //     ...state,
        //     error: true
        // };

        default: return state;
    }
};

export default reducer;



