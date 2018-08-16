exports.SessionHeartbeat = function SessionHeartbeat () {
    /**
     * Generate a popup window
     * @param title {String} - The popup tile
     * @param message {String} - Description text
     * @param [cb] {Function} - Callback on button press
     * @private
     */
    function _popup (title, message, cb, buttonText) {
        var fragment = document.createDocumentFragment(),
            _container = document.createElement('div'),
            _wrapper = document.createElement('div'),
            _content = document.createElement('div'),
            _title = document.createElement('h6'),
            _message = document.createElement('p'),
            _action = document.createElement('button');

        _container.setAttribute('id', 'heartbeat-popup');
        _wrapper.setAttribute('class', 'heartbeat-wrapper');
        _content.setAttribute('class', 'heartbeat-content');

        _action.setAttribute('type', 'button');
        _action.innerText = buttonText || 'OK';
        _action.addEventListener('click', function () {
            if (cb && Object.prototype.toString.call(cb) === '[object Function]') {
                cb();
            };

            document.getElementById('heartbeat-popup').parentElement.removeChild(document.getElementById('heartbeat-popup'));
            document.body.style.overflow = 'auto';
        });

        _title.innerHTML = title;
        _message.innerHTML = message;

        _content.appendChild(_title);
        _content.appendChild(_message);
        _content.appendChild(_action);
        _wrapper.appendChild(_content);
        _container.appendChild(_wrapper);
        fragment.appendChild(_container);
        document.body.appendChild(fragment);

        document.body.style.overflow = 'hidden';
    }

    return {
        /**
         * Start counting the seconds user is AFK. Reset counter on keypress or mousemove
         * @param frequency {number} - Interval frequency (in seconds)
         * @param idle {number} - Counter for time afk (in seconds)
         * @param popup {object} - The popup details: title, description and optional callback function
         */
        'init': function (frequency, idle, popup) {
            if (Object.prototype.toString.call(frequency) !== '[object Number]') {
                console.warn("Heartbeat: First parameter should be a number!");
                return;
            }

            if (Object.prototype.toString.call(idle) !== '[object Number]') {
                console.warn("Heartbeat: Second parameter should be a number!");
                return;
            }

            if (Object.prototype.toString.call(popup) !== '[object Object]') {
                console.warn("Heartbeat: Third parameter should be an object!");
                return;
            }

            if (!popup.message || !popup.title) {
                console.warn("Heartbeat: Third parameter should have title and message fields!");
                return;
            }

// time accumulator in seconds
            var timer = 0;

// reset timer on mouse move
            document.addEventListener('mousemove', function () {
                timer = 0;
            });

// reset timer on keypress
            document.addEventListener('keypress', function () {
                timer = 0;
            });

            var interval = setInterval(function () {
                if (timer >= idle) {
                    _popup(popup.title, popup.message, popup.callback || '', popup.button);
                    clearInterval(interval);
                } else {
                    timer += frequency;
                }
            }, frequency * 1000);
        }
    }
}