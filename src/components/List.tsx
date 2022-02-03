import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar , IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonAvatar,IonIcon,IonFabButton,IonFab, IonSearchbar } from '@ionic/react';
import { add, pencil, pencilSharp, trash, trashBin,} from 'ionicons/icons';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import Header from './Header';
import { useState } from 'react';
import avtar from '../assets/bandit.png'
import React from 'react';

const List: React.FC = () => {
  
  const customerList = [
    {
      id:1,profile:avtar,title:'Finn',discription:"I'm a big deal",bigDisc:"Listen, I've had a pretty messed up day..."
    },
    {
      id:2,profile:avtar,title:'Finn',discription:"I'm a big deal",bigDisc:"Listen, I've had a pretty messed up day..."
    },
    {
      id:3,profile:avtar,title:'Finn',discription:"I'm a big deal",bigDisc:"Listen, I've had a pretty messed up day..."
    }
  ]
  
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
      <IonSearchbar onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="focus"></IonSearchbar>
       <IonList>
        {customerList.map((data)=>{
          return(
            <IonItem>
            <IonAvatar slot="start">
              <img src={data.profile} />
            </IonAvatar>
            <IonLabel>
              <h2>{data.title}</h2>
              <h3>{data.discription}</h3>
              <p>{data.bigDisc}</p>
            </IonLabel>
              <IonIcon size={'10'} icon={pencil} />
              <IonIcon size={'10'} icon={trash} />      
          </IonItem>
          )
        })}
        </IonList>        
          <IonFab vertical="bottom" horizontal="end"slot="fixed">   
          <a href="/Profile" >
          <IonFabButton>
              <IonIcon icon={add}/>
            </IonFabButton>
            </a>
          </IonFab>
        </IonContent>
    </IonPage>
  );
};

export default List;
function setSearchText(arg0: string): void {
  throw new Error('Function not implemented.');
}

