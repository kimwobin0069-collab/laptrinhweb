export type QuestionCategory = 'song' | 'anime' | 'food' | 'flower';

export interface GameQuestion {
  id: string;
  roundNumber: 1 | 2 | 3;
  category: QuestionCategory;
  categoryLabel: string;
  badgeEmoji: string;
  title: string;
  instruction: string;
  japaneseContent: string;
  image?: string;
  acceptedAnswers: string[];
  displayAnswer: string;
  explanation: string;
  hint: string;
  funFact?: string;
}

export interface RoundInfo {
  roundNumber: 1 | 2 | 3;
  name: string;
  description: string;
  badge: string;
}

export const ROUND_CONFIG: Record<1 | 2 | 3, RoundInfo> = {
  1: {
    roundNumber: 1,
    name: 'Vòng 1: Giai Điệu & Anime Xứ Phù Tang',
    description: 'Thực hành sao chép lời bài hát và miêu tả phim anime tiếng Nhật vào Google Dịch để tìm ra tên tác phẩm!',
    badge: '🎵 Âm Nhạc & Hoạt Hình',
  },
  2: {
    roundNumber: 2,
    name: 'Vòng 2: Hương Vị Ẩm Thực Nhật Bản',
    description: 'Dịch các đoạn văn bản miêu tả nguyên liệu, cách chế biến để giải mã những món ăn trứ danh của Nhật Bản!',
    badge: '🍣 Ẩm Thực Truyền Thống',
  },
  3: {
    roundNumber: 3,
    name: 'Vòng 3: Thám Tử Hình Ảnh (Google Lens Master)',
    description: 'Thực hành tìm kiếm bằng hình ảnh (Google Images / Google Lens) để xác định loài hoa tuyệt đẹp của Nhật Bản!',
    badge: '🔍 Thám Tử Google Lens',
  },
};

// ===================== NGÂN HÀNG CÂU HỎI THEO YÊU CẦU =====================

// 1. NHÓM BÀI HÁT (Vòng 1)
export const SONG_QUESTIONS: GameQuestion[] = [
  {
    id: 'song-ame',
    roundNumber: 1,
    category: 'song',
    categoryLabel: 'Tên bài hát Nhật Bản',
    badgeEmoji: '🌧️',
    title: 'Câu hỏi: Đoạn lời sau thuộc bài hát nổi tiếng nào?',
    instruction: 'Hãy sao chép đoạn lời bài hát tiếng Nhật dưới đây, dán vào Google Dịch hoặc tìm kiếm trên Google để tìm tên bài hát!',
    japaneseContent: '雨のようにすなおにあの人と私は流れて雨のように愛してサヨナラの海へ流れついた手紙なんてよしてねなんどもくり返し泣くから電話だけで捨ててね僕もひとりだよとだましてね',
    acceptedAnswers: ['ame', 'mưa', 'mua', 'bai ca giot mua', 'bài ca giọt mưa', 'moritaka chisato', 'chisato moritaka', '雨', 'song ame'],
    displayAnswer: 'Ame (雨 - Moritaka Chisato)',
    explanation: 'Đây là đoạn ca từ trứ danh trong ca khúc "Ame" (雨 - nghĩa là "Mưa") phát hành năm 1990 của nữ ca sĩ Chisato Moritaka. Bài hát mang giai điệu êm dịu, da diết về nỗi buồn chia tay trong cơn mưa.',
    hint: 'Tên bài hát tiếng Nhật có nghĩa là một hiện tượng thời tiết tự nhiên khi nước từ những đám mây rơi xuống mặt đất (chỉ gồm 1 chữ Hán: 雨).',
    funFact: 'Tại Nhật Bản, "Ame" là một trong những bản tình ca mùa mưa được phát nhiều nhất trên các đài phát thanh mỗi khi mùa mưa (Tsuyu) về.',
  },
  {
    id: 'song-binks',
    roundNumber: 1,
    category: 'song',
    categoryLabel: 'Tên bài hát Anime One Piece',
    badgeEmoji: '🏴‍☠️',
    title: 'Câu hỏi: Đây là bài hát hải tặc nổi tiếng nào?',
    instruction: 'Hãy dùng Google Dịch để tìm hiểu xem ca khúc hải tặc huyền thoại này tên là gì (từng được Ado và Brook thể hiện):',
    japaneseContent: 'ビンクスの酒を 届けにゆくよ 海風 気まかせ 波まかせ 潮の向こうで 夕日も騒ぐ 空にゃ 輪をかく 鳥の唄\nサヨナラ港 つむぎの里よ ドンと一発 唄お 船出の唄',
    acceptedAnswers: ['binkusu no sake', 'binks no sake', 'binks sake', 'binks\' sake', 'rượu binks', 'ruou binks', 'rượu của binks', 'ビンクスの酒', 'binkusunosake', 'binks'],
    displayAnswer: 'Binks no Sake (ビンクスの酒 / Rượu của Binks)',
    explanation: 'Ca khúc huyền thoại "Binks no Sake" (Rượu của Binks) trong tác phẩm One Piece. Ca khúc này gắn liền với số phận của nhạc công Brook và được nữ ca sĩ Ado thể hiện vô cùng cảm xúc trong phim One Piece Film: Red.',
    hint: 'Bài hát kể về việc mang một bình đồ uống có cồn của nhân vật tên "Binks" vượt qua sóng gió đại dương.',
    funFact: 'Tác giả Eiichiro Oda đã ấp ủ giai điệu bài hát này trong nhiều năm trước khi đưa vào manga để làm bài ca biểu tượng của thế giới hải tặc.',
  },
  {
    id: 'song-hitorijouzu',
    roundNumber: 1,
    category: 'song',
    categoryLabel: 'Tên bài hát bất hủ (Nhạc gốc)',
    badgeEmoji: '❄️',
    title: 'Câu hỏi: Bài hát gốc này có tên tiếng Nhật là gì?',
    instruction: 'Dịch đoạn lời dưới đây. Đây chính là giai điệu gốc của bài hát "Người Tình Mùa Đông" rất quen thuộc tại Việt Nam!',
    japaneseContent: '心が街角で泣いているひとりはキライだとすねるひとり上手と呼ばないで心だけ連れてゆかないで私を置いてゆかないでひとりが好きなわけじゃないのよ',
    acceptedAnswers: ['hitori jouzu', 'hitorijouzu', 'hitori jozu', 'người tình mùa đông', 'nguoi tinh mua dong', 'ひとり上手', 'nakajima miyuki', 'miyuki nakajima'],
    displayAnswer: 'Hitori Jouzu (ひとり上手 - Nakajima Miyuki)',
    explanation: 'Ca khúc "Hitori Jouzu" (ひとり上手 - dịch nôm na là: Tự quen một mình) do danh ca Nakajima Miyuki sáng tác và thể hiện năm 1980. Tại Việt Nam, ca khúc này được phổ lời Việt thành bản hit huyền thoại "Người Tình Mùa Đông" do ca sĩ Như Quỳnh thể hiện.',
    hint: 'Tại Việt Nam, bài hát này gắn liền với hình ảnh cô gái đội mũ nồi len đỏ trong ca khúc "Người tình mùa đông".',
    funFact: 'Nakajima Miyuki là nhạc sĩ huyền thoại của Nhật Bản có hơn 70 ca khúc được cover lại thành các bản hit nổi tiếng khắp châu Á (Trung Quốc, Hong Kong, Việt Nam).',
  },
];

// 2. NHÓM ANIME (Vòng 1)
export const ANIME_QUESTIONS: GameQuestion[] = [
  {
    id: 'anime-conan',
    roundNumber: 1,
    category: 'anime',
    categoryLabel: 'Phim hoạt hình Anime',
    badgeEmoji: '🔍',
    title: 'Câu hỏi: Đoạn miêu tả sau nói về bộ phim hoạt hình nào?',
    instruction: 'Hãy dùng Google Dịch để tìm hiểu nội dung tóm tắt cốt truyện và đoán tên bộ phim anime:',
    japaneseContent: '高校生探偵の工藤新一は、幼馴染の毛利蘭と遊園地に行った際、怪しい黒ずくめの男たちを目撃する。組織の取引を監視していたところ背後から襲われ、試作段階の毒薬（APTX4869）を飲まされて体が小学生の姿に縮んでしまう！彼は正体を隠し、蝶ネクタイ型変声機やスニーカーを使って数々の難事件を解決していく。',
    acceptedAnswers: ['conan', 'tham tu lung danh conan', 'thám tử lừng danh conan', 'detective conan', 'edogawa conan', 'case closed', 'kudo shinichi', 'tham tu conan'],
    displayAnswer: 'Thám tử lừng danh Conan (Detective Conan / 名探偵コナン)',
    explanation: 'Bộ truyện và anime trinh thám nổi tiếng nhất Nhật Bản của tác giả Aoyama Gosho, kể về thám tử trung học Kudo Shinichi bị teo nhỏ và mang danh tính Edogawa Conan.',
    hint: 'Nhân vật chính là một thám tử tiểu học đeo kính cận, nơ đổi giọng nói và có câu nói nổi tiếng: "Chân tướng chỉ có một!".',
  },
  {
    id: 'anime-shin',
    roundNumber: 1,
    category: 'anime',
    categoryLabel: 'Phim hoạt hình Anime',
    badgeEmoji: '🖍️',
    title: 'Câu hỏi: Đoạn miêu tả sau nói về bộ phim hoạt hình nào?',
    instruction: 'Dịch đoạn văn tiếng Nhật miêu tả cuộc sống của cậu bé 5 tuổi này sang tiếng Việt:',
    japaneseContent: '埼玉県春日部市に住む、マイペースでおバカな5歳の幼稚園児・野原しんのすけが主人公。父・ひろし、母・みさえ、妹・ひまわり、愛犬・シロとともに、予測不能なハチャメチャな行動で周囲の人々を巻き込みながら大騒動を巻き起こす国民的ギャグコメディアニメ。チョコビのお菓子やアクション仮面が大好き。',
    acceptedAnswers: ['shin', 'shin cau be but chi', 'shin cậu bé bút chì', 'crayon shin-chan', 'crayon shin chan', 'shin chan', 'cau be but chi', 'cậu bé bút chì', 'クレヨンしんちゃん'],
    displayAnswer: 'Shin - Cậu bé bút chì (Crayon Shin-chan / クレヨンしんちゃん)',
    explanation: 'Anime hài hước kinh điển về cậu bé Nohara Shinnosuke 5 tuổi tại tỉnh Saitama với những tình huống dở khóc dở cười cùng gia đình và bạn bè lớp Hoa Hướng Dương.',
    hint: 'Cậu bé có đôi lông mày rậm đặc trưng, tính cách tinh nghịch và thích ăn bánh quy sôcôla Chocobi.',
  },
  {
    id: 'anime-doraemon',
    roundNumber: 1,
    category: 'anime',
    categoryLabel: 'Phim hoạt hình Anime',
    badgeEmoji: '🔔',
    title: 'Câu hỏi: Đoạn miêu tả sau nói về bộ phim hoạt hình nào?',
    instruction: 'Hãy dịch đoạn văn sau sang tiếng Việt để nhận diện bộ phim hoạt hình tuổi thơ:',
    japaneseContent: '22世紀の未来からタイムマシンで現代にやってきた青いネコ型ロボット。勉強も運動も苦手でいつもジャイアンやスネ夫にいじめられている小学生・野比のび太を一人前にするため、お腹にある四次元ポケットから「どこでもドア」や「タケコプター」などの不思議なひみつ道具を取り出して助けてくれる。どら焼きが大好物でネズミが大の苦手。',
    acceptedAnswers: ['doraemon', 'đôrêmon', 'doremon', 'doreamon', 'chú mèo máy doraemon', 'ドラえもん'],
    displayAnswer: 'Doraemon (Chú mèo máy đến từ tương lai / ドラえもん)',
    explanation: 'Tác phẩm bất hủ của cố họa sĩ Fujiko F. Fujio về chú mèo máy màu xanh Doraemon và những chuyến phiêu lưu kỳ thú cùng nhóm bạn Nobita, Shizuka, Jaian, Suneo.',
    hint: 'Chú mèo máy này không có tai, rất thích ăn bánh rán Dorayaki và cực kỳ sợ chuột.',
  },
  {
    id: 'anime-onepiece',
    roundNumber: 1,
    category: 'anime',
    categoryLabel: 'Phim hoạt hình Anime',
    badgeEmoji: '🍖',
    title: 'Câu hỏi: Đoạn miêu tả sau nói về bộ phim hoạt hình nào?',
    instruction: 'Dịch đoạn tóm tắt sau để tìm tên bộ phim anime phiêu lưu nổi tiếng nhất thế giới:',
    japaneseContent: '「ゴムゴムの実」を食べて体がゴムのように自在に伸びる能力を手に入れた少年モンキー・D・ルフィが主人公。トレードマークの麦わら帽子をかぶり、剣士ゾロ、航海士ナミなどの仲間を集めて「麦わらの一味」を結成。かつて処刑された海賊王ゴール・D・ロジャーが遺した「ひとつなぎの大秘宝（ワンピース）」を求め、海賊王を目指して大海原を旅する。',
    acceptedAnswers: ['one piece', 'vua hải tặc', 'vua hai tac', 'đảo hải tặc', 'dao hai tac', 'onepiece', 'ワンピース'],
    displayAnswer: 'One Piece (Vua Hải Tặc / Đảo Hải Tặc / ワンピース)',
    explanation: 'Hành trình của thuyền trưởng Monkey D. Luffy cùng băng Mũ Rơm dong buồm khám phá Đại Hải Trình để chinh phục kho báu One Piece.',
    hint: 'Nhân vật chính luôn đội chiếc mũ rơm do Shanks tóc đỏ trao tặng và có thể co giãn cơ thể như cao su.',
  },
];

// 3. NHÓM ẨM THỰC (Vòng 2)
export const FOOD_QUESTIONS: GameQuestion[] = [
  {
    id: 'food-sushi',
    roundNumber: 2,
    category: 'food',
    categoryLabel: 'Món ăn truyền thống Nhật Bản',
    badgeEmoji: '🍣',
    title: 'Câu hỏi: Đây là món ăn biểu tượng nào của Nhật Bản?',
    instruction: 'Hãy sao chép đoạn miêu tả tiếng Nhật dưới đây vào Google Dịch để tìm ra tên món ăn:',
    japaneseContent: '酢、塩、砂糖で絶妙に調味されたご飯（酢飯）の上に、マグロ、サーモン、エビなどの新鮮な生の魚介類や卵焼きなどの具材（ネタ）を一口サイズにのせて握った、日本の伝統的かつ世界で最も有名な料理は何でしょう？ワサビと醤油をつけていただきます。',
    acceptedAnswers: ['sushi', 'cơm cuộn', 'com cuon', 'shushi', '寿司', 'すし'],
    displayAnswer: 'Sushi (寿司 / すし)',
    explanation: 'Sushi là món ăn tinh hoa nghệ thuật ẩm thực Nhật Bản, kết hợp giữa cơm trộn giấm (shari) và các loại hải sản tươi sống (neta).',
    hint: 'Món ăn này thường được ăn kèm với gừng ngâm chua gari và mù tạt cay nồng wasabi.',
  },
  {
    id: 'food-ramen',
    roundNumber: 2,
    category: 'food',
    categoryLabel: 'Món ăn quốc dân Nhật Bản',
    badgeEmoji: '🍜',
    title: 'Câu hỏi: Món mì nước nóng hổi nổi tiếng này tên là gì?',
    instruction: 'Dịch đoạn miêu tả sau sang tiếng Việt để nhận diện món mì quốc dân của Nhật Bản:',
    japaneseContent: '小麦粉で作られた中華麺に、豚骨（とんこつ）、鶏ガラ、醤油、または味噌を長時間煮込んで抽出した深いコクと旨味のある熱々スープを注ぎ、チャーシュー、味付け半熟煮玉子、メンマ（味付けタケノコ）、刻みネギ、海苔をトッピングした日本の国民的人気麺料理は何でしょう？',
    acceptedAnswers: ['ramen', 'mì ramen', 'mi ramen', 'mì nhật', 'mi nhat', 'ラーメン', 'らーめん'],
    displayAnswer: 'Ramen (ラーメン / らーめん)',
    explanation: 'Mì Ramen là món ăn quốc hồn quốc túy của Nhật Bản với 4 dòng nước dùng chính: Shoyu (nước tương), Miso (tương đậu), Shio (muối) và Tonkotsu (xương heo hầm sánh đậm).',
    hint: 'Món mì này thường ăn kèm thịt xá xíu mềm tan và trứng ngâm tương lòng đào béo ngậy.',
  },
  {
    id: 'food-takoyaki',
    roundNumber: 2,
    category: 'food',
    categoryLabel: 'Đặc sản đường phố Osaka',
    badgeEmoji: '🐙',
    title: 'Câu hỏi: Món bánh nướng đường phố này tên là gì?',
    instruction: 'Sử dụng Google Dịch để khám phá món ăn vặt hình viên tròn nổi tiếng ở vùng Kansai:',
    japaneseContent: '小麦粉を溶いた出汁入りの生地の中に、ぶつ切りにしたタコ（蛸）や天かす、紅生姜、ネギを入れて、半球形のくぼみが並んだ専用の鉄板で一口大の球形にコロコロと転がしながら焼き上げる。仕上げに濃厚なソース、マヨネーズ、青のり、ゆらゆらと踊る鰹節をたっぷりかけて熱々を頬張る大阪・関西発祥のソウルフードは何でしょう？',
    acceptedAnswers: ['takoyaki', 'bánh bạch tuộc', 'banh bach tuoc', 'bánh takoyaki', 'banh takoyaki', 'たこ焼き', 'たこやき'],
    displayAnswer: 'Takoyaki (たこ焼き - Bánh bạch tuộc nướng)',
    explanation: 'Takoyaki là biểu tượng ẩm thực đường phố của thành phố Osaka. Bánh có lớp vỏ ngoài giòn nhẹ, bên trong mềm thơm bốc khói cùng miếng xúc tua bạch tuộc sần sật.',
    hint: 'Trong tên món ăn có chữ "Tako" (nghĩa là con Bạch Tuộc trong tiếng Nhật).',
  },
  {
    id: 'food-tempura',
    roundNumber: 2,
    category: 'food',
    categoryLabel: 'Món chiên truyền thống',
    badgeEmoji: '🍤',
    title: 'Câu hỏi: Món tẩm bột chiên giòn này tên là gì?',
    instruction: 'Dịch đoạn miêu tả về kỹ thuật chiên giòn đỉnh cao của người Nhật sang tiếng Việt:',
    japaneseContent: '新鮮な車エビやイカなどの魚介類、あるいはサツマイモ、レンコン、カボチャ、ナス、大葉などの旬の野菜に、小麦粉と冷水、卵を軽く混ぜ合わせた薄い衣（ころも）をまとわせ、高温の胡麻油や植物油でサクッと黄金色に揚げた日本料理。天つゆに大根おろしを溶いて食べるのが一般的です。',
    acceptedAnswers: ['tempura', 'tôm tempura', 'tom tempura', 'bột chiên tempura', 'tôm tẩm bột', '天ぷら', 'てんぷら'],
    displayAnswer: 'Tempura (天ぷら / てんぷら)',
    explanation: 'Tempura là món chiên trứ danh của Nhật Bản với lớp vỏ bột mỏng tan, giòn rụm nhưng không hề ngấy dầu mỡ, giữ trọn vị ngọt tự nhiên của tôm và rau củ.',
    hint: 'Món này thường thấy nhất là những chú tôm được duỗi thẳng tắp tẩm bột chiên xù vàng ươm.',
  },
];

// 4. NHÓM HÌNH ẢNH HOA (Vòng 3 - Tìm kiếm bằng Google Lens / Google Images)
export const FLOWER_QUESTIONS: GameQuestion[] = [
  {
    id: 'flower-wisteria-ashikaga',
    roundNumber: 3,
    category: 'flower',
    categoryLabel: 'Thử thách Tìm kiếm Hình ảnh (Google Lens)',
    badgeEmoji: '🌺',
    title: 'Câu hỏi hình ảnh: Đây là loài hoa nổi tiếng nào của Nhật Bản?',
    instruction: '【Kỹ năng Google Lens】 Nhấp chuột phải vào bức ảnh chọn "Tìm hình ảnh bằng Google" (Search image with Google) hoặc chụp ảnh/tải ảnh lên Google Images để tìm tên loài hoa này bằng tiếng Việt!',
    japaneseContent: '【画像検索チャレンジ】この写真は日本の栃木県足利フラワーパーク（Ashikaga Flower Park）で撮影された、樹齢160年を超える大樹から紫色の花房がシャワーのように垂れ下がる幻想的な巨木です。春（4月下旬〜5月上旬）に見頃を迎えるこの美しい日本の伝統的な「花の名前」を突き止めてください！',
    image: 'images/hoa-tu-dang.jpg',
    acceptedAnswers: [
      'hoa tử đằng', 'tử đằng', 'hoa tu dang', 'tu dang', 
      'wisteria', 'fuji', 'hoa fuji', 'fuji flower', 'japanese wisteria',
      'cây tử đằng', 'cay tu dang', 'hoa wisteria', '藤', 'ふじ', 'フジ'
    ],
    displayAnswer: 'Hoa Tử Đằng (Wisteria / 藤 - Fuji)',
    explanation: 'Bức ảnh trên chụp cây Hoa Tử Đằng (tiếng Nhật gọi là "Fuji" - 藤) đại thụ hơn 160 năm tuổi tại Công viên hoa Ashikaga (tỉnh Tochigi, Nhật Bản). Dưới ánh đèn đêm, các chùm hoa tím dài tới gần 2 mét buông rủ xuống như một dải ngân hà kỳ ảo, được đài CNN bình chọn là một trong những điểm đến trong mơ của thế giới.',
    hint: 'Loài hoa thân leo nở thành từng chùm tím dài rủ xuống, trong tiếng Hán Việt gọi là "Tử Đằng" (chữ Tử nghĩa là màu tím).',
    funFact: 'Trong văn hóa Nhật Bản và cả bộ anime nổi tiếng "Kimetsu no Yaiba" (Thanh Gươm Diệt Quỷ), hoa Tử Đằng là biểu tượng thiêng liêng có khả năng xua đuổi tà ma và quỷ dữ.',
  },
  {
    id: 'flower-cherry-blossom',
    roundNumber: 3,
    category: 'flower',
    categoryLabel: 'Thử thách Tìm kiếm Hình ảnh (Google Lens)',
    badgeEmoji: '🌸',
    title: 'Câu hỏi: Quốc hoa biểu tượng của Đất nước Mặt trời mọc là gì?',
    instruction: 'Sử dụng Google Dịch hoặc tìm kiếm hình ảnh để xác định tên loài hoa cánh mỏng màu hồng phấn tượng trưng cho mùa xuân Nhật Bản:',
    japaneseContent: '春（3月〜4月）になると日本列島を一斉にピンク色に染め上げる、日本を象徴する最も有名な花。散り際のはかなさや美しさが武士道精神とも結びつけられ、古くから春になると人々が木の下に集まってお弁当やお酒を楽しむ「花見（お花見）」の文化が盛んです。',
    acceptedAnswers: ['hoa anh đào', 'anh đào', 'hoa anh dao', 'anh dao', 'sakura', 'cherry blossom', 'hoa sakura', '桜', 'さくら'],
    displayAnswer: 'Hoa Anh Đào (Sakura / 桜)',
    explanation: 'Hoa Anh Đào (Sakura) là biểu tượng văn hóa sâu sắc nhất của Nhật Bản, gắn liền với lễ hội ngắm hoa Hanami mỗi độ xuân về.',
    hint: 'Loài hoa màu hồng này nở rộ vào tháng 3 - tháng 4 và thường được dùng làm biểu tượng đặt cạnh tên xứ sở Nhật Bản.',
  },
];

// ===================== HÀM TẠO PHIÊN CHƠI NGẪU NHIÊN =====================

/**
 * Rút ngẫu nhiên n phần tử từ mảng
 */
function getRandomItems<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

/**
 * Chuẩn hóa chuỗi đáp án để so khớp thông minh:
 * - Chuyển chữ thường
 * - Khử dấu tiếng Việt
 * - Loại bỏ các ký tự đặc biệt, dấu câu, khoảng trắng
 */
export function normalizeAnswer(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // bỏ dấu
    .replace(/[đĐ]/g, 'd')
    .replace(/[^a-z0-9]/g, ''); // chỉ giữ chữ cái và số
}

/**
 * Kiểm tra xem câu trả lời của HS có khớp với danh sách đáp án chấp nhận không
 */
export function isCorrectAnswer(userAnswer: string, acceptedAnswers: string[]): boolean {
  const cleanInput = normalizeAnswer(userAnswer);
  if (!cleanInput) return false;

  return acceptedAnswers.some((ans) => {
    const cleanAccepted = normalizeAnswer(ans);
    // Khớp chính xác hoặc chuỗi của HS chứa đáp án cốt lõi (ví dụ: gõ "đó là hoa tử đằng" vẫn đúng vì có "hoatudang")
    return cleanInput === cleanAccepted || cleanInput.includes(cleanAccepted);
  });
}

/**
 * Tạo một bộ đề thi ngẫu nhiên gồm 5 câu hỏi chia thành 3 vòng:
 * - Vòng 1: 1 bài hát ngẫu nhiên + 1 anime ngẫu nhiên (2 câu)
 * - Vòng 2: 2 món ăn Nhật Bản ngẫu nhiên (2 câu)
 * - Vòng 3: Câu hỏi hoa Tử Đằng (luôn có theo ảnh cung cấp) (1 câu)
 */
export function generateGameSession(): GameQuestion[] {
  const song = getRandomItems(SONG_QUESTIONS, 1)[0];
  const anime = getRandomItems(ANIME_QUESTIONS, 1)[0];
  const foods = getRandomItems(FOOD_QUESTIONS, 2);
  const flower = FLOWER_QUESTIONS[0]; // Hoa Tử Đằng là câu hỏi đinh

  return [
    { ...song, roundNumber: 1 },
    { ...anime, roundNumber: 1 },
    { ...foods[0], roundNumber: 2 },
    { ...foods[1], roundNumber: 2 },
    { ...flower, roundNumber: 3 },
  ];
}

// Tổng thời gian chơi: 9 phút = 540 giây
export const GAME_DURATION_SECONDS = 9 * 60;
