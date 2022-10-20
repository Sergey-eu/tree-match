export type Questionnaire = Readonly<{
  question: QuestionnaireQuestion | null;
  match: QuestionnaireResult | null;
}>

export type QuestionnaireQuestion = Readonly<{
  step_id: number;
  question: string;
  answers: string[];
}>

export type QuestionnaireAnswer = Readonly<{
  step_id: number;
  answer: string;
}>

export type QuestionnaireResult = Readonly<{
  name: string;
  description: string;
}>
