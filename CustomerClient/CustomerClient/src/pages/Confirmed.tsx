import { IonContent, IonHeader, IonButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonInput, IonLabel, IonSelect, IonSelectOption, IonImg, IonList } from '@ionic/react';
import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import './Tab2.css';
import { useLocation } from "react-router-dom";
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { useHistory } from "react-router";

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

const Confirmed: React.FC = () => {
  
  const { control, register, handleSubmit, formState } = useForm<IFormInput>();
  const history = useHistory();

  const location: any = useLocation();
  var orderData:any;
  orderData = JSON.parse(location.state.detail);

  useEffect(() => {
    console.log("DataHere: " + JSON.stringify(orderData));
  }) 

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
    history.push({
      pathname: '/finalised',
      state: {detail: JSON.stringify(data)}
    })
  };

  const returnToMenu = () => {
    history.push({
      pathname: '/tab1'
    })
  };
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Confirm Order</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Confirm Order</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              Order Details:
            </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>

            <IonItem>
              <IonLabel>Coffee:</IonLabel>
              <IonLabel className='ion-text-right'>{orderData.coffee}</IonLabel>
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
            <IonButton expand="block" type="submit" >Continue</IonButton>
          </form>

          <IonButton expand="block" color="danger" onClick={returnToMenu}>Cancel</IonButton>

            </IonCardContent>

        </IonCard>
        
      </IonContent>
    </IonPage>
  );
};

export default Confirmed;
