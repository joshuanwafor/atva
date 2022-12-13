import {
  TFeaturedEvent,
  TUserItemsGetEvent,
  TUserItemsResponse,
} from '../../interface/requests';
import axios from '../../config/request';
import {UserListTypes} from '../../interface/models';
import {API_URI} from '../../config/config';

// User list endpoints
export const getUserList = async (
  type: UserListTypes = 'favorite',
): Promise<TUserItemsGetEvent> => {
  return await axios.get<TUserItemsResponse, TUserItemsGetEvent>(
    `/user/list?type=${type}&page=1`,
  );
};

export const postUserListItem = async (
  title: string,
  item_id: string,
  type: UserListTypes = 'favorite',
): Promise<any | undefined> => {
  let listItemData = {
    title: title,
    type: type,
    itemId: item_id,
  };

  try {
    let res = await fetch('https://astra-tv-api.herokuapp.com/user/list', {
      method: 'PUT',
      mode: 'cors',
      body: JSON.stringify(listItemData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: axios.defaults.headers.common['Authorization'],
      },
    });
    if (res.status == 200) {
      let _temp = await res.json();
      return _temp;
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const deleteUserListItem = async (
  id: string,
): Promise<TFeaturedEvent> => {
  return await axios.delete(`/user/list/${id}`);
};
