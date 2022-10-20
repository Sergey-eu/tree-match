import React, { FC } from 'react';
import { ForestIcon } from 'icons';
import { SvgIcon } from 'components/common/svg-icon';
import { Button } from 'components/common/button';

import styles from './questionnaire-result.module.scss';

export namespace QuestionnaireResult {
  export type Props = Readonly<{
    name: string;
    description: string;
    onClick: () => void
  }>

  export const $: FC<Props> = (props) => {
    const { name, description, onClick } = props;

    return <div className={styles.questionnaireResult}>
      <div className={styles.questionnaireResult__icon}>
        <ForestIcon size={SvgIcon.Sizes.Auto} />
      </div>
      <div className={styles.questionnaireResult__title}>{name}</div>
      <div className={styles.questionnaireResult__description}>{description}</div>
      <Button.$ onClick={onClick} text='Try again' />
    </div>;
  };
}
