import React, { FC, SVGProps } from 'react';
import classNames from 'classnames';

import styles from './svg-icon.module.scss';

export namespace SvgIcon {
  export enum Sizes {
    Auto = 'auto',
    Medium = 'medium',
  }

  export type Props = Readonly<{
    size?: Sizes
    viewBox?: string
  }> &
    SVGProps<SVGSVGElement>

  const sizeMap = {
    [Sizes.Auto]: styles.svgIcon_auto,
    [Sizes.Medium]: styles.svgIcon_medium,
  };

  export const $: FC<Props> = (props) => {
    const { size = Sizes.Medium, viewBox, ...rest } = props;
    const classes = classNames(styles.svgIcon, sizeMap[size]);

    return (
      <svg
        viewBox={viewBox}
        className={classes}
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        {props.children}
      </svg>
    );
  };
}
