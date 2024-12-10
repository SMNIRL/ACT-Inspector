import { parseLogLine, logTypeIds } from "@smnirl/act-logparser";

function parse() {
    const logLine = document.getElementById("logline").value;
    let logData = parseLogLine(logLine)

    if(logData.error) {
        raiseError(logData.error)
        raiseError('Did you copy the log correctly?')
        return {};
    }

    logData.log.type = logTypeIds[logData.log.type];

    return logData.log;
}

document.getElementById("parse").addEventListener("click", (e) => {
    clearErrors();

    let data = parse();
    if(!data) {
        raiseError('No valid log data was found.');
        return;
    }
    let parentEl = document.getElementById("output");
    parentEl.innerHTML = null;

    for (const [key, value] of Object.entries(data)) {
        let dt = document.createElement("dt");
        dt.innerText = key;
        let dd = document.createElement('dd');
        let span = document.createElement('span')
        span.innerText = value;
        dd.appendChild(span);

        parentEl.appendChild(dt);
        parentEl.appendChild(dd);
    }
});

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
