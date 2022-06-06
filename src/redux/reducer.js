import types from './types';

const getProducts = {
  products: [],
  loading: true,
};

const shopActivities = {
  basketProducts: [],
  price: 0,
  orderDetails: {
    delivery: 'Kurier – InPost, UPS, FedEx, DTS',
    payment: 'Płatność online',
    name: '',
    street: '',
    code: '',
    town: '',
  },
};

const productsReducer = (state = getProducts, action) => {
  switch (action.type) {
    case types.ADD_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };

    case types.LOADING:
      return {
        loading: action.loading,
      };
    default:
      return state;
  }
};

const shopActivitiesReducer = (state = shopActivities, action) => {
  switch (action.type) {
    case types.ADD_TO_SHOPPING_CARD:
      return {
        ...state,
        basketProducts: [...state.basketProducts, action.product],
      };
    case types.CHANGE_QUANTITY: {
      return {
        ...state,
        basketProducts: state.basketProducts.map((product) =>
          product.id === action.id ? { ...product, quantity: product.quantity + action.quantity } : product
        ),
      };
    }

    case types.CHANGE_PRICE: {
      return {
        ...state,
        price: state.basketProducts.reduce((prev, curr) => {
          return prev * 1 + curr.price * curr.quantity;
        }, []),
      };
    }

    case types.DELETE_FROM_SHOPPING_CARD: {
      return {
        ...state,
        basketProducts: state.basketProducts.filter((basketProduct) => basketProduct.id !== action.id),
      };
    }

    case types.REMOVE_PRODUCTS_FROM_BASKET: {
      return {
        ...state,
        basketProducts: [],
      };
    }
    case types.CHANGE_ORDER_VALUES: {
      const { name, value } = action;
      const orderDetailsObjectCopy = Object.assign(state.orderDetails, {});
      orderDetailsObjectCopy[name] = value;
      return {
        ...state,
        orderDetails: orderDetailsObjectCopy,
      };
    }
    default:
      return state;
  }
};

export default { productsReducer, shopActivitiesReducer };
