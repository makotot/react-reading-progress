import React from 'react'
import PropTypes from 'prop-types'
import throttle from './throttle'
import styled from 'styled-components'

const Progress = ({ value, max, className }) => {
  return (
    <progress
      value={ value }
      max={ max }
      className={ className }
    />
  )
}

const StyledProgress = styled(Progress)`
  position: fixed;
  display: block;
  top: 0;
  width: 100vw;
  height: 0.4rem;
  border: 0;
  background-color: transparent;
  color: rgb(97, 13, 255);
  z-index: 1;

  &::-webkit-progress-bar {
    background: #FFF;
  }

  &::-webkit-progress-value {
    background: rgb(97, 13, 255);
  }

  &::-moz-progress-bar {
    background-color: rgb(97, 13, 255);
  }

  ${ props => props.style }
`

export default class ReadingProgress extends React.Component {

  static get propTypes() {
    return {
      targetEl: PropTypes.string,
      className: PropTypes.string,
      style: PropTypes.object,
      hideNoAndFullProgress: PropTypes.bool,
    }
  }

  static get defaultProps() {
    return {
    }
  }

  constructor(props) {
    super(props)

    this.targetEl = null
    this.rootEl = null
    this.max = 0
    this.viewportH = 0
    this.targetHeight = 0

    this.hideProgress(0)

    this.state = {
      value: 0,
    }
  }

  componentDidMount() {
    const { props } = this

    this.targetEl = props.targetEl ? document.querySelector(props.targetEl) : document.body
    this.rootEl = props.rootEl ? document.querySelector(props.rootEl) : window

    this.measure()
    this.rootEl.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    this.rootEl.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  }

  measureViewportHeight() {
    return !this.props.rootEl ?
      Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      :
      this.rootEl.clientHeight
  }

  measure() {
    if (this.targetEl) {
      this.targetHeight = this.targetEl.getBoundingClientRect().height
    }
    this.viewportH = this.measureViewportHeight()
    this.max = this.targetHeight - this.viewportH
  }

  handleResize = () => {
    throttle(this.measure(), 100)
  }

  handleScroll = () => {
    throttle(this.update(), 100)
  }

  update = () => {
    let value = !this.props.rootEl ?
      window.pageYOffset || document.documentElement.scrollTop
      :
      this.rootEl.scrollTop

    if (this.props.targetEl) {
      if (this.targetEl.getBoundingClientRect().top >= 0) {
        value = 0
      } else {
        value = value - (this.targetEl.getBoundingClientRect().top + window.pageYOffset)
      }
    }
    this.hideProgress(value)

    this.setState({
      value,
    })
  }

  hideProgress = (value) => {
    if (this.props.hideNoAndFullProgress) {
      if (value <= 0 || value >= this.max) {
        this.props.style.display = 'none'
      } else {
        this.props.style.display = ''
      }
    }
  }

  render() {
    return (
      <StyledProgress
        value={ this.state.value }
        max={ this.max }
        className={ this.props.className }
        style={ this.props.style }
      />
    )
  }
}
