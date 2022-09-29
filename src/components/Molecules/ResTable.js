import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
  } from "@mui/material";
  import React from "react";
  import Paper from "@mui/material/Paper";
  import Switch from "@mui/material/Switch";
  import { DatePicker, Space} from 'antd';

const { RangePicker } = DatePicker;

function ResTable({
    tableHeading,
    rows,
    btnName,
    btnName2,
    openEdit,
    deletefun,
    openhead,
    thBtn,
    slno,
    isindex=true
  }) {
    const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <div>
        <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
          {/* <Space >
           <RangePicker classNAme="dateset"/>
           </Space> */}
            <TableRow>
              <TableCell sx={6}>
              
              </TableCell>
              <TableCell sx={6}>
              
              </TableCell>
              <TableCell sx={6}>
              
              </TableCell>
              
              <TableCell sx={6}>
              
              </TableCell>
              <TableCell sx={6}>
                <Button  style={{backgroundColor:"rgb(25, 118, 210)", color:"white"}} onClick={openhead}>{thBtn}</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={6}>Sl.</TableCell>
              {tableHeading.map((val, idx) => {
                return <TableCell sx={6}>{val.lable}</TableCell>;
              })}
              <TableCell sx={6}>Publish/Unpublish</TableCell>
              {true ? <TableCell sx={6}>Action</TableCell> : null}
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((val, idx) => (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
              {isindex &&  <TableCell>{idx + 1}</TableCell>}
                {tableHeading.map((head) => (
                  <TableCell>{val[head.id]}</TableCell>
                ))}
                <TableCell>
                  {" "}
                  <Switch {...label} />
                </TableCell>
                <TableCell>
                  <Button onClick={() => openEdit(val)}>{btnName}</Button>

                  <Button onClick={() => deletefun(val)}>{btnName2}</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ResTable