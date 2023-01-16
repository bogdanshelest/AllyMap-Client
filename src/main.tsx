import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createTheme, ThemeOptions } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import App from './App'

import './index.css'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const AllyMapTheme: ThemeOptions = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#6750a4'
		},
		secondary: {
			main: '#625b71'
		},
	},
	shape: {
		borderRadius: 15,
	},
})


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={AllyMapTheme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
)