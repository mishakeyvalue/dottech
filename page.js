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
        a:link, a:visited {
    background-color: white;
    color: black;
    border: 2px solid green;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
}

a:hover, a:active {
    background-color: green;
    color: white;
}
        .dir{
            background-color: yellow;
        }
    </style>
</head>

<body>
    <h1>
        Welcome to the ${machine}!
    </h1>
    
        ${links}
    
</body>

</html>`;
}

let getLink = function(link, cl) {
    return `<p><a href="${link}" class=${cl}>${link}</a></p>`
}