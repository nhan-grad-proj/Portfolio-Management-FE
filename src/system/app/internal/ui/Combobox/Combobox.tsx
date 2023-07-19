import { Fragment, ReactElement, useState } from 'react';
import { Combobox as HeadlessCombobox, Transition } from '@headlessui/react';
import { Input } from '@chakra-ui/react';
import { BoxItem } from '../../../../domain/ui-models/combobox.model';

type ComboboxProps = {
  name: string;
  items: BoxItem[];
  value: BoxItem;
  onChange: (value: BoxItem) => void;
};

export const Combobox = ({
  name,
  items,
  value,
  onChange
}: ComboboxProps): ReactElement => {
  const [query, setQuery] = useState('');
  const filteredItems =
    query === ''
      ? items
      : items.filter(item => {
          return item.text.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <HeadlessCombobox name={name} value={value} onChange={onChange}>
      <HeadlessCombobox.Input
        as={Input}
        onChange={event => setQuery(event.target.value)}
        displayValue={(item: BoxItem) => item.text}
      />

      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        afterLeave={() => setQuery('')}
      >
        <HeadlessCombobox.Options>
          {filteredItems.map(item => (
            <HeadlessCombobox.Option key={item.value} value={item}>
              {item.text}
            </HeadlessCombobox.Option>
          ))}
        </HeadlessCombobox.Options>
      </Transition>
    </HeadlessCombobox>
  );
};
