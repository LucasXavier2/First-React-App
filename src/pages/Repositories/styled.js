import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 1.7rem;
  font-family: sans-serif;
  color: #333;
  margin-bottom: 35px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  font-family: sans-serif;
  width: 96%;
`;


export const ListItem = styled.li`
  margin: .9rem .6rem;
  background: #457B9D;
  color: #F1FAEE;
  font-weight: 600;
  padding: 0.8rem;
  border-radius: 0.25rem;
`;


export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  border-radius: .25rem;
  text-align: center;
  margin: 2rem auto;
  background: #1D3557;
  color: #F1FAEE;
  font-weight: 600;
  padding: .5rem 0;
  text-decoration: none;
`