import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { Fragment } from "react";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const ProfileDetail = (props) => {
  const [sectorLaboral, setSectorLaboral] = React.useState("");
  const [ocupacion, setOcupacion] = React.useState("");
  const [editMode, seteditMode] = React.useState(false);
  const handlesector = (event) => {
    setSectorLaboral(event.target.value);
  };
  const handleOcupacion = (event) => {
    setOcupacion(event.target.value);
  };
  const classes = useStyles();
  const handleEditProfile = () => {
    alert("datos editados");
    seteditMode(false);
  };
  return (
    <Fragment>
      <Paper style={{ padding: "2%" }}>
        <Typography variant="h4" gutterBottom>
          Perfil
        </Typography>
        <Grid container spacing={4}>
          <Grid item md={6} xs={12}>
            <TextField
              id="outlined-full-width"
              label="Nombres"
              style={{ margin: "1% 0" }}
              placeholder="Nombres"
              //helperText="Full width!"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
              id="outlined-full-width"
              label="Apellidos"
              style={{ margin: "1% 0" }}
              placeholder="Nombres"
              //helperText="Full width!"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
              id="outlined-full-width"
              label="Documento de Identidad"
              style={{ margin: "1% 0" }}
              placeholder="Doxumento de identidad"
              //helperText="Full width!"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
              style={{ margin: "1% 0" }}
              id="outlined-full-width"
              label="Fecha de nacimiento"
              type="date"
              defaultValue="2021-08-12"
              fullWidth
              margin="normal"
              //className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              id="outlined-full-width"
              label="E-mail"
              style={{ margin: "1% 0" }}
              placeholder="Email"
              //helperText="Full width!"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
              id="outlined-full-width"
              label="Telf. / Celular"
              style={{ margin: "1% 0" }}
              placeholder="Telf. / Celular"
              //helperText="Full width!"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />

            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                Sector Laboral
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={sectorLaboral}
                onChange={handlesector}
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>{"0-100"}</MenuItem>
                <MenuItem value={20}>{"100-200"}</MenuItem>
                <MenuItem value={30}>{"200-300"}</MenuItem>
              </Select>
              <FormHelperText>Label + placeholder</FormHelperText>
            </FormControl>

            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                Ocupacion
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={ocupacion}
                onChange={handleOcupacion}
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>{"0-100"}</MenuItem>
                <MenuItem value={20}>{"100-200"}</MenuItem>
                <MenuItem value={30}>{"200-300"}</MenuItem>
              </Select>
              <FormHelperText>Label + placeholder</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Button onClick={() => seteditMode(true)}>Editar</Button>
        <Button
          variant="contained"
          onClick={handleEditProfile}
          disabled={editMode ? true : false}
        >
          Guardar
        </Button>
      </Grid>
    </Fragment>
  );
};
export default ProfileDetail;
