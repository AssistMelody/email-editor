import { BodyComponent } from 'mjml-core'

export default class MjFormItem extends BodyComponent {
  constructor(initialDatas = {}) {
    super(initialDatas)
  }

  static dependencies = {
    // Tell the validator which tags are allowed as our component's parent
    'mj-form': ['mj-form-item'],
    // Tell the validator which tags are allowed as our component's children
    'mj-form-item': ['mj-form-label', 'mj-form-control'],
  }

  static allowedAttributes = {
    method: 'enum(horizontal,vertical,inline)',
    action: 'string',
  }

  static defaultAttributes = {
    method: 'post',
    action: '',
  }

  render() {
    const { layout } = this.attributes
    if (layout === 'horizontal') {
      return `
        <div>
        ${this.renderChildren(this.props.children, {
          rawXML: false,
          renderer: (element) => element.render(),
        })}
        </div>
    `
    } else {
      const [label, control] = this.props.children
      return `
        <div>
        ${this.renderChildren([label], {
          rawXML: false,
          renderer: (element) => element.render(),
        })}
        </div>
        <div>
        ${this.renderChildren([control], {
          rawXML: false,
          renderer: (element) => element.render(),
        })}
        </div>
    `
    }
    // return `
    // <form method="${this.getAttribute('method')}"
    //  action="${this.getAttribute('action')}">
    //   ${this.renderChildren(this.props.children, {
    //     rawXML: false,
    //     renderer: (element) => element.render(),
    //   })}
    // </form>
    // `
  }
}
