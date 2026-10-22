import { JlptExam, JlptVocabFrequency, KanjiRadical } from '../types/jlpt';

export const N5_MOCK_EXAM: JlptExam = {
  "id": 110,
  "level": "N5",
  "title": "JLPT N5 - Mock Test 01 (Bóc tách dữ liệu OnJLPT)",
  "year": 2025,
  "month": 7,
  "is_mock": true,
  "slug": "n5-mock-test-1",
  "sections": {
    "vocabulary": {
      "title": "Từ vựng (文字・語彙)",
      "timeLimit": 1800,
      "mondais": [
        {
          "id": 1742,
          "exam_id": 110,
          "section_code": "vocabulary",
          "title": "<ruby>文字<rp>(</rp><rt>もじ</rt><rp>)</rp></ruby>・<ruby>語彙<rp>(</rp><rt>ごい</rt><rp>)</rp></ruby>",
          "instructions": null,
          "type": "vocabulary",
          "audio_url": null,
          "audio_size": null,
          "image_url": null,
          "passage": null,
          "points": 1,
          "is_transcribed": true,
          "transcript": null,
          "format": null,
          "format_source": "rule",
          "format_confidence": "0.00",
          "format_locked": false,
          "format_issues": [
            "number_unreadable",
            "ai_disagrees"
          ],
          "format_updated_at": "$D2026-08-20T16:16:57.177Z",
          "position": 1742
        },
        {
          "id": 1743,
          "exam_id": 110,
          "section_code": "vocabulary",
          "title": "もんだい2の ことばは どう かきますか。1・2・3・4から いちばん いいものを ひとつ えらんでください。",
          "instructions": null,
          "type": "vocabulary",
          "audio_url": null,
          "audio_size": null,
          "image_url": null,
          "passage": null,
          "points": 1,
          "is_transcribed": true,
          "transcript": null,
          "format": "orthography",
          "format_source": "rule",
          "format_confidence": "0.95",
          "format_locked": false,
          "format_issues": [],
          "format_updated_at": "$D2026-08-20T16:16:57.177Z",
          "position": 1743
        },
        {
          "id": 1744,
          "exam_id": 110,
          "section_code": "vocabulary",
          "title": "もんだい3 ( )に なにをいれますか。1・2・3・4からいちばん いい ものを ひとつ えらんでください。",
          "instructions": null,
          "type": "vocabulary",
          "audio_url": null,
          "audio_size": null,
          "image_url": null,
          "passage": null,
          "points": 1,
          "is_transcribed": true,
          "transcript": null,
          "format": "context",
          "format_source": "rule",
          "format_confidence": "0.95",
          "format_locked": false,
          "format_issues": [],
          "format_updated_at": "$D2026-08-20T16:16:57.177Z",
          "position": 1744
        },
        {
          "id": 1745,
          "exam_id": 110,
          "section_code": "vocabulary",
          "title": "もんだい 4ぶんと だいたい おなじ いみの ぶんが あります。1・2・3・4から いちばん いいものを ひとつ えらんでください。",
          "instructions": null,
          "type": "vocabulary",
          "audio_url": null,
          "audio_size": null,
          "image_url": null,
          "passage": null,
          "points": 1,
          "is_transcribed": true,
          "transcript": null,
          "format": "paraphrase",
          "format_source": "rule",
          "format_confidence": "0.95",
          "format_locked": false,
          "format_issues": [],
          "format_updated_at": "$D2026-08-20T16:16:57.177Z",
          "position": 1745
        }
      ],
      "questions": {
        "1742": [
          {
            "id": 11676,
            "mondai_id": 1742,
            "question_text": "(れい) <ruby>大<rp>(</rp><rt>おお</rt><rp>)</rp></ruby>きな えがあります。\n(かいとうようし)(れい) ●1 2 3 4",
            "choices": [
              "1) おおきな",
              "2) おきな",
              "3)だいきな",
              "4) たいきな"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 0,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11676
          },
          {
            "id": 11677,
            "mondai_id": 1742,
            "question_text": "1. <u><ruby>先週<rp>(</rp><rt>せんしゅう</rt><rp>)</rp></ruby></u> デパートに かいものにいきました。",
            "choices": [
              "1) せんしゅ",
              "2) せんしゅう",
              "3) ぜんしゅ",
              "4) ぜんしゅう"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11677
          },
          {
            "id": 11678,
            "mondai_id": 1742,
            "question_text": "2. ごはんの<u><ruby>後<rp>(</rp><rt>のち</rt><rp>)</rp></ruby></u>で さんぼします。",
            "choices": [
              "1) つぎ",
              "2) うしろ",
              "3) まえ",
              "4) あと"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 3,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11678
          },
          {
            "id": 11679,
            "mondai_id": 1742,
            "question_text": "3. もういちど <u><ruby>言<rp>(</rp><rt>い</rt><rp>)</rp></ruby>って</u>ください。",
            "choices": [
              "1) いって",
              "2) きって",
              "3) まって",
              "4) たって"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 0,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11679
          },
          {
            "id": 11680,
            "mondai_id": 1742,
            "question_text": "4. ちかくに<u><ruby>山<rp>(</rp><rt>やま</rt><rp>)</rp></ruby></u>があります。",
            "choices": [
              "1) かわ",
              "2) やま",
              "3) いけ",
              "4) うみ"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11680
          },
          {
            "id": 11681,
            "mondai_id": 1742,
            "question_text": "5. この ホテルは ヘやが <u><ruby>多<rp>(</rp><rt>おお</rt><rp>)</rp></ruby>い</u>です。",
            "choices": [
              "1) すくない",
              "2) おおい",
              "3) せまい",
              "4) ひろい"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11681
          },
          {
            "id": 11682,
            "mondai_id": 1742,
            "question_text": "6. ともだちといっしょに <u><ruby>学校<rp>(</rp><rt>がっこう</rt><rp>)</rp></ruby></u>にいきます。",
            "choices": [
              "1) がこう",
              "2) がこお",
              "3) がっこう",
              "4) がっこお"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11682
          },
          {
            "id": 11683,
            "mondai_id": 1742,
            "question_text": "7. えんぴつが <u><ruby>六<rp>(</rp><rt>ろく</rt><rp>)</rp></ruby><ruby>本<rp>(</rp><rt>ほん</rt><rp>)</rp></ruby> </u>あります。",
            "choices": [
              "1) ろくぼん",
              "2) ろくぽん",
              "3) ろっぼん",
              "4) ろっぽん"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 3,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11683
          },
          {
            "id": 11684,
            "mondai_id": 1742,
            "question_text": "8. この<u><ruby>新聞<rp>(</rp><rt>しんぶん</rt><rp>)</rp></ruby></u>はいくらですか。",
            "choices": [
              "1) しんむん",
              "2) しんぶん",
              "3) しおん",
              "4) しぶん"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11684
          },
          {
            "id": 11685,
            "mondai_id": 1742,
            "question_text": "9. この カメラは <u><ruby>安<rp>(</rp><rt>やす</rt><rp>)</rp></ruby>い</u>です。",
            "choices": [
              "1) たかい",
              "2) やすい",
              "3) おもい",
              "4) かるい"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11685
          },
          {
            "id": 11686,
            "mondai_id": 1742,
            "question_text": "10. かさは <u><ruby>外<rp>(</rp><rt>そと</rt><rp>)</rp></ruby></u>にあります。",
            "choices": [
              "1) いえ",
              "2) なか",
              "3) そと",
              "4) にわ"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11686
          }
        ],
        "1743": [
          {
            "id": 11687,
            "mondai_id": 1743,
            "question_text": "(れい) わたしの <u>こども</u>は はなが すきです。",
            "choices": [
              "1) <ruby>子<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>ども",
              "2) <ruby>字<rp>(</rp><rt>じ</rt><rp>)</rp></ruby>ども",
              "3)<ruby>小<rp>(</rp><rt>しょう</rt><rp>)</rp></ruby>ども",
              "4) <ruby>了<rp>(</rp><rt>りょう</rt><rp>)</rp></ruby>ども"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 0,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11687
          },
          {
            "id": 11688,
            "mondai_id": 1743,
            "question_text": "11. けさ <u>しゃわー</u>をあびました。",
            "choices": [
              "1) シャワー",
              "2) シャウー",
              "3) ツャワー",
              "4) ツャウー"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 0,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11688
          },
          {
            "id": 11689,
            "mondai_id": 1743,
            "question_text": "12. コーヒーを <u>のみました</u>。",
            "choices": [
              "1) <ruby>食<rp>(</rp><rt>は</rt><rp>)</rp></ruby>みました",
              "2)<ruby>飲<rp>(</rp><rt>の</rt><rp>)</rp></ruby>みました",
              "3) <ruby>飽<rp>(</rp><rt>飽</rt><rp>)</rp></ruby>みました",
              "4) <ruby>飯<rp>(</rp><rt>めし</rt><rp>)</rp></ruby>みました"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11689
          },
          {
            "id": 11690,
            "mondai_id": 1743,
            "question_text": "13. あたらしい <u>くるま</u>を かいました。",
            "choices": [
              "1) <ruby>卓<rp>(</rp><rt>たく</rt><rp>)</rp></ruby>",
              "2) <ruby>草<rp>(</rp><rt>くさ</rt><rp>)</rp></ruby>",
              "3) <ruby>車<rp>(</rp><rt>くるま</rt><rp>)</rp></ruby>",
              "4) <ruby>早<rp>(</rp><rt>はや</rt><rp>)</rp></ruby>"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11690
          },
          {
            "id": 11691,
            "mondai_id": 1743,
            "question_text": "14. このぼうしは <u>1000えん</u>です。",
            "choices": [
              "1) 1000<ruby>千<rp>(</rp><rt>せん</rt><rp>)</rp></ruby>",
              "2) 1000<ruby>万<rp>(</rp><rt>まん</rt><rp>)</rp></ruby>",
              "3) 1000<ruby>冊<rp>(</rp><rt>さつ</rt><rp>)</rp></ruby>",
              "4) 1000<ruby>円<rp>(</rp><rt>えん</rt><rp>)</rp></ruby>"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 3,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11691
          },
          {
            "id": 11692,
            "mondai_id": 1743,
            "question_text": "15. しゅくだいが <u>はんぶん</u> おわりました。",
            "choices": [
              "1) <ruby>羊<rp>(</rp><rt>ひつじ</rt><rp>)</rp></ruby><ruby>分<rp>(</rp><rt>ぶん</rt><rp>)</rp></ruby>",
              "2) <ruby>半分<rp>(</rp><rt>はんぶん</rt><rp>)</rp></ruby>",
              "3) <ruby>羊<rp>(</rp><rt>ひつじ</rt><rp>)</rp></ruby><ruby>文<rp>(</rp><rt>ぶん</rt><rp>)</rp></ruby>",
              "4) <ruby>半文<rp>(</rp><rt>はんもん</rt><rp>)</rp></ruby>"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11692
          },
          {
            "id": 11693,
            "mondai_id": 1743,
            "question_text": "16 わたしの うちに <u>きませんか</u>。",
            "choices": [
              "1) <ruby>来<rp>(</rp><rt>き</rt><rp>)</rp></ruby>ませんか",
              "2) <ruby>末<rp>(</rp><rt>すえ</rt><rp>)</rp></ruby>ませんか",
              "3) <ruby>木<rp>(</rp><rt>き</rt><rp>)</rp></ruby>ませんか",
              "4) <ruby>未<rp>(</rp><rt>み</rt><rp>)</rp></ruby>ませんか"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 0,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11693
          },
          {
            "id": 11694,
            "mondai_id": 1743,
            "question_text": "17. きのう たなかさんと <u>あいました</u>。",
            "choices": [
              "1) <ruby>見<rp>(</rp><rt>み</rt><rp>)</rp></ruby>いました",
              "2) <ruby>書<rp>(</rp><rt>か</rt><rp>)</rp></ruby>いました",
              "3) <ruby>会<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>いました",
              "4) <ruby>話<rp>(</rp><rt>はなし</rt><rp>)</rp></ruby>いました"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11694
          },
          {
            "id": 11695,
            "mondai_id": 1743,
            "question_text": "18. いもうとと <u>おなじ</u> ふくを かいました。",
            "choices": [
              "1) <ruby>伺<rp>(</rp><rt>伺</rt><rp>)</rp></ruby>じ",
              "2) <ruby>回<rp>(</rp><rt>かい</rt><rp>)</rp></ruby>じ",
              "3) <ruby>四<rp>(</rp><rt>よん</rt><rp>)</rp></ruby>じ",
              "4) <ruby>同<rp>(</rp><rt>おな</rt><rp>)</rp></ruby>じ"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 3,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11695
          }
        ],
        "1744": [
          {
            "id": 11696,
            "mondai_id": 1744,
            "question_text": "19. わたしのへやは この( )の 2 かいです。",
            "choices": [
              "1) エレベーター",
              "2) プール",
              "3) エアコン",
              "4) アパート"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 3,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11696
          },
          {
            "id": 11697,
            "mondai_id": 1744,
            "question_text": "20. さとうさんは ギターを じょうずに ( )",
            "choices": [
              "1) うたいます",
              "2) ききます",
              "3) ひきます",
              "4) あそびます"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11697
          },
          {
            "id": 11698,
            "mondai_id": 1744,
            "question_text": "21. テーブルに おさらと はしを( )ください。",
            "choices": [
              "1) ならべて",
              "2) とって",
              "3) たべて",
              "4) あらって"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 0,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11698
          },
          {
            "id": 11699,
            "mondai_id": 1744,
            "question_text": "22. けさ そうじをしたから へやは( )です。",
            "choices": [
              "1) きれい",
              "2) きたない",
              "3) あかるい",
              "4) くらい"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 0,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11699
          },
          {
            "id": 11700,
            "mondai_id": 1744,
            "question_text": "23. きょうは 500 ( ) およぎました。",
            "choices": [
              "1) ど",
              "2) ばん",
              "3) メートル",
              "4) グラム"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11700
          },
          {
            "id": 11701,
            "mondai_id": 1744,
            "question_text": "24. えきから たいしかんまでの( )を かいてください。",
            "choices": [
              "1) しゃしん",
              "2) ちず",
              "3) てがみ",
              "4) きっぷ"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11701
          },
          {
            "id": 11702,
            "mondai_id": 1744,
            "question_text": "25. うるさいから テレビを( ) ください。",
            "choices": [
              "1) けして",
              "2) つけて",
              "3) しめて",
              "4) あけて"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 0,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11702
          },
          {
            "id": 11703,
            "mondai_id": 1744,
            "question_text": "26. きょうは ( )が ふっています。",
            "choices": [
              "1) くもり",
              "2) はれ",
              "3) かぜ",
              "4) ゆき"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 3,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11703
          },
          {
            "id": 11704,
            "mondai_id": 1744,
            "question_text": "27. はこに りんごが ( ) あります。<br><img src=\"image/N5-D1-1.jpg\" alt=\"jlpt N5\">",
            "choices": [
              "1) よっつ",
              "2) いつつ",
              "3) むっつ",
              "4) ななつ"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11704
          },
          {
            "id": 11705,
            "mondai_id": 1744,
            "question_text": "28. めがねは つくえの( )に あります。<br><img src=\"image/N5-D1-16.jpg\" alt=\"jlpt N5\">",
            "choices": [
              "1) そば",
              "2) よこ",
              "3) した",
              "4) うえ"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 3,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11705
          }
        ],
        "1745": [
          {
            "id": 11706,
            "mondai_id": 1745,
            "question_text": "(れい) ここは でぐちです。いりぐちは あちらです。\n(かいとうようし) (れい) 〇 〇 ● 〇",
            "choices": [
              "1) あちらからでてください。",
              "2) あちらからおりてください。",
              "3) あちらからはいってください。",
              "4) あちらからわたってください。"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11706
          },
          {
            "id": 11707,
            "mondai_id": 1745,
            "question_text": "29. <u>まいばんくにの かぞくにでんわします</u>。",
            "choices": [
              "1) よるはときどきくにのかぞくにでんわします。",
              "2) あさはときどきくにのかぞくにでんわします。",
              "3) よるはいつもくにのかぞくにでんわします。",
              "4) あさはいつもくにのかぞくにでんわします。"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11707
          },
          {
            "id": 11708,
            "mondai_id": 1745,
            "question_text": "30. <u>このまちには ゆうめいな たてものがあります</u>。",
            "choices": [
              "1) このまちにはゆうめいなビルがあります。",
              "2) このまちにはゆうめいなおちゃがあります。",
              "3)このまちにはゆうめいなケーキがあります。",
              "4) このまちにはゆうめいなこうえんがあります。"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 0,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11708
          },
          {
            "id": 11709,
            "mondai_id": 1745,
            "question_text": "31. <u>その えいがは おもしろくなかったです</u>。",
            "choices": [
              "1) そのえいがはたのしかったです。",
              "2) そのえいがはつまらなかったです。",
              "3) そのえいがはみじかかったです。",
              "4) そのえいがはながかったです。"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11709
          },
          {
            "id": 11710,
            "mondai_id": 1745,
            "question_text": "32. <u>たんじょうびは 6がつ15にちです</u>。",
            "choices": [
              "1) 6がつ15にちにけっこんしました。",
              "2) 6がつ15にちにテストがはじまりました。",
              "3) 6がつ15にちにうまれました。",
              "4) 6がつ15にちにくにへかえりました。"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11710
          },
          {
            "id": 11711,
            "mondai_id": 1745,
            "question_text": "33. <u>にねんまえに きょうとへいきました</u>。",
            "choices": [
              "1) きのうきょうとへいきました。",
              "2) おとといきょうとへいきました。",
              "3) きょねんきょうとへいきました。",
              "4) おととしきょうとへいきました。"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 3,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11711
          }
        ]
      }
    },
    "grammar_reading": {
      "title": "Ngữ pháp & Đọc hiểu (文法・読解)",
      "timeLimit": 3600,
      "mondais": [
        {
          "id": 1764,
          "exam_id": 110,
          "section_code": "grammar_reading",
          "title": "もんだい1( ) に <ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>を <ruby>入<rp>(</rp><rt>い</rt><rp>)</rp></ruby>れますか。1・2・3・4から いちばんいい ものを <ruby>一<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>つ えらんでください。",
          "instructions": null,
          "type": "grammar",
          "audio_url": null,
          "audio_size": null,
          "image_url": null,
          "passage": null,
          "points": 1,
          "is_transcribed": true,
          "transcript": null,
          "format": "grammar_form",
          "format_source": "rule",
          "format_confidence": "0.95",
          "format_locked": false,
          "format_issues": [],
          "format_updated_at": "$D2026-08-20T16:16:57.177Z",
          "position": 1764
        },
        {
          "id": 1765,
          "exam_id": 110,
          "section_code": "grammar_reading",
          "title": "もんだい2_★_ に <ruby>入<rp>(</rp><rt>はい</rt><rp>)</rp></ruby>る ものは どれですか。1・2・3・4から いちばん いいものを <ruby>一<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>つ えらんでください。",
          "instructions": null,
          "type": "grammar",
          "audio_url": null,
          "audio_size": null,
          "image_url": null,
          "passage": null,
          "points": 1,
          "is_transcribed": true,
          "transcript": null,
          "format": "sentence_composition",
          "format_source": "rule",
          "format_confidence": "0.95",
          "format_locked": false,
          "format_issues": [],
          "format_updated_at": "$D2026-08-20T16:16:57.177Z",
          "position": 1765
        },
        {
          "id": 1766,
          "exam_id": 110,
          "section_code": "grammar_reading",
          "title": "もんだい3 22. から26. に <ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>を <ruby>入<rp>(</rp><rt>い</rt><rp>)</rp></ruby>れますか。ぶんしょうのいみを かんがえて、1・2・3・4から いちばん いい ものを <ruby>一<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>つ えらんでください。",
          "instructions": null,
          "type": "grammar",
          "audio_url": null,
          "audio_size": null,
          "image_url": null,
          "passage": null,
          "points": 1,
          "is_transcribed": true,
          "transcript": null,
          "format": "text_grammar",
          "format_source": "rule",
          "format_confidence": "0.95",
          "format_locked": false,
          "format_issues": [],
          "format_updated_at": "$D2026-08-20T16:16:57.177Z",
          "position": 1766
        },
        {
          "id": 1767,
          "exam_id": 110,
          "section_code": "grammar_reading",
          "title": "もんだい4 つぎの (1)から (3) の ぶんしょうを <ruby>読<rp>(</rp><rt>よ</rt><rp>)</rp></ruby>んで、しつもんにこたえてください。こたえは、1・2・3・4から いちばん いいものを <ruby>一<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>つ えらんでください。",
          "instructions": null,
          "type": "grammar",
          "audio_url": null,
          "audio_size": null,
          "image_url": null,
          "passage": null,
          "points": 1,
          "is_transcribed": true,
          "transcript": null,
          "format": "reading_short",
          "format_source": "rule",
          "format_confidence": "0.95",
          "format_locked": false,
          "format_issues": [],
          "format_updated_at": "$D2026-08-20T16:16:57.177Z",
          "position": 1767
        },
        {
          "id": 1768,
          "exam_id": 110,
          "section_code": "grammar_reading",
          "title": "もんだい 5 つぎの ぶんしょうを <ruby>読<rp>(</rp><rt>よ</rt><rp>)</rp></ruby>んで、しつもんに こたえてください。こたえは、1・2・3・4から いちばん いい ものを <ruby>一<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>つ えらんでください。",
          "instructions": null,
          "type": "grammar",
          "audio_url": null,
          "audio_size": null,
          "image_url": null,
          "passage": null,
          "points": 1,
          "is_transcribed": true,
          "transcript": null,
          "format": "reading_medium",
          "format_source": "rule",
          "format_confidence": "0.95",
          "format_locked": false,
          "format_issues": [],
          "format_updated_at": "$D2026-08-20T16:16:57.177Z",
          "position": 1768
        },
        {
          "id": 1769,
          "exam_id": 110,
          "section_code": "grammar_reading",
          "title": "もんだい 6 <ruby>右<rp>(</rp><rt>みぎ</rt><rp>)</rp></ruby>のページを <ruby>見<rp>(</rp><rt>み</rt><rp>)</rp></ruby>て、<ruby>下<rp>(</rp><rt>した</rt><rp>)</rp></ruby>の しつもんに こたえてください。こたえは、1・2・3・4から いちばん いいものを ーっ えらんでください。",
          "instructions": null,
          "type": "grammar",
          "audio_url": null,
          "audio_size": null,
          "image_url": null,
          "passage": null,
          "points": 1,
          "is_transcribed": true,
          "transcript": null,
          "format": "info_retrieval",
          "format_source": "rule",
          "format_confidence": "0.70",
          "format_locked": false,
          "format_issues": [
            "missing_passage"
          ],
          "format_updated_at": "$D2026-08-20T16:16:57.177Z",
          "position": 1769
        }
      ],
      "questions": {
        "1764": [
          {
            "id": 11817,
            "mondai_id": 1764,
            "question_text": "(れい) これ( ) えんぴつです。<br>\n(かいとうようし) (れい) ① ② ● ④",
            "choices": [
              "1) に",
              "2)を",
              "3)は",
              "4)や"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11817
          },
          {
            "id": 11818,
            "mondai_id": 1764,
            "question_text": "1. <ruby>日本<rp>(</rp><rt>にっぽん</rt><rp>)</rp></ruby> ( ) ラーメンは おいしいです。",
            "choices": [
              "1) に",
              "2) の",
              "3) を",
              "4) へ"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11818
          },
          {
            "id": 11819,
            "mondai_id": 1764,
            "question_text": "2. わたしには きょうだいが <ruby>二<rp>(</rp><rt>に</rt><rp>)</rp></ruby><ruby>人<rp>(</rp><rt>にん</rt><rp>)</rp></ruby>います。 おとうと（　）いもうとです。",
            "choices": [
              "1) は",
              "2) も",
              "3) と",
              "4) か"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11819
          },
          {
            "id": 11820,
            "mondai_id": 1764,
            "question_text": "3.「<ruby>田中<rp>(</rp><rt>たなか</rt><rp>)</rp></ruby>さん ( ) きのう どこかに<ruby>出<rp>(</rp><rt>で</rt><rp>)</rp></ruby>かけましたか。」<br> <ruby>田中<rp>(</rp><rt>たなか</rt><rp>)</rp></ruby>「いいえ、いえに いました。」",
            "choices": [
              "1) で",
              "2) は",
              "3) を",
              "4) に"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11820
          },
          {
            "id": 11821,
            "mondai_id": 1764,
            "question_text": "4. (タクシーで)<br>A「つぎの かどを <ruby>右<rp>(</rp><rt>みぎ</rt><rp>)</rp></ruby> ( ) まがってください。」<br>B「わかりました。」",
            "choices": [
              "1) が",
              "2) や",
              "3) か",
              "4) に"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 3,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11821
          },
          {
            "id": 11822,
            "mondai_id": 1764,
            "question_text": "5. きのう、わたしは ひとり(　) えいがを <ruby>見<rp>(</rp><rt>み</rt><rp>)</rp></ruby>に<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きました。",
            "choices": [
              "1) が",
              "2) を",
              "3) で",
              "4) は"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11822
          },
          {
            "id": 11823,
            "mondai_id": 1764,
            "question_text": "6. <ruby>山下<rp>(</rp><rt>やました</rt><rp>)</rp></ruby>「<ruby>今日<rp>(</rp><rt>きょう</rt><rp>)</rp></ruby> パーティーがありますから、<ruby>田中<rp>(</rp><rt>たなか</rt><rp>)</rp></ruby>さん(　)<ruby>来<rp>(</rp><rt>き</rt><rp>)</rp></ruby>てください。」 <br>　<ruby>田中<rp>(</rp><rt>たなか</rt><rp>)</rp></ruby>「ありがとうございます。」",
            "choices": [
              "1) に",
              "2) も",
              "3) や",
              "4) で"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11823
          },
          {
            "id": 11824,
            "mondai_id": 1764,
            "question_text": "7.<ruby>田中<rp>(</rp><rt>たなか</rt><rp>)</rp></ruby>「このぼうしは <ruby>山田<rp>(</rp><rt>やまだ</rt><rp>)</rp></ruby>さん( )ですか。」<br>　<ruby>山田<rp>(</rp><rt>やまだ</rt><rp>)</rp></ruby>「はい。」",
            "choices": [
              "1) や",
              "2) は",
              "3) の",
              "4) か"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11824
          },
          {
            "id": 11825,
            "mondai_id": 1764,
            "question_text": "8. <ruby>駅<rp>(</rp><rt>えき</rt><rp>)</rp></ruby>までタクシーで 1000<ruby>円<rp>(</rp><rt>えん</rt><rp>)</rp></ruby> ( ) です。",
            "choices": [
              "1) ぐらい",
              "2) など",
              "3) ごろ",
              "4) も"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 0,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11825
          },
          {
            "id": 11826,
            "mondai_id": 1764,
            "question_text": "9. A「さようなら。」<br>　B「さようなら。また( )。」",
            "choices": [
              "1) おととい",
              "2) <ruby>今日<rp>(</rp><rt>きょう</rt><rp>)</rp></ruby>",
              "3) <ruby>来週<rp>(</rp><rt>らいしゅう</rt><rp>)</rp></ruby>",
              "4) <ruby>今月<rp>(</rp><rt>こんげつ</rt><rp>)</rp></ruby>"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11826
          },
          {
            "id": 11827,
            "mondai_id": 1764,
            "question_text": "10. わたしの<ruby>母<rp>(</rp><rt>はは</rt><rp>)</rp></ruby>は 50さいです。<ruby>父<rp>(</rp><rt>ちち</rt><rp>)</rp></ruby>は 55さいです。<ruby>母<rp>(</rp><rt>はは</rt><rp>)</rp></ruby>は<ruby>父<rp>(</rp><rt>ちち</rt><rp>)</rp></ruby>( ) 5さい わかいです。",
            "choices": [
              "1) から",
              "2) まで",
              "3) より",
              "4) のほうが"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11827
          },
          {
            "id": 11828,
            "mondai_id": 1764,
            "question_text": "11. <ruby>子<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>ども「いただきます。」<br>　　<ruby>母<rp>(</rp><rt>はは</rt><rp>)</rp></ruby>「あ、<ruby>食<rp>(</rp><rt>た</rt><rp>)</rp></ruby>べる( ) <ruby>手<rp>(</rp><rt>て</rt><rp>)</rp></ruby>を あらいましょう。」",
            "choices": [
              "1) まえに",
              "2) のまえに",
              "3) あとに",
              "4) のあとに"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 0,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11828
          },
          {
            "id": 11829,
            "mondai_id": 1764,
            "question_text": "12.  A「<ruby>東京<rp>(</rp><rt>とうきょう</rt><rp>)</rp></ruby>でも<ruby>雪<rp>(</rp><rt>ゆき</rt><rp>)</rp></ruby>がふりますか。」<br>　　B「ええ、ふりますよ。でも、きょねんは あまり( ) 。」",
            "choices": [
              "1) ふりませんでした",
              "2) ふりません",
              "3) ふりました",
              "4) ふります"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 0,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11829
          },
          {
            "id": 11830,
            "mondai_id": 1764,
            "question_text": "13. (<ruby>川<rp>(</rp><rt>がわ</rt><rp>)</rp></ruby>で) <br>A「<ruby>見<rp>(</rp><rt>み</rt><rp>)</rp></ruby>てください。<ruby>小<rp>(</rp><rt>ちい</rt><rp>)</rp></ruby>さな<ruby>魚<rp>(</rp><rt>さかな</rt><rp>)</rp></ruby>がたくさん (　) よ。」<br>B「ほんとうですね。30びきくらいいますね。」",
            "choices": [
              "1) およぎます",
              "2) およぎません",
              "3) およぎました",
              "4) およいでいます"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 3,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11830
          },
          {
            "id": 11831,
            "mondai_id": 1764,
            "question_text": "14. <ruby>中川<rp>(</rp><rt>なかがわ</rt><rp>)</rp></ruby>「<ruby>山田<rp>(</rp><rt>やまだ</rt><rp>)</rp></ruby>さんの その カメラは いいですね。どこでかいましたか。」 <br>　　<ruby>山<rp>(</rp><rt>やま</rt><rp>)</rp></ruby><ruby>由<rp>(</rp><rt>ゆかり</rt><rp>)</rp></ruby> 「いえ、これは <ruby>兄<rp>(</rp><rt>あに</rt><rp>)</rp></ruby>に( )。」",
            "choices": [
              "1) あげました",
              "2) もらいました",
              "3) うりました",
              "4) かいました"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11831
          },
          {
            "id": 11832,
            "mondai_id": 1764,
            "question_text": "15. たまごりょうりの じょうずな <ruby>作<rp>(</rp><rt>つく</rt><rp>)</rp></ruby>りかたを( ) <ruby>読<rp>(</rp><rt>よ</rt><rp>)</rp></ruby>みました。",
            "choices": [
              "1) <ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>に",
              "2) <ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>も",
              "3) <ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>かへ",
              "4) <ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>かで"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 3,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11832
          },
          {
            "id": 11833,
            "mondai_id": 1764,
            "question_text": "16 (<ruby>電話<rp>(</rp><rt>でんわ</rt><rp>)</rp></ruby>で) <br><ruby>本田<rp>(</rp><rt>ほんだ</rt><rp>)</rp></ruby>「はい、<ruby>本田<rp>(</rp><rt>ほんだ</rt><rp>)</rp></ruby>です。」 <br><ruby>北山<rp>(</rp><rt>きたやま</rt><rp>)</rp></ruby>「あ、<ruby>北山<rp>(</rp><rt>きたやま</rt><rp>)</rp></ruby><ruby>花子<rp>(</rp><rt>はなこ</rt><rp>)</rp></ruby>です。すみません、( )。」<br><ruby>本田<rp>(</rp><rt>ほんだ</rt><rp>)</rp></ruby>「はい。ちょっとまってくださいね。」",
            "choices": [
              "1) ひろこさんをおねがいします",
              "2) ひろこさんをください",
              "3) ひろこさんと<ruby>話<rp>(</rp><rt>はな</rt><rp>)</rp></ruby>しますか",
              "4) ひろこさんと<ruby>話<rp>(</rp><rt>はな</rt><rp>)</rp></ruby>しませんか"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 0,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11833
          }
        ],
        "1765": [
          {
            "id": 11834,
            "mondai_id": 1765,
            "question_text": "17 (<ruby>店<rp>(</rp><rt>てん</rt><rp>)</rp></ruby>で)<br><ruby>田中<rp>(</rp><rt>たなか</rt><rp>)</rp></ruby> 「すみません。くだもの ___ ___ _★_ ___ か。」<br><ruby>店<rp>(</rp><rt>みせ</rt><rp>)</rp></ruby>の<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>「こちらです。」",
            "choices": [
              "1) どこ",
              "2) あります",
              "3) は",
              "4) に"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 3,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11834
          },
          {
            "id": 11835,
            "mondai_id": 1765,
            "question_text": "18. A「<ruby>山下<rp>(</rp><rt>やました</rt><rp>)</rp></ruby>さんは?」<br>　　B「となりの へやで___ ___ _★_ ___して います。」",
            "choices": [
              "1) れんしゅう",
              "2) の",
              "3) ギター",
              "4) を"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 0,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11835
          },
          {
            "id": 11836,
            "mondai_id": 1765,
            "question_text": "19. A「<ruby>会社<rp>(</rp><rt>かいしゃ</rt><rp>)</rp></ruby> ___ ___ _★_ ___ <ruby>行<rp>(</rp><rt>おこな</rt><rp>)</rp></ruby>っていますか。」<br>　　B「わたしは あるいて <ruby>行<rp>(</rp><rt>おこな</rt><rp>)</rp></ruby>っています。」",
            "choices": [
              "1) で",
              "2) は",
              "3) へ",
              "4) <ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 3,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11836
          },
          {
            "id": 11837,
            "mondai_id": 1765,
            "question_text": "20. <ruby>山田<rp>(</rp><rt>やまだ</rt><rp>)</rp></ruby> 「ジョンさん、しゅくだいは ぜんぶ おわりましたか。」<br>　　ジョン「いいえ、まだです。ここ___ ___ _★_ ___, さいごの もんだいが むずかしいです。」",
            "choices": [
              "1) は",
              "2) かんたんでした",
              "3) が",
              "4) まで"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11837
          },
          {
            "id": 11838,
            "mondai_id": 1765,
            "question_text": "21. (<ruby>本屋<rp>(</rp><rt>ほんや</rt><rp>)</rp></ruby>で)<br> ヤン「わたしは この<ruby>本<rp>(</rp><rt>ほん</rt><rp>)</rp></ruby>を<ruby>買<rp>(</rp><rt>か</rt><rp>)</rp></ruby>います。アンナさんは どんなほん <ruby>本<rp>(</rp><rt>ほん</rt><rp>)</rp></ruby>がいいですか。」<br>アンナ「わたしは もう<ruby>少<rp>(</rp><rt>すこ</rt><rp>)</rp></ruby>し___ ___ _★_ ___が いいです。」",
            "choices": [
              "1) <ruby>本<rp>(</rp><rt>ほん</rt><rp>)</rp></ruby>",
              "2) かんたんな",
              "3) が",
              "4) <ruby>日本語<rp>(</rp><rt>にほんご</rt><rp>)</rp></ruby>"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11838
          }
        ],
        "1766": [
          {
            "id": 11839,
            "mondai_id": 1766,
            "question_text": "22.",
            "choices": [
              "1) <ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>くから",
              "2) <ruby>行<rp>(</rp><rt>おこな</rt><rp>)</rp></ruby>ってから",
              "3) <ruby>来<rp>(</rp><rt>く</rt><rp>)</rp></ruby>るから",
              "4) <ruby>来<rp>(</rp><rt>き</rt><rp>)</rp></ruby>てから"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 3,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11839
          },
          {
            "id": 11840,
            "mondai_id": 1766,
            "question_text": "23.",
            "choices": [
              "1) <ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きましたか",
              "2) <ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きませんか",
              "3) <ruby>行<rp>(</rp><rt>おこな</rt><rp>)</rp></ruby>っていましたか",
              "4) <ruby>行<rp>(</rp><rt>おこな</rt><rp>)</rp></ruby>っていませんか"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11840
          },
          {
            "id": 11841,
            "mondai_id": 1766,
            "question_text": "24.",
            "choices": [
              "1) か",
              "2) と",
              "3) の",
              "4) は"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 3,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11841
          },
          {
            "id": 11842,
            "mondai_id": 1766,
            "question_text": "25.",
            "choices": [
              "1) います",
              "2) <ruby>読<rp>(</rp><rt>よ</rt><rp>)</rp></ruby>みます",
              "3) あります",
              "4) します"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11842
          },
          {
            "id": 11843,
            "mondai_id": 1766,
            "question_text": "26.",
            "choices": [
              "1) だから",
              "2) では",
              "3) それから",
              "4) でも"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 0,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11843
          }
        ],
        "1767": [
          {
            "id": 11844,
            "mondai_id": 1767,
            "question_text": "27. 「わたし」は <ruby>今日<rp>(</rp><rt>きょう</rt><rp>)</rp></ruby>、<ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>をしましたか。",
            "choices": [
              "1) <ruby>友<rp>(</rp><rt>とも</rt><rp>)</rp></ruby>だちとえいがを<ruby>見<rp>(</rp><rt>み</rt><rp>)</rp></ruby>に<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きました。",
              "2) <ruby>友<rp>(</rp><rt>とも</rt><rp>)</rp></ruby>だちとDVDを<ruby>買<rp>(</rp><rt>か</rt><rp>)</rp></ruby>いに<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きました。",
              "3) <ruby>妹<rp>(</rp><rt>いもうと</rt><rp>)</rp></ruby>とえいがを<ruby>見<rp>(</rp><rt>み</rt><rp>)</rp></ruby>に<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きました。",
              "4) <ruby>姉<rp>(</rp><rt>あね</rt><rp>)</rp></ruby>とDVDを<ruby>買<rp>(</rp><rt>か</rt><rp>)</rp></ruby>いに<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きました。"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11844
          },
          {
            "id": 11845,
            "mondai_id": 1767,
            "question_text": "28. <ruby>今<rp>(</rp><rt>いま</rt><rp>)</rp></ruby>の ヘやは どれですか。<br>\n<div style=\"text-align:center;\">\n<img src=\"image/N5-D1-15.jpg\" alt=\"jlpt N5\"> </div>",
            "choices": [
              "1) ①",
              "2) ②",
              "3) ③",
              "4) ④"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11845
          },
          {
            "id": 11846,
            "mondai_id": 1767,
            "question_text": "29. <ruby>森<rp>(</rp><rt>もり</rt><rp>)</rp></ruby>さんは コピーを した あとで、<ruby>本<rp>(</rp><rt>ほん</rt><rp>)</rp></ruby>を どうしますか。",
            "choices": [
              "1) クラスで<ruby>使<rp>(</rp><rt>つか</rt><rp>)</rp></ruby>います。",
              "2) <ruby>南<rp>(</rp><rt>みなみ</rt><rp>)</rp></ruby>さんにわたします。",
              "3) <ruby>中川<rp>(</rp><rt>なかがわ</rt><rp>)</rp></ruby><ruby>先生<rp>(</rp><rt>せんせい</rt><rp>)</rp></ruby>にかえします。",
              "4) <ruby>市<rp>(</rp><rt>し</rt><rp>)</rp></ruby><ruby>白<rp>(</rp><rt>しろ</rt><rp>)</rp></ruby><ruby>先生<rp>(</rp><rt>せんせい</rt><rp>)</rp></ruby>の<ruby>机<rp>(</rp><rt>つくえ</rt><rp>)</rp></ruby>の<ruby>上<rp>(</rp><rt>うえ</rt><rp>)</rp></ruby>におきます。"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 3,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11846
          }
        ],
        "1768": [
          {
            "id": 11847,
            "mondai_id": 1768,
            "question_text": "30. どうして <u>こまりました</u>か。",
            "choices": [
              "1) おそい<ruby>時間<rp>(</rp><rt>じかん</rt><rp>)</rp></ruby>に<ruby>駅<rp>(</rp><rt>えき</rt><rp>)</rp></ruby>に<ruby>着<rp>(</rp><rt>つ</rt><rp>)</rp></ruby>いたから",
              "2) しごとがたくさんあったから",
              "3) とてもつかれたから",
              "4) かさがなかったから"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 3,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11847
          },
          {
            "id": 11848,
            "mondai_id": 1768,
            "question_text": "31. 「わたし」は、あした どうしますか。",
            "choices": [
              "1) かさをはこの<ruby>中<rp>(</rp><rt>なか</rt><rp>)</rp></ruby>に<ruby>入<rp>(</rp><rt>い</rt><rp>)</rp></ruby>れます。",
              "2) かさを<ruby>駅<rp>(</rp><rt>えき</rt><rp>)</rp></ruby>の<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>にわたします。",
              "3) お<ruby>金<rp>(</rp><rt>かね</rt><rp>)</rp></ruby>をはこの<ruby>中<rp>(</rp><rt>なか</rt><rp>)</rp></ruby>に<ruby>入<rp>(</rp><rt>い</rt><rp>)</rp></ruby>れます。",
              "4) お<ruby>金<rp>(</rp><rt>かね</rt><rp>)</rp></ruby>を<ruby>駅<rp>(</rp><rt>えき</rt><rp>)</rp></ruby>の<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>にわたします。"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 0,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11848
          }
        ],
        "1769": [
          {
            "id": 11849,
            "mondai_id": 1769,
            "question_text": "32. あらきやで トイレットペーパーと にくと やさいを <ruby>同<rp>(</rp><rt>おな</rt><rp>)</rp></ruby>じ <ruby>日<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>に<ruby>買<rp>(</rp><rt>か</rt><rp>)</rp></ruby>いたいです。いつが <ruby>安<rp>(</rp><rt>やす</rt><rp>)</rp></ruby>いですか。",
            "choices": [
              "1) 6<ruby>月<rp>(</rp><rt>つき</rt><rp>)</rp></ruby>11<ruby>日<rp>(</rp><rt>にち</rt><rp>)</rp></ruby>(<ruby>月<rp>(</rp><rt>つき</rt><rp>)</rp></ruby>)と12<ruby>日<rp>(</rp><rt>にち</rt><rp>)</rp></ruby>(<ruby>火<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>)",
              "2) 6<ruby>月<rp>(</rp><rt>つき</rt><rp>)</rp></ruby>13<ruby>日<rp>(</rp><rt>にち</rt><rp>)</rp></ruby>(<ruby>水<rp>(</rp><rt>すい</rt><rp>)</rp></ruby>)と14<ruby>日<rp>(</rp><rt>にち</rt><rp>)</rp></ruby>(<ruby>木<rp>(</rp><rt>き</rt><rp>)</rp></ruby>)",
              "3) 6<ruby>月<rp>(</rp><rt>つき</rt><rp>)</rp></ruby>15<ruby>日<rp>(</rp><rt>にち</rt><rp>)</rp></ruby>(<ruby>金<rp>(</rp><rt>きん</rt><rp>)</rp></ruby>)と16<ruby>日<rp>(</rp><rt>にち</rt><rp>)</rp></ruby>(<ruby>土<rp>(</rp><rt>ど</rt><rp>)</rp></ruby>)",
              "4) 6<ruby>月<rp>(</rp><rt>つき</rt><rp>)</rp></ruby>17<ruby>日<rp>(</rp><rt>にち</rt><rp>)</rp></ruby>(<ruby>日<rp>(</rp><rt>び</rt><rp>)</rp></ruby>)と18<ruby>日<rp>(</rp><rt>にち</rt><rp>)</rp></ruby>(<ruby>月<rp>(</rp><rt>つき</rt><rp>)</rp></ruby>)"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11849
          }
        ]
      }
    },
    "listening": {
      "title": "Nghe hiểu (聴解)",
      "timeLimit": 2400,
      "mondais": [
        {
          "id": 1778,
          "exam_id": 110,
          "section_code": "listening",
          "title": "もんだい1\nもんだい1では、はじめに しつもんを きいてください。それから はなしを きいて、もんだいようしの 1から4の なかから、いちばん いい ものを ひとつ えらんでください。",
          "instructions": null,
          "type": "listening",
          "audio_url": "https://storage.googleapis.com/luyendejlpt.firebasestorage.app/listening/mondai-1831-audio-8ccb6419-6c53-43b7-bf98-b9c6dcd07955.mp3",
          "audio_size": null,
          "image_url": null,
          "passage": null,
          "points": 1,
          "is_transcribed": true,
          "transcript": null,
          "format": "task_comprehension",
          "format_source": "rule",
          "format_confidence": "0.70",
          "format_locked": false,
          "format_issues": [
            "missing_audio",
            "ai_disagrees"
          ],
          "format_updated_at": "$D2026-08-20T16:16:57.177Z",
          "position": 1778
        },
        {
          "id": 1779,
          "exam_id": 110,
          "section_code": "listening",
          "title": "もんだい2もんだい2では、はじめに しつもんを きいてください。それから はなしを きいて、もんだいようしの 1から4の なかから、いちばん いいものを ひとつ えらんでください。",
          "instructions": null,
          "type": "listening",
          "audio_url": "https://storage.googleapis.com/luyendejlpt.firebasestorage.app/listening/mondai-1831-audio-8ccb6419-6c53-43b7-bf98-b9c6dcd07955.mp3",
          "audio_size": null,
          "image_url": null,
          "passage": null,
          "points": 1,
          "is_transcribed": true,
          "transcript": null,
          "format": "point_comprehension",
          "format_source": "rule",
          "format_confidence": "0.70",
          "format_locked": false,
          "format_issues": [
            "missing_audio"
          ],
          "format_updated_at": "$D2026-08-20T16:16:57.177Z",
          "position": 1779
        },
        {
          "id": 1780,
          "exam_id": 110,
          "section_code": "listening",
          "title": "もんだい3もんだい3では、えを みながら しつもんを きいてください。 →(やじるし)の ひとは なんといいますか。1から3の なかから、 いちばん いい ものを ひとつ えらんでください。",
          "instructions": null,
          "type": "listening",
          "audio_url": "https://storage.googleapis.com/luyendejlpt.firebasestorage.app/listening/mondai-1831-audio-8ccb6419-6c53-43b7-bf98-b9c6dcd07955.mp3",
          "audio_size": null,
          "image_url": null,
          "passage": null,
          "points": 1,
          "is_transcribed": true,
          "transcript": null,
          "format": "utterance_expression",
          "format_source": "rule",
          "format_confidence": "0.70",
          "format_locked": false,
          "format_issues": [
            "missing_audio"
          ],
          "format_updated_at": "$D2026-08-20T16:16:57.177Z",
          "position": 1780
        },
        {
          "id": 1781,
          "exam_id": 110,
          "section_code": "listening",
          "title": "もんだい4もんだい4は、えなどがありません。ぶんを きいて、1から3の なかから、いちばん いいものを ひとつ えらんでください。",
          "instructions": null,
          "type": "listening",
          "audio_url": "https://storage.googleapis.com/luyendejlpt.firebasestorage.app/listening/mondai-1831-audio-8ccb6419-6c53-43b7-bf98-b9c6dcd07955.mp3",
          "audio_size": null,
          "image_url": null,
          "passage": null,
          "points": 1,
          "is_transcribed": true,
          "transcript": null,
          "format": "quick_response",
          "format_source": "rule",
          "format_confidence": "0.70",
          "format_locked": false,
          "format_issues": [
            "missing_audio"
          ],
          "format_updated_at": "$D2026-08-20T16:16:57.177Z",
          "position": 1781
        }
      ],
      "questions": {
        "1778": [
          {
            "id": 11902,
            "mondai_id": 1778,
            "question_text": "(れい)",
            "choices": [
              "1) ①",
              "2) ②",
              "3) ③",
              "4) ④"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": "https://firebasestorage.googleapis.com/v0/b/luyendejlpt.firebasestorage.app/o/images%2FN5%2FN5-1-Q0.jpg?alt=media&token=4f8a0325-df0c-4c1b-b816-236a238fe975",
            "position": 11902
          },
          {
            "id": 11903,
            "mondai_id": 1778,
            "question_text": "1ばん",
            "choices": [
              "1) ①",
              "2) ②",
              "3) ③",
              "4) ④"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": "https://firebasestorage.googleapis.com/v0/b/luyendejlpt.firebasestorage.app/o/images%2FN5%2FN5-1-Q1.jpg?alt=media&token=96c44586-17ed-48ca-9e88-82c6c1bcc4a7",
            "position": 11903
          },
          {
            "id": 11904,
            "mondai_id": 1778,
            "question_text": "2ばん",
            "choices": [
              "1) 1かい",
              "2) 2かい",
              "3) 3かい",
              "4) 4かい"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11904
          },
          {
            "id": 11905,
            "mondai_id": 1778,
            "question_text": "3ばん",
            "choices": [
              "1) ①",
              "2) ②",
              "3) ③",
              "4) ④"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": "https://firebasestorage.googleapis.com/v0/b/luyendejlpt.firebasestorage.app/o/images%2FN5%2FN5-1-Q3.jpg?alt=media&token=1121b8f3-c364-4649-8f03-32ca3f098f5f",
            "position": 11905
          },
          {
            "id": 11906,
            "mondai_id": 1778,
            "question_text": "4ばん",
            "choices": [
              "1) ①",
              "2) ②",
              "3) ③",
              "4) ④"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": "https://firebasestorage.googleapis.com/v0/b/luyendejlpt.firebasestorage.app/o/images%2FN5%2FN5-1-Q4.jpg?alt=media&token=4253fa49-f29a-4519-8dd5-3a8fbb253005",
            "position": 11906
          },
          {
            "id": 11907,
            "mondai_id": 1778,
            "question_text": "5ばん",
            "choices": [
              "1) ①",
              "2) ②",
              "3) ③",
              "4) ④"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 0,
            "score": "1.00",
            "audio_url": null,
            "image_url": "https://firebasestorage.googleapis.com/v0/b/luyendejlpt.firebasestorage.app/o/images%2FN5%2FN5-1-Q5.jpg?alt=media&token=13a723f6-af79-4ac6-aa74-61515e7fe533",
            "position": 11907
          },
          {
            "id": 11908,
            "mondai_id": 1778,
            "question_text": "6ばん",
            "choices": [
              "1) ①",
              "2) ②",
              "3) ③",
              "4) ④"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 3,
            "score": "1.00",
            "audio_url": null,
            "image_url": "https://firebasestorage.googleapis.com/v0/b/luyendejlpt.firebasestorage.app/o/images%2FN5%2FN5-1-Q6.jpg?alt=media&token=1b927a2d-610f-43a1-b3ae-749a2b70f566",
            "position": 11908
          },
          {
            "id": 11909,
            "mondai_id": 1778,
            "question_text": "7ばん",
            "choices": [
              "1) 1ばん",
              "2) 3ばん",
              "3) 5ばん",
              "4) 7ばん"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 3,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11909
          }
        ],
        "1779": [
          {
            "id": 11910,
            "mondai_id": 1779,
            "question_text": "(れい)",
            "choices": [
              "1) としょかん",
              "2) えき",
              "3) デパート",
              "4) レストラン"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11910
          },
          {
            "id": 11911,
            "mondai_id": 1779,
            "question_text": "1ばん",
            "choices": [
              "1) 1じかん",
              "2) 2じかん",
              "3) 3じかん",
              "4) 4じかん"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 3,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11911
          },
          {
            "id": 11912,
            "mondai_id": 1779,
            "question_text": "2ばん",
            "choices": [
              "1) 512-7733",
              "2) 512-7734",
              "3) 512-7743",
              "4) 512-7744"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11912
          },
          {
            "id": 11913,
            "mondai_id": 1779,
            "question_text": "3ばん",
            "choices": [
              "1) りょうしん",
              "2) あね",
              "3) いもうと",
              "4) おとうと"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11913
          },
          {
            "id": 11914,
            "mondai_id": 1779,
            "question_text": "4ばん",
            "choices": [
              "1) しょくどう",
              "2) きっさてん",
              "3) パンや",
              "4) きょうしつ"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 3,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11914
          },
          {
            "id": 11915,
            "mondai_id": 1779,
            "question_text": "5ばん",
            "choices": [
              "1) くろい ボールペン",
              "2) あかい ボールペン",
              "3) くろい えんぴつ",
              "4) あかい えんぴつ"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 0,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11915
          },
          {
            "id": 11916,
            "mondai_id": 1779,
            "question_text": "6ばん",
            "choices": [
              "1) こうえん",
              "2) えき",
              "3) きっさてん",
              "4) レストラン"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11916
          }
        ],
        "1780": [
          {
            "id": 11917,
            "mondai_id": 1780,
            "question_text": "(れい)",
            "choices": [
              "1) ①",
              "2) ②",
              "3) ③"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": "https://firebasestorage.googleapis.com/v0/b/luyendejlpt.firebasestorage.app/o/images%2FN5%2FN5-1-Q0.jpg?alt=media&token=4f8a0325-df0c-4c1b-b816-236a238fe975",
            "position": 11917
          },
          {
            "id": 11918,
            "mondai_id": 1780,
            "question_text": "1ばん",
            "choices": [
              "1) ①",
              "2) ②",
              "3) ③"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 0,
            "score": "1.00",
            "audio_url": null,
            "image_url": "https://firebasestorage.googleapis.com/v0/b/luyendejlpt.firebasestorage.app/o/images%2FN5%2FN5-1-Q1.jpg?alt=media&token=96c44586-17ed-48ca-9e88-82c6c1bcc4a7",
            "position": 11918
          },
          {
            "id": 11919,
            "mondai_id": 1780,
            "question_text": "2ばん",
            "choices": [
              "1) ①",
              "2) ②",
              "3) ③"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": "https://firebasestorage.googleapis.com/v0/b/luyendejlpt.firebasestorage.app/o/images%2FN5%2FN5-1-Q2.jpg?alt=media&token=ba45ba1c-04cf-4a0a-9fef-25cfc15b83f3",
            "position": 11919
          },
          {
            "id": 11920,
            "mondai_id": 1780,
            "question_text": "3ばん",
            "choices": [
              "1) ①",
              "2) ②",
              "3) ③"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": "https://firebasestorage.googleapis.com/v0/b/luyendejlpt.firebasestorage.app/o/images%2FN5%2FN5-1-Q3.jpg?alt=media&token=1121b8f3-c364-4649-8f03-32ca3f098f5f",
            "position": 11920
          },
          {
            "id": 11921,
            "mondai_id": 1780,
            "question_text": "4ばん",
            "choices": [
              "1) ①",
              "2) ②",
              "3) ③"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": "https://firebasestorage.googleapis.com/v0/b/luyendejlpt.firebasestorage.app/o/images%2FN5%2FN5-1-Q4.jpg?alt=media&token=4253fa49-f29a-4519-8dd5-3a8fbb253005",
            "position": 11921
          },
          {
            "id": 11922,
            "mondai_id": 1780,
            "question_text": "5ばん",
            "choices": [
              "1) ①",
              "2) ②",
              "3) ③"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": "https://firebasestorage.googleapis.com/v0/b/luyendejlpt.firebasestorage.app/o/images%2FN5%2FN5-1-Q5.jpg?alt=media&token=13a723f6-af79-4ac6-aa74-61515e7fe533",
            "position": 11922
          }
        ],
        "1781": [
          {
            "id": 11923,
            "mondai_id": 1781,
            "question_text": "(れい)",
            "choices": [
              "1) ①",
              "2) ②",
              "3) ③"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11923
          },
          {
            "id": 11924,
            "mondai_id": 1781,
            "question_text": "1ばん",
            "choices": [
              "1) ①",
              "2) ②",
              "3) ③"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 0,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11924
          },
          {
            "id": 11925,
            "mondai_id": 1781,
            "question_text": "2ばん",
            "choices": [
              "1) ①",
              "2) ②",
              "3) ③"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 0,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11925
          },
          {
            "id": 11926,
            "mondai_id": 1781,
            "question_text": "3ばん",
            "choices": [
              "1) ①",
              "2) ②",
              "3) ③"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 1,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11926
          },
          {
            "id": 11927,
            "mondai_id": 1781,
            "question_text": "4ばん",
            "choices": [
              "1) ①",
              "2) ②",
              "3) ③"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11927
          },
          {
            "id": 11928,
            "mondai_id": 1781,
            "question_text": "5ばん",
            "choices": [
              "1) ①",
              "2) ②",
              "3) ③"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 2,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11928
          },
          {
            "id": 11929,
            "mondai_id": 1781,
            "question_text": "6ばん",
            "choices": [
              "1) ①",
              "2) ②",
              "3) ③"
            ],
            "exam_id": null,
            "section_id": null,
            "correct_answer_index": 0,
            "score": "1.00",
            "audio_url": null,
            "image_url": null,
            "position": 11929
          }
        ]
      }
    }
  }
};



export const N4_MOCK_EXAM: JlptExam = {
  "id": 112,
  "level": "N4",
  "title": "JLPT N4 - Mock Test Chuẩn format",
  "year": 2025,
  "month": 7,
  "is_mock": true,
  "slug": "n4-mock-test-1",
  "sections": {
    "vocabulary": {
      "title": "Từ vựng (文字・語彙)",
      "timeLimit": 1800,
      "mondais": [
        {
          "id": "n4-m1",
          "title": "問題1 のことばの読み方として最もよいものを、1・2・3・4から一つ選びなさい。",
          "format": "reading"
        },
        {
          "id": "n4-m2",
          "title": "問題2 のことばを漢字で書くとき、最もよいものを、1・2・3・4から一つ選びなさい。",
          "format": "orthography"
        },
        {
          "id": "n4-m3",
          "title": "問題3 ( )に入れるのに最もよいものを、1・2・3・4から一つ選びなさい。",
          "format": "context"
        }
      ],
      "questions": {
        "n4-m1": [
          {
            "id": 401,
            "mondai_id": "n4-m1",
            "question_text": "1. 友達を駅まで<u>案内</u>しました。",
            "choices": [
              "1) あんない",
              "2) あんなん",
              "3) かんない",
              "4) かんなん"
            ],
            "correct_answer_index": 0,
            "score": "1.00"
          },
          {
            "id": 402,
            "mondai_id": "n4-m1",
            "question_text": "2. ここはとても<u>危険</u>ですから入らないでください。",
            "choices": [
              "1) きげん",
              "2) きけん",
              "3) けんき",
              "4) げんき"
            ],
            "correct_answer_index": 1,
            "score": "1.00"
          },
          {
            "id": 403,
            "mondai_id": "n4-m1",
            "question_text": "3. 授業の前に<u>予習</u>をしておきます。",
            "choices": [
              "1) よしゅ",
              "2) よしゅう",
              "3) ゆうしゅ",
              "4) ゆうしゅう"
            ],
            "correct_answer_index": 1,
            "score": "1.00"
          }
        ],
        "n4-m2": [
          {
            "id": 404,
            "mondai_id": "n4-m2",
            "question_text": "4. 旅行の<u>じゅんび</u>を始めましょう。",
            "choices": [
              "1) 準偏",
              "2) 準備",
              "3) 準備",
              "4) 凖備"
            ],
            "correct_answer_index": 1,
            "score": "1.00"
          },
          {
            "id": 405,
            "mondai_id": "n4-m2",
            "question_text": "5. 大学で日本の歴史を<u>けんきゅう</u>しています。",
            "choices": [
              "1) 研究",
              "2) 研求",
              "3) 件究",
              "4) 験究"
            ],
            "correct_answer_index": 0,
            "score": "1.00"
          }
        ],
        "n4-m3": [
          {
            "id": 406,
            "mondai_id": "n4-m3",
            "question_text": "6. 寒いですから、窓を( )ください。",
            "choices": [
              "1) あけて",
              "2) しめて",
              "3) つけて",
              "4) けして"
            ],
            "correct_answer_index": 1,
            "score": "1.00"
          },
          {
            "id": 407,
            "mondai_id": "n4-m3",
            "question_text": "7. 図書館では( )話さなければなりません。",
            "choices": [
              "1) うるさく",
              "2) しずかに",
              "3) にぎやかに",
              "4) はやく"
            ],
            "correct_answer_index": 1,
            "score": "1.00"
          }
        ]
      }
    },
    "grammar_reading": {
      "title": "Ngữ pháp & Đọc hiểu (文法・読解)",
      "timeLimit": 3600,
      "mondais": [
        {
          "id": "n4-gr1",
          "title": "問題1 次の文の( )に入れるのに最もよいものを、1・2・3・4から一つ選びなさい。",
          "format": "grammar"
        }
      ],
      "questions": {
        "n4-gr1": [
          {
            "id": 408,
            "mondai_id": "n4-gr1",
            "question_text": "1. 宿題を( )しまいました。",
            "choices": [
              "1) 忘れて",
              "2) 忘れ",
              "3) 忘れる",
              "4) 忘れた"
            ],
            "correct_answer_index": 0,
            "score": "1.00"
          },
          {
            "id": 409,
            "mondai_id": "n4-gr1",
            "question_text": "2. 明日は雨が( )そうです。",
            "choices": [
              "1) 降る",
              "2) 降り",
              "3) 降った",
              "4) 降れば"
            ],
            "correct_answer_index": 0,
            "score": "1.00"
          }
        ]
      }
    },
    "listening": {
      "title": "Nghe hiểu (聴解)",
      "timeLimit": 2100,
      "mondais": [
        {
          "id": "n4-l1",
          "title": "問題1 課題理解 (Nghe hiểu nhiệm vụ)",
          "audio_url": "https://storage.googleapis.com/luyendejlpt.firebasestorage.app/listening/mondai-1831-audio-8ccb6419-6c53-43b7-bf98-b9c6dcd07955.mp3"
        }
      ],
      "questions": {
        "n4-l1": [
          {
            "id": 410,
            "mondai_id": "n4-l1",
            "question_text": "男の人と女の人が話しています。男の人はこれから何をしますか。",
            "choices": [
              "1) レポートを書く",
              "2) 先生に質問する",
              "3) 本を買いに行く",
              "4) 家に帰る"
            ],
            "correct_answer_index": 1,
            "score": "1.00"
          }
        ]
      }
    }
  }
};

export const N3_MOCK_EXAM: JlptExam = {
  "id": 113,
  "level": "N3",
  "title": "JLPT N3 - Mock Test Trung cấp",
  "year": 2025,
  "month": 7,
  "is_mock": true,
  "slug": "n3-mock-test-1",
  "sections": {
    "vocabulary": {
      "title": "Từ vựng (文字・語彙)",
      "timeLimit": 1800,
      "mondais": [
        {
          "id": "n3-m1",
          "title": "問題1 の言葉の読み方として最もよいものを、1・2・3・4から一つ選びなさい。",
          "format": "reading"
        }
      ],
      "questions": {
        "n3-m1": [
          {
            "id": 301,
            "mondai_id": "n3-m1",
            "question_text": "1. このプロジェクトは来月<u>完成</u>する予定だ。",
            "choices": [
              "1) かんせい",
              "2) かんじょう",
              "3) がんせい",
              "4) がんしょう"
            ],
            "correct_answer_index": 0,
            "score": "1.00"
          },
          {
            "id": 302,
            "mondai_id": "n3-m1",
            "question_text": "2. 地球の<u>環境</u>を守るために何ができるだろうか。",
            "choices": [
              "1) かんきょう",
              "2) かんぎょう",
              "3) がんきょう",
              "4) がんぎょう"
            ],
            "correct_answer_index": 0,
            "score": "1.00"
          }
        ]
      }
    },
    "grammar_reading": {
      "title": "Ngữ pháp & Đọc hiểu (文法・読解)",
      "timeLimit": 4200,
      "mondais": [
        {
          "id": "n3-gr1",
          "title": "問題1 次の文の( )に入れるのに最もよいものを、1・2・3・4から一つ選びなさい。",
          "format": "grammar"
        }
      ],
      "questions": {
        "n3-gr1": [
          {
            "id": 303,
            "mondai_id": "n3-gr1",
            "question_text": "1. 高いものが必ずしも質がよい( )。",
            "choices": [
              "1) わけではない",
              "2) はずがない",
              "3) に違いない",
              "4) わけにはいかない"
            ],
            "correct_answer_index": 0,
            "score": "1.00"
          }
        ]
      }
    },
    "listening": {
      "title": "Nghe hiểu (聴解)",
      "timeLimit": 2400,
      "mondais": [
        {
          "id": "n3-l1",
          "title": "問題1 課題理解",
          "audio_url": "https://storage.googleapis.com/luyendejlpt.firebasestorage.app/listening/mondai-1831-audio-8ccb6419-6c53-43b7-bf98-b9c6dcd07955.mp3"
        }
      ],
      "questions": {
        "n3-l1": [
          {
            "id": 304,
            "mondai_id": "n3-l1",
            "question_text": "会社で課長と社員が話しています。社員はこの後まず何をしますか。",
            "choices": [
              "1) 資料をコピーする",
              "2) 会議室を予約する",
              "3) 取引先に電話をかける",
              "4) 企画書を書き直す"
            ],
            "correct_answer_index": 2,
            "score": "1.00"
          }
        ]
      }
    }
  }
};

export const N2_MOCK_EXAM: JlptExam = {
  "id": 114,
  "level": "N2",
  "title": "JLPT N2 - Mock Test Trung-Cao Cấp",
  "year": 2025,
  "month": 7,
  "is_mock": true,
  "slug": "n2-mock-test-1",
  "sections": {
    "vocabulary": {
      "title": "Từ vựng (文字・語彙)",
      "timeLimit": 1800,
      "mondais": [
        {
          "id": "n2-m1",
          "title": "問題1 の言葉の読み方として最もよいものを、1・2・3・4から一つ選びなさい。",
          "format": "reading"
        }
      ],
      "questions": {
        "n2-m1": [
          {
            "id": 201,
            "mondai_id": "n2-m1",
            "question_text": "1. 最近の<u>景気</u>の動向を慎重に見極める必要がある。",
            "choices": [
              "1) けいき",
              "2) けいぎ",
              "3) きょうき",
              "4) きょうぎ"
            ],
            "correct_answer_index": 0,
            "score": "1.00"
          },
          {
            "id": 202,
            "mondai_id": "n2-m1",
            "question_text": "2. 両国の首相が会談し、共同声明を<u>発表</u>した。",
            "choices": [
              "1) はっぴょう",
              "2) はつぴょう",
              "3) はんぴょう",
              "4) はっぴょ"
            ],
            "correct_answer_index": 0,
            "score": "1.00"
          }
        ]
      }
    },
    "grammar_reading": {
      "title": "Ngữ pháp & Đọc hiểu (文法・読解)",
      "timeLimit": 6300,
      "mondais": [
        {
          "id": "n2-gr1",
          "title": "問題1 文法形式の判断",
          "format": "grammar"
        }
      ],
      "questions": {
        "n2-gr1": [
          {
            "id": 203,
            "mondai_id": "n2-gr1",
            "question_text": "1. 年をとる( )、体力の衰えを感じるようになった。",
            "choices": [
              "1) につれて",
              "2) に基づいて",
              "3) に際して",
              "4) を契機に"
            ],
            "correct_answer_index": 0,
            "score": "1.00"
          },
          {
            "id": 204,
            "mondai_id": "n2-gr1",
            "question_text": "2. 証拠が揃っている以上、事実を認め( )。",
            "choices": [
              "1) ざるを得ない",
              "2) わけにはいかない",
              "3) かねる",
              "4) に違いない"
            ],
            "correct_answer_index": 0,
            "score": "1.00"
          }
        ]
      }
    },
    "listening": {
      "title": "Nghe hiểu (聴解)",
      "timeLimit": 3000,
      "mondais": [
        {
          "id": "n2-l1",
          "title": "問題1 課題理解",
          "audio_url": "https://storage.googleapis.com/luyendejlpt.firebasestorage.app/listening/mondai-1831-audio-8ccb6419-6c53-43b7-bf98-b9c6dcd07955.mp3"
        }
      ],
      "questions": {
        "n2-l1": [
          {
            "id": 205,
            "mondai_id": "n2-l1",
            "question_text": "セミナーで講師が話しています。参加者はこの後何を準備しなければなりませんか。",
            "choices": [
              "1) アンケートの記入",
              "2) 名刺の交換",
              "3) グループワークのレジュメ作成",
              "4) 次回参加費の支払い"
            ],
            "correct_answer_index": 2,
            "score": "1.00"
          }
        ]
      }
    }
  }
};

export const N1_MOCK_EXAM: JlptExam = {
  "id": 115,
  "level": "N1",
  "title": "JLPT N1 - Mock Test Đỉnh Cao Cao Cấp",
  "year": 2025,
  "month": 7,
  "is_mock": true,
  "slug": "n1-mock-test-1",
  "sections": {
    "vocabulary": {
      "title": "Từ vựng (文字・語彙)",
      "timeLimit": 1800,
      "mondais": [
        {
          "id": "n1-m1",
          "title": "問題1 の言葉の読み方として最もよいものを、1・2・3・4から一つ選びなさい。",
          "format": "reading"
        }
      ],
      "questions": {
        "n1-m1": [
          {
            "id": 101,
            "mondai_id": "n1-m1",
            "question_text": "1. 計画の<u>概要</u>をプレゼンテーションで手短に説明した。",
            "choices": [
              "1) がいよう",
              "2) がいとう",
              "3) げいよう",
              "4) げいとう"
            ],
            "correct_answer_index": 0,
            "score": "1.00"
          },
          {
            "id": 102,
            "mondai_id": "n1-m1",
            "question_text": "2. 国際情勢の悪化に深い<u>懸念</u>を表明した。",
            "choices": [
              "1) けねん",
              "2) けんねん",
              "3) かんねん",
              "4) げねん"
            ],
            "correct_answer_index": 0,
            "score": "1.00"
          }
        ]
      }
    },
    "grammar_reading": {
      "title": "Ngữ pháp & Đọc hiểu (文法・読解)",
      "timeLimit": 6600,
      "mondais": [
        {
          "id": "n1-gr1",
          "title": "問題1 文法形式の判断 (Nghị luận & Bản xứ)",
          "format": "grammar"
        }
      ],
      "questions": {
        "n1-gr1": [
          {
            "id": 103,
            "mondai_id": "n1-gr1",
            "question_text": "1. 理由が何( )、暴力を正当化することはできない。",
            "choices": [
              "1) であれ",
              "2) に限らず",
              "3) を皮切りに",
              "4) と相まって"
            ],
            "correct_answer_index": 0,
            "score": "1.00"
          },
          {
            "id": 104,
            "mondai_id": "n1-gr1",
            "question_text": "2. 人命を預かる医師として、ある( )無責任な行為だ。",
            "choices": [
              "1) まじき",
              "2) べき",
              "3) ざる",
              "4) べからず"
            ],
            "correct_answer_index": 0,
            "score": "1.00"
          }
        ]
      }
    },
    "listening": {
      "title": "Nghe hiểu (聴解)",
      "timeLimit": 3300,
      "mondais": [
        {
          "id": "n1-l1",
          "title": "問題1 課題理解 (Tổng hợp & Nghị luận)",
          "audio_url": "https://storage.googleapis.com/luyendejlpt.firebasestorage.app/listening/mondai-1831-audio-8ccb6419-6c53-43b7-bf98-b9c6dcd07955.mp3"
        }
      ],
      "questions": {
        "n1-l1": [
          {
            "id": 105,
            "mondai_id": "n1-l1",
            "question_text": "大学のシンポジウムで2人の教授が議論しています。男の教授が提案している打開策は何ですか。",
            "choices": [
              "1) 予算の削減と人員の再配置",
              "2) 産学連携による新技術の実証実験",
              "3) 既存の法規制の抜本的な緩和",
              "4) 海外市場への全面的な撤退"
            ],
            "correct_answer_index": 1,
            "score": "1.00"
          }
        ]
      }
    }
  }
};

export const ALL_JLPT_EXAMS: Record<string, JlptExam> = {
  N5: N5_MOCK_EXAM,
  N4: N4_MOCK_EXAM,
  N3: N3_MOCK_EXAM,
  N2: N2_MOCK_EXAM,
  N1: N1_MOCK_EXAM,
};

export const JLPT_VOCAB_FREQUENCY: JlptVocabFrequency[] = [
  {
    "word": "先週",
    "reading": "せんしゅう",
    "meaning": "Tuần trước",
    "level": "N5",
    "frequency": 98
  },
  {
    "word": "毎晩",
    "reading": "まいばん",
    "meaning": "Mỗi tối, hàng đêm",
    "level": "N5",
    "frequency": 92
  },
  {
    "word": "アパート",
    "reading": "アパート",
    "meaning": "Căn hộ, chung cư",
    "level": "N5",
    "frequency": 88
  },
  {
    "word": "弾く",
    "reading": "ひく",
    "meaning": "Chơi (đàn guitar, piano)",
    "level": "N5",
    "frequency": 85
  },
  {
    "word": "入口",
    "reading": "いりぐち",
    "meaning": "Lối vào, cổng vào",
    "level": "N5",
    "frequency": 95
  },
  {
    "word": "出口",
    "reading": "でぐち",
    "meaning": "Lối ra, cửa thoát",
    "level": "N5",
    "frequency": 95
  },
  {
    "word": "交番",
    "reading": "こうばん",
    "meaning": "Đồn cảnh sát, bốt cảnh sát",
    "level": "N5",
    "frequency": 82
  },
  {
    "word": "準備",
    "reading": "じゅんび",
    "meaning": "Chuẩn bị",
    "level": "N4",
    "frequency": 96
  },
  {
    "word": "約束",
    "reading": "やくそく",
    "meaning": "Lời hứa, cuộc hẹn",
    "level": "N4",
    "frequency": 94
  },
  {
    "word": "複雑",
    "reading": "ふくざつ",
    "meaning": "Phức tạp",
    "level": "N3",
    "frequency": 91
  }
];

export const KANJI_RADICALS_214: KanjiRadical[] = [
  {
    "num": 1,
    "char": "一",
    "pinyin": "nhất",
    "meaning": "Một, duy nhất",
    "strokes": 1
  },
  {
    "num": 2,
    "char": "丨",
    "pinyin": "cổn",
    "meaning": "Nét sổ dọc",
    "strokes": 1
  },
  {
    "num": 3,
    "char": "丶",
    "pinyin": "chủ",
    "meaning": "Điểm, dấu chấm",
    "strokes": 1
  },
  {
    "num": 4,
    "char": "丿",
    "pinyin": "phiệt",
    "meaning": "Nét phẩy chéo qua trái",
    "strokes": 1
  },
  {
    "num": 5,
    "char": "乙",
    "pinyin": "ất",
    "meaning": "Vị trí thứ hai trong thiên can",
    "strokes": 1
  },
  {
    "num": 9,
    "char": "人 (亻)",
    "pinyin": "nhân",
    "meaning": "Con người (bộ nhân đứng)",
    "strokes": 2
  },
  {
    "num": 30,
    "char": "口",
    "pinyin": "khẩu",
    "meaning": "Cái miệng, lối ra vào",
    "strokes": 3
  },
  {
    "num": 85,
    "char": "水 (氵)",
    "pinyin": "thủy",
    "meaning": "Nước (bộ ba chấm thủy)",
    "strokes": 4
  },
  {
    "num": 86,
    "char": "火 (灬)",
    "pinyin": "hỏa",
    "meaning": "Lửa (bộ bốn chấm hỏa)",
    "strokes": 4
  },
  {
    "num": 140,
    "char": "艸 (艹)",
    "pinyin": "thảo",
    "meaning": "Cỏ cây hoa lá (bộ thảo đầu)",
    "strokes": 6
  }
];

