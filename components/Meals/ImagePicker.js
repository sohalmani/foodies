'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import classes from './ImagePicket.module.css';

export default function ImagePicker({ label, name }) {
  const imageFilePickerRef = useRef();
  const [pickedImage, setPickedImage] = useState(null);

  function handlePickImageButtonClick() {
    imageFilePickerRef.current.click();
  }

  function handlePickedImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>{pickedImage ? <Image src={pickedImage} alt="The image selected by the user." fill /> : <p>No image picked yet.</p>}</div>
        <input
          type="file"
          ref={imageFilePickerRef}
          id={name}
          className={classes.input}
          name={name}
          accept="image/png, image/jpeg"
          onChange={handlePickedImageChange}
          required
        />
        <button type="button" className={classes.button} onClick={handlePickImageButtonClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
