import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: props.initialQuery || '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  handleSearch() {
    const { onSearch } = this.props;
    if (onSearch) {
      onSearch(this.state.query);
    }
  }

  handleKeyPress(event) {
    const { onSearch } = this.props;
    if (event.key === 'Enter' && onSearch) {
      onSearch(this.state.query);
    }
  }

  render() {
    return React.createElement(
      'div',
      { style: { textAlign: 'center', margin: '20px' } },
      React.createElement(
        'input',
        {
          type: 'text',
          value: this.state.query,
          onChange: this.handleInputChange,
          onKeyPress: this.handleKeyPress,
          placeholder: 'Search...',
          style: { marginRight: '10px', padding: '5px' },
        }
      ),
      React.createElement(
        'button',
        {
          onClick: this.handleSearch,
          style: { padding: '5px 10px' },
        },
        'Search'
      )
    );
  }
}

export default SearchForm;