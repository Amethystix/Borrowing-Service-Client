export default interface FormField {
  invalid: boolean;
  value: string;
  validate: () => void;
}
