import React, { useMemo } from 'react';
import { MantineReactTable, MRT_ColumnDef } from 'mantine-react-table';
import { data } from './makeData';

const Example = () => {
  const columns = useMemo<MRT_ColumnDef<(typeof data)[0]>[]>(
    //column definitions...
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
      },
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
    ],
    [], //end
  );

  return (
    <MantineReactTable
      columns={columns}
      data={data}
      mantineTableHeadCellProps={{
        sx: {
          '& .mantine-TableHeadCell-Content': {
            justifyContent: 'space-between',
          },
        },
      }}
    />
  );
};

export default Example;
