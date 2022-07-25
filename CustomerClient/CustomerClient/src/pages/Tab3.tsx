import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardContent, IonCardHeader } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Defaults</IonCardTitle>
          </IonCardHeader>
          
          <IonCardContent>
            Coming Soon
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>About</IonCardTitle>
          </IonCardHeader>
          
          <IonCardContent>
            CustomerClient v1.0 <br />
            Developed by Max Russell


          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
