import { CustomIcon } from './';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PasswordValidator = ({
  visible,
  forbiddenWords,
  valid,
  name,
  validData,
  minCharacters,
  capitalLetters,
  requireCapitals,
  requireNumbers,
}) => {
  const validatorClassName = classNames('password_validator', {
    visible,
    invisible: !visible,
  });
  const forbiddenWordSpans = forbiddenWords.map((word, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <span key={index} className="bad_word">
      &quot;{word}&quot;
    </span>
  ));
  let validatorTitle;

  if (valid) {
    validatorTitle = <h4 className="validator_title valid">{name} IS OK</h4>;
  } else {
    validatorTitle = <h4 className="validator_title invalid">{name} RULES</h4>;
  }

  return (
    <div className={validatorClassName}>
      <div className="validator_container">
        {validatorTitle}
        <ul className="rules_list">
          <li className={classNames({ valid: validData.minChars })}>
            <i className="icon_valid">
              <CustomIcon type="circle_tick_filled" />
            </i>
            <i className="icon_invalid">
              <CustomIcon type="circle_error" />
            </i>
            <span className="error_message">{minCharacters} characters minimum</span>
          </li>
          <li className={classNames({ valid: validData.capitalLetters })}>
            <i className="icon_valid">
              <CustomIcon type="circle_tick_filled" />
            </i>
            <i className="icon_invalid">
              <CustomIcon type="circle_error" />
            </i>
            <span className="error_message">
              Contains at least {requireCapitals} capital letter
            </span>
          </li>
          <li className={classNames({ valid: validData.numbers })}>
            <i className="icon_valid">
              <CustomIcon type="circle_tick_filled" />
            </i>
            <i className="icon_invalid">
              <CustomIcon type="circle_error" />
            </i>
            <span className="error_message">Contains at least {requireNumbers} number</span>
          </li>
          <li className={classNames({ valid: validData.words })}>
            <i className="icon_valid">
              <CustomIcon type="circle_tick_filled" />
            </i>
            <i className="icon_invalid">
              <CustomIcon type="circle_error" />
            </i>
            <span className="error_message">Can&#39;t be {forbiddenWordSpans}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

PasswordValidator.propTypes = {
  visible: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
  validData: PropTypes.shape({
    minChars: PropTypes.bool.isRequired,
    capitalLetters: PropTypes.bool.isRequired,
    numbers: PropTypes.bool.isRequired,
    words: PropTypes.bool.isRequired,
  }).isRequired,
  minCharacters: PropTypes.number,
  requireCapitals: PropTypes.number,
  requireNumbers: PropTypes.number,
  forbiddenWords: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
};

PasswordValidator.defaultProps = {
  minCharacters: 8,
  requireCapitals: 1,
  requireNumbers: 1,
  forbiddenWords: ['password'],
  name: 'Unknown',
};

export { PasswordValidator as default };
