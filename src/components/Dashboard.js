import React from 'react';
import Chart from './Chart';
import {Typography} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const chartData = {
    labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
    datasets:[
      {
        label:'Population',
        data:[
          617594,
          181045,
          153060,
          106519,
          105162,
          95072
        ],
        backgroundColor:[
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)'
        ]
      }
    ]
  }


const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
//   Table Data
  const rows = [
    createData( "PayTM", 20000, '27/04/2012', 'Low', 'Yes'),
    createData( "Paypal", 30000, '09/04/2010', 'Medium', 'Yes'),
    createData( "Titan", 50000, '25/12/1998',  'Medium', 'Yes'),
    createData( "Amazon", 4000000, '09/11/1992', 'High',  'Yes'),
  ];
  
  const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
        {/* Heading */}
        <div style={{textAlign:'center', marginTop: '5%', }}>
          <Typography variant="h2" component="h3" gutterBottom>
            <u>Dashboard</u>
          </Typography>
        </div>
        {/* Table containing product Details */}
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Product Name</StyledTableCell>
                    <StyledTableCell align="right">Profit(INR)</StyledTableCell>
                    <StyledTableCell align="right">Date of Release</StyledTableCell>
                    <StyledTableCell align="right">Price</StyledTableCell>
                    <StyledTableCell align="right">Customer Friendly</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map(row => (
                    <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                        {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
        </Paper>
        <br/> <br/>

        {/* Chart (Pie, Bar and Line) */}
        <div>
            <Chart chartData={chartData} />
        </div>
    </div>
  );
}
