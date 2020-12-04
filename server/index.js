const express = require("express")
const request = require("request")
const path = require("path")
const fs = require("fs")
const React = require("react")
const {renderToNodeStream, renderToString} = require("react-dom/server")
const {fetchVideos, searchVideos, fetchComments} = require("./../dist-ssr/Api")
const template = require("./../dist-ssr/template")
const Videos = require("./../dist-ssr/Videos").default
const AppWatchVideo = require("./../dist-ssr/AppWatchVideo").default
const AppSearchResult = require("./../dist-ssr/AppSearchResult").default
const app = express()

// // server rendered home page
// app.get('/', (req, res) => {
//   const {preloadedState, content} = ssr(initialState)
//   const response = template("BotMasterZzz | NN-BOT | Видео | Video Главная страница", preloadedState, content)
//   res.setHeader('Cache-Control', 'assets, max-age=604800')
//   res.send(response);
// });

app.get("/", (req, res) => {
    const searchTerm = req.query.search;

    const html = fs.readFileSync(path.resolve(__dirname, `./../dist/index.html`), "utf-8")
    const [head, tail] = html.split("{content}")
    res.write(head)

    let initialState = {
        isFetching: false,
        videos: [],
        video: {},
        sidebar: false
    }

    if (searchTerm !== undefined) {
        searchVideos(searchTerm).then(response => {
            const reactElement = React.createElement(AppSearchResult, {
                initialState: initialState,
                videos: response.response,
            })
            const newTail = tail.split("{script}")
                .join(`
      <script id="ssr__script">
        window.__VIDEOS__ = ${response.response}
      </script>
      `)
            const stream = renderToNodeStream(reactElement)
            stream.pipe(res, {end: false})
            stream.on("end", () => {
                res.write(newTail)
                res.end()
            })
        }).catch(error => {
            console.log(error)
            const reactElement = React.createElement(AppSearchResult, {
                initialState: initialState,
                videos: [],
            })
            const newTail = tail.split("{script}")
                .join(`
      <script id="ssr__script">
        window.__VIDEOS__ = ${[]}
      </script>
      `)
            const stream = renderToNodeStream(reactElement)
            stream.pipe(res, {end: false})
            stream.on("end", () => {
                res.write(newTail)
                res.end()
            })
        });
    } else {
        const url = "http://video.yourapi.ru/api-data/video/list"
        request({
            method: "GET",
            url
        }, (err, httpsRes, body) => {
            const newTail = tail.split("{script}")
                .join(`
      <script id="ssr__script">
        window.__VIDEOS__ = ${JSON.stringify(body)}
      </script>
      `)

            const reactElement = React.createElement(Videos, {videos: JSON.parse(body).response})
            const stream = renderToNodeStream(reactElement)
            stream.pipe(res, {end: false})
            stream.on("end", () => {
                res.write(newTail)
                res.end()
            })
        })
    }
})


app.get("/watch/:videoid", (req, res) => {
    const videoid = req.params.videoid;
    const searchTerm = req.query.search;

    let initialState = {
        isFetching: false,
        videos: [],
        video: {},
        sidebar: false
    }

    if (searchTerm !== undefined) {
        const indexHtml = fs.readFileSync(path.resolve(__dirname, `./../dist/index.html`), "utf-8")
        const [head, tail] = indexHtml.split("{content}")
        res.write(head)
        searchVideos(searchTerm).then(response => {
            const reactElement = React.createElement(AppSearchResult, {
                initialState: initialState,
                videos: response.response,
            })
            const newTail = tail.split("{script}")
                .join(`
      <script id="ssr__script">
        window.__VIDEOS__ = ${response.response}
      </script>
      `)
            const stream = renderToNodeStream(reactElement)
            stream.pipe(res, {end: false})
            stream.on("end", () => {
                res.write(newTail)
                res.end()
            })
        }).catch(error => {
            console.log(error)
            const reactElement = React.createElement(AppSearchResult, {
                initialState: initialState,
                videos: [],
            })
            const newTail = tail.split("{script}")
                .join(`
      <script id="ssr__script">
        window.__VIDEOS__ = ${[]}
      </script>
      `)
            const stream = renderToNodeStream(reactElement)
            stream.pipe(res, {end: false})
            stream.on("end", () => {
                res.write(newTail)
                res.end()
            })
        });
    } else {
        const html = fs.readFileSync(path.resolve(__dirname, `./../dist/video.html`), "utf-8")

        const [head, tail] = html.split("{content}")
        const url = "https://video.yourapi.ru/api-data/video/" + videoid;
        request({
            method: "GET",
            url
        }, (err, httpsRes, body) => {
            const newTail = tail.split("{script}")
                .join(`
      <script id="ssr__script">
        window.__VIDEO__ = ${JSON.stringify(body)}
      </script>
      `)
            fetchComments(videoid).then(response => {
                const comments = response.response;

                fetchVideos().then(response => {
                    const reactElement = React.createElement(AppWatchVideo, {
                        initialState: initialState,
                        videoid: videoid,
                        comments: comments,
                        video: JSON.parse(body).response,
                        videos: response.response
                    })
                    const video = JSON.parse(body).response;
                    const metaData = template.template(video)

                    const newHead = head.split("</head>").join(metaData)
                    const stream = renderToNodeStream(reactElement)
                    res.write(newHead)
                    stream.pipe(res, {end: false})
                    stream.on("end", () => {
                        res.write(newTail)
                        res.end()
                    })
                }).catch(error => {
                    console.log(error)
                    const reactElement = React.createElement(AppWatchVideo, {
                        initialState: initialState,
                        videoid: videoid,
                        video: JSON.parse(body).response,
                        videos: []
                    })
                    const video = JSON.parse(body).response;
                    const metaData = template.template(video)

                    const newHead = head.split("<head>")
                        .join(metaData)
                    res.write(newHead)

                    const stream = renderToNodeStream(reactElement)
                    stream.pipe(res, {end: false})
                    stream.on("end", () => {
                        res.write(newTail)
                        res.end()
                    })
                });
            });
        })
    }
});

app.get("/results/:searchterm", (req, res) => {
    const searchterm = req.params.searchterm;

    const html = fs.readFileSync(path.resolve(__dirname, `./../dist/index.html`), "utf-8")

    const [head, tail] = html.split("{content}")
    res.write(head)

    let initialState = {
        isFetching: false,
        videos: [],
        sidebar: false
    }


    searchVideos(searchterm).then(response => {
        const reactElement = React.createElement(AppSearchResult, {
            initialState: initialState,
            videos: response.response,
        })
        const newTail = tail.split("{script}")
            .join(`
      <script id="ssr__script">
        window.__VIDEOS__ = ${response.response}
      </script>
      `)
        const stream = renderToNodeStream(reactElement)
        stream.pipe(res, {end: false})
        stream.on("end", () => {
            res.write(newTail)
            res.end()
        })
    }).catch(error => {
        console.log(error)
        const reactElement = React.createElement(AppSearchResult, {
            initialState: initialState,
            videos: [],
        })
        const newTail = tail.split("{script}")
            .join(`
      <script id="ssr__script">
        window.__VIDEOS__ = ${[]}
      </script>
      `)
        const stream = renderToNodeStream(reactElement)
        stream.pipe(res, {end: false})
        stream.on("end", () => {
            res.write(newTail)
            res.end()
        })
    });
});

app.get("/feed/trending", (req, res) => {

    const html = fs.readFileSync(path.resolve(__dirname, `./../dist/index.html`), "utf-8")

    const [head, tail] = html.split("{content}")
    res.write(head)

    let initialState = {
        isFetching: false,
        videos: [],
        sidebar: false
    }


    fetchVideos().then(response => {
        const reactElement = React.createElement(AppSearchResult, {
            initialState: initialState,
            videos: response.response,
        })
        const newTail = tail.split("{script}")
            .join(`
      <script id="ssr__script">
        window.__VIDEOS__ = ${response.response}
      </script>
      `)
        const stream = renderToNodeStream(reactElement)
        stream.pipe(res, {end: false})
        stream.on("end", () => {
            res.write(newTail)
            res.end()
        })
    }).catch(error => {
        console.log(error)
        const reactElement = React.createElement(AppSearchResult, {
            initialState: initialState,
            videos: [],
        })
        const newTail = tail.split("{script}")
            .join(`
      <script id="ssr__script">
        window.__VIDEOS__ = ${[]}
      </script>
      `)
        const stream = renderToNodeStream(reactElement)
        stream.pipe(res, {end: false})
        stream.on("end", () => {
            res.write(newTail)
            res.end()
        })
    });
});

app.use(express.static(path.join(__dirname, "./../dist")))
// hide powered by express
app.disable('x-powered-by');
app.listen(8080, () => {
    console.log("Server is listening on port 8080")
})
