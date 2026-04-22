import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Star,
  Flag,
  Crown,
  FileText,
  Award,
  ChevronUp,
  ChevronDown,
  TrendingUp,
} from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer"; // Add this import

interface CasualtyData {
  category: string;
  france: string;
  vietnam: string;
}

interface ImageData {
  src: string;
  alt: string;
  caption: string;
}

const KetQuaPage: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGenevaImageIndex, setCurrentGenevaImageIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when the section enters view
    threshold: 0.2, // Trigger when 20% of the section is visible
  });
  const [animationKey, setAnimationKey] = useState(0); // State to force reset
  useEffect(() => {
    if (!inView) {
      setAnimationKey((prev) => prev + 1); // Increment key to reset CountUp
    }
  }, [inView]);
  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const memorialImages = [
    {
      src: "https://dienbientv.vn/dataimages/201907/original/images2789103_Ngh_a_trang_A1.jpg",
      title: "Nghĩa trang A1",
      description: "Nơi an nghỉ của các anh hùng liệt sĩ",
    },
    {
      src: "https://baodansinh.vn/file/oldimage/baodansinh/UserFiles/image/2014/5/anh12dien.jpg",
      title: "Nghĩa trang Him Lam",
      description: "Tưởng nhớ những người con Điện Biên",
    },
    {
      src: "https://image.baophapluat.vn/w840/Uploaded/2024/fsxcqjwpcx/2019_05_05/dien_bien_phu_qmpu.jpg",
      title: "Nghĩa trang Độc Lập",
      description: "Nơi yên nghỉ của các liệt sĩ vô danh",
    },
    {
      src: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2019/5/7/717636/Dien-Bien-6.jpg",
      title: "Lễ tưởng niệm",
      description: "Lãnh đạo Đảng, Nhà nước đến viếng",
    },
    {
      src: "https://baotintuc.vn/stores/news_dataimages/hungpv/052019/06/20/in_article/5403_6-16_Dien_Bien_Phu.jpg",
      title: "Nghĩa trang liệt sĩ",
      description: "Những ngôi mộ thiêng liêng",
    },
  ];

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + memorialImages.length) % memorialImages.length
    );
  };
  const images: ImageData[] = [
    {
      src: "https://hoinongdanhatinh.vn/uploads/news/2024_05/ham-do-cat.jpg",
      alt: "Lá cờ Việt Nam tung bay",
      caption: "Lá cờ quyết chiến quyết thắng tung bay trên đồi Điện Biên Phủ",
    },
    {
      src: "https://file3.qdnd.vn/data/images/0/2024/04/26/upload_2176/bk%201587_resize-1400x787.jpg",
      alt: "Tù binh Pháp ở Điện Biên Phủ",
      caption: "Tù binh Pháp bị bắt trong chiến dịch Điện Biên Phủ",
    },
    {
      src: "https://bizweb.dktcdn.net/100/006/093/files/tuong-dai-chien-thang-dien-bien-phu-1.jpg?v=1709521625245",
      alt: "Tượng đài kỷ niệm",
      caption: "Tượng đài kỷ niệm chiến thắng Điện Biên Phủ",
    },
    {
      src: "https://ttdn.vn/Uploads/Images/2024/3/30/3/99034328pmt9.jpg",
      alt: "Lịch sử Việt Nam",
      caption: "Di tích lịch sử chiến trường Điện Biên Phủ",
    },
  ];

  const genevaImages: ImageData[] = [
    {
      src: "https://hungyen.dcs.vn/ckfinder/userfiles/images/2ee00ada-95da-4943-b0cd-b4686720.jpg",
      alt: "Hội nghị Genève 1954",
      caption:
        "Đại biểu tại Hội nghị Genève 1954 thảo luận về hòa bình Đông Dương",
    },
    {
      src: "https://hungyen.dcs.vn/ckfinder/userfiles/images/7a8470c9-d9e4-427e-b5d1-c304997e.jpg",
      alt: "Ký kết Hiệp định Genève",
      caption: "Lễ ký kết Hiệp định Genève, chấm dứt chiến tranh Đông Dương",
    },
    {
      src: "https://file3.qdnd.vn/data/images/0/2022/05/02/tvkimgiang/hoi-nghi-gionevo.jpg",
      alt: "Bàn đàm phán Genève",
      caption: "Bàn đàm phán tại Hội nghị Genève 1954",
    },
  ];

  const nextImage = (): void => {
    setCurrentImageIndex((prev: number) => (prev + 1) % images.length);
  };

  const nextGenevaImage = (): void => {
    setCurrentGenevaImageIndex(
      (prev: number) => (prev + 1) % genevaImages.length
    );
  };

  const casualtyData: CasualtyData[] = [
    {
      category: "Tử trận",
      france: "1.747 - 2.293 người",
      vietnam: "4.020 chiến sĩ",
    },
    {
      category: "Bị thương",
      france: "5.240 - 6.650 người",
      vietnam: "9.118 chiến sĩ",
    },
    {
      category: "Mất tích",
      france: "1.729 người",
      vietnam: "792 chiến sĩ",
    },
    {
      category: "Bị bắt",
      france: "11.721 tù binh",
      vietnam: "-",
    },
    {
      category: "Tổng thiệt hại",
      france: "~16.200 binh sĩ",
      vietnam: "~13.930 chiến sĩ",
    },
  ];

  const achievements = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Buộc Pháp ký Hiệp định Giơ-ne-vơ",
      shortDesc: "Thất bại quân sự nặng nề khiến Pháp mất vị thế đàm phán",
      details: [
        "Trước thất bại quân sự nặng nề tại Điện Biên Phủ, Pháp đã hoàn toàn mất đi vị thế đàm phán mạnh mẽ",
        "Buộc phải chấp nhận các điều khoản có lợi cho Việt Nam trong đàm phán quốc tế",
        "Hiệp định Giơ-ne-vơ được ký kết vào ngày 21/7/1954, chính thức chấm dứt cuộc chiến tranh Đông Dương lần thứ nhất",
        "Đây là bước ngoặt quan trọng, đánh dấu sự sụp đổ của hệ thống thực dân Pháp tại Đông Dương",
      ],
      color: "red",
      date: "21/7/1954",
    },
    {
      icon: <Flag className="w-6 h-6" />,
      title: "Công nhận độc lập, chủ quyền và toàn vẹn lãnh thổ",
      shortDesc:
        "Chiến thắng ngoại giao vang dội của Việt Nam trên trường quốc tế",
      details: [
        "Hiệp định Giơ-ne-vơ là một chiến thắng ngoại giao vang dội, được cộng đồng quốc tế công nhận",
        "Chính thức công nhận độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam",
        "Đồng thời công nhận độc lập của Lào và Campuchia, góp phần ổn định khu vực Đông Nam Á",
        "Tạo tiền đề pháp lý quan trọng cho Việt Nam trong các hoạt động ngoại giao quốc tế",
        "Khẳng định quyền tự quyết của các dân tộc Đông Dương trước cộng đồng thế giới",
      ],
      color: "red",
      date: "Từ 1954",
    },
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Miền Bắc được hoàn toàn giải phóng",
      shortDesc: "Trở thành hậu phương vững chắc cho cuộc đấu tranh thống nhất",
      details: [
        "Theo Hiệp định, toàn bộ quân đội Pháp phải rút khỏi miền Bắc Việt Nam (phía Bắc vĩ tuyến 17)",
        "Khu vực này được hoàn toàn giải phóng, không còn sự hiện diện của thực dân Pháp",
        "Tạo điều kiện thuận lợi để xây dựng miền Bắc thành nhà nước xã hội chủ nghĩa độc lập, vững mạnh",
        "Miền Bắc trở thành hậu phương chiến lược, cơ sở cung cấp lực lượng và vật chất",
        "Đây là nguồn hỗ trợ quan trọng cho cuộc đấu tranh giải phóng miền Nam và thống nhất đất nước",
        "Tạo tiền đề vững chắc cho sự phát triển kinh tế, văn hóa và xã hội trong giai đoạn mới",
      ],
      color: "red",
      date: "1954-1975",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Tạo tiền đề thống nhất đất nước",
      shortDesc: "Nền tảng vững chắc cho cuộc đấu tranh giải phóng miền Nam",
      details: [
        "Chiến thắng Điện Biên Phủ tạo tiền đề vững chắc cho cuộc đấu tranh thống nhất đất nước",
        "Miền Bắc trở thành căn cứ địa cách mạng, nguồn cung cấp nhân lực và vật lực",
        "Kinh nghiệm quân sự và chính trị quý báu được áp dụng trong giai đoạn sau",
        "Tinh thần đấu tranh kiên cường được truyền lửa cho toàn dân tộc",
        "Uy tín quốc tế của Việt Nam được nâng cao, tạo thuận lợi trong đấu tranh ngoại giao",
      ],
      color: "red",
      date: "1954-1975",
    },
  ];

  return (
    <div
      className="min-h-screen max-w mx-auto  flex flex-col items-center text-center bg-cover bg-center bg-fixed font-sans"
      style={{
        backgroundImage: `url(https://dienbienphu-image.nhandan.vn/t1200/Uploaded/uncqrwpjw/chienthangdienbienphuttxvn.jpg)`,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Row 1: Victory Description and Điện Biên Phủ Image */}
        <section className="mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Victory Description */}
            <div className="space-y-6">
              <div className="border-l-4 border-red-600 pl-6 py-6">
                <h2
                  className="text-4xl md:text-5xl font-extrabold text-[#ffc107] mb-4 drop-shadow-md"
                  style={{
                    fontFamily: "var(--font-family-brand)",
                    color: "var(--gray-white, #fff)",
                    textShadow: "5px 5px 0 rgba(0,0,0,.15)",
                    fontSize: "100px",
                    fontWeight: 900,
                    lineHeight: "130%",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  Kết quả chiến dịch Điện Biên Phủ
                </h2>
                <p className="text-lg md:text-xl text-white font-medium drop-shadow-sm">
                  Chiến thắng "lừng lẫy năm châu, chấn động địa cầu."
                </p>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-white text-base md:text-lg leading-relaxed mb-4">
                  Ngày{" "}
                  <strong className="text-[#ffc107]">7 tháng 5 năm 1954</strong>
                  , lá cờ quyết chiến quyết thắng của quân đội nhân dân Việt Nam
                  đã tung bay trên nóc hầm Đờ Caxtơri, đánh dấu sự thất bại hoàn
                  toàn của Pháp.
                </p>
              </div>
            </div>

            {/* Right Column - Điện Biên Phủ Image */}
            <div>
              <div
                className="relative group cursor-pointer"
                onClick={nextImage}
              >
                <div className=" inset-0 bg-gradient-to-br from-red-600 to-yellow-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 shadow-xl"></div>
                <div className="relative bg-white p-5 rounded-3xl shadow-2xl">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={images[currentImageIndex].src}
                      alt={images[currentImageIndex].alt}
                      width={600}
                      height={650}
                      className="rounded-2xl object-cover w-full h-110 transition-all duration-500 hover:scale-105"
                    />
                    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {images.map((_, index) => (
                        <div
                          key={index}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentImageIndex
                              ? "bg-red-600 scale-125"
                              : "bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-center text-sm md:text-base text-gray-700 mt-4 font-semibold">
                    {images[currentImageIndex].caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Row 2: Geneva Image and Remaining Content */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Geneva Image */}
            <div>
              <div className=" group cursor-pointer" onClick={nextGenevaImage}>
                <div className="relative bg-white p-5 rounded-3xl shadow-2xl">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={genevaImages[currentGenevaImageIndex].src}
                      alt={genevaImages[currentGenevaImageIndex].alt}
                      width={600}
                      height={650}
                      className="rounded-2xl object-cover w-full h-100 transition-all duration-500 hover:scale-105"
                    />
                    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {genevaImages.map((_, index) => (
                        <div
                          key={index}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentGenevaImageIndex
                              ? "bg-green-600 scale-125"
                              : "bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-center text-sm md:text-base text-gray-700 mt-4 font-semibold">
                    {genevaImages[currentGenevaImageIndex].caption}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Remaining Content */}
            <div className="space-y-12">
              {/* Achievement Cards */}
              <div className="max-w-4xl mx-auto p-6">
                <div className="relative overflow-hidden">
                  <div className="max-w-6xl mx-auto">
                    <div className="space-y-6">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="group relative">
                          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
                            {/* Card header */}
                            <div>
                              <div className="bg-white/95 backdrop-blur-sm rounded-t-xl">
                                <div className="px-6 py-4">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                      <div
                                        className={`p-3 rounded-xl ${
                                          achievement.color === "red"
                                            ? "bg-gradient-to-br from-red-100 to-red-200 text-red-600"
                                            : achievement.color === "blue"
                                            ? "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600"
                                            : achievement.color === "emerald"
                                            ? "bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-600"
                                            : "bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600"
                                        }`}
                                      >
                                        {achievement.icon}
                                      </div>
                                      <div>
                                        <h3
                                          className="text-xl font-bold text-gray-800 mb-1"
                                          style={{
                                            fontFamily:
                                              "var(--font-family-brand)",

                                            color:
                                              "var(--gray-white, #000000ff)",
                                            // textShadow:
                                            //   "5px 5px 0 rgba(0,0,0,.15)",
                                            fontWeight: 800,
                                            lineHeight: "130%",
                                            // textTransform: "uppercase",
                                            // textAlign: "center",
                                          }}
                                        >
                                          {achievement.title}
                                        </h3>
                                        <div className="flex items-center space-x-3">
                                          <p className="text-gray-600">
                                            {achievement.shortDesc}
                                          </p>
                                          <span
                                            className={`text-xs px-2 py-1 rounded-full font-medium ${
                                              achievement.color === "red"
                                                ? "bg-red-100 text-red-700"
                                                : achievement.color === "blue"
                                                ? "bg-blue-100 text-blue-700"
                                                : achievement.color ===
                                                  "emerald"
                                                ? "bg-emerald-100 text-emerald-700"
                                                : "bg-purple-100 text-purple-700"
                                            }`}
                                          >
                                            {achievement.date}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <button
                                      onClick={() => toggleCard(index)}
                                      className={`p-2 rounded-full transition-colors duration-200 ${
                                        achievement.color === "red"
                                          ? "hover:bg-red-100 text-red-600"
                                          : achievement.color === "blue"
                                          ? "hover:bg-blue-100 text-blue-600"
                                          : achievement.color === "emerald"
                                          ? "hover:bg-emerald-100 text-emerald-600"
                                          : "hover:bg-purple-100 text-purple-600"
                                      }`}
                                    >
                                      {expandedCard === index ? (
                                        <ChevronUp className="w-5 h-5" />
                                      ) : (
                                        <ChevronDown className="w-5 h-5" />
                                      )}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Expandable content */}
                            <div
                              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                expandedCard === index
                                  ? "max-h-96 opacity-100"
                                  : "max-h-0 opacity-0"
                              }`}
                            >
                              <div className="px-6 py-6 border-t border-gray-100">
                                <div className="space-y-4">
                                  {achievement.details.map(
                                    (detail, detailIndex) => (
                                      <div
                                        key={detailIndex}
                                        className="flex items-start space-x-3"
                                      >
                                        <div
                                          className={`w-2 h-2 rounded-full bg-${achievement.color}-500 mt-2 flex-shrink-0`}
                                        ></div>
                                        <p className="text-gray-700 leading-relaxed">
                                          {detail}
                                        </p>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Card footer with decorative line */}
                            <div
                              className={`h-1 bg-gradient-to-r from-${achievement.color}-500 to-${achievement.color}-300`}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Casualty Comparison Section */}
        <section className="mb-16" ref={ref}>
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4 drop-shadow-lg"
              style={{
                fontFamily: "var(--font-family-brand)",
                color: "var(--gray-white, #ff0000ff)",
                textShadow: "5px 5px 0 rgba(0,0,0,.15)",
                fontSize: "50px",
                fontWeight: 900,
                lineHeight: "130%",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              Thiệt hại quân sự
            </h2>
            <p className="text-white/80 text-lg md:text-xl font-light">
              So sánh thiệt hại giữa hai bên trong chiến dịch
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-red-600 to-red-800 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-lg md:text-xl">
                      {/* Loại thiệt hại */}
                    </th>
                    <th className="px-6 py-4 text-center font-bold text-lg md:text-xl">
                      🇫🇷 Pháp
                    </th>
                    <th className="px-6 py-4 text-center font-bold text-lg md:text-xl">
                      🇻🇳 Việt Nam
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {casualtyData.map((item, index) => {
                    // Handle range values (e.g., "1.747 - 2.293") for France
                    const franceValue = item.france.includes("-")
                      ? item.france
                          .split(" - ")
                          .map((val) =>
                            parseInt(val.replace(/[^0-9]/g, "") || "0")
                          )
                      : [parseInt(item.france.replace(/[^0-9]/g, "") || "0")];
                    const vietnamValue = parseInt(
                      item.vietnam.replace(/[^0-9]/g, "") || "0"
                    );

                    return (
                      <tr
                        key={index}
                        className={`
                      border-b border-gray-100 transition-colors duration-200
                      ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      ${
                        item.category === "Tổng thiệt hại"
                          ? "font-bold bg-yellow-50"
                          : ""
                      }
                    `}
                      >
                        <td className="px-6 py-4 font-semibold text-gray-800 text-base md:text-lg">
                          {item.category}
                        </td>
                        <td className="px-6 py-4 text-center text-red-700 font-medium text-base md:text-lg">
                          {item.france === "-" ? (
                            "-"
                          ) : item.france.includes("-") ? (
                            inView ? (
                              <span key={`france-${index}-${animationKey}`}>
                                <CountUp
                                  end={franceValue[0]}
                                  duration={2}
                                  separator="."
                                />
                                {" - "}
                                <CountUp
                                  end={franceValue[1]}
                                  duration={2}
                                  separator="."
                                  suffix={
                                    item.france.includes("người")
                                      ? " người"
                                      : item.france.includes("tù binh")
                                      ? " tù binh"
                                      : item.france.includes("binh sĩ")
                                      ? " binh sĩ"
                                      : ""
                                  }
                                />
                              </span>
                            ) : (
                              item.france
                            )
                          ) : inView ? (
                            <span key={`france-${index}-${animationKey}`}>
                              <CountUp
                                end={franceValue[0]}
                                duration={2}
                                separator="."
                                suffix={
                                  item.france.includes("người")
                                    ? " người"
                                    : item.france.includes("tù binh")
                                    ? " tù binh"
                                    : item.france.includes("binh sĩ")
                                    ? " binh sĩ"
                                    : ""
                                }
                              />
                            </span>
                          ) : (
                            item.france
                          )}
                        </td>
                        <td className="px-6 py-4 text-center text-green-700 font-medium text-base md:text-lg">
                          {item.vietnam === "-" ? (
                            "-"
                          ) : inView ? (
                            <span key={`vietnam-${index}-${animationKey}`}>
                              <CountUp
                                end={vietnamValue}
                                duration={2}
                                separator="."
                                suffix={
                                  item.vietnam.includes("chiến sĩ")
                                    ? " chiến sĩ"
                                    : ""
                                }
                              />
                            </span>
                          ) : (
                            item.vietnam
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          {/* ... rest of the section remains unchanged */}
        </section>

        {/* Final Message */}
        {/* <div className="text-center bg-red-800 text-white py-16 rounded-3xl shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-extrabold text-yellow-300 mb-4 drop-shadow-lg">
            🌟 Di sản bất tử
          </h3>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed px-4">
            Chiến thắng Điện Biên Phủ không chỉ là chiến thắng quân sự mà còn là
            biểu tượng của ý chí kiên cường, trí tuệ và sức mạnh của dân tộc
            Việt Nam trước kẻ thù xâm lược. Đây là bài học vô giá về tinh thần
            độc lập, tự chủ và lòng yêu nước vĩ đại.
          </p>
        </div> */}
      </div>
      {/* Smooth Transition */}
      <div className="h-16 bg-gradient-to-b from-transparent  to-black/90"></div>
    </div>
  );
};

export default KetQuaPage;
