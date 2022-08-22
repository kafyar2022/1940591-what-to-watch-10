import { useState } from 'react';
import { Tab } from '../../../const';
import { Film } from '../../../types/film';
import FilmDetails from './film-details/film-details';
import FilmOverview from './film-overview/film-overview';
import FilmReviews from './film-reviews/film-reviews';

type FilmTabsProps = {
  film: Film;
}

function FilmTabs({ film }: FilmTabsProps): JSX.Element {
  const [currentTab, setCurrentTab] = useState(Tab.Overview);

  const renderCurrentTab = () => {
    switch (currentTab) {
      case Tab.Overview:
        return <FilmOverview film={film} />;
      case Tab.Details:
        return <FilmDetails film={film} />;
      case Tab.Reviews:
        return <FilmReviews film={film} />;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${currentTab === Tab.Overview && 'film-nav__item--active'}`}>
            <button
              className="film-nav__link"
              onClick={() => setCurrentTab(Tab.Overview)}
            >
              Overview
            </button>
          </li>

          <li className={`film-nav__item ${currentTab === Tab.Details && 'film-nav__item--active'}`}>
            <button
              className="film-nav__link"
              onClick={() => setCurrentTab(Tab.Details)}
            >
              Details
            </button>
          </li>

          <li className={`film-nav__item ${currentTab === Tab.Reviews && 'film-nav__item--active'}`}>
            <button
              className="film-nav__link"
              onClick={() => setCurrentTab(Tab.Reviews)}
            >
              Reviews
            </button>
          </li>
        </ul>
      </nav>

      {renderCurrentTab()}
    </div>
  );
}

export default FilmTabs;
