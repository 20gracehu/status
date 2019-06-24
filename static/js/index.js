function callPay() {
    var pay;
    $.ajax({
        type: 'POST',
        url: '/pay',
        async: true,
        success: function(data) {
            if (data / 100 != 2) {
                document.getElementById("pay-status").style.color = "red";
                document.getElementById("pay-status").innerHTML = "Error " + data;
                document.getElementById("summary").innerHTML = "Not All Systems Operational";
                document.getElementById("rectangle").style.backgroundColor = "red";
            } else {
                document.getElementById("pay-status").innerHTML = "Operational";
                document.getElementById("pay-status").style.color = "#25B790";
            }
            return data;
        },
        error: function(err) {
            console.log(err);
            document.getElementById("pay-status").style.color = "red";
            document.getElementById("pay-status").innerHTML = "Error";
            document.getElementById("summary").innerHTML = "Not All Systems Operational";
            document.getElementById("rectangle").style.backgroundColor = "red";
        }
    })
    return pay;
}

function callAnn() {
    $.ajax({
        type: 'POST',
        url: '/ann',
        async: true,
        success: function(data) {

            if (data / 100 != 2) {
                document.getElementById("ann-status").style.color = "red";
                document.getElementById("ann-status").innerHTML = "Error " + data;
                document.getElementById("summary").innerHTML = "Not All Systems Operational";
                document.getElementById("rectangle").style.backgroundColor = "red";
            } else {
                document.getElementById("ann-status").innerHTML = "Operational";
                document.getElementById("ann-status").style.color = "#25B790";
            }

            return data;
        },
        error: function(err) {
            console.log(err);

            document.getElementById("ann-status").style.color = "red";
            document.getElementById("ann-status").innerHTML = "Error";
            document.getElementById("summary").innerHTML = "Not All Systems Operational";
            document.getElementById("rectangle").style.backgroundColor = "red";
        }
    })
}

function callFood() {
    $.ajax({
        type: 'POST',
        url: '/food',
        async: true,
        success: function(data) {

            if (data / 100 != 2) {
                document.getElementById("food-status").innerHTML = "Error " + data;
                document.getElementById("food-status").style.color = "red";
                document.getElementById("summary").innerHTML = "Not All Systems Operational";
                document.getElementById("rectangle").style.backgroundColor = "red";
            } else {
                document.getElementById("food-status").innerHTML = "Operational";
                document.getElementById("food-status").style.color = "#25B790";
            }

            return data;
        },
        error: function(err) {
            console.log(err);
            document.getElementById("food-status").innerHTML = "Error";
            document.getElementById("food-status").style.color = "red";
            document.getElementById("summary").innerHTML = "Not All Systems Operational";
            document.getElementById("rectangle").style.backgroundColor = "red";
        }
    })
}

function callVol() {
    $.ajax({
        type: 'POST',
        url: '/vol',
        async: true,
        success: function(data) {

            if (data / 100 != 2) {
                document.getElementById("vol-status").style.color = "red";
                document.getElementById("vol-status").innerHTML = "Error " + data;
                document.getElementById("summary").innerHTML = "Not All Systems Operational";
                document.getElementById("rectangle").style.backgroundColor = "red";
            } else {
                document.getElementById("vol-status").innerHTML = "Operational";
                document.getElementById("vol-status").style.color = "#25B790";
            }

        },
        error: function(err) {
            console.log(err);
            document.getElementById("vol-status").style.color = "red";
            document.getElementById("vol-status").innerHTML = "Error";
            document.getElementById("summary").innerHTML = "Not All Systems Operational";
            document.getElementById("rectangle").style.backgroundColor = "red";
        }
    })
}

function callBell() {
    $.ajax({
        type: 'POST',
        url: '/bell',
        async: true,
        success: function(data) {

            if (data / 100 != 2) {
                document.getElementById("bell-status").style.color = "red";
                document.getElementById("bell-status").innerHTML = "Error " + data;
                document.getElementById("summary").innerHTML = "Not All Systems Operational";
                document.getElementById("rectangle").style.backgroundColor = "red";
            } else {
                document.getElementById("bell-status").innerHTML = "Operational";
                document.getElementById("bell-status").style.color = "#25B790";
            }

        },
        error: function(err) {
            console.log(err);
            document.getElementById("bell-status").style.color = "red";
            document.getElementById("bell-status").innerHTML = "Error";
            document.getElementById("summary").innerHTML = "Not All Systems Operational";
            document.getElementById("rectangle").style.backgroundColor = "red";
        }
    })
}

function callReading() {
    // URL: reading.harker.org
    var reading;
    $.ajax({
        type: 'POST',
        url: '/reading',
        async: true,
        success: function(data) {
            if (data / 100 != 2) {
                document.getElementById("reading-status").style.color = "red";
                document.getElementById("reading-status").innerHTML = "Error " + data;
                document.getElementById("summary").innerHTML = "Not All Systems Operational";
                document.getElementById("rectangle").style.backgroundColor = "red";
            } else {
                document.getElementById("reading-status").innerHTML = "Operational";
                document.getElementById("reading-status").style.color = "#25B790";
            }

            return data;
        },
        error: function(err) {
            console.log(err);
            document.getElementById("reading-status").style.color = "red";
            document.getElementById("reading-status").innerHTML = "Error";
            document.getElementById("summary").innerHTML = "Not All Systems Operational";
            document.getElementById("rectangle").style.backgroundColor = "red";
        }
    })
    return reading;
}

function callDev() {
    // URL: dev.harker.org
    var dev;
    $.ajax({
        type: 'POST',
        url: '/dev',
        async: true,
        success: function(data) {
            if (data / 100 != 2) {
                document.getElementById("dev-status").style.color = "red";
                document.getElementById("dev-status").innerHTML = "Error " + data;
                document.getElementById("summary").innerHTML = "Not All Systems Operational";
                document.getElementById("rectangle").style.backgroundColor = "red";
            } else {
                document.getElementById("dev-status").innerHTML = "Operational";
                document.getElementById("dev-status").style.color = "#25B790";
            }

            return data;
        },
        error: function(err) {
            console.log(err);
            document.getElementById("dev-status").style.color = "red";
            document.getElementById("dev-status").innerHTML = "Error";
            document.getElementById("summary").innerHTML = "Not All Systems Operational";
            document.getElementById("rectangle").style.backgroundColor = "red";
        }
    })
    return dev;
}

function callShortener() {
    // URL: go.harker.org
    var short;
    $.ajax({
        type: 'POST',
        url: '/short',
        async: true,
        success: function(data) {
            if (data / 100 != 2) {
                document.getElementById("short-status").style.color = "red";
                document.getElementById("short-status").innerHTML = "Error " + data;
                document.getElementById("summary").innerHTML = "Not All Systems Operational";
                document.getElementById("rectangle").style.backgroundColor = "red";
            } else {
                document.getElementById("short-status").innerHTML = "Operational";
                document.getElementById("short-status").style.color = "#25B790";

            }

            return data;
        },
        error: function(err) {
            console.log(err);
            document.getElementById("short-status").style.color = "red";
            document.getElementById("short-status").innerHTML = "Error";
            document.getElementById("summary").innerHTML = "Not All Systems Operational";
            document.getElementById("rectangle").style.backgroundColor = "red";
        }
    })
    return short;
}

function callGit() {
    // URL: gitlab.dev.harker.org
    var git;
    $.ajax({
        type: 'POST',
        url: '/git',
        async: true,
        success: function(data) {
            if (data / 100 != 2) {
                document.getElementById("gitlab-status").style.color = "red";
                document.getElementById("gitlab-status").innerHTML = "Error " + data;
                document.getElementById("summary").innerHTML = "Not All Systems Operational";
                document.getElementById("rectangle").style.backgroundColor = "red";
            } else {
                document.getElementById("gitlab-status").innerHTML = "Operational";
                document.getElementById("gitlab-status").style.color = "#25B790";
            }
            return data;
        },
        error: function(err) {
            console.log(err);
            document.getElementById("gitlab-status").style.color = "red";
            document.getElementById("gitlab-status").innerHTML = "Error";
            document.getElementById("summary").innerHTML = "Not All Systems Operational";
            document.getElementById("rectangle").style.backgroundColor = "red";
        }
    })
    return git;
}

function callPlanner() {
    // URL: https://planner.harker.org/login
    var planner;
    $.ajax({
        type: 'POST',
        url: '/planner',
        async: true,
        success: function(data) {
            if (data / 100 != 2) {
                document.getElementById("planner-status").style.color = "red";
                document.getElementById("planner-status").innerHTML = "Error " + data;
                document.getElementById("summary").innerHTML = "Not All Systems Operational";
                document.getElementById("rectangle").style.backgroundColor = "red";
            } else {
                document.getElementById("planner-status").innerHTML = "Operational";
                document.getElementById("planner-status").style.color = "#25B790";
            }
            return data;
        },
        error: function(err) {
            console.log(err);
            document.getElementById("planner-status").style.color = "red";
            document.getElementById("planner-status").innerHTML = "Error";
            document.getElementById("summary").innerHTML = "Not All Systems Operational";
            document.getElementById("rectangle").style.backgroundColor = "red";
        }
    })
    return planner;
}

function lastUpdated() {
    $.ajax({
        type: 'POST',
        url: '/updated',
        success: function(data) {
            document.getElementById("time").innerHTML = "Last Updated: " + data;
        },
        error: function(err) {
            console.log(err);
        }
    })

}

// Runs everytime someone opens the page
callAnn();
callBell();
callPay();
callVol();
callFood();
callReading();
callDev();
callShortener();
callGit();
callPlanner();
lastUpdated();

setInterval(() => {
    // runs every 5 minutes
    callAnn();
    callBell();
    callPay();
    callVol();
    callFood();
    callReading();
    callDev();
    callShortener();
    callGit();
    callPlanner();
    lastUpdated();
}, 300000)