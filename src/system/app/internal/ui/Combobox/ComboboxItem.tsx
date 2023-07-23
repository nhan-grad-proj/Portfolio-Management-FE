import { ReactElement } from 'react';
import classes from './Combobox.module.scss';
import { BoxItem } from '../../../../domain/ui-models/combobox.model';

export function ComboboxItem(props: BoxItem): ReactElement {
  return <div className={classes['option-item']}>{props.text}</div>;
}
