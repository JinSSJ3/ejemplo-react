import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {  Grid } from "@material-ui/core";
import PaymentIcon from '@material-ui/icons/Payment';
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
const accounts = [
  { name: "0 Costos", rate: 0.0005, beneficios: true },
  { name: "Cuentas Transf.", rate: 1.5, beneficios: false },
];
const Step1AccountType = (props) => {
  const classes = useStyles();
  const [country, setCountry] = React.useState("");
  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  return (
    <div className="step-container">
      {" "}
      <Typography variant="h5" gutterBottom>
       Elije un tipo de cuenta
      </Typography>
      <div className="step-content">
        {accounts.map((account, index) => (
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
              <PaymentIcon/> {account.name}
              </Typography>
              <Typography variant="body2" component="p">
                {account.rate + "% interés"}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {account.beneficios ? "Con beneficios" : "Sin beneficios"}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <Grid container>
        <Grid item md={6} xs={12}>
          <Typography variant="h5" gutterBottom>
            Seleccione su país de origen
          </Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Pais
            </InputLabel>

            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={country}
              onChange={handleChange}
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
        <Grid item md={12}>
          <Grid container>
            <Grid item xs={12}>
              {"Acontinuación se le preguntara sobre ss datos personales para la" +
                "creación de la cuenta"}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Step1AccountType;
