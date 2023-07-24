import  React from 'react';
import "./styles.css";
import CircularProgress from '@mui/material/CircularProgress';


export default function Loader() {
  return (
    <div className='loader-container'>
      <CircularProgress />
    </div>
  );
}