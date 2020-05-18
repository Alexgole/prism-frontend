import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

export interface TableRowProps {
  className?: string;
  rowData: any;
}

const DataTableRow = ({ className, rowData }: TableRowProps) => (
  <TableRow>
    {Object.entries(rowData).map(([cellKey, value]) => (
      <TableCell className={className} key={cellKey}>
        {' '}
        {value}{' '}
      </TableCell>
    ))}
  </TableRow>
);

export default DataTableRow;
