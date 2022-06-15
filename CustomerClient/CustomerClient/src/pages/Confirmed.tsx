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
    
    fetch('http://localhost:3000/submit', {
          method: 'POST',
          mode: 'cors',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(orderData)
        })
    
  }) 

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
              Order Submitted
            </IonCardTitle>
            <IonCardSubtitle>
              your order was submitted:
            </IonCardSubtitle>

            </IonCardHeader>
            <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel>{orderData.quantity}x {orderData.coffee}</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>{orderData.milk} milk</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>{orderData.shot} shot</IonLabel>
              </IonItem>
            </IonList>
            
            <IonButton expand="block" onClick={returnToMenu}>Back to Menu</IonButton>

            </IonCardContent>

        </IonCard>
        
      </IonContent>
    </IonPage>
  );
};

export default Confirmed;
