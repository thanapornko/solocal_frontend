import Joi from "joi";

const registerSchema = Joi.object({
  name: Joi.string()
    .trim()
    .required()
    .messages({ "string.empty": "name is required" }),
  email: Joi.string()
    .email({ tlds: false })
    .required()
    .messages({ "string.empty": "email is required" }),
  password: Joi.string()
    .alphanum()
    .trim()
    .min(6)
    .required()
    .messages({
      "string.empty": "password is required",
      "string.alphanum":
        "password must contain number or alphabet",
      "string.min":
        "password must have at least 6 characters"
    }),
  confirmPassword: Joi.string()
    .trim()
    .valid(Joi.ref("password"))
    .required()
    .messages({
      "string.empty": "confirm password is required",
      "any.only":
        "password and confirm password did not match"
    })
});

export default function validateRegister(input) {
  const { error } = registerSchema.validate(input, {
    abortEarly: false
  });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
}

// const validateRegister = input => {
//   return registerSchema.validate(input, {
//     abortEarly: false
//   });
// };
