import React, { FC } from 'react';
import { Button as MuiButton } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'styles/mui-theme';

export namespace Button {
  export type Props = Readonly<{
    text: string;
    disabled?: boolean;
    onClick: () => void;
  }>

  export const $: FC<Props> = (props) => {
    const { text, disabled, onClick } = props;

    return (
      <ThemeProvider theme={theme}>
        <MuiButton disabled={disabled} variant='contained' onClick={onClick}>{text}</MuiButton>
      </ThemeProvider>
    );
  };
}

