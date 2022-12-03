import {createContext} from "react";

const AuthContext = createContext(true);

export const AuthProvider = AuthContext.Provider;
export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;