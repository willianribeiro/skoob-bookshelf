/* eslint-disable no-useless-escape */
import React from 'react'
import PropTypes from 'prop-types'

import { Tab } from 'components/Tabs'
import Bookshelf from 'components/Bookshelf'
import Paginator from 'components/Paginator'

const GenericTab = ({
  title,
  properties,
  fetch,
  initialLoad
}) => {
  return (
    <Tab title={title}>
      {!initialLoad && properties.books && properties.books.length > 0 &&
        <div>
          <Bookshelf books={properties.books} />
          <Paginator
            fetch={fetch}
            pagination={properties.pagination}
            loading={properties.loading}
          />
        </div>
      }
      {!initialLoad && properties.books && properties.books.length === 0 && !properties.error &&
        <div style={{textAlign: 'center', padding: '32px'}}>
          There is no books here ¯\_(ツ)_/¯
        </div>
      }
      {!initialLoad && properties.error &&
        <div style={{textAlign: 'center', padding: '32px'}}>
          Sorry, it was not possible to get this book list. Try again later |:
        </div>
      }
      {initialLoad && <div className='c-loading'>Loading...</div>}
    </Tab>
  )
}

GenericTab.propTypes = {
  title: PropTypes.string,
  properties: PropTypes.object,
  fetch: PropTypes.func,
  initialLoad: PropTypes.bool
}

GenericTab.defaultProps = {
  title: '',
  properties: {},
  fetch: () => {},
  initialLoad: false
}

export default GenericTab
