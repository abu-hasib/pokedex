import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: #fff;
  position: sticky;
  inset: 0;
  z-index: 9;
  height: 56px;
  background-color: #fff;
  transition: background 250ms ease-in;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  .nav {
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  p {
    border: 1px solid transparent;
    border-radius: 12px;
    font-size: 16px;
    margin-bottom: 0;
    padding: 8px 16px;
    text-align: center;
    transition: all 0.2s ease-in-out;
    white-space: nowrap;
    background: #f57d31;
    border-color: #fff;
    color: #fff;
  }
`;

interface INav {
  setShow: Dispatch<SetStateAction<boolean>>;
}

export function Nav({ setShow }: INav) {
  return (
    <StyledHeader className="flex header">
      <div className="flex container nav">
        <div className="brand">
          <h1>Cribmon</h1>
        </div>
        <nav>
          <ul className="flex">
            <li>
              <p className="flex pointer" onClick={() => setShow(true)}>
                Create +
              </p>
            </li>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
}
