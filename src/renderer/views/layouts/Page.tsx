/** @jsx createElement **/
import { createElement, SFC } from 'react'
import { connect } from 'react-redux'
import { RootState } from '@/models/app'
import { GithubAuth } from '@/models/github'
import { ROUTES } from '@/config/routes'
import * as Pages from '@/views/pages'
import Dashboard from '@/views/layouts/Dashboard'
import WelcomePage from '@/views/pages/WelcomePage'
import InvoicePrint from '@/views/invoices/InvoicePrint'

interface Connected {
  auth: GithubAuth
  page: string
}

const Page: SFC<Connected> = ({ page, auth }) => {
  if (page === ROUTES.welcome.name && !auth.accessToken) {
    return <WelcomePage />
  }

  if (window.location.search.match(/\?invoice\=/)) {
    return <InvoicePrint />
  }

  let child = null

  switch (page) {
    case ROUTES.board.name:
      child = <Pages.BoardPage />
      break
    case ROUTES.create.name:
      child = <Pages.CreatePage />
      break
    case ROUTES.profile.name:
      child = <Pages.ProfilePage />
      break
    case ROUTES.timers.name:
      child = <Pages.TimersPage />
      break
    case ROUTES.invoices.name:
      child = <Pages.InvoicesPage />
      break
    case ROUTES.settings.name:
      child = <Pages.SettingsPage />
      break
    default:
      child = <Pages.ProfilePage />
  }

  return <Dashboard>{child}</Dashboard>
}

const mapState = (state: RootState): Connected => ({
  auth: state.github,
  page: state.settings.page
})

export default connect(mapState)(Page)
