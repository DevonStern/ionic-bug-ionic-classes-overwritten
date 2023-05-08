import { IonButton, IonContent, IonPage } from '@ionic/react';
import './Home.css';
import { useState } from 'react';

const Home: React.FC = () => {
  const [active, setActive] = useState<boolean>(false)

  const classes = active ? 'long' : ''

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonButton class={classes} onClick={() => setActive(value => !value)}>
          Test
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
