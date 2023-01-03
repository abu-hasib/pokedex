import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { ItemType } from "./types";

const StyledPokemon = styled.div`
  position: relative;
  width: 200px;
  height: 150px;
  border: ${(props: any) => `2px solid ${props.color}`};
  border-radius: 7px;
  padding-block: 1px;
  background: ${(props: any) => props.color};
  .avatar {
    height: 110px;
    background: #fff;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    img {
      object-fit: cover;
      max-width: 100%;
      max-height: 100%;
    }
  }
  .name {
    color: #ffffff;
    text-transform: capitalize;
  }
  .trash {
    position: absolute;
    right: 5%;
    top: 3%;
  }
`;

interface IPokemon {
  el: ItemType;
  color?: string;
  setPokemons: Dispatch<SetStateAction<ItemType[]>>;
}

export function Pokemon({ el, color, setPokemons }: IPokemon) {
  const [isShow, setShow] = useState(false);
  const handleDelete = (id: number) => {
    setPokemons((prev) => {
      console.log("$$: ", typeof prev);
      const modifiedArray = prev.filter((el) => el.id !== id);
      console.log("modified", modifiedArray);
      return modifiedArray;
    });
  };
  return (
    <>
      <StyledPokemon
        className="grid pointer"
        color={color}
        onClick={() => setShow(!isShow)}
      >
        <div className="trash pointer" onClick={() => handleDelete(el.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 1);transform: ;msFilter:" }}
          >
            <path d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 16H7V8h10v12z"></path>
          </svg>
        </div>
        <div className="avatar">
          <img src={el?.sprites?.other?.dream_world?.front_default} alt="" />
        </div>
        <p className="name">{el.name}</p>
      </StyledPokemon>
      <Card {...{ isShow, setShow }} color={color} item={el} />
    </>
  );
}
