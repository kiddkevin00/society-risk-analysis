import { FormInputError, PasswordValidator, CustomIcon } from './';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class FormInput extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    validate: PropTypes.func,
    useValidator: PropTypes.bool,
    emptyMessage: PropTypes.string,
    errorMessage: PropTypes.string,
    minCharacters: PropTypes.number,
    requireCapitals: PropTypes.number,
    requireNumbers: PropTypes.number,
    forbiddenWords: PropTypes.arrayOf(PropTypes.string),
    text: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    validate: FormInput.validateEmptyField,
    useValidator: false,
    emptyMessage: 'Empty',
    errorMessage: 'Invalid',
    minCharacters: 8,
    requireCapitals: 1,
    requireNumbers: 1,
    forbiddenWords: ['password', 'user'],
    text: 'Unknown Field',
    type: 'text',
    disabled: false,
    className: '',
    placeholder: '',
  };

  static validateEmptyField(inputText) {
    return !!inputText && inputText.trim().length !== 0;
  }

  static validateEmailField(inputText) {
    const regExp = new RegExp(
      '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
        '(\\".+\\"))@((\\[[0-9]{1,3}.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|' +
        '(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
    );

    return regExp.test(inputText);
  }

  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      empty: !props.value,
      valid: true,
      focus: false,
      errorMessage: props.emptyMessage,
      isErrorVisible: false,
      isValidatorVisible: false,
      isAllValidatorValid: false,
      isEachValidatorValid: {
        minChars: false,
        capitalLetters: false,
        numbers: false,
        words: false,
      },
    };
  }

  componentWillReceiveProps(newProps) {
    // Performs validation only when the new value is not empty.
    if (typeof newProps.value === 'string') {
      if (newProps.value.length) {
        if (newProps.useValidator) {
          this._checkRules(newProps.value);
        } else {
          this._validateInput(newProps.value);
        }

        this.setState({
          empty: false,
        });
      }

      this.setState({
        value: newProps.value,
      });
    }
  }

  _onChange = event => {
    this.props.onChange(event.target.value);

    if (this.props.useValidator) {
      this._checkRules(event.target.value);
    } else {
      this._validateInput(event.target.value);
    }

    this.setState({
      value: event.target.value,
      empty: !event.target.value,
    });
  };

  _handleFocus = () => {
    this.setState({
      focus: true,
      isValidatorVisible: true,
    });

    if (this.props.useValidator) {
      this.setState({
        isErrorVisible: false,
      });
    }
  };

  _handleBlur = () => {
    this.setState({
      focus: false,
      isErrorVisible: !this.state.valid,
      isValidatorVisible: false,
    });
  };

  _validateInput = inputText => {
    // Triggers the custom validation function, passed by the parent component.
    if (this.props.validate(inputText)) {
      this.setState({
        valid: true,
        isErrorVisible: false,
      });
    } else {
      this.setState({
        valid: false,
        errorMessage: inputText ? this.props.errorMessage : this.props.emptyMessage,
      });
    }
  };

  _checkRules = inputText => {
    const minCharsCheck = !!inputText && this._checkMinChars(inputText);
    const capitalLettersCheck = !!inputText && this._checkCaptialLetters(inputText);
    const numbersCheck = !!inputText && this._checkNumbers(inputText);
    const wordsCheck = !!inputText && this._checkWords(inputText);
    const isAllValidatorValid = minCharsCheck && capitalLettersCheck && numbersCheck && wordsCheck;
    const isEachValidatorValid = {
      minChars: minCharsCheck,
      capitalLetters: capitalLettersCheck,
      numbers: numbersCheck,
      words: wordsCheck,
    };

    this.setState({
      isAllValidatorValid,
      isEachValidatorValid,
      valid: isAllValidatorValid,
    });
  };

  _checkMinChars(inputText) {
    return inputText.length >= Number(this.props.minCharacters);
  }

  _checkCaptialLetters(inputText) {
    return inputText.replace(/[^A-Z]/g, '').length >= Number(this.props.requireCapitals);
  }

  _checkNumbers(inputText) {
    return inputText.replace(/[^\d]/g, '').length >= Number(this.props.requireNumbers);
  }

  _checkWords(inputText) {
    return this.props.forbiddenWords.indexOf(inputText) < 0;
  }

  isValid = () => {
    let isValid = this.state.valid;

    if (!this.state.value || !this.props.validate(this.state.value)) {
      isValid = false;

      this.setState({
        valid: isValid,
        isErrorVisible: !isValid,
      });
    }

    return isValid;
  };

  render() {
    const inputGroupClassName = cx('input_group_template', {
      input_valid: this.state.valid,
      input_error: !this.state.valid,
      input_empty: this.state.empty,
      input_hasValue: !this.state.empty,
      input_focused: this.state.focus,
      input_unfocused: !this.state.focus,
    });
    const inputClassName = cx('input', this.props.className);
    let validator;

    if (this.props.useValidator) {
      validator = (
        <PasswordValidator
          visible={this.state.isValidatorVisible}
          name={this.props.text}
          value={this.state.value}
          validData={this.state.isEachValidatorValid}
          valid={this.state.isAllValidatorValid}
          forbiddenWords={this.props.forbiddenWords}
          minCharacters={this.props.minCharacters}
          requireCapitals={this.props.requireCapitals}
          requireNumbers={this.props.requireNumbers}
        />
      );
    } else {
      validator = null;
    }

    return (
      <div className={inputGroupClassName}>
        <label className="input_label" htmlFor={this.props.text}>
          <span className="label_text">{this.props.text}</span>
        </label>
        <input
          className={inputClassName}
          id={this.props.text}
          value={this.state.value}
          onChange={this._onChange}
          onFocus={this._handleFocus}
          onBlur={this._handleBlur}
          autoComplete="off"
          type={this.props.type}
          disabled={this.props.disabled}
          placeholder={this.props.placeholder}
        />
        <FormInputError
          visible={this.state.isErrorVisible}
          errorMessage={this.state.errorMessage}
        />
        <div className="validationIcons">
          <i className="input_error_icon">
            <CustomIcon type="circle_error" />
          </i>
          <i className="input_valid_icon">
            <CustomIcon type="circle_tick" />
          </i>
        </div>
        {validator}
      </div>
    );
  }
}

export { FormInput as default };
