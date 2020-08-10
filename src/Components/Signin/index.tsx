import React, {useState, useCallback} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

import {ISigninForm} from 'src/@types/signin';
import {l8n} from 'src/l8n';

interface IProps {
  error: string;
  pending: boolean;
  onSubmit?: (form: ISigninForm) => void;
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  loader: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

const SignIn = ({error, pending, onSubmit}: IProps) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);
  const onPasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);
  const onSubmitForm = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (pending) {
        return;
      }
      onSubmit &&
        onSubmit({
          login: email,
          password
        });
    },
    [email, password, pending, onSubmit]
  );

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          {l8n('signin.form.title')}
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmitForm}>
          {error ? <Alert severity='error'>{error}</Alert> : null}
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            error={!!error}
            label={l8n('signin.form.email')}
            name='email'
            value={email}
            onChange={onEmailChange}
            autoComplete='email'
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            error={!!error}
            name='password'
            value={password}
            onChange={onPasswordChange}
            label={l8n('signin.form.password')}
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label={l8n('signin.form.remember.me')}
          />
          {pending ? (
            <div className={classes.loader}>
              <CircularProgress />
            </div>
          ) : (
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              {l8n('signin.form.button')}
            </Button>
          )}
        </form>
      </div>
    </Container>
  );
};

export default React.memo(SignIn);
