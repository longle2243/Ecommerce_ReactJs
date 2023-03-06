import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, selectData } from '../redux/dataSlice';

function MyComponent() {
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      {console.log(data)}
      <h1>get dataSlice</h1>
    </div>
  );
}

export default MyComponent;
