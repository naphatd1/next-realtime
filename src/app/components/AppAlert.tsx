import Alert from '@mui/material/Alert'
import CheckIcon from '@mui/icons-material/Check'
import Stack from '@mui/material/Stack'

export default function AppAlert() {
  return (
    <>
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        App Alert
      </Alert>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert variant="filled" severity="success">
          This is a filled success Alert.
        </Alert>
        <Alert variant="filled" severity="info">
          This is a filled info Alert.
        </Alert>
        <Alert variant="filled" severity="warning">
          This is a filled warning Alert.
        </Alert>
        <Alert variant="filled" severity="error">
          This is a filled error Alert.
        </Alert>
      </Stack>
    </>
  )
}
