import { ADD_USUARIO } from "./usuarios-actions";
import Usuario from "../model/Usuario";


const estadoInicial = {
    usuarios: []    
};

export default(estado = estadoInicial, action) => {
    switch(action.type)
    {
        case ADD_USUARIO:
            const u = new Usuario(new Date().toString(), action.dadosUsuario.nome, action.dadosUsuario.telefone, action.dadosUsuario.imagemURI);
            return {
                usuarios: estado.usuarios.concat(u)
            }
            default:
                return estado;
    }
}