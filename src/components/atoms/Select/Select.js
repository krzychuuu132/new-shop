import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, SelectTag, Option, Arrow } from './Select.styles';

const Select = ({ options, value, onChange }) => {
  return (
    <Wrapper className="select-wrapper">
      <Arrow />
      <SelectTag value={value} onChange={onChange}>
        {options.map((option, index) => (
          <Option value={option} key={option} selected>
            {option}
          </Option>
        ))}
      </SelectTag>
    </Wrapper>
  );
};

Select.propTypes = {};

export default Select;
