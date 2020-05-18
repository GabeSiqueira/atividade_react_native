export const ADD_USUARIO = 'ADD_USUARIO';

export const addUsuario = (nome, telefone, imagemURI) => {
    return {
        type: ADD_USUARIO, dadosUsuario: {nome: nome, telefone: telefone, imagemURI: imagemURI} 
    }
}