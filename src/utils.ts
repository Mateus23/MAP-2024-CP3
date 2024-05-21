export const validateNumber = (value: any) => {
    return value && typeof value === 'number'
}

export const validateString = (value: any) => {
    return value && typeof value === 'string'
}

export const validatePhoneNumber = (value: any) => {
    if (!validateString(value)){
        return false;
    }
    if (Number.isNaN(value)) {
        return false;
    }
    return value.length > 7 && value.length < 10;
}

export const validateAge = (value: any) => {
    return validateNumber(value) && value < 100 && value >= 0;
}