import { GrammarItem } from '../../types';

export const N1_GRAMMAR: GrammarItem[] = [
  {
    id: 'n1-g1-de-are',
    title: '～であれ / ～であろうと (Dù có là... đi chăng nữa)',
    level: 'N1',
    category: 'Điều kiện nhượng bộ cao cấp',
    formation: 'Danh từ / Từ nghi vấn + であれ / であろうと',
    meaningVi: 'Cho dù là bất kỳ ai, bất kỳ cái gì thì kết quả/nguyên tắc vẫn không thay đổi',
    explanationVi: 'Dùng trong văn viết nghị luận, pháp luật, tuyên bố nguyên tắc tuyệt đối không có ngoại lệ. Thường đi cùng たとえ (cho dù) hoặc từ nghi vấn (何であれ, 誰であれ).',
    examples: [
      { jp: 'たとえ国王であれ、法律の前には一人の市民にすぎない。', furigana: 'たとえこくおうであれ、ほうりつのまえにはひとりのしみんにすぎない。', vi: 'Cho dù có là quốc vương đi chăng nữa, trước pháp luật cũng chỉ là một công dân bình thường.' },
      { jp: '理由が何であれ、暴力を振るうことは許されない。', furigana: 'りゆうがなんであれ、ぼうりょくをふるうことはゆるされない。', vi: 'Dù lý do có là gì đi chăng nữa, việc dùng bạo lực là không thể tha thứ.' },
      { jp: 'いかなる困難であろうと、最後まで諦めずに戦い抜く。', furigana: 'いかなるこんなんであろうと、さいごまであきらめずにたたかいぬく。', vi: 'Dù là bất kỳ khó khăn nào, tôi cũng sẽ chiến đấu đến cùng không bỏ cuộc.' },
    ],
    nuanceVs: {
      rivalTitle: '～としても (Dù cho là... - N3/N2)',
      difference: '～であれ là văn phong trang trọng, mang tính nguyên tắc tuyệt đối, văn bản quy chuẩn; trong khi ～としても mang tính giả định thông thường trong đời sống.',
      whenToUseA: 'Dùng であれ khi viết văn nghị luận, quy tắc hiến pháp, triết lý sống.',
      whenToUseB: 'Dùng としても khi giả thuyết thông thường: "Dù trời có mưa tôi cũng đi".',
      trick: 'であれ = "Bất di bất dịch, không ngoại lệ!".',
    },
  },
  {
    id: 'n1-g2-wo-kawaki-ni',
    title: '～を皮切りに (Khởi đầu với... / Mở màn bằng...)',
    level: 'N1',
    category: 'Trình tự & Lan tỏa sự kiện',
    formation: 'Danh từ + を皮切りに（して） / を皮切りとして',
    meaningVi: 'Lấy một sự việc làm phát súng mở màn, sau đó hàng loạt sự việc tương tự liên tiếp diễn ra với quy mô ngày càng mở rộng',
    explanationVi: 'Diễn tả sự bùng nổ, lan rộng của một chuỗi sự kiện. Thường dùng trong tin tức thời sự, kinh tế, lưu diễn ca nhạc, chiến dịch quảng bá.',
    examples: [
      { jp: '東京公演を皮切りに、全国ツアーがスタートする。', furigana: 'とうきょうこうえんをかわきりに、ぜんこくツアーがスタートする。', vi: 'Bắt đầu mở màn với đêm diễn tại Tokyo, chuyến lưu diễn toàn quốc sẽ chính thức khởi động.' },
      { jp: '彼の発言を皮切りにして、会議は白熱した議論へと発展した。', furigana: 'かれのはつげんをかわきりにして、かいぎははくねつしたぎろんへとはってんした。', vi: 'Lấy phát biểu của anh ấy làm khởi đầu, cuộc họp đã bùng nổ thành một cuộc tranh luận sôi nổi.' },
    ],
  },
  {
    id: 'n1-g3-kiwamari-nai',
    title: '～極まりない / ～極まる (Vô cùng / Cực kỳ... hết sức)',
    level: 'N1',
    category: 'Mức độ cảm xúc & Đánh giá đỉnh điểm',
    formation: 'Tính từ đuôi な + 極まりない / 極まる (hoặc A-i đuôi こと + 極まりない)',
    meaningVi: 'Đạt đến mức độ tột cùng, không có gì sánh bằng (thường mang sắc thái tiêu cực hoặc bất bình)',
    explanationVi: 'Cách nói trang trọng thể hiện sự phẫn nộ, chê trách hoặc cảm thán tột độ trước một hành vi vô lễ, nguy hiểm hay đáng tiếc.',
    examples: [
      { jp: '彼のあのような態度は、無礼極まりない。', furigana: 'かれのあのようなたいどは、ぶれいきわまりない。', vi: 'Thái độ như thế của anh ta là vô lễ tột cùng.' },
      { jp: 'シートベルトを締めずに高速道路を走るなど、危険極まりない行為だ。', furigana: 'シートベルトをしめずにこうそくどうろをはしるなど、きけんきわまりないこういだ。', vi: 'Lái xe trên cao tốc mà không thắt dây an toàn là hành vi nguy hiểm hết sức.' },
    ],
  },
  {
    id: 'n1-g4-naradehano',
    title: '～ならでは (Chỉ có ở... mới có / Độc nhất vô nhị)',
    level: 'N1',
    category: 'Đặc trưng độc đáo & Tán thưởng',
    formation: 'Danh từ + ならでは / ならではの + N',
    meaningVi: 'Chỉ có riêng đối tượng này mới sở hữu đặc điểm tuyệt vời như vậy, những nơi khác không thể có',
    explanationVi: 'Lời khen ngợi, tán dương sâu sắc về bản sắc, truyền thống hoặc phong cách riêng biệt độc đáo.',
    examples: [
      { jp: '京都ならではの美しい風情を心ゆくまで味わった。', furigana: 'きょうとならではのうつくしいふぜいをこころゆくまであじわった。', vi: 'Tôi đã tận hưởng trọn vẹn nét phong tình tuyệt đẹp chỉ có thể tìm thấy ở Kyoto.' },
      { jp: 'これはベテラン職人ならではの繊細な技法だ。', furigana: 'これはベテランしょくにんならではのせんさいなぎほうだ。', vi: 'Đây là kỹ thuật tinh xảo độc nhất vô nhị chỉ có ở những nghệ nhân gạo cội.' },
    ],
  },
  {
    id: 'n1-g5-to-aimatte',
    title: '～と相まって (Cùng hòa quyện với... / Kết hợp cùng)',
    level: 'N1',
    category: 'Tác động cộng hưởng',
    formation: 'Danh từ + と相まって / が相まって',
    meaningVi: 'Yếu tố A kết hợp cộng hưởng với yếu tố B tạo nên hiệu quả/kết quả vượt bậc',
    explanationVi: 'Diễn tả sự tương hỗ, hiệu ứng cộng hưởng làm tăng cường độ của kết quả.',
    examples: [
      { jp: '澄んだ空気と美しい紅葉が相まって、息をのむような絶景を作り出している。', furigana: 'すんだくうきとうつくしいこうようがあいまって、いきをのむようなぜっけいをつくりだしている。', vi: 'Bầu không khí trong lành hòa quyện cùng lá đỏ tuyệt đẹp đã tạo nên một tuyệt cảnh khiến người ta nín thở.' },
      { jp: '彼の才能は、不断の努力と相まって大きな成功をもたらした。', furigana: 'かれのさいのうは、ふだんのどりょくとあいまっておおきなせいこうをもたらした。', vi: 'Tài năng thiên bẩm kết hợp cùng sự nỗ lực không ngừng nghỉ đã mang lại cho anh ấy thành công vang dội.' },
    ],
  },
];
