const canProxy = ("Proxy" in window);
let errors = [];


const errorContainer = document.getElementById("error");

function addErrorElement(errorMessage) {
    let newErrorElement = document.createElement('div');
    newErrorElement.classList.add('error');
    newErrorElement.innerText = errorMessage;
    errorContainer.style.display = 'block';
    errorContainer.appendChild(newErrorElement)
}

function clearErrorElements() {
    errorContainer.innerHtml = null;
    errorContainer.style.display = 'none';
}

function clearErrors() {
    errorProxy.length = 0;
    clearErrorElements();
}

/**
 * Proxy the array type for errors for easy DOM manipulation
 */
let errorProxy = new Proxy(errors, {
    get(target, prop) {
        if (prop === 'push' || prop === 'unshift') {
            return (...args) => {
                args.forEach((item) => {
                    addErrorElement(item);
                })
                return target[prop](...args);
            };
        }
        return target[prop];
    }
});

/**
 * Raise a generic error for the user.
 * @param message
 */
function raiseError(message) {
    if(!canProxy) {
        alert("Error: " + message);
    }

    errorProxy.unshift(message);
}
