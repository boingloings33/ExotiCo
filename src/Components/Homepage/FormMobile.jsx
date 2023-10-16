import { Typography, Stack, Box, TextField, Button } from "@mui/material";
import { Controller } from "react-hook-form";
import FormSent from "./FormSent";
import EastIcon from "@mui/icons-material/East";

function FormMobile({
  handleSubmit,
  control,
  errors,
  register,
  onSubmit,
  isFetching,
  isFormSent,
}) {
  return (
    <Stack
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
            render={({ field: { ...field } }) => (
              <TextField
                {...field}
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
            render={({ field: { ...field } }) => (
              <TextField
                {...field}
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
            render={({ field: { ...field } }) => (
              <TextField
                {...field}
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
            render={({ field: { ...field } }) => (
              <TextField
                {...field}
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
            render={({ field: { ...field } }) => (
              <TextField
                {...field}
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
  );
}

export default FormMobile;
