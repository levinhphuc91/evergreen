import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M12 5c-.28 0-.53.11-.71.29L8 8.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l4-4A1.003 1.003 0 0 0 12 5z'
]
const svgPaths20 = [
  'M16 6c-.28 0-.53.11-.71.29L10 11.59l-5.29-5.3a1.003 1.003 0 0 0-1.42 1.42l6 6c.18.18.43.29.71.29s.53-.11.71-.29l6-6A1.003 1.003 0 0 0 16 6z'
]

export default class ChevronDownIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}