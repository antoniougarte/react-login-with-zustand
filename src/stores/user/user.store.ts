import axios from 'axios';
import { create } from 'zustand';

type User = {
  email: string;
  password: string;
};

interface UserState {
  id: number;
  name: string;
  user: User;
  lastName: string;
  computed: {
    userLogged: string;
  };
  isLoading: boolean;
  login: (credentials: User) => Promise<void>;
  logout: () => void;
}

export const useUserStore = create<UserState>((set, get) => ({
  id: 0,
  name: 'Usuario con nombre',
  lastName: 'apellido',
  user: {
    "email": "",
    "password": ""
  },  
  computed: {
    get userLogged(): string {
      return `${get().name} + ${get().lastName}`;
    },
  },
  isLoading: false,
  login: async (credentials: User) => {
    set({ isLoading: true });
    try {
      const response = await axios.post(`https://reqres.in/api/login`, credentials);
      console.log(response);
      const { token } = response.data;
      localStorage.setItem("tokenAuth", token);
      set({ isLoading: false });
    } catch (error) {
      console.error(error);
      set({ isLoading: false });
    }
  },
  logout: () => {
    localStorage.removeItem("tokenAuth");
    set({ user: { email: '', password: '' } });
  },
}));
