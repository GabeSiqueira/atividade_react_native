import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import { useDispatch } from 'react-redux';
import * as usuariosActions from '../store/usuarios-actions'
import TiraFoto from './TiraFoto';

const LembreteInput = (props) => {

    const dispatch = useDispatch();

    const [nome, setNome] = useState('');

    const [telefone, setTelefone] = useState('');

    const [imagemURI, setImagemURI] = useState();


    const capturarNome = (nome) => {
        setNome(nome);
    }

    const capturarTelefone = (telefone) => {
        setTelefone(telefone);
    }

    const fotoTirada = imagemURI => {
      setImagemURI(imagemURI);
    }

    const adicionarUsuarioInput = () => {
      console.log("Nome: " + nome + "\nTelefone: " + telefone);
      dispatch(usuariosActions.addUsuario(nome, telefone, imagemURI));
    }

    return (
    <View style={styles.tela}>
    <TextInput 
      placeholder="Nome..."
      style={styles.form}
      onChangeText={capturarNome}
      value={nome}
    />
    <TextInput 
      placeholder="Telefone..."
      style={styles.form}
      onChangeText={capturarTelefone}
      value={telefone}
    />
    <TiraFoto onFotoTirada={fotoTirada} />
    <Button 
      title="+"
      onPress={adicionarUsuarioInput}
      // onPress={() => {props.onAdicionarUsuario(nome, telefone)}}
    />
    </View>
    );
}

const styles = StyleSheet.create({
    tela:{
      flexDirection: 'row',
      marginBottom: 6,
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    form: { 
      padding: 2,
      marginBottom: 2,
      borderBottomColor: 'black'
    }
})


export default LembreteInput;