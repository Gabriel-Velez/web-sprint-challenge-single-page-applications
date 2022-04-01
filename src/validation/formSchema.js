import * as yup from "yup";
substitute: yup.object();

const formSchema = yup.object().shape({
  name: yup.string().required("Please enter a name").min(2, "Name must be more than 2 charachters"),
  size: yup.string().required("Please pick a size"),
  sauce: yup.string().required("Please select a sauce"),
  toppings: yup.number().max(10, "Please select only 10 toppings"),
});

export default formSchema;
