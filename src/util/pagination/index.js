import React, {Component} from 'react'
import RcPagination from 'rc-pagination'

import 'rc-pagination/assets/index.css'

class Pagination extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>
          <RcPagination
            {...this.props}
            hideOnSinglePage={true}
            showQuickJumper={true}/>
        </div>
      </div>
    );
  }
}

export default Pagination
