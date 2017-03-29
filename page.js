const os = require('os');

module.exports = function(machine, dirs, files) {
    let links = "";
    for (l in dirs) {
        links += getLink(dirs[l], 'dir');
    }
    for (l in files) {
        links += getLink(files[l], 'file');
    }

    return `<!DOCTYPE html>
<html>

<head>
    <style>
        body {
            background: skyblue;
            font-family: Verdana;
            color: aliceblue;
            padding: 4px;
        }
        div {
    width: 320px;
    padding: 10px;
    border: 5px solid gray;
    margin: 0;
}
        

        
        h1 {
            font-size: 48px;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-align: center;
        }
        
        p {
            font-size: 20px;
            text-align: center;
            padding: 1px;
        }
        
        a:link,
        a:visited {
            background-color: white;
            color: black;
            border: 2px solid green;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
        }
        
        a:hover,
        a:active {
            background-color: green;
            color: white;
        }
        
        .dir {
            background-color: yellow;
        }
    </style>
</head>

<body>
    <h1>
        Welcome to the ${machine}!
    </h1>
    <div class="uptime">
        We are uptime : ${os.uptime() / 1000} seconds;
    </div>

        <div class="uptime">
        Memory free: ${os.freemem()/1000000} MB
    </div>

            <div class="uptime">
        We use memory: ${getMemoryUsage()} MB
    </div>

                <div class="uptime">
        CPU : ${getCpus()}
    </div>

    ${links}

</body>

</html>`;
}

let getLink = function(link, cl) {
    return `<p><a href="${link}" class=${cl}>${link}</a></p>`
}

const process = require('process')

function getMemoryUsage() {
    return process.memoryUsage().heapUsed / 1000000;
}

function getCpus() {
    var cpus = os.cpus();

    for (var i = 0, len = cpus.length; i < len; i++) {
        console.log("CPU %s:", i);
        var cpu = cpus[i],
            total = 0;

        for (var type in cpu.times) {
            total += cpu.times[type];
        }
        let o = "";
        for (type in cpu.times) {
            o += ("\t", type, Math.round(100 * cpu.times[type] / total), "\n");
        }
        return total;
    }
}