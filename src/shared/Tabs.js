import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';

const Currencytabs = (props) => {
    const {currency, setCurrency} = props;
    return(
        <>
            <Paper square>
                <Tabs
                    value={currency}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={setCurrency}
                    aria-label="tabs"
                >
                    <Tab label="SGD" />
                    <Tab label="USD" />
                </Tabs>
            </Paper>
        </>
    )
}

Currencytabs.propTypes = {
    currency: PropTypes.number,
    setCurrency: PropTypes.func
}

Currencytabs.defaultProps = {
    currency: 0
};

export default Currencytabs;