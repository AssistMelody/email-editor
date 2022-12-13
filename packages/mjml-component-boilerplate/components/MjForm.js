import { BodyComponent } from 'mjml-core'

export default class MjForm extends BodyComponent {
  constructor(initialDatas = {}) {
    super(initialDatas)
  }

  static dependencies = {
    // Tell the validator which tags are allowed as our component's parent
    'mj-section': ['mj-form'],
    'mj-column': ['mj-form'],
    // Tell the validator which tags are allowed as our component's children
    'mj-form': ['mj-form-item'],
  }

  static allowedAttributes = {
    method: 'enum(get,post)',
    action: 'string',
    layout: 'enum(horizontal,vertical,inline)',
  }

  static defaultAttributes = {
    method: 'post',
    action: '',
    layout: 'horizontal',
  }

  render() {
    return `
    <form method="${this.getAttribute('method')}"
     action="${this.getAttribute('action')}">
      ${this.renderChildren(this.props.children, {
        rawXML: false,
        renderer: (element) => element.render(),
        attributes: {
          layout: this.getAttribute('layout')
        }
      })}
    </form>
    `
  }
}
