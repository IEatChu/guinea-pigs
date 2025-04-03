import * as Yup from 'yup';

export const AddStuffSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  age: Yup.number().positive('Age must be a positive number').required('Age is required'),
  breed: Yup.string().required('Breed is required'),
  story: Yup.string().required('Story is required'),
  photo: Yup.mixed().required('Photo is required'),
  owner: Yup.string().required(),
});
export const EditStuffSchema = Yup.object({
  id: Yup.number().required(),
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});
