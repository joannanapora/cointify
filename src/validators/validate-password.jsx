export const validatePassword = (password)=> {
    const re = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*\d)(?=.*[!@#$%^&*()_+])(?=.*[a-z]).*$/;
    return re.test(String(password));
};