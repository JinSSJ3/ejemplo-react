import { Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
//import FormLabel from "@material-ui/core/FormLabel";
const Step3AccountType = (props) => {
  return (
    <div className="step-container">
      <Typography variant="h4" gutterBottom>
        Datos de contacto
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          <TextField
            id="outlined-full-width"
            label="Email"
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
        </Grid>

        <Grid item md={2} xs={12}>
          <TextField
            id="outlined-full-width"
            label="Cod. telefono"
            style={{ margin: "1% 0" }}
            placeholder="Cod. telefono"
            //helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item md={10} xs={12}>
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
        </Grid>

        <Grid item md={6} xs={12}>
          {" "}
          <Typography variant="h5" gutterBottom>
            Contreseña
          </Typography>
          <TextField
            id="outlined-full-width"
            label="Contraseña"
            style={{ margin: "1% 0" }}
            placeholder="Contraseña"
            //helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            type="password"

            //onChange={handleChangePassword}
            // value={usuarioLogin.password}
          />
          <TextField
            id="outlined-full-width"
            label="Repetir contraseña"
            style={{ margin: "1% 0" }}
            placeholder="Repetir contraseña"
            //helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            type="password"
            //onChange={handleChangePassword}
            // value={usuarioLogin.password}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <Typography variant="h5" gutterBottom>
            Confirmación de consentimiento
          </Typography>
          <FormControl component="fieldset">
            {/* <FormLabel component="legend">Label Placement</FormLabel> */}
            <FormGroup aria-label="position" column>
              <FormControlLabel
                onChange={(e) => alert(e.target.value)}
                value={0}
                control={<Checkbox color="primary" />}
                label="He leído y acepto los términos y condiciones."
                labelPlacement="He leído y acepto los términos y condiciones."
              />
              <FormControlLabel
                onChange={() => alert("presed")}
                value={1}
                control={<Checkbox color="primary" />}
                label="Estoy de acuerdo con brindar mis datos personales."
                labelPlacement="Estoy de acuerdo con brindar mis datos personales."
              />
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};
export default Step3AccountType;
