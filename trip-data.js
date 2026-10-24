/* 青森・東北 2026 賞楓 行程資料（v2 時間軸版）
   k: air 機場／move 交通／sight 景點／eat 餐廳／meal 彈性用餐／note 文字
   t: 時間或時段文字，t2: 備選班次，ref: 對應清單裡的名稱（用來帶出地圖與公休日） */
window.TRIP = {
 "title": "2026 青森・東北 賞楓",
 "start": "2026-10-26",
 "end": "2026-11-05",
 "updated": "2026-10-24",
 "cities": [
  {
   "key": "tokyo",
   "name": "東京",
   "sights": [
    {
     "items": [
      {
       "n": "阿美橫町",
       "h": "各店不同",
       "note": "衣料系約 10:00–19:00，鮮魚店約 9:00–19:00",
       "map": "https://maps.app.goo.gl/5Q8dKrDGz6wTkSB58"
      },
      {
       "n": "二木菓子",
       "h": "到 20:00",
       "map": "https://maps.app.goo.gl/5Q8dKrDGz6wTkSB58"
      },
      {
       "n": "寶可夢中心",
       "h": "到 21:00",
       "note": "日本橋站",
       "map": "https://maps.app.goo.gl/No49gTaTHAo3ZJbt9"
      }
     ]
    }
   ],
   "food": [
    {
     "items": [
      {
       "n": "kokokara 燒肉",
       "h": "12:00–14:30、17:00–23:00",
       "note": "燒肉；可能預訂 20:45",
       "map": "https://maps.app.goo.gl/jUPg7cixpz5Sj1fh8",
       "cuisine": "燒肉"
      },
      {
       "n": "六厘舍 東京站東京拉麵街",
       "h": "07:30–09:45、10:00–23:00",
       "note": "拉麵",
       "map": "https://maps.app.goo.gl/TCAXbH1oZUq8Qpu6A",
       "cuisine": "拉麵"
      }
     ]
    }
   ]
  },
  {
   "key": "aomori",
   "name": "青森",
   "sights": [
    {
     "items": [
      {
       "n": "青森美術館",
       "h": "9:30–17:00",
       "note": "週一、週四休息",
       "closed": [
        1,
        4
       ],
       "map": "https://maps.app.goo.gl/RfyDv38nJ2VP4wBm7"
      },
      {
       "n": "三內丸山遺址",
       "h": "9:00–17:00",
       "map": "https://maps.app.goo.gl/zLpXb6VfPHxA2gBR8"
      },
      {
       "n": "睡魔之家",
       "h": "09:00–18:00",
       "map": "https://maps.app.goo.gl/jS4nA7PvQsbjZ9Yr5"
      },
      {
       "n": "A-Factory",
       "h": "10:00–19:00",
       "map": "https://maps.app.goo.gl/HeVEPqpWCemh71Qf7"
      },
      {
       "n": "八甲田纜車",
       "h": "9:00–16:20（10 月 8:30 起）",
       "note": "可能會遇強風停止營業",
       "map": "https://maps.app.goo.gl/uXCPGCBt9NEJ6cvo6"
      },
      {
       "n": "廣田神社",
       "h": "08:30–16:30",
       "note": "週三公休",
       "closed": [
        3
       ],
       "map": "https://maps.app.goo.gl/TJHZrGi5YnbM7F7W7"
      },
      {
       "n": "Celest（セレスト）",
       "h": "10:00–20:00",
       "note": "超市",
       "alt": true,
       "map": "https://maps.app.goo.gl/GZp3a1wnbKFus4EA8"
      },
      {
       "n": "青森縣觀光物產館 ASPAM",
       "h": "09:00–19:00",
       "alt": true,
       "map": "https://maps.app.goo.gl/3dYy5Hk5JRU6jb1G7"
      }
     ]
    }
   ],
   "food": [
    {
     "g": "餐廳",
     "items": [
      {
       "n": "地雷也",
       "h": "17:00–00:30",
       "note": "居酒屋，有很多分店",
       "map": "https://maps.app.goo.gl/AZNcnMUEv47RTYJfA",
       "cuisine": "居酒屋"
      },
      {
       "n": "味之札幌 淺利",
       "h": "11:00–13:30",
       "note": "分店；味噌咖喱牛奶拉麵",
       "map": "https://maps.app.goo.gl/aFNRgoGGYMXjumuH6",
       "cuisine": "拉麵"
      },
      {
       "n": "味の札幌 大西",
       "h": "11:00–18:00",
       "note": "週三、六、日休息",
       "closed": [
        3,
        6,
        0
       ],
       "map": "https://maps.app.goo.gl/SY6XU2NjfWbLuWkr6"
      },
      {
       "n": "青森魚菜中心（古川市場）",
       "h": "7:00–16:00",
       "map": "https://maps.app.goo.gl/joyowar2LNepHswH7"
      },
      {
       "n": "お食事処 おさない",
       "h": "10:30–14:00、16:30–20:00",
       "note": "帆立貝餐廳；星期二公休",
       "closed": [
        2
       ],
       "map": "https://maps.app.goo.gl/P3FicPJw2Vv3MmCc7",
       "cuisine": "帆立貝"
      },
      {
       "n": "長尾中華そば 青森駅前店",
       "h": "07:00–20:45",
       "note": "拉麵",
       "map": "https://maps.app.goo.gl/2fbym1JxXxPGNviB6",
       "cuisine": "拉麵"
      },
      {
       "n": "丸青食堂",
       "h": "07:00–15:30",
       "map": "https://maps.app.goo.gl/1Yovd5sQLFCnN1wJA"
      }
     ]
    },
    {
     "g": "咖啡廳",
     "items": [
      {
       "n": "喫茶マロン",
       "h": "07:00–16:00",
       "note": "法式吐司有名；星期三公休",
       "closed": [
        3
       ],
       "map": "https://maps.app.goo.gl/oupYNzZ5SEmSm9VW8",
       "kind": "cafe"
      },
      {
       "n": "COFFEEMAN good",
       "h": "11:00–17:00",
       "note": "蘋果卡布奇諾好喝；週二、三、五、六休息",
       "closed": [
        2,
        3,
        5,
        6
       ],
       "map": "https://maps.app.goo.gl/PdXVMtrm8PtuvGPPA",
       "kind": "cafe"
      },
      {
       "n": "COTOCOFFEE",
       "h": "11:00–18:00",
       "note": "週四休息",
       "closed": [
        4
       ],
       "map": "https://maps.app.goo.gl/ayFUbcUTBH5FteZY9",
       "kind": "cafe"
      }
     ]
    }
   ]
  },
  {
   "key": "aoike",
   "name": "青池・十二湖",
   "sights": [
    {
     "items": [
      {
       "n": "十二湖",
       "h": "散策自由",
       "note": "遊客中心 8:30–17:00",
       "map": "https://maps.app.goo.gl/A6j9nPpeF4fhS53N7"
      },
      {
       "n": "青池",
       "h": "散策自由",
       "map": "https://maps.app.goo.gl/dWgBNi5y7XK5aeESA"
      },
      {
       "n": "森の物産館キョロロ",
       "h": "09:00–17:30",
       "map": "https://maps.app.goo.gl/HZjDFJNG5U9e3MJZA"
      }
     ]
    }
   ],
   "food": []
  },
  {
   "key": "hirosaki",
   "name": "弘前",
   "sights": [
    {
     "items": [
      {
       "n": "藤田記念庭園",
       "h": "9:00–17:00（最終入館 16:30）",
       "note": "11/24 起進入冬季休園（洋館除外）",
       "map": "https://maps.app.goo.gl/Xc4816QfjUXjqvHG8"
      },
      {
       "n": "蘋果公園",
       "h": "09:00–17:00",
       "note": "戶外公園可騎腳踏車進去；在觀光案內所可以採蘋果",
       "map": "https://maps.app.goo.gl/M7XAEbUbCSx2Myjg9"
      },
      {
       "n": "弘前城、弘前公園",
       "h": "天守 9:00–17:00（開放到 11/23）",
       "note": "菊與紅葉祭 10/30 開始，在弘前城植物園",
       "map": "https://maps.app.goo.gl/GQwfadWrPciyUVLE7"
      },
      {
       "n": "最勝院",
       "h": "09:00–16:30",
       "map": "https://maps.app.goo.gl/Nyts5oM2jH4hfiC2A"
      },
      {
       "n": "八坂神社",
       "h": "24 小時",
       "alt": true,
       "map": "https://maps.app.goo.gl/cduB8d9w87WMKxe56"
      },
      {
       "n": "弘前煉瓦倉庫美術館",
       "h": "9:00–17:00",
       "note": "週二休館（遇國定假日順延）",
       "closed": [
        2
       ],
       "alt": true,
       "map": "https://maps.app.goo.gl/2PXdFuh6qKMuNVWG7"
      }
     ]
    }
   ],
   "food": [
    {
     "g": "餐廳",
     "items": [
      {
       "n": "津軽衆",
       "h": "17:00–23:00",
       "note": "有燒貝類的居酒屋；星期日公休",
       "closed": [
        0
       ],
       "map": "https://maps.app.goo.gl/EanNxJCgCeCA4sKB6",
       "cuisine": "居酒屋"
      },
      {
       "n": "黒毛和牛と銀シャリ肉の匠",
       "h": "17:00–00:00",
       "note": "和牛",
       "map": "https://maps.app.goo.gl/AdqaipPetW6Jqjuo9",
       "cuisine": "和牛"
      },
      {
       "n": "らぁめん 萬",
       "h": "11:00–14:00、17:30–19:00",
       "note": "拉麵；星期四只有中午營業",
       "map": "https://maps.app.goo.gl/qowsmh7XNf5ds2Bh6",
       "cuisine": "拉麵"
      },
      {
       "n": "居酒屋まつや",
       "h": "17:00–23:00",
       "note": "居酒屋",
       "map": "https://maps.app.goo.gl/uv85rhRsscxwMyZP9",
       "cuisine": "居酒屋"
      },
      {
       "n": "食事処とんかつ しげ作",
       "h": "11:30–14:00、18:00–21:00",
       "note": "炸豬排；星期一公休",
       "closed": [
        1
       ],
       "map": "https://maps.app.goo.gl/ZRoxcBC6JnhdKGyv5",
       "cuisine": "炸豬排"
      },
      {
       "n": "PePe Kitchen",
       "h": "11:00–14:00、18:00–20:00",
       "note": "漢堡店；星期三公休",
       "closed": [
        3
       ],
       "map": "https://maps.app.goo.gl/3MmkjfYCa1MA1hTj6",
       "cuisine": "漢堡"
      }
     ]
    },
    {
     "g": "咖啡廳（蘋果派）",
     "items": [
      {
       "n": "大正浪漫喫茶室",
       "h": "09:30–16:30",
       "map": "https://maps.app.goo.gl/8oDgDqCVH1moST1N9",
       "kind": "cafe"
      },
      {
       "n": "可否屋 葡瑠満",
       "h": "10:00–17:00",
       "note": "星期一、二公休",
       "closed": [
        1,
        2
       ],
       "map": "https://maps.app.goo.gl/Dmb1G9Qe7DtM6XDu6",
       "kind": "cafe"
      },
      {
       "n": "GRAND MERCI",
       "h": "09:30–18:00",
       "note": "江振誠主廚推薦；週二休；限外帶",
       "closed": [
        2
       ],
       "map": "https://maps.app.goo.gl/UzgdQsMtYFhU4b8MA",
       "kind": "cafe"
      },
      {
       "n": "PÂTISSERIE LE CHOCOLAT",
       "h": "09:00–18:30",
       "note": "甜點看起來都很好吃；週三休息",
       "closed": [
        3
       ],
       "map": "https://maps.app.goo.gl/2Bf1W9aACSARtqMj8",
       "kind": "cafe"
      },
      {
       "n": "Le bourgeon",
       "h": "11:30–17:00",
       "note": "週二、三休息",
       "closed": [
        2,
        3
       ],
       "map": "https://maps.app.goo.gl/GH2K1X4qTzwb9Pmb7",
       "kind": "cafe"
      },
      {
       "n": "Noël de HIROSAKI",
       "h": "09:30–18:00",
       "note": "週二休息",
       "closed": [
        2
       ],
       "map": "https://maps.app.goo.gl/9ntFWpJkRx1xQ8Lv7",
       "kind": "cafe"
      },
      {
       "n": "Bonjour Hirosaki Joto",
       "h": "10:00–18:00",
       "note": "週四休息",
       "closed": [
        4
       ],
       "map": "https://maps.app.goo.gl/LV9BaraguwE289vs9",
       "kind": "cafe"
      },
      {
       "n": "Patisserie Yamazaki",
       "h": "10:00–20:00",
       "note": "週一休息",
       "closed": [
        1
       ],
       "map": "https://maps.app.goo.gl/kJQhgr3RxCuWyF3W9",
       "kind": "cafe"
      }
     ]
    }
   ]
  },
  {
   "key": "towada",
   "name": "奧入瀨・十和田湖",
   "sights": [
    {
     "items": [
      {
       "n": "十和田巴士站",
       "note": "十和田湖巴士站",
       "map": "https://maps.app.goo.gl/FhMrKR4SBMbvUV4C8"
      },
      {
       "n": "石ヶ戸",
       "note": "奧入瀨溪自然景點",
       "map": "https://maps.app.goo.gl/5qEqWUD9SqesY6vr7"
      },
      {
       "n": "子ノ口",
       "note": "奧入瀨溪自然景點",
       "map": "https://maps.app.goo.gl/pwgioSXtGDvc64x1A"
      },
      {
       "n": "十和田湖搭船",
       "h": "8:00–17:00",
       "note": "我打算搭 8:45–9:35 那班",
       "map": "https://maps.app.goo.gl/g8fMniuCyEb7kfiG9"
      }
     ]
    }
   ],
   "food": [
    {
     "items": [
      {
       "n": "十和田湖マリンブルー",
       "h": "08:00–17:00",
       "note": "蘋果派好吃",
       "map": "https://maps.app.goo.gl/f6BM9aXUKLifhw5M8"
      },
      {
       "n": "十和田荘酒店",
       "h": "早餐 6:45–9:00；晚餐 18:00／18:30／19:00",
       "note": "飯店內用餐，晚餐可選時段"
      }
     ]
    }
   ]
  },
  {
   "key": "hachinohe",
   "name": "八戶",
   "sights": [
    {
     "items": [
      {
       "n": "八食中心",
       "h": "市場棟 9:00–18:00；餐飲 9:00–21:00",
       "note": "市場棟每週三公休（繁忙期會營業）",
       "closed": [
        3
       ],
       "map": "https://maps.app.goo.gl/U6K8GHJpSWL9WKeu5"
      },
      {
       "n": "蕪嶋神社",
       "h": "9:00–16:00",
       "map": "https://maps.app.goo.gl/XQWszpeGLRhXD1mk7"
      },
      {
       "n": "葦毛崎展望台",
       "alt": true,
       "map": "https://maps.app.goo.gl/wujXCKcZhgES4jpd8"
      }
     ]
    }
   ],
   "food": [
    {
     "items": [
      {
       "n": "八食中心",
       "h": "09:00–18:00",
       "note": "週三休息",
       "closed": [
        3
       ],
       "map": "https://maps.app.goo.gl/LrSBAaSu69Nt1fBz9"
      },
      {
       "n": "居酒屋 松葉",
       "h": "18:00–22:00",
       "note": "居酒屋；週三休息",
       "closed": [
        3
       ],
       "map": "https://maps.app.goo.gl/1hpP2dQidaNGsV289",
       "cuisine": "居酒屋"
      },
      {
       "n": "炭火焼きの店 完ちゃん",
       "h": "18:00–23:00",
       "note": "烤串",
       "map": "https://maps.app.goo.gl/hRMhWbMAZi6Zruzv9",
       "cuisine": "烤串"
      },
      {
       "n": "味処 七味家",
       "h": "17:00–23:30",
       "note": "週日休息",
       "closed": [
        0
       ],
       "map": "https://maps.app.goo.gl/hLrUmCM1bC4dJLrb9"
      },
      {
       "n": "サバの駅",
       "h": "17:00–22:00",
       "note": "週日休息",
       "closed": [
        0
       ],
       "map": "https://maps.app.goo.gl/tUDcvdyapRZUVuTt8"
      }
     ]
    }
   ]
  },
  {
   "key": "sendai",
   "name": "仙台・松島",
   "sights": [
    {
     "g": "仙台",
     "items": [
      {
       "n": "友都八喜（ヨドバシ）",
       "h": "9:30–22:00",
       "note": "全年無休，有 GU 和 Uniqlo",
       "map": "https://maps.app.goo.gl/B5DpcbGBuG4X15kr8"
      },
      {
       "n": "PARCO",
       "h": "10:00–21:00（餐廳 11:00–23:00）",
       "note": "各家店略有差異",
       "map": "https://maps.app.goo.gl/3tUfADydGgHXTzGw6"
      },
      {
       "n": "S-PAL 東館",
       "h": "10:00–21:00",
       "map": "https://maps.app.goo.gl/t9xpN6DQwd3Pr7uD9"
      },
      {
       "n": "S-PAL 本館",
       "h": "10:00–20:00（B1 餐廳街 11:00–22:00）",
       "map": "https://maps.app.goo.gl/7Mmjrz6bhaJzPdBc6"
      },
      {
       "n": "仙台寶可夢中心",
       "h": "10:00–20:30",
       "note": "在 PARCO 本館 3 樓",
       "map": "https://maps.app.goo.gl/r9PExoVsd2hdcQaT6"
      },
      {
       "n": "唐吉訶德 仙台站西口本店",
       "h": "08:00–03:00",
       "map": "https://maps.app.goo.gl/PdtvQ2pnqfCDDn1V6"
      }
     ]
    },
    {
     "g": "松島",
     "items": [
      {
       "n": "圓通院",
       "h": "白天 9:00–16:00；紅葉點燈 17:30–21:00（最終入場 20:45）",
       "note": "2026 年點燈期間 10/24–11/23",
       "map": "https://maps.app.goo.gl/TiDr1dtxBGyAqVxQA"
      },
      {
       "n": "福浦島",
       "h": "08:00–17:00",
       "note": "走福浦橋過去",
       "map": "https://maps.app.goo.gl/oa7Vi9uEgYF27ZnJ7"
      },
      {
       "n": "瑞巖寺五大堂",
       "h": "08:30–16:30",
       "map": "https://maps.app.goo.gl/66gs992sBHLnkxcPA"
      },
      {
       "n": "觀瀾亭",
       "h": "08:30–16:30",
       "map": "https://maps.app.goo.gl/EdJMJmecnSjPpKuQ6"
      }
     ]
    }
   ],
   "food": [
    {
     "items": [
      {
       "n": "牛タン焼専門店 司 西口名掛丁店",
       "h": "11:00–14:00、17:00–23:00",
       "note": "烤牛舌",
       "map": "https://maps.app.goo.gl/u1AevjSRFYwwRnzq7",
       "cuisine": "烤牛舌"
      },
      {
       "n": "牛たん料理 閣 ブランドーム本店",
       "h": "11:30–14:30、17:00–22:30",
       "note": "牛舌料理",
       "map": "https://maps.app.goo.gl/x4JhTd2htGzdk6rF7",
       "cuisine": "牛舌料理"
      },
      {
       "n": "烤牛舌 善治郎 仙台站前本店",
       "h": "11:00–23:00",
       "note": "烤牛舌",
       "map": "https://maps.app.goo.gl/JpZ6eX197MGKPC5KA",
       "cuisine": "烤牛舌"
      },
      {
       "n": "ankoya 駅前店",
       "h": "10:00–19:00",
       "note": "方形銅鑼燒；週日休息",
       "closed": [
        0
       ],
       "map": "https://maps.app.goo.gl/cygEeimCoz5eVSTbA",
       "cuisine": "銅鑼燒"
      },
      {
       "n": "海鮮・浜焼き 牡蠣将",
       "h": "11:00–15:00",
       "note": "海鮮、炭烤",
       "map": "https://maps.app.goo.gl/45DTX8YG7CRh2TNg6",
       "cuisine": "海鮮"
      },
      {
       "n": "漁師的海鮮丼",
       "h": "11:00–15:00",
       "note": "海鮮丼",
       "map": "https://maps.app.goo.gl/LrjPxQUcJnXm6WXXA",
       "cuisine": "海鮮丼"
      }
     ]
    }
   ]
  }
 ],
 "gifts": [
  {
   "g": "青森",
   "items": [
    {
     "b": "RAGUENEAU（ラグノオささき）",
     "i": "patissier's 蘋果派",
     "note": "大推 ⭐⭐"
    },
    {
     "b": "RAGUENEAU（ラグノオささき）",
     "i": "大蒜仙貝（にんにくせんべい）",
     "note": "推"
    },
    {
     "b": "Hatoya",
     "i": "厚切蘋果乾",
     "note": "酸酸的，薄切蘋果乾也可以買"
    },
    {
     "b": "青天的霹靂",
     "i": "米夾心餅乾",
     "note": "有米香，下面是白巧克力"
    },
    {
     "b": "Press Butter Sand",
     "i": "蘋果焦糖夾心餅乾",
     "note": "推推；A-Factory"
    }
   ]
  },
  {
   "g": "八戶・仙台・其他",
   "items": [
    {
     "b": "南部せんべい乃 巖手屋",
     "i": "となりのちよこちゃん",
     "note": "巧克力脆片煎餅，推"
    },
    {
     "b": "BEILAB",
     "i": "仙貝",
     "note": "在八戶市場可以試吃，甜的好像比較好吃"
    },
    {
     "b": "萩之月",
     "i": "卡士達蛋糕",
     "note": ""
    },
    {
     "b": "酒田米菓",
     "i": "奧蘭達米果",
     "note": ""
    }
   ]
  }
 ],
 "shop": [
  {
   "b": "Shiro",
   "i": "身體乳、香氛",
   "note": "白茶、皂香"
  },
  {
   "b": "The answer",
   "i": "洗髮乳、護髮",
   "note": ""
  },
  {
   "b": "Le labo",
   "i": "佛手柑22香水",
   "note": "在成田機場購買"
  },
  {
   "b": "23YEARSOLD",
   "i": "遮瑕膏",
   "note": "0.2P 優先購買，幫朋友買"
  },
  {
   "b": "Hands",
   "i": "雨傘",
   "note": "幫朋友買"
  },
  {
   "b": "GU",
   "i": "軍綠色棉外套",
   "note": "幫朋友買"
  },
  {
   "b": "Choya",
   "i": "三年梅酒",
   "note": "在成田機場購買"
  },
  {
   "b": "CEZANNE",
   "i": "腮紅",
   "note": ""
  }
 ],
 "stays": [
  {
   "id": "apa",
   "name": "APA Hotel Keisei Ueno Ekimae Minami",
   "from": "2026-10-26",
   "nights": 1,
   "in": "15:00",
   "out": "10:00",
   "pay": "到店付款",
   "addr": "〒110-0005 東京都台東区上野2-6-11",
   "tel": "0570-040-411",
   "map": "https://maps.app.goo.gl/PZniJfpxW5uLbiqr6"
  },
  {
   "id": "rem",
   "name": "レンブラントイン青森",
   "from": "2026-10-27",
   "nights": 2,
   "in": "15:00",
   "out": "10:00",
   "pay": "到店付款",
   "addr": "〒030-0801 青森県青森市新町1丁目8-2",
   "tel": "0177526670",
   "map": "https://maps.app.goo.gl/jdqxwoqLHLuyd72P6"
  },
  {
   "id": "sup",
   "name": "弘前超級飯店 Super Hotel Hirosaki",
   "from": "2026-10-29",
   "nights": 2,
   "in": "15:00",
   "out": "10:00",
   "pay": "",
   "addr": "〒036-8182 青森県弘前市土手町148",
   "tel": "0172359000",
   "map": "https://maps.app.goo.gl/2xJyJhzV6mYyrZD16"
  },
  {
   "id": "dor",
   "name": "Dormy Inn Aomori",
   "from": "2026-10-31",
   "nights": 1,
   "in": "15:00",
   "out": "11:00",
   "pay": "",
   "addr": "〒030-0801 青森県青森市新町２丁目５−１",
   "tel": "017-721-5489",
   "map": "https://maps.app.goo.gl/SPVucXcFmyKXoo146"
  },
  {
   "id": "tow",
   "name": "十和田荘酒店",
   "from": "2026-11-01",
   "nights": 1,
   "in": "15:00",
   "out": "10:00",
   "pay": "到店付款",
   "addr": "〒018-5501 青森県十和田市大字奥瀬十和田湖畔休屋340番地",
   "tel": "0176-75-2221",
   "map": "https://maps.app.goo.gl/VkdwsRe4LoP57sQZA"
  },
  {
   "id": "glo",
   "name": "Hotel Global View Hachinohe",
   "from": "2026-11-02",
   "nights": 1,
   "in": "15:00",
   "out": "11:00",
   "pay": "",
   "addr": "〒031-0042 青森県八戸市大字十三日町7番地",
   "tel": "0178463111",
   "map": "https://maps.app.goo.gl/xTvrmdQBiR8Vii618"
  },
  {
   "id": "ric",
   "name": "里士滿高級酒店仙台站前",
   "from": "2026-11-03",
   "nights": 2,
   "in": "14:00",
   "out": "11:00",
   "pay": "",
   "addr": "〒980-0021 宮城県仙台市青葉区中央2-1-1 仙台東宝ビル5F",
   "tel": "022-716-2856",
   "map": "https://maps.app.goo.gl/RBUMbmxZhAwNbndf8"
  }
 ],
 "days": [
  {
   "date": "2026-10-26",
   "short": "東京",
   "title": "抵達東京",
   "city": "東京",
   "lists": [
    "tokyo"
   ],
   "stay": "apa",
   "tips": [
    "要提前 2 個半小時到機場"
   ],
   "items": [
    {
     "k": "air",
     "t": "12:50",
     "n": "桃園機場 T1",
     "sub": "CX 450"
    },
    {
     "k": "move",
     "t": null,
     "mode": "飛機",
     "title": "桃園機場 T1 → 成田機場 T2",
     "dur": "12:50 - 16:50"
    },
    {
     "k": "air",
     "t": "16:50",
     "n": "成田機場 T2"
    },
    {
     "k": "move",
     "t": "18:00",
     "mode": "Skyliner",
     "title": "成田機場 → 東京上野站",
     "dur": "約 41 分鐘"
    },
    {
     "k": "sight",
     "t": "19:00",
     "n": "阿美橫町",
     "sub": "各店不同　約 19:00 開始逛"
    },
    {
     "k": "sight",
     "t": null,
     "n": "寶可夢中心",
     "sub": "搭到日本橋站，約 20 分"
    },
    {
     "k": "eat",
     "t": "20:45",
     "n": "kokokara 燒肉"
    }
   ]
  },
  {
   "date": "2026-10-27",
   "short": "青森",
   "title": "移動到青森",
   "city": "青森",
   "lists": [
    "aomori"
   ],
   "stay": "rem",
   "items": [
    {
     "k": "move",
     "t": "07:38",
     "mode": "新幹線",
     "title": "上野站 → 新青森站",
     "dur": "約 3 小時 15 分",
     "t2": "08:43"
    },
    {
     "k": "move",
     "t": "11:12",
     "mode": "JR",
     "title": "新青森站 → 青森站",
     "dur": "約 6 分",
     "t2": "12:21"
    },
    {
     "k": "meal",
     "t": null,
     "slot": "午餐",
     "where": "在青森，到時再決定"
    },
    {
     "k": "move",
     "t": "13:00",
     "mode": "巴士",
     "title": "青森站 → 三內丸山遺址",
     "dur": "約 30 分"
    },
    {
     "k": "sight",
     "t": "13:30",
     "n": "三內丸山遺址",
     "sub": "9:00–17:00"
    },
    {
     "k": "sight",
     "t": "15:00",
     "n": "青森美術館",
     "sub": "9:30–17:00，週一、週四休息"
    },
    {
     "k": "sight",
     "t": null,
     "n": "Celest（セレスト）",
     "sub": "超市 10:00–20:00",
     "alt": true
    },
    {
     "k": "meal",
     "t": "晚上",
     "slot": "晚餐",
     "where": "青森市區，到時再決定"
    }
   ]
  },
  {
   "date": "2026-10-28",
   "short": "八甲田",
   "title": "八甲田山",
   "city": "青森",
   "lists": [
    "aomori"
   ],
   "stay": "rem",
   "cont": true,
   "tips": [
    "纜車可能遇強風停駛"
   ],
   "items": [
    {
     "k": "eat",
     "t": "07:30",
     "n": "青森魚菜中心（早餐）",
     "sub": "7:00–16:00",
     "ref": "青森魚菜中心（古川市場）"
    },
    {
     "k": "sight",
     "t": null,
     "n": "睡魔之家",
     "sub": "09:00–18:00"
    },
    {
     "k": "sight",
     "t": null,
     "n": "A-Factory",
     "sub": "10:00–19:00"
    },
    {
     "k": "sight",
     "t": null,
     "n": "青森物產館",
     "sub": "",
     "map": "https://maps.app.goo.gl/W7sbUL55VUPwDSrZ7"
    },
    {
     "k": "move",
     "t": "11:35",
     "mode": "巴士",
     "title": "青森站 → 八甲田纜車站前",
     "dur": "11:35 - 12:52"
    },
    {
     "k": "sight",
     "t": "12:52",
     "n": "八甲田纜車",
     "sub": "排隊＋搭乘＋山上約 2 小時"
    },
    {
     "k": "move",
     "t": "15:41",
     "mode": "巴士",
     "title": "纜車站前 → 青森站",
     "dur": "15:41 - 16:29"
    },
    {
     "k": "meal",
     "t": "晚上",
     "slot": "晚餐",
     "where": "到時再決定"
    }
   ]
  },
  {
   "date": "2026-10-29",
   "short": "青池",
   "title": "青池・十二湖",
   "city": "十二湖 → 弘前",
   "lists": [
    "aoike",
    "hirosaki"
   ],
   "stay": "sup",
   "tips": [
    "離開青森前，行李先寄放在火車站或 Dormy Inn",
    "已預約白神號指定席：去程 2 號車、回程 5 號車",
    "早餐＋午餐要先準備乾糧"
   ],
   "items": [
    {
     "k": "move",
     "t": "08:09",
     "mode": "白神號",
     "title": "青森 → 十二湖",
     "dur": "08:09 - 11:23・2 號車"
    },
    {
     "k": "move",
     "t": "11:35",
     "mode": "巴士",
     "title": "十二湖站 → 奧十二湖駐車場",
     "dur": "11:35 - 11:50"
    },
    {
     "k": "sight",
     "t": null,
     "n": "伴手禮店",
     "sub": "下車會先走到這間",
     "map": "https://maps.app.goo.gl/yL1vEov4ue7Xca34A"
    },
    {
     "k": "sight",
     "t": null,
     "n": "十二湖",
     "sub": "散策自由，遊客中心 8:30–17:00"
    },
    {
     "k": "sight",
     "t": null,
     "n": "森の物産館キョロロ",
     "sub": "09:00–17:30"
    },
    {
     "k": "sight",
     "t": null,
     "n": "青池",
     "sub": "雞頭場之池 → 青池 → 沸壺之池"
    },
    {
     "k": "move",
     "t": "15:25",
     "mode": "巴士",
     "title": "奧十二湖駐車場 → 十二湖站",
     "dur": "15:25 - 15:40"
    },
    {
     "k": "move",
     "t": "15:57",
     "mode": "白神號",
     "title": "十二湖 → 弘前",
     "dur": "15:57 - 18:54・5 號車"
    },
    {
     "k": "move",
     "t": "18:54",
     "mode": "步行",
     "title": "弘前站 → 飯店",
     "dur": "步行約 16 分，或巴士 6 分"
    },
    {
     "k": "meal",
     "t": "晚上",
     "slot": "晚餐",
     "where": "在弘前，居酒屋"
    }
   ]
  },
  {
   "date": "2026-10-30",
   "short": "弘前",
   "title": "弘前",
   "city": "弘前",
   "lists": [
    "hirosaki"
   ],
   "stay": "sup",
   "cont": true,
   "items": [
    {
     "k": "move",
     "t": null,
     "mode": "腳踏車",
     "title": "弘前街區信息中心租車",
     "dur": "一台 500 日圓",
     "map": "https://maps.app.goo.gl/4gaGbxidaozxhetQ8"
    },
    {
     "k": "eat",
     "t": "09:30",
     "n": "大正浪漫喫茶室（早餐）",
     "sub": "09:30–16:30",
     "ref": "大正浪漫喫茶室"
    },
    {
     "k": "sight",
     "t": null,
     "n": "藤田記念庭園",
     "sub": "9:00–17:00，最終入館 16:30"
    },
    {
     "k": "eat",
     "t": "中午",
     "n": "PePe Kitchen",
     "sub": "11:00–14:00"
    },
    {
     "k": "sight",
     "t": "下午",
     "n": "蘋果公園",
     "sub": "9:00–17:00，可騎車進去，觀光案內所可採蘋果"
    },
    {
     "k": "meal",
     "t": null,
     "slot": "下午茶",
     "where": "蘋果派咖啡廳，到時再決定",
     "cafe": true
    },
    {
     "k": "sight",
     "t": null,
     "n": "弘前城、弘前公園",
     "sub": "天守 9:00–17:00；菊與紅葉祭今天開始，有紅葉夜間照明"
    },
    {
     "k": "meal",
     "t": "晚上",
     "slot": "晚餐",
     "where": "在弘前，到時再決定"
    }
   ]
  },
  {
   "date": "2026-10-31",
   "short": "弘前",
   "title": "弘前與青森",
   "city": "弘前 → 青森",
   "lists": [
    "hirosaki",
    "aomori"
   ],
   "stay": "dor",
   "tips": [
    "這天要買隔天去山上吃的乾糧"
   ],
   "items": [
    {
     "k": "sight",
     "t": "09:00",
     "n": "最勝院",
     "sub": "09:00–16:30"
    },
    {
     "k": "sight",
     "t": null,
     "n": "八坂神社",
     "sub": "24 小時"
    },
    {
     "k": "sight",
     "t": null,
     "n": "弘前煉瓦倉庫美術館",
     "sub": "9:00–17:00，週二休館",
     "alt": true
    },
    {
     "k": "meal",
     "t": "中午",
     "slot": "午餐",
     "where": "在弘前，到時再決定"
    },
    {
     "k": "move",
     "t": null,
     "mode": "JR",
     "title": "弘前 → 青森",
     "dur": "約 1 小時"
    },
    {
     "k": "sight",
     "t": null,
     "n": "廣田神社",
     "sub": "08:30–16:30"
    },
    {
     "k": "meal",
     "t": null,
     "slot": "下午茶",
     "where": "咖啡廳，到時再決定",
     "cafe": true
    },
    {
     "k": "meal",
     "t": "晚上",
     "slot": "晚餐",
     "where": "在青森，到時再決定"
    }
   ]
  },
  {
   "date": "2026-11-01",
   "short": "奧入瀨",
   "title": "奧入瀨溪流",
   "city": "十和田湖",
   "lists": [
    "towada"
   ],
   "stay": "tow",
   "items": [
    {
     "k": "move",
     "t": "07:30",
     "mode": "巴士",
     "title": "青森站 → 十和田湖（休屋）",
     "dur": "07:30 - 10:15"
    },
    {
     "k": "sight",
     "t": null,
     "n": "十和田巴士站",
     "sub": "十和田湖巴士站"
    },
    {
     "k": "note",
     "t": "10:15",
     "text": "放行李（十和田荘酒店，入住 15:00）",
     "map": "https://maps.app.goo.gl/VkdwsRe4LoP57sQZA"
    },
    {
     "k": "move",
     "t": "11:00",
     "mode": "巴士",
     "title": "休屋 → 石戶",
     "dur": "11:00 - 11:34"
    },
    {
     "k": "sight",
     "t": "11:40",
     "n": "石戶",
     "sub": "奧入瀨溪步道，先抓約 3 小時（彈性，不一定走滿）",
     "ref": "石ヶ戸"
    },
    {
     "k": "sight",
     "t": null,
     "n": "雲井の滝",
     "sub": "奧入瀨溪步道"
    },
    {
     "k": "sight",
     "t": null,
     "n": "銚子大滝",
     "sub": "奧入瀨溪步道"
    },
    {
     "k": "sight",
     "t": null,
     "n": "子ノ口",
     "sub": "奧入瀨溪步道"
    },
    {
     "k": "move",
     "t": "14:50",
     "mode": "巴士",
     "title": "子之口 → 休屋",
     "dur": "約 25 分・15:35 是末班"
    },
    {
     "k": "eat",
     "t": "晚上",
     "n": "十和田荘酒店 晚餐",
     "sub": "可選 18:00／18:30／19:00",
     "plain": true
    }
   ]
  },
  {
   "date": "2026-11-02",
   "short": "八戶",
   "title": "八戶",
   "city": "十和田湖 → 八戶",
   "lists": [
    "hachinohe"
   ],
   "stay": "glo",
   "items": [
    {
     "k": "eat",
     "t": "07:00",
     "n": "十和田荘酒店 早餐",
     "sub": "6:45–9:00",
     "plain": true
    },
    {
     "k": "sight",
     "t": "08:45",
     "n": "十和田湖遊覽船",
     "sub": "8:45–9:35，1,760 日圓",
     "ref": "十和田湖搭船"
    },
    {
     "k": "move",
     "t": "10:00",
     "mode": "巴士",
     "title": "休屋 → 八戶車站西口",
     "dur": "10:00 - 12:20"
    },
    {
     "k": "move",
     "t": "12:20",
     "mode": "巴士",
     "title": "八戶站 → 八食中心",
     "dur": "約 20 分・有直達公車"
    },
    {
     "k": "eat",
     "t": null,
     "n": "八食中心（午餐）",
     "sub": "市場棟 9:00–18:00",
     "ref": "八食中心"
    },
    {
     "k": "move",
     "t": null,
     "mode": "計程車",
     "title": "八食中心 → 蕪嶋神社",
     "dur": "約 25 分"
    },
    {
     "k": "sight",
     "t": null,
     "n": "蕪嶋神社",
     "sub": "9:00–16:00"
    },
    {
     "k": "move",
     "t": "16:00",
     "mode": "公車",
     "title": "蕪嶋神社 → 八戶站拿行李 → 飯店",
     "dur": "約 1 小時＋公車 20 分"
    },
    {
     "k": "meal",
     "t": "晚上",
     "slot": "晚餐",
     "where": "飯店附近，到時再決定"
    }
   ]
  },
  {
   "date": "2026-11-03",
   "short": "仙台",
   "title": "仙台",
   "city": "八戶 → 仙台",
   "lists": [
    "sendai"
   ],
   "stay": "ric",
   "items": [
    {
     "k": "move",
     "t": "08:10",
     "mode": "公車",
     "title": "飯店 → 八戶站",
     "dur": "約 30 分"
    },
    {
     "k": "move",
     "t": "09:05",
     "mode": "JR",
     "title": "八戶 → 仙台",
     "dur": "09:05 - 10:29"
    },
    {
     "k": "move",
     "t": "10:30",
     "mode": "步行",
     "title": "仙台站 → 里士滿高級酒店",
     "dur": "從北出口 4 或 6"
    },
    {
     "k": "meal",
     "t": "中午",
     "slot": "午餐",
     "where": "在仙台，到時再決定"
    },
    {
     "k": "sight",
     "t": "下午",
     "n": "百貨公司逛街",
     "sub": ""
    },
    {
     "k": "sight",
     "t": null,
     "n": "友都八喜（ヨドバシ）",
     "sub": "9:30–22:00，有 GU 和 Uniqlo"
    },
    {
     "k": "sight",
     "t": null,
     "n": "S-PAL 本館",
     "sub": "10:00–20:00（B1 餐廳街 11:00–22:00）"
    },
    {
     "k": "sight",
     "t": null,
     "n": "PARCO",
     "sub": "10:00–21:00（餐廳 11:00–23:00）"
    },
    {
     "k": "sight",
     "t": null,
     "n": "唐吉軻德",
     "sub": "08:00–03:00",
     "ref": "唐吉訶德 仙台站西口本店"
    },
    {
     "k": "sight",
     "t": null,
     "n": "仙台寶可夢中心",
     "sub": "10:00–20:30，PARCO 本館 3 樓"
    },
    {
     "k": "meal",
     "t": "晚上",
     "slot": "晚餐",
     "where": "在仙台，吃牛舌"
    }
   ]
  },
  {
   "date": "2026-11-04",
   "short": "松島",
   "title": "仙台與松島",
   "city": "仙台 → 松島",
   "lists": [
    "sendai"
   ],
   "stay": "ric",
   "cont": true,
   "items": [
    {
     "k": "move",
     "t": "早上",
     "mode": "JR",
     "title": "仙台 → 松島海岸",
     "dur": "約 40 分"
    },
    {
     "k": "meal",
     "t": null,
     "slot": "午餐",
     "where": "松島，到時再決定"
    },
    {
     "k": "sight",
     "t": null,
     "n": "五大堂",
     "sub": "8:30–16:30",
     "ref": "瑞巖寺五大堂"
    },
    {
     "k": "sight",
     "t": null,
     "n": "觀瀾亭",
     "sub": "8:30–16:30"
    },
    {
     "k": "sight",
     "t": null,
     "n": "福浦島",
     "sub": "8:00–17:00，走福浦橋過去"
    },
    {
     "k": "sight",
     "t": "17:30",
     "n": "圓通院 紅葉點燈",
     "sub": "17:30–21:00，最終入場 20:45",
     "ref": "圓通院"
    },
    {
     "k": "move",
     "t": null,
     "mode": "JR",
     "title": "松島海岸 → 仙台",
     "dur": "約 40 分"
    },
    {
     "k": "meal",
     "t": "晚上",
     "slot": "晚餐",
     "where": "在仙台，到時再決定"
    }
   ]
  },
  {
   "date": "2026-11-05",
   "short": "東京",
   "title": "回東京・回家",
   "city": "仙台 → 東京 → 桃園",
   "lists": [
    "tokyo"
   ],
   "tips": [
    "成田特快要先劃位！"
   ],
   "items": [
    {
     "k": "move",
     "t": "08:17",
     "mode": "新幹線",
     "title": "仙台 → 東京",
     "dur": "08:17 - 09:47"
    },
    {
     "k": "eat",
     "t": null,
     "n": "東京車站拉麵街：六厘舍（午餐）",
     "sub": "07:30–09:45、10:00–23:00",
     "ref": "六厘舍 東京站東京拉麵街"
    },
    {
     "k": "move",
     "t": "12:03",
     "mode": "成田特快",
     "title": "東京 → 成田機場 T2",
     "dur": "12:03 - 13:01",
     "t2": "12:33"
    },
    {
     "k": "air",
     "t": "13:00",
     "n": "成田機場 T2",
     "sub": "報到　CX 451・15:30 起飛"
    },
    {
     "k": "move",
     "t": null,
     "mode": "飛機",
     "title": "成田機場 T2 → 桃園機場 T1",
     "dur": "15:30 - 18:35"
    },
    {
     "k": "air",
     "t": "18:35",
     "n": "桃園機場 T1"
    }
   ]
  }
 ],
 "flights": [
  {
   "dir": "去程",
   "date": "10/26（一）",
   "no": "CX 450",
   "from": "TPE",
   "to": "NRT",
   "dep": "12:50",
   "arr": "16:50",
   "dur": "3h 00m",
   "fromName": "桃園 T1",
   "toName": "成田 T2",
   "airline": "國泰航空",
   "bag": "手提 7 公斤；托運 23 公斤"
  },
  {
   "dir": "回程",
   "date": "11/5（四）",
   "no": "CX 451",
   "from": "NRT",
   "to": "TPE",
   "dep": "15:30",
   "arr": "18:35",
   "dur": "4h 05m",
   "fromName": "成田 T2",
   "toName": "桃園 T1",
   "airline": "國泰航空",
   "bag": "手提 7 公斤；托運 23 公斤"
  }
 ],
 "checklist": [
  "護照",
  "Esim",
  "Visit Japan Web",
  "相機",
  "熊鈴",
  "帶給朋友的台灣零食"
 ]
};
