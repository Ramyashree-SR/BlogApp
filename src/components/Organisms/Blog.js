import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "../../App.css";
import HTTP from "../AxiosConfig/AxiosConfig";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ResTable from "../Molecules/ResTable";
import ResModal from "../Molecules/ResModal";
import ResButton from './../Atoms/ResButton';
// import DatePicker from 'react-datepicker';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// import { Box, TextField } from "@mui/material";

function Blog() {
  // const [value, setValue] = React.useState([null, null]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [blogData, setblogData] = useState([]);
  const [allBlog, setallBlog] = useState([]);

  console.log("allBlog", allBlog);
  const [openAddModel, setopenAddModel] = useState(false);
  const [openEditModel, setopenEditModel] = useState(false);

  const [WriteBlog, setWriteBlog] = useState({
    name: "",
    date: "",
    content: "",
  });
  const [EditBlog, setEditBlog] = useState({
    name: "",
    date: "",
    content: "",
  });

  let modifyField = (e) => {
    setEditBlog({
      ...EditBlog,
      [e.target.name]: e.target.value,
    });
  };

  let insertData = (e) => {
    console.log(e.target.value);
    setWriteBlog({
      ...WriteBlog,
      [e.target.name]: e.target.value,
    });
  };

  let openAdd = () => {
    setopenAddModel(true);
  };
  let handleClose = () => {
    // e.preventDefault();
    setopenAddModel(false);
  };
  let openEdit = () => {
    setopenEditModel(true);
  };
  let editClose = () => {
    // e.preventDefault();
    setopenEditModel(false);
  };
  const tableHead = [
    // { lable: "SL. No.", id: "slno" },
    { lable: "Blog Name", id: "name" },
    { lable: "Date", id: "date" },
    // { lable: "Publish/Unpublish", id: "" },
    // { lable: "Action", id: "modiBy" }
  ];
  useEffect(() => {
    getBlog();
  }, []);

  let editBlog = async (Items) => {
    console.log("Items is>>", Items);
    try {
      let response = await HTTP.put(`/home/updateBlog/${Items._id}`, EditBlog);
      if (response.data.error) {
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
      getBlog();
      editClose();
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
    }
  };


  let setBlog = async () => {
    try {
      let response = await HTTP.post("/home/postblog", WriteBlog);
      if (response.data.error) {
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }

      setopenAddModel({
        name: "",
        date: "",
      });
      handleClose();
      getBlog();
    } catch (err) {
      alert(err.message);
    }
  };

  let getBlog = async () => {
    let response = await HTTP.get("/home/getblog");
    setallBlog(response.data.data);

    // let row = mapFunction(response.data.data)
    console.log("GetData", response.data.data);
    // console.log(response.data.data, "response.data.data");
    // setblogData(row)
  };

  let selectedProd = async (val) => {
    console.log("date is>>", val.date);
    setEditBlog({ ...val, date: val.date.split("T")[0] });
    openEdit();
  };

  let deleteFun = async (delId) => {
    try {
      let response = await HTTP.delete(`/home/deleteBlog/${delId}`);
      if (response.data.error) {
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
      getBlog();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
        {/* <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{ start: 'Check-in', end: 'Check-out' }}
    >
      <DateRangePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider> */}

{/* <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      /> */}


    <ResTable
        style={{background:"#1590b3"}}
        openhead={openAdd}
        tableHeading={tableHead}
        //   tableBody={allBlog}
        rows={allBlog}
        action="Action"
        btnName2={<DeleteIcon />}
        btnName={<EditIcon />}
        thBtn="Create Blog"
        deletefun={(value) => {
          deleteFun(value._id);
        }}
        openEdit={(value) => {
          selectedProd(value);
        }}
      >
        
        <ResButton btnName="Create" style={{background:"#1590b3"}} />
      </ResTable>
      

      <ResModal
        openMod={openAddModel}
        handleClose={handleClose}
        heading="Add Blog"
        close="close"
        save="save"
        savefun={setBlog}
        style={{background:"#1590b3"}}
      >
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Blog Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              onChange={insertData}
              name="name"
              value={WriteBlog.name}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Created Date</Form.Label>
            <Form.Control
              type="datetime-local"
              placeholder="date"
              name="date"
              onChange={insertData}
              value={WriteBlog.modiOn}
            />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                type="text"
                // placeholder="Name"
                onChange={insertData}
                name="content"
                value={WriteBlog.content}
              />
            </Form.Group>
          </Form.Group>
        </Form>
      </ResModal>

      <ResModal
        openMod={openEditModel}
        handleClose={editClose}
        heading="Modify Blog"
        close="close"
        save="save Changes"
        savefun={() => {
          editBlog(EditBlog);
        }}
      >
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Blog Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Blog Name"
              onChange={modifyField}
              name="name"
              value={EditBlog.name}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Modified Date</Form.Label>

            <Form.Control
              type="date"
              // placeholder="date"
              name="date"
              onChange={modifyField}
              value={EditBlog.date}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={10}
              type="text"
              // placeholder="Blog Name"
              onChange={modifyField}
              name="content"
              value={EditBlog.content}
            />
          </Form.Group>
        </Form>
      </ResModal>
    </div>
  );
}

export default Blog;
