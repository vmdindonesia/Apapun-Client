import React, { Component } from 'react';
import { AsyncStorage, RefreshControl, ScrollView, Text, Picker, Keyboard, Linking, TouchableOpacity, View, Image, FlatList, Modal } from 'react-native';
import { Container, ContainerSection, Input, Button, Spinner, InputNumber, InputSearchMaterial, InputSearch } from '../components/common';
import axios from 'axios';
import { IPSERVER } from './../shared/config';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';


export class MaterialPage extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerLeft:
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                        navigation.setParams(params.dataMaterial);
                        navigation.state.params.onSelect({ dataCheckBoxSubMaterial: params.dataMaterial });
                        console.log(navigation, 'Props Material');
                    }}
                >
                    <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
                </TouchableOpacity>,
            headerTitle: 'Pilih Material'
        }
    };


    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            searchMaterial: '',
            dataMaterial: '',
            dataSelectMaterial: '',
            dataSelectMaterialAuto: '',
            dataCheckBoxSubMaterial: [],
            dataSubMaterial: '',
            dataAutoSubMaterial: ''
        }
    }

    onChange = (name, value) => {
        this.setState({ [name]: value });
    }

    onChangeAuto = (name, value) => {
        this.setState({ [name]: value }, () => {
            console.log(this.state[name], 'Auto');
            this.autoSubMaterial(value);
        });
    }

    autoSubMaterial(value) {
        const keyword = value;
        axios.post(`${IPSERVER}/ApapunSubmaterials/GetSubMaterialAuto`, {
            keyword
        }).then(response => {
            console.log(response, 'Data Auto Sub Material');
            this.setState({ dataAutoSubMaterial: response.data })
        }).catch(error => {
            console.log(error, 'Error Data Auto Material');
        })
    }

    onChangeMaterial = (name, value) => {
        console.log(value, 'AWODOAWKDO');
        this.setState({ [name]: value }, () => {
            console.log(this.state[name], 'SET STATE');
            this.getSubMaterial(value);
        })
    }

    onChangeMaterialAuto = (name, value) => {
        console.log(value, 'AWODOAWKDO');
        this.setState({ [name]: value }, () => {
            console.log(this.state[name], 'SET STATE');
            this.getSubMaterial(value);
        })
    }

    getSubMaterial(value) {
        console.log(value, 'Material Id');
        this.setState({ dataSubMaterial: '' })
        const materialId = value;
        axios.post(`${IPSERVER}/ApapunSubmaterials/GetSubMaterialByMaterialId/`, {
            materialId
        }).then(response => {
            console.log(response, 'Data Sub Material');
            this.setState({ dataSubMaterial: response.data })
        }).catch(error => {
            console.log(error, 'Error Data Sub Material');
        })
    }

    componentDidMount() {
        console.log(this.props.navigation, 'Data Params');
        if (this.props.navigation.state.params.dataSub) {
            this.setState({ dataCheckBoxSubMaterial: this.props.navigation.state.params.dataSub }, () => {
                console.log(this.state.dataCheckBoxSubMaterial, 'XXX');
            })
        }
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
            }, () => {
                this.props.navigation.setParams({
                    dataMaterial: this.state.dataCheckBoxSubMaterial
                });
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
        console.log(item, 'awdawdawdawd')
        return (
            <View style={{ flexDirection: 'row', marginTop: 10, marginRight: 5 }}>
                <View style={{ height: 25, flexDirection: 'row', borderWidth: 1, borderRadius: 30, paddingLeft: 7, paddingRight: 7 }}>
                    <Text style={{ textAlign: 'center', marginTop: 3, fontSize: 13, fontFamily: 'Quicksand-Bold' }}>{item.material_name}</Text>
                    <Text style={{ textAlign: 'center', marginTop: 3, fontSize: 13, fontFamily: 'Quicksand-Bold' }}> - </Text>
                    <Text style={{ textAlign: 'center', marginTop: 3, fontSize: 13, fontFamily: 'Quicksand-Bold' }}>{item.submaterial_name.length >= 12 ? `${item.submaterial_name.substring(0, 12)}...` : `${item.submaterial_name}`}</Text>
                    <TouchableOpacity
                        onPress={() => this.deleteMaterial(item)}
                    >
                        <Icon size={15} style={{ marginLeft: 5, marginTop: 3, color: 'red' }} name='md-close' />
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
                <View style={{ flex: 4, alignItems: 'flex-start', flexDirection: 'row' }}>
                    <CheckBox
                        textStyle={{
                            fontFamily: 'Quicksand-Bold'
                        }}
                        containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent', marginLeft: -10 }}
                        checked={dataCheckBoxSubMaterial.includes(itemSubMaterial)}
                        onPress={() => this.checkedSubMaterial(itemSubMaterial)}
                        title={itemSubMaterial.submaterial_name}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 10 }}>
                    <TouchableOpacity
                        onPress={() => { Linking.openURL(`https://www.google.com/search?q=${itemSubMaterial.submaterial_name}`).catch(err => console.error('An error occurred', err)); }}>
                        <Image
                            source={require('./../assets/images/order/form-order/ic_material_search.png')}
                            style={{ width: 15, height: 15 }}
                        />
                    </TouchableOpacity>
                </View>
            </View >
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
        return (
            <Button
                style={{
                    backgroundColor: '#FF1000',
                    justifyContent: 'center',
                    borderRadius: 30,
                    marginTop: 10
                }}
                onPress={() => {
                    const { params = {} } = this.props.navigation.state;
                    this.props.navigation.goBack();
                    this.props.navigation.setParams(params.dataMaterial);
                    this.props.navigation.state.params.onSelect({ dataCheckBoxSubMaterial: params.dataMaterial });
                }}

            >
                <Text style={{ color: '#FFFFFF', fontFamily: 'Quicksand-Bold', fontSize: 15 }}>OK</Text>
            </Button>
        )
    }

    renderMaterial = () => {
        const material = this.state.dataMaterial;
        if (material) {
            return material.map((data, index) => {
                return <Picker.Item label={data.materialName} value={data.materialId} key={index} />
            })
        }
        return <Picker.Item label='Tidak ada Material' value='0' />
    }

    renderMaterialAuto = () => {
        // dataAutoSubMaterial
        const subMaterialAuto = this.state.dataAutoSubMaterial;
        if (subMaterialAuto) {
            return subMaterialAuto.map((data, index) => {
                return <Picker.Item label={data.material_name} value={data.material_id} key={index} />
            })
        }
        return <Picker.Item label='Tidak ada material yang dicari' value='0' />
    }

    render() {
        const {
            dataSelectMaterial,
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

                <Container>
                    <ContainerSection>
                        <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', height: 45, backgroundColor: '#fff', borderWidth: 1, borderRadius: 25, marginTop: 10 }}>
                            < InputSearch
                                style={{ flex: 1 }}
                                placeholder="Cari Material"
                                icon="ic_search"
                                onChangeText={val => this.onChangeAuto('searchMaterial', val)}
                                value={searchMaterial}
                            />
                        </View>
                    </ContainerSection>

                    <ContainerSection>
                        <View style={{ flex: 1, flexWrap: 'wrap' }}>
                            <FlatList
                                data={dataCheckBoxSubMaterial}
                                horizontal={false}
                                numColumns={2}
                                extraData={this.state}
                                renderItem={({ item, index }) => this.renderSelectedMaterial(item, index)}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </ContainerSection>

                    {
                        searchMaterial === '' ?
                            <ContainerSection>
                                <View style={{ width: '100%', marginTop: 10 }}>
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black' }}>Material</Text>
                                    <View style={{ backgroundColor: '#fff', borderWidth: 1, borderRadius: 5, marginTop: 10 }}>
                                        <Picker
                                            selectedValue={dataSelectMaterial}
                                            onValueChange={v => this.onChangeMaterial('dataSelectMaterial', v)}
                                        >
                                            <Picker.Item label='Pilih Material' value='0' />
                                            {this.renderMaterial()}
                                        </Picker>
                                    </View>
                                </View>
                            </ContainerSection>
                            :
                            <ContainerSection>
                                <View style={{ width: '100%', marginTop: 10 }}>
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black' }}>Material</Text>
                                    <View style={{ backgroundColor: '#fff', borderWidth: 1, borderRadius: 5, marginTop: 10 }}>
                                        <Picker
                                            selectedValue={dataSelectMaterial}
                                            onValueChange={v => this.onChangeMaterialAuto('dataSelectMaterial', v)}
                                        >
                                            {this.renderMaterialAuto()}
                                        </Picker>
                                    </View>
                                </View>
                            </ContainerSection>
                    }

                    {
                        dataSubMaterial ?
                            <ContainerSection>
                                <View style={{ width: '100%', marginTop: 10 }}>
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black' }}>Sub - Material</Text>
                                    <View style={{ width: '100%', height: 200, backgroundColor: '#fff', borderRadius: 5, borderWidth: 1, marginTop: 10 }}>
                                        {
                                            dataSubMaterial.length === 0 ?
                                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={{ textAlign: 'center', fontFamily: 'Quicksand-Regular', fontSize: 15 }}>Sub Material Kosong</Text>
                                                </View>
                                                :
                                                <FlatList
                                                    data={dataSubMaterial}
                                                    extraData={this.state}
                                                    renderItem={({ item, index }) => this.renderSubMaterial(item, index)}
                                                />
                                        }
                                    </View>
                                </View>
                            </ContainerSection>
                            :
                            <View />
                    }

                    <ContainerSection>
                        {this.renderButton()}
                    </ContainerSection>
                </Container>
            </ScrollView>
        )
    }

}

export default MaterialPage;