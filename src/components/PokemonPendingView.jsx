import { ImSpinner } from 'react-icons/im';
import pendingImage from './pending.png';
import PokemonDataView from './PokemonDataView';

export default function PokemonPendingView({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };
  const styles = {
    spinner: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 10,
      fontSize: 24,
    },
  };

  return (
    <div role="alert">
      <div style={styles.spinner}>
        <ImSpinner size="32" className="Icon-spin" />
        Завнтажуємо...
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}
