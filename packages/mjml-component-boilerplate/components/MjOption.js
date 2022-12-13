import { BodyComponent } from 'mjml-core'

export default class MjOption extends BodyComponent {
  static endingTag = true

  static dependencies = {
    // Tell the validator which tags are allowed as our component's parent
    'mj-select': ['mj-option'],
    // Tell the validator which tags are allowed as our component's children
    // 'mj-select': ['mj-option'],
  }

  static allowedAttributes = {
    value: 'string',
  }

  static defaultAttributes = {
    value: '',
  }

  render() {
    return `
      <option
        value="${this.getAttribute('value')}"
      >
      ${this.getContent()}
      </option>
    `
  }
}
