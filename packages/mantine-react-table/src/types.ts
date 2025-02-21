import {
  type Dispatch,
  type HTMLProps,
  type MutableRefObject,
  type ReactNode,
  type SetStateAction,
} from 'react';
import {
  type ActionIconProps,
  type AlertProps,
  type AutocompleteProps,
  type BadgeProps,
  type BoxProps,
  type CheckboxProps,
  type FlexProps,
  type ModalProps,
  type MultiSelectProps,
  type PaperProps,
  type ProgressProps,
  type RadioProps,
  type RangeSliderProps,
  type SelectProps,
  type SkeletonProps,
  type TableProps,
  type TextInputProps,
  type UnstyledButtonProps,
} from '@mantine/core';
import { type DateInputProps } from '@mantine/dates';
import {
  type AggregationFn,
  type Cell,
  type Column,
  type ColumnDef,
  type ColumnFiltersState,
  type ColumnOrderState,
  type ColumnPinningState,
  type ColumnSizingInfoState,
  type ColumnSizingState,
  type DeepKeys,
  type ExpandedState,
  type FilterFn,
  type GroupingState,
  type Header,
  type HeaderGroup,
  type OnChangeFn,
  type PaginationState,
  type Row,
  type RowSelectionState,
  type SortingFn,
  type SortingState,
  type Table,
  type TableOptions,
  type TableState,
  type Updater,
  type VisibilityState,
} from '@tanstack/react-table';
import {
  type VirtualizerOptions,
  type Virtualizer,
  type VirtualItem,
} from '@tanstack/react-virtual';
import { type MRT_AggregationFns } from './aggregationFns';
import { type MRT_FilterFns } from './filterFns';
import { type MRT_SortingFns } from './sortingFns';
import { type MRT_Icons } from './icons';

export type { MRT_Icons };

type LiteralUnion<T extends U, U = string> = T | (U & Record<never, never>);

export type HTMLPropsRef<T extends HTMLElement> = Omit<
  HTMLProps<T>,
  'color' | 'size' | 'type' | 'ref' | 'data' | 'label'
> & {
  ref?: MutableRefObject<T | null> | null;
};

export type MantineShade = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type ColumnAlignment = { align?: 'left' | 'center' | 'right' };

export interface MRT_PaginationProps {
  rowsPerPageOptions?: string[];
  showFirstLastPageButtons?: boolean;
  showRowsPerPage?: boolean;
}

export type MRT_DensityState = 'xs' | 'md' | 'xl';

export type MRT_FilterFnsState = Record<string, MRT_FilterOption>;

export type {
  ColumnFiltersState as MRT_ColumnFiltersState,
  ColumnOrderState as MRT_ColumnOrderState,
  ColumnPinningState as MRT_ColumnPinningState,
  ColumnSizingInfoState as MRT_ColumnSizingInfoState,
  ColumnSizingState as MRT_ColumnSizingState,
  ExpandedState as MRT_ExpandedState,
  GroupingState as MRT_GroupingState,
  PaginationState as MRT_PaginationState,
  RowSelectionState as MRT_RowSelectionState,
  SortingState as MRT_SortingState,
  Updater as MRT_Updater,
  VirtualItem as MRT_VirtualItem,
  Virtualizer as MRT_Virtualizer,
  VirtualizerOptions as MRT_VirtualizerOptions,
  VisibilityState as MRT_VisibilityState,
};

export interface MRT_Localization {
  actions: string;
  and: string;
  cancel: string;
  changeFilterMode: string;
  changeSearchMode: string;
  clearFilter: string;
  clearSearch: string;
  clearSort: string;
  clickToCopy: string;
  collapse: string;
  collapseAll: string;
  columnActions: string;
  copiedToClipboard: string;
  dropToGroupBy: string;
  edit: string;
  expand: string;
  expandAll: string;
  filterArrIncludes: string;
  filterArrIncludesAll: string;
  filterArrIncludesSome: string;
  filterBetween: string;
  filterBetweenInclusive: string;
  filterByColumn: string;
  filterContains: string;
  filterEmpty: string;
  filterEndsWith: string;
  filterEquals: string;
  filterEqualsString: string;
  filterFuzzy: string;
  filterGreaterThan: string;
  filterGreaterThanOrEqualTo: string;
  filterInNumberRange: string;
  filterIncludesString: string;
  filterIncludesStringSensitive: string;
  filterLessThan: string;
  filterLessThanOrEqualTo: string;
  filterMode: string;
  filterNotEmpty: string;
  filterNotEquals: string;
  filterStartsWith: string;
  filterWeakEquals: string;
  filteringByColumn: string;
  goToFirstPage: string;
  goToLastPage: string;
  goToNextPage: string;
  goToPreviousPage: string;
  grab: string;
  groupByColumn: string;
  groupedBy: string;
  hideAll: string;
  hideColumn: string;
  max: string;
  min: string;
  move: string;
  noRecordsToDisplay: string;
  noResultsFound: string;
  of: string;
  or: string;
  pinToLeft: string;
  pinToRight: string;
  resetColumnSize: string;
  resetOrder: string;
  rowActions: string;
  rowNumber: string;
  rowNumbers: string;
  rowsPerPage: string;
  save: string;
  search: string;
  select: string;
  selectedCountOfRowCountRowsSelected: string;
  showAll: string;
  showAllColumns: string;
  showHideColumns: string;
  showHideFilters: string;
  showHideSearch: string;
  sortByColumnAsc: string;
  sortByColumnDesc: string;
  sortedByColumnAsc: string;
  sortedByColumnDesc: string;
  thenBy: string;
  toggleDensity: string;
  toggleFullScreen: string;
  toggleSelectAll: string;
  toggleSelectRow: string;
  toggleVisibility: string;
  ungroupByColumn: string;
  unpin: string;
  unpinAll: string;
  unsorted: string;
}

export interface MRT_RowModel<TData extends Record<string, any>> {
  flatRows: MRT_Row<TData>[];
  rows: MRT_Row<TData>[];
  rowsById: { [key: string]: MRT_Row<TData> };
}

export type MRT_TableInstance<TData extends Record<string, any>> = Omit<
  Table<TData>,
  | 'getAllColumns'
  | 'getAllFlatColumns'
  | 'getAllLeafColumns'
  | 'getCenterLeafColumns'
  | 'getColumn'
  | 'getExpandedRowModel'
  | 'getFlatHeaders'
  | 'getHeaderGroups'
  | 'getLeftLeafColumns'
  | 'getPaginationRowModel'
  | 'getPreFilteredRowModel'
  | 'getPrePaginationRowModel'
  | 'getRightLeafColumns'
  | 'getRowModel'
  | 'getSelectedRowModel'
  | 'getState'
  | 'options'
> & {
  getAllColumns: () => MRT_Column<TData>[];
  getAllFlatColumns: () => MRT_Column<TData>[];
  getAllLeafColumns: () => MRT_Column<TData>[];
  getCenterLeafColumns: () => MRT_Column<TData>[];
  getColumn: (columnId: string) => MRT_Column<TData>;
  getExpandedRowModel: () => MRT_RowModel<TData>;
  getFlatHeaders: () => MRT_Header<TData>[];
  getHeaderGroups: () => MRT_HeaderGroup<TData>[];
  getLeftLeafColumns: () => MRT_Column<TData>[];
  getPaginationRowModel: () => MRT_RowModel<TData>;
  getPreFilteredRowModel: () => MRT_RowModel<TData>;
  getPrePaginationRowModel: () => MRT_RowModel<TData>;
  getRightLeafColumns: () => MRT_Column<TData>[];
  getRowModel: () => MRT_RowModel<TData>;
  getSelectedRowModel: () => MRT_RowModel<TData>;
  getState: () => MRT_TableState<TData>;
  options: MRT_TableOptions<TData> & {
    icons: MRT_Icons;
    localization: MRT_Localization;
  };
  refs: {
    bottomToolbarRef: MutableRefObject<HTMLDivElement>;
    editInputRefs: MutableRefObject<Record<string, HTMLInputElement>>;
    filterInputRefs: MutableRefObject<Record<string, HTMLInputElement>>;
    searchInputRef: MutableRefObject<HTMLInputElement>;
    tableContainerRef: MutableRefObject<HTMLDivElement>;
    tableHeadCellRefs: MutableRefObject<Record<string, HTMLTableCellElement>>;
    tablePaperRef: MutableRefObject<HTMLDivElement>;
    topToolbarRef: MutableRefObject<HTMLDivElement>;
  };
  setColumnFilterFns: Dispatch<SetStateAction<MRT_FilterFnsState>>;
  setDensity: Dispatch<SetStateAction<MRT_DensityState>>;
  setDraggingColumn: Dispatch<SetStateAction<MRT_Column<TData> | null>>;
  setDraggingRow: Dispatch<SetStateAction<MRT_Row<TData> | null>>;
  setEditingCell: Dispatch<SetStateAction<MRT_Cell<TData> | null>>;
  setEditingRow: Dispatch<SetStateAction<MRT_Row<TData> | null>>;
  setGlobalFilterFn: Dispatch<SetStateAction<MRT_FilterOption>>;
  setHoveredColumn: Dispatch<
    SetStateAction<MRT_Column<TData> | { id: string } | null>
  >;
  setHoveredRow: Dispatch<
    SetStateAction<MRT_Row<TData> | { id: string } | null>
  >;
  setIsFullScreen: Dispatch<SetStateAction<boolean>>;
  setShowAlertBanner: Dispatch<SetStateAction<boolean>>;
  setShowColumnFilters: Dispatch<SetStateAction<boolean>>;
  setShowGlobalFilter: Dispatch<SetStateAction<boolean>>;
  setShowToolbarDropZone: Dispatch<SetStateAction<boolean>>;
};

export type MRT_TableState<TData extends Record<string, any>> = TableState & {
  columnFilterFns: MRT_FilterFnsState;
  density: MRT_DensityState;
  draggingColumn: MRT_Column<TData> | null;
  draggingRow: MRT_Row<TData> | null;
  editingCell: MRT_Cell<TData> | null;
  editingRow: MRT_Row<TData> | null;
  globalFilterFn: MRT_FilterOption;
  hoveredColumn: MRT_Column<TData> | { id: string } | null;
  hoveredRow: MRT_Row<TData> | { id: string } | null;
  isFullScreen: boolean;
  isLoading: boolean;
  isSaving: boolean;
  showAlertBanner: boolean;
  showColumnFilters: boolean;
  showGlobalFilter: boolean;
  showProgressBars: boolean;
  showSkeletons: boolean;
  showToolbarDropZone: boolean;
};

export type MRT_ColumnDef<TData extends Record<string, any>> = Omit<
  ColumnDef<TData, unknown>,
  | 'accessorKey'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'cell'
  | 'columns'
  | 'filterFn'
  | 'footer'
  | 'header'
  | 'id'
  | 'sortingFn'
> & {
  AggregatedCell?: (props: {
    cell: MRT_Cell<TData>;
    column: MRT_Column<TData>;
    row: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
  }) => ReactNode;
  Cell?: (props: {
    cell: MRT_Cell<TData>;
    renderedCellValue: number | string | ReactNode;
    column: MRT_Column<TData>;
    row: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
  }) => ReactNode;
  Edit?: (props: {
    cell: MRT_Cell<TData>;
    column: MRT_Column<TData>;
    row: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
  }) => ReactNode;
  Filter?: (props: {
    column: MRT_Column<TData>;
    header: MRT_Header<TData>;
    rangeFilterIndex?: number;
    table: MRT_TableInstance<TData>;
  }) => ReactNode;
  Footer?:
    | ReactNode
    | ((props: {
        column: MRT_Column<TData>;
        footer: MRT_Header<TData>;
        table: MRT_TableInstance<TData>;
      }) => ReactNode);
  GroupedCell?: (props: {
    cell: MRT_Cell<TData>;
    column: MRT_Column<TData>;
    row: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
  }) => ReactNode;
  Header?:
    | ReactNode
    | ((props: {
        column: MRT_Column<TData>;
        header: MRT_Header<TData>;
        table: MRT_TableInstance<TData>;
      }) => ReactNode);
  PlaceholderCell?: (props: {
    cell: MRT_Cell<TData>;
    column: MRT_Column<TData>;
    row: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
  }) => ReactNode;
  /**
   * Either an `accessorKey` or a combination of an `accessorFn` and `id` are required for a data column definition.
   * Specify a function here to point to the correct property in the data object.
   *
   * @example accessorFn: (row) => row.username
   */
  accessorFn?: (originalRow: TData) => any;
  /**
   * Either an `accessorKey` or a combination of an `accessorFn` and `id` are required for a data column definition.
   * Specify which key in the row this column should use to access the correct data.
   * Also supports Deep Key Dot Notation.
   *
   * @example accessorKey: 'username' //simple
   * @example accessorKey: 'name.firstName' //deep key dot notation
   */
  accessorKey?: DeepKeys<TData>;
  aggregationFn?: MRT_AggregationFn<TData> | Array<MRT_AggregationFn<TData>>;
  /**
   * Specify what type of column this is. Either `data`, `display`, or `group`. Defaults to `data`.
   * Leave this blank if you are just creating a normal data column.
   *
   * @default 'data'
   *
   * @example columnDefType: 'display'
   */
  columnDefType?: 'data' | 'display' | 'group';
  columnFilterModeOptions?: Array<
    LiteralUnion<string & MRT_FilterOption>
  > | null;
  columns?: MRT_ColumnDef<TData>[];
  editVariant?: 'text' | 'select';
  enableClickToCopy?: boolean;
  enableColumnActions?: boolean;
  enableColumnDragging?: boolean;
  enableColumnFilterModes?: boolean;
  enableColumnOrdering?: boolean;
  enableEditing?: boolean | ((row: MRT_Row<TData>) => boolean);
  enableFilterMatchHighlighting?: boolean;
  filterFn?: MRT_FilterFn<TData>;
  filterVariant?:
    | 'autocomplete'
    | 'checkbox'
    | 'date'
    | 'date-range'
    | 'multi-select'
    | 'range'
    | 'range-slider'
    | 'select'
    | 'text';
  /**
   * footer must be a string. If you want custom JSX to render the footer, you can also specify a `Footer` option. (Capital F)
   */
  footer?: string;
  /**
   * header must be a string. If you want custom JSX to render the header, you can also specify a `Header` option. (Capital H)
   */
  header: string;
  /**
   * Either an `accessorKey` or a combination of an `accessorFn` and `id` are required for a data column definition.
   *
   * If you have also specified an `accessorFn`, MRT still needs to have a valid `id` to be able to identify the column uniquely.
   *
   * `id` defaults to the `accessorKey` or `header` if not specified.
   *
   * @default gets set to the same value as `accessorKey` by default
   */
  id?: LiteralUnion<string & keyof TData>;
  mantineColumnActionsButtonProps?:
    | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
  mantineColumnDragHandleProps?:
    | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
  mantineCopyButtonProps?:
    | (HTMLPropsRef<HTMLButtonElement> & Partial<UnstyledButtonProps>)
    | ((props: {
        cell: MRT_Cell<TData>;
        column: MRT_Column<TData>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<UnstyledButtonProps>);
  mantineEditSelectProps?:
    | (HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>)
    | ((props: {
        cell: MRT_Cell<TData>;
        column: MRT_Column<TData>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>);
  mantineEditTextInputProps?:
    | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>)
    | ((props: {
        cell: MRT_Cell<TData>;
        column: MRT_Column<TData>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
  mantineFilterAutocompleteProps?:
    | (HTMLPropsRef<HTMLInputElement> & Partial<AutocompleteProps>)
    | ((props: {
        column: MRT_Column<TData>;
        table: MRT_TableInstance<TData>;
        rangeFilterIndex?: number;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<AutocompleteProps>);
  mantineFilterCheckboxProps?:
    | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>)
    | ((props: {
        column: MRT_Column<TData>;
        table: MRT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
  mantineFilterDateInputProps?:
    | (HTMLPropsRef<HTMLInputElement> & Partial<DateInputProps>)
    | ((props: {
        column: MRT_Column<TData>;
        rangeFilterIndex?: number;
        table: MRT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<DateInputProps>);
  mantineFilterMultiSelectProps?:
    | (HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
        rangeFilterIndex?: number;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>);
  mantineFilterRangeSliderProps?:
    | (HTMLPropsRef<HTMLInputElement> & Partial<RangeSliderProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
        rangeFilterIndex?: number;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<RangeSliderProps>);
  mantineFilterSelectProps?:
    | (HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
        rangeFilterIndex?: number;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>);
  mantineFilterTextInputProps?:
    | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
        rangeFilterIndex?: number;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
  mantineTableBodyCellProps?:
    | (Partial<BoxProps> & HTMLPropsRef<HTMLTableCellElement> & ColumnAlignment)
    | ((props: {
        cell: MRT_Cell<TData>;
        column: MRT_Column<TData>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
      }) => Partial<BoxProps> &
        HTMLPropsRef<HTMLTableCellElement> &
        ColumnAlignment);
  mantineTableFooterCellProps?:
    | (Partial<BoxProps> & HTMLPropsRef<HTMLTableCellElement> & ColumnAlignment)
    | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
      }) => Partial<BoxProps> &
        HTMLPropsRef<HTMLTableCellElement> &
        ColumnAlignment);
  mantineTableHeadCellProps?:
    | (Partial<BoxProps> & HTMLPropsRef<HTMLTableCellElement> & ColumnAlignment)
    | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
      }) => Partial<BoxProps> &
        HTMLPropsRef<HTMLTableCellElement> &
        ColumnAlignment);
  renderColumnActionsMenuItems?: (props: {
    column: MRT_Column<TData>;
    table: MRT_TableInstance<TData>;
    internalColumnMenuItems: ReactNode;
  }) => ReactNode;
  renderColumnFilterModeMenuItems?: (props: {
    column: MRT_Column<TData>;
    internalFilterOptions: MRT_InternalFilterOption[];
    onSelectFilterMode: (filterMode: MRT_FilterOption) => void;
    table: MRT_TableInstance<TData>;
  }) => ReactNode;
  sortingFn?: MRT_SortingFn<TData>;
};

export type MRT_DefinedColumnDef<TData extends Record<string, any>> = Omit<
  MRT_ColumnDef<TData>,
  'id' | 'defaultDisplayColumn'
> & {
  defaultDisplayColumn: Partial<MRT_ColumnDef<TData>>;
  id: string;
  cell: ColumnDef<TData, unknown>['cell'];
  header: ColumnDef<TData, unknown>['header'];
  _filterFn: MRT_FilterOption;
};

export type MRT_Column<TData extends Record<string, any>> = Omit<
  Column<TData, unknown>,
  'header' | 'footer' | 'columns' | 'columnDef' | 'filterFn'
> & {
  columnDef: MRT_DefinedColumnDef<TData>;
  columns?: MRT_Column<TData>[];
  filterFn?: MRT_FilterFn<TData>;
  footer: string;
  header: string;
};

export type MRT_Header<TData extends Record<string, any>> = Omit<
  Header<TData, unknown>,
  'column'
> & {
  column: MRT_Column<TData>;
};

export type MRT_HeaderGroup<TData extends Record<string, any>> = Omit<
  HeaderGroup<TData>,
  'headers'
> & {
  headers: MRT_Header<TData>[];
};

export type MRT_Row<TData extends Record<string, any>> = Omit<
  Row<TData>,
  'getVisibleCells' | 'getAllCells' | 'subRows' | '_valuesCache'
> & {
  getAllCells: () => MRT_Cell<TData>[];
  getVisibleCells: () => MRT_Cell<TData>[];
  subRows?: MRT_Row<TData>[];
  _valuesCache: Record<LiteralUnion<string & DeepKeys<TData>>, any>;
};

export type MRT_Cell<TData extends Record<string, any>> = Omit<
  Cell<TData, unknown>,
  'column' | 'row'
> & {
  column: MRT_Column<TData>;
  row: MRT_Row<TData>;
};

export type MRT_AggregationOption = string & keyof typeof MRT_AggregationFns;

export type MRT_AggregationFn<TData extends Record<string, any>> =
  | AggregationFn<TData>
  | MRT_AggregationOption;

export type MRT_SortingOption = LiteralUnion<
  string & keyof typeof MRT_SortingFns
>;

export type MRT_SortingFn<TData extends Record<string, any>> =
  | SortingFn<TData>
  | MRT_SortingOption;

export type MRT_FilterOption = LiteralUnion<
  string & keyof typeof MRT_FilterFns
>;

export type MRT_FilterFn<TData extends Record<string, any>> =
  | FilterFn<TData>
  | MRT_FilterOption;

export type MRT_InternalFilterOption = {
  option: string;
  symbol: string;
  label: string;
  divider: boolean;
};

export type MRT_DisplayColumnIds =
  | 'mrt-row-actions'
  | 'mrt-row-drag'
  | 'mrt-row-expand'
  | 'mrt-row-numbers'
  | 'mrt-row-select';

export type MRT_CreateTableFeature<
  TData extends Record<string, any>,
  TFeature = any,
> = (table: MRT_TableInstance<TData>) => TFeature;

/**
 * `columns` and `data` props are the only required props, but there are over 150 other optional props.
 *
 * See more info on creating columns and data on the official docs site:
 * @link https://www.mantine-react-table.com/docs/getting-started/usage
 *
 * See the full props list on the official docs site:
 * @link https://www.mantine-react-table.com/docs/api/table-options
 */
export type MRT_TableOptions<TData extends Record<string, any>> = Omit<
  Partial<TableOptions<TData>>,
  | 'columns'
  | 'data'
  | 'defaultColumn'
  | 'enableRowSelection'
  | 'expandRowsFn'
  | 'getRowId'
  | 'globalFilterFn'
  | 'initialState'
  | 'onStateChange'
  | 'state'
> & {
  columnFilterModeOptions?: Array<
    LiteralUnion<string & MRT_FilterOption>
  > | null;
  /**
   * The columns to display in the table. `accessorKey`s or `accessorFn`s must match keys in the `data` prop.
   *
   * See more info on creating columns on the official docs site:
   * @link https://www.mantine-react-table.com/docs/guides/data-columns
   * @link https://www.mantine-react-table.com/docs/guides/display-columns
   *
   * See all Columns Options on the official docs site:
   * @link https://www.mantine-react-table.com/docs/api/column-options
   */
  columns: MRT_ColumnDef<TData>[];
  /**
   * Pass your data as an array of objects. Objects can theoretically be any shape, but it's best to keep them consistent.
   *
   * See the usage guide for more info on creating columns and data:
   * @link https://www.mantine-react-table.com/docs/getting-started/usage
   */
  columnVirtualizerInstanceRef?: MutableRefObject<Virtualizer<
    HTMLDivElement,
    HTMLTableCellElement
  > | null>;
  columnVirtualizerProps?:
    | Partial<VirtualizerOptions<HTMLDivElement, HTMLTableCellElement>>
    | ((props: {
        table: MRT_TableInstance<TData>;
      }) => Partial<VirtualizerOptions<HTMLDivElement, HTMLTableCellElement>>);
  data: TData[];
  /**
   * Instead of specifying a bunch of the same options for each column, you can just change an option in the `defaultColumn` prop to change a default option for all columns.
   */
  defaultColumn?: Partial<MRT_ColumnDef<TData>>;
  /**
   * Change the default options for display columns.
   */
  defaultDisplayColumn?: Partial<MRT_ColumnDef<TData>>;
  displayColumnDefOptions?: Partial<{
    [key in MRT_DisplayColumnIds]: Partial<MRT_ColumnDef<TData>>;
  }>;
  editingMode?: 'table' | 'modal' | 'row' | 'cell' | 'custom';
  enableBottomToolbar?: boolean;
  enableClickToCopy?: boolean;
  enableColumnActions?: boolean;
  enableColumnDragging?: boolean;
  enableColumnFilterModes?: boolean;
  enableColumnOrdering?: boolean;
  enableColumnVirtualization?: boolean;
  enableDensityToggle?: boolean;
  enableEditing?: boolean | ((row: MRT_Row<TData>) => boolean);
  enableExpandAll?: boolean;
  enableFacetedValues?: boolean;
  enableFilterMatchHighlighting?: boolean;
  enableFullScreenToggle?: boolean;
  enableGlobalFilterModes?: boolean;
  enableGlobalFilterRankedResults?: boolean;
  enablePagination?: boolean;
  enableRowActions?: boolean;
  enableRowDragging?: boolean;
  enableRowNumbers?: boolean;
  enableRowOrdering?: boolean;
  enableRowSelection?: boolean | ((row: MRT_Row<TData>) => boolean);
  enableRowVirtualization?: boolean;
  enableSelectAll?: boolean;
  enableStickyFooter?: boolean;
  enableStickyHeader?: boolean;
  enableTableFooter?: boolean;
  enableTableHead?: boolean;
  enableToolbarInternalActions?: boolean;
  enableTopToolbar?: boolean;
  expandRowsFn?: (dataRow: TData) => TData[];
  getRowId?: (
    originalRow: TData,
    index: number,
    parentRow: MRT_Row<TData>,
  ) => string | undefined;
  globalFilterFn?: MRT_FilterOption;
  globalFilterModeOptions?: MRT_FilterOption[] | null;
  icons?: Partial<MRT_Icons>;
  initialState?: Partial<MRT_TableState<TData>>;
  /**
   * Changes which kind of CSS layout is used to render the table. `semantic` uses default semantic HTML elements, while `grid` adds CSS grid and flexbox styles
   */
  layoutMode?: 'semantic' | 'grid';
  /**
   * Pass in either a locale imported from `mantine-react-table/locales/*` or a custom locale object.
   *
   * See the localization (i18n) guide for more info:
   * @link https://www.mantine-react-table.com/docs/guides/localization
   */
  localization?: Partial<MRT_Localization>;
  mantineBottomToolbarProps?:
    | (HTMLPropsRef<HTMLDivElement> & Partial<BoxProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLDivElement> & Partial<BoxProps>);
  mantineColumnActionsButtonProps?:
    | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
  mantineColumnDragHandleProps?:
    | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
  mantineCopyButtonProps?:
    | (HTMLPropsRef<HTMLButtonElement> & Partial<UnstyledButtonProps>)
    | ((props: {
        cell: MRT_Cell<TData>;
        column: MRT_Column<TData>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<UnstyledButtonProps>);
  mantineDetailPanelProps?:
    | (HTMLPropsRef<HTMLTableCellElement> & Partial<BoxProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
        row: MRT_Row<TData>;
      }) => HTMLPropsRef<HTMLTableCellElement> & Partial<BoxProps>);
  mantineEditRowModalProps?:
    | (HTMLPropsRef<HTMLDivElement> & Partial<ModalProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
        row: MRT_Row<TData>;
      }) => HTMLPropsRef<HTMLDivElement> & Partial<ModalProps>);
  mantineEditSelectProps?:
    | (HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>)
    | ((props: {
        cell: MRT_Cell<TData>;
        column: MRT_Column<TData>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>);
  mantineEditTextInputProps?:
    | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>)
    | ((props: {
        cell: MRT_Cell<TData>;
        column: MRT_Column<TData>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
  mantineExpandAllButtonProps?:
    | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
  mantineExpandButtonProps?:
    | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
        row: MRT_Row<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
  mantineFilterAutocompleteProps?:
    | (HTMLPropsRef<HTMLInputElement> & Partial<AutocompleteProps>)
    | ((props: {
        column: MRT_Column<TData>;
        table: MRT_TableInstance<TData>;
        rangeFilterIndex?: number;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<AutocompleteProps>);
  mantineFilterCheckboxProps?:
    | (HTMLPropsRef<HTMLInputElement> & Partial<CheckboxProps>)
    | ((props: {
        column: MRT_Column<TData>;
        table: MRT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<CheckboxProps>);
  mantineFilterDateInputProps?:
    | (HTMLPropsRef<HTMLInputElement> & Partial<DateInputProps>)
    | ((props: {
        column: MRT_Column<TData>;
        rangeFilterIndex?: number;
        table: MRT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<DateInputProps>);
  mantineFilterMultiSelectProps?:
    | (HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
        rangeFilterIndex?: number;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>);
  mantineFilterRangeSliderProps?:
    | (HTMLPropsRef<HTMLInputElement> & Partial<RangeSliderProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
        rangeFilterIndex?: number;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<RangeSliderProps>);
  mantineFilterSelectProps?:
    | (HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
        rangeFilterIndex?: number;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>);
  mantineFilterTextInputProps?:
    | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
        rangeFilterIndex?: number;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
  mantineProgressProps?:
    | (ProgressProps & HTMLPropsRef<HTMLDivElement>)
    | ((props: {
        isTopToolbar: boolean;
        table: MRT_TableInstance<TData>;
      }) => ProgressProps & HTMLPropsRef<HTMLDivElement>);
  mantinePaginationProps?:
    | Partial<MRT_PaginationProps & FlexProps & HTMLPropsRef<HTMLDivElement>>
    | ((props: {
        table: MRT_TableInstance<TData>;
      }) => Partial<
        MRT_PaginationProps & FlexProps & HTMLPropsRef<HTMLDivElement>
      >);
  mantinePaperProps?:
    | (PaperProps & HTMLPropsRef<HTMLDivElement>)
    | ((props: {
        table: MRT_TableInstance<TData>;
      }) => PaperProps & HTMLPropsRef<HTMLDivElement>);
  mantineRowDragHandleProps?:
    | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
        row: MRT_Row<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
  mantineSearchTextInputProps?:
    | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
  mantineSelectAllCheckboxProps?:
    | (HTMLPropsRef<HTMLInputElement> & Partial<CheckboxProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<CheckboxProps>);
  mantineSelectCheckboxProps?:
    | ((CheckboxProps | RadioProps) & HTMLPropsRef<HTMLInputElement>)
    | ((props: {
        table: MRT_TableInstance<TData>;
        row: MRT_Row<TData>;
      }) => (CheckboxProps | RadioProps) & HTMLPropsRef<HTMLInputElement>);
  mantineSkeletonProps?:
    | (SkeletonProps & HTMLPropsRef<HTMLDivElement>)
    | ((props: {
        cell: MRT_Cell<TData>;
        column: MRT_Column<TData>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
      }) => SkeletonProps & HTMLPropsRef<HTMLDivElement>);
  mantineTableBodyCellProps?:
    | (Partial<BoxProps> & HTMLPropsRef<HTMLTableCellElement> & ColumnAlignment)
    | ((props: {
        cell: MRT_Cell<TData>;
        column: MRT_Column<TData>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
      }) => Partial<BoxProps> &
        HTMLPropsRef<HTMLTableCellElement> &
        ColumnAlignment);
  mantineTableBodyProps?:
    | (HTMLPropsRef<HTMLTableSectionElement> & Partial<BoxProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableSectionElement> & Partial<BoxProps>);
  mantineTableBodyRowProps?:
    | (HTMLPropsRef<HTMLTableRowElement> & Partial<BoxProps>)
    | ((props: {
        isDetailPanel?: boolean;
        row: MRT_Row<TData>;
        staticRowIndex: number;
        table: MRT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableRowElement> & Partial<BoxProps>);
  mantineTableContainerProps?:
    | (HTMLPropsRef<HTMLDivElement> & Partial<BoxProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLDivElement> & Partial<BoxProps>);
  mantineTableFooterCellProps?:
    | (Partial<BoxProps> & HTMLPropsRef<HTMLTableCellElement> & ColumnAlignment)
    | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
      }) => Partial<BoxProps> &
        HTMLPropsRef<HTMLTableCellElement> &
        ColumnAlignment);
  mantineTableFooterProps?:
    | (HTMLPropsRef<HTMLTableSectionElement> & Partial<BoxProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableSectionElement> & Partial<BoxProps>);
  mantineTableFooterRowProps?:
    | (HTMLPropsRef<HTMLTableRowElement> & Partial<BoxProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
        footerGroup: MRT_HeaderGroup<TData>;
      }) => HTMLPropsRef<HTMLTableRowElement> & Partial<BoxProps>);
  mantineTableHeadCellProps?:
    | (Partial<BoxProps> & HTMLPropsRef<HTMLTableCellElement> & ColumnAlignment)
    | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
      }) => Partial<BoxProps> &
        HTMLPropsRef<HTMLTableCellElement> &
        ColumnAlignment);
  mantineTableHeadProps?:
    | (HTMLPropsRef<HTMLTableSectionElement> & Partial<BoxProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableSectionElement> & Partial<BoxProps>);
  mantineTableHeadRowProps?:
    | (HTMLPropsRef<HTMLTableRowElement> & Partial<BoxProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
        headerGroup: MRT_HeaderGroup<TData>;
      }) => HTMLPropsRef<HTMLTableRowElement> & Partial<BoxProps>);
  mantineTableProps?:
    | (TableProps & HTMLPropsRef<HTMLTableElement>)
    | ((props: {
        table: MRT_TableInstance<TData>;
      }) => TableProps & HTMLPropsRef<HTMLTableElement>);
  mantineToolbarAlertBannerBadgeProps?:
    | (HTMLPropsRef<HTMLDivElement> & Partial<BadgeProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLDivElement> & Partial<BadgeProps>);
  mantineToolbarAlertBannerProps?:
    | (AlertProps & HTMLPropsRef<HTMLDivElement>)
    | ((props: {
        table: MRT_TableInstance<TData>;
      }) => AlertProps & HTMLPropsRef<HTMLDivElement>);
  mantineTopToolbarProps?:
    | (HTMLPropsRef<HTMLDivElement> & Partial<BoxProps>)
    | ((props: {
        table: MRT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLDivElement> & Partial<BoxProps>);
  /**
   * Memoize cells, rows, or the entire table body to potentially improve render performance.
   *
   * @warning This will break some dynamic rendering features. See the memoization guide for more info:
   * @link https://www.mantine-react-table.com/docs/guides/memoize-components
   */
  memoMode?: 'cells' | 'rows' | 'table-body';
  onColumnFilterFnsChange?: OnChangeFn<{ [key: string]: MRT_FilterOption }>;
  onDensityChange?: OnChangeFn<MRT_DensityState>;
  onDraggingColumnChange?: OnChangeFn<MRT_Column<TData> | null>;
  onDraggingRowChange?: OnChangeFn<MRT_Row<TData> | null>;
  onEditingCellChange?: OnChangeFn<MRT_Cell<TData> | null>;
  onEditingRowCancel?: (props: {
    row: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
  }) => void;
  onEditingRowChange?: OnChangeFn<MRT_Row<TData> | null>;
  onEditingRowSave?: (props: {
    exitEditingMode: () => void;
    row: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
    values: Record<LiteralUnion<string & DeepKeys<TData>>, any>;
  }) => Promise<void> | void;
  onGlobalFilterFnChange?: OnChangeFn<MRT_FilterOption>;
  onHoveredColumnChange?: OnChangeFn<MRT_Column<TData> | null>;
  onHoveredRowChange?: OnChangeFn<MRT_Row<TData> | null>;
  onIsFullScreenChange?: OnChangeFn<boolean>;
  onShowAlertBannerChange?: OnChangeFn<boolean>;
  onShowColumnFiltersChange?: OnChangeFn<boolean>;
  onShowGlobalFilterChange?: OnChangeFn<boolean>;
  onShowToolbarDropZoneChange?: OnChangeFn<boolean>;
  positionActionsColumn?: 'first' | 'last';
  positionExpandColumn?: 'first' | 'last';
  positionGlobalFilter?: 'left' | 'right' | 'none';
  positionPagination?: 'bottom' | 'top' | 'both' | 'none';
  positionToolbarAlertBanner?: 'bottom' | 'top' | 'none';
  positionToolbarDropZone?: 'bottom' | 'top' | 'none' | 'both';
  renderBottomToolbar?:
    | ReactNode
    | ((props: { table: MRT_TableInstance<TData> }) => ReactNode);
  renderBottomToolbarCustomActions?: (props: {
    table: MRT_TableInstance<TData>;
  }) => ReactNode;
  renderColumnActionsMenuItems?: (props: {
    column: MRT_Column<TData>;
    table: MRT_TableInstance<TData>;
    internalColumnMenuItems: ReactNode;
  }) => ReactNode;
  renderColumnFilterModeMenuItems?: (props: {
    column: MRT_Column<TData>;
    internalFilterOptions: MRT_InternalFilterOption[];
    onSelectFilterMode: (filterMode: MRT_FilterOption) => void;
    table: MRT_TableInstance<TData>;
  }) => ReactNode;
  renderDetailPanel?: (props: {
    row: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
  }) => ReactNode;
  renderEditRowModalContent?: (props: {
    internalEditComponents: ReactNode[];
    row: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
  }) => ReactNode;
  renderGlobalFilterModeMenuItems?: (props: {
    internalFilterOptions: MRT_InternalFilterOption[];
    onSelectFilterMode: (filterMode: MRT_FilterOption) => void;
    table: MRT_TableInstance<TData>;
  }) => ReactNode;
  renderEmptyRowsFallback?: (props: {
    table: MRT_TableInstance<TData>;
  }) => ReactNode;
  renderRowActionMenuItems?: (props: {
    row: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
  }) => ReactNode;
  renderRowActions?: (props: {
    cell: MRT_Cell<TData>;
    row: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
  }) => ReactNode;
  renderToolbarInternalActions?: (props: {
    table: MRT_TableInstance<TData>;
  }) => ReactNode;
  renderTopToolbar?:
    | ReactNode
    | ((props: { table: MRT_TableInstance<TData> }) => ReactNode);
  renderTopToolbarCustomActions?: (props: {
    table: MRT_TableInstance<TData>;
  }) => ReactNode;
  rowCount?: number;
  rowNumberMode?: 'original' | 'static';
  rowVirtualizerInstanceRef?: MutableRefObject<Virtualizer<
    HTMLDivElement,
    HTMLTableRowElement
  > | null>;
  rowVirtualizerProps?:
    | Partial<VirtualizerOptions<HTMLDivElement, HTMLTableRowElement>>
    | ((props: {
        table: MRT_TableInstance<TData>;
      }) => Partial<VirtualizerOptions<HTMLDivElement, HTMLTableRowElement>>);
  selectAllMode?: 'all' | 'page';
  /**
   * Manage state externally any way you want, then pass it back into MRT.
   */
  state?: Partial<MRT_TableState<TData>>;
  /**
   * Sequence of features important any dependent feature must be defined first
   */
  tableFeatures?: Array<MRT_CreateTableFeature<TData>>;
  /**
   * Get access to the table instance via a ref to read state or call built-in methods
   * @deprecated Use `useMantineReactTable` hook instead
   */
  tableInstanceRef?: MutableRefObject<MRT_TableInstance<TData> | null>;
};
