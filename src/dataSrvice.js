
export function getFormData() {
	const promise = new Promise((resolve, reject) => {
		resolve(data)
	})
	return promise
}

const data = [
  {
    "type": "group",
    "title": "Personal Information",
    "style": "category",
    "items": [
      {
        "type": "group",
        "style": "inline",
        "items": [
          {
            "type": "field",
            "title": "Forename",
            "dataKey": "forname",
            "dataType": "text",
            "autofill": "given-name"
          },
          {
            "type": "field",
            "title": "Surname",
            "dataKey": "surname",
            "dataType": "text",
            "autofill": "family-name"
          }
        ]
      },
      {
        "type": "field",
        "title": "Name in native alphabet",
        "dataKey": "custom-7c2k5hbc",
        "dataType": "text",
        "instructions": "Please enter your name in Chinese or Japanese if you have one.",
        "optional": true
      },
      {
        "type": "group",
        "style": "inline",
        "items": [
          {
            "type": "group",
            "style": "inline",
            "title": "Height",
            "items": [
              {
                "type": "field",
                "dataKey": "heightValue",
                "dataType": "number"
              },
              {
                "type": "field",
                "dataKey": "heightUnit",
                "dataType": "text",
                "select": "single",
                "options": ["Inches", "Centimeters"]
              }
            ]
          },
          {
            "type": "group",
            "style": "inline",
            "title": "Weight",
            "items": [
              {
                "type": "field",
                "dataKey": "weightValue",
                "dataType": "number"
              },
              {
                "type": "field",
                "dataKey": "weightUnit",
                "dataType": "text",
                "select": "single",
                "options": ["Pounds", "Kilograms"]
              }
            ]
          }
        ]
      },
      {
        "type": "field",
        "title": "Date of Birth",
        "dataType": "date",
        "dataKey": "birthdate",
        "autofill": "bday"
      },
      {
        "type": "field",
        "title": "Gender",
        "dataType": "text",
        "dataKey": "gender",
        "autofill": "sex"
      },
      {
        "type": "group",
        "title": "Contact Details",
        "style": "category",
        "items": [
          {
            "type": "group",
            "title": "Permanent address",
            "items": [
              {
                "type": "field",
                "title": "Street address",
                "dataKey": "permanentAddressStreet",
                "dataType": "text-multi-line",
                "autofill": "street-address"
              },
              {
                "type": "field",
                "title": "City / town",
                "dataKey": "permanentAddressLevel2",
                "autofill": "address-level2",
                "dataType": "text"
              },
              {
                "type": "field",
                "title": "State / province",
                "dataKey": "permanentAddressLevel1",
                "dataType": "text",
                "autofill": "address-level1"
              },
              {
                "type": "field",
                "title": "Postal code",
                "dataKey": "permanentAddressPostalCode",
                "dataType": "text",
                "autofill": "postal-code"
              },
              {
                "type": "field",
                "title": "Country",
                "dataKey": "permanentAddressCountry",
                "dataType": "text",
                "autofill": "country-name"
              }
            ]
          },
          {
            "type": "field",
            "dataType": "bool",
            "title": "Present address is the same as permanent address",
            "dataKey": "presentAddressSame"
          },
          {
            "type": "group",
            "title": "Present address",
            "conditional": {
              "type": "basic",
              "left": {
                "key": "presentAddressSame"
              },
              "operator": "=",
              "right": {
                "value": false
              }
            },
            "items": [
              {
                "type": "field",
                "title": "Street address",
                "dataKey": "presentAddressStreet",
                "dataType": "text-multi-line",
                "autofill": "street-address"
              },
              {
                "type": "field",
                "title": "City",
                "dataKey": "presentAddressLevel2",
                "dataType": "text",
                "autofill": "address-level2"
              },
              {
                "type": "field",
                "title": "State/Province",
                "dataKey": "presentAddressLevel1",
                "dataType": "text",
                "autofill": "address-level1"
              },
              {
                "type": "field",
                "title": "Postal Code",
                "dataKey": "presentAddressPostalCode",
                "dataType": "text",
                "autofill": "postal-code"
              },
              {
                "type": "field",
                "title": "Country",
                "dataKey": "presentAddressCountry",
                "dataType": "text",
                "autofill": "country-name"
              }
            ]
          },
          {
            "type": "field",
            "title": "Phone (Home)",
            "dataKey": "telephoneHome",
            "dataType": "telephone",
            "autofill": "home tel"
          },
          {
            "type": "field",
            "title": "Phone (Mobile)",
            "dataKey": "telephoneMobile",
            "dataType": "telephone",
            "autofill": "mobile tel"
          }
        ]
      }
    ]
  },
  {
    "type": "group",
    "title": "Documents",
    "style": "category",
    "items": [
      {
        "type": "list",
        "title": "Passport",
        "dataKey": "passport",
        "items": [
          {
            "type": "field",
            "title": "Country",
            "dataKey": "country",
            "dataType": "text"
          },
          {
            "type": "field",
            "title": "Issue Date",
            "dataKey": "issueDate",
            "dataType": "date"
          },
          {
            "type": "field",
            "title": "Expiry Date",
            "dataKey": "expiryDate",
            "dataType": "date"
          }
        ]
      },
      {
        "type": "list",
        "title": "ATPL License",
        "dataKey": "atpl",
        "items": [
          {
            "type": "field",
            "title": "Country",
            "dataKey": "country",
            "dataType": "text"
          },
          {
            "type": "field",
            "title": "Issue Date",
            "dataKey": "issueDate",
            "dataType": "date"
          },
          {
            "type": "field",
            "title": "Expires",
            "dataKey": "expires",
            "dataType": "bool"
          },
          {
            "type": "field",
            "title": "Expiry Date",
            "dataKey": "expiryDate",
            "dataType": "date",
            "conditional": {
              "left": {
                "key": "expires"
              },
              "operator": "==",
              "right": {
                "value": true
              }
            }
          },
          {
            "type": "field",
            "title": "Aircraft",
            "dataKey": "aircraft",
            "dataType": "text"
          }
        ]
      }
    ]
  },
  {
    "type": "group",
    "title": "Education",
    "style": "category",
    "items": [
      {
        "type": "list",
        "dataKey": "educationHistory",
        "items": [
          {
            "type": "field",
            "title": "Name of school",
            "dataType": "text",
            "dataKey": "schoolName"
          },
          {
            "type": "group",
            "title": "Address",
            "items": [
              {
                "type": "field",
                "title": "State/Province",
                "dataKey": "addressLevel1",
                "dataType": "text"
              },
              {
                "type": "field",
                "title": "Postal Code",
                "dataKey": "addressPostalCode",
                "dataType": "text"
              },
              {
                "type": "field",
                "title": "Country",
                "dataKey": "addressCountry",
                "dataType": "text"
              }
            ]
          },
          {
            "type": "field",
            "title": "Start date",
            "dataType": "date",
            "dataKey": "start"
          },
          {
            "type": "field",
            "title": "End date",
            "dataType": "date",
            "dataKey": "end"
          },
          {
            "type": "field",
            "title": "Specialities",
            "dataType": "text",
            "dataKey": "specialities"
          }
        ]
      }
    ]
  },
  {
    "type": "group",
    "style": "category",
    "title": "Employment",
    "items": [
      {
        "type": "list",
        "dataKey": "employmentHistory",
        "instructions": "Please enter each period of employment and each position separately.",
        "items": [
          {
            "type": "field",
            "dataType": "text",
            "dataKey": "employer",
            "title": "Name of employer"
          },
          {
            "type": "group",
            "title": "Employer address",
            "items": [
              {
                "type": "field",
                "title": "Street Address",
                "dataKey": "addressStreet",
                "dataType": "text-multi-line"
              },
              {
                "type": "field",
                "title": "City",
                "dataKey": "addressLevel2",
                "dataType": "text"
              },
              {
                "type": "field",
                "title": "State/Province",
                "dataKey": "addressLevel1",
                "dataType": "text"
              },
              {
                "type": "field",
                "title": "Postal Code",
                "dataKey": "addressPostalCode",
                "dataType": "text"
              },
              {
                "type": "field",
                "title": "Country",
                "dataKey": "addressCountry",
                "dataType": "text"
              }
            ]
          },
          {
            "type": "field",
            "title": "Phone",
            "dataKey": "telephone",
            "dataType": "telephone"
          },
          {
            "type": "field",
            "dataType": "text",
            "dataKey": "supervisor",
            "title": "Supervisor"
          },
          {
            "type": "field",
            "dataType": "date",
            "dataKey": "start",
            "title": "Start date"
          },
          {
            "type": "field",
            "dataType": "date",
            "dataKey": "end",
            "title": "End date"
          },
          {
            "type": "field",
            "dataType": "text",
            "size": "medium",
            "dataKey": "reasonForLeaving",
            "title": "Reason for leaving"
          },
          {
            "type": "group",
            "style": "inline",
            "title": "Salary",
            "items": [
              {
                "type": "field",
                "dataKey": "salaryValue",
                "dataType": "number"
              },
              {
                "type": "field",
                "dataKey": "salaryCurrency",
                "dataType": "text",
                "select": "single",
                "optionsType": "unit-currency"
              }
            ]
          }
        ]
      },
      {
        "type": "list",
        "dataKey": "unemploymentHistory",
        "instructions": "Please enter each period of unemployment greater than a calendar month.",
        "items": [
          {
            "type": "field",
            "dataType": "date",
            "dataKey": "start",
            "title": "Start date"
          },
          {
            "type": "field",
            "dataType": "date",
            "dataKey": "end",
            "title": "End date"
          },
          {
            "type": "field",
            "dataType": "text",
            "size": "medium",
            "dataKey": "reason",
            "title": "Reason"
          }
        ]
      },
      {
        "type": "field",
        "dataType": "text",
        "dataKey": "aviationEvents",
        "title": "Accidents/Incidents/ATC Violations"
      },
      {
        "type": "field",
        "dataType": "text",
        "select": "single",
        "dataKey": "criminalConviction",
        "prompt": "Have you ever been convicted of a criminal offense in a court of law?",
        "options": ["Yes", "No"]
      },
      {
        "type": "field",
        "dataType": "text",
        "dataKey": "criminalConvictionDetails",
        "prompt": "Please provide details",
        "conditional": {
          "left": {
            "key": "criminalConviction"
          },
          "operator": "==",
          "right": {
            "value": "Yes"
          }
        }
      },
      {
        "type": "field",
        "dataType": "text",
        "select": "single",
        "dataKey": "influenceConviction",
        "prompt": "Have you ever been convicted fo a violation of any statute for operating a vehicle under the influence of drugs or alcohol?",
        "options": ["Yes", "No"]
      },
      {
        "type": "field",
        "dataType": "text",
        "dataKey": "influenceConvictionDetails",
        "prompt": "Please provide details",
        "conditional": {
          "left": {
            "key": "influenceConviction"
          },
          "operator": "==",
          "right": {
            "value": "Yes"
          }
        }
      },
      {
        "type": "field",
        "dataType": "text",
        "select": "single",
        "dataKey": "custom-k52h77c",
        "prompt": "If you are currently employed, how are you planning to work for AJX?",
        "options": [
          "Resign from current position",
          "Apply for LOA",
          "Currently furloughed",
          "Currently unemployed"
        ]
      },
      {
        "type": "field",
        "dataType": "text",
        "dataKey": "custom-72hms8fc",
        "prompt": "What is the maximum period of time you can apply for?",
        "condtional": {
          "left": {
            "key": "custom-k52h77c"
          },
          "operator": "contains",
          "right": {
            "value": ["Apply for LOA", "Currently furloughed"]
          }
        }
      },
      {
        "type": "group",
        "title": "Employment Availability",
        "prompt": "When would you be available to begin employment?",
        "style": "inline",
        "require": "any",
        "items": [
          {
            "type": "field",
            "dataType": "date",
            "dataKey": "employmentAvailabilityDate"
          },
          {
            "type": "field",
            "dataType": "text",
            "dataKey": "employmentAvailabilityTerm"
          }
        ]
      },
      {
        "type": "group",
        "title": "Commuting Details",
        "items": [
          {
            "type": "field",
            "dataType": "text",
            "dataKey": "custom-b827skkc",
            "prompt": "From which country and city are you planning to commute to Japan?"
          },
          {
            "tyoe": "field",
            "dataType": "text",
            "dataKey": "custom-7c98s833",
            "prompt": "If the commuting city is outside Asia or Oceania, are you willing to relocate, and if so, where?"
          }
        ]
      },
      {
        "type": "field",
        "dataType": "text",
        "select": "single",
        "options": ["Yes", "No"],
        "dataKey": "custom-8du3nt7c",
        "prompt": "Have you ever previously applied and underwent a screening process for ANA Group Companies (Air Japan/ANA & JP Express/ANK/ANA WINGS)?"
      },
      {
        "type": "group",
        "conditional": {
          "left": {
            "key": "custom-8du3nt7c"
          },
          "operator": "==",
          "right": {
            "value": "Yes"
          }
        },
        "items": [
          {
            "type": "field",
            "dataType": "text",
            "select": "single",
            "dataKey": "custom-8dum2mtc",
            "prompt": "Which company?",
            "options": [
              "Air Japan",
              "ANA & JP Express",
              "ANK",
              "ANA WINGS/A-net"
            ]
          },
          {
            "type": "field",
            "dataType": "date",
            "dataKey": "custom-m2c73mf8",
            "prompt": "When did the screening process begin?"
          },
          {
            "type": "field",
            "dataType": "text",
            "select": "single",
            "dataKey": "custom-j3tjh42a",
            "prompt": "Was the screening process succcessful?",
            "options": ["Yes", "No"]
          }
        ]
      }
    ]
  },
  {
    "type": "group",
    "style": "category",
    "title": "Aviation Experience",
    "items": [
      {
        "type": "list",
        "dataKey": "trainingQualifications",
        "title": "Training Qualifications",
        "items": [
          {
            "type": "field",
            "dataKey": "aircraft",
            "dataType": "text",
            "select": "single",
            "optionsType": "aircraftType",
            "title": "Aircraft"
          },
          {
            "type": "field",
            "dataKey": "qualifications",
            "dataType": "text",
            "title": "Qualifications"
          },
          {
            "type": "field",
            "dataKey": "airline",
            "dataType": "text",
            "title": "Airline"
          }
        ]
      },
      {
        "type": "group",
        "title": "Detail of Cross-Country Flying & Landing",
        "details": "",
        "items": [
          {
            "dataKey": "custom-8kt87sk3",
            "title": "Departure",
            "dataType": "text"
          },
          {
            "dataKey": "custom-49dsn46",
            "title": "Via",
            "dataType": "text"
          },
          {
            "dataKey": "custom-k9sgj27c",
            "title": "Point of Arrival",
            "dataType": "text"
          },
          {
            "dataKey": "custom-44mvdsc2",
            "title": "Place of Landing ",
            "dataType": "text"
          },
          {
            "dataKey": "custom-mm93kc8d3",
            "title": "Date",
            "dataType": "date"
          }
        ]
      },
      {
        "type": "list",
        "title": "Flight Time by Aircraft Type",
        "items": [
          {
            "type": "field",
            "dataKey": "type",
            "title": "Type Identifier",
            "dataType": "text"
          },
          {
            "type": "field",
            "dataKey": "model",
            "title": "Model",
            "dataType": "text"
          },
          {
            "type": "field",
            "dataKey": "category",
            "title": "Category",
            "dataType": "text"
          },
          {
            "type": "field",
            "dataKey": "class",
            "title": "Class",
            "dataType": "text"
          },
          {
            "type": "field",
            "dataKey": "engine",
            "title": "Engine type",
            "dataType": "text"
          },
          {
            "type": "field",
            "dataKey": "engines",
            "title": "Number of engines",
            "dataType": "number"
          },
          {
            "type": "field",
            "dataKey": "ga",
            "title": "General Aviation",
            "dataType": "boolean"
          },
          {
            "type": "field",
            "dataKey": "military",
            "title": "Military",
            "dataType": "boolean"
          },
          {
            "type": "field",
            "dataKey": "firstFlown",
            "title": "First flown",
            "dataType": "date"
          },
          {
            "type": "field",
            "dataKey": "lastFlown",
            "title": "Last flown",
            "dataType": "date"
          },
          {
            "type": "field",
            "dataKey": "total",
            "title": "Total time",
            "dataType": "time"
          },
          {
            "type": "field",
            "dataKey": "night",
            "title": "Night time",
            "dataType": "time"
          },
          {
            "type": "field",
            "dataKey": "xc",
            "title": "Cross country",
            "dataType": "time"
          },
          {
            "type": "field",
            "dataKey": "xcNight",
            "title": "Total time",
            "dataType": "time"
          },
          {
            "type": "field",
            "dataKey": "pic",
            "title": "PIC",
            "dataType": "time"
          },
          {
            "type": "field",
            "dataKey": "solo",
            "title": "Solo",
            "dataType": "time"
          },
          {
            "type": "field",
            "dataKey": "p1us",
            "title": "P1U/S",
            "dataType": "time"
          },
          {
            "type": "field",
            "dataKey": "sic",
            "title": "SIC",
            "dataType": "time"
          },
          {
            "type": "field",
            "title": "Dual Received",
            "dataKey": "dual",
            "dataType": "time"
          },
          {
            "type": "field",
            "title": "PIC Night",
            "dataKey": "picNight",
            "dataType": "time"
          },
          {
            "type": "field",
            "title": "Solo Night",
            "dataKey": "soloNight",
            "dataType": "time"
          },
          {
            "type": "field",
            "title": "P1U/S Night",
            "dataKey": "p1usNight",
            "dataType": "time"
          },
          {
            "type": "field",
            "title": "SIC Night",
            "dataKey": "sicNight",
            "dataType": "time"
          },
          {
            "type": "field",
            "title": "Dual Received Night",
            "dataKey": "dualNight",
            "dataType": "time"
          },
          {
            "type": "field",
            "title": "PIC XC",
            "dataKey": "picXc",
            "dataType": "time"
          },
          {
            "type": "field",
            "title": "Solo XC",
            "dataKey": "soloXc",
            "dataType": "time"
          },
          {
            "type": "field",
            "title": "P1U/S XC",
            "dataKey": "p1usXc",
            "dataType": "time"
          },
          {
            "type": "field",
            "title": "SIC XC",
            "dataKey": "sicXc",
            "dataType": "time"
          },
          {
            "type": "field",
            "title": "Dual Received XC",
            "dataKey": "dualXc",
            "dataType": "time"
          },
          {
            "type": "field",
            "title": "PIC XC Night",
            "dataKey": "picXcNight",
            "dataType": "time"
          },
          {
            "type": "field",
            "dataKey": "soloXcNight",
            "title": "Solo XC Night",
            "dataType": "time"
          },
          {
            "type": "field",
            "title": "P1U/S XC Night",
            "dataKey": "p1usXcNight",
            "dataType": "time"
          },
          {
            "type": "field",
            "title": "SIC XC Night",
            "dataKey": "sicXcNight",
            "dataType": "time"
          },
          {
            "type": "field",
            "title": "Dual Received XC Night",
            "dataKey": "dualXcNight",
            "dataType": "time"
          },
          {
            "type": "field",
            "title": "Dual Given / Instructing",
            "dataKey": "dualGiven",
            "dataType": "time"
          },
          {
            "type": "field",
            "title": "Navigator",
            "dataKey": "navigator",
            "dataType": "time"
          },
          {
            "type": "field",
            "title": "Engineer",
            "dataKey": "engineer",
            "dataType": "time"
          },
          {
            "type": "field",
            "title": "Simulated Instrument (Hood)",
            "dataKey": "simulated",
            "dataType": "time"
          },
          {
            "type": "field",
            "title": "Actual Instrument (IMC)",
            "dataKey": "actual",
            "dataType": "time"
          },
          {
            "type": "field",
            "title": "Simulator",
            "dataKey": "simulator",
            "dataType": "time"
          }
        ]
      }
    ]
  }
]
