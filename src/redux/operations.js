import { useApolloClient, gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      price
      name
      description
      short_description
      sale_price
      images {
        src
      }
    }
  }
`;

const fetchProducts = async () => {
  const client = useApolloClient();

  const products = await client.query({
    query: GET_PRODUCTS,
  });

  return products;
};

export const getAllProducts = () => {
  async (dispatch) => {
    const product = await fetchProducts();
    console.log(products);
  };
};

export default GetProducts;
