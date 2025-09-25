import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Counter from './components/Counter';
import SearchForm from './components/SearchForm';
import GenreSelect from './components/GenreSelect'; // Импортируем компонент GenreSelect

const App = () => {
  // Поднимаем состояние для текущего выбранного жанра
  const [selectedGenre, setSelectedGenre] = useState('Action'); // Начальный выбор жанра

  // Обработчик выбора жанра
  const handleGenreSelect = (genre) => {
    console.log('Selected genre:', genre);
    setSelectedGenre(genre);
  };

  const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi']; // Список жанров

  return (
    <React.StrictMode>
      <Counter initialValue={0} />
      <SearchForm initialQuery="" onSearch={(query) => console.log('Searching for:', query)} />
      <GenreSelect
        genres={genres} // Передаем список жанров
        selectedGenre={selectedGenre} // Передаем текущее состояние выбранного жанра
        onSelect={handleGenreSelect} // Передаем функцию для изменения состояния
      />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();