import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Page } from 'layouts/page';
import { Heading } from 'components/common/heading';
import { QuestionnaireStep } from 'components/questionnaire/questionnaire-step';
import { QuestionnaireResult } from 'components/questionnaire/questionnaire-result';
import questionnaireStore from 'store/questionnaire';

import styles from './home.module.scss';

export const HomePage: FC = observer(() => {
  const { questionnaire, beginQuestionnaire, answerQuestion, resetQuestionnaire } = questionnaireStore;
  const stepId = questionnaire.question?.step_id;

  const handleAnswer = (answer: string) => {
    stepId && answerQuestion({ answer, step_id: stepId });
  };

  const handleRestart = () => {
    resetQuestionnaire();
    beginQuestionnaire();
  };

  useEffect(() => {
    !questionnaire.question && beginQuestionnaire();
  }, []);

  return (
    <Page.$>
      <div className={styles.home}>
        <Heading.$ level={Heading.Levels.h1} centered className={styles.home__header}>TreeMatch</Heading.$>
        <div className={styles.home__content}>
          {questionnaire.question &&
            <QuestionnaireStep.$ question={questionnaire.question.question} answers={questionnaire.question.answers} onSubmit={handleAnswer} />
          }
          {questionnaire.match &&
            <QuestionnaireResult.$ name={questionnaire.match.name} description={questionnaire.match.description} onClick={handleRestart} />
          }
        </div>
      </div>
    </Page.$>
  );
});
