const apiKey = 'hS8J0iEPYBzpn5cUrIpho77WxgAlnPQI'
//https://api.giphy.com/v1/gifs/random?api_key=hS8J0iEPYBzpn5cUrIpho77WxgAlnPQI

fetch( `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}` )
    .then( resp => resp.json() )
    .then(({ data }) => {
        const { url } = data.images.original

        const img = document.createElement('img')
        img.src = url
        
        document.body.append( img )
    })

