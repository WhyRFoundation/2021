import React from 'react'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'

const NotFoundPage: React.FC<{}> = () => {
  return (
    <Layout title="404: Not Found">
      <Seo title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... Please try again :)</p>
    </Layout>
  )
}

export default NotFoundPage
