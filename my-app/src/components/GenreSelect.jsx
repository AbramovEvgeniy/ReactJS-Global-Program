import React from 'react';

class GenreSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleGenreClick = this.handleGenreClick.bind(this);
  }

  handleGenreClick(genre) {
    const { onSelect } = this.props;
    if (onSelect) {
      onSelect(genre);
    }
  }

  render() {
    const { genres, selectedGenre } = this.props;

    const genreButtons = genres.map((genre) =>
      React.createElement(
        'button',
        {
          key: genre, 
          onClick: () => this.handleGenreClick(genre),
          style: {
            margin: '5px',
            padding: '10px',
            border: '1px solid',
            borderRadius: '5px',
            backgroundColor: genre === selectedGenre ? 'blue' : 'white',
            color: genre === selectedGenre ? 'white' : 'black',
            cursor: 'pointer',
          },
        },
        genre
      )
    );


    return React.createElement(
      'div',
      { style: { textAlign: 'center', margin: '20px' } },
      React.createElement('h2', null, 'Select a Genre'),
      ...genreButtons
    );
  }
}

export default GenreSelect;