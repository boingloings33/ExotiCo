import { Typography, Stack, Box, TextField, Button, Grid } from "@mui/material";
import { Controller } from "react-hook-form";
import FormSent from "./FormSent";
import EastIcon from "@mui/icons-material/East";
import { forwardRef } from "react";

const FormWeb = forwardRef(function FormWeb(
  { handleSubmit, control, errors, register, onSubmit, isFetching, isFormSent },
  ref
) {
  return (
    <>
      <Box
        ref={ref}
        sx={{
          height: "100vh",
          position: "absolute",
          mt: { md: 3, xl: 3 },
        }}
      />
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{
            py: 10,
            mt: 12,
            borderRadius: 6,
            backgroundColor: "primary.main",
          }}
        >
          <Typography
            variant="h1"
            alignSelf="center"
            sx={{ color: "secondary.light" }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="body2"
            fontSize={20}
            lineHeight={1.6}
            sx={{ color: "secondary.light" }}
            fontWeight={300}
          >
            Let us know how we can help.
          </Typography>
          <Grid container spacing={1} sx={{ px: 20, pt: 2 }}>
            <Grid item xs={6}>
              <Controller
                name="a_firstname"
                control={control}
                render={({ field: { ref, ...field } }) => (
                  <TextField
                    {...field}
                    inputRef={ref}
                    variant="outlined"
                    label="First Name"
                    type="text"
                    error={!!errors.a_firstname}
                    helperText={errors.a_firstname?.message}
                    {...register("a_firstname", {
                      required: "First Name is required",
                    })}
                    sx={{
                      width: "100%",
                    }}
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="b_lastname"
                control={control}
                render={({ field: { ref, ...field } }) => (
                  <TextField
                    {...field}
                    inputRef={ref}
                    variant="outlined"
                    label="Last Name"
                    type="text"
                    {...register("b_lastname", {
                      required: "Last Name is required",
                    })}
                    error={!!errors.b_lastname}
                    helperText={errors.b_lastname?.message}
                    sx={{
                      width: "100%",
                    }}
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="c_email"
                control={control}
                render={({ field: { ref, ...field } }) => (
                  <TextField
                    {...field}
                    inputRef={ref}
                    variant="outlined"
                    label="Email"
                    type="email"
                    {...register("c_email", {
                      required: "Email is required",
                    })}
                    error={!!errors.c_email}
                    helperText={errors.c_email?.message}
                    sx={{
                      width: "100%",
                    }}
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="d_number"
                control={control}
                render={({ field: { ref, ...field } }) => (
                  <TextField
                    {...field}
                    inputRef={ref}
                    variant="outlined"
                    label="Phone Number"
                    type="text"
                    {...register("d_number", {
                      required: "Phone number is required",
                    })}
                    error={!!errors.d_number}
                    helperText={errors.d_number?.message}
                    sx={{
                      width: "100%",
                    }}
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="e_message"
                control={control}
                render={({ field: { ref, ...field } }) => (
                  <TextField
                    {...field}
                    inputRef={ref}
                    multiline={true}
                    rows={8}
                    variant="outlined"
                    label="Message"
                    type="text"
                    {...register("e_message", {
                      required: "Message is required",
                    })}
                    error={!!errors.e_message}
                    helperText={errors.e_message?.message}
                    sx={{
                      width: "100%",
                    }}
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                  />
                )}
              />
            </Grid>
            <Box
              sx={{
                mt: 2,
                width: "100%",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Button
                disabled={isFetching ? true : false}
                size="large"
                type="submit"
                variant="contained"
                sx={{
                  borderRadius: 100,
                  position: "relative",
                  backgroundColor: "secondary.light",
                  color: "primary.main",
                  "&:hover": { color: "secondary.light" },
                }}
              >
                Submit {<EastIcon sx={{ ml: 1 }} />}
                {isFormSent && (
                  <Box sx={{ position: "absolute", bottom: -40 }}>
                    <FormSent buttonSize="small" />
                  </Box>
                )}
              </Button>
            </Box>
          </Grid>
        </Stack>
      </form>
    </>
  );
});

export default FormWeb;
