import React from 'react';
import { IonProgressBar, IonContent, IonPage, IonHeader, IonToolbar, IonMenuButton, IonButtons, IonTitle, IonLabel } from '@ionic/react';

export const ProgressbarExample: React.FC = () => (
    <IonPage>
        <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Progressbar Example</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent>
    <IonLabel>Default Progressbar</IonLabel>
    <IonProgressBar></IonProgressBar><br />

    <IonLabel>Default Progressbar with 50 percent</IonLabel>
    <IonProgressBar value={0.5}></IonProgressBar><br />

    <IonLabel>Colorize Progressbar</IonLabel>
    <IonProgressBar color="primary" value={0.5}></IonProgressBar><br />
    <IonProgressBar color="secondary" value={0.5}></IonProgressBar><br />

    <IonLabel>Buffer Progressbar</IonLabel>
    <IonProgressBar value={0.25} buffer={0.5}></IonProgressBar><br />

    <IonLabel>Indeterminate Progressbar</IonLabel>
    <IonProgressBar type="indeterminate"></IonProgressBar><br />
    <IonProgressBar type="indeterminate" reversed={true}></IonProgressBar><br />
  </IonContent>
    </IonPage>
  
);