var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "13",
        "ok": "13",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3010",
        "ok": "3010",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "236",
        "ok": "236",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "801",
        "ok": "801",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1209",
        "ok": "1209",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2650",
        "ok": "2650",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 12,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.083",
        "ok": "1.083",
        "ko": "-"
    }
},
contents: {
"req_get-all-patient-508c2": {
        type: "REQUEST",
        name: "Get all Patients, 1st call",
path: "Get all Patients, 1st call",
pathFormatted: "req_get-all-patient-508c2",
stats: {
    "name": "Get all Patients, 1st call",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3010",
        "ok": "3010",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1006",
        "ok": "1006",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1417",
        "ok": "1417",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1507",
        "ok": "1507",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2709",
        "ok": "2709",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2950",
        "ok": "2950",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 67
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.25",
        "ok": "0.25",
        "ko": "-"
    }
}
    },"req_get-specific-pa-78ec9": {
        type: "REQUEST",
        name: "Get specific Patients",
path: "Get specific Patients",
pathFormatted: "req_get-specific-pa-78ec9",
stats: {
    "name": "Get specific Patients",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.833",
        "ok": "0.833",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
