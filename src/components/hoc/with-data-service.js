import React, { useContext } from 'react';
import { ServiceContext } from '../../context'

const withDataService = () => (Wrapped) => {
    return (props) => {
        const service = useContext(ServiceContext);
        return <Wrapped {...props} service={service} />;
    }
};

export default withDataService;