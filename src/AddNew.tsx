import { Formik } from "formik";
import { Dispatch, SetStateAction, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { ImageBox } from "./ImageBox";
import { StyledModal, StyledOverlay } from "./shared/Styled";

export interface ICard {
  isShow: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  setPokemons: Dispatch<SetStateAction<any>>;
  color?: string;
}

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
  .i-grp {
    margin-top: 1em;
    align-items: center;
    input {
      margin-left: 1em;
      padding: 4px 8px;
      outline: none;
    }
  }
  button {
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
    margin-top: 1em;
  }
`;

export function AddNew({ isShow, setShow, setPokemons, color }: ICard) {
  const [image, setImage] = useState<string>("");
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
                  fill: "rgba(255, 255, 255, 1);transform: ;msFilter:"
                }}
              >
                <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
              </svg>
            </p>
          </div>
          <div className="details">
            <h3>Add Pokemon</h3>
            <Formik
              initialValues={{
                name: "",
                sprites: {
                  other: {
                    dream_world: {
                      front_default: ""
                    }
                  }
                },
                abilities: "",
                moves: ""
              }}
              onSubmit={async (values, { setSubmitting, setErrors }) => {
                values.sprites.other.dream_world.front_default = image;
                console.log(values);
                setPokemons((prev: any) => [...prev, values]);
                setShow(false);
              }}
            >
              {({ handleChange, handleSubmit, isSubmitting }) => (
                <form className="w-full mt-6" onSubmit={handleSubmit}>
                  <ImageBox {...{ image, setImage }} />
                  <div className="flex i-grp">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Name
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      id="name"
                      placeholder="name"
                      required
                    />
                  </div>
                  <div className="flex i-grp">
                    <label
                      htmlFor="abilities"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Abilities
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      id="abilities"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="abilities"
                      required
                    />
                  </div>
                  <div className="flex i-grp">
                    <label
                      htmlFor="moves"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Moves
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      id="moves"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="moves"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-[#8456EC] hover:bg-purple-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                  >
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </StyledCard>
      </StyledModal>
    </StyledOverlay>,
    document.getElementById("portal")!
  );
}
