import {
  Typography,
  Stack,
  Box,
  TextField,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { forwardRef, useEffect, useState } from "react";
import FormSent from "./FormSent";
const Form = forwardRef(function Form(props, ref) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      number: "",
      message: "",
    },
  });
  const { register, handleSubmit, formState, reset } = form;
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
          <Stack
            spacing={2}
            ref={ref}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              py: 10,
              backgroundColor: "primary.dark",
              px: 30,
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Stack spacing={2} alignItems="start">
                <Typography variant="h1" alignSelf={!isTablet ? "start" : ""}>
                  Get in Touch
                </Typography>
                <TextField
                  variant="outlined"
                  label="Name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  sx={{
                    width: "40vw",
                  }}
                />
                <TextField
                  variant="outlined"
                  label="Email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  sx={{
                    width: "40vw",
                  }}
                />
                <TextField
                  variant="outlined"
                  label="Phone Number"
                  type="text"
                  {...register("number", {
                    required: "Phone number is required",
                  })}
                  error={!!errors.number}
                  helperText={errors.number?.message}
                  sx={{
                    width: "40vw",
                  }}
                />
                <TextField
                  multiline={true}
                  rows={8}
                  variant="outlined"
                  label="Message"
                  type="text"
                  {...register("message", {
                    required: "Message is required",
                  })}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                  sx={{
                    width: "40vw",
                  }}
                />
                <Button
                  disabled={isFetching ? true : false}
                  size="large"
                  type="submit"
                  variant="contained"
                  sx={{
                    width: "100%",
                    borderRadius: 4,
                    position: "relative",
                  }}
                >
                  Send
                  {isFormSent && (
                    <Box sx={{ position: "absolute", bottom: -40 }}>
                      <FormSent buttonSize="small" />
                    </Box>
                  )}
                </Button>
              </Stack>
            </form>
            {!isTablet && (
              <img
                src="/images/kid-snake.webp"
                alt="kid-holding-snake"
                style={{
                  maxWidth: 380,
                  borderRadius: 16,
                }}
              />
            )}
          </Stack>
        </>
      )}

      {isMobile && (
        <Stack
          ref={ref}
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: "primary.light",
            pt: 2,
            pb: 6,
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: 40 } }}>
            Get in Touch
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={2} alignItems="center" width="90vw">
              <TextField
                variant="outlined"
                label="Name"
                type="text"
                {...register("name", { required: "Name is required" })}
                error={!!errors.name}
                helperText={errors.name?.message}
                sx={{
                  width: "100%",
                }}
              />
              <TextField
                variant="outlined"
                label="Email"
                type="email"
                {...register("email", { required: "Email is required" })}
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{
                  width: "100%",
                }}
              />
              <TextField
                variant="outlined"
                label="Phone Number"
                type="text"
                {...register("number", {
                  required: "Phone number is required",
                })}
                error={!!errors.number}
                helperText={errors.number?.message}
                sx={{
                  width: "100%",
                }}
              />
              <TextField
                multiline={true}
                rows={8}
                variant="outlined"
                label="Message"
                type="text"
                {...register("message", { required: "Message is required" })}
                error={!!errors.message}
                helperText={errors.message?.message}
                sx={{
                  width: "100%",
                }}
              />
              <Button
                disabled={isFetching ? true : false}
                size="large"
                type="submit"
                variant="contained"
                sx={{
                  width: "100%",
                  borderRadius: 4,
                }}
              >
                Send
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
