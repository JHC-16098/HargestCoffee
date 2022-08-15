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
const url = "http://node.barista.jhc.school.nz";


class Home extends Component {

  
  state = {
    allOrders: [],
    unfilledOrders: [],
    readyOrders: [],
    finishedOrders: []

  };

  getOrders = () => {
    //this.forceUpdate();
/*
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
*/
    
    var resData:any = {};

    fetch(url+'/ClientOrders')
        .then(res => res.json())
        .then((data) => {
          this.setState({ allOrders: data})
        })
        .catch(console.log) 
    
    var unfilledArr: any = [];
    var inprogressArr:any = [];
    var readyArr:any = [];

    this.state.allOrders.forEach(function(jsonOrder) {
        var orderString = JSON.stringify(jsonOrder);
        
        if(orderString.includes("0}"))
        {
          unfilledArr.push(jsonOrder);
        }

        
        if(orderString.includes("1}"))
        {
          inprogressArr.push(jsonOrder);
        }

   
        if(orderString.includes("2}"))
        {
          readyArr.push(jsonOrder);
        }
    })

    this.setState({ unfilledOrders: unfilledArr});
    this.setState({ readyOrders: inprogressArr});
    this.setState({ finishedOrders: readyArr});
    /*
    console.log(unfilledArr);
    console.log(inprogressArr);
    console.log(readyArr);
    */

    //console.log(arrays);
  };

componentDidMount() {
  this.getOrders();
  setInterval(this.getOrders, 200);
}

componentWillUnmount() {
  clearInterval();
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
