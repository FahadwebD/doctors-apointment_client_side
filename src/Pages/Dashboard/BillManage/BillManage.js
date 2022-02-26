import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useCounts from '../../../hooks/useCounts';
import useDoctors from '../../../hooks/useDoctors';
import Bill from './Bill';

const BillManage = () => {

    const {doctors} = useDoctors()



    return (
        <div>
         
            {doctors?.map(data=><Bill
            key={data.email}
            data={data}></Bill>)}
          
        </div>
    );
};

export default BillManage;