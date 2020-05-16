import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1 `
  font-weight: 700;
`

export const Form = styled.form `
  display: flex;
  margin-top: 40px;
  max-width: 700px;

  input {
    flex: 1;
    height: 45px;
    padding: 10px;
    border: 0;
    border-radius: 5px 0 0 5px;

    ::placeholder {
      color: #a3a3a8;
    }
  }

  button {
    width: 150px;
    border: 0;
    border-radius: 0 5px 5px 0;
    background: #944acb;
    color: white;
    transition: .2s;

    &:hover {
      background: ${shade(0.2, '#944acb')}
    }
  }

`
export const UserInfos = styled.div`
  max-width: 700px;
  background: #fff;
  display: block;
  margin-top: 30px;
  padding: 20px;
  border-radius: 5px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  p {
    padding: 0 15px;
    color: #ccc;
  }

  img {
    height: 90px;
    width: 90px;
    border-radius: 50%;
  }
`
