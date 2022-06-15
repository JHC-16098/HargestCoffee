import { IonContent, IonHeader, IonButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonInput, IonLabel, IonSelect, IonSelectOption, IonImg } from '@ionic/react';
import './Tab1.css';
import { Component, useState } from 'react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { register } from '../serviceWorkerRegistration';

import { IonReactRouter } from '@ionic/react-router';
import { Redirect } from 'react-router';
import { useHistory } from "react-router";



interface IFormInput {
  coffee: string
}

const Tab1: React.FC = () => {

  const { control, register, handleSubmit, formState } = useForm<IFormInput>();
  const history = useHistory();


  const submitFlatWhite: SubmitHandler<IFormInput> = data => {
    console.log(data);
    
    history.push({
      pathname: '/tab1/submit',
      state: { detail: JSON.stringify({"coffee":"Flat Wite"}) }
    
    });
  

    
    
  };

  const submitMochaccino: SubmitHandler<IFormInput> = data => {
      console.log(data);
      
      history.push({
        pathname: '/tab1/submit',
        state: { detail: JSON.stringify({"coffee":"Mochaccino"}) }
      
      });
    };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Menu</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonItem>
            <img src={require('./espresso-icon.jpg')} alt="espresso in a cup" height="50px"/>
          <IonCardHeader>
            <IonCardTitle>Flat White</IonCardTitle>
            <IonCardSubtitle>$4</IonCardSubtitle>
          </IonCardHeader>
          </IonItem>
          <form onSubmit={handleSubmit(submitFlatWhite)}>
            <input type='hidden' value="Flat White" {...register("coffee")}/> 
            <IonButton expand="block" type="submit" >Select</IonButton>
          </form>
        </IonCard>

        <IonCard>
          <IonItem>
            <img src={require('./espresso-icon.jpg')} alt="espresso in a cup" height="50px"/>
          <IonCardHeader>
            <IonCardTitle>Mochaccino</IonCardTitle>
            <IonCardSubtitle>$4</IonCardSubtitle>
          </IonCardHeader>
          </IonItem>
          <form onSubmit={handleSubmit(submitMochaccino)}>
            <input type='hidden' value="Mochaccino" {...register("coffee")}/> 
            <IonButton expand="block" type="submit" >Select</IonButton>
          </form>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
