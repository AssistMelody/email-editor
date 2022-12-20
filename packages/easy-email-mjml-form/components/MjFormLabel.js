import { BodyComponent } from 'mjml-core'

export default class MjFormLabel extends BodyComponent {
  static endingTag = true

  static dependencies = {
    // Tell the validator which tags are allowed as our component's parent
    'mj-form-item': ['mj-form-label'],
    // Tell the validator which tags are allowed as our component's children
    // 'mj-select': ['mj-option'],
  }

  static allowedAttributes = {
    label: 'string',
  }

  static defaultAttributes = {
    value: 'label',
  }

  render() {
    return `
      <label style="font-size:12px">
        ${this.getContent()}
      </label>
    `
  }
}
