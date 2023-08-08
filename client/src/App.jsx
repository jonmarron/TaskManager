import {useEffect, useState} from 'react'
import './App.css'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material'
function App() {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }
    const [projects, setProjects] = useState([])

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    const getSavedSlides = async () => {
        const response = await fetch('http://localhost:8080/projects')
        const data = await response.json()
        console.log("test")
        console.log(data)
        setProjects(data)
    }

    useEffect(() => {
        getSavedSlides()
        console.log(projects)
    }, [])
  return (
    <>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {projects.map((project) => (
                        <TableRow
                            key={project.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {project.name}
                            </TableCell>
                            <TableCell align="right">{project.status}</TableCell>
                            <TableCell align="right">{project.type}</TableCell>
                            <TableCell align="right">{project.status}</TableCell>
                            <TableCell align="right">{project.client.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
  )
}

export default App
