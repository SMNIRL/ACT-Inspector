(function () {
    'use strict';

    const logTypes = {
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
            networkTargetMarker: "29",
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
            actorControlSelfExtra: "274",
        }
    };

    const logTypeStructs = {
        "00": {
            code: "2",
            line: "4",
            name: "3",
            timestamp: "1",
            type: "0"
        },
        "01": {
            id: "2",
            name: "3",
            timestamp: "1",
            type: "0"
        },
        "02": {
            id: "2",
            name: "3",
            timestamp: "1",
            type: "0"
        },
        "03": {
            currentHp: "11",
            currentMp: "13",
            heading: "18",
            hp: "12",
            id: "2",
            job: "4",
            level: "5",
            mp: "14",
            name: "3",
            npcBaseId: "10",
            npcNameId: "9",
            ownerId: "6",
            timestamp: "1",
            type: "0",
            world: "8",
            worldId: "7",
            x: "15",
            y: "16",
            z: "17"
        },
        "04": {
            currentHp: "11",
            heading: "20",
            hp: "12",
            id: "2",
            job: "4",
            level: "5",
            currentMp: "13",
            mp: "14",
            name: "3",
            npcBaseId: "10",
            npcNameId: "9",
            owner: "6",
            timestamp: "1",
            type: "0",
            world: "8",
            x: "17",
            y: "18",
            z: "19"
        },
        "11": {
            partyCount: "2",
            timestamp: "1",
            type: "0"
        },
        "12": {
            attackMagicPotency: "12",
            attackPower: "9",
            criticalHit: "11",
            determination: "14",
            dexterity: "4",
            directHit: "10",
            healMagicPotency: "13",
            intelligence: "6",
            job: "2",
            mind: "7",
            piety: "8",
            skillSpeed: "15",
            spellSpeed: "16",
            strength: "3",
            tenacity: "18",
            timestamp: "1",
            type: "0",
            vitality: "5"
        },
        "20": {
            ability: "5",
            castTime: "8",
            heading: "12",
            id: "4",
            source: "3",
            sourceId: "2",
            target: "7",
            targetId: "6",
            timestamp: "1",
            type: "0",
            x: "9",
            y: "10",
            z: "11"
        },
        "21": {
            ability: "5",
            actionAnimationId: "51",
            actionId: "50",
            animationLockTime: "52",
            currentHp: "34",
            currentMp: "36",
            damage: "9",
            effectDisplayType: "49",
            flags: "8",
            heading: "43",
            id: "4",
            maxHp: "35",
            maxMp: "37",
            ownerId: "47",
            ownerName: "48",
            rotationHex: "53",
            sequence: "44",
            source: "3",
            sourceId: "2",
            target: "7",
            targetCount: "46",
            targetCurrentHp: "24",
            targetCurrentMp: "26",
            targetHeading: "33",
            targetId: "6",
            targetIndex: "45",
            targetMaxHp: "25",
            targetMaxMp: "27",
            targetX: "30",
            targetY: "31",
            targetZ: "32",
            timestamp: "1",
            type: "0",
            x: "40",
            y: "41",
            z: "42"
        },
        "22": {
            ability: "5",
            actionAnimationId: "51",
            actionId: "50",
            animationLockTime: "52",
            currentHp: "34",
            currentMp: "36",
            damage: "9",
            effectDisplayType: "49",
            flags: "8",
            heading: "43",
            id: "4",
            maxHp: "35",
            maxMp: "37",
            ownerId: "47",
            ownerName: "48",
            rotationHex: "53",
            sequence: "44",
            source: "3",
            sourceId: "2",
            target: "7",
            targetCount: "46",
            targetCurrentHp: "24",
            targetCurrentMp: "26",
            targetHeading: "33",
            targetId: "6",
            targetIndex: "45",
            targetMaxHp: "25",
            targetMaxMp: "27",
            targetX: "30",
            targetY: "31",
            targetZ: "32",
            timestamp: "1",
            type: "0",
            x: "40",
            y: "41",
            z: "42"
        },
        "23": {
            id: "4",
            name: "5",
            reason: "6",
            source: "3",
            sourceId: "2",
            timestamp: "1",
            type: "0"
        },
        "24": {
            currentHp: "7",
            currentMp: "9",
            damage: "6",
            damageType: "19",
            effectId: "5",
            heading: "16",
            id: "2",
            maxHp: "8",
            maxMp: "10",
            name: "3",
            source: "18",
            sourceCurrentHp: "20",
            sourceCurrentMp: "22",
            sourceHeading: "29",
            sourceId: "17",
            sourceMaxHp: "21",
            sourceMaxMp: "23",
            sourceX: "26",
            sourceY: "27",
            sourceZ: "28",
            timestamp: "1",
            type: "0",
            which: "4",
            x: "13",
            y: "14",
            z: "15"
        },
        "25": {
            source: "5",
            sourceId: "4",
            target: "3",
            targetId: "2",
            timestamp: "1",
            type: "0"
        },
        "26": {
            count: "9",
            duration: "4",
            effect: "3",
            effectId: "2",
            source: "6",
            sourceId: "5",
            sourceMaxHp: "11",
            target: "8",
            targetId: "7",
            targetMaxHp: "10",
            timestamp: "1",
            type: "0"
        },
        "27": {
            id: "6",
            target: "3",
            targetId: "2",
            timestamp: "1",
            type: "0"
        },
        "28": {
            id: "4",
            name: "5",
            operation: "2",
            timestamp: "1",
            type: "0",
            waymark: "3",
            x: "6",
            y: "7",
            z: "8"
        },
        "29": {
            id: "4",
            name: "5",
            operation: "2",
            targetId: "6",
            targetName: "7",
            timestamp: "1",
            type: "0",
            waymark: "3"
        },
        "30": {
            count: "9",
            effect: "3",
            effectId: "2",
            source: "6",
            sourceId: "5",
            target: "8",
            targetId: "7",
            timestamp: "1",
            type: "0"
        },
        "31": {
            id: "2",
            timestamp: "1",
            type: "0"
        },
        "33": {
            command: "3",
            instance: "2",
            timestamp: "1",
            type: "0"
        },
        "34": {
            id: "2",
            name: "3",
            targetId: "4",
            targetName: "5",
            timestamp: "1",
            toggle: "6",
            type: "0"
        },
        "35": {
            id: "8",
            source: "3",
            sourceId: "2",
            target: "5",
            targetId: "4",
            timestamp: "1",
            type: "0"
        },
        "36": {
            bars: "3",
            timestamp: "1",
            type: "0",
            valueHex: "2"
        },
        "37": {
            currentHp: "5",
            currentMp: "7",
            currentShield: "9",
            heading: "14",
            id: "2",
            maxHp: "6",
            maxMp: "8",
            name: "3",
            sequenceId: "4",
            timestamp: "1",
            type: "0",
            x: "11",
            y: "12",
            z: "13"
        },
        "38": {
            currentShield: "9",
            data0: "15",
            data1: "16",
            data2: "17",
            data3: "18",
            data4: "19",
            data5: "20",
            heading: "14",
            hp: "5",
            jobLevelData: "4",
            maxHp: "6",
            maxMp: "8",
            mp: "7",
            target: "3",
            targetId: "2",
            timestamp: "1",
            type: "0",
            x: "11",
            y: "12",
            z: "13"
        },
        "39": {
            currentHp: "4",
            currentMp: "6",
            heading: "13",
            id: "2",
            maxHp: "5",
            maxMp: "7",
            name: "3",
            timestamp: "1",
            type: "0",
            x: "10",
            y: "11",
            z: "12"
        },
        "40": {
            id: "2",
            placeName: "4",
            placeNameSub: "5",
            regionName: "3",
            timestamp: "1",
            type: "0"
        },
        "41": {
            id: "3",
            instance: "2",
            timestamp: "1",
            type: "0"
        },
        "42": {
            id: "2",
            name: "3",
            timestamp: "1",
            type: "0"
        },
        "256": {
            id: "2",
            source: "3",
            timestamp: "1",
            type: "0",
            version: "4"
        },
        "257": {
            flags: "3",
            instance: "2",
            location: "4",
            timestamp: "1",
            type: "0"
        },
        "258": {
            category: "2",
            fateId: "4",
            progress: "5",
            timestamp: "1",
            type: "0"
        },
        "259": {
            ceKey: "5",
            numPlayers: "6",
            popTime: "2",
            progress: "9",
            status: "7",
            timeRemaining: "3",
            timestamp: "1",
            type: "0"
        },
        "260": {
            inACTCombat: "2",
            inGameCombat: "3",
            isACTChanged: "4",
            isGameChanged: "5",
            timestamp: "1",
            type: "0"
        },
        "261": {
            change: "2",
            id: "3",
            pairAggressionStatus: "4",
            pairBNpcID: "5",
            pairBNpcNameID: "6",
            pairCastBuffID: "7",
            pairCastDurationCurrent: "8",
            pairCastDurationMax: "9",
            pairCastGroundTargetX: "10",
            pairCastGroundTargetY: "11",
            pairCastGroundTargetZ: "12",
            pairCastTargetID: "13",
            pairCurrentCP: "14",
            pairCurrentGP: "15",
            pairCurrentHP: "16",
            pairCurrentMP: "17",
            pairCurrentWorldID: "18",
            pairDistance: "19",
            pairEffectiveDistance: "20",
            pairHeading: "21",
            pairID: "22",
            pairIsTargetable: "23",
            pairJob: "24",
            pairLevel: "25",
            pairMaxCP: "26",
            pairMaxGP: "27",
            pairMaxHP: "28",
            pairMaxMP: "29",
            pairModelStatus: "30",
            pairMonsterType: "31",
            pairName: "32",
            pairNPCTargetID: "33",
            pairOwnerID: "34",
            pairPartyType: "35",
            pairPCTargetID: "36",
            pairPosX: "37",
            pairPosY: "38",
            pairPosZ: "39",
            pairRadius: "40",
            pairStatus: "41",
            pairTargetID: "42",
            pairTransformationId: "43",
            pairType: "44",
            pairWeaponId: "45",
            pairWorldID: "46",
            pairWorldName: "47",
            timestamp: "1",
            type: "0"
        },
        "262": {
            key: "4",
            locale: "2",
            timestamp: "1",
            type: "0",
            value: "5"
        },
        "263": {
            heading: "7",
            id: "3",
            sourceId: "2",
            timestamp: "1",
            type: "0",
            x: "4",
            y: "5",
            z: "6"
        },
        "264": {
            dataFlag: "5",
            globalEffectCounter: "4",
            heading: "9",
            id: "3",
            sourceId: "2",
            timestamp: "1",
            type: "0",
            x: "6",
            y: "7",
            z: "8"
        },
        "265": {
            explorerMode: "8",
            inContentFinderContent: "4",
            levelSync: "9",
            minimalItemLevel: "6",
            silenceEcho: "7",
            timestamp: "1",
            type: "0",
            unrestrictedParty: "5",
            zoneId: "2",
            zoneName: "3"
        },
        "266": {
            npcId: "2",
            npcNameId: "3",
            npcYellId: "4",
            timestamp: "1",
            type: "0"
        },
        "267": {
            displayMs: "6",
            instance: "3",
            instanceContentTextId: "5",
            npcId: "2",
            npcNameId: "4",
            timestamp: "1",
            type: "0"
        },
        "268": {
            countdownTime: "4",
            id: "2",
            name: "6",
            result: "5",
            timestamp: "1",
            type: "0",
            worldId: "3"
        },
        "269": {
            id: "2",
            name: "4",
            timestamp: "1",
            type: "0",
            worldId: "3"
        },
        "270": {
            heading: "3",
            id: "2",
            timestamp: "1",
            type: "0",
            x: "6",
            y: "7",
            z: "8"
        },
        "271": {
            heading: "3",
            id: "2",
            timestamp: "1",
            type: "0",
            x: "6",
            y: "7",
            z: "8"
        },
        "272": {
            animationState: "5",
            id: "2",
            parentId: "3",
            tetherId: "4",
            timestamp: "1",
            type: "0"
        },
        "273": {
            category: "3",
            id: "2",
            timestamp: "1",
            type: "0"
        },
        "274": {
            category: "3",
            id: "2",
            timestamp: "1",
            type: "0"
        }
    };

    //TODO: Have a build step just handle creating an artifact with this instead of running it on import
    let logTypeIdObj = {};
    Object.keys(logTypes).forEach((logSource) => {
        Object.keys(logTypes[logSource]).forEach((type) => {
            logTypeIdObj[logTypes[logSource][type]] = `${logSource}.${type}`;
        });
    });
    const logTypeIds = logTypeIdObj;

    const delimiter = '|';

    /**
     * Turns a log line into an object structured around its type
     *
     * If an error occurs, returns the error and line number, with an EMPTY log object, and continues parsing on the
     * next line.
     * @param {string} logLine
     * @param {int} [lineNumber]
     * @returns {{line: int, log: {}}|{line: int, log: {}, error: string}}
     */
    function parseLogLine(logLine, lineNumber = 0) {
        let error;
        let parsedLogLine;

        const logTypeId = getLogLineType(logLine);

        try {
            const scaffold = {};
            const struct = logTypeStructs[logTypeId];
            if(!struct) {
                return {
                    line: lineNumber,
                    log: {},
                    error: `Invalid or unsupported log line at row ${lineNumber}. Could not find struct for log type ID "${logTypeId}"`
                }
            }
            Object.assign(scaffold, struct);
            parsedLogLine = Object.seal(scaffold);
        } catch (e) {
            console.error(e.message, e);
            error = `Invalid or unsupported log line at row ${lineNumber}. Could not find struct for log type ID "${logTypeId}"`;

            return {
                line: lineNumber,
                log: {},
                error: error
            };
        }

        const tokens = logLine.split(delimiter);
        tokens.pop(); // We don't care about the checksum(?) value/id at the end of the line
        const structKeys = Object.keys(parsedLogLine);

        try {
            structKeys.forEach((key) => {
                parsedLogLine[key] = tokens[logTypeStructs[logTypeId][key]];
            });
        } catch (e) {
            console.error(e.message, e);
            error = `Log line did not match extracted type (${logTypeId}:${logTypeIds[logTypeId]}) at line ${lineNumber}`;

            return {
                line: lineNumber,
                log: {},
                error: error
            };
        }

        return {
            line: lineNumber,
            log: parsedLogLine
        }
    }

    function getLogLineType(logLine) {
        let typeEndPos = logLine.indexOf(delimiter);
        return logLine.substring(0, typeEndPos);
    }

    function parse() {
        const logLine = document.getElementById("logline").value;
        let logData = parseLogLine(logLine);

        if(logData.error) {
            raiseError(logData.error);
            raiseError('Did you copy the log correctly?');
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
            let span = document.createElement('span');
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
        errorContainer.appendChild(newErrorElement);
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
                    });
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

})();
