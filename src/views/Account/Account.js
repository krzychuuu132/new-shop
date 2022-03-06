import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLazyQuery, gql } from '@apollo/client';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Container } from 'styled-bootstrap-grid';
import Breadcrumb from 'components/molecules/Breadcrumb/Breadcrumb';
import Section from 'components/atoms/Section/Section';

const GET_ACCOUNT_DETAILS = gql`
  query Account($id: ID!) {
    account(id: $id) {
      name
      surname
      email
    }
  }
`;

const Account = (props) => {
  const [sendAccountData, { loading, error, data }] =
    useLazyQuery(GET_ACCOUNT_DETAILS);

  useEffect(async () => {
    await sendAccountData({
      variables: {
        id: '6224c57eedcb265c18bbfadd',
      },
    });
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`Error! ${error.message}`}</p>;

  return (
    <MainTemplate>
      <Container>
        {data ? (
          <>
            <Breadcrumb title={`Witaj ${data.account.name}!`} />
            <Section>
              <h2>Dane twojego konta :</h2>
              <h3>Imię: {data.account.name}</h3>
              <h3>Nazwisko: {data.account.surname}</h3>
              <h3>Imię: {data.account.email}</h3>
            </Section>
          </>
        ) : null}
      </Container>
    </MainTemplate>
  );
};

Account.propTypes = {};

export default Account;
