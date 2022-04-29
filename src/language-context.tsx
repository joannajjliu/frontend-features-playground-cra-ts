import React from 'react'

// set the defaults
const LanguageContext = React.createContext({
  language: 'en',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLanguage: (lang: string) => {},
})

export default LanguageContext
