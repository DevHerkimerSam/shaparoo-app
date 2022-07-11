// Import deps
import React from 'react'
import { render } from 'react-dom'

// Import components
import { Shaparoo } from './components/shaparoo'

// Import styles
import './styles/styles.css'

// Find div container
const rootElement = document.getElementById('root')

// Render Shaparoo component in the DOM
render(<Shaparoo />, rootElement)