// import React, { useState, forwardRef } from "react";
// import { useRouter } from "next/router";
// import MaterialTable from "material-table";
// import AddBoxIcon from '@mui/icons-material/AddBox';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import CheckIcon from '@mui/icons-material/Check';
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ClearIcon from "@mui/icons-material/Clear";
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import EditIcon from "@mui/icons-material/Edit";
// import FilterListIcon from "@mui/icons-material/FilterList";
// import FirstPageIcon from "@mui/icons-material/FirstPage";
// import LastPageIcon from "@mui/icons-material/LastPage";
// import RemoveIcon from "@mui/icons-material/Remove";
// import SaveAltIcon from "@mui/icons-material/SaveAlt";
// import SearchIcon from "@mui/icons-material/Search";
// import ViewColumnIcon from "@mui/icons-material/ViewColumn";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import { ThemeProvider, createTheme } from '@mui/material';

// export default function Table({
//   tableTitle,
//   tableData,
//   deletePost,
//   showModal,
//   title,
//   view
// }) {
//     const defaultMaterialTheme = createTheme();

//   const tableIcons = {
//     Add: forwardRef((props, ref) => <AddBoxIcon {...props} ref={ref} />),
//     Check: forwardRef((props, ref) => <CheckIcon {...props} ref={ref} />),
//     Clear: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
//     Delete: forwardRef((props, ref) => <DeleteOutlineIcon {...props} ref={ref} />),
//     DetailPanel: forwardRef((props, ref) => (
//       <ChevronRightIcon {...props} ref={ref} />
//     )),
//     Edit: forwardRef((props, ref) => <EditIcon {...props} ref={ref} />),
//     Export: forwardRef((props, ref) => <SaveAltIcon {...props} ref={ref} />),
//     Filter: forwardRef((props, ref) => <FilterListIcon {...props} ref={ref} />),
//     FirstPage: forwardRef((props, ref) => <FirstPageIcon {...props} ref={ref} />),
//     LastPage: forwardRef((props, ref) => <LastPageIcon {...props} ref={ref} />),
//     NextPage: forwardRef((props, ref) => <ChevronRightIcon {...props} ref={ref} />),
//     PreviousPage: forwardRef((props, ref) => (
//       <ChevronLeftIcon {...props} ref={ref} />
//     )),
//     ResetSearch: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
//     Search: forwardRef((props, ref) => <SearchIcon {...props} ref={ref} />),
//     SortArrow: forwardRef((props, ref) => (
//       <ArrowDownwardIcon {...props} ref={ref} />
//     )),
//     ThirdStateCheck: forwardRef((props, ref) => (
//       <RemoveIcon {...props} ref={ref} />
//     )),
//     ViewColumn: forwardRef((props, ref) => <ViewColumnIcon {...props} ref={ref} />),
//   };

//    // Router
//   const router = useRouter();
  

//   const columns = tableTitle;
//   return (
//     <div>
//         <ThemeProvider theme={defaultMaterialTheme}>

//             <MaterialTable
//                 icons={tableIcons}
//                 title={`${title}`}
//                 columns={columns}
//                 data={tableData}
//                 options={{
//                 pageSizeOptions: [5, 10, 20, 25, 50, 100],
//                 paginationType: "stepped",
//                 exportButton: true,
//                 exportAllData: true,
//                 actionsColumnIndex: -1,
                

//                 }}
//                 actions={[
//                 {
//                     icon: () => <DeleteOutlineIcon />,
//                     tooltip: "Delete",
//                     onClick: (e, data) => deletePost(data._id),
//                 },
//                 {
//                     icon: () => <EditIcon />,
//                     tooltip: "Edit",
//                     onClick: (e, data) => showModal(data),
//                 },
//                 {
//                     icon: () => <VisibilityIcon />,
//                     tooltip: "View",
//                     onClick: (e, data) => view(data._id),
//                 },
//                 ]}
//             />
//         </ThemeProvider>
//     </div>
//   );
// }


