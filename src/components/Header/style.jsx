import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  height: 65px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 2px 0 10px #00000050;

  nav ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    gap: 15px;

    li {
      font-size: 1.5rem;

      a {
        text-decoration: none;
        font-weight: 500;
        color: #000;
        transition: all 0.2s ease;
        display: inline-block;
        position: relative;

        &::before {
          content: '';
          width: 0;
          background-color: #000;
          height: 0.2rem;
          position: absolute;
          bottom: -3px;
          transition: all 0.2s ease;
          left: -2.5px;
        }

        &:hover::before {
          width: 110%;
        }
      }
    }
  }
`;
