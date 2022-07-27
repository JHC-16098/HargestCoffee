import MessageListItem from '../components/MessageListItem';
import { Component, useState } from 'react';
import { Message, getMessages } from '../data/messages';
import Orders from '../components/orders';

import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  IonItem,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol

} from '@ionic/react';
import './Home.css';
const url = "http://128.199.137.91:443";


class Home extends Component {

  
  state = {
    unfilledOrders: [],
    readyOrders: [],
    finishedOrders: []

  };

  getOrders = () => {
    fetch(url+'/unfilled')
    .then(res => res.json())
    .then((data) => {
      this.setState({ unfilledOrders: data })
    })
    .catch(console.log)

    fetch(url+'/inprogress')
    .then(res => res.json())
    .then((data) => {
      this.setState({ readyOrders: data })
    })
    .catch(console.log)

    fetch(url+'/finished')
    .then(res => res.json())
    .then((data) => {
      this.setState({ finishedOrders: data })
    })
    .catch(console.log)
  };

componentDidMount() {
  this.getOrders();
  setInterval(this.getOrders, 500);
}


  render() {
  return (
    <IonContent>
      <IonHeader>
        <IonToolbar color="dark">
          <img className='headerImg' slot='start' height='60px' src={require('./HARGESTCOFFEE_NOTEXT.png')}/>
          <IonTitle>JHC Coffee Company</IonTitle>
          
        </IonToolbar>
        
      </IonHeader>
    <IonGrid>
      <IonRow>
        <IonCol>
          <h1>Unfilled Orders</h1>
          <Orders orders={this.state.unfilledOrders} />
        </IonCol>

        <IonCol>
          <h1>In Progress</h1>
          <Orders orders={this.state.readyOrders} />
        </IonCol>

        <IonCol>
          <h1>Ready for Pickup</h1>
          <Orders orders={this.state.finishedOrders} />
        </IonCol>
      </IonRow>
    </IonGrid>
    </IonContent>
  );
  }
};

export default Home;
