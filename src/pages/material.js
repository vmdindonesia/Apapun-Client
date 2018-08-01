import React, { Component } from 'react';
import { AsyncStorage, RefreshControl, ScrollView, Text, Picker, Keyboard, ToastAndroid, TouchableOpacity, View, Image, FlatList, Modal } from 'react-native';
import { Container, ContainerSection, Input, Button, Spinner, InputNumber, InputSearchMaterial, InputSearch } from '../components/common';
import axios from 'axios';
import { IPSERVER } from './../shared/config';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';


export class MaterialPage extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Pilih Material'
    });


    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            searchMaterial: '',
            dataMaterial: '',
            dataSelectMaterial: '',
            dataCheckBoxSubMaterial: []
        }
    }

    onChange = (name, value) => {
        this.setState({ [name]: value });
    }

    onChangeMaterial = (name, value) => {
        console.log(value, 'AWODOAWKDO');
        this.setState({ [name]: value.materialName }, () => {
            axios.get(`${IPSERVER}/ApapunSubmaterials`, {
                params: {
                    'materialId': value.materialId
                }
            }).then(response => {
                console.log(response, 'Data Material');
                this.setState({ dataSubMaterial: response.data })
            }).catch(error => {
                console.log(error, 'Error Data Sub Material');
            })
        })
    }

    componentDidMount() {
        axios.get(`${IPSERVER}/ApapunMaterials`).then(response => {
            console.log(response, 'Response Material')
            this.setState({ dataMaterial: response.data }, () => {
                this.setState({ loading: false });
            });
        }).catch(error => {
            console.log(error, 'Error Material');
            this.setState({ loading: false });
        })
    }

    checkedSubMaterial(data) {
        console.log(data, 'Data Checked');
        const { dataCheckBoxSubMaterial } = this.state;
        if (!dataCheckBoxSubMaterial.includes(data)) {
            this.setState({
                dataCheckBoxSubMaterial: [...dataCheckBoxSubMaterial, data]
            });
            console.log('CHECKLIST');
        } else {
            this.setState({
                dataCheckBoxSubMaterial: dataCheckBoxSubMaterial.filter(a => a !== data)
            });
            console.log('UNCHECKLIST');
        }
    }

    deleteMaterial(data) {
        const { dataCheckBoxSubMaterial } = this.state;
        this.setState({
            dataCheckBoxSubMaterial: dataCheckBoxSubMaterial.filter(a => a !== data)
        });
        console.log('UNCHECKLIST');
    }

    renderSelectedMaterial(item, index) {
        return (
            <View style={{
                borderWidth: 1,
                borderRadius: 30,
                height: 35,
                alignItems: 'center',
                marginTop: 5
            }}>
                <View style={{ padding: 7, flex: 1, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 13, fontFamily: 'Quicksand-Regular' }}>{item.materialName}</Text>
                    <TouchableOpacity
                        onPress={() => this.deleteMaterial(item)}
                    >
                        <Icon size={15} style={{ marginLeft: 25 }} name='md-close' />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderSubMaterial = (itemSubMaterial, index) => {
        const { dataCheckBoxSubMaterial } = this.state;
        return (
            <View style={{
                flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: 5,
                paddingBottom: 5, borderBottomWidth: 1, marginLeft: 10, marginRight: 10
            }}>
                <View style={{ flex: 4 }}>
                    <Text style={{ textAlign: 'left', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>{itemSubMaterial.materialName.length >= 20 ? `${itemSubMaterial.materialName.substring(0, 20)}...` : `${itemSubMaterial.materialName}`}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <CheckBox
                        containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent', height: 0 }}
                        checked={dataCheckBoxSubMaterial.includes(itemSubMaterial)}
                        onPress={() => this.checkedSubMaterial(itemSubMaterial)}
                    />
                </View>
            </View>
        );
    }

    onRefresh() {
        this.setState({
            loading: true,
            dataMaterial: '',
            dataSelectMaterial: '',
            dataCheckBoxSubMaterial: []
        }, () => {
            axios.get(`${IPSERVER}/ApapunMaterials`).then(response => {
                console.log(response, 'Response Material')
                this.setState({ dataMaterial: response.data }, () => {
                    this.setState({ loading: false });
                });
            }).catch(error => {
                console.log(error, 'Error Material');
                this.setState({ loading: false });
            })
        });
    }

    renderButton = () => {
        if (this.state.loading) {
            return <Spinner size="small" />
        }
        return (
            <Button
                style={{
                    backgroundColor: '#FF1000',
                    justifyContent: 'center',
                    borderRadius: 30,
                    marginTop: 10
                }}
                // onPress={() => this.onValidation()}
                onPress={() => this.props.navigation.goBack()}

            >
                <Text style={{ color: '#FFFFFF', fontFamily: 'Quicksand-Bold', fontSize: 15 }}>OK</Text>
            </Button>
        )
    }

    render() {
        const {
            dataSelectMaterial,
            dataMaterial,
            dataSubMaterial,
            dataCheckBoxSubMaterial,
            searchMaterial
        } = this.state;
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.loading}
                        onRefresh={this.onRefresh.bind(this)}
                    />
                }
            >
                <View style={{ flex: 1 }}>
                    <Container>
                        <ContainerSection>
                            <View style={{
                                width: '100%', height: 45, marginTop: 10, justifyContent: 'center', alignSelf: 'center', borderColor: '#e5e5e5', borderWidth: 1.5, borderRadius: 25
                            }}>
                                < InputSearch style={{ flex: 1 }}
                                    // onFocus={() => navigate('FilterBefore')}
                                    placeholder="Cari Material"
                                    icon="ic_search"
                                    onChangeText={val => this.onChange('searchMaterial', val)}
                                    value={searchMaterial}
                                />
                            </View>
                        </ContainerSection>

                        <ContainerSection>
                            <FlatList
                                data={dataCheckBoxSubMaterial}
                                horizontal={false}
                                numColumns={3}
                                extraData={this.state}
                                renderItem={({ item, index }) => this.renderSelectedMaterial(item, index)}
                                showsHorizontalScrollIndicator={false}
                            />
                        </ContainerSection>

                        <ContainerSection>
                            <View style={{ width: '100%', marginTop: 10 }}>
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black' }}>Material</Text>
                                <View style={{ backgroundColor: '#fff', borderWidth: 1, borderRadius: 5, marginTop: 10 }}>
                                    <Picker
                                        selectedValue={dataSelectMaterial}
                                        onValueChange={v => this.onChangeMaterial('dataSelectMaterial', v)}
                                    >
                                        {
                                            dataMaterial ?
                                                dataMaterial.map((data, index) => {
                                                    console.log(data, 'DATAXXXX')
                                                    return <Picker.Item label={data.materialName} value={data} key={index} />
                                                })
                                                :
                                                <Picker.Item label='Tidak ada Kategori' value='0' />
                                        }
                                    </Picker>
                                </View>
                            </View>
                        </ContainerSection>
                        <ContainerSection>
                            <View style={{ width: '100%', marginTop: 10 }}>
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black' }}>Sub - Material</Text>
                                <View style={{ width: '100%', height: 200, backgroundColor: '#fff', borderWidth: 1, marginTop: 10 }}>
                                    <FlatList
                                        data={dataSubMaterial}
                                        extraData={this.state}
                                        renderItem={({ item, index }) => this.renderSubMaterial(item, index)}
                                        showsHorizontalScrollIndicator={false}
                                    />
                                </View>
                            </View>
                        </ContainerSection>
                        <ContainerSection>
                            {this.renderButton()}
                        </ContainerSection>
                    </Container>
                </View>
            </ScrollView>
        )
    }

}

export default MaterialPage;