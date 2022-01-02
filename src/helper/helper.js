
exports.validateEmailInfo = async (formInfo) => {
    const responseObject = { error: '', message: '' }
    const { name, email, message } = formInfo
    if(!name || !email || !message) {
        responseObject.error = true;
        responseObject.message = 'Please enter in all required fields'
    } else {
        responseObject.error = false;
        responseObject.message = 'Thank you for reaching out! I will get back to you shortly'
    }
    return responseObject
}