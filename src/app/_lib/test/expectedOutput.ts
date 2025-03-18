import { IWeekdayBO } from "../types/shiftTypes";

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
                        "name": {
							"firstName": "Rohan",
							"lastName": "Beltran",
							"baggerName": "Rohan",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "7:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "3:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Archie",
							"lastName": "Austin",
							"baggerName": "Archie",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "10:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "6:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Eliza",
							"lastName": "England",
							"baggerName": "Eliza",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "11:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "7:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Valeria",
							"lastName": "Morales",
							"baggerName": "Valeria",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "8:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Hugh",
							"lastName": "Stevens",
							"baggerName": "Hugh",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Janet",
							"lastName": "Peterson",
							"baggerName": "Janet",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "11:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "7:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Jude",
							"lastName": "Lazano",
							"baggerName": "Jude",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "12:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "6:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Hollie",
							"lastName": "McKenzie",
							"baggerName": "Hollie",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Garreth",
							"lastName": "Kemp",
							"baggerName": "Garreth",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "11:15p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Lucia",
							"lastName": "McCana",
							"baggerName": "Lucia",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "7:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "3:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Adal",
							"lastName": "Mack",
							"baggerName": "Adal",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "8:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "4:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Jesse",
							"lastName": "Perry",
							"baggerName": "Jesse",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "9:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Maariah",
							"lastName": "Everett",
							"baggerName": "Maariah",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "9:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "5:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Uzair",
							"lastName": "Olsen",
							"baggerName": "Uzair",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "10:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "4:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Walter",
							"lastName": "Boyer",
							"baggerName": "Walter",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "11:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "7:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Natasha",
							"lastName": "Maldonado",
							"baggerName": "Natasha",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "11:30a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "6:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Jack",
							"lastName": "Nicholson",
							"baggerName": "Jack",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "12:30p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "6:30p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Victoria",
							"lastName": "Beckham",
							"baggerName": "Victoria",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "12:30p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Wolfgang",
							"lastName": "Puck",
							"baggerName": "Wolfgang",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:30p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Kenny",
							"lastName": "Palmer",
							"baggerName": "Kenny",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "11:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Raheem",
							"lastName": "Rosales",
							"baggerName": "Raheem",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "10:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "5:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Josh",
							"lastName": "Homme",
							"baggerName": "Josh",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "5:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Aneesa",
							"lastName": "Roach",
							"baggerName": "Aneesa",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Juliette",
							"lastName": "Bean",
							"baggerName": "Juliette",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "7:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "3:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Sadie",
							"lastName": "Gregory",
							"baggerName": "Sadie",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "8:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "12:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Abletonen",
							"lastName": "Williams",
							"baggerName": "Abletonen",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "11:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "7:30p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Karol",
							"lastName": "Blakenship",
							"baggerName": "Karol",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "12:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "6:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Mayer",
							"lastName": "Howel",
							"baggerName": "Mayer",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "12:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "7:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Leonardo",
							"lastName": "Hoffman",
							"baggerName": "Leonardo",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "1:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Maximus",
							"lastName": "Johns",
							"baggerName": "Maximus",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Metroid",
							"lastName": "Crawl",
							"baggerName": "Metroid",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "3:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "11:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Diane",
							"lastName": "Garza",
							"baggerName": "Diane",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "3:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Elissameth",
							"lastName": "Zimmerman",
							"baggerName": "Elissameth",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "3:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "7:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Preston",
							"lastName": "Clark",
							"baggerName": "Preston",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "12:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Tyler",
							"lastName": "Okonma",
							"baggerName": "Tyler",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Garfield",
							"lastName": "Acosta",
							"baggerName": "Garfield",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "11:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "7:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Ophelia",
							"lastName": "Oneill",
							"baggerName": "Ophelia",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "1:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Paul",
							"lastName": "Banks",
							"baggerName": "Paul",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Sauna",
							"lastName": "Campbell",
							"baggerName": "Sauna",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "9:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "5:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Daniel",
							"lastName": "Kessler",
							"baggerName": "Daniel",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "5:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "1:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Samuel",
							"lastName": "Fogerino",
							"baggerName": "Samuel",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Rohan",
							"lastName": "Beltran",
							"baggerName": "Rohan",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "8:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "4:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Valeria",
							"lastName": "Morales",
							"baggerName": "Valeria",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:30p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "8:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Dean",
							"lastName": "Fertita",
							"baggerName": "Dean",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Sebastian",
							"lastName": "Grainger",
							"baggerName": "Sebastian",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "10:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "6:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Hollie",
							"lastName": "McKenzie",
							"baggerName": "Hollie",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "3:15p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "11:15p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Hugh",
							"lastName": "Stevens",
							"baggerName": "Hugh",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "7:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "3:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "John",
							"lastName": "Theodore",
							"baggerName": "John",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "8:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "4:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Alfredo",
							"lastName": "Hernandez",
							"baggerName": "Alfredo",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "9:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "5:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Raheem",
							"lastName": "Rosales",
							"baggerName": "Raheem",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "11:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "4:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Nick",
							"lastName": "Oliveri",
							"baggerName": "Nick",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:15p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "5:30p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Mark",
							"lastName": "Lanegan",
							"baggerName": "Mark",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:30p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "6:30p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Gene",
							"lastName": "Trautmann",
							"baggerName": "Gene",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:30p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Dave",
							"lastName": "Grohl",
							"baggerName": "Dave",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "5:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Joey",
							"lastName": "Castillo",
							"baggerName": "Joey",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:30p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Jesse",
							"lastName": "Perry",
							"baggerName": "Jesse",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "11:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Alain",
							"lastName": "Mociulski",
							"baggerName": "Alain",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Diane",
							"lastName": "Craig",
							"baggerName": "Diane C",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Juliette",
							"lastName": "Bean",
							"baggerName": "Juliette",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "7:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "3:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Natasha",
							"lastName": "Shneider",
							"baggerName": "Natasha",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "8:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "4:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Donald",
							"lastName": "Glover",
							"baggerName": "Donald",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "10:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "4:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Kanye",
							"lastName": "West",
							"baggerName": "Kanye",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Metroid",
							"lastName": "Crawl",
							"baggerName": "Metroid",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "3:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "11:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Diane",
							"lastName": "Garza",
							"baggerName": "Diane G",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "3:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Able",
							"lastName": "Williams",
							"baggerName": "Able",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "8:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Alex",
							"lastName": "Turner",
							"baggerName": "Alex",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Jesse",
							"lastName": "Keeler",
							"baggerName": "Jesse",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "12:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Preston",
							"lastName": "Clark",
							"baggerName": "Preston",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "12:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Tyler",
							"lastName": "Okonma",
							"baggerName": "Tyler",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Paul",
							"lastName": "Banks",
							"baggerName": "Paul",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "9:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "5:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Mike",
							"lastName": "Kerr",
							"baggerName": "Mike",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "11:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "7:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Garfield",
							"lastName": "Acosta",
							"baggerName": "Garfield",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "1:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Sauna",
							"lastName": "Campbell",
							"baggerName": "Sauna",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Matt",
							"lastName": "Helders",
							"baggerName": "Matt",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Ben",
							"lastName": "Thatcher",
							"baggerName": "Ben",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Elliott",
							"lastName": "Smith",
							"baggerName": "Elliott",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Franz",
							"lastName": "Ferdinand",
							"baggerName": "Franz",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "9:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "5:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Alex",
							"lastName": "Kapranos",
							"baggerName": "Alex",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Rohan",
							"lastName": "Beltran",
							"baggerName": "Rohan",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "8:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "4:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Archie",
							"lastName": "Austin",
							"baggerName": "Archie",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "12:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "6:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Valeria",
							"lastName": "Morales",
							"baggerName": "Valeria",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:30p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "8:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Dean",
							"lastName": "Fertita",
							"baggerName": "Dean",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Hollie",
							"lastName": "McKenzie",
							"baggerName": "Hollie",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "11:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "7:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Garreth",
							"lastName": "Kemp",
							"baggerName": "Garreth",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "5:15p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "11:15p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Hugh",
							"lastName": "Stevens",
							"baggerName": "Hugh",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "7:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "3:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Dave",
							"lastName": "Grohl",
							"baggerName": "Dave",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "8:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "4:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Wolfgang",
							"lastName": "Puck",
							"baggerName": "Wolfgang",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "3:30p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Maariah",
							"lastName": "Everett",
							"baggerName": "Maariah",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "8:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Jesse",
							"lastName": "Perry",
							"baggerName": "Jesse",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "11:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Alain",
							"lastName": "Mociulski",
							"baggerName": "Alain",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Diane",
							"lastName": "Craig",
							"baggerName": "Diane",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Bob",
							"lastName": "Hardy",
							"baggerName": "Bob",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "8:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "4:30p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Natasha",
							"lastName": "Shneider",
							"baggerName": "Natasha",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "12:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "8:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Leona",
							"lastName": "Hoffman",
							"baggerName": "Leona",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "1:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Kanye",
							"lastName": "West",
							"baggerName": "Kanye",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Metroid",
							"lastName": "Crawl",
							"baggerName": "Metroid",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "3:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "11:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Alex",
							"lastName": "Turner",
							"baggerName": "Alex",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Jesse",
							"lastName": "Keeler",
							"baggerName": "Jesse",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "12:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Zach",
							"lastName": "Rocha",
							"baggerName": "Zach",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Paul",
							"lastName": "Banks",
							"baggerName": "Paul",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "9:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "5:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Ophelia",
							"lastName": "Oneill",
							"baggerName": "Ophelia",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Matt",
							"lastName": "Helders",
							"baggerName": "Matt",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "5:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Mike",
							"lastName": "Kerr",
							"baggerName": "Mike",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Ben",
							"lastName": "Thatcher",
							"baggerName": "Ben",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Tyler",
							"lastName": "Okonma",
							"baggerName": "Tyler",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "10:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "6:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Michael",
							"lastName": "Balzary",
							"baggerName": "Michael",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Franz",
							"lastName": "Ferdinand",
							"baggerName": "Franz",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "9:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "5:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Josh",
							"lastName": "Homme",
							"baggerName": "Josh",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "1:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "5:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Alex",
							"lastName": "Kapranos",
							"baggerName": "Alex",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "5:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Archie",
							"lastName": "Austin",
							"baggerName": "Archie",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "12:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "6:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Sara",
							"lastName": "Hayer",
							"baggerName": "Sara",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "8:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Hugh",
							"lastName": "Stevens",
							"baggerName": "Hugh",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Adal",
							"lastName": "Mack",
							"baggerName": "Adal",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "8:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Hollie",
							"lastName": "McKenzie",
							"baggerName": "Hollie",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "3:15p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "11:15p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Chad",
							"lastName": "Smith",
							"baggerName": "Chad",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "John",
							"lastName": "Theodore",
							"baggerName": "John",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "7:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "3:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Alfredo",
							"lastName": "Hernandez",
							"baggerName": "Alfredo",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "8:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "4:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Wolfgang",
							"lastName": "Puck",
							"baggerName": "Wolfgang",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "3:30p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Victoria",
							"lastName": "Beckham",
							"baggerName": "Victoria",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Gene",
							"lastName": "Trautmann",
							"baggerName": "Gene",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:30p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Kenny",
							"lastName": "Palmer",
							"baggerName": "Kenny",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "11:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Aneesa",
							"lastName": "Roach",
							"baggerName": "Aneesa",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Alain",
							"lastName": "Mociulski",
							"baggerName": "Alain",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Natasha",
							"lastName": "Shneider",
							"baggerName": "Natasha",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "8:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "4:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Donald",
							"lastName": "Glover",
							"baggerName": "Donald",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "10:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "4:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Diane",
							"lastName": "Craig",
							"baggerName": "Diane C",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "11:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "7:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Leona",
							"lastName": "Hoffman",
							"baggerName": "Leona",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Diane",
							"lastName": "Garza",
							"baggerName": "Diane G",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "3:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "11:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Able",
							"lastName": "Williams",
							"baggerName": "Able",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "8:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Ezra",
							"lastName": "Koenig",
							"baggerName": "Ezra",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "7:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Jesse",
							"lastName": "Keeler",
							"baggerName": "Jesse",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "12:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Preston",
							"lastName": "Clark",
							"baggerName": "Preston",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "12:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Paul",
							"lastName": "Banks",
							"baggerName": "Paul",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Garfield",
							"lastName": "Acosta",
							"baggerName": "Garfield",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "9:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "5:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Chris",
							"lastName": "Baio",
							"baggerName": "Chris",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "10:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "6:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Mike",
							"lastName": "Kerr",
							"baggerName": "Mike",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "1:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Matt",
							"lastName": "Helders",
							"baggerName": "Matt",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Daniel",
							"lastName": "Kessler",
							"baggerName": "Daniel",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "5:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "1:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Samuel",
							"lastName": "Fogerino",
							"baggerName": "Samuel",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Michael",
							"lastName": "Balzary",
							"baggerName": "Michael",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Elliott",
							"lastName": "Smith",
							"baggerName": "Elliott",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "9:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "5:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Josh",
							"lastName": "Homme",
							"baggerName": "Josh",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "5:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Rohan",
							"lastName": "Beltran",
							"baggerName": "Rohan",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "8:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "4:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Archie",
							"lastName": "Austin",
							"baggerName": "Archie",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "12:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "6:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Valeria",
							"lastName": "Morales",
							"baggerName": "Valeria",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:30p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "8:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Dean",
							"lastName": "Fertita",
							"baggerName": "Dean",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Justin",
							"lastName": "Trudeau",
							"baggerName": "Justin",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "9:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "5:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Adal",
							"lastName": "Mack",
							"baggerName": "Adal",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "8:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Hollie",
							"lastName": "McKenzie",
							"baggerName": "Hollie",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "3:15p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "11:15p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "John",
							"lastName": "Theodore",
							"baggerName": "John",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "7:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "3:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Alfredo",
							"lastName": "Hernandez",
							"baggerName": "Alfredo",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "8:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "4:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Nick",
							"lastName": "Oliveri",
							"baggerName": "Nick",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:15p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "5:30p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Maariah",
							"lastName": "Everett",
							"baggerName": "Maariah",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "8:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Gene",
							"lastName": "Trautmann",
							"baggerName": "Gene",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "8:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Troy",
							"lastName": "Harvey",
							"baggerName": "Troy",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "5:30p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Jesse",
							"lastName": "Perry",
							"baggerName": "Jesse",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "11:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Aneesa",
							"lastName": "Roach",
							"baggerName": "Aneesa",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Diane",
							"lastName": "Craig",
							"baggerName": "Diane",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Bob",
							"lastName": "Hardy",
							"baggerName": "Bob",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "8:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "4:30p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Donald",
							"lastName": "Glover",
							"baggerName": "Donald",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "10:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "4:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Natasha",
							"lastName": "Shneider",
							"baggerName": "Natasha",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "12:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "8:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Maximus",
							"lastName": "Johns",
							"baggerName": "Maximus",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Kanye",
							"lastName": "West",
							"baggerName": "Kanye",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Metroid",
							"lastName": "Crawl",
							"baggerName": "Metroid",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "3:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "11:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Alex",
							"lastName": "Turner",
							"baggerName": "Alex",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Jesse",
							"lastName": "Keeler",
							"baggerName": "Jesse",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "12:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Paul",
							"lastName": "Banks",
							"baggerName": "Paul",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Mike",
							"lastName": "Kerr",
							"baggerName": "Mike",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "9:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "5:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Ophelia",
							"lastName": "Oneill",
							"baggerName": "Ophelia",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Matt",
							"lastName": "Helders",
							"baggerName": "Matt",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "5:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Zach",
							"lastName": "Rocha",
							"baggerName": "Zach",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "10:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "6:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Daniel",
							"lastName": "Kessler",
							"baggerName": "Daniel",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "5:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "1:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Ben",
							"lastName": "Thatcher",
							"baggerName": "Ben",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Michael",
							"lastName": "Balzary",
							"baggerName": "Michael",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Elliott",
							"lastName": "Smith",
							"baggerName": "Elliott",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "9:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "5:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Franz",
							"lastName": "Ferdinand",
							"baggerName": "Franz",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "1:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Archie",
							"lastName": "Austin",
							"baggerName": "Archie",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "12:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "6:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Sara",
							"lastName": "Hayer",
							"baggerName": "Sara",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "8:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Dean",
							"lastName": "Fertita",
							"baggerName": "Dean",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Alfredo",
							"lastName": "Hernandez",
							"baggerName": "Alfredo",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "9:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "5:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Jude",
							"lastName": "Lazano",
							"baggerName": "Jude",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "5:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Dave",
							"lastName": "Grohl",
							"baggerName": "Dave",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "5:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Garreth",
							"lastName": "Kemp",
							"baggerName": "Garreth",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "5:15p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "11:15p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Hugh",
							"lastName": "Stevens",
							"baggerName": "Hugh",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "7:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "3:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "John",
							"lastName": "Theodore",
							"baggerName": "John",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "8:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "4:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Wolfgang",
							"lastName": "Puck",
							"baggerName": "Wolfgang",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "3:30p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:30p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Victoria",
							"lastName": "Beckham",
							"baggerName": "Victoria",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "3:30p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "John",
							"lastName": "Halo",
							"baggerName": "John",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "5:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "7:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Kenny",
							"lastName": "Palmer",
							"baggerName": "Kenny",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "11:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Aneesa",
							"lastName": "Roach",
							"baggerName": "Aneesa",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Juliette",
							"lastName": "Bean",
							"baggerName": "Juliette",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "7:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "3:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Bob",
							"lastName": "Hardy",
							"baggerName": "Bob",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "8:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "4:30p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Leona",
							"lastName": "Hoffman",
							"baggerName": "Leona",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "9:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "5:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Donald",
							"lastName": "Glover",
							"baggerName": "Donald",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "10:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "4:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Natasha",
							"lastName": "Shneider",
							"baggerName": "Natasha",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "12:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "8:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Maximus",
							"lastName": "Johns",
							"baggerName": "Maximus",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Kanye",
							"lastName": "West",
							"baggerName": "Kanye",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Diane",
							"lastName": "Garza",
							"baggerName": "Diane",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "3:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "11:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Able",
							"lastName": "Williams",
							"baggerName": "Able",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "8:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Mayer",
							"lastName": "Howel",
							"baggerName": "Mayer",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "7:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Preston",
							"lastName": "Clark",
							"baggerName": "Preston",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "12:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Sauna",
							"lastName": "Campbell",
							"baggerName": "Sauna",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Ophelia",
							"lastName": "Oneill",
							"baggerName": "Ophelia",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "8:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "12:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Garfield",
							"lastName": "Acosta",
							"baggerName": "Garfield",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "11:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "7:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Chris",
							"lastName": "Baio",
							"baggerName": "Chris",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "1:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Paul",
							"lastName": "Banks",
							"baggerName": "Paul",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Tyler",
							"lastName": "Okonma",
							"baggerName": "Tyler",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "10:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "6:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Daniel",
							"lastName": "Kessler",
							"baggerName": "Daniel",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "5:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "1:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Samuel",
							"lastName": "Fogerino",
							"baggerName": "Samuel",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Michael",
							"lastName": "Balzary",
							"baggerName": "Michael",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Franz",
							"lastName": "Ferdinand",
							"baggerName": "Franz",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "9:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "5:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Elliott",
							"lastName": "Smith",
							"baggerName": "Elliott",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "9:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "5:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Josh",
							"lastName": "Homme",
							"baggerName": "Josh",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "5:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Sara",
							"lastName": "Hayer",
							"baggerName": "Sara",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "9:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "5:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Valeria",
							"lastName": "Morales",
							"baggerName": "Valeria",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "8:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Dean",
							"lastName": "Fertita",
							"baggerName": "Dean",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Nick",
							"lastName": "Oliveri",
							"baggerName": "Nick",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "9:30a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Janet",
							"lastName": "Peterson",
							"baggerName": "Janet",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "11:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "7:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Jude",
							"lastName": "Lazano",
							"baggerName": "Jude",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "12:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "6:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Hollie",
							"lastName": "McKenzie",
							"baggerName": "Hollie",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "3:15p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "11:15p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "John",
							"lastName": "Theodore",
							"baggerName": "John",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "7:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "3:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Mark",
							"lastName": "Lanegan",
							"baggerName": "Mark",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "8:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Gene",
							"lastName": "Trautmann",
							"baggerName": "Gene",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "8:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "3:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Alfredo",
							"lastName": "Hernandez",
							"baggerName": "Alfredo",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "9:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "5:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "John",
							"lastName": "Halo",
							"baggerName": "John",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "10:30a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "7:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Victoria",
							"lastName": "Beckham",
							"baggerName": "Victoria",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "12:30p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Joey",
							"lastName": "Castillo",
							"baggerName": "Joey",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Walter",
							"lastName": "Boyer",
							"baggerName": "Walter",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "3:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "7:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Aneesa",
							"lastName": "Roach",
							"baggerName": "Aneesa",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Juliette",
							"lastName": "Bean",
							"baggerName": "Juliette",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "7:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "3:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Karol",
							"lastName": "Blakenship",
							"baggerName": "Karol",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "8:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "4:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Ezra",
							"lastName": "Koenig",
							"baggerName": "Ezra",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "9:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "5:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Alex",
							"lastName": "Turner",
							"baggerName": "Alex",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "9:30a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Leona",
							"lastName": "Hoffman",
							"baggerName": "Leona",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Kanye",
							"lastName": "West",
							"baggerName": "Kanye",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Metroid",
							"lastName": "Crawl",
							"baggerName": "Metroid",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "3:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "11:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Diane",
							"lastName": "Garza",
							"baggerName": "Diane",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "3:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Jesse",
							"lastName": "Keeler",
							"baggerName": "Jesse",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "12:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Preston",
							"lastName": "Clark",
							"baggerName": "Preston",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "12:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Sauna",
							"lastName": "Campbell",
							"baggerName": "Sauna",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "6:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "2:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Mike",
							"lastName": "Kerr",
							"baggerName": "Mike",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "9:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "5:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Garfield",
							"lastName": "Acosta",
							"baggerName": "Garfield",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "11:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "7:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Josh",
							"lastName": "Homme",
							"baggerName": "Josh",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "9:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "1:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Chris",
							"lastName": "Baio",
							"baggerName": "Chris",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "1:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Alex",
							"lastName": "Kapranos",
							"baggerName": "Alex",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "4:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "9:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Tyler",
							"lastName": "Okonma",
							"baggerName": "Tyler",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Daniel",
							"lastName": "Kessler",
							"baggerName": "Daniel",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "5:00a",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "1:00p",
							"isEditable": false
						},
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
                        "name": {
							"firstName": "Samuel",
							"lastName": "Fogerino",
							"baggerName": "Samuel",
							"isEditable": false
						},
                        "shiftStart": {
							"time": "2:00p",
							"isEditable": false
						},
						"shiftEnd": {
							"time": "10:00p",
							"isEditable": false
						},
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