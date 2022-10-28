import { StyleSheet } from 'react-native';

/*-------------------------------------------------------------------------
  Colors
-------------------------------------------------------------------------*/
export const colors = {
  white: "#fff",
  primary: "#1e90ff",
  error: "#ff6347",
  light: "#D3D3D3",
  dark: "#6F7378",
}

/*-------------------------------------------------------------------------
  Global Style Sheet
-------------------------------------------------------------------------*/
export const globalStyles = StyleSheet.create({
  /*-------------------------------------------------------------------------
    Containers
  -------------------------------------------------------------------------*/
  pageContainer: {// Page Container
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  containerStack: {// Conatiner Stack
      flex: 1,
      backgroundColor: colors.white,
      alignItems: 'center',
      justifyContent: 'center',
      width: 'windowWidth',
      height: 'windowHeight',
  },

  softRectangularContainer: {// Soft Rectangular Container
      backgroundColor: colors.white,
      border: 'solid',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '60%',
      borderRadius: '10px',
  },

  /*-------------------------------------------------------------------------
    Text
  -------------------------------------------------------------------------*/

  textInputBox: {// Text Input Box
    border: 'solid',
    padding: '4px',
    width: '95%',
    height: '50px',
    borderRadius: '10px',
    margin: '10px',
  },

  pageTitle: {// Page Title Header
    fontSize: '32px',
    padding: '4px',
  },

  primaryHeader: {// Primary Header
    backgroundColor: colors.white,
    fontSize: '24px',
    color: colors.primary,
    fontWeight: 'bold',
    width: "95%",
  },

  loginText: {// Login Text
    color: colors.white,
    fontSize: '18px',
    fontWeight: 'bold',
  },

  errorText: {// Error Text
    color: colors.error,
    fontWeight: 'bold',
  },

  /*-------------------------------------------------------------------------
    Buttons
  -------------------------------------------------------------------------*/

  forgotPassword: {// Forgot Password Button
    padding: '5px',
    alignItems: 'left',
    justifyContent: 'left',
    width: '95%',
    marginLeft: '2%'
  },

  button: {// Primary Button
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    width: '70%',
    height: '50px',
    borderRadius: '10px',
  },
});