export interface ButtonProps {
  type: '' | 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  round: boolean;
  plain: boolean;
  disabled: boolean;
}

export const defaultProps: Partial<ButtonProps> = {
  type: '',
  round: false,
  plain: false,
  disabled: false
}

export interface ButtonEmits {
  click: [evt: MouseEvent]
}
