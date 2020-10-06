export const pub = (type, detail = {}) =>
  window.dispatchEvent(new CustomEvent(type, { detail }))

export const sub = (type, fn) => window.addEventListener(type, fn)
export const unsub = (type, fn) => window.removeEventListener(type, fn)

export const state = new Proxy(
  {},
  {
    get(obj, prop) {
      return obj[prop]
    },

    set(obj, prop, value) {
      pub(`${prop}:changed`, { value })
      obj[prop] = value
      return true
    }
  }
)
