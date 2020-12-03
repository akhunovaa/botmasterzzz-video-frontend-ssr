// html skeleton provider
export function template(video = []) {
    let title = ''; // Dynamically ship scripts based on render type
    let description = ''; // Dynamically ship scripts based on render type
// <meta property="og:image" content='${video.thumbnail}'/>
    title = video.title + ' - ' + video.description + "| BotMasterZzz | NN-BOT";

    return `
<title>${title}</title>
<meta name="description" content='${video.description}'/>
<meta property="og:description" content='${video.description}'/>
<meta property="og:title" content='${video.title}'/>
<meta property="og:url" content='${"https://video.yourapi.ru/watch/" + video.id}'/>
<meta property="og:site_name" content="BotmasterZzz NN-BOT @tiktiktokrobot"/>
<meta property="ya:ovs:adult" content="false"/>
<meta name="keywords" content='${video.description}'/>
<meta property="og:type" content="video.other"/>
<meta property="video:duration" content='${video.duration}'/>
<meta property="og:video" content='${video.src}'/>
<meta property="ya:ovs:original_name" content='${title}'/>
<meta property="ya:ovs:allow_embed" content="true"/>
<meta property="ya:ovs:upload_date" content='${new Date(video.createdAt * 1000).toISOString()}'/>
<meta property="ya:ovs:views_total" content='${video.duration}'/>
<meta property="ya:ovs:views_last_day" content='${video.duration}'/>
<meta property="ya:ovs:likes" content='${video.duration - 3}'/>
<meta property="ya:ovs:dislikes" content='${video.duration - (video.duration - 3)}'/>
<meta property="ya:ovs:person" content='${video.title}'/> 
<meta property="ya:ovs:production_company" content="BotmasterZzz"/> 
<meta property="ya:ovs:country" content="Ru"/> 
<meta property="ya:ovs:poster" href='${video.thumbnail}'/>
<meta property="video:tag" content='${video.description}'/>
<meta name="yandex-verification" content="1129f2c83f838b55" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="theme-color" content="#000000" />
<script src="https://unpkg.com/videojs-contrib-hls/dist/videojs-contrib-hls.js"></script>
<link rel="apple-touch-icon" href="./logo192.png" />
<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500&display=swap" rel="stylesheet"/>
</head>
`
}
