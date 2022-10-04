const axios = require('axios');
const cheerio = require('cheerio');
const { exec } = require('child_process')


function imageDownloader(url) {
    exec(`aria2c ${url}`, (err, stdount, sterr) => {
        if (err)
        {
            console.log(err)
        }
        else 
        {
            console.log(stdount)
        }
    })
}

function notification(title, content, imagePath) {
    exec(`termux-notification -t '${title}' -c '${content}' --image-path ${imagePath}`, (err, stdount, sterr) => {
        if (err)
        {
            console.log(err)
        }
        else 
        {
            console.log(stdount)
        }
    })
}



axios.get('https://onepieceex.net/')
.then(({data}) => {
    let $ = cheerio.load(data)
    let info_data = []
    let get_title = $('article', data.data).each(function() {
        let text = $(this).find('h1').text()
        let image = $(this).find('.imagem').attr('style').replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '')
        let p = $(this).find('p').text()
        info_data.push({
            'image_url' : image, 
            'title' : text,
            'content' : p
        })
    })
    let nameUrl = info_data[0].image_url
    let nameUrl1 = info_data[1].image_url
    let nameImage  = nameUrl.slice(50)
    let nameImage1  = nameUrl1.slice(50)
    imageDownloader(nameUrl)
    notification(info_data[0].title, info_data[0].content, `~/onepieceex-notification/${nameImage}`)
    notification(info_data[1].title, info_data[1].content, `~/onepieceex-notification/${nameImage1}`)
})
.catch(err => {
    console.log(err)
})
