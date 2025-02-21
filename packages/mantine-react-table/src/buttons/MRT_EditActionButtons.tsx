import { ActionIcon, Box, Button, Tooltip } from '@mantine/core';
import { type MRT_Row, type MRT_TableInstance } from '../types';

interface Props<TData extends Record<string, any>> {
  row: MRT_Row<TData>;
  table: MRT_TableInstance<TData>;
  variant?: 'icon' | 'text';
}

export const MRT_EditActionButtons = <TData extends Record<string, any>>({
  row,
  table,
  variant = 'icon',
}: Props<TData>) => {
  const {
    getState,
    options: {
      icons: { IconCircleX, IconDeviceFloppy },
      localization,
      onEditingRowSave,
      onEditingRowCancel,
    },
    refs: { editInputRefs },
    setEditingRow,
  } = table;
  const { editingRow, isSaving } = getState();

  const handleCancel = () => {
    onEditingRowCancel?.({ row, table });
    setEditingRow(null);
  };

  const handleSave = () => {
    //look for auto-filled input values
    Object.values(editInputRefs?.current)?.forEach((input) => {
      if (
        input.value !== undefined &&
        Object.hasOwn(editingRow?._valuesCache as object, input.name)
      ) {
        // @ts-ignore
        editingRow._valuesCache[input.name] = input.value;
      }
    });
    onEditingRowSave?.({
      exitEditingMode: () => setEditingRow(null),
      row: editingRow ?? row,
      table,
      values: editingRow?._valuesCache ?? { ...row.original },
    });
  };

  return (
    <Box
      onClick={(e) => e.stopPropagation()}
      sx={{ display: 'flex', gap: '12px' }}
    >
      {variant === 'icon' ? (
        <>
          <Tooltip withinPortal label={localization.cancel}>
            <ActionIcon aria-label={localization.cancel} onClick={handleCancel}>
              <IconCircleX />
            </ActionIcon>
          </Tooltip>
          <Tooltip withinPortal label={localization.save}>
            <ActionIcon
              aria-label={localization.save}
              color="blue"
              onClick={handleSave}
              loading={isSaving}
            >
              <IconDeviceFloppy />
            </ActionIcon>
          </Tooltip>
        </>
      ) : (
        <>
          <Button onClick={handleCancel} variant="subtle">
            {localization.cancel}
          </Button>
          <Button onClick={handleSave} variant="filled" loading={isSaving}>
            {localization.save}
          </Button>
        </>
      )}
    </Box>
  );
};
