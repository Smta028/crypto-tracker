import  React from 'react';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import "./styles.css";

export default function PaginationComponent({page,handlePageChange}) {
 

  return (
    <div className="pagination-component">
      <Pagination count={10} page={page}
       onChange={(event,value) => handlePageChange(event,value)}
      sx={{
        color:"var(--white)",
        "& .Mui-selected" :{
            background:"var(--blue) !important",
            color:"#fff !important",
            borderColor:"var(--blue) !important",
        },
        "& .MuiPaginationItem-ellipsis":{
            border:"0px solid var(--grey) !imtportant",
        },
        "& .MuiPaginationItem-text": {
            color:"var(--white) !important",
            border:"1px solid var(--grey) !important",
        },
      }}
       />
    </div>
  );
}