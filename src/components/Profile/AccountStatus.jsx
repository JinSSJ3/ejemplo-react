import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import BankTransfersChart from "./BankTransfersChart";
import PaymentIcon from "@material-ui/icons/Payment";
import VisibilityIcon from "@material-ui/icons/Visibility";
const now = new Date();
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%",
  },
  button: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    minWidth: 270,
    border: "2px solid teal",
  },

  pos: {
    marginBottom: 0,
  },
}));
const getAccounts = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve([
          { name: "0 Costos", rate: 0.0005, beneficios: true },
          { name: "Cuentas Transf.", rate: 1.5, beneficios: false },
        ]);
      }, 3000);
    } catch (error) {
      reject([]);
    }
  });
};

const AccountStatus = (props) => {
  const classes = useStyles();
  const [selectedAccount, setSelectedAccount] = useState("");
  const [accountList, setAccountList] = useState([]);
  const getData = async () => {
    const accounts = await getAccounts();
    setAccountList(accounts);

    console.log("accounts", accounts[0].name);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (accountList && accountList.length > 0) {
      console.log("lista", accountList[0]);
      setSelectedAccount(accountList[0]);
    }
  }, [accountList]);
  const handleSelectedAccount = (event) => {
    setSelectedAccount(event.target.value);
    console.log("accounts sel", event.target.value.name);
  };
  return (
    <Paper className="step-container" style={{ padding: "2%" }}>
      <Grid
        spacing={2}
        container
        direction="column"
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            {`Estado de Cuenta al ${now.toLocaleDateString()}:`}
          </Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={4}>
            <Grid item md={8} xs={12}>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel
                  shrink
                  id="demo-simple-select-placeholder-label-label"
                >
                  Seleccione su cuenta
                </InputLabel>

                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={selectedAccount}
                  onChange={handleSelectedAccount}
                  fullWidth
                >
                  {accountList.map((accountItem, index) => (
                    <MenuItem key={index + 1} value={accountItem}>
                      {accountItem.name}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>Lista de Cuentas</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item md={4} xs={12}>
              <Button
                //variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<VisibilityIcon />}
              >
                Ver transacciones
              </Button>
            </Grid>
          </Grid>
       
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item md={4} xs={12}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    <PaymentIcon /> {selectedAccount.name || "..."}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {selectedAccount.rate + "% interés"}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {selectedAccount.beneficios
                      ? "Con beneficios"
                      : "Sin beneficios"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={8} xs={12} container>
              <Grid item md={6} xs={12}>
                <Typography variant="h6" gutterBottom>
                  Saldo disponible
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                  $ 20.00
                </Typography>
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography variant="h6" gutterBottom>
                  Ultima operacion
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {now.toLocaleTimeString()}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <BankTransfersChart />
        </Grid>
      </Grid>
      Account ststus
    </Paper>
  );
};
export default AccountStatus;
