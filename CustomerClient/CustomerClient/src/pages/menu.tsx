import { IonContent, IonHeader, IonButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonInput, IonLabel, IonSelect, IonSelectOption, IonImg } from '@ionic/react';
import './Tab1.css';
import { Component, useState } from 'react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { register } from '../serviceWorkerRegistration';
import Tab2 from './submit';
import { IonReactRouter } from '@ionic/react-router';

enum MilkEnum {
  standard = "Standard",
  skim = "Skim"
}


enum ShotEnum {
  single = "Single",
  double = "Double"
}



interface IFormInput {
  quantity: number;
  milk: MilkEnum;
  shot: ShotEnum;
}

const Tab1: React.FC = () => {

  const { control, register, handleSubmit, formState } = useForm<IFormInput>();



  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data)
    
    /*
    var jsonToSend = {
      "name": "test",
      "coffee": "Flat White",
      "quantity": data.quantity,
      "milk": data.milk,
      "shot": data.shot
    }
    

    fetch('http://localhost:3000/submit', {
      method: 'POST',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(jsonToSend)
    })
    */
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
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <IonItem>
              <IonLabel>Quantity:</IonLabel>
              <IonInput type="number" {...register("quantity")}/>
            </IonItem>
            <IonItem>
            <IonLabel>Milk Type</IonLabel>
            <IonSelect interface="popover" {...register("milk")}>
              <IonSelectOption value="Standard">Standard</IonSelectOption>
              <IonSelectOption value="Skim">Skim</IonSelectOption>
            </IonSelect> 
          </IonItem>
          <IonItem>
            <IonLabel>Shot</IonLabel>
            <IonSelect interface="popover" {...register("shot")}>
                <IonSelectOption value="Single">Single</IonSelectOption>
                <IonSelectOption value="Double">Double</IonSelectOption>
            </IonSelect> 
          </IonItem>

            <IonButton expand="block" type="submit" >Select</IonButton>
          </form>

          
          
             
          
        </IonCard>



      </IonContent>
    </IonPage>
  );
};

export default Tab1;
