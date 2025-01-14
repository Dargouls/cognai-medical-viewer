import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { useAppConfig } from '@state';

const NotFound = ({ message = 'Sorry, this page does not exist.', showGoBackButton = true }) => {
  const [appConfig] = useAppConfig();
  const { showStudyList } = appConfig;

  return (
    <div className="flex h-full w-full items-center justify-center text-white">
      <div>
        <h4>{message}</h4>
        {showGoBackButton && showStudyList && (
          <h5>
            <Link to={'/'}>Voltar para o início</Link>
          </h5>
        )}
      </div>
    </div>
  );
};

NotFound.propTypes = {
  message: PropTypes.string,
  showGoBackButton: PropTypes.bool,
};

export default NotFound;
