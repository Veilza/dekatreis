export const simpleTimekeepingData = {
    "weatherLabel": "None",
    "weatherColor": "#CCCCCC",
    "dayColor": "#e2c018",
    "daysDisplay": "sinceEpoch",
    "showFullDate": true,
    "wideLetterSpacing": false,
    "useMonospace": true,
    "noPills": false,
    "hideInCombat": false,
    "use24HourClock": true,
    "useCustomMoons": true,
    "useFullWidth": false,
    "latitude": 7,
    "genWeather": "tempC",
    "hueIntensity": 0.3,
    "dawn": 0.23,
    "dusk": 0.77,
    "secondsPerRealSecond": 10,
    "secondsPerRound": 6,
    "clockSeconds": 60,
    "hideExpired": true,
    "journalEntryEvents": "SimpleTimekeeping",
    "darknessSync": "sync",

    // Custom calendar data
    "calendar": "custom",
    "customCalendar": "{\n  \"name\": \"Dekatreis\",\n  \"description\": \"A custom fantasy calendar with 13 months of 30 days each, a 10-day week, and three distinct moons.\",\n  \"years\": {\n    \"yearZero\": 2700,\n    \"firstWeekday\": 5,\n    \"leapYear\": {\n      \"leapStart\": 4,\n      \"leapInterval\": 4\n    }\n  },\n  \"months\": {\n    \"values\": [\n      {\n        \"name\": \"Month of Order\",\n        \"abbreviation\": \"Order\",\n        \"ordinal\": 1,\n        \"days\": 30,\n        \"dawn\": 0,\n        \"dusk\": 0.5\n      },\n      {\n        \"name\": \"Month of Aura\",\n        \"abbreviation\": \"Aura\",\n        \"ordinal\": 2,\n        \"days\": 30,\n        \"dawn\": 0,\n        \"dusk\": 0.5\n      },\n      {\n        \"name\": \"Month of Rebirth\",\n        \"abbreviation\": \"Rebirth\",\n        \"ordinal\": 3,\n        \"days\": 30,\n        \"dawn\": 0,\n        \"dusk\": 0.5\n      },\n      {\n        \"name\": \"Month of Progress\",\n        \"abbreviation\": \"Progress\",\n        \"ordinal\": 4,\n        \"days\": 30,\n        \"dawn\": 0,\n        \"dusk\": 0.5\n      },\n      {\n        \"name\": \"Month of Spite\",\n        \"abbreviation\": \"Spite\",\n        \"ordinal\": 5,\n        \"days\": 30,\n        \"dawn\": 0,\n        \"dusk\": 0.5\n      },\n      {\n        \"name\": \"Month of Creation\",\n        \"abbreviation\": \"Creation\",\n        \"ordinal\": 6,\n        \"days\": 30,\n        \"dawn\": 0,\n        \"dusk\": 0.5\n      },\n      {\n        \"name\": \"Month of Protection\",\n        \"abbreviation\": \"Protection\",\n        \"ordinal\": 7,\n        \"days\": 30,\n        \"dawn\": 0,\n        \"dusk\": 0.5\n      },\n      {\n        \"name\": \"Month of Plotting\",\n        \"abbreviation\": \"Plotting\",\n        \"ordinal\": 8,\n        \"days\": 30,\n        \"dawn\": 0,\n        \"dusk\": 0.5\n      },\n      {\n        \"name\": \"Month of Inspiration\",\n        \"abbreviation\": \"Inspiration\",\n        \"ordinal\": 9,\n        \"days\": 30,\n        \"dawn\": 0,\n        \"dusk\": 0.5\n      },\n      {\n        \"name\": \"Month of Storms\",\n        \"abbreviation\": \"Storms\",\n        \"ordinal\": 10,\n        \"days\": 30,\n        \"dawn\": 0,\n        \"dusk\": 0.5\n      },\n      {\n        \"name\": \"Month of Betrayal\",\n        \"abbreviation\": \"Betrayal\",\n        \"ordinal\": 11,\n        \"days\": 30,\n        \"dawn\": 0,\n        \"dusk\": 0.5\n      },\n      {\n        \"name\": \"Month of Shadows\",\n        \"abbreviation\": \"Shadows\",\n        \"ordinal\": 12,\n        \"days\": 30,\n        \"dawn\": 0,\n        \"dusk\": 0.5\n      },\n      {\n        \"name\": \"Month of Fear\",\n        \"abbreviation\": \"Fear\",\n        \"ordinal\": 13,\n        \"days\": 30,\n        \"dawn\": 0,\n        \"dusk\": 0.5\n      }\n    ]\n  },\n  \"days\": {\n    \"values\": [\n      {\n        \"name\": \"Mia\",\n        \"abbreviation\": \"Mi\",\n        \"ordinal\": 1\n      },\n      {\n        \"name\": \"Dyo\",\n        \"abbreviation\": \"Dy\",\n        \"ordinal\": 2\n      },\n      {\n        \"name\": \"Tria\",\n        \"abbreviation\": \"Tr\",\n        \"ordinal\": 3\n      },\n      {\n        \"name\": \"Tessera\",\n        \"abbreviation\": \"Te\",\n        \"ordinal\": 4\n      },\n      {\n        \"name\": \"Pente\",\n        \"abbreviation\": \"Pe\",\n        \"ordinal\": 5\n      },\n      {\n        \"name\": \"Exia\",\n        \"abbreviation\": \"Ex\",\n        \"ordinal\": 6\n      },\n      {\n        \"name\": \"Epta\",\n        \"abbreviation\": \"Ep\",\n        \"ordinal\": 7\n      },\n      {\n        \"name\": \"Okto\",\n        \"abbreviation\": \"Ok\",\n        \"ordinal\": 8\n      },\n      {\n        \"name\": \"Ennea\",\n        \"abbreviation\": \"En\",\n        \"ordinal\": 9\n      },\n      {\n        \"name\": \"Deca\",\n        \"abbreviation\": \"De\",\n        \"ordinal\": 10\n      }\n    ],\n    \"daysPerYear\": 390,\n    \"hoursPerDay\": 24,\n    \"minutesPerHour\": 60,\n    \"secondsPerMinute\": 60\n  },\n  \"seasons\": {\n    \"values\": [\n      {\n        \"name\": \"Calm Winds\",\n        \"monthStart\": 1,\n        \"monthEnd\": 2,\n        \"dayStart\": 1,\n        \"dayEnd\": 30\n      },\n      {\n        \"name\": \"Nurturing Rains\",\n        \"monthStart\": 3,\n        \"monthEnd\": 4,\n        \"dayStart\": 1,\n        \"dayEnd\": 30\n      },\n      {\n        \"name\": \"Bitter Storms\",\n        \"monthStart\": 5,\n        \"monthEnd\": 7,\n        \"dayStart\": 1,\n        \"dayEnd\": 30\n      },\n      {\n        \"name\": \"Dangerous Waves\",\n        \"monthStart\": 8,\n        \"monthEnd\": 9,\n        \"dayStart\": 1,\n        \"dayEnd\": 30\n      },\n      {\n        \"name\": \"Shattering Storms\",\n        \"monthStart\": 10,\n        \"monthEnd\": 10,\n        \"dayStart\": 1,\n        \"dayEnd\": 30\n      },\n      {\n        \"name\": \"Intense Chills\",\n        \"monthStart\": 11,\n        \"monthEnd\": 13,\n        \"dayStart\": 1,\n        \"dayEnd\": 30\n      }\n    ]\n  }\n}",
    "climateData": "[\n  {\n    \"name\": \"Calm Winds\",\n    \"monthStart\": 1,\n    \"monthEnd\": 2,\n    \"dayStart\": 1,\n    \"dayEnd\": 30\n  },\n  {\n    \"name\": \"Nurturing Rains\",\n    \"monthStart\": 3,\n    \"monthEnd\": 4,\n    \"dayStart\": 1,\n    \"dayEnd\": 30\n  },\n  {\n    \"name\": \"Bitter Storms\",\n    \"monthStart\": 5,\n    \"monthEnd\": 7,\n    \"dayStart\": 1,\n    \"dayEnd\": 30\n  },\n  {\n    \"name\": \"Dangerous Waves\",\n    \"monthStart\": 8,\n    \"monthEnd\": 9,\n    \"dayStart\": 1,\n    \"dayEnd\": 30\n  },\n  {\n    \"name\": \"Shattering Storms\",\n    \"monthStart\": 10,\n    \"monthEnd\": 10,\n    \"dayStart\": 1,\n    \"dayEnd\": 30\n  },\n  {\n    \"name\": \"Intense Chills\",\n    \"monthStart\": 11,\n    \"monthEnd\": 13,\n    \"dayStart\": 1,\n    \"dayEnd\": 30\n  }\n]",
    "customMoons": "[\n  {\n    \"name\": \"Red Moon\",\n    \"cycleLength\": 30,\n    \"phaseNames\": [\n      \"New Moon\",\n      \"Waxing Crescent\",\n      \"First Quarter\",\n      \"Waxing Gibbous\",\n      \"Full Moon\",\n      \"Waning Gibbous\",\n      \"Last Quarter\",\n      \"Waning Crescent\"\n    ],\n    \"offset\": 18\n  },\n  {\n    \"name\": \"Blue Moon\",\n    \"cycleLength\": 30,\n    \"phaseNames\": [\n      \"New Moon\",\n      \"Waxing Crescent\",\n      \"First Quarter\",\n      \"Waxing Gibbous\",\n      \"Full Moon\",\n      \"Waning Gibbous\",\n      \"Last Quarter\",\n      \"Waning Crescent\"\n    ],\n    \"offset\": 20\n  },\n  {\n    \"name\": \"Silver Moon\",\n    \"cycleLength\": 30,\n    \"phaseNames\": [\n      \"New Moon\",\n      \"Waxing Crescent\",\n      \"First Quarter\",\n      \"Waxing Gibbous\",\n      \"Full Moon\",\n      \"Waning Gibbous\",\n      \"Last Quarter\",\n      \"Waning Crescent\"\n    ],\n    \"offset\": 0\n  }\n]",

    // Custom badges
    "badge0": {
        "label": "",
        "color": ""
    },
    "badge1": {
        "label": "",
        "color": ""
    },
    "badge2": {
        "label": "",
        "color": ""
    },

    // Season badge colors
    "season0": "#00ff04",
    "season1": "#e6c700",
    "season2": "#753900",
    "season3": "#009dff",
    "season4": "#af9b18",
    "season5": "#209b9d",

    // Things to be modified on each update of the time
    //"moonTooltip": "",
    //"nightColor": "#3a4883",
    //"moonColor": "#CCCCCC",
    //"moonLabel": "",

    // This changes per-campaign, and doesn't need to be changed every update
    // Below number is for the year 990 QY (390 * 30 * 989)
    //"dayOffset": -385710
}
