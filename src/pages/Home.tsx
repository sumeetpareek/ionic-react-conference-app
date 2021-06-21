import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonCheckbox, IonLabel, IonNote, IonBadge } from '@ionic/react';

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Ionic Blank</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding">
                The world is your oster.
            <p>
                    If you get lost, the {' '}
                    <a
                        target="_blank"
                        rel="noopener"
                        href="https://ionicframework.com/docs/"
                    >
                        docs
                </a>{' '}
                will be your guide.
                </p>

                <IonList>
                    <IonItem>
                        <IonCheckbox slot="start" />
                        <IonLabel>
                            <h1>Create Idea</h1>
                            <IonNote>Run Idea by Brandy</IonNote>
                        </IonLabel>
                        <IonBadge color="success" slot="end">
                            5 Days
                        </IonBadge>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default React.memo(Home);