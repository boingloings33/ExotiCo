import {
  Typography,
  Stack,
  Box,
  TextField,
  Button,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { forwardRef, useEffect, useState } from "react";
import FormSent from "./FormSent";
import EastIcon from "@mui/icons-material/East";

const Form = forwardRef(function Form(props, ref) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const form = useForm({
    defaultValues: {
      a_firstname: "",
      b_lastname: "",
      c_email: "",
      d_number: "",
      e_message: "",
    },
  });
  const { register, handleSubmit, formState, reset, control } = form;
  const { errors, isSubmitSuccessful } = formState;
  const [isFormSent, setIsFormSent] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  async function onSubmit(data) {
    try {
      setIsFetching(() => true);
      await fetch("https://formspree.io/f/mzbljkqy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          message: { data },
        }),
      });
    } catch {
      console.log("error");
    } finally {
      setIsFetching(() => false);
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setIsFormSent(true);
      setTimeout(() => {
        setIsFormSent(false);
      }, "3000");
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      {!isMobile && (
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
                Let me know how we can help.
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
                        defaultValue="Last Name"
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
      )}

      {isMobile && (
        <Stack
          ref={ref}
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: "primary.main",
            pt: 6,
            pb: 6,
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: 40 }, color: "secondary.light" }}
          >
            Get in Touch
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={2} alignItems="center" width="90vw">
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
                    {...register("a_firstname", {
                      required: "First Name is required",
                    })}
                    error={!!errors.a_firstname}
                    helperText={errors.a_firstname?.message}
                    sx={{
                      width: "100%",
                    }}
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                  />
                )}
              />
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
                    InputLabelProps={{ style: { color: "white" } }}
                  />
                )}
              />
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
                    {...register("c_email", { required: "Email is required" })}
                    error={!!errors.c_email}
                    helperText={errors.c_email?.message}
                    sx={{
                      width: "100%",
                    }}
                    InputLabelProps={{ style: { color: "white" } }}
                  />
                )}
              />
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
                    InputLabelProps={{ style: { color: "white" } }}
                  />
                )}
              />
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
                    InputLabelProps={{ style: { color: "white" } }}
                  />
                )}
              />
              <Button
                disabled={isFetching ? true : false}
                size="large"
                type="submit"
                variant="contained"
                sx={{
                  width: "100%",
                  borderRadius: 100,
                  position: "relative",
                  backgroundColor: "secondary.light",
                  color: "primary.main",
                }}
              >
                Submit {<EastIcon sx={{ ml: 1 }} />}
                {isFormSent && (
                  <Box sx={{ position: "absolute", bottom: -36 }}>
                    <FormSent buttonSize="small" />
                  </Box>
                )}
              </Button>
            </Stack>
          </form>
        </Stack>
      )}
    </>
  );
});

export default Form;
