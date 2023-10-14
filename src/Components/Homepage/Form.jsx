import { useForm } from "react-hook-form";
import { forwardRef, useEffect, useState } from "react";
import FormWeb from "./FormWeb";
import FormMobile from "./FormMobile";
import useIsMobile from "../../hooks/useIsMobile";

const Form = forwardRef(function Form(props, ref) {
  const isMobile = useIsMobile();

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
        <FormWeb
          ref={ref}
          handleSubmit={handleSubmit}
          control={control}
          errors={errors}
          register={register}
          onSubmit={onSubmit}
          isFetching={isFetching}
          isFormSent={isFormSent}
        />
      )}

      {isMobile && (
        <FormMobile
          ref={ref}
          handleSubmit={handleSubmit}
          control={control}
          errors={errors}
          register={register}
          onSubmit={onSubmit}
          isFetching={isFetching}
          isFormSent={isFormSent}
        />
      )}
    </>
  );
});

export default Form;
