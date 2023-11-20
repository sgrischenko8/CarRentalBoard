export const reactSelectStyle = {
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#121417',
    margin: 0,
    padding: 0,
    transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
  }),
  control: (provided) => ({
    ...provided,
    padding: '0 18px',
    height: '48px',
    background: '#f7f7fb',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: 'calc(20 / 18)',
    boxShadow: 'none',
    border: '0px solid transparent',
    borderRadius: '14px',
    cursor: 'pointer',
  }),

  input: (base) => ({
    ...base,
    margin: 0,
    height: '48px',
    padding: 0,
  }),
  menu: (base) => ({
    ...base,
    marginTop: '4px',
    paddingTop: '14px',
    paddingRight: '8px',
    boxShadow: 'none',
    border: '1px solid rgba(18 20 23 / 5%)',
    borderRadius: '14px',
  }),
  menuList: (provided) => ({
    ...provided,
    paddingTop: 0,
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: 'none',
  }),
  valueContainer: (base) => ({
    ...base,
    padding: 0,
  }),
  singleValue: (base) => ({
    ...base,
    marginLeft: 0,
    color: '#121417',
  }),
  placeholder: (base) => ({
    ...base,
    color: '#121417',
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    padding: '0px 0 8px 18px',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: 'calc(20 / 16)',
    background: 'transparent',
    color: isFocused ? '#121417' : isSelected ? '#121417' : '#12141720',
    cursor: 'pointer',
  }),
};
