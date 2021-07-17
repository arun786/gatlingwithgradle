var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "500",
        "ok": "476",
        "ko": "24"
    },
    "minResponseTime": {
        "total": "140",
        "ok": "410",
        "ko": "140"
    },
    "maxResponseTime": {
        "total": "4548",
        "ok": "4548",
        "ko": "214"
    },
    "meanResponseTime": {
        "total": "729",
        "ok": "756",
        "ko": "182"
    },
    "standardDeviation": {
        "total": "613",
        "ok": "615",
        "ko": "23"
    },
    "percentiles1": {
        "total": "569",
        "ok": "575",
        "ko": "184"
    },
    "percentiles2": {
        "total": "616",
        "ok": "618",
        "ko": "199"
    },
    "percentiles3": {
        "total": "1249",
        "ok": "1250",
        "ko": "213"
    },
    "percentiles4": {
        "total": "3869",
        "ok": "3870",
        "ko": "214"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 392,
    "percentage": 78
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 25,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 59,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "count": 24,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "95.2",
        "ko": "4.8"
    }
},
contents: {
"req_create-patients-32fe9": {
        type: "REQUEST",
        name: "Create Patients",
path: "Create Patients",
pathFormatted: "req_create-patients-32fe9",
stats: {
    "name": "Create Patients",
    "numberOfRequests": {
        "total": "500",
        "ok": "476",
        "ko": "24"
    },
    "minResponseTime": {
        "total": "140",
        "ok": "410",
        "ko": "140"
    },
    "maxResponseTime": {
        "total": "4548",
        "ok": "4548",
        "ko": "214"
    },
    "meanResponseTime": {
        "total": "729",
        "ok": "756",
        "ko": "182"
    },
    "standardDeviation": {
        "total": "613",
        "ok": "615",
        "ko": "23"
    },
    "percentiles1": {
        "total": "569",
        "ok": "575",
        "ko": "184"
    },
    "percentiles2": {
        "total": "616",
        "ok": "618",
        "ko": "199"
    },
    "percentiles3": {
        "total": "1249",
        "ok": "1250",
        "ko": "213"
    },
    "percentiles4": {
        "total": "3869",
        "ok": "3870",
        "ko": "214"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 392,
    "percentage": 78
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 25,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 59,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "count": 24,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "95.2",
        "ko": "4.8"
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
