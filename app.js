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

const STORAGE_KEY = "travel-guide:british-museum:visited:v1";
const SVG_NS = "http://www.w3.org/2000/svg";
const floorOrder = ["all", "L0", "L-2", "L3", "L5"];
const floorLabels = { all: "全部", L0: "L0", "L-2": "L-2", L3: "L3", L5: "L5" };

const floorDefinitions = {
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

const state = {
  currentStop: 1,
  selectedFloor: "all",
  visited: loadVisited(),
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

function loadVisited() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return new Set(saved.filter((id) => Number.isInteger(id) && id >= 1 && id <= museumStops.length));
  } catch {
    return new Set();
  }
}

function saveVisited() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.visited].sort((a, b) => a - b)));
}

function imagePath(stop) {
  return `assets/images/stops/stop-${String(stop.id).padStart(2, "0")}.webp`;
}

function isClosurePeriod(date = new Date()) {
  const start = new Date("2026-09-28T00:00:00+01:00");
  const end = new Date("2026-10-09T23:59:59+01:00");
  return date >= start && date <= end;
}

function temporaryStatus(stop) {
  if (!isClosurePeriod()) return "";
  if (stop.id === 18) return "部分开放 · 现场确认";
  if (stop.id === 19) return "临时关闭至 10/09";
  return "";
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

function renderMuseumMap() {
  museumMap.replaceChildren();

  const title = svgElement("title", { id: "museum-map-title" });
  title.textContent = "大英博物馆三小时路线楼层示意图";
  const description = svgElement("desc", { id: "museum-map-desc" });
  description.textContent = "四个楼层与二十二个可点击藏品站点，路线从一号站连接至二十二号站。";
  museumMap.append(title, description);

  Object.entries(floorDefinitions).forEach(([level, floor]) => {
    const group = svgElement("g", {
      class: `floor-group ${state.selectedFloor !== "all" && state.selectedFloor !== level ? "is-muted" : ""}`,
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
        class: `route-segment ${state.selectedFloor !== "all" && state.selectedFloor !== level ? "is-muted" : ""}`,
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

  museumStops.forEach((stop) => {
    const classes = ["marker-group"];
    if (stop.id === state.currentStop) classes.push("is-active");
    if (state.visited.has(stop.id)) classes.push("is-visited");
    if (temporaryStatus(stop)) classes.push("has-alert");
    if (state.selectedFloor !== "all" && state.selectedFloor !== stop.level) classes.push("is-muted");

    const marker = svgElement("g", {
      class: classes.join(" "),
      transform: `translate(${stop.x} ${stop.y})`,
      tabindex: "0",
      role: "button",
      "aria-label": `第 ${stop.id} 站，${stop.titleZh}，${stop.room}`,
      "data-stop-id": stop.id,
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
  });
}

function renderFloorTabs() {
  floorTabs.replaceChildren();
  floorOrder.forEach((level) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = floorLabels[level];
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
  museumStops.forEach((stop) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = String(stop.id).padStart(2, "0");
    button.title = `${stop.titleZh} · ${stop.room}`;
    button.setAttribute("aria-label", `前往第 ${stop.id} 站：${stop.titleZh}`);
    if (stop.id === state.currentStop) button.setAttribute("aria-current", "step");
    if (state.visited.has(stop.id)) button.classList.add("is-visited");
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
  const stop = museumStops[state.currentStop - 1];
  const status = temporaryStatus(stop);
  const visited = state.visited.has(stop.id);

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
        ${status ? `<span class="status-warning">${status}</span>` : ""}
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
        <button class="next-stop" type="button" ${stop.id === museumStops.length ? "disabled" : ""} aria-label="下一站">→</button>
      </div>
    </div>
  `;

  detailPanel.querySelector(".previous-stop")?.addEventListener("click", () => selectStop(stop.id - 1));
  detailPanel.querySelector(".next-stop")?.addEventListener("click", () => selectStop(stop.id + 1));
  detailPanel.querySelector(".visit-toggle")?.addEventListener("click", () => toggleVisited(stop.id));
}

function updateProgress() {
  const count = state.visited.size;
  progressCount.textContent = `${count} / ${museumStops.length}`;
  progressBar.style.width = `${(count / museumStops.length) * 100}%`;
  progressBar.parentElement.setAttribute("aria-label", `已完成 ${count} 站，共 ${museumStops.length} 站`);
}

function renderInteractiveRoute() {
  renderFloorTabs();
  renderMuseumMap();
  renderRouteStrip();
  renderDetail();
  updateProgress();
  closureAlert.hidden = !isClosurePeriod();
}

function selectStop(id, { scrollOnMobile = false } = {}) {
  if (id < 1 || id > museumStops.length) return;
  state.currentStop = id;
  const stop = museumStops[id - 1];
  if (state.selectedFloor !== "all" && state.selectedFloor !== stop.level) {
    state.selectedFloor = stop.level;
  }
  renderInteractiveRoute();
  if (scrollOnMobile && window.matchMedia("(max-width: 720px)").matches) {
    detailPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function toggleVisited(id) {
  const wasVisited = state.visited.has(id);
  if (wasVisited) state.visited.delete(id);
  else state.visited.add(id);
  saveVisited();
  renderInteractiveRoute();
  showToast(wasVisited ? "已取消这一站的打卡。" : `第 ${id} 站已点亮！`);
  requestAnimationFrame(() => detailPanel.querySelector(".visit-toggle")?.focus());
}

function renderCredits() {
  creditsList.replaceChildren();
  museumStops.forEach((stop) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <span>${String(stop.id).padStart(2, "0")}</span>
      <div>
        <a href="${stop.photo.url}" target="_blank" rel="noreferrer">${stop.titleZh} · ${stop.photo.author} ↗</a>
        <small><a href="${stop.photo.licenseUrl}" target="_blank" rel="noreferrer">${stop.photo.license}</a> · 来源 Wikimedia Commons · 本站版本已压缩并可能裁切</small>
      </div>
    `;
    creditsList.append(item);
  });
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
  document.title = "大英博物馆三小时寻宝记 · 我的英国漫游地图";
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
  if (!state.visited.size) {
    showToast("还没有打卡记录。");
    return;
  }
  state.visited.clear();
  saveVisited();
  renderInteractiveRoute();
  showToast("参观进度已清空，可以重新出发。");
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
