import React from 'react';
import { IonBadge, IonItem, IonLabel, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonPage } from '@ionic/react';

export const BadgeExample: React.FC = () => (
  <IonPage>
    <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Budge Example</IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonContent>
    <IonItem>
            <IonLabel>Followers</IonLabel>
            <IonBadge slot="end">22k</IonBadge>
          </IonItem>
          
    {/*-- Colors --*/}

    <IonBadge color="primary">11</IonBadge>
    <IonBadge color="secondary">22</IonBadge>
    <IonBadge color="tertiary">33</IonBadge>
    <IonBadge color="success">44</IonBadge>
    <IonBadge color="warning">55</IonBadge>
    <IonBadge color="danger">66</IonBadge>
    <IonBadge color="light">77</IonBadge>
    <IonBadge color="medium">88</IonBadge>
    <IonBadge color="dark">99</IonBadge>

    {/*-- Item with badge on left and right --*/}
    <IonItem>
      <IonBadge slot="start">11</IonBadge>
      <IonLabel>My Item</IonLabel>
      <IonBadge slot="end">22</IonBadge>
    </IonItem>
  </IonContent>
  </IonPage>
  
);