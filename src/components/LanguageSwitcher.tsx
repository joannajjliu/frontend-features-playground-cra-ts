import React, { useContext } from 'react'

import LanguageContext from '@/language-context'

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext)
  return (
    <button onClick={() => setLanguage(language === 'jp' ? 'en' : 'jp')}>
      Switch Language (Current: {language})
    </button>
  )
}

export default LanguageSwitcher
