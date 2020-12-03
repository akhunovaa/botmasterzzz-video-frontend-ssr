// html skeleton provider
export function template(video = []) {
    let title = ''; // Dynamically ship scripts based on render type
    let description = ''; // Dynamically ship scripts based on render type

    title = video.title + ' - ' + video.description.length > 46 ? video.description.substring(0, 45) : video.description.trim() + " BotMasterZzz | NN-BOT";

    return `
<title>${title}</title>
<meta name="description" content='${video.description}'/>
<meta property="og:description" content='${video.description}'/>
<meta property="og:title" content='${video.title}'/>
<meta property="og:image" content='${video.thumbnail}'/>
<meta property="og:url" content='${"https://video.yourapi.ru/watch/" + video.id}'/>
<meta property="og:site_name" content="video.yourapi.ru"/>
<meta name="keywords" content='${video.description}'/>
<meta property="og:type" content="website"/>
<meta name="yandex-verification" content="1129f2c83f838b55" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="theme-color" content="#000000" />
<script src="https://unpkg.com/videojs-contrib-hls/dist/videojs-contrib-hls.js"></script>
<link rel="apple-touch-icon" href="./logo192.png" />
<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500&display=swap" rel="stylesheet"/>
</head>
`
}
