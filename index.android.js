import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { Container, Header, Title, Text, Button, Thumbnail, List, ListItem, Card, CardItem, H3, Item, Input, Left, Right, Body, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Dictionary extends Component {
  render() {
    return (
      <Container>
      <Item>
      <Icon active name='arrow-dropright' />
      <Input placeholder='Word to translate' />
      </Item>

      <Button style={{width: '100%'}} textStyle={{color:'black'}}>
      <Text> Search! </Text>
      </Button>

        <List>
            <ListItem avatar>
              <Body>
                <H3 style={{margin:4}}>Cemiyet</H3>
                <Text note>Sıfat özelliğinde olan kelimemiz Farsça “na”, Arapça “mütenahi” köklerinden türetilmiştir. Anlam olarak, sonsuz, ucu bucağı ve nihayeti olmayan demektir. Aslında Arapça olan mütenahi sonlu anlamına gelir. Başına gelen -na eki ile bu kelime olumsuzlaştırılmış yani sonu olmayan anlamı kazandırılmıştır.</Text>
                <Text style={{margin:4}}>Tarihçe</Text>
                <Text note>Tarihi çok eskidir</Text>
              </Body>
              <Right>
                <Text note>Sıfat</Text>
              </Right>
            </ListItem>
         </List>


      </Container>
      );
  }
}

AppRegistry.registerComponent('Dictionary', () => Dictionary);
