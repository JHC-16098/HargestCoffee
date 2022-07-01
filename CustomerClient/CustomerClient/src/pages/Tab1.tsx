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

    const submitHotChocolate: SubmitHandler<IFormInput> = data => {
      console.log(data);
      
      history.push({
        pathname: '/tab1/submit',
        state: { detail: JSON.stringify({"coffee":"Hot Chocolate"}) }
      
      });
    };

    const submitCappuccino: SubmitHandler<IFormInput> = data => {
      console.log(data);
      
      history.push({
        pathname: '/tab1/submit',
        state: { detail: JSON.stringify({"coffee":"Cappuccino"}) }
      
      });
    };

    const submitLongBlack: SubmitHandler<IFormInput> = data => {
      console.log(data);
      
      history.push({
        pathname: '/tab1/submit',
        state: { detail: JSON.stringify({"coffee":"Cappuccino"}) }
      
      });
    };

    const submitShortBlack: SubmitHandler<IFormInput> = data => {
      console.log(data);
      
      history.push({
        pathname: '/tab1/submit',
        state: { detail: JSON.stringify({"coffee":"Cappuccino"}) }
      
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

        <IonCard>
          <IonItem>
            <img src={require('./espresso-icon.jpg')} alt="espresso in a cup" height="50px"/>
          <IonCardHeader>
            <IonCardTitle>Cappuccino</IonCardTitle>
            <IonCardSubtitle>$4</IonCardSubtitle>
          </IonCardHeader>
          </IonItem>
          <form onSubmit={handleSubmit(submitCappuccino)}>
            <input type='hidden' value="Cappuccino" {...register("coffee")}/> 
            <IonButton expand="block" type="submit" >Select</IonButton>
          </form>
        </IonCard>

        <IonCard>
          <IonItem>
            <img src={require('./espresso-icon.jpg')} alt="espresso in a cup" height="50px"/>
          <IonCardHeader>
            <IonCardTitle>Long Black</IonCardTitle>
            <IonCardSubtitle>$4</IonCardSubtitle>
          </IonCardHeader>
          </IonItem>
          <form onSubmit={handleSubmit(submitLongBlack)}>
            <input type='hidden' value="Long Black" {...register("coffee")}/> 
            <IonButton expand="block" type="submit" >Select</IonButton>
          </form>
        </IonCard>

        <IonCard>
          <IonItem>
            <img src={require('./espresso-icon.jpg')} alt="espresso in a cup" height="50px"/>
          <IonCardHeader>
            <IonCardTitle>Short Black</IonCardTitle>
            <IonCardSubtitle>$4</IonCardSubtitle>
          </IonCardHeader>
          </IonItem>
          <form onSubmit={handleSubmit(submitShortBlack)}>
            <input type='hidden' value="Short Black" {...register("coffee")}/> 
            <IonButton expand="block" type="submit" >Select</IonButton>
          </form>
        </IonCard>

        <IonCard>
          <IonItem>
            <img src={require('./espresso-icon.jpg')} alt="espresso in a cup" height="50px"/>
          <IonCardHeader>
            <IonCardTitle>Hot Chocalate</IonCardTitle>
            <IonCardSubtitle>$4</IonCardSubtitle>
          </IonCardHeader>
          </IonItem>
          <form onSubmit={handleSubmit(submitHotChocolate)}>
            <input type='hidden' value="Flat White" {...register("coffee")}/> 
            <IonButton expand="block" type="submit" >Select</IonButton>
          </form>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
