/* Using with IonModal Component */

import React, { useState } from 'react';
import { IonModal, IonButton, IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';

export const ModalExample: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
      <IonPage>
          <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Model Example</IonTitle>
        </IonToolbar>
      </IonHeader>
<IonContent>
      <IonModal isOpen={showModal} >
        <p>This is modal content</p>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
    </IonContent>
      </IonPage>
    
  );
};