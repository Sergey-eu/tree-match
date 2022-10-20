import React, { FC } from 'react';

import styles from './page.module.scss';

export namespace Page {
  export type Props = Readonly<{
    children: React.ReactNode
  }>

  export const $: FC<Props> = (props) => {

    return (
      <div className={styles.page}>
        <main className={styles.page__content}>
          {props.children}
        </main>
      </div>
    );
  };
}
