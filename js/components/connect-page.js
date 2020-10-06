import { html, css } from 'https://cdn.skypack.dev/lit-element'
import ConnectedLitElement from './ConnectedLitElement.js'
import { state } from '../state.js'

customElements.define(
  'connect-page',
  class extends ConnectedLitElement {
    static get styles() {
      return css`
        .root {
          width: 100vw;
          height: 100vh;
          display: grid;
          place-items: center;
        }

        .box {
          border-radius: 5px;
          border: 3px solid grey;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding: 16px;
          text-align: right;
        }

        .input {
          margin-bottom: 16px;
        }
      `
    }

    render() {
      return html`
        <div class="root">
          <div class="box">
            <div class="input">
              game id
              <input />
            </div>
            <div class="actions"><button>ok</button></div>
          </div>
        </div>
      `
    }
  }
)
