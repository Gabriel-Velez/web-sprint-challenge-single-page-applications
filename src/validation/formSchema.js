import * as yup from "yup";

const formSchema = yup.object().shape({
  size: yup.string().required("Please pick a size"),
  sauce: yup.string().required("Please select a sauce"),
  toppings: yup.number().max(10, "Please select only 10 toppings"),
});

export default formSchema;
