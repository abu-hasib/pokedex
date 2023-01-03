import styled from "styled-components";
import { Dispatch, SetStateAction, useState, useRef } from "react";

const StyledBox = styled.div`
  .img-container {
    width: 100%;
    min-height: 100px;
    height: 100px;
    place-items: center;
    border-radius: 50%;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .hidden {
    display: none;
  }
`;
interface IImageBox {
  setImage: Dispatch<SetStateAction<any>>;
  image: any;
}
export const ImageBox = ({ setImage, image }: IImageBox) => {
  const [fileSrc, setFileSrc] = useState();
  const inputRef = useRef<any>(null);

  function handleClick(e: any) {
    e.preventDefault();
    inputRef.current?.click();
  }

  function handleFile(e: any) {
    setFileSrc(e.target?.result);
  }

  function handleChange() {
    const reader = new FileReader();
    reader.onloadend = handleFile;
    if (inputRef.current && inputRef.current.files) {
      reader.readAsDataURL(inputRef.current.files[0]);
      setImage([...image, inputRef.current.files[0]]);
    }
  }

  return (
    <StyledBox className="">
      <div className="grid img-container">
        <img className="" src={fileSrc} alt="image" />
      </div>
      <a
        href="settings"
        onClick={(e) => handleClick(e)}
        className="underline text-blue-tint-600"
      >
        add image
      </a>
      <input
        className="hidden"
        type="file"
        ref={inputRef}
        name="avatar"
        id="avatar"
        onChange={() => handleChange()}
        accept="image/png, image/jpeg, image/jpg"
      />
    </StyledBox>
  );
};
