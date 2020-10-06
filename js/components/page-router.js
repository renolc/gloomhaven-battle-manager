import { html, css } from 'https://cdn.skypack.dev/lit-element'
import ConnectedLitElement from './ConnectedLitElement.js'
import { state } from '../state.js'

customElements.define(
  'page-router',
  class extends ConnectedLitElement {
    static get styles() {
      return css`
        .root {
        }
      `
    }

    test() {
      return state.page
    }

    render() {
      return html` <div class="root">${this.test()}</div> `
    }
  }
)
