import { createContext, useContext, ReactNode } from "react";

import { RegisterService } from "../../Common/stores/index";

import { RegisterStore } from "../stores/RegisterStore/RegisterStore";

const registerServiceInstance = new RegisterService();

const registerStoreInstance = new RegisterStore(registerServiceInstance);

const RegisterContext = createContext(registerStoreInstance);

export const RegisterHook = ({ children }: { children: ReactNode }) => {
	return (
		<RegisterContext.Provider value={registerStoreInstance}>
			{children}
		</RegisterContext.Provider>
	);
};

export const useRegisterHook = () => useContext(RegisterContext);
