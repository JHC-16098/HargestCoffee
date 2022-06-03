import React from 'react'

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

const Orders = ({ orders }: {orders:any}) => {
    return (
        <div>
            {orders.map((order:any) => (
                <IonCard>
                <IonCardHeader className='header'>
                    <IonCardTitle>Order #: {order.id}</IonCardTitle>
                    <IonCardSubtitle>Name: {order.name}</IonCardSubtitle>
                </IonCardHeader>
                  <IonCardContent>
                    <IonList>
                      <IonItem><IonLabel>Order: {order.quantity}x {order.coffee}</IonLabel></IonItem>
                      <IonItem><IonLabel>Milk: {order.milk}</IonLabel></IonItem>
                      <IonItem><IonLabel>Shots: {order.shot}</IonLabel></IonItem>
                    </IonList>
                  </IonCardContent>
                </IonCard>
            ))}
        </div>
    )
};

export default Orders