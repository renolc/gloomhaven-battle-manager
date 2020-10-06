import { html, css } from 'https://cdn.skypack.dev/lit-element'
import { state } from '../state.js'
import ConnectedLitElement from './ConnectedLitElement.js'

customElements.define(
  'page-router',
  class extends ConnectedLitElement {
    static get styles() {
      return css`
        .root {
        }
      `
    }

    render() {
      return html`<div class="root">${state.page}</div>`
    }
  }
)
