const joi = require('joi');

const logInSchema = joi.object({
    name: joi.string().min(4).required(),
    secretPassword: joi.string().required(),
})

const firstPageInput = joi.object({
    input1: joi.string().required(),
    input2: joi.string().required(),
    input3: joi.string().required(),
    input4: joi.string().required(),
    input5: joi.string().required(),
    input6: joi.string().required(),
    input7: joi.string().required(),
    input8: joi.string().required(),
    input9: joi.string().required(),
    input10: joi.string().required(),
})

module.exports = {
    logInSchema,
    firstPageInput
    // secondPageInput,
    // thirdPageInput,
    // fourthPageInput,
    // fifthPageInput
}