
const IsButtonDisable = (user) => {
    return !!Object.values(user).filter((item) => item.length < 2).length;
}

export default IsButtonDisable