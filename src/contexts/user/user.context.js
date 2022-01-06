import { createContext } from "react";

const UserContext = createContext({ currentUser: null, error: null });

export default UserContext;