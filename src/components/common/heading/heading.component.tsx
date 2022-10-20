import React, { FC } from 'react';
import cx from 'classnames';

import styles from './heading.module.scss';

export namespace Heading {
  export type Props = Readonly<{
    level: Levels
    centered?: boolean
    children?: React.ReactNode
    className?: string
  }>

  export enum Levels {
    h1 = 'h1',
    h3 = 'h3'
  }

  const headingStyleMapper = {
    [Levels.h1]: styles.heading_1,
    [Levels.h3]: styles.heading_3
  };

  export const $: FC<Props> = (props) => {
    const { level, centered, children, className } = props;
    const classNames = cx(styles.heading, headingStyleMapper[level], centered && styles.heading_centered, className);
    return React.createElement(
      level,
      { className: classNames },
      children
    );
  };
};
