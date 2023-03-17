

const all_agent = document.querySelector('.agent-select')
let colors = ['#336699', '#993366', '#669933', '#CC6600', '#663399', '#FF9933', '#FF6600', '#006666', '#FFCC66', '#3399CC', '#993333', '#CCCC99', '#663366', '#FFCC00', '#FFCC33', '#CCFF00', '#996666', '#FF99CC', '#339966', '#996699', '#99CCFF', '#CC9999', '#FF6666', '#FF9933', '#66CCCC', '#CCCCFF', '#CC6699', '#CC9933', '#FFCC99', '#FFCCCC', '#99CC66', '#66CC99', '#FF99CC', '#9933CC', '#6699CC', '#CC9999', '#FFCC66', '#FF9933', '#006666', '#FFCC66', '#3399CC', '#993333', '#CCCC99', '#663366', '#FFCC00', '#FFCC33', '#CCFF00', '#996666', '#FF99CC', '#339966', '#996699', '#99CCFF', '#CC9999', '#FF6666', '#FF9933', '#66CCCC', '#CCCCFF', '#CC6699', '#CC9933', '#FFCC99', '#FFCCCC', '#99CC66', '#66CC99', '#FF99CC', '#9933CC', '#6699CC', '#CC9999', '#FFCC66', '#FF9933']

var index = 0;


all_agent.addEventListener('click', (e) => {

    if (e.target.parentNode.getAttribute('class').includes('chris')){
        document.querySelector('.birthday').style.display = 'block'
        document.querySelector('#audio').play()

        setInterval(function() {

            const label = document.querySelector('.label')
            label.style.color = colors[index];

            index = (index + 1) % colors.length;
        }, 500);

    } else{
        document.querySelector('#audio').pause()
        document.querySelector('.birthday').style.display = 'none'
    }
    document.body.style.backgroundImage = get_background(e.target.parentNode.getAttribute('class'))
})

function get_background(agent){
    const agents = {
        'container': 'https://pbs.twimg.com/media/FVYuvRYWYAMf3C-.jpg:large',
        'agent sage': 'https://wallpaper.dog/large/20531478.png',
        'agent jett': 'https://static.invenglobal.com/upload/image/2020/04/02/i1585819016848035.jpeg',
        'agent viper': 'https://wallpaperaccess.com/full/3976907.png',
        'agent sova': 'https://wallpapers.com/images/file/sova-valorant-2k-background-4zh3k83u19fqy6x8.jpg',
        'agent chris': 'https://www.birthdaywishes.pics/images/quotes/english/general/happy-birthday-minions-52650-312393.jpg',
        'agent brim': 'https://images7.alphacoders.com/108/1080942.jpg',
        'agent omen': 'https://images2.alphacoders.com/114/1149361.jpg',
        'agent raze': 'https://images5.alphacoders.com/108/thumb-1920-1080945.jpg',
        'agent cypher': 'https://images.alphacoders.com/114/1149405.jpg'
    }

    return `url(${agents[agent]})`
}


