import React, { useEffect, useState } from "react";
import Results from "./Results";

const quizData = [
  {
    question: "Vì sao lập trình viên không ra ngoài trời nắng?",
    options: [
      "Vì ánh sáng làm chói màn hình",
      "Vì sợ bug mọc thêm",
      "Vì thiếu vitamin D",
      "Vì đang chờ code compile xong",
    ],
    answer: "Vì ánh sáng làm chói màn hình",
  },
  {
    question: "Khi code chạy được ngay lần đầu, lập trình viên thường làm gì?",
    options: [
      "Ăn mừng như vừa trúng số",
      "Nghi ngờ bản thân",
      "Chạy lại để kiểm tra có phải mơ không",
      "Cả 3 đáp án trên",
    ],
    answer: "Cả 3 đáp án trên",
  },
  {
    question: "Tại sao bug lại thích ẩn vào lúc demo?",
    options: [
      "Vì bug biết chọn thời điểm kịch tính",
      "Vì lập trình viên quên feed cho nó",
      "Vì đó là định mệnh",
      "Vì demo là nơi bug tỏa sáng",
    ],
    answer: "Vì demo là nơi bug tỏa sáng",
  },
  {
    question: "Điều gì xảy ra khi lập trình viên ngủ ít hơn 3 tiếng?",
    options: [
      "Code biến thành thơ",
      "IDE tự đóng lại vì thương hại",
      "Tự nghĩ mình là AI",
      "Gõ nhầm biến thành 'coffe' thay vì 'coffee'",
    ],
    answer: "Gõ nhầm biến thành 'coffe' thay vì 'coffee'",
  },
  {
    question: "Vì sao biến toàn cục (global variable) thường bị ghét?",
    options: [
      "Vì nó thích xen vào chuyện người khác",
      "Vì nó chiếm nhiều RAM",
      "Vì nó hay gây drama với các biến khác",
      "Vì nó không bao giờ chịu ở yên một chỗ",
    ],
    answer: "Vì nó hay gây drama với các biến khác",
  },
  {
    question: "Nếu bug là người, nó sẽ là ai?",
    options: [
      "Bạn thân luôn xuất hiện không đúng lúc",
      "Người yêu cũ khó quên",
      "Cấp trên luôn yêu cầu fix ngay",
      "Người bạn tưởng đã block rồi nhưng vẫn inbox",
    ],
    answer: "Người yêu cũ khó quên",
  },
  {
    question: "Lý do thật sự khiến lập trình viên dùng Dark Mode là gì?",
    options: [
      "Cho ngầu như hacker",
      "Giảm mỏi mắt",
      "Tiết kiệm pin",
      "Để không thấy bug rõ quá",
    ],
    answer: "Để không thấy bug rõ quá",
  },
  {
    question: "‘console.log()’ thật ra dùng để làm gì?",
    options: [
      "In thông tin ra console",
      "Thủ thuật tâm lý giúp lập trình viên bình tĩnh",
      "Cách nói chuyện giữa con người và máy tính",
      "Tạo cảm giác mình đang kiểm soát được tình hình",
    ],
    answer: "Thủ thuật tâm lý giúp lập trình viên bình tĩnh",
  },
  {
    question: "Khi code không chạy, bước đầu tiên bạn nên làm là gì?",
    options: [
      "Đổ lỗi cho IDE",
      "Restart máy",
      "Thêm console.log() khắp nơi",
      "Nhìn màn hình 5 phút không nói gì",
    ],
    answer: "Thêm console.log() khắp nơi",
  },
  {
    question: "Tại sao lập trình viên thường không có người yêu?",
    options: [
      "Vì họ đang ở trong mối quan hệ phức tạp với bug",
      "Vì họ yêu cú pháp hơn con người",
      "Vì họ chưa fix xong lỗi trong trái tim",
      "Cả 3 đáp án đều đúng",
    ],
    answer: "Cả 3 đáp án đều đúng",
  },
  {
    question: "Câu nói nào khiến lập trình viên sợ nhất?",
    options: [
      "'Anh ơi, code anh chạy được trên máy em mà...'",
      "'Mai demo nhé!'",
      "'Sếp vừa đổi yêu cầu một chút thôi'",
      "'Sao web chưa load xong?'",
    ],
    answer: "'Sếp vừa đổi yêu cầu một chút thôi'",
  },
  {
    question: "Cách nhanh nhất để debug một dự án lớn là gì?",
    options: [
      "Cầu nguyện",
      "Tắt mở lại IDE",
      "Giả vờ bận để người khác fix",
      "Viết lại từ đầu (rồi lại bug tiếp)",
    ],
    answer: "Cầu nguyện",
  },
];

const Quiz = () => {
  const [optionSelected, setOptionSelected] = useState("");

  const [userAnswers, setUserAnswers] = useState(
    Array.from({ length: quizData.length })
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [isQuizEnded, setIsQuizEnded] = useState(false);

  const [score, setScore] = useState(0);

  const handleSelectedOption = (option, index) => {
    // tính điểm
    if (option === quizData[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }

    setOptionSelected(option);

    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = index;
    setUserAnswers(newUserAnswers);
  };

  const goNext = () => {
    if (currentQuestion === quizData.length - 1) {
      setIsQuizEnded(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setIsQuizEnded(false);
    setOptionSelected("");
    setScore(0);
    setUserAnswers(Array.from({ length: quizData.length }));
  };

  const rewatchQuiz = () => {
    setCurrentQuestion(0);
    setIsQuizEnded(false);
  };

  useEffect(() => {
    const answer = Number(userAnswers[currentQuestion]);
    const pastOptionSelected = quizData[currentQuestion].options[answer];

    if (answer !== undefined) {
      setOptionSelected(pastOptionSelected);
    } else {
      setOptionSelected("");
    }
  }, [currentQuestion, userAnswers]);

  if (isQuizEnded) {
    return (
      <Results
        score={score}
        totalQuestionNum={quizData.length}
        restartQuiz={restartQuiz}
        rewatchQuiz={rewatchQuiz}
      />
    );
  }

  return (
    <div>
      <h2>Câu {currentQuestion + 1}</h2>
      <p className="question">{quizData[currentQuestion].question}</p>

      {quizData[currentQuestion].options.map((option, index) => (
        <button
          key={option}
          className={`option ${optionSelected === option ? "selected" : ""}`}
          disabled={!!optionSelected && optionSelected !== option}
          onClick={() => handleSelectedOption(option, index)}
        >
          {option}
        </button>
      ))}

      {optionSelected ? (
        optionSelected === quizData[currentQuestion].answer ? (
          <p className="correct-answer">Câu trả lời của bạn chính xác</p>
        ) : (
          <p className="incorrect-answer">Câu trả lời của bạn chưa chính xác</p>
        )
      ) : (
        ""
      )}

      <div className="nav-buttons">
        <button onClick={goBack} disabled={currentQuestion === 0}>
          Quay Lại
        </button>
        <button onClick={goNext} disabled={!optionSelected}>
          {currentQuestion === quizData.length - 1
            ? "Hoàn Thành Quiz"
            : "Kế Tiếp"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
