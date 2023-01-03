import { useState, useRef } from "react";

export const ImageBox = ({ setImage, image }) => {
  const [fileSrc, setFileSrc] = useState();
  const inputRef = useRef(null);

  function handleClick(e) {
    e.preventDefault();
    inputRef.current?.click();
  }

  function handleFile(e) {
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
    <div className="flex flex-col items-center justify-center">
      <div className="mx-auto  rounded-full">
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
    </div>
  );
};
