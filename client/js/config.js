// client/js/config.js
// Static constants and client-side settings.
// Imported by state.js and most other modules.

export const SINNER_ORDER = [
    "Yi Sang", "Faust", "Don Quixote", "Ryōshū", "Meursault",
    "Hong Lu", "Heathcliff", "Ishmael", "Rodion", "Sinclair", "Outis", "Gregor"
];

// EGOs hidden from the EGO ban phase (all other EGOs, including ZAYIN, are bannable).
// Format must match parseEGOData's display name: "EGO Name (Sinner)".
export const egoBanHidden = [
    "Crow's Eye View (Yi Sang)",
    "Representation Emitter (Faust)",
    "La Sangre de Sancho (Don Quixote)",
    "Forest for the Flames (Ryōshū)",
    "Chains of Others (Meursault)",
    "Land of Illusion (Hong Lu)",
    "Bodysack (Heathcliff)",
    "Snagharpoon (Ishmael)",
    "What is Cast (Rodion)",
    "Branch of Knowledge (Sinclair)",
    "To Páthos Máthos (Outis)",
    "Suddenly, One Day (Gregor)"
];

// Timing constants (in milliseconds)
export const TIMING = {
    NOTIFICATION_HIDE_DELAY: 3000,
    CONNECTION_ERROR_DELAY: 5000,
    RECONNECT_ATTEMPT_DELAY: 10000,
    WEBSOCKET_RETRY_DELAY: 100,
    TOOLTIP_SHOW_DELAY: 500,
    TIMER_UPDATE_INTERVAL: 1000,
    KEEP_ALIVE_INTERVAL: 4 * 60 * 1000  // 4 minutes
};

// Game configuration constants
export const GAME_CONFIG = {
    DEFAULT_RESERVE_TIME: 120,  // seconds
    SECTION1_ROSTER_SIZE: 42,
    ALL_SECTIONS_ROSTER_SIZE: 72,
    USER_ID_LENGTH: 9,
    USER_ID_START_POS: 2,
    MAX_GENERATION_ATTEMPTS: 1000
};

export function loadKoreanModeFromStorage() {
    try {
        const saved = localStorage.getItem('limbusKoreanMode');
        return saved === 'true';
    } catch (e) {
        return false;
    }
}

export function saveKoreanModeToStorage(enabled) {
    try {
        localStorage.setItem('limbusKoreanMode', enabled.toString());
    } catch (e) {
        console.warn('Could not save Korean mode preference:', e);
    }
}
