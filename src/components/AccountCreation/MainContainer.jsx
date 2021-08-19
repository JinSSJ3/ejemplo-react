import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Step1AccountType from "./Step1AccountType";
import { Grid } from "@material-ui/core";
import Step2AccountType from "./Step2AccountType";
import Step3AccountType from "./Step3AccountType";
import onSuccessImage from "./.././../static/on_success.jpg";
import DialogAlert from "../Dialogs/DialogAlert";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    backgroundColor: "rgba(255, 255, 255, 0.795)",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    //backgroundColor: "rgba(255, 255, 255, 0.295)",
  },
}));

function getSteps() {
  return ["Tipo de cuenta", "Datos personales", "Datos de contacto"];
}

function getStepContent(stepIndex, props) {
  switch (stepIndex) {
    case 0:
      return <Step1AccountType {...props} />;
    case 1:
      return <Step2AccountType {...props} />;
    case 2:
      return <Step3AccountType {...props} />;
    default:
      return "--";
  }
}
const consultarCuenta = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve("561-6132-165-635165-635130");
      }, 2000);
    } catch (error) {
      reject("");
    }
  });
};
const contentOk = (numCuentaCreada) => (
  <Fragment>
    <img
      alt="onSuccness"
      style={{
        width: "auto",
        height: "10vh",
      }}
      src={onSuccessImage}
    />
    {`Felicitaciones su cuenta ha sido creada satisfactoriamente ${numCuentaCreada}`}
  </Fragment>
);
const contentBad = (
  <Fragment>
    {`Lo sentimos, su cuenta no fue creada satisfactoriamente`}
  </Fragment>
);
const MainContainer = (props) => {
  const classes = useStyles();
  //const [data,setData] = React.useState({});
  const [activeStep, setActiveStep] = React.useState(0);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [numCuentaCreada, setnumCuentaCreada] = React.useState("");
  const [contentDialog, setContentDialog] = useState(<></>);

  const crearCuenta = async (data) => {

   

    const result = await consultarCuenta();
    if (result === "") {
      setContentDialog(contentBad);
    } else {
      setnumCuentaCreada(result);
      setContentDialog(contentOk(numCuentaCreada));
    }
    handleOpenDialog();
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        style={{ backgroundColor: "rgba(255, 255, 255, 0.795)" }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div>
        <Typography className={classes.instructions}>
          {getStepContent(activeStep, props)}
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Button
              //disabled={activeStep === 0}
              onClick={handleBack}
              //className={classes.backButton}
              variant="outlined"
              color="secondary"
              onClick={()=>{props.history.push("/");}}
            >
              Cancelar
            </Button>
          </Grid>

          <Grid item>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.backButton}
              variant="outlined"
            >
              Atras
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={
                activeStep === steps.length - 1 ? crearCuenta : handleNext
              }
            >
              {activeStep === steps.length - 1 ? "Terminar" : "Continuar"}
            </Button>
          </Grid>
        </Grid>
      </div>

      <DialogAlert
        onClose={handleCloseDialog}
        onSuccess={() => {
          if (numCuentaCreada !== "") props.history.push("/");
        }}
        /*  onCancel={() => {
          alert("Se canceló la operación");
        }} */
        maxWidth={"xs"}
        fullWidth={true}
        open={openDialog}
        content={contentDialog}
        title={numCuentaCreada === "" ? "Lo sentimos :(" : "Felicitaciones"}
      />
    </div>
  );
};
export default MainContainer;
