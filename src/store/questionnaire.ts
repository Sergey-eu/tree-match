import { action, autorun, makeAutoObservable, runInAction } from 'mobx';
import { Questionnaire, QuestionnaireAnswer } from 'types';

const defaultQuestionnaire = { question: null, match: null };

class QuestionnaireStore {
  questionnaire: Questionnaire = defaultQuestionnaire;

  constructor () {
    makeAutoObservable(this);

    const name = 'questionnaire';
    const storedJson = localStorage.getItem(name);

    if (storedJson) Object.assign(this, JSON.parse(storedJson));

    autorun(() => {
      localStorage.setItem(name, JSON.stringify(this));
    });
  }

  @action
  beginQuestionnaire = () => {
    fetch(`${process.env.REACT_APP_API_URL}/begin`)
    .then(async (response) => await response.json())
    .then((json: Questionnaire) => {
      runInAction(() => {
        this.questionnaire = json;
      });
    })
    .catch(error => console.error('Questionnaire begin error:', error));
  };

  @action
  answerQuestion = (payload: QuestionnaireAnswer) => {
    fetch(`${process.env.REACT_APP_API_URL}/answer`, {
      method: 'POST',
      body: JSON.stringify(payload)
    })
    .then(async (response) => await response.json())
    .then((json: Questionnaire) => {
      runInAction(() => {
        this.questionnaire = json;
      });
    })
    .catch(error => console.error('Questionnaire answer error:', error));
  };

  @action
  resetQuestionnaire = () => {
    this.questionnaire = defaultQuestionnaire;
  };
}

export default new QuestionnaireStore();
