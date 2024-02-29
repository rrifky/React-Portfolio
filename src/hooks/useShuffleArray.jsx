import { useState, useEffect } from 'react';

const useShuffleArray = (array) => {
  const [shuffledArray, setShuffledArray] = useState([]);

  useEffect(() => {
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const shuffled = shuffleArray(array);
    setShuffledArray(shuffled);
  }, [array]);

  return shuffledArray;
};

export default useShuffleArray;
