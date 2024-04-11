// https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#overlayplugin-log-lines
const logTable = {
    ffxiv: {
        game: "00",
        changeZone: "01",
        changePrimaryPlayer: "02",
        addCombatant: "03",
        removeCombatant: "04",
        partyList: "11",
        playerStats: "12",
        networkStartsCasting: "20",
        networkAbility: "21",
        networkAOEAbility: "22",
        networkCancelAbility: "23",
        networkDoT: "24",
        networkDeath: "25",
        networkBuff: "26",
        networkTargetIcon: "27",
        networkRaidMarker: "28",
        networkTargetMarket: "29",
        networkBuffRemove: "30",
        networkGauge: "31",
        networkWorld: "32",
        networkActorControl: "33",
        networkNameToggle: "34",
        networkTether: "35",
        limitBreak: "36",
        networkActionSync: "37",
        networkStatusEffects: "38",
        networkUpdateHP: "39",
        map: "40",
        systemLogMessage: "41",
        statusList3: "42",
        debug: "251",
        packetDump: "252",
        version: "253",
        error: "254"
    },
    overlayPlugin: {
        lineRegistration: "256",
        mapEffect: "257",
        fateDirector: "258",
        CEDirector: "259",
        inCombat: "260",
        combatantMemory: "261",
        RSVData: "262",
        startsUsingExtra: "263",
        abilityExtra: "264",
        contentFinderSettings: "265",
        npcYell: "266",
        battleTalk2: "267",
        countdown: "268",
        countdownCancel: "269",
        actorMove: "270",
        actorSetPos: "271",
        spawnNpcExtra: "272",
        actorControlExtra: "273",
    }
}

const typeRegex = /^(\d+)|/;

const logRegexTable = {
    ffxiv: {
        game: /^(?<type>00)\|(?<timestamp>[^|]*)\|(?<code>[^|]*)\|(?<name>[^|]*)\|(?<line>[^|]*)\|/,
        networkAbility: /^(?<type>2[12])\|(?<timestamp>[^|]*)\|(?<sourceId>[^|]*)\|(?<source>[^|]*)\|(?<id>[^|]*)\|(?<ability>[^|]*)\|(?<targetId>[^|]*)\|(?<target>[^|]*)\|(?<flags>[^|]*)\|(?<damage>[^|]*)\|(?:[^|]*\|){14}(?<targetCurrentHp>[^|]*)\|(?<targetMaxHp>[^|]*)\|(?<targetCurrentMp>[^|]*)\|(?<targetMaxMp>[^|]*)\|(?:[^|]*\|){2}(?<targetX>[^|]*)\|(?<targetY>[^|]*)\|(?<targetZ>[^|]*)\|(?<targetHeading>[^|]*)\|(?<currentHp>[^|]*)\|(?<maxHp>[^|]*)\|(?<currentMp>[^|]*)\|(?<maxMp>[^|]*)\|(?:[^|]*\|){2}(?<x>[^|]*)\|(?<y>[^|]*)\|(?<z>[^|]*)\|(?<heading>[^|]*)\|(?<sequence>[^|]*)\|(?<targetIndex>[^|]*)\|(?<targetCount>[^|]*)\|/
    },
    overlayPlugin: {

    }
}

function parseLogLine() {
    const logLine = document.getElementById("logline").value;
    console.log(logLine);
    const typeMatch = logLine.match(typeRegex);
    const logType = typeMatch[0];
    let type;
    let parseRegex;

    // Search for type
    if(parseInt(logType) > 255) {
        type = Object.keys(logTable.overlayPlugin)[Object.values(logTable.overlayPlugin).indexOf(logType)];
        if(!logRegexTable.overlayPlugin.hasOwnProperty(type)) {
            alert('Error: Could not determine log type. Did you copy the line correctly?')
            return;
        }
        parseRegex = logRegexTable.overlayPlugin[type];
    } else {
        type = Object.keys(logTable.ffxiv)[Object.values(logTable.ffxiv).indexOf(logType)];
        if(!logRegexTable.ffxiv.hasOwnProperty(type)) {
            alert('Error: Could not determine log type. Did you copy the line correctly?')
            return;
        }
        parseRegex = logRegexTable.ffxiv[type];
    }

    const logMatch = logLine.match(parseRegex);

    if(!logMatch.hasOwnProperty('groups')) {
        alert('Error: Failed to parse log line.')
    }

    let logData = logMatch.groups;

    logData.type = type;

    return logData;
}
