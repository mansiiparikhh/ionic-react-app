import { IonApp, IonCard, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import List from './components/List';
import DefaultPage from './components/DefaultPage';
import Profile from './components/Profile';
import {CardExamples} from './components/IonCard';
import { CheckboxExamples } from './components/CheckBox';
import {BadgeExample} from './components/Budge'
import { ChipExamples } from './components/Chip';
import {AlertExample} from './components/Alert'
import { ActionSheetExample } from './components/ActionSheet';
import InfiniteScrollExample from './components/InfiniteScroll';
import { ProgressbarExample } from './components/Progressbar';
import { SearchBarExamples } from './components/SearchBar';
import { ToastExample } from './components/Toast';
import { ModalExample } from './components/Model';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
          <Route path="/List" exact={true}>
            <List />
          </Route>
          <Route path="/Card" exact={true}>
            <CardExamples />
          </Route>
          <Route path="/CheckBox" exact={true}>
            <CheckboxExamples />
          </Route>
          <Route path="/Profile" exact={true}>
            <Profile />
          </Route>
          <Route path="/Budge" exact={true}>
            <BadgeExample/>
          </Route>
          <Route path="/Chip" exact={true}>
            <ChipExamples/>
          </Route>
          <Route path="/Alert" exact={true}>
            <AlertExample/>
          </Route>
          <Route path="/ActionSheet" exact={true}>
            <ActionSheetExample/>
          </Route>
          <Route path="/InfiniteScroll" exact={true}>
            <InfiniteScrollExample/>
          </Route>
          <Route path="/Progressbar" exact={true}>
            <ProgressbarExample/>
          </Route>
          <Route path="/Searchbar" exact={true}>
            <SearchBarExamples/>
          </Route>
          <Route path="/Toast" exact={true}>
            <ToastExample/>
          </Route>
          <Route path="/Model" exact={true}>
            <ModalExample/>
          </Route>
          <Route path="/page/:name" exact={true}>
            <DefaultPage />
          </Route>
          <Route path="/" exact={true}>
            <Redirect to="/page/Inbox" />
          </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
