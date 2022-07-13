import { Grid, Typography } from "@mui/material";

const tarefas = [
  {id: 1, title: 'Aprender jsx'},
  {id: 2, title: 'Aprender componentes'},
  {id: 3, title: 'Aprender props'},
  {id: 4, title: 'Aprender state'},
  {id: 5, title: 'Aprender eventos'},
  {id: 6, title: 'Aprender listas'},
]

function App() {

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography>xs=4</Typography>
      </Grid>
      <Grid item xs={4}>
        <ul>
        {tarefas.map( tarefa => 
          <li key={tarefa.id}>{tarefa.title}</li>
        )}
        </ul>
      </Grid>
      <Grid item xs={4}>
        <Typography>xs=4</Typography>
      </Grid>
    </Grid>
  )
}

export default App
