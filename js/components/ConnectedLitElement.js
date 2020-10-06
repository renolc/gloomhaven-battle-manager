import { LitElement } from 'https://cdn.skypack.dev/lit-element'
import { sub, unsub } from '../state.js'

export default class extends LitElement {
  connectedCallback() {
    super.connectedCallback()

    this.__events = Array.from(
      new Set(
        this.constructor
          .toString()
          .split(/[\s{}]/)
          .filter(i => i.startsWith('state.'))
          .map(i => `${i.split('state.')[1]}:changed`)
      )
    )

    this.__events.forEach(i => {
      this[i] = () => this.requestUpdate()
      sub(i, this[i])
    })
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.__events.forEach(i => unsub(i, this[i]))
  }
}
