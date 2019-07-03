/** @jsx createElement **/
import { createElement, Component } from 'react'
import HelpIcon from '@/views/ui/icons/HelpIcon'

interface State {
  show: boolean
}

class Help extends Component<{}, State> {
  state = {
    show: false
  }

  _toggleHelp = () => {
    this.setState(prev => ({ show: !prev.show }))
  }

  render() {
    const { children } = this.props

    return (
      <aside className={this.state.show ? 'help active' : 'help'}>
        <div className="drawer">
          <button title="Show Help Menu" className="toggle" onClick={this._toggleHelp}>
            <HelpIcon />
          </button>

          <h2>Help</h2>
          {children}
        </div>
      </aside>
    )
  }
}

export default Help
