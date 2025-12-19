// src/validations/user.validation.js
import Joi from "joi";

export const registerUserSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    "string.base": "Name should be a type of text",
    "string.empty": "Name cannot be empty",
    "string.min": "Name should have at least {#limit} characters",
    "string.max": "Name should have at most {#limit} characters",
    "any.required": "Name is required",
  }),

  email: Joi.string().email().required().messages({
    "string.base": "Email should be a type of text",
    "string.empty": "Email cannot be empty",
    "string.email": "Email must be a valid email",
    "any.required": "Email is required",
  }),

  password: Joi.string().min(6).max(30).required().messages({
    "string.base": "Password should be a type of text",
    "string.empty": "Password cannot be empty",
    "string.min": "Password should have at least {#limit} characters",
    "string.max": "Password should have at most {#limit} characters",
    "any.required": "Password is required",
  }),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.base": "Email should be a type of text",
    "string.empty": "Email cannot be empty",
    "string.email": "Email must be a valid email",
    "any.required": "Email is required",
  }),

  password: Joi.string().required().messages({
    "string.base": "Password should be a type of text",
    "string.empty": "Password cannot be empty",
    "any.required": "Password is required",
  }),
});
