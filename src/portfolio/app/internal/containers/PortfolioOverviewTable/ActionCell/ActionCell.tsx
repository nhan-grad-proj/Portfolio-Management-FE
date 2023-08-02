import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactElement } from 'react';
import { CellProps } from 'react-table';
import { PortfolioOverviewColumn } from '../../../app-models/portfolio.model';
import { useDisclosure } from '@chakra-ui/react';
import { DeletePortfolioDialog } from '../../PortfolioActionBar/DeletePortfolioDialog/DeletePortfolioDialog';
import { useDeletePortfolioMutation } from '../../../useDeletePortfolioMutation';
import { useQueryClient } from 'react-query';
import { QUERY_MY_PORTFOLIOS_KEY } from '../../../useQueryMyPortfolios';

export function ActionCell({
  value
}: CellProps<PortfolioOverviewColumn, number>): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { deletePortfolioById } = useDeletePortfolioMutation(value);
  const queryClient = useQueryClient();

  function handleConfirm() {
    deletePortfolioById();
    onClose();
    queryClient.invalidateQueries(QUERY_MY_PORTFOLIOS_KEY);
  }

  return (
    <div className="space-x-4">
      <FontAwesomeIcon icon={faPenToSquare} cursor="pointer" />
      <FontAwesomeIcon icon={faTrash} cursor="pointer" onClick={onOpen} />

      {isOpen && (
        <DeletePortfolioDialog
          isOpen={isOpen}
          onClose={onClose}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
}
