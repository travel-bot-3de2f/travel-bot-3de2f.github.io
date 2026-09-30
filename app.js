const museumStops = [
  {
    id: 1,
    level: "L0",
    room: "Room 1",
    titleZh: "斯隆星盘",
    titleEn: "The Sloane Astrolabe",
    era: "约 1290–1300 年",
    origin: "英格兰",
    description: "这件黄铜星盘是现存最早、尺寸最大的英格兰中世纪星盘之一，也属于大英博物馆的奠基人汉斯·斯隆最初收藏。",
    observe: "找找星盘上像小动物头部一样的恒星指针，以及为伦敦纬度制作的刻度盘。",
    x: 138,
    y: 145,
    source: "https://www.britishmuseum.org/collection/object/H_SLMathInstr-54",
    photo: {
      author: "Mike Peel",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      url: "https://commons.wikimedia.org/wiki/File:At_the_British_Museum_2024_256.jpg",
    },
  },
  {
    id: 2,
    level: "L0",
    room: "Room 2a",
    titleZh: "圣刺圣物匣",
    titleEn: "The Holy Thorn Reliquary",
    era: "约 1400 年",
    origin: "法国巴黎",
    description: "金、珐琅、红宝石、珍珠与蓝宝石共同组成一座微缩的哥特式世界，中心保存着一根相传来自荆棘冠的刺。",
    observe: "从底部复活的人群一路看到顶端的上帝圣父，留意人物与建筑如何层层向上。",
    x: 210,
    y: 112,
    source: "https://www.britishmuseum.org/collection/object/H_WB-67",
    photo: {
      author: "Joyofmuseums",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      url: "https://commons.wikimedia.org/wiki/File:Holy_Thorn_Reliquary_-_British_Museum_-_Joy_of_Museums.jpg",
    },
  },
  {
    id: 3,
    level: "L0",
    room: "Room 10",
    titleZh: "亚述狮猎浮雕",
    titleEn: "Assyrian Lion Hunt Reliefs",
    era: "公元前 645–635 年",
    origin: "尼尼微，今伊拉克",
    description: "这些浮雕来自亚述巴尼拔的北宫。狩猎既是王室表演，也象征国王守护秩序、战胜混乱的权力。",
    observe: "不要只看国王：受伤狮子的肌肉、动作和神情，是整组浮雕最令人难忘的部分。",
    x: 340,
    y: 82,
    source: "https://www.britishmuseum.org/collection/object/W_1856-0909-16_8",
    photo: {
      author: "Johnbod",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      url: "https://commons.wikimedia.org/wiki/File:Lion_Hunt_of_Ashurbanipal_DSCF3575.jpg",
    },
  },
  {
    id: 4,
    level: "L0",
    room: "Room 18",
    titleZh: "帕特农雕塑",
    titleEn: "Parthenon Sculptures",
    era: "公元前 438–432 年",
    origin: "雅典卫城，希腊",
    description: "这些大理石雕塑曾装饰雅典帕特农神庙。路线聚焦东山墙上常被认作酒神狄俄尼索斯的斜倚人物。",
    observe: "绕到侧面看躯干的扭转，以及雕刻家如何让坚硬大理石呈现出皮肤和布料的柔软感。",
    x: 535,
    y: 126,
    source: "https://www.britishmuseum.org/collection/object/G_1816-0610-93",
    photo: {
      author: "Yair Haklai",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
      url: "https://commons.wikimedia.org/wiki/File:Dionysos_pediment_Parthenon-British_Museum.jpg",
    },
  },
  {
    id: 5,
    level: "L0",
    room: "Room 4",
    titleZh: "罗塞塔石碑",
    titleEn: "The Rosetta Stone",
    era: "公元前 196 年",
    origin: "拉希德（罗塞塔），埃及",
    description: "同一道祭司法令以象形文字、世俗体和古希腊文刻写。熟悉的希腊文成为破解古埃及文字的关键。",
    observe: "从上到下辨认三种文字的质感差异；石碑只是原来更大石板的一块残片。",
    x: 490,
    y: 178,
    source: "https://www.britishmuseum.org/collection/object/Y_EA24",
    photo: {
      author: "Hans Hillewaert",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      url: "https://commons.wikimedia.org/wiki/File:Rosetta_Stone.JPG",
    },
  },
  {
    id: 6,
    level: "L0",
    room: "Room 4",
    titleZh: "拉美西斯二世胸像",
    titleEn: "Bust of Ramesses the Great",
    era: "约公元前 1250 年",
    origin: "底比斯，埃及",
    description: "这尊约 7.5 吨的花岗岩胸像曾属于一座巨型坐像，来自拉美西斯二世的祭庙拉美西姆。",
    observe: "退后几步感受尺度，再靠近看脸部对称、肩后的象形文字与运输时留下的痕迹。",
    x: 445,
    y: 196,
    source: "https://www.britishmuseum.org/collection/object/Y_EA19",
    photo: {
      author: "Andres Rueda",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      url: "https://commons.wikimedia.org/wiki/File:Colossal_bust_of_Ramesses_II,_the_Younger_Memnon_(1250_BC)_-_British_Museum_(2).jpg",
    },
  },
  {
    id: 7,
    level: "L-2",
    room: "Room 25",
    titleZh: "伊费头像",
    titleEn: "The Ife Head",
    era: "14–15 世纪",
    origin: "伊费，尼日利亚",
    description: "这件失蜡法铸造的黄铜头像可能表现伊费的统治者 Ooni。高度自然主义的面容展现了约鲁巴艺术传统的非凡技术。",
    observe: "留意脸上细密的竖线、冠饰与安静克制的表情；别忘了这一站需要下到 Level -2。",
    x: 200,
    y: 340,
    source: "https://www.britishmuseum.org/collection/object/E_Af1939-34-1",
    photo: {
      author: "Vassil",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      url: "https://commons.wikimedia.org/wiki/File:British_Museum_Room_25_Head_of_a_king_Ife_17022019_5147.jpg",
    },
  },
  {
    id: 8,
    level: "L0",
    room: "Room 24",
    titleZh: "Hoa Hakananai'a 摩艾石像",
    titleEn: "Hoa Hakananai'a",
    era: "约 1000–1200 年",
    origin: "拉帕努伊（复活节岛）",
    description: "这尊玄武岩祖先像来自拉帕努伊的奥龙戈仪式中心，名字常被译作“失去或被偷走的朋友”。",
    observe: "一定要绕到背面看与鸟人信仰相关的浅浮雕；它今天仍对拉帕努伊人具有深刻意义。",
    x: 282,
    y: 184,
    source: "https://www.britishmuseum.org/collection/object/E_Oc1869-1005-1",
    photo: {
      author: "APK",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
      url: "https://commons.wikimedia.org/wiki/File:Hoa_Hakananai%27a_-_British_Museum.jpg",
    },
  },
  {
    id: 9,
    level: "L0",
    room: "Room 27",
    titleZh: "阿兹特克双头蛇",
    titleEn: "Aztec Double-headed Serpent",
    era: "15–16 世纪",
    origin: "墨西哥",
    description: "木质蛇身覆盖约两千片绿松石马赛克，红白细节来自贝壳。它可能曾作为仪式性胸饰彰显权力。",
    observe: "凑近看绿松石碎片并不规则，却被巧妙拼成连续鳞片；两个张口蛇头形成强烈对称。",
    x: 176,
    y: 207,
    source: "https://www.britishmuseum.org/collection/object/E_Am1894-634",
    photo: {
      author: "Andres Rueda",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      url: "https://commons.wikimedia.org/wiki/File:Turquoise_Mosaic_of_a_Double-Headed_Serpent_(Mixtec-Aztec,_AD_1400-1521)_-_British_Museum.jpg",
    },
  },
  {
    id: 10,
    level: "L3",
    room: "Room 52",
    titleZh: "奥克苏斯宝藏",
    titleEn: "Oxus Treasure",
    era: "公元前 5–4 世纪",
    origin: "阿契美尼德波斯",
    description: "这批金银器据称发现于阿姆河一带，是现存最重要的阿契美尼德金属工艺组合之一。路线以狮鹫首金臂环为代表。",
    observe: "看臂环两端有翼怪兽的角、翅膀和凹槽；凹槽原本可能镶嵌彩色宝石。",
    x: 720,
    y: 345,
    source: "https://www.britishmuseum.org/collection/object/W_1897-1231-131",
    photo: {
      author: "Marie-Lan Nguyen",
      license: "Public domain",
      licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
      url: "https://commons.wikimedia.org/wiki/File:Armlet_from_the_Oxus_Treasure_BM_1897.12-31.116.jpg",
    },
  },
  {
    id: 11,
    level: "L3",
    room: "Room 51",
    titleZh: "莫尔德金斗篷",
    titleEn: "Mold Ceremonial Gold Cape",
    era: "公元前 1900–1600 年",
    origin: "莫尔德，威尔士",
    description: "薄薄一片黄金被捶打成覆盖肩胸的礼仪斗篷，纹样模仿多串珠饰。它从墓葬碎片中重建而成，形制独一无二。",
    observe: "从正面看密集凸纹如何制造层次；再想象它限制手臂活动的程度，显然并非日常衣物。",
    x: 662,
    y: 327,
    source: "https://www.britishmuseum.org/collection/object/H_1836-0902-1",
    photo: {
      author: "Andreas Praefcke",
      license: "Public domain",
      licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
      url: "https://commons.wikimedia.org/wiki/File:Mold_cape_British_Museum_img02.jpg",
    },
  },
  {
    id: 12,
    level: "L3",
    room: "Room 50",
    titleZh: "Basse-Yutz 礼仪壶",
    titleEn: "The Basse-Yutz Flagons",
    era: "约公元前 420–360 年",
    origin: "法国东部",
    description: "两件凯尔特铜合金酒壶融合了地中海器形、珊瑚与玻璃镶嵌，以及极富想象力的动物装饰。",
    observe: "重点看把手上的犬形动物、人脸和壶嘴末端的小鸭；精巧细节藏在轮廓边缘。",
    x: 605,
    y: 326,
    source: "https://www.britishmuseum.org/collection/object/H_1929-0511-2",
    photo: {
      author: "Wikimedia Commons contributor",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      url: "https://commons.wikimedia.org/wiki/File:British_Museum_Basse_Yutz_flagons_(1).jpg",
    },
  },
  {
    id: 13,
    level: "L3",
    room: "Room 49",
    titleZh: "辛顿圣玛丽马赛克",
    titleEn: "The Hinton St Mary Mosaic",
    era: "公元 4 世纪早期",
    origin: "多塞特，英格兰",
    description: "这块罗马时期地面马赛克的中央圆章表现一名男子，头后有基督字母组合，可能是现存最早的基督形象之一。",
    observe: "看人物头后的 Chi-Rho 符号，以及异教神话、狩猎场面与早期基督教图像如何共处。",
    x: 548,
    y: 341,
    source: "https://www.britishmuseum.org/collection/object/H_1965-0409-1",
    photo: {
      author: "Andres Rueda",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      url: "https://commons.wikimedia.org/wiki/File:Roman_Britain_-_Image_of_Christ_from_Hinton_St_Mary_(central_roundel_of_a_4th_century_AD_mosaic_floor)_-_British_Museum.jpg",
    },
  },
  {
    id: 14,
    level: "L3",
    room: "Room 43",
    titleZh: "玉龟",
    titleEn: "Jade Terrapin",
    era: "17 世纪早期",
    origin: "莫卧儿印度",
    description: "这只接近真实尺寸的龟由整块软玉雕成，可能为贾汉吉尔皇帝的宫廷园林制作，1803 年在阿拉哈巴德堡一口井底被发现。",
    observe: "从低角度看龟壳与头部的自然比例；硬度极高的软玉可能需要钻石磨料加工。",
    x: 490,
    y: 362,
    source: "https://www.britishmuseum.org/collection/object/A_1830-0612-1",
    photo: {
      author: "Jononmac46",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
      url: "https://commons.wikimedia.org/wiki/File:Jade_Terrapin_(1)_(BM).JPG",
    },
  },
  {
    id: 15,
    level: "L3",
    room: "Room 41",
    titleZh: "萨顿胡船葬",
    titleEn: "The Sutton Hoo Ship Burial",
    era: "公元 7 世纪",
    origin: "萨福克，英格兰",
    description: "1939 年发现的船葬保存了盎格鲁-撒克逊精英世界。著名头盔由大量锈蚀碎片重组，面部结构还能形成飞兽图案。",
    observe: "正面看眉毛、鼻梁与胡须如何组成一只飞翔动物；同时分辨原件和旁边更完整的复原件。",
    x: 433,
    y: 387,
    source: "https://www.britishmuseum.org/collection/object/H_1939-1010-93",
    photo: {
      author: "Geni",
      license: "Public domain",
      licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
      url: "https://commons.wikimedia.org/wiki/File:Sutton_Hoo_helmet_2016.png",
    },
  },
  {
    id: 16,
    level: "L3",
    room: "Room 40",
    titleZh: "刘易斯棋子",
    titleEn: "The Lewis Chessmen",
    era: "约 1150–1200 年",
    origin: "可能为挪威",
    description: "这些海象牙与鲸齿棋子 1831 年在苏格兰刘易斯岛被发现。圆睁眼睛、咬盾牌的狂战士和托腮王后极富个性。",
    observe: "挑一枚最喜欢的表情；比较国王、王后、主教与士兵如何靠姿势和衣着区分身份。",
    x: 392,
    y: 420,
    source: "https://www.britishmuseum.org/collection/object/H_1831-1101-84",
    photo: {
      author: "APK",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
      url: "https://commons.wikimedia.org/wiki/File:Lewis_Chessmen,_British_Museum.jpg",
    },
  },
  {
    id: 17,
    level: "L3",
    room: "Room 39",
    titleZh: "机械帆船钟",
    titleEn: "The Mechanical Galleon",
    era: "约 1580–1590 年",
    origin: "奥格斯堡，德国",
    description: "这艘镀金黄铜桌面自动机曾能边行驶边奏乐，皇帝与选帝侯会移动，最后还会依次点燃小炮。",
    observe: "寻找甲板人物、钟面、炮口和桅杆上的水手；把它想象成一场会移动的宫廷宴会表演。",
    x: 438,
    y: 456,
    source: "https://www.britishmuseum.org/collection/object/H_1866-1030-1",
    photo: {
      author: "APK",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
      url: "https://commons.wikimedia.org/wiki/File:Mechanical_Galleon,_British_Museum.jpg",
    },
  },
  {
    id: 18,
    level: "L3",
    room: "Room 56",
    titleZh: "乌尔王棋",
    titleEn: "The Royal Game of Ur",
    era: "约公元前 2600 年",
    origin: "乌尔，今伊拉克",
    description: "镶嵌贝壳、红色石灰岩和青金石的棋盘出土于乌尔王陵。馆员欧文·芬克尔依据楔形文字泥板复原了玩法。",
    observe: "找出二十格棋盘上的花朵图案；其中一些格子可能让棋子获得安全或再次掷骰的机会。",
    x: 530,
    y: 478,
    source: "https://www.britishmuseum.org/collection/object/W_1928-1009-378",
    photo: {
      author: "Wikimedia Commons contributor",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      url: "https://commons.wikimedia.org/wiki/File:British_Museum_Royal_Game_of_Ur.jpg",
    },
  },
  {
    id: 19,
    level: "L3",
    room: "Room 55",
    titleZh: "洪水泥板",
    titleEn: "The Flood Tablet",
    era: "公元前 7 世纪",
    origin: "尼尼微，今伊拉克",
    description: "《吉尔伽美什史诗》第十一块泥板讲述乌特那庇什提姆建船躲过大洪水的故事，与后来《圣经》洪水叙事遥相呼应。",
    observe: "泥板并不大。靠近看楔形文字如何密集排列，也留意缺损边缘打断了哪些行。",
    x: 596,
    y: 458,
    source: "https://www.britishmuseum.org/collection/object/W_K-3375",
    photo: {
      author: "Mike Peel",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      url: "https://commons.wikimedia.org/wiki/File:British_Museum_Flood_Tablet_1.jpg",
    },
  },
  {
    id: 20,
    level: "L3",
    room: "Room 65",
    titleZh: "塔哈尔卡狮身人面像",
    titleEn: "Sphinx of Taharqo",
    era: "约公元前 680 年",
    origin: "卡瓦，今苏丹",
    description: "这尊狮身人面像表现库施国王塔哈尔卡。他所属的第二十五王朝曾统治埃及，作品融合了埃及王权符号与库施面貌。",
    observe: "看额前双眼镜蛇、胸前王名圈和面部特征；尺寸不大，却用狮身传达强大王权。",
    x: 665,
    y: 430,
    source: "https://www.britishmuseum.org/collection/object/Y_EA1770",
    photo: {
      author: "Prioryman",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      url: "https://commons.wikimedia.org/wiki/File:Sphinx_of_Taharqo.jpg",
    },
  },
  {
    id: 21,
    level: "L3",
    room: "Room 63（藏品库现标 62）",
    titleZh: "卡特贝特木乃伊",
    titleEn: "Mummy of Katebet",
    era: "约公元前 1330–1250 年",
    origin: "底比斯，埃及",
    description: "卡特贝特是卡纳克神庙的阿蒙女歌者。她的木乃伊、镀金面具、首饰与长辫保存良好，也是馆内研究最充分的木乃伊之一。",
    observe: "留意面具、胸饰、木制手臂与腿上的沙布提；馆方两处页面房间号不一致，现场以标牌为准。",
    x: 735,
    y: 397,
    source: "https://www.britishmuseum.org/collection/object/Y_EA6665",
    photo: {
      author: "Bram Souffreau",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
      url: "https://commons.wikimedia.org/wiki/File:Mummy_of_Katebet,_British_Museum.jpg",
    },
  },
  {
    id: 22,
    level: "L5",
    room: "Room 93",
    titleZh: "武士甲胄",
    titleEn: "Samurai Armour",
    era: "18 世纪",
    origin: "日本",
    description: "这套完整配套的甲胄为日本西部强大的森氏家族成员制作。到江户时代，甲胄既是防护装备，也是身份、家族与权威的展示。",
    observe: "找胸甲上的家纹、层叠札片、丝绳与面甲；最后一站位于 Level 5，记得预留上楼时间。",
    x: 775,
    y: 84,
    source: "https://www.britishmuseum.org/collection/object/A_2017-3024-1-1-14",
    photo: {
      author: "14GTR",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      url: "https://commons.wikimedia.org/wiki/File:Suit_of_Mori_family_Samurai_armour,_British_Museum_06.jpg",
    },
  },
];

const journalStops = [
  {
    id: 1,
    mapLevel: "ground",
    level: "Level 0",
    room: "Great Court",
    titleZh: "大中庭：先把方向感找回来",
    titleEn: "The Great Court",
    era: "2000 年启用",
    origin: "大英博物馆中心",
    description: "大中庭以原大英图书馆圆形阅览室为中心，玻璃屋顶把原本分散的庭院连成公共空间。它不是一件藏品，却是整条路线最重要的坐标：先确认四组主楼梯、问讯台和各展厅方向，再开始看展。",
    observe: "站在入口面向圆形阅览室：4 号埃及馆在西侧，6–10 号亚述馆继续向西，18 号帕特农馆在最西侧；上楼前记住回到中庭的方向。",
    x: 565,
    y: 414,
    source: "https://www.britishmuseum.org/visit/museum-map",
    image: "assets/images/day-route/court.webp",
    photo: {
      author: "Andy Li",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      url: "https://commons.wikimedia.org/wiki/File:Great_Court,_British_Museum_2024-12-20.jpg",
    },
  },
  {
    id: 2,
    mapLevel: "ground",
    level: "Level 0",
    room: "Room 4",
    titleZh: "罗塞塔石碑",
    titleEn: "The Rosetta Stone",
    era: "公元前 196 年",
    origin: "拉希德（罗塞塔），埃及",
    description: "同一道祭司法令用圣书体、世俗体和古希腊文刻写。学者借助仍可读懂的古希腊文建立对应关系，让失传已久的古埃及文字重新被理解；它因此成为现代埃及学的关键入口。",
    observe: "从上到下辨认三种文字的密度与笔画差异。它只是原来更大石碑的一块残片，价值在文字关系，而不是石材本身。",
    x: 405,
    y: 354,
    source: museumStops[4].source,
    image: "assets/images/stops/stop-05.webp",
    photo: museumStops[4].photo,
  },
  {
    id: 3,
    mapLevel: "ground",
    level: "Level 0",
    room: "Room 4",
    titleZh: "拉美西斯二世巨像胸像",
    titleEn: "Bust of Ramesses the Great",
    era: "约公元前 1250 年",
    origin: "底比斯，埃及",
    description: "这尊约 7.5 吨的花岗岩胸像原属拉美西姆神庙的一座巨型坐像。它用理想化而对称的面容制造永恒王权，也让人一进入埃及馆就感到帝国尺度。",
    observe: "先退后看体量，再走近看肩背后的王名与象形文字。比较脸部的平静与整块石料的巨大重量。",
    x: 421,
    y: 386,
    source: museumStops[5].source,
    image: "assets/images/stops/stop-06.webp",
    photo: museumStops[5].photo,
  },
  {
    id: 4,
    mapLevel: "ground",
    level: "Level 0",
    room: "Rooms 6–8",
    titleZh: "拉马苏人面翼牛",
    titleEn: "Human-headed winged bull (Lamassu)",
    era: "约公元前 865–860 年",
    origin: "尼姆鲁德，今伊拉克",
    description: "人头、鸟翼与牛身组合成守护王宫门道的超自然形象：人的智慧、鸟的速度与牛的力量集中在同一个身体。它既保护入口，也让来访者在跨进宫殿前先感到君王威势。",
    observe: "绕到斜侧面数腿：亚述雕刻家让它从正面像稳稳站立，从侧面又像正在行走。部分拉马苏展品会因维护调整，以现场开放为准。",
    x: 350,
    y: 438,
    source: "https://www.britishmuseum.org/collection/object/W_1850-1228-2",
    image: "assets/images/day-route/lamassu.webp",
    photo: {
      author: "APK",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
      url: "https://commons.wikimedia.org/wiki/File:Lamassu_from_the_Throne_Room,_North-West_Palace_at_Nimrud,_British_Museum.jpg",
    },
  },
  {
    id: 5,
    mapLevel: "ground",
    level: "Level 0",
    room: "Room 10",
    titleZh: "亚述狮子狩猎浮雕",
    titleEn: "Assyrian Lion Hunt Reliefs",
    era: "公元前 645–635 年",
    origin: "尼尼微，今伊拉克",
    description: "浮雕来自亚述巴尼拔的北宫。宫廷狩猎不是普通娱乐，而是一场政治表演：国王制服狮子，象征王权战胜混乱、维持世界秩序。",
    observe: "不要只看国王。受伤狮子的肌肉、动作与表情极其细腻，正是这组权力宣传里最有生命感、也最令人难忘的部分。",
    x: 288,
    y: 392,
    source: museumStops[2].source,
    image: "assets/images/stops/stop-03.webp",
    photo: museumStops[2].photo,
  },
  {
    id: 6,
    mapLevel: "ground",
    level: "Level 0",
    room: "Room 18",
    titleZh: "帕特农神庙雕塑",
    titleEn: "Parthenon Sculptures",
    era: "公元前 438–432 年",
    origin: "雅典卫城，希腊",
    description: "这些大理石雕塑原本属于帕特农神庙，包括山墙雕像与表现泛雅典娜节游行的浮雕。它们让古典人体比例与衣褶处理近距离可见，也持续处在所有权与归还讨论的中心。",
    observe: "从正面看人物关系，再绕到侧面看躯干扭转、马匹节奏与贴体衣褶。看过雅典卫城的人会立刻感到空间语境的变化。",
    x: 124,
    y: 405,
    source: museumStops[3].source,
    image: "assets/images/stops/stop-04.webp",
    photo: museumStops[3].photo,
  },
  {
    id: 7,
    mapLevel: "upper",
    level: "Level 3",
    room: "Rooms 62–63",
    titleZh: "卡特贝特木乃伊与来世观",
    titleEn: "Mummy of Katebet",
    era: "约公元前 1330–1250 年",
    origin: "底比斯，埃及",
    description: "卡特贝特是卡纳克神庙的阿蒙女歌者。木乃伊、面具、棺椁与随葬品共同说明：保存身体、让名字延续、准备供奉并等待灵魂复活，是一整套关于来世的生命观，而不是单纯的猎奇技术。",
    observe: "看镀金面具、胸饰、假手臂和腿边的沙布提，再比较周围棺椁上的名字、神祇与仪式图像。房间号可能随陈列调整。",
    x: 421,
    y: 751,
    source: museumStops[20].source,
    image: "assets/images/stops/stop-21.webp",
    photo: museumStops[20].photo,
  },
  {
    id: 8,
    mapLevel: "ground",
    level: "Level 1",
    room: "Room 33",
    titleZh: "唐代三彩墓葬俑",
    titleEn: "Tang dynasty tomb figures",
    era: "公元 728 年前后",
    origin: "洛阳，相传出自刘庭训墓",
    description: "这组大型三彩俑包括镇墓兽、天王、文官、马、骆驼与牵夫。釉色、服饰和外来动物共同勾勒出唐代都城生活、墓葬观念与丝绸之路交流。",
    observe: "把人物、马和骆驼放在一起看：身份通过头冠与姿态区分，三彩釉则在烧制时自然流淌，每一处色斑都不完全可控。",
    x: 657,
    y: 153,
    source: "https://www.britishmuseum.org/collection/object/A_1936-1012-221",
    image: "assets/images/day-route/tang.webp",
    photo: {
      author: "Mike Peel",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      url: "https://commons.wikimedia.org/wiki/File:Chinese_Tang_tomb_figures,_British_Museum.jpg",
    },
  },
  {
    id: 9,
    mapLevel: "ground",
    level: "Level 1",
    room: "Room 33",
    titleZh: "康侯簋：青铜礼器",
    titleEn: "Kang Hou Gui",
    era: "约公元前 11 世纪",
    origin: "中国西周早期",
    description: "簋是祭祀祖先时盛放食物的青铜礼器。康侯簋的内壁铭文记录了周王平定商人叛乱并封赏康侯的事件：礼器不仅用于沟通祖先，也把政治记忆铸进金属，留给后世阅读。",
    observe: "看兽首大耳、腹部密集竖纹，再从上方找器内铭文。刚铸成时青铜偏金色，今天的绿色来自漫长氧化。",
    x: 591,
    y: 153,
    source: "https://www.britishmuseum.org/collection/object/A_1977-0404-1",
    image: "assets/images/day-route/bronze-gui.webp",
    photo: {
      author: "Wikimedia Commons contributor",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      url: "https://commons.wikimedia.org/wiki/File:British_Museum_Kang_Hou_Gui_Front.jpg",
    },
  },
  {
    id: 10,
    mapLevel: "ground",
    level: "Level 1",
    room: "Room 33b",
    titleZh: "良渚文化玉琮",
    titleEn: "Liangzhu jade cong",
    era: "约公元前 2500 年",
    origin: "中国新石器时代晚期",
    description: "玉琮外方内圆，常见于良渚文化高等级墓葬。没有同时代文字能告诉我们它的确切名称和用途，但漫长的研磨工序、角部神人兽面纹与墓葬位置都说明它具有特殊礼仪意义。",
    observe: "沿四个角找重复的面纹，再从顶部看方形外壁与圆形孔道。玉不能像木头那样直接削切，主要靠持续研磨成形。",
    x: 771,
    y: 208,
    source: "https://www.britishmuseum.org/collection/object/A_1937-0416-188",
    image: "assets/images/day-route/jade.webp",
    photo: {
      author: "Vassil",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      url: "https://commons.wikimedia.org/wiki/File:British_Museum_Chinese_jade_Neolithic_period_Liangzhu_culture_Cong_11022019_1399.jpg",
    },
  },
  {
    id: 11,
    mapLevel: "ground",
    level: "Level 2",
    room: "Room 95",
    titleZh: "中国瓷器：白瓷到大维德瓶",
    titleEn: "The David Vases",
    era: "元至正十一年（1351）",
    origin: "景德镇，中国",
    description: "Room 95 可以把白瓷、单色釉与青花放在同一条技术线上看。这对青花龙纹象耳瓶的长铭文记录了 1351 年的供奉人、日期和道观，因此成为元代青花瓷断代坐标；同馆唐代邢窑白瓷则能看出更早的纯净胎釉追求。",
    observe: "先在白瓷柜看形体、胎色与暗花，再到大维德瓶找颈部铭文、象耳、云龙、凤凰与缠枝牡丹。它们是带有明确宗教供奉信息的祭器。",
    x: 500,
    y: 87,
    source: "https://www.britishmuseum.org/collection/object/A_PDF-B-613",
    image: "assets/images/day-route/david.webp",
    photo: {
      author: "BabelStone",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
      url: "https://commons.wikimedia.org/wiki/File:The_David_Vases,_1351.jpg",
    },
  },
  {
    id: 12,
    mapLevel: "upper",
    level: "Level 4",
    room: "Room 91a · 限时展出",
    titleZh: "《女史箴图》",
    titleEn: "The Admonitions Scroll",
    era: "约公元 400–700 年",
    origin: "中国，传统归于顾恺之体系",
    description: "现存画卷以九段图像阐释张华的《女史箴》，一般被视为公元 5 至 7 世纪的早期摹本，是研究早期中国人物叙事画的里程碑。它后来进入清宫收藏，并留下历代印记与题跋。",
    observe: "重点看细而连贯的线条怎样塑造衣纹、姿态与人物关系，不必只追求颜色。原作因保护需要通常每年仅短期展出；Room 33 常设数字屏可全年查看全卷。",
    x: 776,
    y: 667,
    source: "https://www.britishmuseum.org/collection/object/A_1903-0408-0-1",
    image: "assets/images/day-route/admonitions.webp",
    photo: {
      author: "Gu Kaizhi (attributed), digital reproduction",
      license: "Public domain",
      licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
      url: "https://commons.wikimedia.org/wiki/File:Admonitions_Scroll.jpg",
    },
  },
];

const STORAGE_PREFIX = "travel-guide:british-museum:visited:v2";
const SVG_NS = "http://www.w3.org/2000/svg";

const officialFloorDefinitions = {
  L0: {
    points: "75,125 390,32 656,135 340,238",
    side: "75,125 340,238 340,251 75,138",
    label: { x: 94, y: 117, text: "LEVEL 0 · GROUND" },
    rooms: [
      "150,119 257,88 300,105 193,138",
      "315,72 391,50 475,82 398,104",
      "465,95 555,122 502,151 414,123",
      "225,158 341,124 411,151 294,187",
    ],
  },
  "L-2": {
    points: "70,342 225,295 348,342 192,389",
    side: "70,342 192,389 192,402 70,355",
    label: { x: 85, y: 335, text: "LEVEL -2 · AFRICA" },
    rooms: ["132,337 221,310 283,334 194,362"],
  },
  L3: {
    points: "260,395 600,290 865,390 520,505",
    side: "260,395 520,505 520,518 260,408",
    label: { x: 278, y: 386, text: "LEVEL 3 · UPPER" },
    rooms: [
      "370,389 470,358 531,382 432,415",
      "500,350 602,317 668,343 566,377",
      "616,370 714,341 774,364 678,396",
      "474,423 575,391 645,417 543,452",
      "597,436 693,405 754,429 656,462",
    ],
  },
  L5: {
    points: "638,87 776,45 885,86 747,130",
    side: "638,87 747,130 747,141 638,98",
    label: { x: 650, y: 80, text: "LEVEL 5 · JAPAN" },
    rooms: ["700,84 776,61 830,80 754,104"],
  },
};

const routeConfigs = {
  journal: {
    stops: journalStops,
    floorOrder: ["all", "ground", "upper", "lower"],
    floorLabels: { all: "全部", ground: "Ground", upper: "Upper", lower: "Lower" },
    eyebrow: "一日世界文明主线",
    title: "大英博物馆<br /><em>不能只留两小时</em>",
    description:
      "上午跟讲解走世界文明主线，下午把时间留给真正感兴趣的展厅。从大中庭认路，再看权力、信仰、死亡、审美与记忆怎样被一件件保存下来。",
    tags: ["☀ 上午到下午", "✦ 12 个看点", "↕ 3 张馆方楼层图", "£ 免费参观"],
    ticketTitle: "A DAY OF<br />CIVILISATIONS",
    ticketMeta: "№ 2026 · 12 STOPS",
    heading: "从大中庭先认路",
    mapLabel: "GROUND · UPPER · LOWER",
    documentTitle: "大英博物馆一日世界文明主线 · 我的英国漫游手账",
    source: "https://www.britishmuseum.org/visit/museum-map",
  },
  official: {
    stops: museumStops,
    floorOrder: ["all", "L0", "L-2", "L3", "L5"],
    floorLabels: { all: "全部", L0: "L0", "L-2": "L-2", L3: "L3", L5: "L5" },
    eyebrow: "馆方三小时路线 · 第二选择",
    title: "大英博物馆<br /><em>三小时寻宝记</em>",
    description:
      "时间有限时，跟随馆方 22 站 object trail，从中世纪星盘走到江户武士甲胄，一次浏览横跨世界文明的代表作。",
    tags: ["⏱ 约 3 小时", "✦ 22 站", "↕ 4 个楼层", "£ 免费参观"],
    ticketTitle: "THE GREAT<br />COURT ROUTE",
    ticketMeta: "№ 2026 · 22 STOPS",
    heading: "今天从哪里开始？",
    mapLabel: "2.5D FLOOR GUIDE",
    documentTitle: "大英博物馆三小时寻宝记 · 我的英国漫游手账",
    source: "https://www.britishmuseum.org/visit/object-trails/three-hours-museum",
  },
};

const state = {
  routeName: "journal",
  currentStops: { journal: 1, official: 1 },
  selectedFloor: "all",
  visitedByRoute: {
    journal: loadVisited("journal", journalStops.length),
    official: loadVisited("official", museumStops.length),
  },
  toastTimer: null,
  museumRendered: false,
};

const homePage = document.querySelector("#home-page");
const museumPage = document.querySelector("#museum-page");
const museumMap = document.querySelector("#museum-map");
const detailPanel = document.querySelector("#detail-panel");
const routeStrip = document.querySelector("#route-strip");
const floorTabs = document.querySelector("#floor-tabs");
const progressCount = document.querySelector("#progress-count");
const progressBar = document.querySelector("#progress-bar");
const closureAlert = document.querySelector("#closure-alert");
const creditsDialog = document.querySelector("#credits-dialog");
const creditsList = document.querySelector("#credits-list");
const toast = document.querySelector("#toast");

function activeConfig() {
  return routeConfigs[state.routeName];
}

function activeStops() {
  return activeConfig().stops;
}

function activeVisited() {
  return state.visitedByRoute[state.routeName];
}

function currentStopId() {
  return state.currentStops[state.routeName];
}

function storageKey(routeName) {
  return `${STORAGE_PREFIX}:${routeName}`;
}

function loadVisited(routeName, length) {
  try {
    const current = localStorage.getItem(storageKey(routeName));
    const legacy = routeName === "official" ? localStorage.getItem("travel-guide:british-museum:visited:v1") : null;
    const saved = JSON.parse(current || legacy || "[]");
    return new Set(saved.filter((id) => Number.isInteger(id) && id >= 1 && id <= length));
  } catch {
    return new Set();
  }
}

function saveVisited() {
  localStorage.setItem(storageKey(state.routeName), JSON.stringify([...activeVisited()].sort((a, b) => a - b)));
}

function imagePath(stop) {
  return stop.image || `assets/images/stops/stop-${String(stop.id).padStart(2, "0")}.webp`;
}

function svgElement(tag, attributes = {}) {
  const node = document.createElementNS(SVG_NS, tag);
  Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
  return node;
}

function addSvgText(parent, attributes, text) {
  const node = svgElement("text", attributes);
  node.textContent = text;
  parent.append(node);
  return node;
}

function markerFloor(stop) {
  return stop.mapLevel || stop.level;
}

function floorIsMuted(level) {
  return state.selectedFloor !== "all" && state.selectedFloor !== level;
}

function appendMarker(stop) {
  const classes = ["marker-group"];
  if (stop.id === currentStopId()) classes.push("is-active");
  if (activeVisited().has(stop.id)) classes.push("is-visited");
  if (floorIsMuted(markerFloor(stop))) classes.push("is-muted");

  const marker = svgElement("g", {
    class: classes.join(" "),
    transform: `translate(${stop.x} ${stop.y})`,
    tabindex: "0",
    role: "button",
    "aria-label": `第 ${stop.id} 站，${stop.titleZh}，${stop.room}`,
    "data-stop-id": stop.id,
    "data-level": markerFloor(stop),
  });
  marker.append(svgElement("circle", { class: "marker-hit", r: "27" }));
  marker.append(svgElement("circle", { class: "marker-dot", r: "17" }));
  addSvgText(marker, { class: "marker-number", x: "0", y: "1" }, String(stop.id));
  marker.addEventListener("click", () => selectStop(stop.id, { scrollOnMobile: true }));
  marker.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectStop(stop.id, { scrollOnMobile: true });
    }
  });
  museumMap.append(marker);
}

function renderOfficialMap() {
  museumMap.replaceChildren();
  museumMap.setAttribute("viewBox", "0 0 900 560");

  const title = svgElement("title", { id: "museum-map-title" });
  title.textContent = "大英博物馆三小时路线楼层示意图";
  const description = svgElement("desc", { id: "museum-map-desc" });
  description.textContent = "四个楼层与二十二个可点击藏品站点，路线从一号站连接至二十二号站。";
  museumMap.append(title, description);

  Object.entries(officialFloorDefinitions).forEach(([level, floor]) => {
    const group = svgElement("g", {
      class: `floor-group ${floorIsMuted(level) ? "is-muted" : ""}`,
      "data-level": level,
    });
    const shadowPoints = floor.points
      .split(" ")
      .map((pair) => pair.split(",").map(Number))
      .map(([x, y]) => `${x + 8},${y + 10}`)
      .join(" ");
    group.append(svgElement("polygon", { class: "floor-shadow", points: shadowPoints }));
    group.append(svgElement("polygon", { class: "floor-side", points: floor.side }));
    group.append(svgElement("polygon", { class: `floor-plate floor-top-${level.toLowerCase().replace("-", "m")}`, points: floor.points }));
    floor.rooms.forEach((points) => group.append(svgElement("polygon", { class: "floor-room", points })));
    addSvgText(group, { class: "floor-name", x: floor.label.x, y: floor.label.y }, floor.label.text);
    museumMap.append(group);
  });

  const routeGroups = [
    { level: "L0", ids: [1, 2, 3, 4, 5, 6] },
    { level: "L0", ids: [8, 9] },
    { level: "L3", ids: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21] },
  ];

  routeGroups.forEach(({ level, ids }) => {
    const points = ids
      .map((id) => museumStops[id - 1])
      .map((stop) => `${stop.x},${stop.y}`)
      .join(" ");
    museumMap.append(
      svgElement("polyline", {
        class: `route-segment ${floorIsMuted(level) ? "is-muted" : ""}`,
        points,
        "data-level": level,
      }),
    );
  });

  [
    [6, 7, "DOWN"],
    [7, 8, "UP"],
    [9, 10, "UP"],
    [21, 22, "UP"],
  ].forEach(([fromId, toId, label]) => {
    const from = museumStops[fromId - 1];
    const to = museumStops[toId - 1];
    const muted = state.selectedFloor !== "all" && ![from.level, to.level].includes(state.selectedFloor);
    const line = svgElement("line", {
      class: `level-connector ${muted ? "is-muted" : ""}`,
      x1: from.x,
      y1: from.y,
      x2: to.x,
      y2: to.y,
    });
    museumMap.append(line);
    addSvgText(
      museumMap,
      {
        class: `connector-label ${muted ? "is-muted" : ""}`,
        x: (from.x + to.x) / 2 + 5,
        y: (from.y + to.y) / 2 - 5,
      },
      label,
    );
  });

  museumStops.forEach(appendMarker);
}

function addJournalRoom(parent, { x, y, width, height, label, tone = "sand", vertical = false, dashed = false }) {
  const room = svgElement("g", { class: `journal-room journal-room-${tone} ${dashed ? "is-dashed" : ""}` });
  room.append(svgElement("rect", { x, y, width, height, rx: "5" }));
  addSvgText(
    room,
    {
      class: `journal-room-number ${vertical ? "is-vertical" : ""}`,
      x: x + width / 2,
      y: y + height / 2 + 1,
      transform: vertical ? `rotate(90 ${x + width / 2} ${y + height / 2})` : "",
    },
    label,
  );
  parent.append(room);
}

function addJournalFloorTitle(parent, { title, subtitle, x, y, width = 220 }) {
  const label = svgElement("g", { class: "journal-floor-title" });
  label.append(svgElement("rect", { x, y, width, height: "42", rx: "18" }));
  addSvgText(label, { class: "journal-floor-title-main", x: x + 15, y: y + 17 }, title);
  addSvgText(label, { class: "journal-floor-title-sub", x: x + 15, y: y + 32 }, subtitle);
  parent.append(label);
}

function addJournalTransfer(parent, { x, y, label, width = 180 }) {
  const transfer = svgElement("g", { class: "journal-transfer" });
  transfer.append(svgElement("rect", { x, y, width, height: "27", rx: "13" }));
  addSvgText(transfer, { x: x + 12, y: y + 18 }, label);
  parent.append(transfer);
}

function addJournalStair(parent, { x, y, key, label, levels, compact = false }) {
  const stair = svgElement("g", {
    class: "journal-stair",
    role: "img",
    "aria-label": `${label}，${levels}`,
    transform: `translate(${x} ${y})`,
  });
  const size = compact ? 27 : 32;
  stair.append(svgElement("rect", { class: "journal-stair-box", width: size, height: size, rx: "5" }));
  stair.append(
    svgElement("path", {
      class: "journal-stair-steps",
      d: compact ? "M5 21h5v-4h5v-4h5V9h4" : "M6 25h5v-5h5v-5h5v-5h5",
    }),
  );
  const badgeX = size - 2;
  stair.append(svgElement("circle", { class: "journal-stair-badge", cx: badgeX, cy: "2", r: "8" }));
  addSvgText(stair, { class: "journal-stair-key", x: badgeX, y: "2" }, key);
  addSvgText(stair, { class: "journal-stair-label", x: size / 2, y: size + 11 }, label);
  addSvgText(stair, { class: "journal-stair-levels", x: size / 2, y: size + 21 }, levels);
  parent.append(stair);
}

function addJournalLift(parent, { x, y, levels }) {
  const lift = svgElement("g", { class: "journal-lift", transform: `translate(${x} ${y})` });
  lift.append(svgElement("rect", { width: "25", height: "25", rx: "5" }));
  addSvgText(lift, { x: "12.5", y: "13" }, "↕");
  if (levels) addSvgText(lift, { class: "journal-lift-levels", x: "12.5", y: "34" }, levels);
  parent.append(lift);
}

function addJournalRoutePath(parent, { d, className = "journal-route-walk" }) {
  parent.append(
    svgElement("path", {
      class: `route-segment journal-route ${className}`,
      d,
      "marker-end": "url(#journal-route-arrow)",
    }),
  );
}

function addJournalPathLabel(parent, { x, y, label, width = 132 }) {
  const note = svgElement("g", { class: "journal-path-label" });
  note.append(svgElement("rect", { x, y, width, height: "24", rx: "12" }));
  addSvgText(note, { x: x + width / 2, y: y + 16 }, label);
  parent.append(note);
}

function addJournalMapDefs() {
  const defs = svgElement("defs");
  const marker = svgElement("marker", {
    id: "journal-route-arrow",
    viewBox: "0 0 10 10",
    refX: "8",
    refY: "5",
    markerWidth: "6",
    markerHeight: "6",
    orient: "auto-start-reverse",
  });
  marker.append(svgElement("path", { d: "M 0 0 L 10 5 L 0 10 z" }));
  defs.append(marker);
  museumMap.append(defs);
}

function renderJournalMap() {
  museumMap.replaceChildren();
  museumMap.setAttribute("viewBox", "0 0 900 1218");

  const title = svgElement("title", { id: "museum-map-title" });
  title.textContent = "大英博物馆 Ground、Upper、Lower 三张楼层图";
  const description = svgElement("desc", { id: "museum-map-desc" });
  description.textContent =
    "按馆方地图结构重绘，标出主要展厅、环廊、四组楼梯和上下楼衔接。路线先走 Ground Level 0，经西楼梯到木乃伊展厅，再由北楼梯前往中国馆和瓷器馆。";
  museumMap.append(title, description);
  addJournalMapDefs();

  const ground = svgElement("g", {
    class: `journal-floor-group ${floorIsMuted("ground") ? "is-muted" : ""}`,
    "data-level": "ground",
  });
  ground.append(svgElement("rect", { class: "journal-floor-card journal-ground-card", x: "12", y: "12", width: "876", height: "540", rx: "28" }));
  addJournalFloorTitle(ground, {
    title: "GROUND FLOOR",
    subtitle: "Level -1 · 0 · 1 · 2",
    x: 34,
    y: 30,
    width: 230,
  });
  const compass = svgElement("g", { class: "journal-compass", transform: "translate(842 43)" });
  compass.append(svgElement("path", { d: "M0 20 8 0l8 20-8-5z" }));
  addSvgText(compass, { x: "8", y: "32" }, "N");
  ground.append(compass);

  addSvgText(ground, { class: "journal-level-caption", x: "344", y: "89" }, "LEVEL 2");
  addJournalRoom(ground, { x: 450, y: 65, width: 130, height: 44, label: "95 · CERAMICS", tone: "sky" });
  addJournalRoom(ground, { x: 590, y: 65, width: 110, height: 44, label: "67", tone: "sky" });
  ground.append(svgElement("path", { class: "journal-level-link", d: "M585 109v17" }));
  addJournalStair(ground, { x: 569, y: 93, key: "N²", label: "北楼梯", levels: "L1 ↕ L2", compact: true });

  addSvgText(ground, { class: "journal-level-caption", x: "344", y: "155" }, "LEVEL 1");
  addJournalRoom(ground, { x: 430, y: 131, width: 74, height: 45, label: "33a", tone: "mint" });
  addJournalRoom(ground, { x: 511, y: 131, width: 231, height: 45, label: "33 · CHINA", tone: "mint" });
  addJournalRoom(ground, { x: 749, y: 131, width: 46, height: 116, label: "33b", tone: "mint", vertical: true });
  const keyB = svgElement("g", { class: "journal-official-key" });
  keyB.append(svgElement("rect", { x: "699", y: "137", width: "22", height: "20", rx: "5" }));
  addSvgText(keyB, { x: "710", y: "151" }, "B");
  ground.append(keyB);
  ground.append(svgElement("path", { class: "journal-level-link", d: "M585 176v52" }));
  addJournalStair(ground, { x: 569, y: 181, key: "N¹", label: "北楼梯", levels: "L0 ↕ L1", compact: true });
  addJournalLift(ground, { x: 608, y: 183, levels: "L0–L2" });

  addSvgText(ground, { class: "journal-level-caption", x: "344", y: "231" }, "LEVEL -1");
  addJournalRoom(ground, { x: 430, y: 211, width: 312, height: 32, label: "Anthropology Library", tone: "quiet" });

  addSvgText(ground, { class: "journal-level-caption", x: "54", y: "275" }, "LEVEL 0 · MAIN GALLERIES");
  ground.append(svgElement("path", { class: "journal-building-outline", d: "M48 316H208V286h242v-27h345v55h42v201H700v25H246v-25H48z" }));
  addJournalRoom(ground, { x: 60, y: 344, width: 115, height: 157, label: "18 · PARTHENON", tone: "coral", vertical: true });
  addJournalRoom(ground, { x: 181, y: 371, width: 39, height: 96, label: "17", tone: "coral", vertical: true });
  addJournalRoom(ground, { x: 181, y: 473, width: 39, height: 41, label: "16", tone: "coral" });
  addJournalRoom(ground, { x: 226, y: 300, width: 38, height: 55, label: "20", tone: "quiet" });
  addJournalRoom(ground, { x: 226, y: 361, width: 38, height: 70, label: "19", tone: "quiet", vertical: true });
  addJournalRoom(ground, { x: 270, y: 318, width: 47, height: 122, label: "9", tone: "ochre", vertical: true });
  addJournalRoom(ground, { x: 270, y: 446, width: 54, height: 68, label: "10", tone: "ochre" });
  addJournalRoom(ground, { x: 324, y: 318, width: 46, height: 73, label: "8", tone: "ochre" });
  addJournalRoom(ground, { x: 330, y: 398, width: 40, height: 116, label: "7", tone: "ochre", vertical: true });
  addJournalRoom(ground, { x: 377, y: 313, width: 61, height: 164, label: "4 · EGYPT", tone: "sand", vertical: true });
  addJournalRoom(ground, { x: 331, y: 483, width: 107, height: 31, label: "6", tone: "ochre" });
  addJournalRoom(ground, { x: 418, y: 263, width: 214, height: 44, label: "30", tone: "quiet" });
  addJournalRoom(ground, { x: 649, y: 263, width: 76, height: 48, label: "24", tone: "sky" });
  addJournalRoom(ground, { x: 731, y: 276, width: 48, height: 39, label: "26", tone: "sky" });
  addJournalRoom(ground, { x: 785, y: 276, width: 42, height: 39, label: "27", tone: "sky" });
  addJournalRoom(ground, { x: 765, y: 322, width: 62, height: 157, label: "1", tone: "quiet", vertical: true });
  addJournalRoom(ground, { x: 714, y: 485, width: 113, height: 29, label: "2 · 2a", tone: "quiet" });
  addJournalRoom(ground, { x: 619, y: 485, width: 72, height: 29, label: "3", tone: "quiet" });
  addJournalRoom(ground, { x: 246, y: 520, width: 82, height: 20, label: "13", tone: "coral" });
  addJournalRoom(ground, { x: 334, y: 520, width: 104, height: 20, label: "6", tone: "ochre" });
  ground.append(svgElement("rect", { class: "journal-court", x: "447", y: "315", width: "266", height: "199", rx: "96" }));
  ground.append(svgElement("circle", { class: "journal-reading-room", cx: "580", cy: "406", r: "61" }));
  addSvgText(ground, { class: "journal-court-label", x: "580", y: "399" }, "READING ROOM");
  addSvgText(ground, { class: "journal-court-label is-secondary", x: "580", y: "422" }, "GREAT COURT 环廊");
  ground.append(svgElement("path", { class: "journal-corridor", d: "M438 331h24v146h-24zM370 378h77v24h-77zM220 378h50v24h-50zM175 389h51v24h-51z" }));
  addJournalStair(ground, { x: 342, y: 278, key: "W", label: "西楼梯", levels: "L0 ↕ L3" });
  addJournalStair(ground, { x: 707, y: 316, key: "E", label: "东楼梯", levels: "L0 ↕ L3" });
  addJournalStair(ground, { x: 631, y: 312, key: "N", label: "北楼梯", levels: "L0 ↕ L1" });
  addJournalStair(ground, { x: 532, y: 480, key: "S", label: "南楼梯", levels: "L0 ↕ L3" });
  addJournalLift(ground, { x: 669, y: 320, levels: "L0–L3" });
  ground.append(svgElement("path", { class: "journal-entrance", d: "M520 518h92l-12 21h-68z" }));
  addSvgText(ground, { class: "journal-entrance-label", x: "566", y: "536" }, "MAIN ENTRANCE · GREAT RUSSELL STREET");

  addJournalRoutePath(ground, { d: "M565 414H470V354H405V386H421V438H350V392H288V405H124" });
  addJournalRoutePath(ground, { d: "M124 405H239V295H342", className: "journal-route-transfer" });
  addJournalPathLabel(ground, { x: 65, y: 286, label: "上午主线 01–06", width: 145 });
  addJournalTransfer(ground, { x: 50, y: 511, label: "06 → W 西楼梯 ↑ Upper L3", width: 188 });

  addJournalRoutePath(ground, { d: "M631 328V228H585V153H657H591H720V208H771", className: "journal-route-return" });
  addJournalRoutePath(ground, { d: "M771 208H720V153H585V87H500", className: "journal-route-return" });
  addJournalPathLabel(ground, { x: 650, y: 226, label: "下午中国馆 08–11", width: 160 });
  addJournalTransfer(ground, { x: 278, y: 49, label: "11 → N 北楼梯 ↑ Upper L4", width: 193 });
  museumMap.append(ground);

  const upper = svgElement("g", {
    class: `journal-floor-group ${floorIsMuted("upper") ? "is-muted" : ""}`,
    "data-level": "upper",
  });
  upper.append(svgElement("rect", { class: "journal-floor-card journal-upper-card", x: "12", y: "572", width: "876", height: "463", rx: "28" }));
  addJournalFloorTitle(upper, {
    title: "UPPER FLOOR",
    subtitle: "Level 3 · 4 · 5",
    x: 34,
    y: 590,
    width: 220,
  });
  addSvgText(upper, { class: "journal-level-caption", x: "534", y: "611" }, "LEVEL 5");
  addJournalRoom(upper, { x: 600, y: 590, width: 60, height: 32, label: "94", tone: "sky" });
  addJournalRoom(upper, { x: 665, y: 590, width: 60, height: 32, label: "93", tone: "sky" });
  addJournalRoom(upper, { x: 730, y: 590, width: 60, height: 32, label: "92", tone: "sky" });
  addSvgText(upper, { class: "journal-level-caption", x: "534", y: "657" }, "LEVEL 4");
  addJournalStair(upper, { x: 555, y: 642, key: "N", label: "北楼梯", levels: "L3 ↕ L5", compact: true });
  addJournalRoom(upper, { x: 600, y: 644, width: 80, height: 38, label: "90", tone: "mint" });
  addJournalRoom(upper, { x: 685, y: 644, width: 65, height: 38, label: "90a", tone: "mint" });
  addJournalRoom(upper, { x: 755, y: 644, width: 67, height: 38, label: "91a*", tone: "mint", dashed: true });
  addSvgText(upper, { class: "journal-temporary-note", x: "788", y: "694" }, "*历史/限时展位，以现场为准");
  addSvgText(upper, { class: "journal-level-caption", x: "205", y: "731" }, "LEVEL 3 · MAIN RING");
  upper.append(svgElement("path", { class: "journal-building-outline", d: "M226 724H650v53h46v202H625v34H286v-34h-60z" }));
  addJournalRoom(upper, { x: 250, y: 734, width: 68, height: 42, label: "61", tone: "coral" });
  addJournalRoom(upper, { x: 323, y: 734, width: 75, height: 42, label: "62", tone: "coral" });
  addJournalRoom(upper, { x: 403, y: 734, width: 75, height: 42, label: "63", tone: "coral" });
  addJournalRoom(upper, { x: 483, y: 734, width: 75, height: 42, label: "64", tone: "coral" });
  addJournalRoom(upper, { x: 563, y: 734, width: 68, height: 42, label: "65", tone: "coral" });
  addJournalRoom(upper, { x: 420, y: 688, width: 70, height: 38, label: "66", tone: "coral" });
  addJournalRoom(upper, { x: 250, y: 782, width: 42, height: 42, label: "59", tone: "ochre" });
  addJournalRoom(upper, { x: 226, y: 830, width: 43, height: 149, label: "69–73", tone: "sand", vertical: true });
  addJournalRoom(upper, { x: 631, y: 782, width: 42, height: 42, label: "53", tone: "ochre" });
  addJournalRoom(upper, { x: 650, y: 830, width: 46, height: 149, label: "49–52", tone: "ochre", vertical: true });
  addJournalRoom(upper, { x: 286, y: 979, width: 109, height: 31, label: "68", tone: "quiet" });
  addJournalRoom(upper, { x: 400, y: 979, width: 72, height: 31, label: "36 · 40", tone: "quiet" });
  addJournalRoom(upper, { x: 477, y: 979, width: 148, height: 31, label: "41 · 42 · 43", tone: "quiet" });
  upper.append(svgElement("rect", { class: "journal-upper-court", x: "295", y: "783", width: "330", height: "190", rx: "92" }));
  upper.append(svgElement("circle", { class: "journal-upper-void", cx: "460", cy: "875", r: "67" }));
  addSvgText(upper, { class: "journal-upper-court-label", x: "460", y: "862" }, "GREAT COURT");
  addSvgText(upper, { class: "journal-upper-court-label", x: "460", y: "878" }, "RESTAURANT / VOID");
  addJournalStair(upper, { x: 209, y: 775, key: "W", label: "西楼梯", levels: "L3 ↓ L0" });
  addJournalStair(upper, { x: 680, y: 775, key: "E", label: "东楼梯", levels: "L3 ↓ L0" });
  addJournalStair(upper, { x: 301, y: 938, key: "S", label: "南楼梯", levels: "L3 ↓ L0" });
  addJournalStair(upper, { x: 529, y: 691, key: "N", label: "北楼梯", levels: "L3 ↕ L4" });
  addJournalLift(upper, { x: 568, y: 695, levels: "L1–L4" });

  addJournalRoutePath(upper, { d: "M225 791H292V751H421" });
  addJournalRoutePath(upper, { d: "M421 751H515V707H529", className: "journal-route-transfer" });
  addJournalPathLabel(upper, { x: 303, y: 790, label: "07 · 木乃伊 62–63", width: 157 });
  addJournalTransfer(upper, { x: 36, y: 694, label: "W 西楼梯抵达 → 07", width: 165 });
  addJournalTransfer(upper, { x: 36, y: 728, label: "07 → N 北楼梯 ↓ Room 33", width: 187 });
  addJournalRoutePath(upper, { d: "M569 657H706V667H776", className: "journal-route-return" });
  addJournalTransfer(upper, { x: 278, y: 604, label: "11 → N 北楼梯 ↑ 12", width: 171 });
  museumMap.append(upper);

  const lower = svgElement("g", {
    class: `journal-floor-group ${floorIsMuted("lower") ? "is-muted" : ""}`,
    "data-level": "lower",
  });
  lower.append(svgElement("rect", { class: "journal-floor-card journal-lower-card", x: "12", y: "1055", width: "876", height: "150", rx: "28" }));
  addJournalFloorTitle(lower, {
    title: "LOWER FLOOR",
    subtitle: "Level -1 · -2",
    x: 34,
    y: 1073,
    width: 220,
  });
  addJournalStair(lower, { x: 445, y: 1082, key: "S", label: "南楼梯", levels: "L0 ↓ L-2", compact: true });
  addJournalRoom(lower, { x: 500, y: 1076, width: 238, height: 34, label: "25 · AFRICA · LEVEL -2", tone: "ochre" });
  lower.append(svgElement("path", { class: "journal-lower-centre", d: "M526 1118q96-35 192 0l-18 39H544z" }));
  addSvgText(lower, { class: "journal-lower-label", x: "622", y: "1141" }, "CLORE CENTRE");
  addJournalRoom(lower, { x: 500, y: 1163, width: 238, height: 25, label: "FORD CENTRE · LEVEL -1", tone: "quiet" });
  const noStops = svgElement("g", { class: "journal-no-stops" });
  noStops.append(svgElement("rect", { x: "270", y: "1120", width: "150", height: "38", rx: "17" }));
  addSvgText(noStops, { x: "345", y: "1144" }, "本路线无停靠点");
  lower.append(noStops);
  museumMap.append(lower);

  journalStops.forEach(appendMarker);
}

function renderMuseumMap() {
  museumMap.classList.toggle("journal-map-mode", state.routeName === "journal");
  museumMap.parentElement?.classList.toggle("journal-shell-mode", state.routeName === "journal");
  if (state.routeName === "journal") renderJournalMap();
  else renderOfficialMap();
}

function renderFloorTabs() {
  floorTabs.replaceChildren();
  const config = activeConfig();
  config.floorOrder.forEach((level) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = config.floorLabels[level];
    button.setAttribute("aria-pressed", String(state.selectedFloor === level));
    button.setAttribute("aria-label", level === "all" ? "显示全部楼层" : `只突出显示 ${level} 楼层`);
    button.addEventListener("click", () => {
      state.selectedFloor = level;
      renderFloorTabs();
      renderMuseumMap();
    });
    floorTabs.append(button);
  });
}

function renderRouteStrip() {
  routeStrip.replaceChildren();
  activeStops().forEach((stop) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = String(stop.id).padStart(2, "0");
    button.title = `${stop.titleZh} · ${stop.room}`;
    button.setAttribute("aria-label", `前往第 ${stop.id} 站：${stop.titleZh}`);
    if (stop.id === currentStopId()) button.setAttribute("aria-current", "step");
    if (activeVisited().has(stop.id)) button.classList.add("is-visited");
    button.addEventListener("click", () => selectStop(stop.id));
    item.append(button);
    routeStrip.append(item);
  });

  requestAnimationFrame(() => {
    const activeButton = routeStrip.querySelector('[aria-current="step"]');
    if (!activeButton) return;
    routeStrip.scrollTo({
      left: activeButton.offsetLeft - routeStrip.clientWidth / 2 + activeButton.clientWidth / 2,
      behavior: "smooth",
    });
  });
}

function renderDetail() {
  const stop = activeStops()[currentStopId() - 1];
  const visited = activeVisited().has(stop.id);

  detailPanel.innerHTML = `
    <figure class="detail-figure">
      <span class="detail-number">${String(stop.id).padStart(2, "0")}</span>
      <img src="${imagePath(stop)}" alt="${stop.titleZh}实拍图" width="760" height="920" decoding="async" />
      <figcaption>
        摄影：<a href="${stop.photo.url}" target="_blank" rel="noreferrer">${stop.photo.author}</a>
        · <a href="${stop.photo.licenseUrl}" target="_blank" rel="noreferrer">${stop.photo.license}</a>
        · 图片已裁切压缩
      </figcaption>
    </figure>
    <div class="detail-body">
      <div class="detail-meta">
        <span>${stop.level}</span>
        <span>${stop.room}</span>
        <span>${stop.era}</span>
        <span>${stop.origin}</span>
      </div>
      <h3 class="detail-title">${stop.titleZh}</h3>
      <p class="detail-title-en">${stop.titleEn}</p>
      <p class="detail-description">${stop.description}</p>
      <div class="look-closer">
        <strong>现场重点看</strong>
        <p>${stop.observe}</p>
      </div>
      <a class="detail-source" href="${stop.source}" target="_blank" rel="noreferrer">查看大英博物馆藏品记录 ↗</a>
      <div class="detail-actions">
        <button class="previous-stop" type="button" ${stop.id === 1 ? "disabled" : ""} aria-label="上一站">←</button>
        <button class="visit-toggle ${visited ? "is-visited" : ""}" type="button">
          ${visited ? "✓ 已打卡" : "标记为已参观"}
        </button>
        <button class="next-stop" type="button" ${stop.id === activeStops().length ? "disabled" : ""} aria-label="下一站">→</button>
      </div>
    </div>
  `;

  detailPanel.querySelector(".previous-stop")?.addEventListener("click", () => selectStop(stop.id - 1));
  detailPanel.querySelector(".next-stop")?.addEventListener("click", () => selectStop(stop.id + 1));
  detailPanel.querySelector(".visit-toggle")?.addEventListener("click", () => toggleVisited(stop.id));
}

function updateProgress() {
  const count = activeVisited().size;
  const total = activeStops().length;
  progressCount.textContent = `${count} / ${total}`;
  progressBar.style.width = `${(count / total) * 100}%`;
  progressBar.parentElement.setAttribute("aria-label", `已完成 ${count} 站，共 ${total} 站`);
}

function renderInteractiveRoute() {
  renderRouteOptions();
  renderRouteIdentity();
  renderFloorTabs();
  renderMuseumMap();
  renderRouteStrip();
  renderDetail();
  updateProgress();
  closureAlert.hidden = false;
}

function selectStop(id, { scrollOnMobile = false } = {}) {
  if (id < 1 || id > activeStops().length) return;
  state.currentStops[state.routeName] = id;
  const stop = activeStops()[id - 1];
  if (state.selectedFloor !== "all" && state.selectedFloor !== markerFloor(stop)) {
    state.selectedFloor = markerFloor(stop);
  }
  renderInteractiveRoute();
  if (scrollOnMobile && window.matchMedia("(max-width: 720px)").matches) {
    detailPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function toggleVisited(id) {
  const visited = activeVisited();
  const wasVisited = visited.has(id);
  if (wasVisited) visited.delete(id);
  else visited.add(id);
  saveVisited();
  renderInteractiveRoute();
  showToast(wasVisited ? "已取消这一站的打卡。" : `第 ${id} 站已点亮！`);
  requestAnimationFrame(() => detailPanel.querySelector(".visit-toggle")?.focus());
}

function renderCredits() {
  creditsList.replaceChildren();
  [...journalStops, ...museumStops].forEach((stop, index) => {
    const item = document.createElement("li");
    const routeLabel = index < journalStops.length ? "一日线" : "三小时线";
    item.innerHTML = `
      <span>${routeLabel}<br>${String(stop.id).padStart(2, "0")}</span>
      <div>
        <a href="${stop.photo.url}" target="_blank" rel="noreferrer">${stop.titleZh} · ${stop.photo.author} ↗</a>
        <small><a href="${stop.photo.licenseUrl}" target="_blank" rel="noreferrer">${stop.photo.license}</a> · 来源 Wikimedia Commons · 本站版本已压缩并可能裁切</small>
      </div>
    `;
    creditsList.append(item);
  });
}

function renderRouteOptions() {
  document.querySelectorAll("[data-route]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.route === state.routeName));
  });
}

function renderRouteIdentity() {
  const config = activeConfig();
  document.querySelector("#hero-eyebrow").innerHTML = `<span>02</span> ${config.eyebrow}`;
  document.querySelector("#museum-title").innerHTML = config.title;
  document.querySelector("#hero-description").textContent = config.description;
  document.querySelector("#hero-tags").innerHTML = config.tags.map((tag) => `<span>${tag}</span>`).join("");
  document.querySelector("#ticket-title").innerHTML = config.ticketTitle;
  document.querySelector("#ticket-meta").textContent = config.ticketMeta;
  document.querySelector("#route-heading").textContent = config.heading;
  document.querySelector("#map-label").textContent = config.mapLabel;
  document.querySelector("#footer-route-source").href = config.source;
  document.title = config.documentTitle;
}

function selectRoute(routeName) {
  if (!routeConfigs[routeName] || routeName === state.routeName) return;
  state.routeName = routeName;
  state.selectedFloor = "all";
  renderInteractiveRoute();
  showToast(routeName === "journal" ? "已切换到一日世界文明主线。" : "已切换到馆方三小时路线。");
}

function showToast(message) {
  window.clearTimeout(state.toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  state.toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2300);
}

function openCredits() {
  if (typeof creditsDialog.showModal === "function") creditsDialog.showModal();
  else creditsDialog.setAttribute("open", "");
}

function closeCredits() {
  if (typeof creditsDialog.close === "function") creditsDialog.close();
  else creditsDialog.removeAttribute("open");
}

function showMuseum() {
  homePage.hidden = true;
  museumPage.hidden = false;
  document.title = activeConfig().documentTitle;
  if (!state.museumRendered) {
    renderInteractiveRoute();
    state.museumRendered = true;
  }
}

function showHome() {
  museumPage.hidden = true;
  homePage.hidden = false;
  document.title = "我的英国漫游地图";
}

function route() {
  const isMuseum = window.location.hash === "#/museum/british-museum";
  if (isMuseum) showMuseum();
  else showHome();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function goToMuseum() {
  window.location.hash = "#/museum/british-museum";
}

document.querySelector("#start-exploring").addEventListener("click", goToMuseum);
document.querySelector('[data-attraction="british-museum"]').addEventListener("click", goToMuseum);
document.querySelectorAll(".upcoming-pin").forEach((pin) => {
  pin.addEventListener("click", () => {
    const label = pin.querySelector("strong")?.textContent || "这个景点";
    showToast(`${label}攻略还在路上，先去大英博物馆寻宝吧！`);
  });
});

document.querySelector("#back-home").addEventListener("click", () => {
  window.location.hash = "#/";
});

document.querySelector("#reset-progress").addEventListener("click", () => {
  if (!activeVisited().size) {
    showToast("还没有打卡记录。");
    return;
  }
  activeVisited().clear();
  saveVisited();
  renderInteractiveRoute();
  showToast("参观进度已清空，可以重新出发。");
});

document.querySelectorAll("[data-route]").forEach((button) => {
  button.addEventListener("click", () => selectRoute(button.dataset.route));
});

document.querySelector("#open-credits").addEventListener("click", openCredits);
document.querySelector("#footer-credits").addEventListener("click", openCredits);
document.querySelector("#close-credits").addEventListener("click", closeCredits);
creditsDialog.addEventListener("click", (event) => {
  if (event.target === creditsDialog) closeCredits();
});

window.addEventListener("hashchange", route);

renderCredits();
if (!window.location.hash) history.replaceState(null, "", "#/");
route();
