import { useEffect, useState } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import { fbStorage } from '../firebase-config';
import imgFood from '../assets/img/food.jpg';

const useImgUrl = (imgName) => {
  const [imgUrl, setImgUrl] = useState(imgFood);
  const imageFolderRef = ref(fbStorage, `images/${imgName}.jpg`);

  const getImgUrl = () =>
    getDownloadURL(imageFolderRef)
      .then((url) => setImgUrl(url))
      .catch(() => setImgUrl(imgFood));

  useEffect(() => {
    getImgUrl();

    return getImgUrl;
  }, []);

  return imgUrl;
};
export default useImgUrl;
