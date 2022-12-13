import { BodyComponent } from 'mjml-core'

export default class MjSelect extends BodyComponent {
  constructor(initialDatas = {}) {
    super(initialDatas)
  }

  static dependencies = {
    // Tell the validator which tags are allowed as our component's parent
    'mj-form': ['mj-form'],
    // Tell the validator which tags are allowed as our component's children
    'mj-select': ['mj-option'],
  }

  static allowedAttributes = {
    name: 'string',
    placeholder: 'string',
  }

  static defaultAttributes = {
    name: 'select',
    placeholder: 'placeholder',
  }

  render() {
    return `
      <select
        name="${this.getAttribute('name')}"
        placeholder="${this.getAttribute('placeholder')}"
      >
      ${this.renderChildren(this.props.children, {
        rawXML: false,
        renderer: (element) => element.render(),
      })}
      </select>
    `
  }
}
