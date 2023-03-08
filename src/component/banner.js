import React, { useState, useEffect } from 'react';
import { Card, CardMedia } from '@mui/material';
import { useSelector } from 'react-redux';

export default function Banner() {
  const listProduct = useSelector(state => state.banner);
  const [imgno, setImgno] = useState(0);

  function changeNum() {
    setImgno(Math.floor(Math.random() * 6));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      changeNum();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Card>
        {console.log(imgno)}
        <CardMedia sx={{  height: "90%", width: "99%", m:"auto", position: "absolute", objectFit: "cover" }} image={listProduct[imgno].data.img} />
      </Card>
    </div>
  );
}
