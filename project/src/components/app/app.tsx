import MainScreen from '../../pages/main-screen/main-screen';

type PromoFilm = {
  title: string;
  genre: string;
  releaseDate: string;
}

type AppScreenProps = {
  promoFilm: PromoFilm;
  filmsCount: number;
}

function App({promoFilm, filmsCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen
      promoFilm={promoFilm}
      filmsCount={filmsCount}
    />
  );
}

export default App;
