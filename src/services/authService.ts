import api from "./api";

//coneção das infos de login 
interface RegisterParams {
    firstName: string;
    lastName: string;
    phone: string;
    birth: string;
    email: string;
    password: string;
}

//coneção com o login
interface LoginParams {
    email: string;
    password: string;
}

const authService = {
    //metodo de registro
    register: async (params: RegisterParams) => {
        const res = await api.post("/auth/register", params).catch(error => {
            if (error.response.status === 400) {
                return error.response;
            }

            return error
        });

        return res;
    }, 
    
    // metodo de login
    login: async (params: LoginParams) => {

        const res = await api.post("/auth/login", params).catch((error) => {
            
        if (error.response.status === 400 || error.response.status === 401) {
            //console.log(error) //// aquiiiiiii
            
            return error.response;
        }
            return error;

            
        });
        
        
        
            if (res.status === 201) {
                sessionStorage.setItem("educaplaytec-token", res.data.token);
            }
        
        return res;
    },
};

export default authService;