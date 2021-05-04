
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useSignInStyles = makeStyles((theme) =>
    createStyles({
        form: {
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
        },
        textfield: {
            margin: '2px',
            maxWidth: theme.spacing(40),
            display: 'flex',
            width: '100%',
        },
        loginHeader: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            fontFamily: "Fredoka One",
            fontWeight: 'normal',
            fontSize: '25px'
        },
        submitButton: {
            margin: theme.spacing(2, 0, 2, 0),
            maxWidth: theme.spacing(14),
            border: '1px solid black'
        },
    }
    ));