import {createStore} from "vuex";
import count from "../modules/count";
import { getpost } from "../modules/post/getpost";
import toast from '../modules/toast/toast';

export const store = createStore({modules: {
      count , getpost , toast
    }})