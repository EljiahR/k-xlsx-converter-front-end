import { IWeekdayBO } from "../dtoToBO";

export const expectedOutput: IWeekdayBO[] = [
    {
        "day": "Sunday",
        "date": "Sunday 12/1/2024",
        "holidays" : ["Not-A-Real-Holiday"],
        "birthdays": ["Rohan Beltran", "Archie Austin"],
        "jobPositions": [
            {
                "name": "Call Ups",
                "shifts": [
                    {
                        "firstName": "Rohan",
                        "lastName": "Beltran",
                        "baggerName": "Rohan",
                        "shiftStart": "7:00a",
                        "shiftEnd": "3:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Floral Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Archie",
                        "lastName": "Austin",
                        "baggerName": "Archie",
                        "shiftStart": "10:00a",
                        "shiftEnd": "6:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Apparel Stocker",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Eliza",
                        "lastName": "England",
                        "baggerName": "Eliza",
                        "shiftStart": "11:00a",
                        "shiftEnd": "7:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Floral Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Valeria",
                        "lastName": "Morales",
                        "baggerName": "Valeria",
                        "shiftStart": "2:00p",
                        "shiftEnd": "8:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Apparel Stocker",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End SCO Cashier",
                "shifts": [
                    {
                        "firstName": "Hugh",
                        "lastName": "Stevens",
                        "baggerName": "Hugh",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "9:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Janet",
                        "lastName": "Peterson",
                        "baggerName": "Janet",
                        "shiftStart": "11:00a",
                        "shiftEnd": "7:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Jude",
                        "lastName": "Lazano",
                        "baggerName": "Jude",
                        "shiftStart": "12:00p",
                        "shiftEnd": "6:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "4:00 PM"
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Hollie",
                        "lastName": "McKenzie",
                        "baggerName": "Hollie",
                        "shiftStart": "2:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "8:00 PM"
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Garreth",
                        "lastName": "Kemp",
                        "baggerName": "Garreth",
                        "shiftStart": "4:00p",
                        "shiftEnd": "11:15p",
                        "breakOne": {
                            "editable": false,
                            "time": "6:15 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "9:15 PM"
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Cashier",
                "shifts": [
                    {
                        "firstName": "Lucia",
                        "lastName": "McCana",
                        "baggerName": "Lucia",
                        "shiftStart": "7:00a",
                        "shiftEnd": "3:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "1:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Adal",
                        "lastName": "Mack",
                        "baggerName": "Adal",
                        "shiftStart": "8:00a",
                        "shiftEnd": "4:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "11:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Jesse",
                        "lastName": "Perry",
                        "baggerName": "Jesse",
                        "shiftStart": "9:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "11:30 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Maariah",
                        "lastName": "Everett",
                        "baggerName": "Maariah",
                        "shiftStart": "9:00a",
                        "shiftEnd": "5:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "3:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Uzair",
                        "lastName": "Olsen",
                        "baggerName": "Uzair",
                        "shiftStart": "10:00a",
                        "shiftEnd": "4:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Walter",
                        "lastName": "Boyer",
                        "baggerName": "Walter",
                        "shiftStart": "11:00a",
                        "shiftEnd": "7:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Natasha",
                        "lastName": "Maldonado",
                        "baggerName": "Natasha",
                        "shiftStart": "11:30a",
                        "shiftEnd": "6:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "1:30 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "4:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Jack",
                        "lastName": "Nicholson",
                        "baggerName": "Jack",
                        "shiftStart": "12:30p",
                        "shiftEnd": "6:30p",
                        "breakOne": {
                            "editable": false,
                            "time": "2:30 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "4:30 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Victoria",
                        "lastName": "Beckham",
                        "baggerName": "Victoria",
                        "shiftStart": "12:30p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "2:30 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": "4:30 PM"
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "7:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Wolfgang",
                        "lastName": "Puck",
                        "baggerName": "Wolfgang",
                        "shiftStart": "2:00p",
                        "shiftEnd": "10:30p",
                        "breakOne": {
                            "editable": false,
                            "time": "4:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": "6:00 PM"
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "8:30 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Kenny",
                        "lastName": "Palmer",
                        "baggerName": "Kenny",
                        "shiftStart": "6:00p",
                        "shiftEnd": "11:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "8:30 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Liquor Clerk",
                "shifts": [
                    {
                        "firstName": "Raheem",
                        "lastName": "Rosales",
                        "baggerName": "Raheem",
                        "shiftStart": "10:00a",
                        "shiftEnd": "5:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Liquor Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Josh",
                        "lastName": "Homme",
                        "baggerName": "Josh",
                        "shiftStart": "5:00p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Liquor Clerk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Courtesy Clerk",
                "shifts": [
                    {
                        "firstName": "Aneesa",
                        "lastName": "Roach",
                        "baggerName": "Aneesa",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "9:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Juliette",
                        "lastName": "Bean",
                        "baggerName": "Juliette",
                        "shiftStart": "7:00a",
                        "shiftEnd": "3:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "1:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": {
                            "shiftStart": "11:00a",
                            "shiftEnd": "3:00p",
                            "originalPosition": "Front End Utility Clerk"
                        },
                        "edit": false
                    },
                    {
                        "firstName": "Sadie",
                        "lastName": "Gregory",
                        "baggerName": "Sadie",
                        "shiftStart": "8:00a",
                        "shiftEnd": "12:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Abletonen",
                        "lastName": "Williams",
                        "baggerName": "Abletonen",
                        "shiftStart": "11:00a",
                        "shiftEnd": "7:30p",
                        "breakOne": {
                            "editable": false,
                            "time": "1:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": "3:00 PM"
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "5:30 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": {
                            "shiftStart": "11:00a",
                            "shiftEnd": "7:15p",
                            "originalPosition": "Front End Utility Clerk"
                        },
                        "edit": false
                    },
                    {
                        "firstName": "Karol",
                        "lastName": "Blakenship",
                        "baggerName": "Karol",
                        "shiftStart": "12:00p",
                        "shiftEnd": "6:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "4:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Mayer",
                        "lastName": "Howel",
                        "baggerName": "Mayer",
                        "shiftStart": "12:00p",
                        "shiftEnd": "7:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Leonardo",
                        "lastName": "Hoffman",
                        "baggerName": "Leonardo",
                        "shiftStart": "1:00p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "4:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "7:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": {
                            "shiftStart": "3:00p",
                            "shiftEnd": "8:45p",
                            "originalPosition": "Front End Utility Clerk"
                        },
                        "edit": false
                    },
                    {
                        "firstName": "Maximus",
                        "lastName": "Johns",
                        "baggerName": "Maximus",
                        "shiftStart": "2:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "8:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Metroid",
                        "lastName": "Crawl",
                        "baggerName": "Metroid",
                        "shiftStart": "3:00p",
                        "shiftEnd": "11:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "6:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "9:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Diane",
                        "lastName": "Garza",
                        "baggerName": "Diane",
                        "shiftStart": "3:00p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "7:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Elissameth",
                        "lastName": "Zimmerman",
                        "baggerName": "Elissameth",
                        "shiftStart": "3:00p",
                        "shiftEnd": "7:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": {
                            "shiftStart": "3:00p",
                            "shiftEnd": "7:00p",
                            "originalPosition": "Front End Utility Clerk"
                        },
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End File Maint",
                "shifts": [
                    {
                        "firstName": "Preston",
                        "lastName": "Clark",
                        "baggerName": "Preston",
                        "shiftStart": "4:00a",
                        "shiftEnd": "12:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "7:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "originalPosition": "Front End File Maint",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Service Desk",
                "shifts": [
                    {
                        "firstName": "Tyler",
                        "lastName": "Okonma",
                        "baggerName": "Tyler",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "9:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Garfield",
                        "lastName": "Acosta",
                        "baggerName": "Garfield",
                        "shiftStart": "11:00a",
                        "shiftEnd": "7:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Ophelia",
                        "lastName": "Oneill",
                        "baggerName": "Ophelia",
                        "shiftStart": "1:00p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "4:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "7:00 PM"
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Paul",
                        "lastName": "Banks",
                        "baggerName": "Paul",
                        "shiftStart": "2:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "8:00 PM"
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Supervisor",
                "shifts": [
                    {
                        "firstName": "Sauna",
                        "lastName": "Campbell",
                        "baggerName": "Sauna",
                        "shiftStart": "9:00a",
                        "shiftEnd": "5:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "3:00 PM"
                        },
                        "originalPosition": "Front End Supervisor",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Fuel Clerk",
                "shifts": [
                    {
                        "firstName": "Daniel",
                        "lastName": "Kessler",
                        "baggerName": "Daniel",
                        "shiftStart": "5:00a",
                        "shiftEnd": "1:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Fuel Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Samuel",
                        "lastName": "Fogerino",
                        "baggerName": "Samuel",
                        "shiftStart": "2:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Fuel Clerk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            }
        ],
        "carts": [
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "Sadie",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "Sadie",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "Sadie",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Sadie",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Karol",
                    "editable": false
                },
                {
                    "name": "Mayer",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Karol",
                    "editable": false
                },
                {
                    "name": "Mayer",
                    "editable": false
                },
                {
                    "name": "Leonardo",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Leonardo",
                    "editable": false
                },
                {
                    "name": "Maximus",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Karol",
                    "editable": false
                },
                {
                    "name": "Mayer",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Maximus",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                },
                {
                    "name": "Elissameth",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Karol",
                    "editable": false
                },
                {
                    "name": "Mayer",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Maximus",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                },
                {
                    "name": "Elissameth",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Karol",
                    "editable": false
                },
                {
                    "name": "Mayer",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Karol",
                    "editable": false
                },
                {
                    "name": "Mayer",
                    "editable": false
                },
                {
                    "name": "Maximus",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Elissameth",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Mayer",
                    "editable": false
                },
                {
                    "name": "Maximus",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Abletonen",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Maximus",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Leonardo",
                    "editable": false
                },
                {
                    "name": "Maximus",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Maximus",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ]
        ],
        "errors": {}
    },
    {
        "day": "Monday",
        "date": "Monday 12/2/2024",
        "holidays" : [],
        "birthdays": [],
        "jobPositions": [
            {
                "name": "Call Ups",
                "shifts": [
                    {
                        "firstName": "Rohan",
                        "lastName": "Beltran",
                        "baggerName": "Rohan",
                        "shiftStart": "8:00a",
                        "shiftEnd": "4:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Floral Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Valeria",
                        "lastName": "Morales",
                        "baggerName": "Valeria",
                        "shiftStart": "4:30p",
                        "shiftEnd": "8:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Apparel Stocker",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End SCO Cashier",
                "shifts": [
                    {
                        "firstName": "Dean",
                        "lastName": "Fertita",
                        "baggerName": "Dean",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "9:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Sebastian",
                        "lastName": "Grainger",
                        "baggerName": "Sebastian",
                        "shiftStart": "10:00a",
                        "shiftEnd": "6:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "1:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "4:00 PM"
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Hollie",
                        "lastName": "McKenzie",
                        "baggerName": "Hollie",
                        "shiftStart": "3:15p",
                        "shiftEnd": "11:15p",
                        "breakOne": {
                            "editable": false,
                            "time": "6:15 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "9:15 PM"
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Cashier",
                "shifts": [
                    {
                        "firstName": "Hugh",
                        "lastName": "Stevens",
                        "baggerName": "Hugh",
                        "shiftStart": "7:00a",
                        "shiftEnd": "3:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "1:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "John",
                        "lastName": "Theodore",
                        "baggerName": "John",
                        "shiftStart": "8:00a",
                        "shiftEnd": "4:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "11:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Alfredo",
                        "lastName": "Hernandez",
                        "baggerName": "Alfredo",
                        "shiftStart": "9:00a",
                        "shiftEnd": "5:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "3:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Raheem",
                        "lastName": "Rosales",
                        "baggerName": "Raheem",
                        "shiftStart": "11:00a",
                        "shiftEnd": "4:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "1:30 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Nick",
                        "lastName": "Oliveri",
                        "baggerName": "Nick",
                        "shiftStart": "2:15p",
                        "shiftEnd": "5:30p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Mark",
                        "lastName": "Lanegan",
                        "baggerName": "Mark",
                        "shiftStart": "4:30p",
                        "shiftEnd": "6:30p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Gene",
                        "lastName": "Trautmann",
                        "baggerName": "Gene",
                        "shiftStart": "4:30p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "6:45 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Dave",
                        "lastName": "Grohl",
                        "baggerName": "Dave",
                        "shiftStart": "5:00p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "7:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Joey",
                        "lastName": "Castillo",
                        "baggerName": "Joey",
                        "shiftStart": "6:00p",
                        "shiftEnd": "10:30p",
                        "breakOne": {
                            "editable": false,
                            "time": "8:15 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Jesse",
                        "lastName": "Perry",
                        "baggerName": "Jesse",
                        "shiftStart": "6:00p",
                        "shiftEnd": "11:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "8:30 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Courtesy Clerk",
                "shifts": [
                    {
                        "firstName": "Alain",
                        "lastName": "Mociulski",
                        "baggerName": "Alain",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "9:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Diane",
                        "lastName": "Craig",
                        "baggerName": "Diane C",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "9:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Juliette",
                        "lastName": "Bean",
                        "baggerName": "Juliette",
                        "shiftStart": "7:00a",
                        "shiftEnd": "3:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "1:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Natasha",
                        "lastName": "Shneider",
                        "baggerName": "Natasha",
                        "shiftStart": "8:00a",
                        "shiftEnd": "4:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "11:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Donald",
                        "lastName": "Glover",
                        "baggerName": "Donald",
                        "shiftStart": "10:00a",
                        "shiftEnd": "4:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Kanye",
                        "lastName": "West",
                        "baggerName": "Kanye",
                        "shiftStart": "2:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "8:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Metroid",
                        "lastName": "Crawl",
                        "baggerName": "Metroid",
                        "shiftStart": "3:00p",
                        "shiftEnd": "11:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "6:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "9:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Diane",
                        "lastName": "Garza",
                        "baggerName": "Diane G",
                        "shiftStart": "3:00p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "7:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Able",
                        "lastName": "Williams",
                        "baggerName": "Able",
                        "shiftStart": "4:00p",
                        "shiftEnd": "8:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "6:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Alex",
                        "lastName": "Turner",
                        "baggerName": "Alex",
                        "shiftStart": "6:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "8:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End File Maint",
                "shifts": [
                    {
                        "firstName": "Jesse",
                        "lastName": "Keeler",
                        "baggerName": "Jesse",
                        "shiftStart": "4:00a",
                        "shiftEnd": "12:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "7:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "originalPosition": "Front End File Maint",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Preston",
                        "lastName": "Clark",
                        "baggerName": "Preston",
                        "shiftStart": "4:00a",
                        "shiftEnd": "12:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "7:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "originalPosition": "Front End File Maint",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Service Desk",
                "shifts": [
                    {
                        "firstName": "Tyler",
                        "lastName": "Okonma",
                        "baggerName": "Tyler",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "9:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Paul",
                        "lastName": "Banks",
                        "baggerName": "Paul",
                        "shiftStart": "9:00a",
                        "shiftEnd": "5:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "3:00 PM"
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Mike",
                        "lastName": "Kerr",
                        "baggerName": "Mike",
                        "shiftStart": "11:00a",
                        "shiftEnd": "7:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Garfield",
                        "lastName": "Acosta",
                        "baggerName": "Garfield",
                        "shiftStart": "1:00p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "4:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "7:00 PM"
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Sauna",
                        "lastName": "Campbell",
                        "baggerName": "Sauna",
                        "shiftStart": "2:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "8:00 PM"
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Fuel Clerk",
                "shifts": [
                    {
                        "firstName": "Matt",
                        "lastName": "Helders",
                        "baggerName": "Matt",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Fuel Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Ben",
                        "lastName": "Thatcher",
                        "baggerName": "Ben",
                        "shiftStart": "2:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Fuel Clerk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Liquor Clerk",
                "shifts": [
                    {
                        "firstName": "Elliott",
                        "lastName": "Smith",
                        "baggerName": "Elliott",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Liquor Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Franz",
                        "lastName": "Ferdinand",
                        "baggerName": "Franz",
                        "shiftStart": "9:00a",
                        "shiftEnd": "5:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Liquor Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Alex",
                        "lastName": "Kapranos",
                        "baggerName": "Alex",
                        "shiftStart": "4:00p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Liquor Clerk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            }
        ],
        "carts": [
            [
                {
                    "name": "Alain",
                    "editable": false
                },
                {
                    "name": "Diane C",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Alain",
                    "editable": false
                },
                {
                    "name": "Diane C",
                    "editable": false
                },
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Alain",
                    "editable": false
                },
                {
                    "name": "Diane C",
                    "editable": false
                },
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "Natasha",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Alain",
                    "editable": false
                },
                {
                    "name": "Diane C",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "Donald",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Alain",
                    "editable": false
                },
                {
                    "name": "Diane C",
                    "editable": false
                },
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Donald",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Alain",
                    "editable": false
                },
                {
                    "name": "Diane C",
                    "editable": false
                },
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "Natasha",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Alain",
                    "editable": false
                },
                {
                    "name": "Diane C",
                    "editable": false
                },
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "Natasha",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Donald",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Alain",
                    "editable": false
                },
                {
                    "name": "Diane C",
                    "editable": false
                },
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "Natasha",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "Donald",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "Diane G",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "Donald",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "Diane G",
                    "editable": false
                },
                {
                    "name": "Able",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "Able",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Diane G",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Alex",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "Diane G",
                    "editable": false
                },
                {
                    "name": "Able",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Alex",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "Diane G",
                    "editable": false
                },
                {
                    "name": "Able",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "Diane G",
                    "editable": false
                },
                {
                    "name": "Alex",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "Alex",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ]
        ],
        "errors": {}
    },
    {
        "day": "Tuesday",
        "date": "Tuesday 12/3/2024",
        "holidays" : [],
        "birthdays": [],
        "jobPositions": [
            {
                "name": "Call Ups",
                "shifts": [
                    {
                        "firstName": "Rohan",
                        "lastName": "Beltran",
                        "baggerName": "Rohan",
                        "shiftStart": "8:00a",
                        "shiftEnd": "4:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Floral Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Archie",
                        "lastName": "Austin",
                        "baggerName": "Archie",
                        "shiftStart": "12:00p",
                        "shiftEnd": "6:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Apparel Stocker",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Valeria",
                        "lastName": "Morales",
                        "baggerName": "Valeria",
                        "shiftStart": "4:30p",
                        "shiftEnd": "8:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Apparel Stocker",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End SCO Cashier",
                "shifts": [
                    {
                        "firstName": "Dean",
                        "lastName": "Fertita",
                        "baggerName": "Dean",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "9:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Hollie",
                        "lastName": "McKenzie",
                        "baggerName": "Hollie",
                        "shiftStart": "11:00a",
                        "shiftEnd": "7:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Garreth",
                        "lastName": "Kemp",
                        "baggerName": "Garreth",
                        "shiftStart": "5:15p",
                        "shiftEnd": "11:15p",
                        "breakOne": {
                            "editable": false,
                            "time": "7:15 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "9:15 PM"
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Cashier",
                "shifts": [
                    {
                        "firstName": "Hugh",
                        "lastName": "Stevens",
                        "baggerName": "Hugh",
                        "shiftStart": "7:00a",
                        "shiftEnd": "3:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "1:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Dave",
                        "lastName": "Grohl",
                        "baggerName": "Dave",
                        "shiftStart": "8:00a",
                        "shiftEnd": "4:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "11:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Wolfgang",
                        "lastName": "Puck",
                        "baggerName": "Wolfgang",
                        "shiftStart": "3:30p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:30 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "8:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Maariah",
                        "lastName": "Everett",
                        "baggerName": "Maariah",
                        "shiftStart": "4:00p",
                        "shiftEnd": "8:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "6:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Jesse",
                        "lastName": "Perry",
                        "baggerName": "Jesse",
                        "shiftStart": "6:00p",
                        "shiftEnd": "11:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "8:30 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Courtesy Clerk",
                "shifts": [
                    {
                        "firstName": "Alain",
                        "lastName": "Mociulski",
                        "baggerName": "Alain",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "9:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Diane",
                        "lastName": "Craig",
                        "baggerName": "Diane",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "9:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Bob",
                        "lastName": "Hardy",
                        "baggerName": "Bob",
                        "shiftStart": "8:00a",
                        "shiftEnd": "4:30p",
                        "breakOne": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "2:30 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Natasha",
                        "lastName": "Shneider",
                        "baggerName": "Natasha",
                        "shiftStart": "12:00p",
                        "shiftEnd": "8:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "3:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "6:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Leona",
                        "lastName": "Hoffman",
                        "baggerName": "Leona",
                        "shiftStart": "1:00p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "4:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "7:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Kanye",
                        "lastName": "West",
                        "baggerName": "Kanye",
                        "shiftStart": "2:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "8:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Metroid",
                        "lastName": "Crawl",
                        "baggerName": "Metroid",
                        "shiftStart": "3:00p",
                        "shiftEnd": "11:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "6:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "9:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Alex",
                        "lastName": "Turner",
                        "baggerName": "Alex",
                        "shiftStart": "6:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "8:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End File Maint",
                "shifts": [
                    {
                        "firstName": "Jesse",
                        "lastName": "Keeler",
                        "baggerName": "Jesse",
                        "shiftStart": "4:00a",
                        "shiftEnd": "12:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "7:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "originalPosition": "Front End File Maint",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Service Desk",
                "shifts": [
                    {
                        "firstName": "Zach",
                        "lastName": "Rocha",
                        "baggerName": "Zach",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "9:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Paul",
                        "lastName": "Banks",
                        "baggerName": "Paul",
                        "shiftStart": "9:00a",
                        "shiftEnd": "5:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "3:00 PM"
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Ophelia",
                        "lastName": "Oneill",
                        "baggerName": "Ophelia",
                        "shiftStart": "4:00p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "6:30 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Matt",
                        "lastName": "Helders",
                        "baggerName": "Matt",
                        "shiftStart": "5:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "7:30 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Fuel Clerk",
                "shifts": [
                    {
                        "firstName": "Mike",
                        "lastName": "Kerr",
                        "baggerName": "Mike",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Fuel Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Ben",
                        "lastName": "Thatcher",
                        "baggerName": "Ben",
                        "shiftStart": "2:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Fuel Clerk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Supervisor",
                "shifts": [
                    {
                        "firstName": "Tyler",
                        "lastName": "Okonma",
                        "baggerName": "Tyler",
                        "shiftStart": "10:00a",
                        "shiftEnd": "6:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "1:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "4:00 PM"
                        },
                        "originalPosition": "Front End Supervisor",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Liquor Clerk",
                "shifts": [
                    {
                        "firstName": "Michael",
                        "lastName": "Balzary",
                        "baggerName": "Michael",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Liquor Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Franz",
                        "lastName": "Ferdinand",
                        "baggerName": "Franz",
                        "shiftStart": "9:00a",
                        "shiftEnd": "5:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Liquor Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Josh",
                        "lastName": "Homme",
                        "baggerName": "Josh",
                        "shiftStart": "1:00p",
                        "shiftEnd": "5:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Liquor Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Alex",
                        "lastName": "Kapranos",
                        "baggerName": "Alex",
                        "shiftStart": "5:00p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Liquor Clerk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            }
        ],
        "carts": [
            [
                {
                    "name": "Alain",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Alain",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Alain",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                },
                {
                    "name": "Bob",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Bob",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Alain",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Alain",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                },
                {
                    "name": "Bob",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Alain",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                },
                {
                    "name": "Bob",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Alain",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                },
                {
                    "name": "Bob",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Alain",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                },
                {
                    "name": "Bob",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Bob",
                    "editable": false
                },
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Bob",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Alex",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Alex",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "Alex",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "Alex",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ]
        ],
        "errors": {}
    },
    {
        "day": "Wednesday",
        "date": "Wednesday 12/4/2024",
        "holidays" : [],
        "birthdays": [],
        "jobPositions": [
            {
                "name": "Call Ups",
                "shifts": [
                    {
                        "firstName": "Archie",
                        "lastName": "Austin",
                        "baggerName": "Archie",
                        "shiftStart": "12:00p",
                        "shiftEnd": "6:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Apparel Stocker",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Sara",
                        "lastName": "Hayer",
                        "baggerName": "Sara",
                        "shiftStart": "2:00p",
                        "shiftEnd": "8:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Floral Clerk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End SCO Cashier",
                "shifts": [
                    {
                        "firstName": "Hugh",
                        "lastName": "Stevens",
                        "baggerName": "Hugh",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "9:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Adal",
                        "lastName": "Mack",
                        "baggerName": "Adal",
                        "shiftStart": "2:00p",
                        "shiftEnd": "8:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "4:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "6:00 PM"
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Hollie",
                        "lastName": "McKenzie",
                        "baggerName": "Hollie",
                        "shiftStart": "3:15p",
                        "shiftEnd": "11:15p",
                        "breakOne": {
                            "editable": false,
                            "time": "6:15 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "9:15 PM"
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Chad",
                        "lastName": "Smith",
                        "baggerName": "Chad",
                        "shiftStart": "6:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "8:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Cashier",
                "shifts": [
                    {
                        "firstName": "John",
                        "lastName": "Theodore",
                        "baggerName": "John",
                        "shiftStart": "7:00a",
                        "shiftEnd": "3:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "1:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Alfredo",
                        "lastName": "Hernandez",
                        "baggerName": "Alfredo",
                        "shiftStart": "8:00a",
                        "shiftEnd": "4:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "11:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Wolfgang",
                        "lastName": "Puck",
                        "baggerName": "Wolfgang",
                        "shiftStart": "3:30p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:30 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "8:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Victoria",
                        "lastName": "Beckham",
                        "baggerName": "Victoria",
                        "shiftStart": "4:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "6:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "8:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Gene",
                        "lastName": "Trautmann",
                        "baggerName": "Gene",
                        "shiftStart": "4:30p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "6:45 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Kenny",
                        "lastName": "Palmer",
                        "baggerName": "Kenny",
                        "shiftStart": "6:00p",
                        "shiftEnd": "11:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "8:30 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Courtesy Clerk",
                "shifts": [
                    {
                        "firstName": "Aneesa",
                        "lastName": "Roach",
                        "baggerName": "Aneesa",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "9:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Alain",
                        "lastName": "Mociulski",
                        "baggerName": "Alain",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "9:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Natasha",
                        "lastName": "Shneider",
                        "baggerName": "Natasha",
                        "shiftStart": "8:00a",
                        "shiftEnd": "4:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "11:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Donald",
                        "lastName": "Glover",
                        "baggerName": "Donald",
                        "shiftStart": "10:00a",
                        "shiftEnd": "4:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Diane",
                        "lastName": "Craig",
                        "baggerName": "Diane C",
                        "shiftStart": "11:00a",
                        "shiftEnd": "7:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Leona",
                        "lastName": "Hoffman",
                        "baggerName": "Leona",
                        "shiftStart": "2:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "8:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Diane",
                        "lastName": "Garza",
                        "baggerName": "Diane G",
                        "shiftStart": "3:00p",
                        "shiftEnd": "11:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "6:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "9:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Able",
                        "lastName": "Williams",
                        "baggerName": "Able",
                        "shiftStart": "4:00p",
                        "shiftEnd": "8:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "6:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Ezra",
                        "lastName": "Koenig",
                        "baggerName": "Ezra",
                        "shiftStart": "4:00p",
                        "shiftEnd": "7:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End File Maint",
                "shifts": [
                    {
                        "firstName": "Jesse",
                        "lastName": "Keeler",
                        "baggerName": "Jesse",
                        "shiftStart": "4:00a",
                        "shiftEnd": "12:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "7:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "originalPosition": "Front End File Maint",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Preston",
                        "lastName": "Clark",
                        "baggerName": "Preston",
                        "shiftStart": "4:00a",
                        "shiftEnd": "12:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "7:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "originalPosition": "Front End File Maint",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Service Desk",
                "shifts": [
                    {
                        "firstName": "Paul",
                        "lastName": "Banks",
                        "baggerName": "Paul",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "9:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Garfield",
                        "lastName": "Acosta",
                        "baggerName": "Garfield",
                        "shiftStart": "9:00a",
                        "shiftEnd": "5:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "3:00 PM"
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Chris",
                        "lastName": "Baio",
                        "baggerName": "Chris",
                        "shiftStart": "10:00a",
                        "shiftEnd": "6:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "1:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "4:00 PM"
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Mike",
                        "lastName": "Kerr",
                        "baggerName": "Mike",
                        "shiftStart": "1:00p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "4:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "7:00 PM"
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Supervisor",
                "shifts": [
                    {
                        "firstName": "Matt",
                        "lastName": "Helders",
                        "baggerName": "Matt",
                        "shiftStart": "2:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "8:00 PM"
                        },
                        "originalPosition": "Front End Supervisor",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Fuel Clerk",
                "shifts": [
                    {
                        "firstName": "Daniel",
                        "lastName": "Kessler",
                        "baggerName": "Daniel",
                        "shiftStart": "5:00a",
                        "shiftEnd": "1:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Fuel Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Samuel",
                        "lastName": "Fogerino",
                        "baggerName": "Samuel",
                        "shiftStart": "2:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Fuel Clerk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Liquor Clerk",
                "shifts": [
                    {
                        "firstName": "Michael",
                        "lastName": "Balzary",
                        "baggerName": "Michael",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Liquor Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Elliott",
                        "lastName": "Smith",
                        "baggerName": "Elliott",
                        "shiftStart": "9:00a",
                        "shiftEnd": "5:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Liquor Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Josh",
                        "lastName": "Homme",
                        "baggerName": "Josh",
                        "shiftStart": "5:00p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Liquor Clerk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            }
        ],
        "carts": [
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Alain",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Alain",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Alain",
                    "editable": false
                },
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Alain",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "Donald",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Alain",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Donald",
                    "editable": false
                },
                {
                    "name": "Diane C",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Alain",
                    "editable": false
                },
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Diane C",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Alain",
                    "editable": false
                },
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "Donald",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Diane C",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Alain",
                    "editable": false
                },
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "Donald",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "Donald",
                    "editable": false
                },
                {
                    "name": "Diane C",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "Diane G",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "Donald",
                    "editable": false
                },
                {
                    "name": "Diane C",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "Diane G",
                    "editable": false
                },
                {
                    "name": "Able",
                    "editable": false
                },
                {
                    "name": "Ezra",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Diane C",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Diane G",
                    "editable": false
                },
                {
                    "name": "Able",
                    "editable": false
                },
                {
                    "name": "Ezra",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Diane C",
                    "editable": false
                },
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Ezra",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Diane C",
                    "editable": false
                },
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "Diane G",
                    "editable": false
                },
                {
                    "name": "Able",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "Diane G",
                    "editable": false
                },
                {
                    "name": "Able",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "Diane G",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "Diane G",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Diane G",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ]
        ],
        "errors": {}
    },
    {
        "day": "Thursday",
        "date": "Thursday 12/5/2024",
        "holidays" : [],
        "birthdays": [],
        "jobPositions": [
            {
                "name": "Call Ups",
                "shifts": [
                    {
                        "firstName": "Rohan",
                        "lastName": "Beltran",
                        "baggerName": "Rohan",
                        "shiftStart": "8:00a",
                        "shiftEnd": "4:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Floral Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Archie",
                        "lastName": "Austin",
                        "baggerName": "Archie",
                        "shiftStart": "12:00p",
                        "shiftEnd": "6:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Apparel Stocker",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Valeria",
                        "lastName": "Morales",
                        "baggerName": "Valeria",
                        "shiftStart": "4:30p",
                        "shiftEnd": "8:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Apparel Stocker",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End SCO Cashier",
                "shifts": [
                    {
                        "firstName": "Dean",
                        "lastName": "Fertita",
                        "baggerName": "Dean",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "9:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Justin",
                        "lastName": "Trudeau",
                        "baggerName": "Justin",
                        "shiftStart": "9:00a",
                        "shiftEnd": "5:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "3:00 PM"
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Adal",
                        "lastName": "Mack",
                        "baggerName": "Adal",
                        "shiftStart": "2:00p",
                        "shiftEnd": "8:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "4:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "6:00 PM"
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Hollie",
                        "lastName": "McKenzie",
                        "baggerName": "Hollie",
                        "shiftStart": "3:15p",
                        "shiftEnd": "11:15p",
                        "breakOne": {
                            "editable": false,
                            "time": "6:15 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "9:15 PM"
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Cashier",
                "shifts": [
                    {
                        "firstName": "John",
                        "lastName": "Theodore",
                        "baggerName": "John",
                        "shiftStart": "7:00a",
                        "shiftEnd": "3:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "1:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Alfredo",
                        "lastName": "Hernandez",
                        "baggerName": "Alfredo",
                        "shiftStart": "8:00a",
                        "shiftEnd": "4:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "11:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Nick",
                        "lastName": "Oliveri",
                        "baggerName": "Nick",
                        "shiftStart": "2:15p",
                        "shiftEnd": "5:30p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Maariah",
                        "lastName": "Everett",
                        "baggerName": "Maariah",
                        "shiftStart": "4:00p",
                        "shiftEnd": "8:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "6:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Gene",
                        "lastName": "Trautmann",
                        "baggerName": "Gene",
                        "shiftStart": "4:00p",
                        "shiftEnd": "8:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "6:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Troy",
                        "lastName": "Harvey",
                        "baggerName": "Troy",
                        "shiftStart": "5:30p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "7:45 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Jesse",
                        "lastName": "Perry",
                        "baggerName": "Jesse",
                        "shiftStart": "6:00p",
                        "shiftEnd": "11:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "8:30 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Courtesy Clerk",
                "shifts": [
                    {
                        "firstName": "Aneesa",
                        "lastName": "Roach",
                        "baggerName": "Aneesa",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "9:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Diane",
                        "lastName": "Craig",
                        "baggerName": "Diane",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "9:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Bob",
                        "lastName": "Hardy",
                        "baggerName": "Bob",
                        "shiftStart": "8:00a",
                        "shiftEnd": "4:30p",
                        "breakOne": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "2:30 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Donald",
                        "lastName": "Glover",
                        "baggerName": "Donald",
                        "shiftStart": "10:00a",
                        "shiftEnd": "4:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Natasha",
                        "lastName": "Shneider",
                        "baggerName": "Natasha",
                        "shiftStart": "12:00p",
                        "shiftEnd": "8:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "3:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "6:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Maximus",
                        "lastName": "Johns",
                        "baggerName": "Maximus",
                        "shiftStart": "2:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "8:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Kanye",
                        "lastName": "West",
                        "baggerName": "Kanye",
                        "shiftStart": "2:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "8:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Metroid",
                        "lastName": "Crawl",
                        "baggerName": "Metroid",
                        "shiftStart": "3:00p",
                        "shiftEnd": "11:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "6:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "9:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Alex",
                        "lastName": "Turner",
                        "baggerName": "Alex",
                        "shiftStart": "6:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "8:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End File Maint",
                "shifts": [
                    {
                        "firstName": "Jesse",
                        "lastName": "Keeler",
                        "baggerName": "Jesse",
                        "shiftStart": "4:00a",
                        "shiftEnd": "12:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "7:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "originalPosition": "Front End File Maint",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Service Desk",
                "shifts": [
                    {
                        "firstName": "Paul",
                        "lastName": "Banks",
                        "baggerName": "Paul",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "9:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Mike",
                        "lastName": "Kerr",
                        "baggerName": "Mike",
                        "shiftStart": "9:00a",
                        "shiftEnd": "5:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "3:00 PM"
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Ophelia",
                        "lastName": "Oneill",
                        "baggerName": "Ophelia",
                        "shiftStart": "4:00p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "6:30 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Matt",
                        "lastName": "Helders",
                        "baggerName": "Matt",
                        "shiftStart": "5:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "7:30 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Supervisor",
                "shifts": [
                    {
                        "firstName": "Zach",
                        "lastName": "Rocha",
                        "baggerName": "Zach",
                        "shiftStart": "10:00a",
                        "shiftEnd": "6:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "1:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "4:00 PM"
                        },
                        "originalPosition": "Front End Supervisor",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Fuel Clerk",
                "shifts": [
                    {
                        "firstName": "Daniel",
                        "lastName": "Kessler",
                        "baggerName": "Daniel",
                        "shiftStart": "5:00a",
                        "shiftEnd": "1:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Fuel Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Ben",
                        "lastName": "Thatcher",
                        "baggerName": "Ben",
                        "shiftStart": "2:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Fuel Clerk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Liquor Clerk",
                "shifts": [
                    {
                        "firstName": "Michael",
                        "lastName": "Balzary",
                        "baggerName": "Michael",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Liquor Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Elliott",
                        "lastName": "Smith",
                        "baggerName": "Elliott",
                        "shiftStart": "9:00a",
                        "shiftEnd": "5:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Liquor Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Franz",
                        "lastName": "Ferdinand",
                        "baggerName": "Franz",
                        "shiftStart": "1:00p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Liquor Clerk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            }
        ],
        "carts": [
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                },
                {
                    "name": "Bob",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Bob",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Donald",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                },
                {
                    "name": "Bob",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Donald",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                },
                {
                    "name": "Bob",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                },
                {
                    "name": "Bob",
                    "editable": false
                },
                {
                    "name": "Donald",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                },
                {
                    "name": "Bob",
                    "editable": false
                },
                {
                    "name": "Donald",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "Maximus",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Donald",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Bob",
                    "editable": false
                },
                {
                    "name": "Maximus",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Donald",
                    "editable": false
                },
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Bob",
                    "editable": false
                },
                {
                    "name": "Maximus",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "Maximus",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Alex",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "Maximus",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Alex",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "Maximus",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Maximus",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "Alex",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Maximus",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "Alex",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ]
        ],
        "errors": {}
    },
    {
        "day": "Friday",
        "date": "Friday 12/6/2024",
        "holidays" : [],
        "birthdays": [],
        "jobPositions": [
            {
                "name": "Call Ups",
                "shifts": [
                    {
                        "firstName": "Archie",
                        "lastName": "Austin",
                        "baggerName": "Archie",
                        "shiftStart": "12:00p",
                        "shiftEnd": "6:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Apparel Stocker",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Sara",
                        "lastName": "Hayer",
                        "baggerName": "Sara",
                        "shiftStart": "2:00p",
                        "shiftEnd": "8:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Floral Clerk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End SCO Cashier",
                "shifts": [
                    {
                        "firstName": "Dean",
                        "lastName": "Fertita",
                        "baggerName": "Dean",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "9:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Alfredo",
                        "lastName": "Hernandez",
                        "baggerName": "Alfredo",
                        "shiftStart": "9:00a",
                        "shiftEnd": "5:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "3:00 PM"
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Jude",
                        "lastName": "Lazano",
                        "baggerName": "Jude",
                        "shiftStart": "5:00p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "7:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Dave",
                        "lastName": "Grohl",
                        "baggerName": "Dave",
                        "shiftStart": "5:00p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "7:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Garreth",
                        "lastName": "Kemp",
                        "baggerName": "Garreth",
                        "shiftStart": "5:15p",
                        "shiftEnd": "11:15p",
                        "breakOne": {
                            "editable": false,
                            "time": "7:15 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "9:15 PM"
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Cashier",
                "shifts": [
                    {
                        "firstName": "Hugh",
                        "lastName": "Stevens",
                        "baggerName": "Hugh",
                        "shiftStart": "7:00a",
                        "shiftEnd": "3:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "1:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "John",
                        "lastName": "Theodore",
                        "baggerName": "John",
                        "shiftStart": "8:00a",
                        "shiftEnd": "4:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "11:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Wolfgang",
                        "lastName": "Puck",
                        "baggerName": "Wolfgang",
                        "shiftStart": "3:30p",
                        "shiftEnd": "10:30p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:30 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "8:30 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Victoria",
                        "lastName": "Beckham",
                        "baggerName": "Victoria",
                        "shiftStart": "3:30p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:30 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "8:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "John",
                        "lastName": "Halo",
                        "baggerName": "John",
                        "shiftStart": "5:00p",
                        "shiftEnd": "7:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Kenny",
                        "lastName": "Palmer",
                        "baggerName": "Kenny",
                        "shiftStart": "6:00p",
                        "shiftEnd": "11:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "8:30 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Courtesy Clerk",
                "shifts": [
                    {
                        "firstName": "Aneesa",
                        "lastName": "Roach",
                        "baggerName": "Aneesa",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "9:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Juliette",
                        "lastName": "Bean",
                        "baggerName": "Juliette",
                        "shiftStart": "7:00a",
                        "shiftEnd": "3:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "1:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Bob",
                        "lastName": "Hardy",
                        "baggerName": "Bob",
                        "shiftStart": "8:00a",
                        "shiftEnd": "4:30p",
                        "breakOne": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "2:30 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Leona",
                        "lastName": "Hoffman",
                        "baggerName": "Leona",
                        "shiftStart": "9:00a",
                        "shiftEnd": "5:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "3:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Donald",
                        "lastName": "Glover",
                        "baggerName": "Donald",
                        "shiftStart": "10:00a",
                        "shiftEnd": "4:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Natasha",
                        "lastName": "Shneider",
                        "baggerName": "Natasha",
                        "shiftStart": "12:00p",
                        "shiftEnd": "8:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "3:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "6:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Maximus",
                        "lastName": "Johns",
                        "baggerName": "Maximus",
                        "shiftStart": "2:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "8:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Kanye",
                        "lastName": "West",
                        "baggerName": "Kanye",
                        "shiftStart": "2:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "8:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Diane",
                        "lastName": "Garza",
                        "baggerName": "Diane",
                        "shiftStart": "3:00p",
                        "shiftEnd": "11:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "6:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "9:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Able",
                        "lastName": "Williams",
                        "baggerName": "Able",
                        "shiftStart": "4:00p",
                        "shiftEnd": "8:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "6:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Mayer",
                        "lastName": "Howel",
                        "baggerName": "Mayer",
                        "shiftStart": "4:00p",
                        "shiftEnd": "7:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End File Maint",
                "shifts": [
                    {
                        "firstName": "Preston",
                        "lastName": "Clark",
                        "baggerName": "Preston",
                        "shiftStart": "4:00a",
                        "shiftEnd": "12:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "7:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "originalPosition": "Front End File Maint",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Service Desk",
                "shifts": [
                    {
                        "firstName": "Sauna",
                        "lastName": "Campbell",
                        "baggerName": "Sauna",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "9:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Ophelia",
                        "lastName": "Oneill",
                        "baggerName": "Ophelia",
                        "shiftStart": "8:00a",
                        "shiftEnd": "12:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Garfield",
                        "lastName": "Acosta",
                        "baggerName": "Garfield",
                        "shiftStart": "11:00a",
                        "shiftEnd": "7:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Chris",
                        "lastName": "Baio",
                        "baggerName": "Chris",
                        "shiftStart": "1:00p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "4:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "7:00 PM"
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Paul",
                        "lastName": "Banks",
                        "baggerName": "Paul",
                        "shiftStart": "2:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "8:00 PM"
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Supervisor",
                "shifts": [
                    {
                        "firstName": "Tyler",
                        "lastName": "Okonma",
                        "baggerName": "Tyler",
                        "shiftStart": "10:00a",
                        "shiftEnd": "6:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "1:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "4:00 PM"
                        },
                        "originalPosition": "Front End Supervisor",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Fuel Clerk",
                "shifts": [
                    {
                        "firstName": "Daniel",
                        "lastName": "Kessler",
                        "baggerName": "Daniel",
                        "shiftStart": "5:00a",
                        "shiftEnd": "1:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Fuel Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Samuel",
                        "lastName": "Fogerino",
                        "baggerName": "Samuel",
                        "shiftStart": "2:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Fuel Clerk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Liquor Clerk",
                "shifts": [
                    {
                        "firstName": "Michael",
                        "lastName": "Balzary",
                        "baggerName": "Michael",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Liquor Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Franz",
                        "lastName": "Ferdinand",
                        "baggerName": "Franz",
                        "shiftStart": "9:00a",
                        "shiftEnd": "5:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Liquor Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Elliott",
                        "lastName": "Smith",
                        "baggerName": "Elliott",
                        "shiftStart": "9:00a",
                        "shiftEnd": "5:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Liquor Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Josh",
                        "lastName": "Homme",
                        "baggerName": "Josh",
                        "shiftStart": "5:00p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Liquor Clerk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            }
        ],
        "carts": [
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "Bob",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "Bob",
                    "editable": false
                },
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "Donald",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "Bob",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "Donald",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "Bob",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "Bob",
                    "editable": false
                },
                {
                    "name": "Leona",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Donald",
                    "editable": false
                },
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "Bob",
                    "editable": false
                },
                {
                    "name": "Leona",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "Maximus",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "Donald",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Bob",
                    "editable": false
                },
                {
                    "name": "Maximus",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "Donald",
                    "editable": false
                },
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Bob",
                    "editable": false
                },
                {
                    "name": "Maximus",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "Able",
                    "editable": false
                },
                {
                    "name": "Mayer",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Diane",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "Maximus",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Able",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Mayer",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "Maximus",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Able",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Natasha",
                    "editable": false
                },
                {
                    "name": "Maximus",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Maximus",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Maximus",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Diane",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ]
        ],
        "errors": {}
    },
    {
        "day": "Saturday",
        "date": "Saturday 12/7/2024",
        "holidays" : [],
        "birthdays": [],
        "jobPositions": [
            {
                "name": "Call Ups",
                "shifts": [
                    {
                        "firstName": "Sara",
                        "lastName": "Hayer",
                        "baggerName": "Sara",
                        "shiftStart": "9:00a",
                        "shiftEnd": "5:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Floral Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Valeria",
                        "lastName": "Morales",
                        "baggerName": "Valeria",
                        "shiftStart": "2:00p",
                        "shiftEnd": "8:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Apparel Stocker",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End SCO Cashier",
                "shifts": [
                    {
                        "firstName": "Dean",
                        "lastName": "Fertita",
                        "baggerName": "Dean",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "9:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Nick",
                        "lastName": "Oliveri",
                        "baggerName": "Nick",
                        "shiftStart": "9:30a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "11:45 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Janet",
                        "lastName": "Peterson",
                        "baggerName": "Janet",
                        "shiftStart": "11:00a",
                        "shiftEnd": "7:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Jude",
                        "lastName": "Lazano",
                        "baggerName": "Jude",
                        "shiftStart": "12:00p",
                        "shiftEnd": "6:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "4:00 PM"
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Hollie",
                        "lastName": "McKenzie",
                        "baggerName": "Hollie",
                        "shiftStart": "3:15p",
                        "shiftEnd": "11:15p",
                        "breakOne": {
                            "editable": false,
                            "time": "6:15 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "9:15 PM"
                        },
                        "originalPosition": "Front End SCO Cashier",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Cashier",
                "shifts": [
                    {
                        "firstName": "John",
                        "lastName": "Theodore",
                        "baggerName": "John",
                        "shiftStart": "7:00a",
                        "shiftEnd": "3:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "1:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Mark",
                        "lastName": "Lanegan",
                        "baggerName": "Mark",
                        "shiftStart": "8:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Gene",
                        "lastName": "Trautmann",
                        "baggerName": "Gene",
                        "shiftStart": "8:00a",
                        "shiftEnd": "3:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "1:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Alfredo",
                        "lastName": "Hernandez",
                        "baggerName": "Alfredo",
                        "shiftStart": "9:00a",
                        "shiftEnd": "5:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "3:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "John",
                        "lastName": "Halo",
                        "baggerName": "John",
                        "shiftStart": "10:30a",
                        "shiftEnd": "7:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "12:30 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": "2:30 PM"
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Victoria",
                        "lastName": "Beckham",
                        "baggerName": "Victoria",
                        "shiftStart": "12:30p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "2:30 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": "4:30 PM"
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "7:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Joey",
                        "lastName": "Castillo",
                        "baggerName": "Joey",
                        "shiftStart": "2:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "8:00 PM"
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Walter",
                        "lastName": "Boyer",
                        "baggerName": "Walter",
                        "shiftStart": "3:00p",
                        "shiftEnd": "7:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Cashier",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Courtesy Clerk",
                "shifts": [
                    {
                        "firstName": "Aneesa",
                        "lastName": "Roach",
                        "baggerName": "Aneesa",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "9:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Juliette",
                        "lastName": "Bean",
                        "baggerName": "Juliette",
                        "shiftStart": "7:00a",
                        "shiftEnd": "3:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "1:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Karol",
                        "lastName": "Blakenship",
                        "baggerName": "Karol",
                        "shiftStart": "8:00a",
                        "shiftEnd": "4:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "11:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Ezra",
                        "lastName": "Koenig",
                        "baggerName": "Ezra",
                        "shiftStart": "9:00a",
                        "shiftEnd": "5:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "3:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Alex",
                        "lastName": "Turner",
                        "baggerName": "Alex",
                        "shiftStart": "9:30a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "11:45 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Leona",
                        "lastName": "Hoffman",
                        "baggerName": "Leona",
                        "shiftStart": "2:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "8:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Kanye",
                        "lastName": "West",
                        "baggerName": "Kanye",
                        "shiftStart": "2:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "8:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Metroid",
                        "lastName": "Crawl",
                        "baggerName": "Metroid",
                        "shiftStart": "3:00p",
                        "shiftEnd": "11:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "6:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "9:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Diane",
                        "lastName": "Garza",
                        "baggerName": "Diane",
                        "shiftStart": "3:00p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "7:00 PM"
                        },
                        "originalPosition": "Front End Courtesy Clerk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End File Maint",
                "shifts": [
                    {
                        "firstName": "Jesse",
                        "lastName": "Keeler",
                        "baggerName": "Jesse",
                        "shiftStart": "4:00a",
                        "shiftEnd": "12:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "7:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "originalPosition": "Front End File Maint",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Preston",
                        "lastName": "Clark",
                        "baggerName": "Preston",
                        "shiftStart": "4:00a",
                        "shiftEnd": "12:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "7:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "10:00 AM"
                        },
                        "originalPosition": "Front End File Maint",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Service Desk",
                "shifts": [
                    {
                        "firstName": "Sauna",
                        "lastName": "Campbell",
                        "baggerName": "Sauna",
                        "shiftStart": "6:00a",
                        "shiftEnd": "2:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "9:00 AM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Mike",
                        "lastName": "Kerr",
                        "baggerName": "Mike",
                        "shiftStart": "9:00a",
                        "shiftEnd": "5:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "12:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "3:00 PM"
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Garfield",
                        "lastName": "Acosta",
                        "baggerName": "Garfield",
                        "shiftStart": "11:00a",
                        "shiftEnd": "7:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "2:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "originalPosition": "Front End Service Desk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Liquor Clerk",
                "shifts": [
                    {
                        "firstName": "Josh",
                        "lastName": "Homme",
                        "baggerName": "Josh",
                        "shiftStart": "9:00a",
                        "shiftEnd": "1:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Liquor Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Chris",
                        "lastName": "Baio",
                        "baggerName": "Chris",
                        "shiftStart": "1:00p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Liquor Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Alex",
                        "lastName": "Kapranos",
                        "baggerName": "Alex",
                        "shiftStart": "4:00p",
                        "shiftEnd": "9:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Liquor Clerk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Front End Supervisor",
                "shifts": [
                    {
                        "firstName": "Tyler",
                        "lastName": "Okonma",
                        "baggerName": "Tyler",
                        "shiftStart": "2:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": "5:00 PM"
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": "8:00 PM"
                        },
                        "originalPosition": "Front End Supervisor",
                        "subshift": null,
                        "edit": false
                    }
                ]
            },
            {
                "name": "Fuel Clerk",
                "shifts": [
                    {
                        "firstName": "Daniel",
                        "lastName": "Kessler",
                        "baggerName": "Daniel",
                        "shiftStart": "5:00a",
                        "shiftEnd": "1:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Fuel Clerk",
                        "subshift": null,
                        "edit": false
                    },
                    {
                        "firstName": "Samuel",
                        "lastName": "Fogerino",
                        "baggerName": "Samuel",
                        "shiftStart": "2:00p",
                        "shiftEnd": "10:00p",
                        "breakOne": {
                            "editable": false,
                            "time": ""
                        },
                        "lunch": {
                            "editable": false,
                            "time": ""
                        },
                        "breakTwo": {
                            "editable": false,
                            "time": ""
                        },
                        "originalPosition": "Fuel Clerk",
                        "subshift": null,
                        "edit": false
                    }
                ]
            }
        ],
        "carts": [
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "Karol",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "Karol",
                    "editable": false
                },
                {
                    "name": "Ezra",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Alex",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Karol",
                    "editable": false
                },
                {
                    "name": "Ezra",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "Alex",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Ezra",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "Karol",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Alex",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "Karol",
                    "editable": false
                },
                {
                    "name": "Ezra",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Alex",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Aneesa",
                    "editable": false
                },
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "Karol",
                    "editable": false
                },
                {
                    "name": "Ezra",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Juliette",
                    "editable": false
                },
                {
                    "name": "Karol",
                    "editable": false
                },
                {
                    "name": "Ezra",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Karol",
                    "editable": false
                },
                {
                    "name": "Ezra",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Ezra",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "Diane",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Leona",
                    "editable": false
                },
                {
                    "name": "Kanye",
                    "editable": false
                },
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "Metroid",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ],
            [
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                },
                {
                    "name": "",
                    "editable": false
                }
            ]
        ],
        "errors": {}
    }
]