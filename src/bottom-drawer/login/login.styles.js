
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useSignInStyles = makeStyles((theme) =>
    createStyles({
        form: {
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            padding: theme.spacing(0,0,2,0)
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
            fontWeight: 'normal'
        },
        submitButton: {
            margin: theme.spacing(2,0,2,0),
            maxWidth: theme.spacing(10),
            backgroundColor: '#008080',
            border: '2px solid black'
        },
    }
    ));