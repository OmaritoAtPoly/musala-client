import { TextField, TextFieldProps, MenuItem } from '@material-ui/core';
import React from 'react';

export type SelectOption = {
    value: string;
    label: string;
}

interface Props {
    selectableOptions: SelectOption[];
}

export const SelectInput = ({ selectableOptions, ...props }: Props & TextFieldProps) => {

    return (
        <TextField
            select
            variant="outlined"
            {...props}
        >
            {selectableOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    )
}
