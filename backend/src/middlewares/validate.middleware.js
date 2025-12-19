import CustomError from "../utils/CustomError.util.js";

export const validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      next(
        new CustomError(error.details.map((ele) => ele.message).join(","), 400)
      );
    } else {
      req.body = value;
      next();
    }
  };
};
