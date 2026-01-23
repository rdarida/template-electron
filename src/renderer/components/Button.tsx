import { FC } from 'react';
import { Button as AntButton, ButtonProps } from 'antd';

export const Button: FC<ButtonProps> = (props): JSX.Element => (
  <AntButton {...props} variant="solid" />
);
