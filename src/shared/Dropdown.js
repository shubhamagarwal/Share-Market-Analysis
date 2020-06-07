import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
    PORTFOLIO,
    PORTFOLIO_1,
    PORTFOLIO_2
} from './Constant';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 350,
    }
  }));

const Dropdown = (props) => {
    const {handleChange, selectedPortFolioName} = props;
    const classes = useStyles();
    return (
        <>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">{PORTFOLIO}</InputLabel>
                <Select
                native
                onChange={handleChange}
                value={selectedPortFolioName}
                label="Portfolio"
                inputProps={{
                    name: 'Portfolio',
                    id: 'outlined-age-native-simple',
                }}
                >

                <option value={'20 80 Portfolio'}>{PORTFOLIO_1}</option>
                <option value={'40 60 Portfolio'}>{PORTFOLIO_2}</option>
                </Select>
            </FormControl>
        </>
    )
}

Dropdown.prototype = {
    handleChange: PropTypes.func,
    selectedPortFolioName: PropTypes.string
}

Dropdown.defaultProps = {
    selectedPortFolioName: '20 80 Portfolio'
}
export default React.memo(Dropdown);