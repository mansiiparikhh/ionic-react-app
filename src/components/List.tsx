import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar , IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonAvatar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import Header from './Header';
import React, { useState } from 'react';

const List: React.FC = () => {
  React.useEffect(() => {
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>List</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <IonList>
        <IonItem>
                <IonAvatar slot="start">
                  <img src="/bandit.png" />
                </IonAvatar>
                <IonLabel>
                  <h2>Finn</h2>
                  <h3>I'm a big deal</h3>
                  <p>Listen, I've had a pretty messed up day...</p>
                </IonLabel>
              </IonItem>
            <IonItem>
                <IonAvatar slot="start">
                <img src="./avatar-rey.png" />
                </IonAvatar>
                <IonLabel>
                  <h2>Finn</h2>
                  <h3>I'm a big deal</h3>
                  <p>Listen, I've had a pretty messed up day...</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <img src="./" />
                </IonAvatar>
                <IonLabel>
                  <h2>Finn</h2>
                  <h3>I'm a big deal</h3>
                  <p>Listen, I've had a pretty messed up day...</p>
                </IonLabel>
              </IonItem>
        </IonList>
        </IonContent>
    </IonPage>
  );
};

export default List;
