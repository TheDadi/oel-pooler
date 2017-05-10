import React, { Component }  from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import SVGIcon from 'grommet/components/SVGIcon'

export default class AppLogo extends Component {

  static propTypes = {
    busy: PropTypes.bool,
    colorIndex: PropTypes.string,
    size: PropTypes.oneOf(['medium', 'large'])
  }

  static defaultProps = {
    colorIndex: 'brand'
  }

  render () {
    const { busy, className, colorIndex, size, ...props } = this.props
    const logoClasses = classnames(
      'oil-logo',
      {
        'oil-logo--busy': busy,
        [`${className}`] : className
      }
    )

    return (
      <SVGIcon {...props} className={logoClasses}
        colorIndex={colorIndex} size={size} viewBox='0 0 500 500' version='1.1'
        type='logo' a11yTitle='Oil Logo'>
        <path d='M109.676 329.772c0 76.403 63.053 138.278 140.825 138.278 77.778 0 140.823-61.875
        140.823-138.278 0-97.943-109.29-161.542-118.108-270.567v-4.543c0-12.536-10.179-22.713-22.715-22.713-12.537
        0-22.713 10.177-22.713 22.713v4.543c-9.087 109.026-118.112 172.625-118.112 270.567zm160.361 56.512c19.628-4.543
        35.243-21.26 39.786-39.52 1.552-8.544 8.994-14.993 17.905-14.993 9.987 0 18.168 8.181 18.168 18.167 0
        13.079-10.992 32.983-25.978 47.876-14.726 14.543-32.261 24.81-46.703 24.81-9.991
        0-18.172-8.447-18.172-18.436.001-8.91 6.45-16.36 14.994-17.904z' fill='currentColor' />
      </SVGIcon>
    )
  }

}
