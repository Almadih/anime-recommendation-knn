var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('anime.db');

let data = [
    ['One Piece',1,1,1,0,0,1,0, 8.53,'onepiece.jpg'],
    ['HxH',1,0,1,0,0,0,0, 9.10,'hxh.jpg'],
    ['JoJo',1,0,1,0,1,1,0, 8.9,'jojo.jpg'],
    ['Attack on Titan',1,0,1,0,0,1,0, 8.47,'attack.jpg'],
    ['Made in Abyss',0,0,0,0,0,1,0, 8.83,'made.jpg'],
    ['Yahari Ore',0,1,0,1,0,1,1, 8.10,'yahari.jpg'],
    ['ReLife',0,0,0,1,0,0,1, 8.10,'relife.jpg'],
    ['Fullmetal Alchemist',1,1,1,0,0,1,0, 9.23,'full.jpg'],
    ['Gintama',1,1,1,0,0,0,0, 9.05,'gintama.jpg'],
    ['Koe no Katachi',0,0,1,1,0,1,0, 9.01,'koe.jpg'],
    ['Kimetus no Yaiba',1,0,1,0,1,0,0, 8.92,'kimetsu.jpg'],
    ['Monster',0,0,0,0,0,1,0, 8.69,'monster.jpg'],
    ['Death Note',1,0,1,1,1,0,0, 8.66,'death.jpg'],
    ['Konosuba',0,1,0,0,1,0,0, 8.56,'konosuba.jpg'],
    ['Dr. Stone',0,0,1,0,0,0,0, 8.49,'drstone.jpg'],
    ['Shokugeki no Soma',0,1,1,1,0,0,0, 8.46,'soma.jpg'],
    ['My Hero Academia',1,1,1,1,0,1,0, 8.35,'hero.jpg'],
    ['Charlott',0,0,1,1,1,1,0, 7.88,'charlotte.jpg'],
    ['K-on',0,1,0,1,0,0,0, 7.86,'kon.jpg'],
    ['Yamada and The seven witches',0,1,1,1,1,0,1, 7.77,'yamada.jpg'],
    ['One Punch Man',1,1,0,0,1,0,0, 8.68,'punch.jpg'],
    ['Tokyo Ghoul',1,0,0,0,1,1,0, 7.93,'tokyo.jpg'],
    ['Another',0,0,0,1,1,0,0, 7.67,'another.jpg'],
    ['Durarara',1,0,0,1,1,1,0, 8.24,'durarara.jpg'],
    ['Owari no Seraph',1,0,1,0,1,1,0, 7.59,'seraph.jpg'],
    ['Dororo',1,0,1,0,1,0,0, 8.23,'dororo.jpg'],
    ['Noragami',1,1,1,0,1,0,0, 8.10,'noragami.jpg'],
    ['Nisekoi',0,1,1,1,0,0,1, 7.47,'nisekoi.jpg'],
    ['Ookami Shoujo to Kuro Ouji',0,0,0,1,0,0,1, 7.03,'ookami'],
    ['Orange',0,0,0,1,0,1,1, 7.69,'orange.jpg'],
    ['Shigatsu wa kimi no uso',0,0,1,1,0,1,1, 8.83,'shigatsu'],
]

db.all('select * from animes',(err,res)=>{
    data = []
    res.map((row)=>{
        const { id,action,comedy,shounen,school,supernatrual,drama,romance,score} = row
        data.push([id,action,comedy,shounen,school,supernatrual,drama,romance,score])
    })

    console.log(data)
})