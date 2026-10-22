import React, { useState, useEffect, useRef } from 'react';
import {
  Trophy,
  Timer,
  Volume2,
  BookOpen,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Eye,
  EyeOff,
  ChevronRight,
  ArrowLeft,
  Flame,
  HelpCircle,
  Compass,
} from 'lucide-react';
import {
  ALL_JLPT_EXAMS,
  N5_MOCK_EXAM,
  JLPT_VOCAB_FREQUENCY,
  KANJI_RADICALS_214,
} from '../../data/jlptMockData';
import {
  JlptLevelCode,
  ExamSectionCode,
  JlptQuestion,
  JlptMondai,
} from '../../types/jlpt';

interface FlattenedQuestion extends JlptQuestion {
  mondaiTitle: string;
  mondaiPassage?: string | null;
  mondaiFormat?: string | null;
}

export const JlptExamHub: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<JlptLevelCode>('N5');
  const [subView, setSubView] = useState<'overview' | 'taking' | 'result'>('overview');
  const [currentSectionKey, setCurrentSectionKey] = useState<ExamSectionCode | 'quick_practice'>('vocabulary');
  const [currentQuestions, setCurrentQuestions] = useState<FlattenedQuestion[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [secondsRemaining, setSecondsRemaining] = useState<number>(0);
  const [isFuriganaVisible, setIsFuriganaVisible] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('furigana') !== 'hidden';
    }
    return true;
  });

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Toggle Furigana handler
  const handleToggleFurigana = () => {
    setIsFuriganaVisible((prev) => {
      const next = !prev;
      if (typeof window !== 'undefined') {
        localStorage.setItem('furigana', next ? 'visible' : 'hidden');
        if (next) {
          document.documentElement.classList.remove('hide-furigana');
        } else {
          document.documentElement.classList.add('hide-furigana');
        }
      }
      return next;
    });
  };

  // Sync Furigana on mount
  useEffect(() => {
    if (!isFuriganaVisible) {
      document.documentElement.classList.add('hide-furigana');
    } else {
      document.documentElement.classList.remove('hide-furigana');
    }
  }, [isFuriganaVisible]);

  // Start exam section
  const handleStartSection = (sectionKey: ExamSectionCode) => {
    setCurrentSectionKey(sectionKey);
    setUserAnswers({});
    const currentExam = ALL_JLPT_EXAMS[selectedLevel] || N5_MOCK_EXAM;
    const section = currentExam.sections[sectionKey];
    if (!section) return;

    const flattened: FlattenedQuestion[] = [];
    section.mondais.forEach((m) => {
      const qList = section.questions[m.id] || [];
      qList.forEach((q) => {
        flattened.push({
          ...q,
          mondaiTitle: m.title,
          mondaiPassage: m.passage,
          mondaiFormat: m.format,
        });
      });
    });

    setCurrentQuestions(flattened);
    setSecondsRemaining(section.timeLimit);
    setSubView('taking');
  };

  // Start quick practice (10 random questions)
  const handleStartQuickPractice = () => {
    setCurrentSectionKey('quick_practice');
    setUserAnswers({});

    const currentExam = ALL_JLPT_EXAMS[selectedLevel] || N5_MOCK_EXAM;
    const allQuestions: FlattenedQuestion[] = [];
    const vSection = currentExam.sections.vocabulary;
    if (vSection) {
      vSection.mondais.forEach((m) => {
        const qList = vSection.questions[m.id] || [];
        qList.forEach((q) => {
          allQuestions.push({
            ...q,
            mondaiTitle: m.title,
            mondaiPassage: m.passage,
            mondaiFormat: m.format,
          });
        });
      });
    }

    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    setCurrentQuestions(shuffled.slice(0, 10));
    setSecondsRemaining(300); // 5 mins
    setSubView('taking');
  };

  // Timer countdown
  useEffect(() => {
    if (subView === 'taking' && secondsRemaining > 0) {
      timerRef.current = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            alert('Hết giờ làm bài! Hệ thống tự động nộp bài và tính điểm.');
            setSubView('result');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [subView, secondsRemaining]);

  // Select an answer
  const handleSelectAnswer = (qId: number, cIdx: number) => {
    setUserAnswers((prev) => ({ ...prev, [qId]: cIdx }));
  };

  // Submit
  const handleSubmitExam = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (audioRef.current) audioRef.current.pause();
    setSubView('result');
  };

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Results calculation
  const totalQuestions = currentQuestions.length;
  let correctCount = 0;
  let wrongCount = 0;
  let skippedCount = 0;

  currentQuestions.forEach((q) => {
    const ans = userAnswers[q.id];
    if (ans === undefined) {
      skippedCount++;
    } else if (ans === q.correct_answer_index) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });

  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const isPassed = percentage >= 60;

  return (
    <div className="w-full space-y-6">
      {/* Top Banner & Furigana Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl text-white shadow-lg shadow-cyan-500/20">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black text-white">Ôn Thi JLPT Manten</h2>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                Bóc tách OnJLPT
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              Đề thi chuẩn format, đếm ngược thời gian và giải thích chi tiết từng câu hỏi.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Furigana Switcher Button */}
          <button
            onClick={handleToggleFurigana}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition border cursor-pointer ${
              isFuriganaVisible
                ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-400 shadow-sm'
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
            }`}
            title="Bật/Tắt phiên âm Furigana trên toàn bộ bài đọc"
          >
            {isFuriganaVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
            <span>Furigana: {isFuriganaVisible ? 'BẬT' : 'TẮT'}</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: OVERVIEW & EXAM SELECTOR */}
      {subView === 'overview' && (
        <div className="space-y-6">
          {/* Level Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {(['N5', 'N4', 'N3', 'N2', 'N1'] as JlptLevelCode[]).map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                  selectedLevel === lvl
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Cấp độ {lvl}
              </button>
            ))}
          </div>

          {/* Quick Drill Highlight */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-transparent border border-amber-500/20 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-amber-500/20 rounded-xl text-amber-400">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  Luyện tập nhanh 10 câu (5 phút)
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Rèn luyện phản xạ từ vựng và ngữ pháp ngẫu nhiên trước khi vào đề thi chính.
                </p>
              </div>
            </div>
            <button
              onClick={handleStartQuickPractice}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition cursor-pointer shadow-md shadow-amber-500/20"
            >
              ⚡ Bắt đầu luyện tập
            </button>
          </div>

          {/* 3 Main Sections of JLPT Exam */}
          {(() => {
            const currentExam = ALL_JLPT_EXAMS[selectedLevel] || N5_MOCK_EXAM;
            const vSec = currentExam.sections.vocabulary;
            const grSec = currentExam.sections.grammar_reading;
            const lSec = currentExam.sections.listening;

            const vCount = vSec ? Object.values(vSec.questions).reduce((acc, q) => acc + q.length, 0) : 0;
            const grCount = grSec ? Object.values(grSec.questions).reduce((acc, q) => acc + q.length, 0) : 0;
            const lCount = lSec ? Object.values(lSec.questions).reduce((acc, q) => acc + q.length, 0) : 0;

            return (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 1. Vocabulary */}
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 bg-cyan-500/10 text-cyan-500 rounded-xl font-bold">
                        📖 Từ vựng
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500">
                        {Math.round((vSec?.timeLimit || 1800) / 60)} phút · {vSec?.mondais.length || 0} Mondai
                      </span>
                    </div>
                    <h4 className="font-bold text-base text-slate-900 dark:text-white mb-1">
                      文字・語彙 (Từ vựng & Kanji {selectedLevel})
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                      Cách đọc Kanji, viết từ Hiragana sang Kanji, điền từ ngữ cảnh và tìm câu đồng nghĩa.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-semibold text-cyan-500">{vCount} câu hỏi</span>
                    <button
                      onClick={() => handleStartSection('vocabulary')}
                      className="px-3.5 py-1.5 rounded-lg bg-cyan-500 text-white font-bold text-xs hover:bg-cyan-600 transition cursor-pointer"
                    >
                      Làm bài →
                    </button>
                  </div>
                </div>

                {/* 2. Grammar & Reading */}
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 bg-emerald-500/10 text-emerald-500 rounded-xl font-bold">
                        ✍️ Ngữ pháp & Đọc
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500">
                        {Math.round((grSec?.timeLimit || 3600) / 60)} phút · {grSec?.mondais.length || 0} Mondai
                      </span>
                    </div>
                    <h4 className="font-bold text-base text-slate-900 dark:text-white mb-1">
                      文法・読解 (Ngữ pháp & Đoản/Trung văn {selectedLevel})
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                      Phân tích ngữ pháp câu, dấu sao sắp xếp câu, đọc hiểu đoạn văn và tra cứu biểu mẫu.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-semibold text-emerald-500">{grCount} câu hỏi</span>
                    <button
                      onClick={() => handleStartSection('grammar_reading')}
                      className="px-3.5 py-1.5 rounded-lg bg-emerald-500 text-white font-bold text-xs hover:bg-emerald-600 transition cursor-pointer"
                    >
                      Làm bài →
                    </button>
                  </div>
                </div>

                {/* 3. Listening */}
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 transition shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 bg-amber-500/10 text-amber-500 rounded-xl font-bold">
                        🎧 Nghe hiểu
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500">
                        {Math.round((lSec?.timeLimit || 2400) / 60)} phút · {lSec?.mondais.length || 0} Mondai
                      </span>
                    </div>
                    <h4 className="font-bold text-base text-slate-900 dark:text-white mb-1">
                      聴解 (Nghe hiểu & Phản xạ {selectedLevel})
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                      Nghe hiểu nhiệm vụ, điểm cốt lõi, diễn đạt tranh vẽ và phản xạ ứng đáp tức thì.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-semibold text-amber-500">{lCount} câu hỏi</span>
                    <button
                      onClick={() => handleStartSection('listening')}
                      className="px-3.5 py-1.5 rounded-lg bg-amber-500 text-white font-bold text-xs hover:bg-amber-600 transition cursor-pointer"
                    >
                      Làm bài →
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Vocabulary Frequency & 214 Radicals Knowledge Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
            {/* Vocab Frequency Table */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                <Flame className="w-4 h-4 text-rose-500" />
                <span>Từ vựng ra đề nhiều nhất (Bóc tách JLPT)</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400">
                      <th className="py-2">Từ vựng</th>
                      <th className="py-2">Cách đọc</th>
                      <th className="py-2">Ý nghĩa</th>
                      <th className="py-2 text-right">Tần suất</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                    {JLPT_VOCAB_FREQUENCY.map((v, i) => (
                      <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                        <td className="py-2.5 font-bold text-slate-900 dark:text-white">{v.word}</td>
                        <td className="py-2.5 text-cyan-500">{v.reading}</td>
                        <td className="py-2.5 text-slate-600 dark:text-slate-300">{v.meaning}</td>
                        <td className="py-2.5 text-right font-black text-rose-500">{v.frequency}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 214 Radicals Grid */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                <Compass className="w-4 h-4 text-cyan-500" />
                <span>Bộ thủ Kanji cơ bản (Gốc tạo chữ)</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {KANJI_RADICALS_214.map((r, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-center space-y-0.5"
                  >
                    <div className="text-xl font-black text-cyan-500">{r.char}</div>
                    <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200">
                      Bộ {r.pinyin} ({r.strokes} nét)
                    </div>
                    <div className="text-[10px] text-slate-500">{r.meaning}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: EXAM TAKING MODE */}
      {subView === 'taking' && (
        <div className="space-y-6">
          {/* Sticky Header with Timer & Submit */}
          <div className="sticky top-2 z-30 p-3 sm:p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-800 shadow-xl flex items-center justify-between gap-4">
            <button
              onClick={() => {
                if (confirm('Bạn có muốn thoát bài thi? Kết quả hiện tại sẽ bị hủy.')) {
                  setSubView('overview');
                }
              }}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-400 hover:text-white transition cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Thoát</span>
            </button>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono font-bold text-sm sm:text-base">
                <Timer className="w-4 h-4" />
                <span>{formatTime(secondsRemaining)}</span>
              </div>
              <div className="text-xs text-slate-400 hidden sm:block">
                Đã làm: <b className="text-white">{Object.keys(userAnswers).length}</b>/{totalQuestions}
              </div>
            </div>

            <button
              onClick={handleSubmitExam}
              className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-xs sm:text-sm rounded-xl transition cursor-pointer shadow-md shadow-emerald-500/20"
            >
              Nộp bài thi ✓
            </button>
          </div>

          {/* Audio Player for Listening section */}
          {currentSectionKey === 'listening' && (
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-md flex items-center gap-4">
              <div className="p-3 bg-amber-500/20 text-amber-400 rounded-xl">
                <Volume2 className="w-6 h-6" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="text-xs font-bold text-slate-300">
                  Băng nghe JLPT chính thức (Google Cloud Storage)
                </div>
                <audio
                  ref={audioRef}
                  controls
                  className="w-full h-8"
                  src="https://storage.googleapis.com/luyendejlpt.firebasestorage.app/listening/mondai-1831-audio-8ccb6419-6c53-43b7-bf98-b9c6dcd07955.mp3"
                />
              </div>
            </div>
          )}

          {/* Questions Render List */}
          <div className="space-y-6">
            {currentQuestions.map((q, idx) => (
              <div
                key={q.id}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
              >
                {/* Mondai Header if first question of mondai or standalone */}
                {(idx === 0 || currentQuestions[idx - 1].mondaiTitle !== q.mondaiTitle) && (
                  <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div
                      className="text-sm font-black text-cyan-600 dark:text-cyan-400"
                      dangerouslySetInnerHTML={{ __html: q.mondaiTitle }}
                    />
                    {q.mondaiPassage && (
                      <div
                        className="mt-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs sm:text-sm leading-relaxed border-l-4 border-cyan-500 text-slate-700 dark:text-slate-200 whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{ __html: q.mondaiPassage }}
                      />
                    )}
                  </div>
                )}

                {/* Question Text */}
                <div
                  className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: q.question_text }}
                />

                {/* Optional Image */}
                {q.image_url && (
                  <div className="p-2 bg-white rounded-xl inline-block border border-slate-200">
                    <img
                      src={q.image_url}
                      alt="Question Illustration"
                      className="max-h-60 rounded-lg object-contain"
                    />
                  </div>
                )}

                {/* 4 Choices */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {q.choices.map((choice, cIdx) => {
                    const isSelected = userAnswers[q.id] === cIdx;
                    return (
                      <button
                        key={cIdx}
                        onClick={() => handleSelectAnswer(q.id, cIdx)}
                        className={`text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition flex items-center gap-3 cursor-pointer ${
                          isSelected
                            ? 'bg-gradient-to-r from-cyan-500/15 to-blue-600/15 border-cyan-500 text-cyan-600 dark:text-cyan-300 font-bold shadow-sm'
                            : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold border ${
                            isSelected
                              ? 'bg-cyan-500 text-white border-cyan-500'
                              : 'border-slate-400 text-slate-400'
                          }`}
                        >
                          {cIdx + 1}
                        </div>
                        <span dangerouslySetInnerHTML={{ __html: choice }} />
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end pt-4">
            <button
              onClick={handleSubmitExam}
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-sm rounded-xl transition cursor-pointer shadow-lg shadow-emerald-500/25"
            >
              Hoàn thành bài thi và Chấm điểm →
            </button>
          </div>
        </div>
      )}

      {/* VIEW 3: RESULT & REVIEW MODE */}
      {subView === 'result' && (
        <div className="space-y-6">
          {/* Score Header */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl text-center max-w-xl mx-auto space-y-4">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                isPassed
                  ? 'bg-emerald-500/20 text-emerald-500 border border-emerald-500/30'
                  : 'bg-rose-500/20 text-rose-500 border border-rose-500/30'
              }`}
            >
              {isPassed ? '🎉 ĐẠT CHUẨN JLPT (PASS)' : '⚠️ CẦN ÔN TẬP THÊM (FAIL)'}
            </span>

            <div className="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white">
              <span className={isPassed ? 'text-emerald-500' : 'text-rose-500'}>{correctCount}</span>
              <span className="text-2xl text-slate-400">/{totalQuestions}</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Điểm đạt được: <b>{percentage}%</b> · Số câu đúng: <b>{correctCount}</b> · Sai:{' '}
              <b>{wrongCount}</b> · Bỏ qua: <b>{skippedCount}</b>
            </p>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setSubView('overview')}
                className="px-4 py-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold rounded-xl transition cursor-pointer"
              >
                ← Về trang đề thi
              </button>
              <button
                onClick={() => {
                  if (currentSectionKey === 'quick_practice') {
                    handleStartQuickPractice();
                  } else {
                    handleStartSection(currentSectionKey as ExamSectionCode);
                  }
                }}
                className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs sm:text-sm font-bold rounded-xl transition cursor-pointer shadow-md shadow-cyan-500/20"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Làm lại phần này</span>
              </button>
            </div>
          </div>

          {/* Detailed Question Review */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cyan-500" />
              <span>Chi tiết bài làm & Phân tích đáp án</span>
            </h3>

            {currentQuestions.map((q, idx) => {
              const selected = userAnswers[q.id];
              const isCorrect = selected === q.correct_answer_index;
              const isSkipped = selected === undefined;

              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-2xl border text-xs sm:text-sm space-y-3 ${
                    isCorrect
                      ? 'bg-emerald-500/5 border-emerald-500/30'
                      : isSkipped
                      ? 'bg-amber-500/5 border-amber-500/30'
                      : 'bg-rose-500/5 border-rose-500/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-500">Câu số {idx + 1}</span>
                    <span
                      className={`text-xs font-black uppercase flex items-center gap-1 ${
                        isCorrect
                          ? 'text-emerald-500'
                          : isSkipped
                          ? 'text-amber-500'
                          : 'text-rose-500'
                      }`}
                    >
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" /> Đúng
                        </>
                      ) : isSkipped ? (
                        <>
                          <AlertCircle className="w-4 h-4" /> Bỏ qua
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4" /> Sai
                        </>
                      )}
                    </span>
                  </div>

                  <div
                    className="font-bold text-slate-900 dark:text-white"
                    dangerouslySetInnerHTML={{ __html: q.question_text }}
                  />

                  {q.image_url && (
                    <img
                      src={q.image_url}
                      alt="Question Image"
                      className="max-h-40 rounded-lg object-contain bg-white p-1 border"
                    />
                  )}

                  <div className="space-y-1.5 pt-1">
                    {q.choices.map((c, cIdx) => {
                      const isUserChoice = selected === cIdx;
                      const isCorrectChoice = q.correct_answer_index === cIdx;

                      let rowClass = 'bg-slate-100 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300';
                      if (isCorrectChoice) {
                        rowClass = 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-500/40';
                      } else if (isUserChoice && !isCorrect) {
                        rowClass = 'bg-rose-500/20 text-rose-700 dark:text-rose-300 font-bold border border-rose-500/40';
                      }

                      return (
                        <div
                          key={cIdx}
                          className={`p-2.5 rounded-lg flex items-center justify-between ${rowClass}`}
                        >
                          <span dangerouslySetInnerHTML={{ __html: c }} />
                          {isCorrectChoice && <span className="text-[11px]">✓ Đáp án đúng</span>}
                          {isUserChoice && !isCorrect && (
                            <span className="text-[11px]">✗ Bạn đã chọn</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
