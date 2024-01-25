import { Box, Paper, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&>div": {
      padding: 30,
      width: "100%",
      maxWidth: 700,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: theme.palette.common.white,
      "&>h1": {
        marginBottom: 20,
        textTransform: "capitalize",
      },
    },
  },
}));

export default function SignupForm({ role = "" }) {
  const classes = useStyle();
  const [initialState, setInitialState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    role,
  });
  const validationSchema = yup.object().shape({
    first_name: yup.string().required("Please enter a valid first name."),
    last_name: yup.string().required("Please enter a valid last name."),
    email: yup.string().email().required("Please enter a valid email."),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters long.")
      .max(16, "Password cannot exceed 16 characters.")
      .required("Please enter a valid password."),
    confirm_password: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "Password and confirm password must be same."
      )
      .required("Please enter a valid confirm password."),
    role: yup.string(),
  });

  const handleSave = (formData) => {};

  const { handleSubmit, values, errors, handleChange, handleBlur, resetForm } =
    useFormik({
      initialValues: initialState,
      validationSchema,
      enableReinitialize: true,
      onSubmit: handleSave,
    });

  useEffect(() => {
    resetForm();
  }, []);
  return (
    <Box className={classes.root}>
      <Box component={Paper}>
        <Typography variant="h1">Register As a {role}</Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <TextField
            type="text"
            label="First name"
            onChange={handleChange}
            onBlur={handleBlur}
            name="first_name"
            error={errors.first_name}
            helperText={errors.first_name}
          ></TextField>
        </form>
      </Box>
    </Box>
  );
}
