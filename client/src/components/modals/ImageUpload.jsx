import { useState } from "react";

const ImageUpload = ({ onChange, value, label }) => {
  const [img, setImg] = useState(value);
  console.log(img);


  // const handleChange = useCallback((base64) => {
  //   onChange(base64);
  // },[onChange]);

  // const handleDrop = useCallback((files) => {
  //   const file = files[0];
  //   const reader = new FileReader();

  //   reader.onload = (event) => {
  //       setBase64(event.target.result);
  //       handleChange(event.target.result);
  //   };
  //   reader.readAsDataURL(file);
  // },[handleChange]);

  // const { getRootProps, getInputProps } = useDropzone({
  //   maxFiles: 1,
  //   onDrop: handleDrop,
  //   disabled,
  //   accept: {
  //       'image/jpeg': [],
  //       'image/jpg': [],
  //       'image/png': [] 
  //   }
  // });

  return (
    <div
            className= "w-full p-4 text-center border-2 border-dotted rounded-md border-neutral-700"
        // {...getRootProps({
        // })}
        >
        <input type="file" onChange={(e) => {
          setImg(e.target.files[0]);
          console.log(e.target.files[0]);
          console.log(img);
        }} />
    </div>
  )
}

export default ImageUpload
