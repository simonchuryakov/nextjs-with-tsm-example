export interface Styles {
  'container': string;
  'text': string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
