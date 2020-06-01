import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList, Keyboard, Platform} from 'react-native';
import UsuarioInput from '../components/LembreteInput';
import UsuarioItem from '../components/LembreteItem';
import * as usuariosActions from '../store/usuarios-actions'
import {useSelector, useDispatch} from 'react-redux'

const TelaCadastro = (props) => {
    // const [usuarios, setUsuarios] = useState([]);
    // let [contadorUsuarios, setContadorUsuarios] = useState(10);

    // const removerLembrete = (keyASerRemovida) => {
    //     setUsuarios(usuarios =>{
    //       return usuarios.filter(nome => nome.key !== keyASerRemovida);
    //     })
    // }

    // const adicionarNome = (nome,telefone) => {
    //     setUsuarios (usuarios => {
    //       console.log (usuarios);
    //       //setContadorUsuarios(contadorUsuarios + 2);

    //     if(contadorUsuarios % 2 == 1){
    //         setContadorUsuarios(contadorUsuarios+1); 
    //     }else{
    //         setContadorUsuarios(contadorUsuarios+2); 
    //     }

    //       return [{key: contadorUsuarios, vNome: nome, vTelefone: telefone}, ...usuarios];
    //  });
    //  Keyboard.dismiss();
    // }

    const usuarios = useSelector(estado => estado.usuarios.usuarios);
    const dispatch = useDispatch();
    
    useEffect( () => {
        dispatch(usuariosActions.buscarUsuario())
    }, [dispatch]);


    return (
        <View style={estilos.tela}>
            <UsuarioInput/>
            <FlatList
            data={usuarios}
            keyExtractor={usuario=>usuario.id}
            renderItem={
                usuario => (
                <UsuarioItem
                    //chave={item.key}
                    nome={usuario.item.nome}
                    telefone={usuario.item.telefone}
                    onSelect={
                        () => {props.navigation.navigate("DetalheDoUsuario", 
                                                {
                                                    nome: usuario.item.nome, 
                                                    telefone: usuario.item.telefone, 
                                                    imagem: usuario.item.imagemURI,
                                                    latitude: usuario.item.latitude,
                                                    longitude: usuario.item.longitude
                                                })}
                    }
                    imagem={null}
                    // onDelete={removerLembrete}
                    // onSelecionaUsuarioId={props.onSelecionaUsuarioId}
                    // onSelecionaUsuarioNome={props.onSelecionaUsuarioNome}
                    // onSelecionaUsuarioTelefone={props.onSelecionaUsuarioTelefone}
                    // onSelecionaEditarTelaUsuario={props.onEditarTelaUsuario}
                />
                )          
            }
            />
        </View>
    );
}

TelaCadastro.navigationOptions = dadosNav => {
    return {
        headerTitle: "Cadastro Usuario"
    }
}

const estilos = StyleSheet.create({
    tela: {
        padding: 25
    }
})

export default TelaCadastro;