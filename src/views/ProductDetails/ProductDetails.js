import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProductsSection } from 'views/Products/Products.styles';
import { Button } from 'components/atoms/Button/Button.styles';
import { ProductDetailsImage, ProductPrice, ProductsDetailsContent, Wrapper } from './ProductDetails.styles';
import Breadcrumb from 'components/molecules/Breadcrumb/Breadcrumb';
import Select from 'components/atoms/Select/Select';
import { gql, useLazyQuery } from '@apollo/client';
import { Error } from 'mongoose';

const ProductQuantity = [1, 2, 3, 4];

const GET_PRODUCT = gql`
  query product($id: ID!) {
    product(id: $id) {
      name
      description
      price
      images {
        src
      }
      attributes {
        id
        options
      }
    }
  }
`;

const ProductDetails = () => {
  const [productSize, setProductSize] = useState('XS');
  const [productQuantity, setProductQuantity] = useState(1);
  const [productData, setProductData] = useState({});

  // QUERY PRODUCT DATA
  const [sendData, { loading }] = useLazyQuery(GET_PRODUCT);

  // REDUX STATE
  const { products } = useSelector((state) => state.productsReducer);
  const { basketProducts } = useSelector((state) => state.shopActivitiesReducer);

  const dispatch = useDispatch();

  const { id } = useParams();

  const product = products.find((product) => product.id === id);

  const { name, description, price, images, attributes } = productData;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await sendData({
          variables: {
            id,
          },
        });
        setProductData(data.product);
      } catch (err) {
        throw new Error(err);
      }
    };
    fetchData();
  }, []);

  const handlechangeSize = (e) => setProductSize(e.target.value);

  const handleChangeQuanity = (e) => setProductQuantity(parseInt(e.target.value));

  const handleAddToBasket = () => {
    const newProduct = Object.assign({}, product);
    if (attributes.length > 0) newProduct.size = productSize;
    newProduct.quantity = productQuantity;

    const productExist = newProduct.hasOwnProperty('size')
      ? basketProducts.find((product) => product.id === id && product.size === productSize)
      : basketProducts.find((product) => product.id === id);

    if (productExist) {
      return (
        dispatch({
          type: 'CHANGE_QUANTITY',
          id: productExist.id,
          quantity: productQuantity,
        }),
        dispatch({ type: 'CHANGE_PRICE' })
      );
    }

    dispatch({ type: 'ADD_TO_SHOPPING_CARD', product: newProduct });
    dispatch({ type: 'CHANGE_PRICE' });
  };

  const removeHTMLTags = (str) => {
    var tmp = document.createElement('p');
    tmp.innerHTML = str;
    return tmp.textContent || tmp.innerText || '';
  };

  console.log(productData);

  return (
    <MainTemplate>
      <Container>
        <Breadcrumb title={`Kup ${name} z dostawą za darmo!`} />
        <ProductsSection>
          {productData ? (
            <Wrapper>
              <Row alignItems="center">
                <Col lg="4">
                  {images && (
                    <ProductDetailsImage>
                      {images.map((image) => (
                        <img src={image.src} />
                      ))}
                    </ProductDetailsImage>
                  )}
                </Col>
                <Col lg="7" lgOffset="1">
                  <ProductsDetailsContent>
                    <h2>{name}</h2>
                    <p>{removeHTMLTags(description)}</p>

                    <ProductPrice>
                      <Button onClick={handleAddToBasket}>Dodaj do koszyka</Button>

                      {attributes > 0 ? <Select options={attributes[0].options} value={productSize} onChange={handlechangeSize} /> : null}

                      <Select options={ProductQuantity} value={productQuantity} onChange={handleChangeQuanity} />
                      <p className="h1">
                        <span>{price} zł</span>
                      </p>
                    </ProductPrice>
                  </ProductsDetailsContent>
                </Col>
              </Row>
            </Wrapper>
          ) : (
            loading
          )}
        </ProductsSection>
      </Container>
    </MainTemplate>
  );
};

ProductDetails.propTypes = {};

export default ProductDetails;
