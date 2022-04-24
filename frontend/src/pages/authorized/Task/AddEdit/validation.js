import * as Yup from 'yup';

const required = 'This field is required';

export default Yup.object({
  name: Yup.string().required(required),
  description: Yup.string().required(required),
  date: Yup.string().required(required),
});
