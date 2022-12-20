import { BodyComponent } from 'mjml-core'

export default class MjFormControl extends BodyComponent {
  constructor(initialDatas = {}) {
    super(initialDatas)
  }
  
  static dependencies = {
    // Tell the validator which tags are allowed as our component's parent
    'mj-form-item': ['mj-form-control'],
    // Tell the validator which tags are allowed as our component's children
    'mj-form-control': ['mj-form-input', 'mj-form-select'],
  }

  static allowedAttributes = {
    label: 'string',
  }

  static defaultAttributes = {
    value: 'label',
  }

  render() {
    return this.renderChildren(this.props.children, {
      rawXML: false,
      renderer: (element) => element.render(),
    })
  }
}
