import { Dispatch, SetStateAction } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { StyledModal, StyledOverlay } from "./shared/Styled";
import { ItemType } from "./types";

const StyledCard = styled.div`
  background-color: ${(props: any) => props.color};
  height: 100%;
  padding: 1em 0.5em;
  .name {
    color: #fff;
    text-transform: capitalize;
  }
  .avatar {
    place-items: center;
    height: 40%;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .top {
    align-items: center;
  }
  .details {
    margin-top: -2em;
    text-align: center;
    background-color: #fff;
    height: 60%;
    padding-block: 3em;
    border-radius: 12px;
    .pill {
      background: ${(props: any) => props.color};
      border-radius: 24px;
      padding: 0.2em 0.3em;
      /* width: 1em; */
    }
    .abilities {
      margin: 0 auto;
      align-items: center;
      justify-content: space-evenly;
      color: #fff;
      text-transform: capitalize;
    }
  }
  h3 {
    color: ${(props: any) => props.color};
    padding-block: 0.5em;
  }
  .move {
    color: #747474;
  }
`;

export interface ICard {
  isShow: boolean;
  item: ItemType;
  setShow: Dispatch<SetStateAction<boolean>>;
  color?: string;
}
export function Card({ isShow, item, setShow, color }: ICard) {
  if (!isShow) return null;
  return createPortal(
    <StyledOverlay>
      <StyledModal>
        <StyledCard color={color}>
          <div className="flex top">
            <p className="pointer" onClick={() => setShow(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(255, 255, 255, 1);transform: ;msFilter:;"
                }}
              >
                <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
              </svg>
            </p>
            <h1 className="name">{item.name}</h1>
          </div>
          <div className="grid avatar">
            <img src={item.sprites.other.dream_world.front_default} alt="" />
          </div>
          <div className="details">
            <p className="flex abilities">
              {typeof item.abilities !== "string"
                ? item?.abilities?.map(({ ability }) => (
                    <p className="pill">{ability.name}</p>
                  ))
                : item.abilities}
            </p>
            <h3>Moves</h3>
            <div>
              {typeof item.moves !== "string"
                ? item?.moves
                    .slice(0, 4)
                    .map(({ move }: any) => <p className="move">{move.name}</p>)
                : item.moves}
            </div>
          </div>
        </StyledCard>
      </StyledModal>
    </StyledOverlay>,
    document.getElementById("portal")!
  );
}
