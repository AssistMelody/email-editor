import { BodyComponent } from 'mjml-core'

export default class MjInput extends BodyComponent {
  static endingTag = false

  static dependencies = {
    // Tell the validator which tags are allowed as our component's parent
    'mj-form': ['mj-input'],
    // Tell the validator which tags are allowed as our component's children
    // 'mj-basic-component': [],
  }

  static allowedAttributes = {
    type: 'enum(text,radio,checkbox,date,email,tel)',
    name: 'string',
    value: 'string',
    placeholder: 'string',
  }

  static defaultAttributes = {
    type: 'text',
    name: 'name',
    value: '',
    placeholder: 'placeholder',
  }

  render() {
    return `
      <input
        type="${this.getAttribute('type')}"
        name="${this.getAttribute('name')}"
        value="${this.getAttribute('value')}"
        placeholder="${this.getAttribute('placeholder')}"
      />
    `
  }
}
