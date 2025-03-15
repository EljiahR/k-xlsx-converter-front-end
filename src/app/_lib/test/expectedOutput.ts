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
                            "editable": false
                        },
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
                        "name": {
                            "firstName": "Archie",
                            "lastName": "Austin",
                            "baggerName": "Archie",
                            "editable": false
                        },
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
                        "name": {
                            "firstName": "Eliza",
                            "lastName": "England",
                            "baggerName": "Eliza",
                            "editable": false
                        },
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
                        "name": {
                            "firstName": "Valeria",
                            "lastName": "Morales",
                            "baggerName": "Valeria",
                            "editable": false
                        },
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
                        "name": {
                            "firstName": "Hugh",
                            "lastName": "Stevens",
                            "baggerName": "Hugh",
                            "editable": false
                        },
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
                        "name": {
							"firstName": "Janet",
							"lastName": "Peterson",
							"baggerName": "Janet",
							"editable": false
						},
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
                        "name": {
							"firstName": "Jude",
							"lastName": "Lazano",
							"baggerName": "Jude",
							"editable": false
						},
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
                        "name": {
							"firstName": "Hollie",
							"lastName": "McKenzie",
							"baggerName": "Hollie",
							"editable": false
						},
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
                        "name": {
							"firstName": "Garreth",
							"lastName": "Kemp",
							"baggerName": "Garreth",
							"editable": false
						},
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
                        "name": {
							"firstName": "Lucia",
							"lastName": "McCana",
							"baggerName": "Lucia",
							"editable": false
						},
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
                        "name": {
							"firstName": "Adal",
							"lastName": "Mack",
							"baggerName": "Adal",
							"editable": false
						},
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
                        "name": {
							"firstName": "Jesse",
							"lastName": "Perry",
							"baggerName": "Jesse",
							"editable": false
						},
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
                        "name": {
							"firstName": "Maariah",
							"lastName": "Everett",
							"baggerName": "Maariah",
							"editable": false
						},
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
                        "name": {
							"firstName": "Uzair",
							"lastName": "Olsen",
							"baggerName": "Uzair",
							"editable": false
						},
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
                        "name": {
							"firstName": "Walter",
							"lastName": "Boyer",
							"baggerName": "Walter",
							"editable": false
						},
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
                        "name": {
							"firstName": "Natasha",
							"lastName": "Maldonado",
							"baggerName": "Natasha",
							"editable": false
						},
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
                        "name": {
							"firstName": "Jack",
							"lastName": "Nicholson",
							"baggerName": "Jack",
							"editable": false
						},
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
                        "name": {
							"firstName": "Victoria",
							"lastName": "Beckham",
							"baggerName": "Victoria",
							"editable": false
						},
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
                        "name": {
							"firstName": "Wolfgang",
							"lastName": "Puck",
							"baggerName": "Wolfgang",
							"editable": false
						},
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
                        "name": {
							"firstName": "Kenny",
							"lastName": "Palmer",
							"baggerName": "Kenny",
							"editable": false
						},
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
                        "name": {
							"firstName": "Raheem",
							"lastName": "Rosales",
							"baggerName": "Raheem",
							"editable": false
						},
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
                        "name": {
							"firstName": "Josh",
							"lastName": "Homme",
							"baggerName": "Josh",
							"editable": false
						},
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
                        "name": {
							"firstName": "Aneesa",
							"lastName": "Roach",
							"baggerName": "Aneesa",
							"editable": false
						},
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
                        "name": {
							"firstName": "Juliette",
							"lastName": "Bean",
							"baggerName": "Juliette",
							"editable": false
						},
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
                        "name": {
							"firstName": "Sadie",
							"lastName": "Gregory",
							"baggerName": "Sadie",
							"editable": false
						},
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
                        "name": {
							"firstName": "Abletonen",
							"lastName": "Williams",
							"baggerName": "Abletonen",
							"editable": false
						},
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
                        "name": {
							"firstName": "Karol",
							"lastName": "Blakenship",
							"baggerName": "Karol",
							"editable": false
						},
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
                        "name": {
							"firstName": "Mayer",
							"lastName": "Howel",
							"baggerName": "Mayer",
							"editable": false
						},
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
                        "name": {
							"firstName": "Leonardo",
							"lastName": "Hoffman",
							"baggerName": "Leonardo",
							"editable": false
						},
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
                        "name": {
							"firstName": "Maximus",
							"lastName": "Johns",
							"baggerName": "Maximus",
							"editable": false
						},
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
                        "name": {
							"firstName": "Metroid",
							"lastName": "Crawl",
							"baggerName": "Metroid",
							"editable": false
						},
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
                        "name": {
							"firstName": "Diane",
							"lastName": "Garza",
							"baggerName": "Diane",
							"editable": false
						},
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
                        "name": {
							"firstName": "Elissameth",
							"lastName": "Zimmerman",
							"baggerName": "Elissameth",
							"editable": false
						},
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
                        "name": {
							"firstName": "Preston",
							"lastName": "Clark",
							"baggerName": "Preston",
							"editable": false
						},
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
                        "name": {
							"firstName": "Tyler",
							"lastName": "Okonma",
							"baggerName": "Tyler",
							"editable": false
						},
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
                        "name": {
							"firstName": "Garfield",
							"lastName": "Acosta",
							"baggerName": "Garfield",
							"editable": false
						},
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
                        "name": {
							"firstName": "Ophelia",
							"lastName": "Oneill",
							"baggerName": "Ophelia",
							"editable": false
						},
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
                        "name": {
							"firstName": "Paul",
							"lastName": "Banks",
							"baggerName": "Paul",
							"editable": false
						},
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
                        "name": {
							"firstName": "Sauna",
							"lastName": "Campbell",
							"baggerName": "Sauna",
							"editable": false
						},
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
                        "name": {
							"firstName": "Daniel",
							"lastName": "Kessler",
							"baggerName": "Daniel",
							"editable": false
						},
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
                        "name": {
							"firstName": "Samuel",
							"lastName": "Fogerino",
							"baggerName": "Samuel",
							"editable": false
						},
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
                        "name": {
							"firstName": "Rohan",
							"lastName": "Beltran",
							"baggerName": "Rohan",
							"editable": false
						},
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
                        "name": {
							"firstName": "Valeria",
							"lastName": "Morales",
							"baggerName": "Valeria",
							"editable": false
						},
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
                        "name": {
							"firstName": "Dean",
							"lastName": "Fertita",
							"baggerName": "Dean",
							"editable": false
						},
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
                        "name": {
							"firstName": "Sebastian",
							"lastName": "Grainger",
							"baggerName": "Sebastian",
							"editable": false
						},
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
                        "name": {
							"firstName": "Hollie",
							"lastName": "McKenzie",
							"baggerName": "Hollie",
							"editable": false
						},
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
                        "name": {
							"firstName": "Hugh",
							"lastName": "Stevens",
							"baggerName": "Hugh",
							"editable": false
						},
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
                        "name": {
							"firstName": "John",
							"lastName": "Theodore",
							"baggerName": "John",
							"editable": false
						},
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
                        "name": {
							"firstName": "Alfredo",
							"lastName": "Hernandez",
							"baggerName": "Alfredo",
							"editable": false
						},
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
                        "name": {
							"firstName": "Raheem",
							"lastName": "Rosales",
							"baggerName": "Raheem",
							"editable": false
						},
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
                        "name": {
							"firstName": "Nick",
							"lastName": "Oliveri",
							"baggerName": "Nick",
							"editable": false
						},
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
                        "name": {
							"firstName": "Mark",
							"lastName": "Lanegan",
							"baggerName": "Mark",
							"editable": false
						},
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
                        "name": {
							"firstName": "Gene",
							"lastName": "Trautmann",
							"baggerName": "Gene",
							"editable": false
						},
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
                        "name": {
							"firstName": "Dave",
							"lastName": "Grohl",
							"baggerName": "Dave",
							"editable": false
						},
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
                        "name": {
							"firstName": "Joey",
							"lastName": "Castillo",
							"baggerName": "Joey",
							"editable": false
						},
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
                        "name": {
							"firstName": "Jesse",
							"lastName": "Perry",
							"baggerName": "Jesse",
							"editable": false
						},
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
                        "name": {
							"firstName": "Alain",
							"lastName": "Mociulski",
							"baggerName": "Alain",
							"editable": false
						},
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
                        "name": {
							"firstName": "Diane",
							"lastName": "Craig",
							"baggerName": "Diane C",
							"editable": false
						},
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
                        "name": {
							"firstName": "Juliette",
							"lastName": "Bean",
							"baggerName": "Juliette",
							"editable": false
						},
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
                        "name": {
							"firstName": "Natasha",
							"lastName": "Shneider",
							"baggerName": "Natasha",
							"editable": false
						},
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
                        "name": {
							"firstName": "Donald",
							"lastName": "Glover",
							"baggerName": "Donald",
							"editable": false
						},
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
                        "name": {
							"firstName": "Kanye",
							"lastName": "West",
							"baggerName": "Kanye",
							"editable": false
						},
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
                        "name": {
							"firstName": "Metroid",
							"lastName": "Crawl",
							"baggerName": "Metroid",
							"editable": false
						},
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
                        "name": {
							"firstName": "Diane",
							"lastName": "Garza",
							"baggerName": "Diane G",
							"editable": false
						},
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
                        "name": {
							"firstName": "Able",
							"lastName": "Williams",
							"baggerName": "Able",
							"editable": false
						},
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
                        "name": {
							"firstName": "Alex",
							"lastName": "Turner",
							"baggerName": "Alex",
							"editable": false
						},
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
                        "name": {
							"firstName": "Jesse",
							"lastName": "Keeler",
							"baggerName": "Jesse",
							"editable": false
						},
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
                        "name": {
							"firstName": "Preston",
							"lastName": "Clark",
							"baggerName": "Preston",
							"editable": false
						},
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
                        "name": {
							"firstName": "Tyler",
							"lastName": "Okonma",
							"baggerName": "Tyler",
							"editable": false
						},
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
                        "name": {
							"firstName": "Paul",
							"lastName": "Banks",
							"baggerName": "Paul",
							"editable": false
						},
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
                        "name": {
							"firstName": "Mike",
							"lastName": "Kerr",
							"baggerName": "Mike",
							"editable": false
						},
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
                        "name": {
							"firstName": "Garfield",
							"lastName": "Acosta",
							"baggerName": "Garfield",
							"editable": false
						},
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
                        "name": {
							"firstName": "Sauna",
							"lastName": "Campbell",
							"baggerName": "Sauna",
							"editable": false
						},
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
                        "name": {
							"firstName": "Matt",
							"lastName": "Helders",
							"baggerName": "Matt",
							"editable": false
						},
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
                        "name": {
							"firstName": "Ben",
							"lastName": "Thatcher",
							"baggerName": "Ben",
							"editable": false
						},
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
                        "name": {
							"firstName": "Elliott",
							"lastName": "Smith",
							"baggerName": "Elliott",
							"editable": false
						},
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
                        "name": {
							"firstName": "Franz",
							"lastName": "Ferdinand",
							"baggerName": "Franz",
							"editable": false
						},
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
                        "name": {
							"firstName": "Alex",
							"lastName": "Kapranos",
							"baggerName": "Alex",
							"editable": false
						},
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
                        "name": {
							"firstName": "Rohan",
							"lastName": "Beltran",
							"baggerName": "Rohan",
							"editable": false
						},
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
                        "name": {
							"firstName": "Archie",
							"lastName": "Austin",
							"baggerName": "Archie",
							"editable": false
						},
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
                        "name": {
							"firstName": "Valeria",
							"lastName": "Morales",
							"baggerName": "Valeria",
							"editable": false
						},
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
                        "name": {
							"firstName": "Dean",
							"lastName": "Fertita",
							"baggerName": "Dean",
							"editable": false
						},
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
                        "name": {
							"firstName": "Hollie",
							"lastName": "McKenzie",
							"baggerName": "Hollie",
							"editable": false
						},
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
                        "name": {
							"firstName": "Garreth",
							"lastName": "Kemp",
							"baggerName": "Garreth",
							"editable": false
						},
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
                        "name": {
							"firstName": "Hugh",
							"lastName": "Stevens",
							"baggerName": "Hugh",
							"editable": false
						},
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
                        "name": {
							"firstName": "Dave",
							"lastName": "Grohl",
							"baggerName": "Dave",
							"editable": false
						},
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
                        "name": {
							"firstName": "Wolfgang",
							"lastName": "Puck",
							"baggerName": "Wolfgang",
							"editable": false
						},
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
                        "name": {
							"firstName": "Maariah",
							"lastName": "Everett",
							"baggerName": "Maariah",
							"editable": false
						},
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
                        "name": {
							"firstName": "Jesse",
							"lastName": "Perry",
							"baggerName": "Jesse",
							"editable": false
						},
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
                        "name": {
							"firstName": "Alain",
							"lastName": "Mociulski",
							"baggerName": "Alain",
							"editable": false
						},
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
                        "name": {
							"firstName": "Diane",
							"lastName": "Craig",
							"baggerName": "Diane",
							"editable": false
						},
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
                        "name": {
							"firstName": "Bob",
							"lastName": "Hardy",
							"baggerName": "Bob",
							"editable": false
						},
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
                        "name": {
							"firstName": "Natasha",
							"lastName": "Shneider",
							"baggerName": "Natasha",
							"editable": false
						},
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
                        "name": {
							"firstName": "Leona",
							"lastName": "Hoffman",
							"baggerName": "Leona",
							"editable": false
						},
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
                        "name": {
							"firstName": "Kanye",
							"lastName": "West",
							"baggerName": "Kanye",
							"editable": false
						},
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
                        "name": {
							"firstName": "Metroid",
							"lastName": "Crawl",
							"baggerName": "Metroid",
							"editable": false
						},
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
                        "name": {
							"firstName": "Alex",
							"lastName": "Turner",
							"baggerName": "Alex",
							"editable": false
						},
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
                        "name": {
							"firstName": "Jesse",
							"lastName": "Keeler",
							"baggerName": "Jesse",
							"editable": false
						},
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
                        "name": {
							"firstName": "Zach",
							"lastName": "Rocha",
							"baggerName": "Zach",
							"editable": false
						},
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
                        "name": {
							"firstName": "Paul",
							"lastName": "Banks",
							"baggerName": "Paul",
							"editable": false
						},
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
                        "name": {
							"firstName": "Ophelia",
							"lastName": "Oneill",
							"baggerName": "Ophelia",
							"editable": false
						},
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
                        "name": {
							"firstName": "Matt",
							"lastName": "Helders",
							"baggerName": "Matt",
							"editable": false
						},
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
                        "name": {
							"firstName": "Mike",
							"lastName": "Kerr",
							"baggerName": "Mike",
							"editable": false
						},
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
                        "name": {
							"firstName": "Ben",
							"lastName": "Thatcher",
							"baggerName": "Ben",
							"editable": false
						},
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
                        "name": {
							"firstName": "Tyler",
							"lastName": "Okonma",
							"baggerName": "Tyler",
							"editable": false
						},
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
                        "name": {
							"firstName": "Michael",
							"lastName": "Balzary",
							"baggerName": "Michael",
							"editable": false
						},
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
                        "name": {
							"firstName": "Franz",
							"lastName": "Ferdinand",
							"baggerName": "Franz",
							"editable": false
						},
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
                        "name": {
							"firstName": "Josh",
							"lastName": "Homme",
							"baggerName": "Josh",
							"editable": false
						},
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
                        "name": {
							"firstName": "Alex",
							"lastName": "Kapranos",
							"baggerName": "Alex",
							"editable": false
						},
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
                        "name": {
							"firstName": "Archie",
							"lastName": "Austin",
							"baggerName": "Archie",
							"editable": false
						},
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
                        "name": {
							"firstName": "Sara",
							"lastName": "Hayer",
							"baggerName": "Sara",
							"editable": false
						},
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
                        "name": {
							"firstName": "Hugh",
							"lastName": "Stevens",
							"baggerName": "Hugh",
							"editable": false
						},
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
                        "name": {
							"firstName": "Adal",
							"lastName": "Mack",
							"baggerName": "Adal",
							"editable": false
						},
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
                        "name": {
							"firstName": "Hollie",
							"lastName": "McKenzie",
							"baggerName": "Hollie",
							"editable": false
						},
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
                        "name": {
							"firstName": "Chad",
							"lastName": "Smith",
							"baggerName": "Chad",
							"editable": false
						},
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
                        "name": {
							"firstName": "John",
							"lastName": "Theodore",
							"baggerName": "John",
							"editable": false
						},
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
                        "name": {
							"firstName": "Alfredo",
							"lastName": "Hernandez",
							"baggerName": "Alfredo",
							"editable": false
						},
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
                        "name": {
							"firstName": "Wolfgang",
							"lastName": "Puck",
							"baggerName": "Wolfgang",
							"editable": false
						},
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
                        "name": {
							"firstName": "Victoria",
							"lastName": "Beckham",
							"baggerName": "Victoria",
							"editable": false
						},
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
                        "name": {
							"firstName": "Gene",
							"lastName": "Trautmann",
							"baggerName": "Gene",
							"editable": false
						},
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
                        "name": {
							"firstName": "Kenny",
							"lastName": "Palmer",
							"baggerName": "Kenny",
							"editable": false
						},
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
                        "name": {
							"firstName": "Aneesa",
							"lastName": "Roach",
							"baggerName": "Aneesa",
							"editable": false
						},
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
                        "name": {
							"firstName": "Alain",
							"lastName": "Mociulski",
							"baggerName": "Alain",
							"editable": false
						},
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
                        "name": {
							"firstName": "Natasha",
							"lastName": "Shneider",
							"baggerName": "Natasha",
							"editable": false
						},
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
                        "name": {
							"firstName": "Donald",
							"lastName": "Glover",
							"baggerName": "Donald",
							"editable": false
						},
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
                        "name": {
							"firstName": "Diane",
							"lastName": "Craig",
							"baggerName": "Diane C",
							"editable": false
						},
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
                        "name": {
							"firstName": "Leona",
							"lastName": "Hoffman",
							"baggerName": "Leona",
							"editable": false
						},
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
                        "name": {
							"firstName": "Diane",
							"lastName": "Garza",
							"baggerName": "Diane G",
							"editable": false
						},
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
                        "name": {
							"firstName": "Able",
							"lastName": "Williams",
							"baggerName": "Able",
							"editable": false
						},
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
                        "name": {
							"firstName": "Ezra",
							"lastName": "Koenig",
							"baggerName": "Ezra",
							"editable": false
						},
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
                        "name": {
							"firstName": "Jesse",
							"lastName": "Keeler",
							"baggerName": "Jesse",
							"editable": false
						},
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
                        "name": {
							"firstName": "Preston",
							"lastName": "Clark",
							"baggerName": "Preston",
							"editable": false
						},
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
                        "name": {
							"firstName": "Paul",
							"lastName": "Banks",
							"baggerName": "Paul",
							"editable": false
						},
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
                        "name": {
							"firstName": "Garfield",
							"lastName": "Acosta",
							"baggerName": "Garfield",
							"editable": false
						},
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
                        "name": {
							"firstName": "Chris",
							"lastName": "Baio",
							"baggerName": "Chris",
							"editable": false
						},
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
                        "name": {
							"firstName": "Mike",
							"lastName": "Kerr",
							"baggerName": "Mike",
							"editable": false
						},
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
                        "name": {
							"firstName": "Matt",
							"lastName": "Helders",
							"baggerName": "Matt",
							"editable": false
						},
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
                        "name": {
							"firstName": "Daniel",
							"lastName": "Kessler",
							"baggerName": "Daniel",
							"editable": false
						},
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
                        "name": {
							"firstName": "Samuel",
							"lastName": "Fogerino",
							"baggerName": "Samuel",
							"editable": false
						},
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
                        "name": {
							"firstName": "Michael",
							"lastName": "Balzary",
							"baggerName": "Michael",
							"editable": false
						},
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
                        "name": {
							"firstName": "Elliott",
							"lastName": "Smith",
							"baggerName": "Elliott",
							"editable": false
						},
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
                        "name": {
							"firstName": "Josh",
							"lastName": "Homme",
							"baggerName": "Josh",
							"editable": false
						},
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
                        "name": {
							"firstName": "Rohan",
							"lastName": "Beltran",
							"baggerName": "Rohan",
							"editable": false
						},
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
                        "name": {
							"firstName": "Archie",
							"lastName": "Austin",
							"baggerName": "Archie",
							"editable": false
						},
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
                        "name": {
							"firstName": "Valeria",
							"lastName": "Morales",
							"baggerName": "Valeria",
							"editable": false
						},
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
                        "name": {
							"firstName": "Dean",
							"lastName": "Fertita",
							"baggerName": "Dean",
							"editable": false
						},
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
                        "name": {
							"firstName": "Justin",
							"lastName": "Trudeau",
							"baggerName": "Justin",
							"editable": false
						},
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
                        "name": {
							"firstName": "Adal",
							"lastName": "Mack",
							"baggerName": "Adal",
							"editable": false
						},
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
                        "name": {
							"firstName": "Hollie",
							"lastName": "McKenzie",
							"baggerName": "Hollie",
							"editable": false
						},
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
                        "name": {
							"firstName": "John",
							"lastName": "Theodore",
							"baggerName": "John",
							"editable": false
						},
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
                        "name": {
							"firstName": "Alfredo",
							"lastName": "Hernandez",
							"baggerName": "Alfredo",
							"editable": false
						},
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
                        "name": {
							"firstName": "Nick",
							"lastName": "Oliveri",
							"baggerName": "Nick",
							"editable": false
						},
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
                        "name": {
							"firstName": "Maariah",
							"lastName": "Everett",
							"baggerName": "Maariah",
							"editable": false
						},
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
                        "name": {
							"firstName": "Gene",
							"lastName": "Trautmann",
							"baggerName": "Gene",
							"editable": false
						},
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
                        "name": {
							"firstName": "Troy",
							"lastName": "Harvey",
							"baggerName": "Troy",
							"editable": false
						},
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
                        "name": {
							"firstName": "Jesse",
							"lastName": "Perry",
							"baggerName": "Jesse",
							"editable": false
						},
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
                        "name": {
							"firstName": "Aneesa",
							"lastName": "Roach",
							"baggerName": "Aneesa",
							"editable": false
						},
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
                        "name": {
							"firstName": "Diane",
							"lastName": "Craig",
							"baggerName": "Diane",
							"editable": false
						},
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
                        "name": {
							"firstName": "Bob",
							"lastName": "Hardy",
							"baggerName": "Bob",
							"editable": false
						},
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
                        "name": {
							"firstName": "Donald",
							"lastName": "Glover",
							"baggerName": "Donald",
							"editable": false
						},
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
                        "name": {
							"firstName": "Natasha",
							"lastName": "Shneider",
							"baggerName": "Natasha",
							"editable": false
						},
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
                        "name": {
							"firstName": "Maximus",
							"lastName": "Johns",
							"baggerName": "Maximus",
							"editable": false
						},
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
                        "name": {
							"firstName": "Kanye",
							"lastName": "West",
							"baggerName": "Kanye",
							"editable": false
						},
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
                        "name": {
							"firstName": "Metroid",
							"lastName": "Crawl",
							"baggerName": "Metroid",
							"editable": false
						},
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
                        "name": {
							"firstName": "Alex",
							"lastName": "Turner",
							"baggerName": "Alex",
							"editable": false
						},
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
                        "name": {
							"firstName": "Jesse",
							"lastName": "Keeler",
							"baggerName": "Jesse",
							"editable": false
						},
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
                        "name": {
							"firstName": "Paul",
							"lastName": "Banks",
							"baggerName": "Paul",
							"editable": false
						},
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
                        "name": {
							"firstName": "Mike",
							"lastName": "Kerr",
							"baggerName": "Mike",
							"editable": false
						},
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
                        "name": {
							"firstName": "Ophelia",
							"lastName": "Oneill",
							"baggerName": "Ophelia",
							"editable": false
						},
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
                        "name": {
							"firstName": "Matt",
							"lastName": "Helders",
							"baggerName": "Matt",
							"editable": false
						},
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
                        "name": {
							"firstName": "Zach",
							"lastName": "Rocha",
							"baggerName": "Zach",
							"editable": false
						},
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
                        "name": {
							"firstName": "Daniel",
							"lastName": "Kessler",
							"baggerName": "Daniel",
							"editable": false
						},
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
                        "name": {
							"firstName": "Ben",
							"lastName": "Thatcher",
							"baggerName": "Ben",
							"editable": false
						},
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
                        "name": {
							"firstName": "Michael",
							"lastName": "Balzary",
							"baggerName": "Michael",
							"editable": false
						},
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
                        "name": {
							"firstName": "Elliott",
							"lastName": "Smith",
							"baggerName": "Elliott",
							"editable": false
						},
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
                        "name": {
							"firstName": "Franz",
							"lastName": "Ferdinand",
							"baggerName": "Franz",
							"editable": false
						},
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
                        "name": {
							"firstName": "Archie",
							"lastName": "Austin",
							"baggerName": "Archie",
							"editable": false
						},
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
                        "name": {
							"firstName": "Sara",
							"lastName": "Hayer",
							"baggerName": "Sara",
							"editable": false
						},
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
                        "name": {
							"firstName": "Dean",
							"lastName": "Fertita",
							"baggerName": "Dean",
							"editable": false
						},
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
                        "name": {
							"firstName": "Alfredo",
							"lastName": "Hernandez",
							"baggerName": "Alfredo",
							"editable": false
						},
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
                        "name": {
							"firstName": "Jude",
							"lastName": "Lazano",
							"baggerName": "Jude",
							"editable": false
						},
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
                        "name": {
							"firstName": "Dave",
							"lastName": "Grohl",
							"baggerName": "Dave",
							"editable": false
						},
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
                        "name": {
							"firstName": "Garreth",
							"lastName": "Kemp",
							"baggerName": "Garreth",
							"editable": false
						},
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
                        "name": {
							"firstName": "Hugh",
							"lastName": "Stevens",
							"baggerName": "Hugh",
							"editable": false
						},
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
                        "name": {
							"firstName": "John",
							"lastName": "Theodore",
							"baggerName": "John",
							"editable": false
						},
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
                        "name": {
							"firstName": "Wolfgang",
							"lastName": "Puck",
							"baggerName": "Wolfgang",
							"editable": false
						},
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
                        "name": {
							"firstName": "Victoria",
							"lastName": "Beckham",
							"baggerName": "Victoria",
							"editable": false
						},
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
                        "name": {
							"firstName": "John",
							"lastName": "Halo",
							"baggerName": "John",
							"editable": false
						},
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
                        "name": {
							"firstName": "Kenny",
							"lastName": "Palmer",
							"baggerName": "Kenny",
							"editable": false
						},
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
                        "name": {
							"firstName": "Aneesa",
							"lastName": "Roach",
							"baggerName": "Aneesa",
							"editable": false
						},
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
                        "name": {
							"firstName": "Juliette",
							"lastName": "Bean",
							"baggerName": "Juliette",
							"editable": false
						},
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
                        "name": {
							"firstName": "Bob",
							"lastName": "Hardy",
							"baggerName": "Bob",
							"editable": false
						},
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
                        "name": {
							"firstName": "Leona",
							"lastName": "Hoffman",
							"baggerName": "Leona",
							"editable": false
						},
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
                        "name": {
							"firstName": "Donald",
							"lastName": "Glover",
							"baggerName": "Donald",
							"editable": false
						},
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
                        "name": {
							"firstName": "Natasha",
							"lastName": "Shneider",
							"baggerName": "Natasha",
							"editable": false
						},
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
                        "name": {
							"firstName": "Maximus",
							"lastName": "Johns",
							"baggerName": "Maximus",
							"editable": false
						},
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
                        "name": {
							"firstName": "Kanye",
							"lastName": "West",
							"baggerName": "Kanye",
							"editable": false
						},
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
                        "name": {
							"firstName": "Diane",
							"lastName": "Garza",
							"baggerName": "Diane",
							"editable": false
						},
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
                        "name": {
							"firstName": "Able",
							"lastName": "Williams",
							"baggerName": "Able",
							"editable": false
						},
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
                        "name": {
							"firstName": "Mayer",
							"lastName": "Howel",
							"baggerName": "Mayer",
							"editable": false
						},
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
                        "name": {
							"firstName": "Preston",
							"lastName": "Clark",
							"baggerName": "Preston",
							"editable": false
						},
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
                        "name": {
							"firstName": "Sauna",
							"lastName": "Campbell",
							"baggerName": "Sauna",
							"editable": false
						},
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
                        "name": {
							"firstName": "Ophelia",
							"lastName": "Oneill",
							"baggerName": "Ophelia",
							"editable": false
						},
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
                        "name": {
							"firstName": "Garfield",
							"lastName": "Acosta",
							"baggerName": "Garfield",
							"editable": false
						},
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
                        "name": {
							"firstName": "Chris",
							"lastName": "Baio",
							"baggerName": "Chris",
							"editable": false
						},
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
                        "name": {
							"firstName": "Paul",
							"lastName": "Banks",
							"baggerName": "Paul",
							"editable": false
						},
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
                        "name": {
							"firstName": "Tyler",
							"lastName": "Okonma",
							"baggerName": "Tyler",
							"editable": false
						},
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
                        "name": {
							"firstName": "Daniel",
							"lastName": "Kessler",
							"baggerName": "Daniel",
							"editable": false
						},
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
                        "name": {
							"firstName": "Samuel",
							"lastName": "Fogerino",
							"baggerName": "Samuel",
							"editable": false
						},
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
                        "name": {
							"firstName": "Michael",
							"lastName": "Balzary",
							"baggerName": "Michael",
							"editable": false
						},
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
                        "name": {
							"firstName": "Franz",
							"lastName": "Ferdinand",
							"baggerName": "Franz",
							"editable": false
						},
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
                        "name": {
							"firstName": "Elliott",
							"lastName": "Smith",
							"baggerName": "Elliott",
							"editable": false
						},
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
                        "name": {
							"firstName": "Josh",
							"lastName": "Homme",
							"baggerName": "Josh",
							"editable": false
						},
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
                        "name": {
							"firstName": "Sara",
							"lastName": "Hayer",
							"baggerName": "Sara",
							"editable": false
						},
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
                        "name": {
							"firstName": "Valeria",
							"lastName": "Morales",
							"baggerName": "Valeria",
							"editable": false
						},
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
                        "name": {
							"firstName": "Dean",
							"lastName": "Fertita",
							"baggerName": "Dean",
							"editable": false
						},
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
                        "name": {
							"firstName": "Nick",
							"lastName": "Oliveri",
							"baggerName": "Nick",
							"editable": false
						},
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
                        "name": {
							"firstName": "Janet",
							"lastName": "Peterson",
							"baggerName": "Janet",
							"editable": false
						},
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
                        "name": {
							"firstName": "Jude",
							"lastName": "Lazano",
							"baggerName": "Jude",
							"editable": false
						},
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
                        "name": {
							"firstName": "Hollie",
							"lastName": "McKenzie",
							"baggerName": "Hollie",
							"editable": false
						},
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
                        "name": {
							"firstName": "John",
							"lastName": "Theodore",
							"baggerName": "John",
							"editable": false
						},
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
                        "name": {
							"firstName": "Mark",
							"lastName": "Lanegan",
							"baggerName": "Mark",
							"editable": false
						},
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
                        "name": {
							"firstName": "Gene",
							"lastName": "Trautmann",
							"baggerName": "Gene",
							"editable": false
						},
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
                        "name": {
							"firstName": "Alfredo",
							"lastName": "Hernandez",
							"baggerName": "Alfredo",
							"editable": false
						},
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
                        "name": {
							"firstName": "John",
							"lastName": "Halo",
							"baggerName": "John",
							"editable": false
						},
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
                        "name": {
							"firstName": "Victoria",
							"lastName": "Beckham",
							"baggerName": "Victoria",
							"editable": false
						},
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
                        "name": {
							"firstName": "Joey",
							"lastName": "Castillo",
							"baggerName": "Joey",
							"editable": false
						},
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
                        "name": {
							"firstName": "Walter",
							"lastName": "Boyer",
							"baggerName": "Walter",
							"editable": false
						},
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
                        "name": {
							"firstName": "Aneesa",
							"lastName": "Roach",
							"baggerName": "Aneesa",
							"editable": false
						},
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
                        "name": {
							"firstName": "Juliette",
							"lastName": "Bean",
							"baggerName": "Juliette",
							"editable": false
						},
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
                        "name": {
							"firstName": "Karol",
							"lastName": "Blakenship",
							"baggerName": "Karol",
							"editable": false
						},
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
                        "name": {
							"firstName": "Ezra",
							"lastName": "Koenig",
							"baggerName": "Ezra",
							"editable": false
						},
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
                        "name": {
							"firstName": "Alex",
							"lastName": "Turner",
							"baggerName": "Alex",
							"editable": false
						},
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
                        "name": {
							"firstName": "Leona",
							"lastName": "Hoffman",
							"baggerName": "Leona",
							"editable": false
						},
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
                        "name": {
							"firstName": "Kanye",
							"lastName": "West",
							"baggerName": "Kanye",
							"editable": false
						},
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
                        "name": {
							"firstName": "Metroid",
							"lastName": "Crawl",
							"baggerName": "Metroid",
							"editable": false
						},
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
                        "name": {
							"firstName": "Diane",
							"lastName": "Garza",
							"baggerName": "Diane",
							"editable": false
						},
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
                        "name": {
							"firstName": "Jesse",
							"lastName": "Keeler",
							"baggerName": "Jesse",
							"editable": false
						},
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
                        "name": {
							"firstName": "Preston",
							"lastName": "Clark",
							"baggerName": "Preston",
							"editable": false
						},
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
                        "name": {
							"firstName": "Sauna",
							"lastName": "Campbell",
							"baggerName": "Sauna",
							"editable": false
						},
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
                        "name": {
							"firstName": "Mike",
							"lastName": "Kerr",
							"baggerName": "Mike",
							"editable": false
						},
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
                        "name": {
							"firstName": "Garfield",
							"lastName": "Acosta",
							"baggerName": "Garfield",
							"editable": false
						},
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
                        "name": {
							"firstName": "Josh",
							"lastName": "Homme",
							"baggerName": "Josh",
							"editable": false
						},
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
                        "name": {
							"firstName": "Chris",
							"lastName": "Baio",
							"baggerName": "Chris",
							"editable": false
						},
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
                        "name": {
							"firstName": "Alex",
							"lastName": "Kapranos",
							"baggerName": "Alex",
							"editable": false
						},
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
                        "name": {
							"firstName": "Tyler",
							"lastName": "Okonma",
							"baggerName": "Tyler",
							"editable": false
						},
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
                        "name": {
							"firstName": "Daniel",
							"lastName": "Kessler",
							"baggerName": "Daniel",
							"editable": false
						},
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
                        "name": {
							"firstName": "Samuel",
							"lastName": "Fogerino",
							"baggerName": "Samuel",
							"editable": false
						},
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