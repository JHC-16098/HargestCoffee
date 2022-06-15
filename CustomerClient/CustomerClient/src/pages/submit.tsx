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
  name: string;
}

const Submit: React.FC = () => {
  
  const { control, register, handleSubmit, formState: { errors }} = useForm<IFormInput>();
  const history = useHistory();

  const location: any = useLocation();
  var orderData:any;
  orderData = JSON.parse(location.state.detail);

  useEffect(() => {
    console.log("DataHere: " + JSON.stringify(orderData));
  }) 

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
    var jsonToSend = {
      coffee: orderData.coffee,
      quantity: data.quantity,
      milk: data.milk,
      shot: data.shot,
      name: data.name
    }
    history.push({
      pathname: '/tab1/submit/confirmed',
      state: {detail: JSON.stringify(jsonToSend)}
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
            <IonCardSubtitle className="errorText">
            {errors.name && errors.name.type === "required" && <span>Fields marked with * are required</span>}
            </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>

            <IonItem>
              <IonLabel>Coffee:</IonLabel>
              <IonLabel className='ion-text-right'>{orderData.coffee}</IonLabel>
            </IonItem>
            <form onSubmit={handleSubmit(onSubmit)}>
            <IonItem>
              <IonLabel>Quantity:</IonLabel>
              <IonInput className='ion-text-right' type="number" {...register("quantity", {required: true, maxLength: 4 })}/>
              {errors.name && errors.name.type === "required" && <span className='errorText'>*</span>}
            </IonItem>
            <IonItem>
            <IonLabel>Milk Type</IonLabel>
            <IonSelect interface="popover" {...register("milk", {required: true})}>
              <IonSelectOption value="Standard">Blue</IonSelectOption>
              <IonSelectOption value="Skim">Skim</IonSelectOption>
            </IonSelect>
            {errors.name && errors.name.type === "required" && <span className='errorText'>*</span>} 
          </IonItem>
          <IonItem>
            <IonLabel>Shot</IonLabel>
            <IonSelect interface="popover" {...register("shot", {required: true})}>
                <IonSelectOption value="Single">Single</IonSelectOption>
                <IonSelectOption value="Double">Double</IonSelectOption>
            </IonSelect>
            {errors.name && errors.name.type === "required" && <span className='errorText'>*</span>} 
          </IonItem>
          <IonItem>
            <IonLabel>Name</IonLabel>
            <IonInput className='ion-text-right' {...register("name", { required: true })}></IonInput>
            {errors.name && errors.name.type === "required" && <span className='errorText'>*</span>}
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

export default Submit;
