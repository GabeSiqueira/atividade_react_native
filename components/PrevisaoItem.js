// import React from 'react';

// import { View, Text, StyleSheet, Image } from 'react-native';

// import Cartao from './Cartao';
// const PrevisaoItem = (props) => {
//     return (
//         <Cartao estilos={estilos.cartao}>
//             <View style={estilos.tela}>
//                 <Image
//                     style={estilos.imagem}
//                     source={{ uri: 'https://openweathermap.org/img/wn/' + props.icon + ".png" }}
//                 />
//                 <View>

//                     <View style={estilos.primeiraLinha}>
//                         <Text>Nascer do Sol: {new Date(props.sunrise * 1000).toLocaleTimeString()}</Text>
//                     </View>

//                     <View style={estilos.segundaLinha}>
//                         <Text style={estilos.valor}>Sensação Térmica: {props.feelsLike}</Text>
//                     </View>

//                 </View>
//             </View>
//         </Cartao>
//     );
// }


// const estilos = StyleSheet.create({
//     valor: {
//         marginHorizontal: 2
//     },
//     segundaLinha: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: 4,
//         borderTopWidth: 1,
//         borderTopColor: '#EEE'
//     },
//     primeiraLinha: {
//         justifyContent: 'center',
//         flexDirection: 'row'
//     },
//     imagem: {
//         width: 50,
//         height: 50
//     },
//     cartao: {
//         marginBottom: 5
//     },
//     tela: {
//         flexDirection: 'row'
//     }
// });

// export default PrevisaoItem;



import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Cartao from './Cartao';

const PrevisaoItem = (props) => {
    return (
        <Cartao estilos={estilos.cartao}>
            <View style={estilos.tela}>
                 <Image 
                    style={estilos.imagem}
                    source={{uri: 'https://openweathermap.org/img/wn/' + props.icon + ".png"}}
                />
                <View>
                    <View style={estilos.primeiraLinha}>
                        <Text style={estilos.valor}>Sensação Termica: {props.feelsLike + "\u00B0"}</Text>
                    </View>
                    <View style={estilos.segundaLinha}>
                        <Text>Nascer do Sol: {new Date(props.sunrise * 1000).toLocaleTimeString()}</Text>
                    </View>
                    {/* <Text>Pôr do Sol: {new Date(props.sunset * 1000).toLocaleTimeString()}</Text> */}
                    <View style={estilos.terceiraLinha}>
                        <Text>Pôr do Sol: {new Date(props.sunset * 1000).toLocaleTimeString()}</Text>
                    </View>
                </View>
            </View>
        </Cartao>
    )
}

const estilos = StyleSheet.create({
    valor: {
        marginHorizontal: 2
    },
    primeiraLinha: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    segundaLinha:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#EEE'
    },
    cartao: {
        marginBottom: 5
    },
    tela: {
        flexDirection: 'row',
        height: 60,
    },
    imagem: {
        width: 50,
        height: 50
    },
    terceiraLinha: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#EEE'
    }
})

export default PrevisaoItem;