import React from 'react'
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
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
    IonCol,
    IonButton,
    IonIcon
  
  } from '@ionic/react';

  import { arrowForwardCircleOutline, arrowBackCircleOutline } from 'ionicons/icons';

interface IFormInput {
  id: number;
  currentStatus: number;
}

const url = "http://128.199.137.91:3000";


const Orders = ({ orders }: {orders:any}) => {
  var { control, register, handleSubmit, formState: { errors }} = useForm<IFormInput>();

  var onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
    /*fetch(url+'/update', {
      method: 'POST',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},

    })*/
  }

  return (
        <div>
            {orders.map((order:any) => (
                <IonCard>
                <IonCardHeader className='header'>
                    <IonCardTitle>Order #: {order.id}</IonCardTitle>
                    <IonCardSubtitle>Name: {order.name}, Status: {order.status}</IonCardSubtitle>
                </IonCardHeader>
                  <IonCardContent>
                    
                    <IonList>
                      <IonItem><IonLabel>Order: {order.quantity}x {order.coffee}</IonLabel></IonItem>
                      <IonItem><IonLabel>Milk: {order.milk}</IonLabel></IonItem>
                      <IonItem><IonLabel>Shots: {order.shot}</IonLabel></IonItem>
                    </IonList>
                    
                    <IonItem>
                    
                    <IonButton type='submit' onClick={() => {
                      console.log(order.id + ", " + order.status)
                      var jsonToSend = {
                        id: order.id,
                        status: (order.status - 1)
                      }
                      
                      fetch(url+'/update', {
                      method: 'POST',
                      mode: 'cors',
                      headers: {'Content-Type': 'application/json'},
                      body: JSON.stringify(jsonToSend)
                    });
                    
                    }
                    }>
                      <IonIcon icon={arrowBackCircleOutline}/>
                      Back
                    </IonButton>

                    <IonButton type='submit' onClick={() => {
                      console.log(order.id + ", " + order.status)
                      var jsonToSend = {
                        id: order.id,
                        status: (order.status + 1)
                      }
                      
                      fetch(url+'/update', {
                      method: 'POST',
                      mode: 'cors',
                      headers: {'Content-Type': 'application/json'},
                      body: JSON.stringify(jsonToSend)
                    });
                    
                    }
                    }>
                      Next
                      <IonIcon icon={arrowForwardCircleOutline}/>
                    </IonButton>

                    

                    </IonItem>
                  </IonCardContent>
                </IonCard>
            ))}
        </div>
    )
};

export default Orders