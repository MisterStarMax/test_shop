import React, { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorIndicator from '../error-indicator'

const style = {
    load: {
        position: 'fixed',
        left: 'calc((100vw - 30px) / 2)',
        top: 'calc((100vh - 30px) / 2)',
    }
}

const withLogicRender = () => (View) => {
    return (props) => {
        const { error, loading, fetchData } = props;

        useEffect(() => fetchData(), [fetchData]);

        
        if (loading) return <CircularProgress size={60} style={style.load}/>;
        if (error) return <ErrorIndicator />
        return <View {...props} />
    }
}

export default withLogicRender;