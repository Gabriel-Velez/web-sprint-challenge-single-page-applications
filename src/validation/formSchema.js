import * as yup from "yup";
substitute: yup.object();

const formSchema = yup.object().shape({
  name: yup.string().required("Please enter a name").min(2, "name must be at least 2 characters"),
  size: yup.string(),
  sauce: yup.string().required("Please select a sauce"),
  toppings: yup.number().max(10, "Please select only 10 toppings"),
  substitute: yup.boolean(),
  specialInstructions: yup.string(),
});

export default formSchema;
