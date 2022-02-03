import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, checkboxSharp, heartOutline, heartSharp, list, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'List',
    url: '/List',
    iosIcon: list,
    mdIcon: list
  },
  {
    title: 'Profile',
    url: '/Profile',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Ion Card',
    url: '/Card',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Check box',
    url: '/CheckBox',
    iosIcon: checkboxSharp,
    mdIcon: checkboxSharp
  },
  {
    title: 'Budge',
    url: '/Budge',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Chip',
    url: '/Chip',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Alert',
    url: '/Alert',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'ActionSheet',
    url: '/ActionSheet',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'InfiniteScroll',
    url: '/InfiniteScroll',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Progressbar',
    url: '/Progressbar',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Searchbar',
    url: '/Searchbar',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Toast',
    url: '/Toast',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Model',
    url: '/Model',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Outbox',
    url: '/page/Outbox',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Favorites',
    url: '/page/Favorites',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Archived',
    url: '/page/Archived',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
  {
    title: 'Trash',
    url: '/page/Trash',
    iosIcon: trashOutline,
    mdIcon: trashSharp
  },
  {
    title: 'Spam',
    url: '/page/Spam',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  }
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Menu</IonListHeader>
          <IonNote>Ionic Components</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
