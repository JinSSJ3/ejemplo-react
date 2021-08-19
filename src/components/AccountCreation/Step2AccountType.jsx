import {
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    border: "2px solid teal",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 0,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const Step2AccountType = (props) => {
  const classes = useStyles();

  const [region, setRegion] = React.useState("");
  const [provincia, setProvincia] = React.useState("");
  const [distrito, setDistrito] = React.useState("");
  const [sectorLaboral, setSectorLaboral] = React.useState("");
  const [ocupacion, setOcupacion] = React.useState("");
  const handlesector = (event) => {
    setSectorLaboral(event.target.value);
  };
  const handleOcupacion = (event) => {
    setOcupacion(event.target.value);
  };
  const handleRegion = (event) => {
    setRegion(event.target.value);
  };
  const handleProv = (event) => {
    setProvincia(event.target.value);
  };
  const handleDistrito = (event) => {
    setDistrito(event.target.value);
  };
  return (
    <div className="step-container">
      <Typography variant="h5" gutterBottom>
        Datos Personales
      </Typography>
      <Grid container spacing={3}>
        <Grid item md={12} container spacing={3}>
          <Grid item md={4} xs={12}>
            <TextField
              id="outlined-full-width"
              label="Nombres"
              style={{ margin: 8 }}
              placeholder="Nombres"
              //helperText="Full width!"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              id="outlined-full-width"
              label="Apellido paterno"
              style={{ margin: 8 }}
              placeholder="Apellido paterno"
              //helperText="Full width!"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              id="outlined-full-width"
              label="Apellido Materno"
              style={{ margin: 8 }}
              placeholder="Nombres"
              //helperText="Full width!"
              fullWidth
              margin="Apellido Materno"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid item md={12} container spacing={3}>
          <Grid item md={6} xs={12}>
            {" "}
            <TextField
              id="outlined-full-width"
              label="Documento de identidad"
              style={{ margin: 8 }}
              placeholder="Nombres"
              //helperText="Full width!"
              fullWidth
              margin="Documento de identidad"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              style={{ margin: 8 }}
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
        </Grid>
        <Grid item md={12} container spacing={3}>
          <Grid item md={4} xs={12}>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                Region
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={region}
                onChange={handleRegion}
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <FormHelperText>Label + placeholder</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item md={4} xs={12}>
            <FormControl variant="filled" className={classes.formControl}>
              {/** */}
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                Provincia
              </InputLabel>

              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={provincia}
                onChange={handleProv}
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <FormHelperText>Label + placeholder</FormHelperText>
              {/** */}
            </FormControl>
          </Grid>
          <Grid item md={4} xs={12}>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                Distrito
              </InputLabel>

              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={distrito}
                onChange={handleDistrito}
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <FormHelperText>Label + placeholder</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item md={12} container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField
              id="outlined-full-width"
              label="Direccion"
              style={{ margin: 8 }}
              placeholder="Direccion"
              //helperText="Full width!"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              id="outlined-full-width"
              label="Codigo postal"
              style={{ margin: 8 }}
              placeholder="Codigo postal"
              //helperText="Full width!"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid item md={12} container spacing={3}>
          <Grid item md={6} xs={12}>
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
          </Grid>
          <Grid item md={6} xs={12}>
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
      </Grid>
    </div>
  );
};
export default Step2AccountType;
