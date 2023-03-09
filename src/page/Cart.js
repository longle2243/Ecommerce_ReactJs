import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RowCart from '../component/common/rowCart';
import SummaryCart from '../component/common/summaryCart';

export default function Cart() {
  const listProduct = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: '50px' }}>
      <RowCart />
      <SummaryCart />
    </div>
  );
}
