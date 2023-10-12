import React from 'react'
import DataBox from '../components/DataBox'
import { Box, Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import TableComponent from '../components/TableComponent'

const Dashboard = () => {
  return (
    <div className='h-auto w-full flex flex-col gap-4' >
        {/* Data Boxes */}
        <div className='h-64 mx-8 '>
        <div className='grid grid-cols-4 gap-8 w-full my-4 ' >
            <DataBox />
            <DataBox />
            <DataBox />
            <DataBox />
        </div>
        </div>
        
        <div className='h-[calc(100vh-22rem)]' >
        <div className='h-full mx-8 bg-white/30 overflow-hidden rounded-md' >
            <TableContainer sx={{maxHeight: '100%'}} >
                <Table stickyHeader sx={{minWidth: 650}} aria-label='simple table' >
                    <TableHead >
                        <TableRow>
                            <TableCell align='center' >Category</TableCell>
                            <TableCell align='center' >Case ID</TableCell>
                            <TableCell align='center' >Date Time</TableCell>
                            <TableCell align='left' >Name</TableCell>
                            <TableCell align='center' >Mobile</TableCell>
                            <TableCell align='left' >Case Detail</TableCell>
                            <TableCell align='center' >Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='left' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='left' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='left' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='left' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='left' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='left' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='left' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='left' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='left' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='left' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='left' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='left' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='left' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='left' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='left' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='left' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='left' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='left' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='left' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='left' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='left' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                            <TableCell align='left' >XXXX</TableCell>
                            <TableCell align='center' >XXXX</TableCell>
                        </TableRow>
                        
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        </div>
    
    </div>
  )
}

export default Dashboard