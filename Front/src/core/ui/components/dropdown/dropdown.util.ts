import { DropdownItem } from './dropdown.model';

// eslint-disable-next-line arrow-body-style
export const convertToDropdownItems = (value: any): Array<DropdownItem> => {
  return Object.keys(value).map((k) => new DropdownItem({ label: value[k], value: k }));
};
