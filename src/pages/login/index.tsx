import React from "react";
import { useState } from "react";
import { style } from './styles';
import {
    Image, Text, View, TextInput, TouchableOpacity, Alert, ActivityIndicator
} from 'react-native';
import { TextInputMask } from 'react-native-masked-input';

export default function Login() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false);

    async function getLogin() {
        try {
            if (!email || !nome || !telefone || !data) {
                return Alert.alert('Atenção', 'Digite os campos obrigatórios');
            }

            setLoading(true);


            setTimeout(() => {
                setLoading(false);
                Alert.alert('Sucesso', 'Logado com Sucesso !');
            }, 3000);

        } catch (error) {
            setLoading(false);
            Alert.alert('Erro', 'Erro ao Logar');
        }
    }
    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Text style={style.text}>Cadastro de Clientes</Text>
            </View>

            <View style={style.boxMid}>
                <Text style={style.titleInput}>NOME</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={nome}
                        onChangeText={setNome}
                    />
                </View>

                <Text style={style.titleInput}>E-MAIL</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={email} // Corrigido
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                </View>

                <Text style={style.titleInput}>TELEFONE</Text>
                <View style={style.boxInput}>
                    <TextInputMask
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        style={style.input}
                        value={telefone}
                        keyboardType="phone-pad"
                        onChangeText={text => setTelefone(text)}
                    />
                </View>

                <Text style={style.titleInput}>DATA DE NASCIMENTO</Text>
                <View style={style.boxInput}>
                    <TextInputMask
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY'
                        }}
                        style={style.input}
                        value={data}
                        keyboardType="number-pad"
                        onChangeText={text => setData(text)}
                    />
                </View>
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={() => getLogin()}>
                    {loading ? <ActivityIndicator color={'#ffff'} size={'small'} />
                        :
                        <Text style={style.textButton}>Entrar</Text>
                    }

                </TouchableOpacity>
                <Text style={style.textBottom}>Não tem conta? - <Text style={{ color: '#878af6', textDecorationLine: 'underline' }}>Crie Agora</Text>
                </Text>
            </View>
        </View>
    )
}