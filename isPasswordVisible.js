function useState(initialValue){
    let value = initialValue;

    const getState = () => value;

    const setState = (newValue) => {
        value = newValue;
    };

    return [getState, setState]
}

function updatePasswordVisibility(isVisible, inputElement, buttonElement) {
    if (isVisible) {
        inputElement.setAttribute("type", "text");
        buttonElement.querySelector("img").src = "./eye.png";
    } else {
        inputElement.setAttribute("type", "password");
        buttonElement.querySelector("img").src = "./hide.png";
    }
}

const passwordInput = document.getElementById("passwordInput");
const repeatPasswordInput = document.getElementById("repeatPasswordInput");

const isPasswordVisibleButton = document.getElementById("isPasswordVisible");
const isRepeatPasswordVisibleButton = document.getElementById("isRepeatPasswordVisible");

const [isPasswordVisible, setIsPasswordVisible] = useState(false);
const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false);

updatePasswordVisibility(isPasswordVisible(), passwordInput, isPasswordVisibleButton);
updatePasswordVisibility(isRepeatPasswordVisible(), repeatPasswordInput, isRepeatPasswordVisibleButton);

isPasswordVisibleButton.addEventListener("click", () => {
    setIsPasswordVisible(!isPasswordVisible());
    updatePasswordVisibility(isPasswordVisible(), passwordInput, isPasswordVisibleButton);
})

isRepeatPasswordVisibleButton.addEventListener("click", () => {
    setIsRepeatPasswordVisible(!isRepeatPasswordVisible());
    updatePasswordVisibility(isRepeatPasswordVisible(), repeatPasswordInput, isRepeatPasswordVisibleButton);
})