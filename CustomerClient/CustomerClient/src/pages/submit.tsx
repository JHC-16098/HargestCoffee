import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import './Tab2.css';

const Submit: React.FC = (props) => {
  
  useEffect(() => {
    console.log(props);
  }) 
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Rewards</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Your Order:</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="ion-text-center">
          <p>Coming Soon</p>
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default Submit;
