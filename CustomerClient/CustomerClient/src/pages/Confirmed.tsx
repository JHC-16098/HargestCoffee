import { IonContent, IonHeader, IonButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonInput, IonLabel, IonSelect, IonSelectOption, IonImg, IonList } from '@ionic/react';
import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import './Tab2.css';
import { useLocation } from "react-router-dom";
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { useHistory } from "react-router";


const Confirmed: React.FC = () => {
  
  const history = useHistory();
  const url = 'http://node.barista.jhc.school.nz';

  const location: any = useLocation();
  var orderData:any;
  orderData = JSON.parse(location.state.detail);

  useEffect(() => {
    console.log("DataHere: " + JSON.stringify(orderData));
    
    fetch( url+'/submit', {
          method: 'POST',
          mode: 'cors',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(orderData)
        })
        .then((data) => console.log(data))
        
    
  }) 

  const returnToMenu = () => {
    history.push({
      pathname: '/tab1'
    })
  };

  var orderTime;
  var responseJSON = {'count':''};

  const getTime = () => {
    fetch(url+'/eta')
    .then(res => res.json())
    .then((data => {
      responseJSON.count = data[0].count
      console.log(responseJSON.count);
    }));
    
  };

  useEffect(() => {
    getTime();
  })
  
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
              Your order was submitted:
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
