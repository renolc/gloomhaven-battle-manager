import { html, css, LitElement } from 'https://cdn.skypack.dev/lit-element'
import { state, sub, unsub } from '../state.js'

customElements.define(
  'element-toggle',
  class extends LitElement {
    static get properties() {
      return {
        icon: { type: String },
        color: { type: String }
      }
    }

    static get styles() {
      return css`
        .root {
          border-radius: 100%;
          width: 40px;
          height: 40px;
          color: transparent;
          display: grid;
          place-items: center;
          text-shadow: 0 0 0 white;
          font-size: 25px;
          line-height: 1;
        }
      `
    }

    connectedCallback() {
      super.connectedCallback()
      this.boundUpdate = () => this.requestUpdate()
      sub(`${this.icon}:changed`, this.boundUpdate)
    }

    disconnectedCallback() {
      super.disconnectedCallback()
      unsub(`${this.icon}:changed`, this.boundUpdate)
    }

    toggle() {
      if (state[this.icon] === 1) state[this.icon] = 0.5
      else if (state[this.icon] === 0.5) state[this.icon] = 0
      else state[this.icon] = 1
    }

    render() {
      let style = 'opacity: 0.5;'
      if (state[this.icon] === 1) style = `background-color: ${this.color}`
      else if (state[this.icon] === 0.5)
        style = `background: linear-gradient(0, ${this.color} 50%, rgba(0, 0, 0, 0) 50%)`
      return html`
        <div class="root" style="${style}" @click=${this.toggle}>
          ${this.icon}
        </div>
      `
    }
  }
)
