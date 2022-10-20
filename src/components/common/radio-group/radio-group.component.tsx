import React, { FC } from 'react';
import { RadioGroup as MuiRadioGroup, FormControl, FormControlLabel, Radio } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'styles/mui-theme';

import styles from './radio-group.module.scss';

export namespace RadioGroup {
  export type Props = Readonly<{
    name: string;
    label: string;
    options: string[];
    value: string;
    onChange: (value: any) => void;
  }>

  export const $: FC<Props> = (props) => {
    const { name, label, options, value, onChange } = props;

    return (
      <ThemeProvider theme={theme}>
        <FormControl>
          <div className={styles.radioGroup__label}>{label}</div>
          <MuiRadioGroup
            aria-labelledby={name}
            name={name}
            value={value}
            onChange={onChange}
          >
            {options.map(
              option => <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
            )}
          </MuiRadioGroup>
        </FormControl>
      </ThemeProvider>
    );
  };
}

