/* Using the IonToast Component */

import React, { useState } from 'react';
import { IonToast, IonContent, IonButton, IonPage, IonHeader, IonToolbar, IonMenuButton, IonButtons, IonTitle } from '@ionic/react';
import { informationCircle } from 'ionicons/icons';

export const ToastExample: React.FC = () => {
  const [showToast1, setShowToast1] = useState(false);
  const [showToast2, setShowToast2] = useState(false);

  return (
   <IonPage>
       <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonTitle>SearchBar Example</IonTitle>
    </IonToolbar>
  </IonHeader>
    <IonContent>
      <IonButton onClick={() => setShowToast1(true)} expand="block">Show Toast 1</IonButton>
      <IonButton onClick={() => setShowToast2(true)} expand="block">Show Toast 2</IonButton>
      <IonToast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message="Your settings have been saved."
        duration={200}
      />

      <IonToast
        isOpen={showToast2}
        onDidDismiss={() => setShowToast2(false)}
        message="Click to Close"
        icon={informationCircle}
        position="top"
        buttons={[
          {
            side: 'start',
            icon: 'star',
            text: 'Favorite',
            handler: () => {
              console.log('Favorite clicked');
            }
          },
          {
            text: 'Done',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]}
      />
    </IonContent>
   </IonPage>
   
  );
};