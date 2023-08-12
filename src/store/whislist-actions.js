import { setWhishlistState } from './whishlist-slice';

const userDataURL = 'https://react-b3fdf-default-rtdb.europe-west1.firebasedatabase.app/users.json';

export const getWhishlistData = (currentUserId) => {
  return (dispatch) => {
    if (!currentUserId) return;

    const getWhishlistData2 = async () => {
      const getWhishlist = await fetch(userDataURL);

      if (!getWhishlist.ok) {
        throw new Error('Error');
      }

      const responseWhishlist = await getWhishlist.json();

      const fetchWhishlist = {
        products: [],
      };
      fetchWhishlist.products.push(...responseWhishlist[currentUserId]);
      dispatch(setWhishlistState(fetchWhishlist));
    };

    getWhishlistData2();
  };
};

export const sendWhishlistData = (uid, whishlist) => {
  return async () => {
    const sendData = async () => {
      const response = await fetch(userDataURL, {
        method: 'PATCH',
        body: JSON.stringify({
          [uid]: [...whishlist],
        }),
      });

      if (!response.ok) {
        throw new Error('Fail');
      }
    };
    try {
      await sendData();
    } catch (error) {
      console.log(error);
    }
  };
};
