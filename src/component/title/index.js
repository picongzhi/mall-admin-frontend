import React, {Component} from 'react'

class Title extends Component {
  componentWillMount() {
    document.title = this.props.title
  }

  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>
          <h1 className='page-header'>{this.props.title}</h1>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Title
