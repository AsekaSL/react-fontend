import { Table,Paper,TableBody,TableCell,TableContainer, TableHead, TableRow, Button } from "@mui/material";


function Usertable( { users, deleteUser , selectedUser } ) {
    


    return(
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                { (users.length > 0) ? users.map(user => {return(
                    <TableRow key={user.id} sx={{'&:last-child td, & &:last-child th' : {border: 0}}}>
                        <TableCell component={'th'} scope="row">
                            {user.id}
                        </TableCell>
                        <TableCell component={'th'} scope="row">
                            {user.name}
                        </TableCell>
                        <TableCell>
                            <Button sx={{margin: '0px 10px'}} onClick={() => {selectedUser({id: user.id, name: user.name})} }>
                                Update
                            </Button>
                            <Button sx={{margin: '0px 10px'}} onClick={() => {deleteUser({id: user.id})}}>
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>
                )}) : 
                <TableRow sx={{'&:last-child td, & &:last-child th' : {border: 0}}}>
                    <TableCell component={'th'} scope="row">No Data</TableCell>
                </TableRow>
                }                     
            </TableBody>
        </Table>
    </TableContainer>
    );
};



export default Usertable;