import { html, css } from 'https://cdn.skypack.dev/lit-element'
import ConnectedLitElement from './ConnectedLitElement.js'
import { state } from '../state.js'
import './element-toggle.js'

customElements.define(
  'battle-page',
  class extends ConnectedLitElement {
    static get styles() {
      return css`
        .top-bar {
          background-color: #555;
          color: white;
          display: flex;
          padding: 0 8px;
          line-height: 1;
          height: 50px;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
        }

        .menu {
          font-size: 30px;
        }

        .elements {
          margin-left: auto;
          display: flex;
        }

        element-toggle:not(:last-child) {
          margin-right: 4px;
        }
      `
    }

    render() {
      return html`
        <div class="root">
          <div class="top-bar">
            <div class="menu">&#9776;</div>
            <div class="elements">
              <element-toggle color="#c73f3f" icon="🔥"></element-toggle>
              <element-toggle color="#4ca2d4" icon="❄️"></element-toggle>
              <element-toggle color="#899fac" icon="💨"></element-toggle>
              <element-toggle color="#72a35b" icon="🍃"></element-toggle>
              <element-toggle color="#ccc346" icon="☀️"></element-toggle>
              <element-toggle color="#6e6fac" icon="🌙"></element-toggle>
            </div>
          </div>
        </div>
      `
    }
  }
)
