import { IonButtons,IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar , IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonAvatar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from './ExploreContainer';
import Header from './Header';
import React, { useState } from 'react';

const Profile: React.FC = () => {
  React.useEffect(() => {
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <IonList>
      <IonItem>
            
            <IonInput placeholder="Name" type="text"></IonInput>
          </IonItem>

          <IonItem>            
            <IonInput placeholder="PhoneNo" ></IonInput>
          </IonItem>

          <IonItem>            
            <IonInput placeholder="Address" ></IonInput>
          </IonItem>
          <IonItem>
          <IonButton color="primary">Add</IonButton>
          </IonItem>
          
        </IonList>
        </IonContent>
    </IonPage>
  );
};

export default Profile;