import { Button } from 'components/common/button';
import { RadioGroup } from 'components/common/radio-group';
import React, { FC, useState, ChangeEvent } from 'react';
// import { QuestionnaireAnswer } from 'types';
// import { QuestionnaireAnswer } from 'types';
// import { Typography } from '@mui/material';
// import cx from 'classnames';

import styles from './questionnaire-step.module.scss';

export namespace QuestionnaireStep {
  export type Props = Readonly<{
    question: string;
    answers: string[];
    onSubmit: (answer: string) => void
  }>

  export const $: FC<Props> = (props) => {
    const { question, answers, onSubmit } = props;
    const [value, setValue] = useState<string>('');
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
    const handleSubmit = () => {
      onSubmit(value);
      setValue('');
    };
    return <div className={styles.questionnaireStep}>
      <RadioGroup.$ value={value} label={question} name={question} options={answers} onChange={handleChange} />
      <div className={styles.questionnaireStep__action}>
        <Button.$ disabled={!value} onClick={handleSubmit} text='Next step' />
      </div>
    </div>;
  };
}
