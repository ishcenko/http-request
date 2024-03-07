import ErrorImage from './error.jpg';
export default function PokemonErrorView({ message }) {
  return (
    <div role="alert">
      <img src={ErrorImage} width="320" alt="sabcat" />
      {message}
    </div>
  );
}
