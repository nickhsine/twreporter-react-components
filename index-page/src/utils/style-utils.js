

import { css } from 'styled-components'

export const centerBlock = `
  margin-left: auto;
  margin-right: auto;
`

export const breakPoints = {
  overDesktopMinWidth: '1440px',
  desktopMaxWidth: '1439px',
  desktopMinWidth: '1024px',
  tabletMaxWidth: '1023px',
  tabletMinWidth: '768px',
  mobileMaxWidth: '767px',
}

export const finalMedia = {
  mobile: (...args) => css`
    @media (max-width: ${breakPoints.mobileMaxWidth}) {
      ${css(...args)}
    }
  `,
  tabletAbove: (...args) => css`
    @media (min-width: ${breakPoints.tabletMinWidth}) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (min-width: ${breakPoints.tabletMinWidth}) and (max-width: ${breakPoints.tabletMaxWidth}) {
      ${css(...args)}
    }
  `,
  tabletBelow: (...args) => css`
    @media (max-width: ${breakPoints.tabletMaxWidth}) {
      ${css(...args)}
    }
  `,
  desktopAbove: (...args) => css`
    @media (min-width: ${breakPoints.desktopMinWidth}) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: ${breakPoints.desktopMinWidth}) and (max-width: ${breakPoints.desktopMaxWidth}) {
      ${css(...args)}
    }
  `,
  desktopBelow: (...args) => css`
    @media (max-width: ${breakPoints.desktopMaxWidth}) {
      ${css(...args)}
    }
  `,
  overDesktop: (...args) => css`
    @media (min-width: ${breakPoints.overDesktopMinWidth}) {
      ${css(...args)}
    }
  `,
}

/**
 * @prop {string} position - postion of the content div
 * @prop {number} lineHeight - line-height
 * @prop {number} numberOfLine - number of line that you need in div
 * @prop {string} backgroundColor - background
 * @prop {string} textAlign - text-align
 */
export function truncate(position, lineHeight, numberOfLine, backgroundColor, textAlign) {
  const maxHeight = lineHeight * numberOfLine
  const textAlignValue = textAlign || 'justify'
  return `
    overflow: hidden;
    position: ${position};
    line-height: ${lineHeight}em;
    max-height: ${maxHeight}em;
    text-align: ${textAlignValue};
    margin-right: -1em;
    padding-right: 1em;
    &::before {
      content: '...';
      position: absolute;
      right: 0;
      bottom: 0;
    }
    &::after {
      content: '';
      position: absolute;
      right: 0;
      width: 1em;
      height: 1em;
      margin-top: 0.25em;
      background: ${backgroundColor};
    }
  `
}
