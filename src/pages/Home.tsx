import { useEffect, useState } from 'react';
import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonLoading,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { Character } from '../types/character';
import { getCharacters } from '../services/simpsonsService';
import './Home.css';

const IMAGE_BASE_URL = 'https://cdn.thesimpsonsapi.com/500';

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadCharacters = async () => {
    try {
      setLoading(true);
      setError('');

      const data = await getCharacters();
      setCharacters(data);
    } catch (error) {
      console.error('Error al cargar los personajes:', error);
      setError('No se pudieron cargar los personajes.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Personajes de Los Simpson</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonRefresher
          slot="fixed"
          onIonRefresh={async (event) => {
            await loadCharacters();
            event.detail.complete();
          }}
        >
          <IonRefresherContent
            pullingText="Desliza para actualizar"
            refreshingSpinner="circles"
            refreshingText="Actualizando personajes..."
          />
        </IonRefresher>
        <IonLoading
          isOpen={loading}
          message="Cargando personajes..."
        />

        {error && (
          <div className="state-message error-message">
            {error}
          </div>
        )}

        {!loading && !error && characters.length === 0 && (
          <div className="state-message">
            No hay personajes disponibles.
          </div>
        )}

        {!loading && !error && characters.length > 0 && (
          <IonList className="character-list">
            {characters.map((character) => (
              <IonItem key={character.id} className="character-item">
                <IonAvatar slot="start" className="character-avatar">
                  <img
                    src={`${IMAGE_BASE_URL}${character.portrait_path}`}
                    alt={`Imagen de ${character.name}`}
                  />
                </IonAvatar>

                <IonLabel>
                  <h2>{character.name}</h2>
                  <p>
                    <strong>Género:</strong> {character.gender}
                  </p>
                  <p>
                    <strong>Estado:</strong> {character.status}
                  </p>
                  <p>
                    <strong>Ocupación:</strong> {character.occupation}
                  </p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;