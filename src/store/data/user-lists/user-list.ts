import {observable, action, runInAction} from 'mobx';
import {
  getUserList,
  postUserListItem,
  deleteUserListItem,
} from '../../../services/user/user-list';
import {UserItem, UserListTypes} from '../../../interface/models';
import {useNotify} from '../../../hooks/notify';

export class UserListStore {
  @observable
  data: {
    items: UserItem[];
    loading: boolean;
    loaded: boolean;
  } = {loading: true, items: [], loaded: false};

  list_type: UserListTypes;
  constructor(type: UserListTypes) {
    this.list_type = type;
  }

  @action
  async load() {
    let res = await getUserList(this.list_type);
    runInAction(() => {
      if (res.status == 200) {
        this.data.loaded = true;
        this.data.items = res.data.docs;
      }
      this.data.loading = false;
    });
  }

  @action
  async add(item_id: string, title: string) {
    let {show} = useNotify();
    try {
      let res = await postUserListItem(title, item_id, this.list_type);
      show('added ' + title + ' to list');
      this.load();
    } catch (error) {
      console.log('Failed to add item: ' + item_id + ' to list successfully');
    }
  }

  @action
  async delete(item_id: string) {
    let newlist = [...this.data.items.filter((v) => v.itemId !== item_id)];

    let {show} = useNotify();
    try {
      await deleteUserListItem(item_id);
      show('removed item from list');
      this.load();
      runInAction(() => {
        this.data.items = newlist;
      });
    } catch (e) {
      console.log(e);
    }
  }
}
