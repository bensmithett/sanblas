import React from 'react'
import { Helmet } from 'react-helmet'
import favicon from '../images/favicon.png'

export default function DefaultLayout ({ meta, children }) {
  return (
    <div role='main'>
      <Helmet>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='alternate' href='/feed.json' type='application/json' />
        <link rel='icon' href={favicon} />
      </Helmet>

      {children}
    </div>
  )
}
