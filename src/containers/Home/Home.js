import React, { Component } from 'react'
import classnames from 'classnames'

import BookApi from 'services/BookApi'
import { Tabs } from 'components/Tabs'
import AppHeader from 'components/AppHeader'
import GenericTab from './GenericTab'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      alreadyRead: {
        books: [],
        pagination: {},
        loading: false
      },
      reading: {
        books: [],
        pagination: {},
        loading: false
      },
      wantRead: {
        books: [],
        pagination: {},
        loading: false
      },
      alreadyReadInitialLoad: true,
      readingInitialLoad: true,
      wantReadInitialLoad: true,
      fixedHeader: false
    }

    this.contentContainer = null
    this.contentOffsetTop = null
  }

  // private functions
  _handleError = error => {
    console.log(error)
  }

  _handleScroll = e => {
    if (this._shouldFixHeader(e)) {
      this.setState({ fixedHeader: true })
    } else if (this._shouldUnfixHeader(e)) {
      this.setState({ fixedHeader: false })
    }
  }

  _shouldFixHeader = e => (
    e.target.scrollTop >= this.contentOffsetTop && !this.state.fixedHeader
  )

  _shouldUnfixHeader = e => (
    e.target.scrollTop < this.contentOffsetTop && this.state.fixedHeader
  )

  // lifecycle functions
  componentWillMount () {
    this.fetchAlreadyRead(1)
    this.fetchReading(1)
    this.fetchWantRead(1)
  }

  componentDidMount() {
    this.contentOffsetTop = this.contentContainer.offsetTop
  }

  // public functions
  fetchAlreadyRead = page => {
    this.setState({ alreadyRead: { ...this.state.alreadyRead, loading: true } })

    BookApi.fetchAlreadyRead(page)
      .then(response => {
        const books = this.state.alreadyRead.books
        const booksUpdated = books.concat(response.data.response)
        const alreadyRead = {
          books: booksUpdated,
          pagination: response.data.paging,
          loading: false
        }
        this.setState({ alreadyRead: alreadyRead })
        this.setState({ alreadyReadInitialLoad: false })
      })
      .catch(error => this._handleError(error))
  }

  fetchReading = page => {
    this.setState({ reading: { ...this.state.reading, loading: true } })

    BookApi.fetchReading(page)
      .then(response => {
        const books = this.state.reading.books
        const booksUpdated = books.concat(response.data.response)
        const reading = {
          books: booksUpdated,
          pagination: response.data.paging,
          loading: false
        }
        this.setState({ reading: reading })
        this.setState({ readingInitialLoad: false })
      })
      .catch(error => this._handleError(error))
  }

  fetchWantRead = page => {
    this.setState({ wantRead: { ...this.state.wantRead, loading: true } })

    BookApi.fetchWantRead(page)
      .then(response => {
        const books = this.state.wantRead.books
        const booksUpdated = books.concat(response.data.response)
        const wantRead = {
          books: booksUpdated,
          pagination: response.data.paging,
          loading: false
        }
        this.setState({ wantRead: wantRead })
        this.setState({ wantReadInitialLoad: false })
      })
      .catch(error => this._handleError(error))
  }

  render () {
    const {
      alreadyRead,
      reading,
      wantRead,
      alreadyReadInitialLoad,
      readingInitialLoad,
      wantReadInitialLoad,
      fixedHeader
    } = this.state

    const classNames = classnames(
      'pg-home',
      { 'is-header-fixed': fixedHeader }
    )

    return (
      <div className={classNames} onScroll={e => this._handleScroll(e)}>
        <AppHeader title='My Bookshelf' />

        <div className='pg-home__content' ref={el => this.contentContainer = el}>
          <Tabs initialTab={1} className='pg-custom-tabs'>
            <GenericTab
              title={'Already read'}
              properties={alreadyRead}
              fetch={this.fetchAlreadyRead}
              initialLoad={alreadyReadInitialLoad}
            />
            <GenericTab
              title={'Reading'}
              properties={reading}
              fetch={this.fetchReading}
              initialLoad={readingInitialLoad}
            />
            <GenericTab
              title={'Want to read'}
              properties={wantRead}
              fetch={this.fetchWantRead}
              initialLoad={wantReadInitialLoad}
            />
          </Tabs>
        </div>
      </div>
    )
  }
}

export default Home
