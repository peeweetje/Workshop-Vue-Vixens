import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import nl from './locales/nl.json'
import getBrowserLocale from './util/i18n/get-browser-locale'
import { supportedLocalesInclude } from './util/i18n/supported-locales'

function loadLocaleMessages() {
  const locales = [{ en: en }, { nl: nl }]
  const messages = {}
  locales.forEach((lang) => {
    const key = Object.keys(lang)
    messages[key] = lang[key]
  })
  return messages
}

function getStartingLocale() {
  const browserLocale = getBrowserLocale({ countryCodeOnly: true })
  if (supportedLocalesInclude(browserLocale)) {
    return browserLocale
  } else {
    return process.env.VUE_APP_I18N_LOCALE || 'en'
  }
}

export default createI18n({
  locale: getStartingLocale(),
  fallbackLocale: 'en',
  legacy: false,
  messages: loadLocaleMessages()
})
