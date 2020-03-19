import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/Sort.styles.scss';

class Sort extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      value: 'Newest First',
    };
    this.menuClick = this.menuClick.bind(this);
  }

  menuClick(event) {
    event.preventDefault();
    if (this.state.showMenu === true) {
      this.setState({ showMenu: false });
    } else {
      this.setState({ showMenu: true });
    }
  }

  render() {
    return (
      <span>
        <div className="container">
          <button type="button" className="button" onClick={this.menuClick}>
            Sort by
            <strong>{` ${this.state.value} `}</strong>
            <FontAwesomeIcon icon={faSortDown} size="xs" />
          </button>
          <div className="dropdown">
            <ul>
              <li>Newest First</li>
              <li>Oldest First</li>
              <li>Highest Rated</li>
              <li>Lowest Rated</li>
            </ul>
          </div>

          {/* {
          this.state.showMenu
            ? (
              <div className="menu">
                <button>Newest First</button>
                <button>Oldest First</button>
                <button>Highest Rated</button>
                <button>Lowest Rated</button>
              </div>
            )
            : (
              null
            )
      } */}
        </div>
      </span>
    );
  }
}
export default Sort;
