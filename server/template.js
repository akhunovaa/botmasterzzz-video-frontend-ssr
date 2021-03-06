// html skeleton provider
export function template(video = []) {
    let title = ''; // Dynamically ship scripts based on render type
    let description = ''; // Dynamically ship scripts based on render type
//
    title = video.description  + ' - ' + video.title;

    return `
<title>${title  + " | NN-BOT 🤖 TikTok RoBOT | Видео | Video"}</title>
<meta name="description" content='${video.description}'/>
<meta property="og:description" content='${video.description}'/>
<meta property="og:title" content='${title}'/>
<meta property="og:image" content='${video.thumbnail}'/>
<meta property="og:url" content='${"https://video.yourapi.ru/watch/" + video.id}'/>
<meta property="og:site_name" content="NN-BOT @tiktiktokrobot"/>
<meta property="og:type" content="video.other"/>
<meta property="ya:ovs:adult" content="false"/>
<meta name="keywords" content='${video.description}'/>
<meta property="video:duration" content='${video.duration > 0 ? video.duration : 8}'/>
<meta property="og:video" content='${video.src}'/>
<meta property="og:video:url" content='${video.src}'/>
<meta property="og:video:secure_url" content='${video.src}'/>
<meta property="og:video:type" content="video/mp4">
<meta property="og:video:width" content="1280"/>
<meta property="og:video:height" content="720"/>
<meta property="ya:ovs:original_name" content='${title}'/>
<meta property="ya:ovs:allow_embed" content="true"/>
<meta property="ya:ovs:upload_date" content='${new Date(video.createdAt).toISOString()}'/>
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
<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "${title}",
      "description": "${video.description ? video.description : title}",
      "thumbnailUrl": [
        "${video.thumbnail}"
       ],
      "uploadDate": "${new Date(video.createdAt).toISOString()}",
      "duration": "${iso8601_duration(video.duration > 0 ? video.duration : 8)}",
      "contentUrl": "${video.src}",
      "embedUrl": "${video.url}",
      "interactionStatistic": {
        "@type": "InteractionCounter",
        "interactionType": { "@type": "http://schema.org/WatchAction" },
        "userInteractionCount": ${video.duration > 0 ? video.duration : 5}
      },
      "regionsAllowed": ""
    }
</script>
<link rel="apple-touch-icon" href="logo192.png" />
<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500&display=swap" rel="stylesheet"/>
</head>
`
}

function iso8601_duration(seconds){

    // const days =  Math.floor(seconds / 86400);
    // const second = seconds % 86400;
    //
    // const hours =  Math.floor(second % 3600);
    // const secondI =  second % 3600;

    const minutes =  Math.floor(seconds % 60);
    const secondP = seconds % 60;

    return "P" + 0 + "DT" + 0 + "H" + 0 + "M" + secondP + "S";
}

// <meta name="twitter:card" content="player"/>
// <meta name="twitter:site" content="@yourapi_ru"/>
// <meta name="twitter:url" content='${"https://video.yourapi.ru/watch/" + video.id}'/>
// <meta name="twitter:title" content='${title}'/>
// <meta name="twitter:description" content='${video.description}'/>
// <meta name="twitter:image" content='${video.thumbnail}'/>
// <meta name="twitter:player" content='${video.src}'/>
// <meta name="twitter:player:width" content="1280"/>
// <meta name="twitter:player:height" content="720"/>
