import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import LembreteItem from './components/LembreteItem'
import LembreteInput from './components/LembreteInput';

export default function App() {
  // const[nome, setNome] = useState ('')

  // const[telefone, setTelefone] = useState ('')

  // const capturarNome = (nome) => {
  //   setNome(nome)
  // }

  // const capturarTelefone = (telefone) => {
  //   setTelefone(telefone)
  // }

  const [lembretes, setLembretes] = useState([]);

  const [contadorLembretes, setContadorLembretes] = useState(10);

  const adicionarLembrete = (lembrete) => {
    //spread
    setLembretes (lembretes => {
      console.log (lembretes);
      if(contadorLembretes % 2 == 1){
        setContadorLembretes(contadorLembretes+1); 
      }else{
        setContadorLembretes(contadorLembretes+2); 
      }
      //setContadorLembretes(contadorLembretes + 2);
      return [{key: contadorLembretes.toString(), value: "ID: " + contadorLembretes + "\nNome: " + lembrete}, ...lembretes];
    });
    // setNome("");
    // setTelefone("");
    //console.log (lembrete);
  }

  const removerLembrete = (keyASerRemovida) => {
    setLembretes(lembretes =>{
      return lembretes.filter(lembrete => lembrete.key !== keyASerRemovida);
    })
  }
  

  return (
    <View style={styles.telaPrincipalView}>
      {/* <View style={styles.lembreteView}> */}
        {/*Usuário irá inserir lembretes aqui*/}
        {/* <TextInput 
          placeholder="Nome..."
          style={styles.nomeTextInput}
          onChangeText={capturarNome}
          value={nome}
        /> */}
        {/* <TextInput 
          placeholder="Telefone..."
          style={styles.telefoneTextInput}
          onChangeText={capturarTelefone}
          value={telefone}
        /> */}
        {/* <Button
          title="+"
          onPress={adicionarLembrete}
        /> */}
      {/* </View> */}
      <LembreteInput onAdicionarLembrete={adicionarLembrete}/>
      <FlatList
        data={lembretes}
        renderItem={
          lembrete => (
            <LembreteItem 
              lembrete={lembrete.item.value}
              chave={lembrete.item.key}
              onDelete={removerLembrete}
            />
          )          
        }
      />
      {/*<ScrollView>
        {Aqui será exibida a lista de lembretes}
        {
          lembretes.map((lembrete) => 
            <View 
              key={lembrete}
              style={styles.itemNaLista}>
                <Text>{lembrete}</Text>
            </View>
          )         
        }
      </ScrollView>*/}
    </View>
   
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 50
  },
  // lembreteView: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   marginBottom: 6
  // },
  // nomeTextInput: {
  //   width: '80%',
  //   borderBottomColor: 'black',
  //   borderBottomWidth: 1,
  //   padding: 2,
  //   marginBottom: 4
  // },
  // telefoneTextInput: {
  //   width: '80%',
  //   borderBottomColor: 'black',
  //   borderBottomWidth: 1,
  //   padding: 2,
  //   marginBottom: 4
  // },
  // itemNaLista: {
  //   padding: 12,
  //   backgroundColor: '#CCC',
  //   borderColor: "black",
  //   borderWidth: 1,
  //   marginBottom: 8,
  //   borderRadius: 8
  // }
});