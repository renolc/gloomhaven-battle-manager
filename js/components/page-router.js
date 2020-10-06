import { html, css } from 'https://cdn.skypack.dev/lit-element'
import ConnectedLitElement from './ConnectedLitElement.js'
import { state } from '../state.js'
import './connect-page.js'
import './battle-page.js'

customElements.define(
  'page-router',
  class extends ConnectedLitElement {
    static get styles() {
      return css`
        .root {
        }
      `
    }

    page() {
      switch (state.page) {
        case 'battle':
        default:
          return html`<battle-page></battle-page>`

        case 'connect':
          return html`<connect-page></connect-page>`
      }
    }

    render() {
      return html` <div class="root">${this.page()}</div> `
    }
  }
)
