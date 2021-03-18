
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useSignInStyles = makeStyles((theme) =>
    createStyles({
        textfield: {
            backgroundColor: 'white',
            justifyContent: "center",
            display: 'flex',
            border: '2px solid black',
            margin: theme.spacing(0.3),

        },
        form: {
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            
        },
        loginHeader: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
        },
        submitButton: {
            margin: theme.spacing(2,0,2,0),
            maxWidth: theme.spacing(7),

        }
    }
    ));