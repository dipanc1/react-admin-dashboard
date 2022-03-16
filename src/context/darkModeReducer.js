const DarkModeReducer = (state, action) => {
    switch (action.type) {
        case "LIGHT": {
            return {
                darkMode: false,
                greenMode: false,
            };
        }
        case "DARK": {
            return {
                darkMode: true,
                greenMode: false,
            };
        }
        case "GREEN": {
            return {
                darkMode: false,
                greenMode: true,
            };
        }
        case "TOGGLE": {
            return {
                darkMode: !state.darkMode,
                greenMode: false,
            };
        }
        default:
            return state;
    }
};

export default DarkModeReducer;