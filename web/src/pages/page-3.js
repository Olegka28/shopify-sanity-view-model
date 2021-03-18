import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import em from '~/images/Thonker.glb'

const ThreePage = () => (
  <>
    <SEO title="Page three" />
    <h1>Hi from the three page</h1>
    <p>Welcome to page 3</p>
    <model-viewer
      src={em}
      alt="A 3D model of an astronaut"
      auto-rotate
      camera-controls
    ></model-viewer>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default ThreePage
