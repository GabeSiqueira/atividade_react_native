import React from 'react';
// import { View } from 'react-native';
// import Cabecalho from './components/Cabecalho';
// import TelaCadastro from './telas/TelaCadastro';
// import TelaUsuario from './telas/TelaUsuario';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk';
import UsuariosNavegacao from './navegacao/UsuariosNavegacao';
import usuariosReducer from './store/usuarios-reducer';
import {init} from './helpers/db';

init()
  .then(() => {
    console.log("Base criada ou já existente!");
  })
  .catch((err) => {
    console.log("Erro ao criar o banco!");
    console.log(err);
  })

const rootReducer = combineReducers({
  usuarios: usuariosReducer
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {

  return <Provider store={store}>
        <UsuariosNavegacao />
        </Provider>

}
//   const[idUsuario, setIdUsuario] = useState();
//   const[nomeUsuario, setNomeUsuario] = useState();
//   const[telefoneUsuario, setTelefoneUsuario] = useState();
//   const[telaInicial, setTelaInicial] = useState(true)
//   const[telaUsuario, setTelaUsuario] = useState(false)

//   const selecionaUsuarioId = (idUsuario) => {
//     setIdUsuario(idUsuario);
//   }

//   const selecionaUsuarioNome = (nomeUsuario) => {
//     setNomeUsuario(nomeUsuario);
//   }

//   const selecionaUsuarioTelefone = (telefoneUsuario) => {
//     setTelefoneUsuario(telefoneUsuario);
//   }

//   const editarUsuario = (id, nome, telefone) => {
//     setIdUsuario(id);
//     setNomeUsuario(nome);
//     setTelefoneUsuario(telefone);
//   }

//   const editarTelaUsuario = () => {
//     setTelaUsuario(true);
//     setTelaInicial(false);
//   }

//   const editarTelaInicio = () => {
//     setTelaInicial(true);
//     setTelaUsuario(false);
//   }

//   let conteudo;
  

//   if(telaInicial === true){
//     conteudo = <TelaCadastro 
//               onSelecionaUsuarioId={selecionaUsuarioId}
//               onSelecionaUsuarioNome={selecionaUsuarioNome}  
//               onSelecionaUsuarioTelefone={selecionaUsuarioTelefone}
//               onEditarTelaUsuario={editarTelaUsuario}
//             />
//   }
  
//   if(telaUsuario === true){
//     conteudo = <TelaUsuario 
//                   id={idUsuario} 
//                   nome={nomeUsuario} 
//                   telefone={telefoneUsuario}
//                   onEditarTelaInicio={editarTelaInicio}
//                   onEditarUsuario={editarUsuario}
//                 />
//   }

// /*    if(telaUsuario === true){
//     conteudo = <TelaUsuario 
//                   id={idUsuario} 
//                   nome={nomeUsuario} 
//                   telefone={telefoneUsuario}
//                   onEditarTelaEditarUsuario={editarTelaEditarUsuario}
//                 />  
//   }*/

//   return (
    
//     <View>
//       <Cabecalho titulo={'Agenda de Contatos'}/>
//       {conteudo}
//     </View>
   
//   );
//}





// import React, { useState } from 'react';
// import { StyleSheet, TextInput, View, Button, FlatList, Text, Keyboard } from 'react-native';
// import PrevisaoItem from './components/PrevisaoItem';
// import _ from 'lodash';

// export default function App() {
//   const endpointCity = "https://api.openweathermap.org/data/2.5/forecast?lang=pt_br&units=metric&q=";
//   const endpointTempo = "https://api.openweathermap.org/data/2.5/onecall?lat=";
//   const pointLon = "&lon="
//   const excludeAndApi = "&exclude=hourly,daily&appid="

//   const apiKey = 'a78489206e5667d765b7a31f1772eaed';

//   const[cidade, setCidade] = useState('');
//   const[dadosJson, setDadosJson] = useState({});
//   const[dadosJson2, setDadosJson2] = useState({});

//   const[feelsLike, setFeelsLike] = useState('')
//   const[sunrise, setSunrise] = useState('')
//   const[sunset, setSunset] = useState('')
//   const[icon, setIcon] = useState('')

//   const capturarCidade = (cidade) => {
//     setCidade(cidade)
//   }

//   const obtemLatLon = () => {
//     setDadosJson({});
//     const target = endpointCity + cidade + "&appid=" + apiKey;
//     var lon, lat;
//     console.log(target)
//     fetch(target)
//     .then(dados => dados.json())
//     .then((dados) => {
//       setDadosJson(dados["city"])
//         lon = dadosJson.coord.lon;
//         lat = dadosJson.coord.lat;
//         console.log(lon, lat)
//        endpointBuscaNovaApi(lon, lat)
//       Keyboard.dismiss();
//     })
//   }

//   const endpointBuscaNovaApi = (lon, lat) => {
//     setDadosJson2({})
//     const target = endpointTempo + lat + pointLon + lon + excludeAndApi + apiKey;
//     console.log(target)
//     fetch(target)
//     .then(dados => dados.json())
//     .then((dados) => {
//       setDadosJson2(dados["current"])
//       setFeelsLike(dadosJson2.feels_like.toString())
//       setSunrise(dadosJson2.sunrise.toString())
//       setSunset(dadosJson2.sunset.toString())
//       setIcon(dadosJson2.weather[0].icon.toString())
//       Keyboard.dismiss();
//     })
//   }
  
  
//   return (
//     <View style={styles.container}>
//       <View style={styles.entrada}>
//         <TextInput
//           style={styles.nomeCidade}
//           placeholder="Digite o nome da cidade"
//           onChangeText={capturarCidade}
//           value={cidade}
//         />
//         <Button
//           title="Ok"
//           onPress={obtemLatLon}
//         />
//       </View>
//       <PrevisaoItem feelsLike={feelsLike} sunrise={sunrise} sunset={sunset} icon={icon}/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 30,
//   },
//   entrada: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 8
//   },
//   nomeCidade: {
//     padding: 5,
//     borderBottomColor: '#BB96F3',
//     borderBottomWidth: 2,
//     textAlign: 'left',
//     flexGrow: 0.9
//   }
// });